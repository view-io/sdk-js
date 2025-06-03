import { Writable } from 'stream';
import superagent from 'superagent';
import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';
import ViewSdkBase from '../ViewSDKBase';
import { LoggerInstance } from '../../utils/Logger';
import { SeverityEnum } from '../../enums/SeverityEnum';
import AssistantConfigList from '../../models/AssistantConfigList ';
import AssistantConfig from '../../models/AssistantConfig';
import AssistantChatResponse from '../../models/AssistantChatReponse';
import ChatThread from '../../models/ChatThread';
import ChatThreadList from '../../models/ChatThreads';

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

  //region Chat
  /**
   * AssistantRagRequest request.
   * @param {Object} ragRequest - Configuration object for query and generation.
   * @param {string} ragRequest.Question - The input question to process.
   * @param {string} ragRequest.EmbeddingModel - The model used for embedding.
   * @param {number} ragRequest.MaxResults - Maximum number of results to return.
   * @param {string} ragRequest.VectorDatabaseName - Name of the vector database.
   * @param {string} ragRequest.VectorDatabaseTable - Table name in the vector database.
   * @param {string} ragRequest.VectorDatabaseHostname - Hostname of the vector database.
   * @param {number} ragRequest.VectorDatabasePort - Port number of the vector database.
   * @param {string} ragRequest.VectorDatabaseUser - Username for the vector database.
   * @param {string} ragRequest.VectorDatabasePassword - Password for the vector database.
   * @param {string} ragRequest.GenerationProvider - The LLM generation provider (e.g., "ollama").
   * @param {string} ragRequest.GenerationApiKey - API key for the generation provider.
   * @param {string} ragRequest.GenerationModel - Model used for response generation.
   * @param {string} ragRequest.HuggingFaceApiKey - API key for Hugging Face (if used).
   * @param {number} ragRequest.Temperature - Temperature setting for randomness in generation.
   * @param {number} ragRequest.MaxTokens - Maximum number of tokens to generate.
   * @param {boolean} ragRequest.Stream - Whether to stream the generation output.
   * @param {string} ragRequest.OllamaHostname - Hostname for the Ollama service.
   * @param {number} ragRequest.OllamaPort - Port for the Ollama service.
   * @param {number} ragRequest.TopP - Nucleus sampling value (top-p).
   * @param {string} ragRequest.PromptPrefix - Prefix added to the prompt (e.g., a style like "talk like a pirate").
   * @param {boolean} ragRequest.ContextSort - Whether to sort context passages.
   * @param {boolean} ragRequest.SortByMaxSimilarity - Whether to sort context by max similarity.
   * @param {number} ragRequest.ContextScope - Scope or depth of the context.
   * @param {boolean} ragRequest.Rerank - Whether to rerank results.
   * @param {string} ragRequest.RerankModel - Model used for reranking.
   * @param {number} ragRequest.RerankTopK - Number of top results to keep after reranking.
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   */
  async chatRagQuestion_LEGACY(ragRequest, onToken = () => {}, cancelToken) {
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
   * AssistantRagRequest request.
   * @param {Object} ragRequest - Configuration for the retrieval and generation process.
   * @param {Array<{role: string, content: string}>} ragRequest.Messages - The message history between user and assistant.
   * @param {string} ragRequest.EmbeddingModel - The embedding model to use for vectorization (e.g., sentence-transformers model).
   * @param {number} ragRequest.MaxResults - The maximum number of results to retrieve from the vector database.
   * @param {string} ragRequest.VectorDatabaseName - The name of the vector database to connect to.
   * @param {string} ragRequest.VectorDatabaseTable - The table name in the vector database.
   * @param {string} ragRequest.VectorDatabaseHostname - The hostname of the vector database server.
   * @param {number} ragRequest.VectorDatabasePort - The port of the vector database server.
   * @param {string} ragRequest.VectorDatabaseUser - The username for the vector database.
   * @param {string} ragRequest.VectorDatabasePassword - The password for the vector database.
   * @param {string} ragRequest.GenerationProvider - The text generation provider (e.g., ollama, openai).
   * @param {string} ragRequest.GenerationApiKey - The API key for the generation provider (if applicable).
   * @param {string} ragRequest.GenerationModel - The name of the model used for text generation.
   * @param {string} ragRequest.HuggingFaceApiKey - The Hugging Face API key (if needed for embeddings or generation).
   * @param {number} ragRequest.Temperature - Sampling temperature for generation; higher values increase randomness.
   * @param {number} ragRequest.TopP - The nucleus sampling value (top-p) for controlling diversity of generated output.
   * @param {number} ragRequest.MaxTokens - The maximum number of tokens to generate.
   * @param {boolean} ragRequest.Stream - Whether to stream the output tokens (if supported by provider).
   * @param {string} ragRequest.OllamaHostname - Hostname of the Ollama inference server.
   * @param {number} ragRequest.OllamaPort - Port of the Ollama inference server.
   * @param {string} ragRequest.PromptPrefix - A prefix to prepend to the prompt before generation.
   * @param {boolean} ragRequest.ContextSort - Whether to sort context documents before generation.
   * @param {boolean} ragRequest.SortByMaxSimilarity - Whether to sort context documents by similarity score.
   * @param {number} ragRequest.ContextScope - How far back in the message history to consider for context.
   * @param {boolean} ragRequest.Rerank - Whether to rerank results after retrieval.
   * @param {string} ragRequest.RerankModel - The model used for reranking results.
   * @param {number} ragRequest.RerankTopK - The number of top results to keep after reranking.
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   */
  async chatRagMessages(ragRequest, onToken = () => {}, cancelToken) {
    if (ragRequest == null) {
      GenExceptionHandlersInstance.ArgumentNullException('ragRequest');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/rag/chat`;
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
   *@param {string} assistantConfigGuid - The GUID of the assistant configuration to use for the chat.
   * @param {Object} chatRequest - Configuration for a simple chat interaction.
   * @param {Array<{role: string, content: string}>} chatRequest.messages - An array of chat messages, each with a role ('user' or 'assistant') and message content.
   * @param {boolean} chatRequest.stream - Whether to stream the output (e.g., real-time token generation).
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   */
  async assistantConfigChat(assistantConfigGuid, chatRequest, onToken = () => {}, cancelToken = null) {
    if (!assistantConfigGuid) GenExceptionHandlersInstance.ArgumentNullException('assistantConfigGuid');
    if (!chatRequest) GenExceptionHandlersInstance.ArgumentNullException('chatRequest');
    if (typeof chatRequest.stream !== 'boolean')
      GenExceptionHandlersInstance.ArgumentNullException('chatRequest.stream');

    if (this.logRequests) {
      LoggerInstance.log(SeverityEnum.Debug, `${this.header} request body: \n${JSON.stringify(chatRequest)}`);
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/chat/${assistantConfigGuid}`;
    if (chatRequest.stream) {
      try {
        const request = superagent
          .post(url)
          .send(chatRequest)
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
    } else {
      return this.post(url, chatRequest, AssistantChatResponse, cancelToken);
    }
  }

  /**
   * Process a chat request.
   * @param {Object} chatRequest - Configuration for generating a response to a single question.
   * @param {string} chatRequest.Question - The prompt or question to generate a response for.
   * @param {string} chatRequest.ModelName - The name of the model to use for generation (e.g., llama3.1:latest).
   * @param {number} chatRequest.Temperature - Sampling temperature; controls randomness in output (lower is more deterministic).
   * @param {number} chatRequest.TopP - Top-p (nucleus) sampling parameter to control diversity.
   * @param {number} chatRequest.MaxTokens - Maximum number of tokens to generate in the response.
   * @param {string} chatRequest.GenerationProvider - The provider used for text generation (e.g., ollama).
   * @param {string} chatRequest.GenerationApiKey - API key for the generation provider (if required).
   * @param {string} chatRequest.OllamaHostname - Hostname or IP address of the Ollama inference server.
   * @param {number} chatRequest.OllamaPort - Port on which the Ollama server is running.
   * @param {boolean} chatRequest.Stream - Whether to stream generated tokens as they are produced.
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   */
  async chatOnly(chatRequest, onToken = () => {}, cancelToken = null) {
    if (!chatRequest) GenExceptionHandlersInstance.ArgumentNullException('question');

    if (this.logRequests) {
      LoggerInstance.log(SeverityEnum.Debug, `${this.header} request body: \n${JSON.stringify(chatRequest)}`);
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/chat/completions`;
    if (chatRequest.Stream) {
      try {
        const request = superagent
          .post(url)
          .send(chatRequest)
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
    } else {
      return this.post(url, chatRequest, undefined, cancelToken);
    }
  }

  //endregion Chat

  /**
   * Create a writable stream to parse SSE data.
   * @private
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
   * @private
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

  //region Chat Thread

  /**
   * Create a new chat thread.
   *
   * @param {Object} config - The chat thread configuration
   * @param {string} config.Title - Title of the chat thread
   * @param {string} config.Description - Description of the chat thread
   * @param {Array<Object>} config.Messages - Initial messages in the thread
   * @param {string} config.Messages[].role - Role of message sender (e.g. "user", "assistant")
   * @param {string} config.Messages[].content - Content of the message
   * @param {Object} config.Messages[].metadata - Additional metadata for the message
   * @param {string} config.AssistantConfigGUID - GUID of the associated assistant configuration
   * @param {Object} config.Metadata - Additional metadata for the chat thread
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<ChatThread|ApiErrorResponse>} A promise resolving to the created ChatThread object, or an error response
   */
  createChatThread = async (config, cancelToken) => {
    if (!config) {
      GenExceptionHandlersInstance.ArgumentNullException('config');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/threads`;
    return await this.post(url, config, ChatThread, cancelToken);
  };

  /**
   * Retrieve a chat thread by GUID.
   *
   * @param {string} guid - The GUID of the chat thread to retrieve
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<ChatThread|ApiErrorResponse>} A promise resolving to the retrieved ChatThread object, or an error response
   */
  retrieveChatThread = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/threads/${guid}`;
    return await this.retrieve(url, ChatThread, cancelToken);
  };

  /**
   * Update a chat thread.
   *
   * @param {string} guid - The GUID of the chat thread to update
   * @param {Object} response - The assistant's response with metadata.
   * @param {string} response.role - The role of the message sender (typically "assistant").
   * @param {string} response.content - The generated content or reply.
   * @param {Object} response.metadata - Metadata about the response.
   * @param {Array<{content: string, similarity: number}>} response.metadata.source_documents - Source documents used to generate the response, with similarity scores.
   * @param {Object} response.metadata.generation_metrics - Metrics related to the generation process.
   * @param {number} response.metadata.generation_metrics.tokens - Number of tokens used in the generated content.
   * @param {number} response.metadata.generation_metrics.generation_time - Time taken to generate the response (in seconds).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<ChatThread|ApiErrorResponse>} A promise resolving to the updated ChatThread object, or an error response
   */
  appendChatThread = async (guid, config, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    if (!config) {
      GenExceptionHandlersInstance.ArgumentNullException('config');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/threads/${guid}/messages`;
    return await this.post(url, config, ChatThread, cancelToken);
  };

  /**
   * Delete a chat thread.
   *
   * @param {string} guid - The GUID of the chat thread to delete
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} A promise resolving to an error response
   */
  deleteChatThread = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/threads/${guid}`;
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Retrieve all chat threads.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<Array<ChatThread>>} A promise resolving to an array of ChatThread objects
   */
  retrieveAllChatThreads = async (cancelToken) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/threads`;
    return await this.retrieveMany(url, ChatThreadList, cancelToken);
  };

  /**
   * Check if a chat thread exists.
   *
   * @param {string} guid - The GUID of the chat thread to check
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} A promise resolving to `true` if the chat thread exists, otherwise `false`
   */
  existsChatThread = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/threads/${guid}`;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a chat thread by GUID.
   *
   * @param {string} guid - The GUID of the chat thread to retrieve
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
  //endregion

  //region Model
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

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/models/pull`;
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
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   * @returns {Promise<boolean>} A promise resolving to `true` if the model was deleted, otherwise `false`
   * @throws {Error} If the `model` is null or empty.
   */
  deleteModel = async (model, cancelToken = null) => {
    if (!model) throw new GenExceptionHandlersInstance.ArgumentNullException('model');
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/models/delete`;
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   *Retrieve model list.
   *
   * @param {Object} model - Information about the assistant chat request.
   * @param {number} model.OllamaHostname - The temperature value between 0 and 1.
   * @param {number} model.OllamaPort - The maximum number of tokens to generate (between 1 and 16384).
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   * @returns {Promise<Array<{ModelName: string,  ModelFamily: string, ParameterSize: string}>>} A promise resolving to an array of model names
   * @throws {Error} If the `model` is null or empty.
   */
  retrieveLocalModels = async (model, cancelToken = null) => {
    if (!model) throw new Error('model cannot be null');
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/models`;
    return await this.post(url, model, undefined, cancelToken);
  };

  /**
   *Preload Model.
   *
   * @param {Object} model - Information about the assistant chat request.
   * @param {string} model.ModelName - The name of the model.
   * @param {number} model.OllamaHostname - The temperature value between 0 and 1.
   * @param {number} model.OllamaPort - The maximum number of tokens to generate (between 1 and 16384).
   * @param {boolean} model.Unload - The action to perform (load or unload).
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   * @returns {Promise<{message: string, details: {model: string, created_at: string, message: {role: string, content: string}, done_reason: string, done: boolean}}>} A promise resolving to a model load response
   * @throws {Error} If the `model` is null or empty.
   */
  loadUnloadModel = async (model, cancelToken = null) => {
    if (!model) throw new Error('model cannot be null');
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/models/load`;
    return await this.post(url, model, undefined, cancelToken);
  };

  //endregion Model

  //region Assistant Config
  /**
   * Retrieve assistant configurations.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<AssistantConfig>|ApiErrorResponse>} A promise resolving to an array of AssistantConfig objects, or an error response.
   */
  retrieveAssistantConfigs = async (cancelToken) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/configs`;
    return await this.retrieveMany(url, AssistantConfigList, cancelToken);
  };

  /**
   * Retrieve an assistant configuration by GUID.
   *
   * @param {string} guid - The GUID of the assistant configuration to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AssistantConfig|ApiErrorResponse>} A promise resolving to an AssistantConfig object, or an error response.
   */
  retrieveAssistantConfig = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/configs/${guid}`;
    return await this.retrieve(url, AssistantConfig, cancelToken);
  };
  /**
   * Check if an assistant configuration exists.
   *
   * @param {string} guid - The GUID of the assistant configuration to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the assistant configuration exists, otherwise `false`.
   * @throws {Error} If the `guid` is null or empty.
   */
  existsAssistantConfig = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/configs/${guid}`;
    return await this.exists(url, cancelToken);
  };

  /**
   * Create a new assistant configuration.
   *
   * @param {Object} config - The assistant configuration object
   * @param {string} config.Name - Name of the assistant
   * @param {string} config.Description - Description of the assistant
   * @param {string} config.SystemPrompt - System prompt for the assistant
   * @param {string} config.EmbeddingModel - Model used for embeddings
   * @param {number} config.MaxResults - Maximum number of results to return
   * @param {string} config.VectorDatabaseName - Name of the vector database
   * @param {string} config.VectorDatabaseTable - Table name in vector database
   * @param {string} config.VectorDatabaseHostname - Hostname of vector database
   * @param {number} config.VectorDatabasePort - Port number of vector database
   * @param {string} config.VectorDatabaseUser - Username for vector database
   * @param {string} config.VectorDatabasePassword - Password for vector database
   * @param {string} config.GenerationProvider - Provider for text generation
   * @param {string} config.GenerationApiKey - API key for generation provider
   * @param {string} config.GenerationModel - Model used for text generation
   * @param {string} config.HuggingFaceApiKey - API key for HuggingFace
   * @param {number} config.Temperature - Temperature parameter for generation
   * @param {number} config.TopP - Top-p parameter for generation
   * @param {number} config.MaxTokens - Maximum tokens for generation
   * @param {string} config.OllamaHostname - Hostname for Ollama service
   * @param {number} config.OllamaPort - Port number for Ollama service
   * @param {boolean} config.ContextSort - Enable context sorting
   * @param {boolean} config.SortByMaxSimilarity - Sort by maximum similarity
   * @param {number} config.ContextScope - Scope for context retrieval
   * @param {boolean} config.Rerank - Enable reranking
   * @param {string} config.RerankModel - Model used for reranking
   * @param {number} config.RerankTopK - Top K results for reranking
   * @param {boolean} config.ChatOnly - Enable chat-only mode
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<AssistantConfig|ApiErrorResponse>} A promise resolving to the created AssistantConfig object, or an error response
   */
  createAssistantConfig = async (config, cancelToken) => {
    if (!config) {
      GenExceptionHandlersInstance.ArgumentNullException('config');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/configs`;
    return await this.post(url, config, AssistantConfig, cancelToken);
  };

  /**
   * Update an existing assistant configuration.
   *
   * @param {Object} config - The assistant configuration object
   * @param {string} config.GUID - GUID of the assistant configuration to update
   * @param {string} config.Name - Name of the assistant
   * @param {string} config.Description - Description of the assistant
   * @param {string} config.SystemPrompt - System prompt for the assistant
   * @param {string} config.EmbeddingModel - Model used for embeddings
   * @param {number} config.MaxResults - Maximum number of results to return
   * @param {string} config.VectorDatabaseName - Name of the vector database
   * @param {string} config.VectorDatabaseTable - Table name in vector database
   * @param {string} config.VectorDatabaseHostname - Hostname of vector database
   * @param {number} config.VectorDatabasePort - Port number of vector database
   * @param {string} config.VectorDatabaseUser - Username for vector database
   * @param {string} config.VectorDatabasePassword - Password for vector database
   * @param {string} config.GenerationProvider - Provider for text generation
   * @param {string} config.GenerationApiKey - API key for generation provider
   * @param {string} config.GenerationModel - Model used for text generation
   * @param {string} config.HuggingFaceApiKey - API key for HuggingFace
   * @param {number} config.Temperature - Temperature parameter for generation
   * @param {number} config.TopP - Top-p parameter for generation
   * @param {number} config.MaxTokens - Maximum tokens for generation
   * @param {string} config.OllamaHostname - Hostname for Ollama service
   * @param {number} config.OllamaPort - Port number for Ollama service
   * @param {boolean} config.ContextSort - Enable context sorting
   * @param {boolean} config.SortByMaxSimilarity - Sort by maximum similarity
   * @param {number} config.ContextScope - Scope for context retrieval
   * @param {boolean} config.Rerank - Enable reranking
   * @param {string} config.RerankModel - Model used for reranking
   * @param {number} config.RerankTopK - Top K results for reranking
   * @param {boolean} config.ChatOnly - Enable chat-only mode
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<AssistantConfig|ApiErrorResponse>} A promise resolving to the updated AssistantConfig object, or an error response
   */
  updateAssistantConfig = async (config, cancelToken) => {
    if (!config || !config.GUID) {
      GenExceptionHandlersInstance.ArgumentNullException('config or config.GUID');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/configs/${config.GUID}`;
    return await this.create(url, config, AssistantConfig, cancelToken);
  };

  /**
   * Delete an existing assistant configuration.
   *
   * @param {string} guid - GUID of the assistant configuration to delete
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} A promise resolving to true if deletion was successful, false otherwise
   */
  deleteAssistantConfig = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/assistant/configs/${guid}`;
    return await this.delete(url, undefined, cancelToken);
  };
}
