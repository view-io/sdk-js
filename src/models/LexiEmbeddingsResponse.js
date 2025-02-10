export default class LexiEmbeddingsResponse {
  // Public Members

  /**
   * Data flow request GUID.
   * @type {string|null}
   */
  dataFlowRequestGUID = null;

  /**
   * Boolean indicating success.
   * @type {boolean}
   */
  success = true;

  /**
   * Timestamps.
   * @type {Timestamp}
   */
  timestamp = new Date().toISOString; // Assuming Timestamp is imported from a separate module.

  /**
   * Error response, if any.
   * @type {ApiErrorResponse|null}
   */
  error = null;

  /**
   * Embeddings documents (Vector).
   * @type {Array[]}
   */
  vector = [];

  // Private Members

  /**
   * Private Request GUID.
   * @type {string}
   */
  _requestGuid = null;

  /**
   * Private list of embeddings documents.
   * @type {Array[]}
   */
  _vectors = [];

  // Constructors

  /**
   * Instantiate LexiEmbeddingsResponse.
   * @param {string|null} dataFlowRequestGUID - Data flow request GUID.
   * @param {boolean} success - Boolean indicating success.
   * @param {Timestamp} timestamp - Timestamps.
   * @param {ApiErrorResponse|null} error - Error response, if any.
   * @param {Array[]} vector - List of embeddings documents.
   */
  constructor(
    dataFlowRequestGUID = null,
    success = true,
    timestamp = new Date().toISOString,
    error = null,
    vector = []
  ) {
    this.dataFlowRequestGUID = dataFlowRequestGUID;
    this.success = success;
    this.timestamp = timestamp;
    this.error = error;
    this.vector = vector; // Using the setter to ensure proper assignment and handling of null values
  }
}
