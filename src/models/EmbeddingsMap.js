export default class EmbeddingsMap {
  /**
   * @param {Object} embeddingsMap Information about the embeddings map.
   * @param {string|null} embeddingsMap.Content - The content (default is null).
   * @param {number[]} embeddingsMap.Embeddings - The embeddings (default is an empty array).
   */
  constructor(embeddingsMap = {}) {
    const { Content = null, Embeddings = [] } = embeddingsMap;

    this.Content = Content;
    this.Embeddings = this.validateEmbeddings(Embeddings);
  }

  /**
   * Validates the embeddings array.
   * @param {number[]} value - The embeddings array.
   * @returns {number[]} - Validated embeddings array.
   */
  validateEmbeddings(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Embeddings must be an array of numbers.');
    }
    if (!value.every((item) => typeof item === 'number')) {
      throw new TypeError('Embeddings array must contain only numbers.');
    }
    return value;
  }
}
