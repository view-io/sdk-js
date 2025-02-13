/**
 * View Ollama SDK.
 * @class
 * @extends EmbeddingsSdkBase
 * @version 0.1.0
 * @module base/ViewOllamaSdk
 */
export default class ViewOllamaSdk extends EmbeddingsSdkBase {
    /**
     * Constructs a new ViewOllamaSdk.
     * @param {string} [endpoint="http://localhost:7869"] - The endpoint URL.
     * @param {string} [apiKey=null] - The API key.
     * @param {number} [batchSize=8] - The maximum number of chunks to submit in a processing request.
     * @param {number} [maxParallelTasks=16] - The maximum number of parallel tasks.
     * @param {number} [maxRetries=3] - The maximum number of retries.
     * @param {number} [maxFailures=3] - The maximum number of failures before aborting.
     * @param {function} [logger=null] - The logger function.
     */
    constructor(endpoint?: string, apiKey?: string, batchSize?: number, maxParallelTasks?: number, maxRetries?: number, maxFailures?: number, logger?: Function);
    _DefaultModel: string;
    /**
     * Process a list of semantic cells and generate embeddings.
     * @param {string[]} cells - The semantic cells to process.
     * @param {string} model - The model to use.
     * @param {number} [timeoutMs=300000] - The timeout in milliseconds.
     * @param {CancellationToken} [token] - The cancellation token.
     * @returns {Promise[]} - Resolves to a list of semantic cells with embeddings.
     */
    processSemanticCells(cells: string[], model: string, timeoutMs?: number, token?: CancellationToken): Promise<any>[];
    /**
     * List available models from the endpoint.
     * @param {CancellationToken} [token] - The cancellation token.
     * @returns {Promise<Array[]>} - Resolves to a list of model information.
     */
    listModels(token?: CancellationToken): Promise<any[][]>;
    /**
     * Process semantic chunks in batches.
     * @param {string} model - The model to use.
     * @param {Array[]} chunks - The chunks to process.
     * @param {number} [timeoutMs=300000] - The timeout in milliseconds.
     * @param {CancellationToken} [token] - The cancellation token.
     * @private
     */
    private processSemanticChunks;
    /**
     * Process a single batch of semantic chunks.
     * @param {string} model - The model to use.
     * @param {Array[]} chunks - The chunks to process.
     * @param {number} [timeoutMs=300000] - The timeout in milliseconds.
     * @param {CancellationToken} [token] - The cancellation token.
     * @private
     */
    private processBatch;
}
import EmbeddingsSdkBase from './EmbeddingsSdkBase';
