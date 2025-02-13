export default class LexiEmbeddingsResponse {
    /**
     * Instantiate LexiEmbeddingsResponse.
     * @param {string|null} dataFlowRequestGUID - Data flow request GUID.
     * @param {boolean} success - Boolean indicating success.
     * @param {Timestamp} timestamp - Timestamps.
     * @param {ApiErrorResponse|null} error - Error response, if any.
     * @param {Array[]} vector - List of embeddings documents.
     */
    constructor(dataFlowRequestGUID?: string | null, success?: boolean, timestamp?: Timestamp, error?: ApiErrorResponse | null, vector?: any[][]);
    /**
     * Data flow request GUID.
     * @type {string|null}
     */
    dataFlowRequestGUID: string | null;
    /**
     * Boolean indicating success.
     * @type {boolean}
     */
    success: boolean;
    /**
     * Timestamps.
     * @type {Timestamp}
     */
    timestamp: Timestamp;
    /**
     * Error response, if any.
     * @type {ApiErrorResponse|null}
     */
    error: ApiErrorResponse | null;
    /**
     * Embeddings documents (Vector).
     * @type {Array[]}
     */
    vector: any[][];
    /**
     * Private Request GUID.
     * @type {string}
     */
    _requestGuid: string;
    /**
     * Private list of embeddings documents.
     * @type {Array[]}
     */
    _vectors: any[][];
}
