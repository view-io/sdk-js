/**
 * VoyageAI embeddings generator.
 * @module vector/ViewVoyageAiSdk
 * @extends EmbeddingsSdkBase
 */
export default class ViewVoyageAiSdk extends EmbeddingsSdkBase {
    /**
     * Instantiate.
     * @param {string} endpoint - Base URL. Default is https://api.openai.com/v1/
     * @param {string} [apiKey=null] - API key
     * @param {number} [batchSize=8] - Maximum number of chunks to submit in an individual processing request
     * @param {number} [maxParallelTasks=16] - Maximum number of parallel tasks
     * @param {number} [maxRetries=3] - Maximum number of retries to perform on any given task
     * @param {number} [maxFailures=3] - Maximum number of failures to support before failing the operation
     * @param {Function} [logger=null] - Logger function accepting severity and message parameters
     */
    constructor(endpoint: string, apiKey?: string, batchSize?: number, maxParallelTasks?: number, maxRetries?: number, maxFailures?: number, logger?: Function);
    /** @private */
    private _defaultModel;
    /**
     * Process semantic cells to generate embeddings.
     * @param {Array<SemanticCell>} cells - List of semantic cells to process
     * @param {string} model - Model to use for processing
     * @param {number} [timeoutMs=300000] - Timeout in milliseconds
     * @param {object} [cancelToken] - Cancellation token
     * @returns {Promise<Array<SemanticCell>>} Processed semantic cells
     */
    processSemanticCells(cells: Array<SemanticCell>, model: string, timeoutMs?: number, cancelToken?: object): Promise<Array<SemanticCell>>;
    /**
     * List available models.
     * @param {object} [cancelToken] - Cancellation token
     * @throws {Error} This API is not implemented for this embeddings generator
     */
    listModels(cancelToken?: object): Promise<void>;
    /**
     * Load multiple models.
     * @param {Array<string>} models - Models to load
     * @param {object} [cancelToken] - Cancellation token
     * @throws {Error} This API is not implemented for this embeddings generator
     */
    loadModels(_models: any, _cancelToken: any): Promise<void>;
    /**
     * Delete a model.
     * @param {string} name - Model name
     * @param {object} [cancelToken] - Cancellation token
     * @throws {Error} This API is not implemented for this embeddings generator
     */
    deleteModel(_name: any, _cancelToken: any): Promise<void>;
    /**
     * Load a specific model.
     * @param {string} model - Model to load
     * @param {object} [cancelToken] - Cancellation token
     * @throws {Error} This API is not implemented for this embeddings generator
     */
    loadModel(_model: any, _cancelToken: any): Promise<void>;
    /**
     * Process semantic chunks in batches.
     * @private
     * @param {string} model - Model to use
     * @param {Array<SemanticChunk>} chunks - Chunks to process
     * @param {number} timeoutMs - Timeout in milliseconds
     * @param {object} cancelToken - Cancellation token
     */
    private _processSemanticChunks;
    /**
     * Process a batch of semantic chunks.
     * @private
     * @param {string} model - Model to use
     * @param {Array<SemanticChunk>} chunks - Chunks to process
     * @param {number} timeoutMs - Timeout in milliseconds
     * @param {object} cancelToken - Cancellation token
     */
    private _processBatch;
}
import EmbeddingsSdkBase from './EmbeddingsSdkBase';
