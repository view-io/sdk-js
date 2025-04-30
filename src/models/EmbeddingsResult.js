/**
 * Represents the result of an embeddings generation request
 * @module models/EmbeddingsResult
 */
export default class EmbeddingsResult {
  /**
   * Constructor for EmbeddingsResult
   * @param {Object} data - The data to initialize the EmbeddingsResult with
   * @param {boolean} data.Success - Whether the request was successful
   * @param {number} data.StatusCode - HTTP status code of the response
   * @param {number} data.BatchCount - Number of batches processed
   * @param {Array} data.SemanticCells - Array of semantic cells with embeddings
   * @param {Array<{Content: string, Embeddings: number[]}>} data.ContentEmbeddings - Array of content embeddings results
   */
  constructor({ Success, StatusCode, BatchCount, SemanticCells, ContentEmbeddings }) {
    this.Success = Success;
    this.StatusCode = StatusCode;
    this.BatchCount = BatchCount;
    this.SemanticCells = SemanticCells;
    this.ContentEmbeddings = ContentEmbeddings;
  }
}
