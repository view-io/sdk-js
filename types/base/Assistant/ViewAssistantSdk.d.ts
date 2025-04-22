export default class ViewAssistantSdk extends ViewSdkBase {
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
    processRag(ragRequest: {
        PromptPrefix: string;
        Question: string;
        MaxResults: number;
        Temperature: number;
        TopP: number;
        MaxTokens: number;
        GenerationModel: string;
        GenerationProvider: string;
        OllamaHostname: string;
        OllamaPort: number;
        VectorDatabaseHostname: string;
        VectorDatabasePort: number;
        VectorDatabaseName: string;
        VectorDatabaseUser: string;
        VectorDatabasePassword: string;
        Stream: boolean;
        ContextSort: boolean;
        ContextScope: number;
        Rerank: boolean;
        RerankTopK: number;
    }, onToken: Function, cancelToken: AbortSignal): Promise<any[]>;
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
    processChat(chatRequest: {
        Question: string;
        Temperature: number;
        MaxTokens: number;
        GenerationModel: string;
        GenerationProvider: string;
        OllamaHostname: string;
        OllamaPort: number;
        Stream: boolean;
    }, onToken?: Function, cancelToken?: AbortSignal): any[];
    /**
     * Create a writable stream to parse SSE data.
     * @param {function} onToken - Callback to handle tokens as they are emitted.
     * @returns {Writable} - A writable stream for parsing.
     */
    _createStreamParser(onToken: Function): Writable;
    /**
     * Extract a token from JSON string.
     * @param {string} json - The JSON string.
     * @returns {string|null} - The extracted token or null if not found.
     */
    _extractToken(json: string): string | null;
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
    retrieveModel(model: {
        ModelName: string;
        OllamaHostname: number;
        OllamaPort: number;
    }, onToken?: Function, cancelToken?: AbortSignal): any[];
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
    deleteModel(model: {
        ModelName: string;
        OllamaHostname: number;
        OllamaPort: number;
    }, onToken?: Function, cancelToken?: AbortSignal): any[];
    /**
     *Retrieve model list.
     *
     * @param {Object} model - Information about the assistant chat request.
     * @param {number} model.OllamaHostname - The temperature value between 0 and 1.
     * @param {number} model.OllamaPort - The maximum number of tokens to generate (between 1 and 16384).
     * @param {function} onToken - Callback to handle tokens as they are emitted.
     * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
     */
    retrieveModelList(model: {
        OllamaHostname: number;
        OllamaPort: number;
    }, onToken?: Function, cancelToken?: AbortSignal): any[];
    /**
     * Retrieve assistant configurations.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<AssistantConfig>|ApiErrorResponse>} A promise resolving to an array of AssistantConfig objects, or an error response.
     */
    retrieveAssistantConfigs: (cancelToken?: object) => Promise<Array<AssistantConfig> | ApiErrorResponse>;
    /**
     * Retrieve an assistant configuration by GUID.
     *
     * @param {string} guid - The GUID of the assistant configuration to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<AssistantConfig|ApiErrorResponse>} A promise resolving to an AssistantConfig object, or an error response.
     */
    retrieveAssistantConfig: (guid: string, cancelToken?: object) => Promise<AssistantConfig | ApiErrorResponse>;
    /**
     * Check if an assistant configuration exists.
     *
     * @param {string} guid - The GUID of the assistant configuration to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the assistant configuration exists, otherwise `false`.
     * @throws {Error} If the `guid` is null or empty.
     */
    existsAssistantConfig: (guid: string, cancelToken?: object) => Promise<boolean>;
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
    createAssistantConfig: (config: {
        Name: string;
        Description: string;
        SystemPrompt: string;
        EmbeddingModel: string;
        MaxResults: number;
        VectorDatabaseName: string;
        VectorDatabaseTable: string;
        VectorDatabaseHostname: string;
        VectorDatabasePort: number;
        VectorDatabaseUser: string;
        VectorDatabasePassword: string;
        GenerationProvider: string;
        GenerationApiKey: string;
        GenerationModel: string;
        HuggingFaceApiKey: string;
        Temperature: number;
        TopP: number;
        MaxTokens: number;
        OllamaHostname: string;
        OllamaPort: number;
        ContextSort: boolean;
        SortByMaxSimilarity: boolean;
        ContextScope: number;
        Rerank: boolean;
        RerankModel: string;
        RerankTopK: number;
        ChatOnly: boolean;
    }, cancelToken?: object) => Promise<AssistantConfig | ApiErrorResponse>;
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
    updateAssistantConfig: (config: {
        GUID: string;
        Name: string;
        Description: string;
        SystemPrompt: string;
        EmbeddingModel: string;
        MaxResults: number;
        VectorDatabaseName: string;
        VectorDatabaseTable: string;
        VectorDatabaseHostname: string;
        VectorDatabasePort: number;
        VectorDatabaseUser: string;
        VectorDatabasePassword: string;
        GenerationProvider: string;
        GenerationApiKey: string;
        GenerationModel: string;
        HuggingFaceApiKey: string;
        Temperature: number;
        TopP: number;
        MaxTokens: number;
        OllamaHostname: string;
        OllamaPort: number;
        ContextSort: boolean;
        SortByMaxSimilarity: boolean;
        ContextScope: number;
        Rerank: boolean;
        RerankModel: string;
        RerankTopK: number;
        ChatOnly: boolean;
    }, cancelToken?: object) => Promise<AssistantConfig | ApiErrorResponse>;
    /**
     * Delete an existing assistant configuration.
     *
     * @param {string} guid - GUID of the assistant configuration to delete
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
     * @returns {Promise<boolean>} A promise resolving to true if deletion was successful, false otherwise
     */
    deleteAssistantConfig: (guid: string, cancelToken?: object) => Promise<boolean>;
}
import ViewSdkBase from '../ViewSDKBase';
import { Writable } from 'stream';
import AssistantConfig from '../../models/AssistantConfig';
