/**
 * Embeddings SDK base class.
 * @module base/EmbeddingsSdkBase
 * @version 0.1.0
 */
export default class EmbeddingsSdkBase {
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
    constructor(generator: EmbeddingsGeneratorEnum, endpoint: string, apiKey: string, batchSize?: number, maxParallelTasks?: number, maxRetries?: number, maxFailures?: number, logger?: Function);
    logResponses: boolean;
    Generator: string;
    Endpoint: string;
    ApiKey: string;
    BatchSize: number;
    MaxParallelTasks: number;
    MaxRetries: number;
    MaxFailures: number;
    Logger: Function;
    _Semaphore: Semaphore;
    _Serializer: Serializer;
    /**
     * Dispose of resources.
     */
    dispose(): void;
    /**
     * Validate connectivity.
     * @param {CancellationToken} [token] - The cancellation token.
     * @returns {Promise<boolean>} A promise resolving to a boolean indicating connectivity status.
     */
    validateConnectivity(token?: CancellationToken): Promise<boolean>;
    /**
     * Process semantic cells and generate embeddings.
     * @param {Array[]} cells - The semantic cells to process.
     * @param {string} model - The model to use.
     * @param {number} [timeoutMs=60000] - The timeout in milliseconds.
     * @param {CancellationToken} [token] - The cancellation token.
     * @returns {Promise<Array[]>} A promise resolving to a list of semantic cells with embeddings.
     */
    processSemanticCells(cells: any[][], model: string, timeoutMs?: number, token?: CancellationToken): Promise<any[][]>;
    /**
     * List available models.
     * @param {CancellationToken} [token] - The cancellation token.
     * @returns {Promise<string[]>} A promise resolving to a list of model names.
     */
    listModels(token?: CancellationToken): Promise<string[]>;
    /**
     * Load a model.
     * @param {string} model - The model name.
     * @param {CancellationToken} [token] - The cancellation token.
     * @returns {Promise<boolean>} A promise resolving to a boolean indicating success or failure.
     */
    loadModel(model: string, token?: CancellationToken): Promise<boolean>;
    /**
     * Load multiple models.
     * @param {string[]} models - The list of model names.
     * @param {CancellationToken} [token] - The cancellation token.
     * @returns {Promise<boolean>} A promise resolving to a boolean indicating success or failure.
     */
    loadModels(models: string[], token?: CancellationToken): Promise<boolean>;
    /**
     * Delete a model.
     * @param {string} name - The model name.
     * @param {CancellationToken} [token] - The cancellation token.
     * @returns {Promise<boolean>} A promise resolving to a boolean indicating success or failure.
     */
    deleteModel(name: string, token?: CancellationToken): Promise<boolean>;
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
    buildSemanticChunkList(cells: SemanticCell[]): SemanticChunk[];
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
    mergeEmbeddingsMaps(chunks: SemanticChunk[], maps: EmbeddingsMap[]): void;
    _extractChunks(cell: any): any[];
    /**
     * Check if data exists from the given URL with optional cancellation support using superagent's abort method.
     *
     * @template T
     * @param {string} url - The URL to request data from.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
     * @throws {Error} If the URL is null or empty.
     */
    exists: <T>(url: string, cancelToken?: object) => Promise<T | null | ApiErrorResponse>;
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
    post: <T>(url: string, obj: T, cancelToken?: object) => Promise<T | null | ApiErrorResponse>;
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
    postJson: <T>(url: string, obj: T, cancelToken?: object) => Promise<T | null | ApiErrorResponse>;
    retrieve: (url: any, Model: any, cancelToken: any) => Promise<any>;
    delete: (url: any, Model: any, cancelToken: any) => Promise<any>;
}
import Semaphore from '../../utils/Semaphore';
import Serializer from '../../utils/Serializer';
import ApiErrorResponse from '../../models/ApiErrorResponse';
import { EmbeddingsGeneratorEnum } from '../../enums/EmbeddingsGeneratorEnum';
