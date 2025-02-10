import EmbeddingsMap from './EmbeddingsMap';

export default class LcproxyEmbeddingsResult {
  /**
   * @param {Object} lcproxyEmbeddingsResult - Parameters for the LcproxyEmbeddingsResult instance.
   * @param {boolean} lcproxyEmbeddingsResult.Success - Indicates whether the operation was successful (default is false).
   * @param {string|null} lcproxyEmbeddingsResult.Model - The model used to generate embeddings (default is null).
   * @param {string[]} lcproxyEmbeddingsResult.Contents - Contents list (default is an empty array).
   * @param {number[][]} lcproxyEmbeddingsResult.Embeddings - Embeddings list of lists (default is an empty array).
   */
  constructor(lcproxyEmbeddingsResult = {}) {
    const { Success = false, Model = null, Contents = [], Embeddings = [] } = lcproxyEmbeddingsResult;

    this.Success = Success;
    this.Model = Model;
    this.Contents = this.validateContents(Contents);
    this.Embeddings = this.validateEmbeddings(Embeddings);
  }

  /**
   * Validates the contents list.
   * @param {string[]} value - The contents list.
   * @returns {string[]} - Validated contents list.
   */
  validateContents(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Contents must be an array of strings.');
    }
    if (!value.every((item) => typeof item === 'string')) {
      throw new TypeError('Each item in Contents must be a string.');
    }
    return value;
  }

  /**
   * Validates the embeddings list.
   * @param {number[][]} value - The embeddings list of lists.
   * @returns {number[][]} - Validated embeddings list.
   */
  validateEmbeddings(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Embeddings must be an array of arrays.');
    }
    if (!value.every((list) => Array.isArray(list) && list.every((item) => typeof item === 'number'))) {
      throw new TypeError('Each embedding must be an array of numbers.');
    }
    return value;
  }

  /**
   * Converts content and LcproxyEmbeddingsResult into EmbeddingsMap instances.
   * @param {string[]} content - The content list.
   * @param {LcproxyEmbeddingsResult} lcProxyResult - An instance of LcproxyEmbeddingsResult.
   * @returns {EmbeddingsMap[]} - List of EmbeddingsMap instances.
   */
  static toEmbeddingsMaps(content, lcProxyResult) {
    if (!Array.isArray(content) || content.length === 0) return [];
    if (
      !lcProxyResult ||
      !Array.isArray(lcProxyResult.Embeddings) ||
      lcProxyResult.Embeddings.length !== content.length
    ) {
      return [];
    }

    return content.map((item, index) => {
      return new EmbeddingsMap({
        Content: item,
        Embeddings: lcProxyResult.Embeddings[index],
      });
    });
  }
}
