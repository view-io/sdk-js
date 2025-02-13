/**
 * View Ollama SDK.
 * @class
 * @extends EmbeddingsSdkBase
 * @version 0.1.0
 * @module base/ViewLcproxySdk
 */
export default class ViewLcproxySdk extends EmbeddingsSdkBase {
    /**
     * Constructs a new instance of ViewLcproxySdk.
     * @param {string} [endpoint='http://localhost:8301'] - The base URL of the LCProxy service.
     * @param {string|null} [apiKey=null] - API key for authentication.
     * @param {number} [batchSize=8] - Number of chunks per batch.
     * @param {number} [maxParallelTasks=16] - Maximum number of parallel tasks.
     * @param {number} [maxRetries=3] - Maximum retries for failed requests.
     * @param {number} [maxFailures=3] - Maximum allowable consecutive failures.
     * @param {function|null} [logger=null] - Optional logging function.
     */
    constructor(endpoint?: string, apiKey?: string | null, batchSize?: number, maxParallelTasks?: number, maxRetries?: number, maxFailures?: number, logger?: Function | null);
    /**
     * The default model used for embeddings.
     * @type {string}
     */
    defaultModel: string;
    /**
     * Validates the connectivity to the LCProxy service.
     * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
     * @returns {Promise<boolean>} Resolves to true if connectivity is successful, otherwise false.
     */
    validateConnectivity(token?: AbortSignal | null): Promise<boolean>;
    /**
     * Preloads models on the LCProxy service.
     * @param {string[]} models - List of model names to preload.
     * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
     * @returns {Promise<boolean>} Resolves to true if successful, otherwise false.
     * @throws {Error} If the models list is invalid or not provided.
     */
    preloadModels(models: string[], token?: AbortSignal | null): Promise<boolean>;
    /**
     * Processes semantic cells by generating embeddings.
     * @param {Array} cells - List of cells to process.
     * @param {string} [model] - Model to use for embeddings. Defaults to `defaultModel`.
     * @param {number} [timeoutMs=300000] - Request timeout in milliseconds.
     * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
     * @returns {Promise<Array>} Resolves to the processed cells with embeddings.
     */
    processSemanticCells(cells: any[], model?: string, timeoutMs?: number, token?: AbortSignal | null): Promise<any[]>;
    /**
     * Processes semantic chunks by dividing them into batches and processing each batch.
     * @param {string} model - Model to use for embeddings.
     * @param {Array} chunks - List of chunks to process.
     * @param {number} [timeoutMs=300000] - Request timeout in milliseconds.
     * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
     * @returns {Promise<void>} Resolves when all chunks are processed.
     */
    processSemanticChunks(model: string, chunks: any[], timeoutMs?: number, token?: AbortSignal | null): Promise<void>;
    /**
     * Lists models.
     * @param {AbortSignal|null} [token=null] - Optional abort signal for request cancellation.
     * @throws {Error} Always throws as this API is not implemented.
     * @returns {Promise<never>}
     */
    listModels(token?: AbortSignal | null): Promise<never>;
    /**
     * Loads multiple models.
     * @param {string[]} models - List of models to load.
     * @param {AbortSignal|null} [token=null] - Optional abort signal for request cancellation.
     * @throws {Error} Always throws as this API is not implemented.
     * @returns {Promise<never>}
     */
    loadModels(models: string[], token?: AbortSignal | null): Promise<never>;
    /**
     * Deletes a specific model.
     * @param {string} name - The name of the model to delete.
     * @param {AbortSignal|null} [token=null] - Optional abort signal for request cancellation.
     * @throws {Error} Always throws as this API is not implemented.
     * @returns {Promise<never>}
     */
    deleteModel(name: string, token?: AbortSignal | null): Promise<never>;
    /**
     * Loads a single model.
     * @param {string} model - The model to load.
     * @param {AbortSignal|null} [token=null] - Optional abort signal for request cancellation.
     * @throws {Error} Always throws as this API is not implemented.
     * @returns {Promise<never>}
     */
    loadModel(model: string, token?: AbortSignal | null): Promise<never>;
    /**
     * Processes a single batch of semantic chunks to generate embeddings.
     * @param {string} model - Model to use for embeddings.
     * @param {Array} chunks - List of chunks to process.
     * @param {number} [timeoutMs] - Request timeout in milliseconds.
     * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
     * @returns {Promise<void>} Resolves when the batch is processed successfully.
     */
    processBatch(model: string, chunks: any[], timeoutMs?: number, token?: AbortSignal | null): Promise<void>;
}
import EmbeddingsSdkBase from './EmbeddingsSdkBase';
