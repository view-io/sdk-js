export default class CleanupResponse {
  /**
   * Instantiate a CleanupResponse.
   * @param {string|null} dataFlowRequestGUID - Data flow request GUID.
   * @param {boolean} success - Boolean indicating success.
   * @param {Timestamp} timestamp - Timestamps.
   * @param {ApiErrorResponse|null} error - Error response, if any.
   */
  constructor(dataFlowRequestGUID = null, success = true, timestamp = new Date().toISOString, error = null) {
    /**
     * Data flow request GUID.
     * @type {string | null}
     */
    this.dataFlowRequestGUID = dataFlowRequestGUID;

    /**
     * Boolean indicating success.
     * @type {boolean}
     */
    this.success = success;

    /**
     * Timestamps.
     * @type {Timestamp}
     */
    this.timestamp = timestamp;

    /**
     * Error response, if any.
     * @type {ApiErrorResponse | null}
     */
    this.error = error;
  }
}
