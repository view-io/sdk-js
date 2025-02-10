import EmbeddingsMap from './EmbeddingsMap';

export default class EmbeddingsResult {
  /**
   * @param {Object} embeddingsResult Information about the embeddings result.
   * @param {boolean} embeddingsResult.Success - Indicates if the operation was successful (default is false).
   * @param {Timestamp} embeddingsResult.Timestamp - The timestamp (default is a new Timestamp instance).
   * @param {number} embeddingsResult.StatusCode - HTTP status code (default is 200, range 0-599).
   * @param {string|null} embeddingsResult.Url - The URL (default is null).
   * @param {string|null} embeddingsResult.Model - The model used to generate embeddings (default is null).
   * @param {EmbeddingsMap[]} embeddingsResult.Result - The result embeddings map array (default is an empty array).
   */
  constructor(embeddingsResult = {}) {
    const {
      Success = false,
      Timestamp = Date.now(),
      StatusCode = 200,
      Url = null,
      Model = null,
      Result = [],
    } = embeddingsResult;

    this.Success = Success;
    this.Timestamp = Timestamp;
    this.StatusCode = this.validateStatusCode(StatusCode);
    this.Url = Url;
    this.Model = Model;
    this.Result = this.validateResult(Result);
  }

  /**
   * Validates the status code.
   * @param {number} value - The HTTP status code.
   * @returns {number} - Validated status code.
   */
  validateStatusCode(value) {
    if (value < 0 || value > 599) {
      throw new RangeError('StatusCode must be between 0 and 599.');
    }
    return value;
  }

  /**
   * Validates the result array.
   * @param {EmbeddingsMap[]} value - The result array.
   * @returns {EmbeddingsMap[]} - Validated result array.
   */
  validateResult(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Result must be an array of EmbeddingsMap instances.');
    }
    if (!value.every((item) => item instanceof EmbeddingsMap)) {
      throw new TypeError('Each item in Result must be an instance of EmbeddingsMap.');
    }
    return value;
  }
}
