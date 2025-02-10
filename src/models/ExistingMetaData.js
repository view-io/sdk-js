export default class ExistingMetaData {
  /**
   * @param {Object} data - The input data for the existing embedding.
   * @param {string} data.SHA256Hash - The SHA256 hash of the existing item.
   * @param {Array<number>} data.Embeddings - The embeddings associated with the existing item.
   */
  constructor({ SHA256Hash = '', Embeddings = [] } = {}) {
    /** @type {string} */
    this.sha256Hash = SHA256Hash;

    /** @type {Array<number>} */
    this.embeddings = Embeddings;
  }
}
