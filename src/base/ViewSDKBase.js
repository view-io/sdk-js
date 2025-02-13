import superagent from 'superagent';
import { GenExceptionHandlersInstance } from '../exception/GenericExceptionHandlers';
import { LoggerInstance } from '../utils/Logger';
import { SeverityEnum } from '../enums/SeverityEnum';
import ApiErrorResponse from '../models/ApiErrorResponse';
import Serializer from '../utils/Serializer';

/**
 * ViewSdk Base service.
 * @module base/ViewSdkBase
 * @version 0.1.0
 */
export default class ViewSdkBase {
  logResponses = false;
  /**
   * @constructor
   * @param {string} tenantGuid
   * @param {string} accessKey
   * @param {string} endpoint
   */
  constructor(tenantGuid, accessKey, endpoint) {
    if (!endpoint) {
      GenExceptionHandlersInstance.ArgumentNullException('endpoint');
    }

    this.tenantGuid = tenantGuid;
    this.accessKey = accessKey;
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default http://localhost
     */
    this.endpoint = endpoint.replace(/\/+$/, '');

    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {
      // 'User-Agent': 'OpenAPI-Generator/0.1.0/Javascript',
      Authorization: `Bearer ${this.accessKey}`,
    };

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;

    /*
     * Used to save and return cookies in a node.js (non-browser) setting,
     * if this.enableCookies is set to true.
     */
    if (typeof window === 'undefined') {
      this.agent = new superagent.agent();
    }
  }

