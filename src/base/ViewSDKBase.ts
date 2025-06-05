import superagent from 'superagent';
import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import Logger from '../utils/Logger';
import { SeverityEnum } from '../enums/SeverityEnum';
import { ApiErrorResponse, MethodError } from '../types';
import Serializer from '../utils/Serializer';
import { SdkConfiguration } from './SdkConfiguration';

const DEFAULT_ERROR_MESSAGE = 'Something went wrong.';

/**
 * ViewSdk Base service.
 * @module base/ViewSdkBase
 * @version 0.1.0
 */
export default class ViewSdkBase {
  protected logger: Logger;
  protected config: SdkConfiguration;
  /**
   * Creates an instance of SdkBase.
   * @param {SdkConfiguration} config - The SDK configuration.
   * @throws {Error} Throws an error if the config is null.
   */
  constructor(config: SdkConfiguration) {
    if (!config) {
      GenericExceptionHandlers.ArgumentNullException('config');
    }
    this.config = config;
    this.logger = new Logger(this.config);
  }

  /**
   * Logs a message with a severity level.
   * @param {string} sev - The severity level (e.g., SeverityEnum.Debug, 'warn').
   * @param {string} msg - The message to log.
   */
  protected log(sev: SeverityEnum, msg: string) {
    if (!msg) return;
    this.logger.log(sev, this.config.header + msg);
  }

