export default class ViewAssistantSdk extends ViewSdkBase {
    /**
     * @constructor
     * @param {string} guid
     * @param {CancellationToken} token
     * @param {string} endpoint
     */
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
    chatRagQuestion_LEGACY(ragRequest: {
        Question: string;
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
        MaxTokens: number;
        Stream: boolean;
        OllamaHostname: string;
        OllamaPort: number;
        TopP: number;
        PromptPrefix: string;
        ContextSort: boolean;
        SortByMaxSimilarity: boolean;
        ContextScope: number;
        Rerank: boolean;
        RerankModel: string;
        RerankTopK: number;
    }, onToken: Function, cancelToken: AbortSignal): Promise<any[]>;
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
    chatRagMessages(ragRequest: {
        Messages: Array<{
            role: string;
            content: string;
        }>;
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
        Stream: boolean;
        OllamaHostname: string;
        OllamaPort: number;
        PromptPrefix: string;
        ContextSort: boolean;
        SortByMaxSimilarity: boolean;
        ContextScope: number;
        Rerank: boolean;
        RerankModel: string;
        RerankTopK: number;
    }, onToken: Function, cancelToken: AbortSignal): Promise<any[]>;
    /**
     * Process a chat request.
     *@param {string} assistantConfigGuid - The GUID of the assistant configuration to use for the chat.
     * @param {Object} chatRequest - Configuration for a simple chat interaction.
     * @param {Array<{role: string, content: string}>} chatRequest.messages - An array of chat messages, each with a role ('user' or 'assistant') and message content.
     * @param {boolean} chatRequest.stream - Whether to stream the output (e.g., real-time token generation).
     * @param {function} onToken - Callback to handle tokens as they are emitted.
     * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
     */
    assistantConfigChat(assistantConfigGuid: string, chatRequest: {
        messages: Array<{
            role: string;
            content: string;
        }>;
        stream: boolean;
    }, onToken?: Function, cancelToken?: AbortSignal): Promise<any[] | import("../../models/ApiErrorResponse").default | {
        messages: Array<{
            role: string;
            content: string;
        }>;
        stream: boolean;
    }>;
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
    chatOnly(chatRequest: {
        Question: string;
        ModelName: string;
        Temperature: number;
        TopP: number;
        MaxTokens: number;
        GenerationProvider: string;
        GenerationApiKey: string;
        OllamaHostname: string;
        OllamaPort: number;
        Stream: boolean;
    }, onToken?: Function, cancelToken?: AbortSignal): Promise<any[] | import("../../models/ApiErrorResponse").default | {
        Question: string;
        ModelName: string;
        Temperature: number;
        TopP: number;
        MaxTokens: number;
        GenerationProvider: string;
        GenerationApiKey: string;
        OllamaHostname: string;
        OllamaPort: number;
        Stream: boolean;
    }>;
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
    ChatOnlyQuestion(chatRequest: {
        Question: string;
        ModelName: string;
        Temperature: number;
        TopP: number;
        MaxTokens: number;
        GenerationProvider: string;
        GenerationApiKey: string;
        OllamaHostname: string;
        OllamaPort: number;
        Stream: boolean;
    }, onToken?: Function, cancelToken?: AbortSignal): Promise<any[] | import("../../models/ApiErrorResponse").default | {
        Question: string;
        ModelName: string;
        Temperature: number;
        TopP: number;
        MaxTokens: number;
        GenerationProvider: string;
        GenerationApiKey: string;
        OllamaHostname: string;
        OllamaPort: number;
        Stream: boolean;
    }>;
    /**
     * Create a writable stream to parse SSE data.
     * @private
     * @param {function} onToken - Callback to handle tokens as they are emitted.
     * @returns {Writable} - A writable stream for parsing.
     */
    private _createStreamParser;
    /**
     * Extract a token from JSON string.
     * @private
     * @param {string} json - The JSON string.
     * @returns {string|null} - The extracted token or null if not found.
     */
    private _extractToken;
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
import AssistantConfig from '../../models/AssistantConfig';