  /**
   * Create an object via PUT request to the specified URL.
   *
   * @template T
   * @param {string} url - The URL to send the PUT request to.
   * @param {T} obj - The object to send in the request body.
   * @param {Class} Model - Modal to deserialize on
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or null if the request fails.
   * @throws {Error} If the URL or object is null or empty.
   */
  create = (url, obj, Model, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }
    if (!obj) {
      GenExceptionHandlersInstance.ArgumentNullException('obj');
    }
    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const jsonPayload = JSON.stringify(obj);
      // Prepare the PUT request using superagent
      const request = superagent('PUT', url) // use PUT here as per c# flow
        .set(this.defaultHeaders)
        .set('Content-Type', 'application/json')
        .timeout(this.timeout)
        .send(jsonPayload); // Send JSON data in the request body

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );

            // Return parsed JSON response
            // resolve(response.body);
            // Returns parsed JSON response in the given Modal
            resolve(Serializer.deserializeJson(response.text, Model));
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };

  /**
   * Check if data exists from the given URL with optional cancellation support using superagent's abort method.
   *
   * @template T
   * @param {string} url - The URL to request data from.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
   * @throws {Error} If the URL is null or empty.
   */
  exists = (url, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const request = superagent('HEAD', url).set(this.defaultHeaders).timeout(this.timeout);

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          // if (response.ok) {
          if (response.status >= 200 && response.status <= 299) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            // Return parsed JSON response
            // resolve(response.body);
            resolve('true');
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            // reject(null);
            resolve('false');
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            resolve('false');
            // reject(apiErrorResponse);
          } else {
            // reject(null);
            resolve('false');
          }
        });
    });
  };

  /**
   * Update an object via PUT request to the specified URL.
   *
   * @template T
   * @param {string} url - The URL to send the PUT request to.
   * @param {T} obj - The object to send in the request body.
   * @param {Class} Model - Modal to deserialize on
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or null if the request fails.
   * @throws {Error} If the URL or object is null or empty.
   */
  update = (url, obj, Model, cancelToken, token) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }
    if (!obj) {
      GenExceptionHandlersInstance.ArgumentNullException('obj');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const jsonPayload = JSON.stringify(obj);
      // Prepare the PUT request using superagent
      const request = superagent('PUT', url)
        .set(this.defaultHeaders)
        .set('Content-Type', 'application/json')
        .timeout(this.timeout)
        .send(jsonPayload); // Send JSON data in the request body

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      if (token) {
        request.set('x-token', token);
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );

            // Return parsed JSON response
            // resolve(response.body);
            // Returns parsed JSON response in the given Modal
            resolve(Serializer.deserializeJson(response.text, Model));
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };

  /**
   * Retrieve single data from the given URL with optional cancellation support using superagent's abort method.
   *
   * @template T
   * @param {string} url - The URL to request data from.
   * @param {Class} Model - Modal to deserialize on
   * @param {Object} [headers] - Additional headers for the request.
   * @param {string} [headers.token] - headers token for authorization.
   * @param {string} [headers.Range] - headers range for the request.
   * @param {string} [headers.email] - headers email for the request.
   * @param {{}} [cancelToken] - Optional headers with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
   * @throws {Error} If the URL is null or empty.
   */
  retrieve = (url, Model, cancelToken, headers) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const request = superagent('GET', url)
        .set(Object.assign({}, this.defaultHeaders, headers || {}))
        .timeout(this.timeout);

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            // Returns parsed JSON response in the given Modal
            if (!Model) {
              resolve(response.text);
            } else {
              resolve(Serializer.deserializeJson(response.text, Model));
            }
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };

  retrieveRaw = (url, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const request = superagent('GET', url).set(this.defaultHeaders).timeout(this.timeout);

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );

            // Return the raw response text (string) instead of deserializing it
            resolve(response.text);
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }

          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };

  /**
   * Retrieve all data from the given URL with optional cancellation support using superagent's abort method.
   *
   * @template T
   * @param {string} url - The URL to request data from.
   * @param {Class} Model - Modal to deserialize on
   * @param {{}} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
   * @throws {Error} If the URL is null or empty.
   */
  retrieveMany = (url, Model, cancelToken, token) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }
    if (!Model) {
      GenExceptionHandlersInstance.ArgumentNullException('Model Class');
    }

    return new Promise((resolve, reject) => {
      const request = superagent('GET', url).set(this.defaultHeaders).timeout(this.timeout);

      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      if (token) {
        request.set('x-token', token);
      }

      request
        .then((response) => {
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );

            // Handle potential array or single object response
            let responseData = JSON.parse(response.text);
            if (!Array.isArray(responseData)) {
              responseData = [responseData]; // Wrap single object in an array
            }

            // Deserialize each item in the array into the Model class
            const deserializedData = responseData.map((item) => {
              const instance = new Model(item);
              return instance;
            });
            resolve(deserializedData); // Return the deserialized data
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }

          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };

  // /**
  //  * Retrieve all data from the given URL with optional cancellation support using superagent's abort method.
  //  *
  //  * @template T
  //  * @param {string} url - The URL to request data from.
  //  * @param {Class} Model - Modal to deserialize on
  //  * @param {{}} [cancelToken] - Optional object with an `abort` method to cancel the request.
  //  * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
  //  * @throws {Error} If the URL is null or empty.
  //  */
  // retrieveMany = (url, Model, cancelToken) => {
  //   if (!url) {
  //     GenExceptionHandlersInstance.ArgumentNullException('url');
  //   }
  //   if (!Model) {
  //     GenExceptionHandlersInstance.ArgumentNullException('Modal Class');
  //   }

  //   return new Promise((resolve, reject) => {
  //     // Prepare the request using the shorthand method for GET
  //     const request = superagent('GET', url).set(this.defaultHeaders).timeout(this.timeout);

  //     // If a cancelToken is provided, attach the abort method
  //     if (cancelToken) {
  //       cancelToken.abort = () => {
  //         request.abort();
  //         LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
  //       };
  //     }

  //     // Send the request and handle the promise chain
  //     request
  //       .then((response) => {
  //         // Log the response if needed
  //         if (this.logResponses) {
  //           LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
  //         }

  //         // Handle successful response (status codes 200-299)
  //         if (response.ok) {
  //           LoggerInstance.log(
  //             SeverityEnum.Debug,
  //             `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
  //           );

  //           // Return parsed JSON response
  //           resolve(Serializer.deserializeJson(response.text, Model));
  //         } else {
  //           LoggerInstance.log(
  //             SeverityEnum.Warn,
  //             `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
  //           );
  //           reject(null);
  //         }
  //       })
  //       .catch((error) => {
  //         if (error?.timeout) {
  //           LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
  //         } else {
  //           LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
  //         }
  //         const errorResponse = error?.response?.body || null;
  //         if (errorResponse && errorResponse?.Error) {
  //           const apiErrorResponse = new ApiErrorResponse(
  //             errorResponse?.Error,
  //             errorResponse?.Context,
  //             errorResponse?.Message
  //           );
  //           reject(apiErrorResponse);
  //         } else {
  //           reject(null);
  //         }
  //       });
  //   });
  // };

  /**
   * Delete single data from the given URL with optional cancellation support using superagent's abort method.
   *
   * @template T
   * @param {string} url - The URL to delete data from.
   * @param {Class} Model - Modal to deserialize on
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
   * @throws {Error} If the URL is null or empty.
   */
  delete = (url, Model, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const request = superagent('DELETE', url).set(this.defaultHeaders).timeout(this.timeout);

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );

            // Return parsed JSON response
            // resolve(response.body);
            // Returns parsed JSON response in the given Modal
            resolve(Serializer.deserializeJson(response.text, Model));
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };
  /**
   * Delete single data from the given URL with optional cancellation support using superagent's abort method.
   *
   * @template T
   * @param {string} url - The URL to delete data from.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @param {string} [token] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
   * @throws {Error} If the URL is null or empty.
   */
  deleteRaw = (url, cancelToken, token) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const request = superagent('DELETE', url).set(this.defaultHeaders).timeout(this.timeout);

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      if (token) {
        request.set('x-token', token);
      }
      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );

            // Return parsed JSON response
            // resolve(response.body);
            // Returns parsed JSON response in the given Modal
            resolve(response.text);
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };
  /**
   * Delete single data from the given URL with optional cancellation support using superagent's abort method.
   *
   * @template T
   * @param {string} url - The URL to delete data from.
   * @param {T} obj - The object to send in the request body.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
   * @throws {Error} If the URL is null or empty.
   */
  deleteWithPayload = (url, obj, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const jsonPayload = JSON.stringify(obj);
      // Prepare the request using the shorthand method for GET
      const request = superagent('DELETE', url).set(this.defaultHeaders).timeout(this.timeout).send(jsonPayload);

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            resolve('true');
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject('false');
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            reject('false');
          } else {
            reject('false');
          }
        });
    });
  };

  /**
   * Create an object via POST request to the specified URL.
   *
   * @template T
   * @param {string} url - The URL to send the PUT request to.
   * @param {T} obj - The object to send in the request body.
   * @param {Class} Model - Modal to deserialize on
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or null if the request fails.
   * @throws {Error} If the URL or object is null or empty.
   */
  post = (url, obj, Model, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }
    if (!obj) {
      GenExceptionHandlersInstance.ArgumentNullException('obj');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const jsonPayload = JSON.stringify(obj);
      // Prepare the PUT request using superagent
      const request = superagent('POST', url) // use PUT here as per c# flow
        .set(this.defaultHeaders)
        .set('Content-Type', 'application/json')
        .timeout(this.timeout)
        .send(jsonPayload); // Send JSON data in the request body

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );

            // Return parsed JSON response
            // resolve(response.body);
            // Returns parsed JSON response in the given Modal
            resolve(Serializer.deserializeJson(response.text, Model));
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };

  /**
   * Create an object via POST request to the specified URL.
   *
   * @template T
   * @param {string} url - The URL to send the POST request to.
   * @param {T} obj - The object to send in the request body.
   * @param {Class} Model - Class to deserialize the response body into.
   * @param {string} contentType - The content type of the request (e.g., 'application/json').
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or an `ApiErrorResponse` if the request fails.
   * @throws {Error} If the URL or object is null or empty.
   */
  postContentType = (url, obj, Model, contentType, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }
    if (!obj) {
      GenExceptionHandlersInstance.ArgumentNullException('obj');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for POST
      const jsonPayload = JSON.stringify(obj);
      // Prepare the POST request using superagent
      const request = superagent('POST', url)
        .set(this.defaultHeaders)
        .set('Content-Type', contentType)
        .timeout(this.timeout)
        .send(jsonPayload); // Send JSON data in the request body

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );

            // Return parsed JSON response in the given Model
            resolve(Serializer.deserializeJson(response.text, Model));
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };

  /**
   * Create an object via POST request to the specified URL.
   *
   * @template T
   * @param {string} url - The URL to send the POST request to.
   * @param {T} obj - The object to send in the request body.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<object|null|ApiErrorResponse>} The raw response data from the API or an error response.
   * @throws {Error} If the URL or object is null or empty.
   */
  createRaw = (url, obj, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }
    if (!obj) {
      GenExceptionHandlersInstance.ArgumentNullException('obj');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for POST
      const jsonPayload = JSON.stringify(obj);

      // Prepare the POST request using superagent
      const request = superagent('POST', url)
        .set(this.defaultHeaders)
        .set('Content-Type', 'application/json')
        .timeout(this.timeout)
        .send(jsonPayload); // Send JSON data in the request body

      // If a cancelToken is provided, attach the abort method
      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // Send the request and handle the promise chain
      request
        .then((response) => {
          // Log the response if needed
          if (this.logResponses) {
            LoggerInstance.log(SeverityEnum.Debug, `response (status ${response.status}): \n${response.text}`);
          }

          // Handle successful response (status codes 200-299)
          if (response.ok) {
            LoggerInstance.log(
              SeverityEnum.Debug,
              `Success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );

            // Return the raw response body (no deserialization)
            resolve(response.body); // Return raw API response data (no deserialization)
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
            reject(null);
          }
        })
        .catch((error) => {
          if (error?.timeout) {
            LoggerInstance.log(SeverityEnum.Warn, `Request to ${url} timed out`);
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}: ${error.message}`);
          }
          const errorResponse = error?.response?.body || null;
          if (errorResponse && errorResponse?.Error) {
            const apiErrorResponse = new ApiErrorResponse(
              errorResponse?.Error,
              errorResponse?.Context,
              errorResponse?.Message
            );
            reject(apiErrorResponse);
          } else {
            reject(error.message ? error.message : null);
          }
        });
    });
  };
}
