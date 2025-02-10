export default class EmbeddingModel {
  /**
   * @param {Object} data - Data containing embeddings and associated information.
   * @param {boolean} data.Success - Whether the embedding request was successful.
   * @param {string} data.Model - The model name (e.g., "all-MiniLM-L6-v2").
   * @param {string} data.ApiKey - The API key used (if provided, otherwise null).
   * @param {Array} data.Contents - Array of text chunks.
   * @param {Array} data.Embeddings - Array of embedding vectors corresponding to each text chunk.
   */
  constructor(data) {
    const { Success = true, Model = 'all-MiniLM-L6-v2', ApiKey = null, Contents = [], Embeddings = [] } = data;

    this.Success = Success; // Request success status
    this.Model = Model; // The model used for embeddings
    this.ApiKey = ApiKey; // The API key (if provided)
    this.Contents = Contents; // Array of text chunks
    this.Embeddings = Embeddings; // Array of embedding vectors
  }

  /**
   * Validates whether the embeddings correspond to the contents.
   * @returns {boolean} - Returns true if each content has a corresponding embedding.
   */
  validateEmbeddings() {
    return this.Contents.length === this.Embeddings.length;
  }

  /**
   * Retrieves the embedding for a specific chunk of text.
   * @param {number} index - Index of the text chunk.
   * @returns {Array|null} - Returns the embedding for the specified chunk or null if the index is invalid.
   */
  getEmbeddingForChunk(index) {
    if (index >= 0 && index < this.Contents.length) {
      return this.Embeddings[index];
    }
    return null; // Return null if index is out of bounds
  }

  /**
   * Adds a new chunk of text and its corresponding embedding.
   * @param {string} text - The chunk of text.
   * @param {Array} embedding - The embedding vector.
   */
  addContentWithEmbedding(text, embedding) {
    this.Contents.push(text);
    this.Embeddings.push(embedding);
  }

  /**
   * Returns the number of contents (text chunks).
   * @returns {number} - The number of content chunks.
   */
  getContentCount() {
    return this.Contents.length;
  }
}
