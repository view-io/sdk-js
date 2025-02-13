import { Writable } from 'stream';
import superagent from 'superagent';
import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';
import ViewSdkBase from '../ViewSDKBase';
import { LoggerInstance } from '../../utils/Logger';
import { SeverityEnum } from '../../enums/SeverityEnum';

export default class ViewAssistantSdk extends ViewSdkBase {
  /**
   * Constructs a new ViewAssistantSdk.
   * @alias module:base/ViewAssistantSdk
   * @class
   * @param {string} tenantGuid
   * @param {string} accessKey
   * @param {string} endpoint
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
  }
  /**
   * @constructor
   * @param {string} guid
   * @param {CancellationToken} token
   * @param {string} endpoint
   */

  /**
   * AssistantRagRequest request.
   *
   * @param {Object} ragRequest - Information about the RAG request.
   * @param {string} ragRequest.PromptPrefix - The prompt prefix for the assistant.
   * @param {string} ragRequest.Question - The question being asked.
   * @param {number} ragRequest.MaxResults - The maximum number of documents to retrieve (between 1 and 100).
   * @param {number} ragRequest.Temperature - The temperature value between 0 and 1.
   * @param {number} ragRequest.TopP - The top P value for sampling (between 0 and 1).
   * @param {number} ragRequest.MaxTokens - The maximum number of tokens to generate (between 1 and 16384).
   * @param {string} ragRequest.GenerationModel - The generation model and tag (default: 'llama3.1:latest').
   * @param {string} ragRequest.GenerationProvider - The generation provider (default: 'ollama').
   * @param {string} ragRequest.OllamaHostname - The hostname for the Ollama service (default: 'localhost').
   * @param {number} ragRequest.OllamaPort - The TCP port for the Ollama service (default: 11434).
   * @param {string} ragRequest.VectorDatabaseHostname - The hostname for the vector database (default: 'localhost').
   * @param {number} ragRequest.VectorDatabasePort - The port for the vector database (default: 5432).
   * @param {string} ragRequest.VectorDatabaseName - The name of the vector database (default: 'vectors').
   * @param {string} ragRequest.VectorDatabaseUser - The user for the vector database (default: 'postgres').
   * @param {string} ragRequest.VectorDatabasePassword - The password for the vector database.
   * @param {boolean} ragRequest.Stream - Whether streaming is enabled (default: true).
   * @param {boolean} ragRequest.ContextSort - Whether contextual sorting is enabled (default: true).
   * @param {number} ragRequest.ContextScope - The number of neighboring data elements to retrieve (between 1 and 16).
   * @param {boolean} ragRequest.Rerank - Whether re-ranking is enabled (default: true).
   * @param {number} ragRequest.RerankTopK - The number of top chunks or documents to re-rank (between 1 and 16).
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   */
  async processRag(ragRequest, onToken = () => {}, cancelToken) {
    if (ragRequest == null) {
      GenExceptionHandlersInstance.ArgumentNullException('ragRequest');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/rag`;
    const json = JSON.stringify(ragRequest);

    if (this.logRequests) {
      LoggerInstance.log(SeverityEnum.Debug, `${this.header} request body: \n${json}`);
    }

    try {
      const request = superagent
        .post(url)
        .send(ragRequest)
        .set('Content-Type', 'application/json')
        .on('error', (error) => {
          LoggerInstance.log(SeverityEnum.Warn, `${this.header}Error processing RAG request:`, error);
        })
        .pipe(this._createStreamParser(onToken));

      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
    } catch (error) {
      LoggerInstance.log(SeverityEnum.error, `${this.header} Error processing RAG request:`, error);
      return []; // Return an empty array in case of error
    }
  }

  /**
   * Process a chat request.
   *
   * @param {Object} chatRequest - Information about the assistant chat request.
   * @param {string} chatRequest.Question - The question being asked.
   * @param {number} chatRequest.Temperature - The temperature value between 0 and 1.
   * @param {number} chatRequest.MaxTokens - The maximum number of tokens to generate (between 1 and 16384).
   * @param {string} chatRequest.GenerationModel - The model tag for generation (default: 'llama3.1:latest').
   * @param {string} chatRequest.GenerationProvider - The provider for generation (default: 'ollama').
   * @param {string} chatRequest.OllamaHostname - The hostname for Ollama (default: 'localhost').
   * @param {number} chatRequest.OllamaPort - The port for Ollama (default: 11434).
   * @param {boolean} chatRequest.Stream - Whether streaming is enabled (default: true).*
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   */
  processChat(chatRequest, onToken = () => {}, cancelToken = null) {
    if (!chatRequest) throw new Error('chatRequest cannot be null');

    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/assistant/chat`;
    const json = JSON.stringify(chatRequest);

    if (this.logRequests) {
      LoggerInstance.log(SeverityEnum.Debug, `${this.header} request body: \n${json}`);
    }

    try {
      const request = superagent
        .post(url)
        .send(chatRequest)
        .set('Content-Type', 'application/json')
        .on('error', (error) => {
          LoggerInstance.log(SeverityEnum.Warn, `${this.header} Error processing chat request:`, error);
        })
        .pipe(this._createStreamParser(onToken));

      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Error, `${this.header} Error processing RAG request:`, error);
      return []; // Return an empty array in case of error
    }
  }
  /**
   * Create a writable stream to parse SSE data.
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @returns {Writable} - A writable stream for parsing.
   */
  _createStreamParser(onToken) {
    return new Writable({
      write: (chunk, encoding, callback) => {
        const dataString = chunk.toString();
        const lines = dataString.split('\n');
        lines.forEach((line) => {
          if (line.startsWith('data:')) {
            const jsonString = line.substring(5).trim();
            const token = this._extractToken(jsonString);
            if (token) {
              onToken(token);
            }
          }
        });
        callback();
      },
      final(callback) {
        callback(); // Ensure stream is finalized properly
      },
    });
  }

