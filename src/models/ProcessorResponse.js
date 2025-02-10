/**
 * Represents a response from the processor.
 *
 * @property {string} dataFlowRequestGUID - GUID for the data flow request.
 * @property {boolean} success - Indicates whether the processing was successful.
 * @property {Date} timestamp - Timestamp when the processing was completed.
 * @property {ApiErrorResponse} error - Error response if any occurred during processing.
 * @property {Object} type - Result type of the processed document.
 * @property {Object} udr - UDR (User-Defined Resource) document metadata.
 * @property {Object} source - Metadata of the source document in the data catalog.
 * @property {Object} vector - Information about the embeddings document.
 */
export default class ProcessorResponse {
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
   * @type {Date|null}
   */
  timestamp = new Date().toISOString;

  /**
   * Error response, if any.
   * @type {ApiErrorResponse|null}
   */
  error = null;

  /**
   * Type result.
   * @type {Object|null}
   */
  type = null;

  /**
   * UDR document.
   * @type {Object|null}
   */
  udr = null;

  /**
   * Source document in data catalog.
   * @type {Object|null}
   */
  source = null;

  /**
   * Embeddings document.
   * @type {Object|null}
   */
  vector = null;

  /**
   * Constructs a new instance of ProcessorResponse.
   * @param {Object} params - The parameters for creating a ProcessorResponse
   * @param {string} [params.dataFlowRequestGUID=null] - GUID for the data flow request
   * @param {boolean} [params.success=true] - Processing success status
   * @param {Date} [params.timestamp=new Date()] - Processing timestamp
   * @param {ApiErrorResponse} [params.error=null] - Error response if any
   * @param {Object} [params.type=null] - Result type
   * @param {Object} [params.udr=null] - UDR document
   * @param {Object} [params.source=null] - Source document
   * @param {Object} [params.vector=null] - Embeddings document
   */
  constructor({
    dataFlowRequestGUID = null,
    success = true,
    timestamp = new Date().toISOString,
    error = null,
    type = null,
    udr = null,
    source = null,
    vector = null,
  } = {}) {
    this.dataFlowRequestGUID = dataFlowRequestGUID;
    this.success = success;
    this.timestamp = timestamp;
    this.error = error;
    this.type = type;
    this.udr = udr;
    this.source = source;
    this.vector = vector;
  }

  // Additional public or private methods can be added here if needed
}
