import ExistingMetaData from './ExistingMetaData';

/**
 * Represents the response structure for timestamped data with existing and missing embeddings.
 */
export default class EmbeddingResponse {
  /**
   * @param {Object} data - The input data to initialize the response.
   * @param {Object} data.Timestamp - The timestamp information.
   * @param {string} data.Timestamp.Start - The start timestamp.
   * @param {number} data.Timestamp.TotalMs - The total time in milliseconds.
   * @param {Object} data.Timestamp.Messages - Additional messages.
   * @param {Array<Object>} data.Existing - The list of existing embeddings.
   * @param {Array<Object>} data.Missing - The list of missing embeddings.
   */
  constructor(data) {
    this.Timestamp = {
      Start: data.Timestamp.Start,
      TotalMs: data.Timestamp.TotalMs,
      Messages: data.Timestamp.Messages,
    };

    this.Existing = data.Existing;
    this.Missing = data.Missing;
  }
}