  /**
   * Extract a token from JSON string.
   * @param {string} json - The JSON string.
   * @returns {string|null} - The extracted token or null if not found.
   */
  _extractToken(json) {
    try {
      const obj = JSON.parse(json);
      return obj.token || null;
    } catch (error) {
      return null;
    }
  }

  /**
   *Retrieve a model.
   *
   * @param {Object} model - Information about the assistant chat request.
   * @param {string} model.ModelName - The question being asked.
   * @param {number} model.OllamaHostname - The temperature value between 0 and 1.
   * @param {number} model.OllamaPort - The maximum number of tokens to generate (between 1 and 16384).
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   */
  retrieveModel(model, onToken = () => {}, cancelToken = null) {
    if (!model) throw new Error('model cannot be null');

    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/assistant/models/pull`;
    const json = JSON.stringify(model);

    if (this.logRequests) {
      LoggerInstance.log(SeverityEnum.Debug, `${this.header} request body: \n${json}`);
    }

    try {
      const request = superagent
        .post(url)
        .send(model)
        .set('Content-Type', 'application/json')
        .on('error', (error) => {
          LoggerInstance.log(SeverityEnum.Warn, `${this.header} Error processing chat request:`, error);
        })
        .pipe(this._createStreamParser(onToken));

      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Error, `${this.header} Error processing RAG request:`, error);
      return []; // Return an empty array in case of error
    }
  }

  /**
   *Delete a model.
   *
   * @param {Object} model - Information about the assistant chat request.
   * @param {string} model.ModelName - The name of the model.
   * @param {number} model.OllamaHostname - The temperature value between 0 and 1.
   * @param {number} model.OllamaPort - The maximum number of tokens to generate (between 1 and 16384).
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   */
  deleteModel(model, onToken = () => {}, cancelToken = null) {
    if (!model) throw new Error('model cannot be null');

    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/assistant/models/pull`;
    const json = JSON.stringify(model);

    if (this.logRequests) {
      LoggerInstance.log(SeverityEnum.Debug, `${this.header} request body: \n${json}`);
    }

    try {
      const request = superagent
        .post(url)
        .send(model)
        .set('Content-Type', 'application/json')
        .on('error', (error) => {
          LoggerInstance.log(SeverityEnum.Warn, `${this.header} Error processing chat request:`, error);
        })
        .pipe(this._createStreamParser(onToken));

      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Error, `${this.header} Error processing RAG request:`, error);
      return []; // Return an empty array in case of error
    }
  }

  /**
   *Retrieve model list.
   *
   * @param {Object} model - Information about the assistant chat request.
   * @param {number} model.OllamaHostname - The temperature value between 0 and 1.
   * @param {number} model.OllamaPort - The maximum number of tokens to generate (between 1 and 16384).
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   */
  retrieveModelList(model, onToken = () => {}, cancelToken = null) {
    if (!model) throw new Error('model cannot be null');

    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/assistant/models/pull`;
    const json = JSON.stringify(model);

    if (this.logRequests) {
      LoggerInstance.log(SeverityEnum.Debug, `${this.header} request body: \n${json}`);
    }

    try {
      const request = superagent
        .post(url)
        .send(model)
        .set('Content-Type', 'application/json')
        .on('error', (error) => {
          LoggerInstance.log(SeverityEnum.Warn, `${this.header} Error processing chat request:`, error);
        })
        .pipe(this._createStreamParser(onToken));

      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Error, `${this.header} Error processing RAG request:`, error);
      return []; // Return an empty array in case of error
    }
  }
}
