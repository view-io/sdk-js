export default class OllamaEmbeddingsResult {
  /**
   * @param {Object} resultData - Parameters for the OllamaEmbeddingsResult instance.
   * @param {string|null} resultData.Model - The model identifier (default is null).
   * @param {Array<Array<number>>} resultData.Embeddings - A list of embeddings arrays (default is an empty array).
   */
  constructor(resultData = {}) {
    const { Model = null, Embeddings = [] } = resultData;

    if (!Array.isArray(Embeddings) || !Embeddings.every((item) => Array.isArray(item))) {
      throw new TypeError('Embeddings must be an array of arrays of numbers.');
    }

    this.Model = Model;
    this.Embeddings = Embeddings;
  }

  /**
   * Build embeddings maps from content and Ollama result.
   * @param {Array<string>} content - List of content strings.
   * @param {OllamaEmbeddingsResult} ollamaResult - The Ollama embeddings result instance.
   * @returns {Array<EmbeddingsMap>} - List of embeddings maps.
   */
  static toEmbeddingsMaps(content, ollamaResult) {
    if (!Array.isArray(content) || content.length === 0) {
      return [];
    }

    if (!ollamaResult || !Array.isArray(ollamaResult.Embeddings) || ollamaResult.Embeddings.length !== content.length) {
      return [];
    }

    return content.map((item, index) => ({
      Content: item,
      Embeddings: ollamaResult.Embeddings[index],
    }));
  }
}
