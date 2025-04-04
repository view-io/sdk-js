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
  constructor({ Timestamp = {}, Existing = [], Missing = [] } = {}) {
    const { Start = new Date().toISOString(), TotalMs = 0, Messages = {} } = Timestamp;

    /** @type {Object} */
    this.timestamp = {
      start: Start,
      totalMs: TotalMs,
      messages: Messages,
    };

    /** @type {Array<ExistingEmbedding>} */
    this.existing = Existing.map((item) => new ExistingMetaData(item));

    /** @type {Array<MissingEmbedding>} */
    this.missing = Missing.map((item) => new ExistingMetaData(item));
  }
}
