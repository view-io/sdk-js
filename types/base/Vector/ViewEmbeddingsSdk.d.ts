export default class ViewEmbeddingsSdk {
    /**
     * Constructor to instantiate the ViewEmbeddingsSdk.
     * @param {string} generator - The embeddings generator. Default is 'LCProxy'.
     * @param {string} endpoint - Endpoint URL. Default is 'http://localhost:8301/'.
     * @param {string} apiKey - API key.
     * @param {number} batchSize - Maximum number of chunks per task. Default is 16.
     * @param {number} maxParallelTasks - Maximum number of parallel tasks. Default is 16.
     * @param {number} maxRetries - Maximum retries per task. Default is 3.
     * @param {number} maxFailures - Maximum failures before operation stops. Default is 3.
     * @param {number} timeoutMs - Timeout in milliseconds. Default is 300000.
     * @param {function} logger - Logger function.
     */
    constructor(generator?: string, endpoint?: string, apiKey?: string, batchSize?: number, maxParallelTasks?: number, maxRetries?: number, maxFailures?: number, timeoutMs?: number, logger?: Function);
    generator: string;
    apiKey: string;
    endpoint: string;
    batchSize: number;
    maxParallelTasks: number;
    maxRetries: number;
    maxFailures: number;
    timeoutMs: number;
    logger: Function;
    _semaphore: Semaphore;
    /**
     * Validate connectivity with the current embeddings generator.
     * @returns {Promise<boolean>} - True if connected successfully.
     */
    validateConnectivity(): Promise<boolean>;
    /**
     * Process semantic cells and generate embeddings.
     * @param {Array[]} cells - List of semantic cells.
     * @param {string} [cells.GUID] - Unique identifier for the semantic cell (automatically generated if not provided).
     * @param {string} [cells.MD5Hash] - MD5 hash of the content.
     * @param {string} [cells.SHA1Hash] - SHA1 hash of the content.
     * @param {string} [cells.SHA256Hash] - SHA256 hash of the content.
     * @param {number} [cells.Position] - Position of the semantic cell.
     * @param {number} [cells.Length] - Length of the semantic cell.
     * @param {Array<Object>} [cells.Chunks] - List of chunks contained in the semantic cell.
     * @param {Array<Object>} [cells.Children] - List of child semantic cells.
     * @param {string} model - Model name.
     * @param {number} [timeoutMs=300000] - Timeout in milliseconds. Default is 300,000 (5 minutes).
     * @returns {Promise<Array[]>} - A promise resolving to a list of processed semantic cells with embeddings.
     */
    processSemanticCells(cells: any[][], model: string, timeoutMs?: number): Promise<any[][]>;
    /**
     * Initialize the specific generator based on the provided type.
     * @private
     */
    private _initializeGenerator;
    _lcProxy: ViewLcproxySdk;
    _ollama: ViewOllamaSdk;
    _openAI: ViewOpenAiSdk;
    _voyageAI: ViewVoyageAiSdk;
}
import Semaphore from '../../utils/Semaphore';
import ViewLcproxySdk from './ViewLcproxySdk';
import ViewOllamaSdk from './ViewOllamaSdk';
import ViewOpenAiSdk from './ViewOpenAiSdk';
import ViewVoyageAiSdk from './ViewVoyageAiSdk';
