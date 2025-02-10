import superagent from 'superagent';
import { GenExceptionHandlersInstance } from '../../exception/GenericExcerptionHandelrs';
import { LoggerInstance } from '../../utils/Logger';
import { SeverityEnum } from '../../enums/SeverityEnum';
import ApiErrorResponse from '../../models/ApiErrorResponse';
import Serializer from '../../utils/Serializer';
import { EmbeddingsGeneratorEnum } from '../../enums/EmbeddingsGeneratorEnum';
import Semaphore from '../../utils/Semaphore';

/**
 * Embeddings SDK base class.
 * @module base/EmbeddingsSdkBase
 * @version 0.1.0
 */
export default class EmbeddingsSdkBase {
  logResponses = false;
  /**
   * Constructs a new EmbeddingsSdkBase.
   * @alias module:base/EmbeddingsSdkBase
   * @class
   * @param {EmbeddingsGeneratorEnum} generator - The embeddings generator.
   * @param {string} endpoint - The endpoint URL.
   * @param {string} apiKey - The API key.
   * @param {number} [batchSize=8] - The maximum number of chunks to submit in a processing request.
   * @param {number} [maxParallelTasks=16] - The maximum number of parallel tasks.
   * @param {number} [maxRetries=3] - The maximum number of retries.
   * @param {number} [maxFailures=3] - The maximum number of failures before aborting.
   * @param {function} [logger=null] - The logger function.
   */
  constructor(
    generator,
    endpoint,
    apiKey,
    batchSize = 8,
    maxParallelTasks = 16,
    maxRetries = 3,
    maxFailures = 3,
    logger = null
  ) {
    this.Generator = generator || EmbeddingsGeneratorEnum.LCProxy;
    this.Endpoint = endpoint;
    this.ApiKey = apiKey;
    this.BatchSize = batchSize;
    this.MaxParallelTasks = maxParallelTasks;
    this.MaxRetries = maxRetries;
    this.MaxFailures = maxFailures;
    this.Logger = logger || null;

    this._Semaphore = new Semaphore(this.MaxParallelTasks); // Semaphore for concurrency control
    this._Serializer = new Serializer();
  }

  /**
   * Dispose of resources.
   */
  dispose() {
    this._Serializer = null;
  }

  /**
   * Validate connectivity.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<boolean>} A promise resolving to a boolean indicating connectivity status.
   */
  async validateConnectivity(token) {
    throw new Error("Method 'validateConnectivity' should be implemented.");
  }

  /**
   * Process semantic cells and generate embeddings.
   * @param {Array[]} cells - The semantic cells to process.
   * @param {string} model - The model to use.
   * @param {number} [timeoutMs=60000] - The timeout in milliseconds.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<Array[]>} A promise resolving to a list of semantic cells with embeddings.
   */
  async processSemanticCells(cells, model, timeoutMs = 60000, token) {
    throw new Error("Method 'processSemanticCells' should be implemented.");
  }

  /**
   * List available models.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<string[]>} A promise resolving to a list of model names.
   */
  async listModels(token) {
    throw new Error("Method 'listModels' should be implemented.");
  }

  /**
   * Load a model.
   * @param {string} model - The model name.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<boolean>} A promise resolving to a boolean indicating success or failure.
   */
  async loadModel(model, token) {
    throw new Error("Method 'loadModel' should be implemented.");
  }

  /**
   * Load multiple models.
   * @param {string[]} models - The list of model names.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<boolean>} A promise resolving to a boolean indicating success or failure.
   */
  async loadModels(models, token) {
    throw new Error("Method 'loadModels' should be implemented.");
  }

  /**
   * Delete a model.
   * @param {string} name - The model name.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<boolean>} A promise resolving to a boolean indicating success or failure.
   */
  async deleteModel(name, token) {
    throw new Error("Method 'deleteModel' should be implemented.");
  }

  /**
   * Build a list of semantic chunks from a hierarchy of semantic cells.
   * @param {SemanticCell[]} cells - The semantic cells that form a hierarchical structure. Each cell can contain chunks and potentially child cells.
   * @param {string} cells[].GUID - Unique identifier for the semantic cell (automatically generated if not provided).
   * @param {string} [cells[].MD5Hash] - MD5 hash of the content in the semantic cell.
   * @param {string} [cells[].SHA1Hash] - SHA1 hash of the content in the semantic cell.
   * @param {string} [cells[].SHA256Hash] - SHA256 hash of the content in the semantic cell.
   * @param {number} [cells[].Position] - The position of the semantic cell within the document or context.
   * @param {number} [cells[].Length] - The length of the semantic cell content.
   * @param {Array<SemanticChunk>} [cells[].Chunks] - A list of semantic chunks contained within the semantic cell.
   * @param {Array<SemanticCell>} [cells[].Children] - Child semantic cells contained within the semantic cell, forming a hierarchy.
   * @returns {SemanticChunk[]} A list of semantic chunks.
   */
  buildSemanticChunkList(cells) {
    const chunks = [];
    if (!cells || cells.length < 1) return chunks;

    cells.forEach((cell) => {
      const childChunks = this._extractChunks(cell);
      if (childChunks && childChunks.length > 0) chunks.push(...childChunks);
    });

    return chunks;
  }

