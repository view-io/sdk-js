export default class CleanupResponse {
    /**
     * Instantiate a CleanupResponse.
     * @param {string|null} dataFlowRequestGUID - Data flow request GUID.
     * @param {boolean} success - Boolean indicating success.
     * @param {Timestamp} timestamp - Timestamps.
     * @param {ApiErrorResponse|null} error - Error response, if any.
     */
    constructor(dataFlowRequestGUID?: string | null, success?: boolean, timestamp?: Timestamp, error?: ApiErrorResponse | null);
    /**
     * Data flow request GUID.
     * @type {string | null}
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
     * @type {ApiErrorResponse | null}
     */
    error: ApiErrorResponse | null;
}