  /**
   * Create an object via PUT request to the specified URL.
   *
   * @param {string} url - The URL to send the PUT request to.
   * @param {object} [obj] - The object to send in the request body.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T>} The created object as the response or null if the request fails.
   * @throws {MethodError} If the URL or object is null or empty.
   */
  create = <T>(url: string, obj: object, cancelToken: AbortController): Promise<T> => {
    if (!url) {
      GenericExceptionHandlers.ArgumentNullException('url');
    }
    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const jsonPayload = obj ? JSON.stringify(obj) : '';
      // Prepare the PUT request using superagent
      const request = superagent('PUT', url) // use PUT here as per c# flow
        .set(this.config.defaultHeaders)
        .set('Content-Type', 'application/json')
        .timeout(this.config.timeoutMs)
        .send(obj ? jsonPayload : undefined); // Send JSON data in the request body

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          this.logger.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          this.logger.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            this.logger.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            resolve(Serializer.deserializeJson(response.text));
          } else {
            this.logger.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(new Error(DEFAULT_ERROR_MESSAGE));
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            this.logger.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            this.logger.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            reject(errorResponse as ApiErrorResponse);
          } else {
            reject(error.message ? error.message : DEFAULT_ERROR_MESSAGE);
          }
        });
    });
  };

  /**
   * Check if data exists from the given URL with optional cancellation support using superagent's abort method.
   *
   * @template T
   * @param {string} url - The URL to request data from.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} The parsed JSON data from the response or null if the request fails.
   * @throws {MethodError} If the URL is null or empty.
   */
  exists = (url: string, cancelToken: AbortController): Promise<boolean> => {
    if (!url) {
      GenericExceptionHandlers.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const request = superagent('HEAD', url).set(this.config.defaultHeaders).timeout(this.config.timeoutMs);

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          this.logger.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          this.logger.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);

          // Handle successful response (status codes 200-299)
          // if (response.ok) {
          if (response.status >= 200 && response.status <= 299) {
            this.logger.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            // Return parsed JSON response
            // resolve(response.body);
            resolve(true);
          } else {
            this.logger.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            // reject(null);
            reject(new Error(DEFAULT_ERROR_MESSAGE));
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            this.logger.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            this.logger.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;

          if (errorResponse && errorResponse?.Error) {
            if (errorResponse?.StatusCode === 404) {
              resolve(false);
            } else {
              reject(errorResponse as ApiErrorResponse);
            }
          } else {
            reject(error?.message ? error?.message : DEFAULT_ERROR_MESSAGE);
          }
        });
    });
  };

  /**
   * Update an object via PUT request to the specified URL.
   *
   * @param {string} url - The URL to send the PUT request to.
   * @param {object} obj - The object to send in the request body.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @param {Object} [headers] - Additional headers for the request.
   * @returns {Promise<T>} The created object as the response or null if the request fails.
   * @throws {MethodError} If the URL or object is null or empty.
   */
  update = <T>(url: string, obj: object | string, cancelToken?: AbortController, headers?: any): Promise<T> => {
    if (!url) {
      GenericExceptionHandlers.ArgumentNullException('url');
    }
    if (!obj) {
      GenericExceptionHandlers.ArgumentNullException('obj');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const jsonPayload = JSON.stringify(obj);
      // Prepare the PUT request using superagent
      const request = superagent('PUT', url)
        .set({
          ...this.config.defaultHeaders,
          ...headers,
        })
        .set('Content-Type', 'application/json')
        .timeout(this.config.timeoutMs)
        .send(jsonPayload); // Send JSON data in the request body

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          this.logger.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          this.logger.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            this.logger.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            resolve(Serializer.deserializeJson(response.text));
          } else {
            this.logger.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(new Error(DEFAULT_ERROR_MESSAGE));
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            this.logger.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            this.logger.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            reject(errorResponse as ApiErrorResponse);
          } else {
            reject(error.message ? error.message : DEFAULT_ERROR_MESSAGE);
          }
        });
    });
  };

  /**
   * Retrieve single data from the given URL with optional cancellation support using superagent's abort method.
   *
   * @param {string} url - The URL to request data from.
   * @param {AbortController} [cancelToken] - Optional headers with an `abort` method to cancel the request.
   * @param {Object} [headers] - Additional headers for the request.
   * @returns {Promise<T>} The parsed JSON data from the response or null if the request fails.
   * @throws {MethodError} If the URL is null or empty.
   */
  retrieve = <T>(url: string, cancelToken?: AbortController, headers?: any): Promise<T> => {
    if (!url) {
      GenericExceptionHandlers.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const request = superagent('GET', url)
        .set(Object.assign({}, this.config.defaultHeaders, headers || {}))
        .timeout(this.config.timeoutMs);

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          this.logger.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          this.logger.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            this.logger.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            resolve(Serializer.deserializeJson(response.text));
          } else {
            this.logger.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(new Error(DEFAULT_ERROR_MESSAGE));
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            this.logger.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            this.logger.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            reject(errorResponse as ApiErrorResponse);
          } else {
            reject(error.message ? error.message : DEFAULT_ERROR_MESSAGE);
          }
        });
    });
  };

  /**
   * Delete single data from the given URL with optional cancellation support using superagent's abort method.
   *
   * @param {string} url - The URL to delete data from.
   * @param {object} [obj] - Optional object with an `abort` method to cancel the request.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @param {object} [headers] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} The parsed JSON data from the response or null if the request fails.
   * @throws {MethodError} If the URL is null or empty.
   */
  delete = (url: string, obj?: object, cancelToken?: AbortController, headers?: any): Promise<boolean> => {
    if (!url) {
      GenericExceptionHandlers.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      const jsonPayload = obj ? JSON.stringify(obj) : undefined;

      // Prepare the request using the shorthand method for GET
      const request = superagent('DELETE', url)
        .set({
          ...this.config.defaultHeaders,
          ...headers,
        })
        .timeout(this.config.timeoutMs)
        .send(jsonPayload);

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          this.logger.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          this.logger.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            this.logger.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            resolve(true);
          } else {
            this.logger.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(new Error(DEFAULT_ERROR_MESSAGE));
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            this.logger.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            this.logger.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            reject(errorResponse as ApiErrorResponse);
          } else {
            reject(error.message ? error.message : DEFAULT_ERROR_MESSAGE);
          }
        });
    });
  };

  /**
   * Put create method
   * @param {string} url - The URL to create data from.
   * @param {object} obj - The object to send in the request body.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @param {object} [headers] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<T>} The parsed JSON data from the response or null if the request fails.
   * @throws {MethodError} If the URL is null or empty.
   */
  postCreate = <T>(url: string, obj: any, cancelToken: AbortController, headers?: any): Promise<T> => {
    if (!url) {
      GenericExceptionHandlers.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      const jsonPayload = obj ? JSON.stringify(obj) : undefined;

      const request = superagent('POST', url)
        .set({
          ...this.config.defaultHeaders,
          ...headers,
        })
        .set('Content-Type', 'application/json')
        .timeout(this.config.timeoutMs)
        .send(jsonPayload);

      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          this.logger.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      request
        .then((response) => {
          this.logger.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);

          if (response.ok) {
            this.logger.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            resolve(Serializer.deserializeJson(response.text));
          } else {
            this.logger.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(new Error(DEFAULT_ERROR_MESSAGE));
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            this.logger.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            this.logger.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            reject(errorResponse as ApiErrorResponse);
          } else {
            reject(error.message ? error.message : DEFAULT_ERROR_MESSAGE);
          }
        });
    });
  };
}