  /**
   * Merge embeddings data from maps into semantic chunks.
   * @param {SemanticChunk[]} chunks - The chunks to update.
   *   Each chunk is an object representing a segment of content with associated metadata.
   *   @param {string} chunks.GUID - Unique identifier for the chunk (automatically generated).
   *   @param {string|null} chunks.MD5Hash - MD5 hash of the content (default is null).
   *   @param {string|null} chunks.SHA1Hash - SHA1 hash of the content (default is null).
   *   @param {string|null} chunks.SHA256Hash - SHA256 hash of the content (default is null).
   *   @param {number} chunks.Position - The position of the chunk (must be >= 0).
   *   @param {number} chunks.Start - The start position of the chunk (must be >= 0).
   *   @param {number} chunks.End - The end position of the chunk (must be >= 0).
   *   @param {number} chunks.Length - The length of the content (calculated automatically).
   *   @param {string} chunks.Content - The content of the chunk.
   *   @param {Array<number>} [chunks.Embeddings=[]] - List of float values representing embeddings.
   *     If no embeddings are provided, it defaults to an empty array.
   * @param {EmbeddingsMap[]} maps - The embeddings maps.
   *   Each map is an object that contains content and embeddings.
   *   @param {string|null} maps.Content - The content associated with the embeddings (default is null).
   *   @param {number[]} maps.Embeddings - The embeddings array (default is an empty array).
   *     It must be an array of numbers, and if not provided, it defaults to an empty array.
   * @param {EmbeddingsMap[]} maps - The embeddings maps.
   */
  mergeEmbeddingsMaps(chunks, maps) {
    maps.forEach((map) => {
      if (chunks.some((chunk) => chunk.Content === map.Content)) {
        const updatedChunks = chunks.filter((chunk) => chunk.Content === map.Content);
        updatedChunks.forEach((chunk) => (chunk.Embeddings = map.Embeddings));
      }
    });
  }

  // Private method to extract chunks from a semantic cell
  _extractChunks(cell) {
    const chunks = [];
    if (!cell) return chunks;

    if (cell.Children && cell.Children.length > 0) {
      cell.Children.forEach((child) => {
        const childChunks = this._extractChunks(child);
        if (childChunks && childChunks.length > 0) chunks.push(...childChunks);
      });
    }

    if (cell.Chunks && cell.Chunks.length > 0) {
      chunks.push(...cell.Chunks);
    }

    return chunks;
  }

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
      const request = superagent('HEAD', url).timeout(this.timeout);

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
   * Create an object via POST request to the specified URL.
   *
   * @template T
   * @param {string} url - The URL to send the PUT request to.
   * @param {T} obj - The object to send in the request body.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or null if the request fails.
   * @throws {Error} If the URL or object is null or empty.
   */
  post = (url, obj, cancelToken) => {
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
        .set('Content-Type', 'application/json')
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

            resolve('true');
          } else {
            LoggerInstance.log(
              SeverityEnum.Warn,
              `Non-success reported from ${url}: ${response.status}, ${response.header['content-length']} bytes`
            );
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
          } else {
            resolve('false');
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
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or null if the request fails.
   * @throws {Error} If the URL or object is null or empty.
   */
  postJson = (url, obj, cancelToken = null) => {
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
      const request = superagent('POST', url)
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
            // resolve(Serializer.deserializeJson(response.text, Model));
            resolve(response);
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
            reject(null);
          }
        });
    });
  };
  retrieve = (url, Model, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }

    if (!Model) {
      GenExceptionHandlersInstance.ArgumentNullException('Modal Class');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const request = superagent('GET', url).timeout(this.timeout);

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
            reject(null);
          }
        });
    });
  };
  delete = (url, Model, cancelToken) => {
    if (!url) {
      GenExceptionHandlersInstance.ArgumentNullException('url');
    }

    return new Promise((resolve, reject) => {
      // Prepare the request using the shorthand method for GET
      const request = superagent('DELETE', url).timeout(this.timeout);

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
            reject(null);
          }
        });
    });
  };
}
