import { v4 as uuidV4 } from 'uuid';

export default class DirectorEmbeddingResponse {
  /**
   * @param {Object} params Parameters for the EmbeddingsModel.
   * @param {boolean} params.Success - Indicates whether the operation was successful.
   * @param {string} params.Model - The model used for embeddings.
   * @param {string|null} params.ApiKey - API key used for authentication.
   * @param {Array<string>} params.Contents - List of text chunks.
   * @param {Array<Array<number>>} params.Embeddings - Embedding vectors for contents (can be fewer or more than contents).
   */
  constructor({ Model = '', ApiKey = null, Contents = [], Embeddings = [], Success = null } = {}) {
    /** @type {string} */
    this.GUID = uuidV4();

    /** @type {string} */
    this.Model = Model;

    /** @type {string|null} */
    this.ApiKey = ApiKey;

    /** @type {Array<string>} */
    this.Contents = Contents;

    /** @type {Array<Array<number>>} */
    this.Embeddings = Embeddings;

    /** @type {boolean|null} */
    this.Success = Success;
  }

  /**
   * Get the embeddings associated with the response.
   * @returns {Array<Array<number>>} Embeddings of the response.
   */
  get Embeddings() {
    return this._Embeddings;
  }

  /**
   * Set the embeddings associated with the response.
   * @param {Array<Array<number>>} value List of embedding arrays.
   */
  set Embeddings(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Embeddings must be an array of arrays of numbers.');
    }
    this._Embeddings = value;
  }
}
