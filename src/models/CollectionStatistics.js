/**
 * Collection statistics.
 */
export default class CollectionStatistics {
  /**
   * @param {Object} stats - Information about the collection statistics.
   * @param {Object} stats.Collection - The collection associated with the statistics.
   * @param {number} stats.DocumentCount - Number of source documents.
   * @param {number} stats.TotalBytes - Total number of bytes.
   * @param {number} stats.TermCount - Term count.
   * @param {number} stats.KeyValueCount - Key-value count.
   */
  constructor(stats = {}) {
    const { Collection = null, DocumentCount = 0, TotalBytes = 0, TermCount = 0, KeyValueCount = 0 } = stats;

    this._Collection = Collection; // Collection associated with the statistics
    this._DocumentCount = DocumentCount >= 0 ? DocumentCount : 0; // Ensure DocumentCount is non-negative
    this._TotalBytes = TotalBytes >= 0 ? TotalBytes : 0; // Ensure TotalBytes is non-negative
    this._TermCount = TermCount >= 0 ? TermCount : 0; // Ensure TermCount is non-negative
    this._KeyValueCount = KeyValueCount >= 0 ? KeyValueCount : 0; // Ensure KeyValueCount is non-negative
  }

  /**
   * Gets or sets the collection.
   * @returns {Object} The collection.
   */
  get Collection() {
    return this._Collection;
  }

  /**
   * Sets the collection.
   * @param {Object} value - The collection to set.
   */
  set Collection(value) {
    if (value === null) {
      throw new Error('Collection cannot be null');
    }
    this._Collection = value;
  }

  /**
   * Gets or sets the document count.
   * @returns {number} The document count.
   */
  get DocumentCount() {
    return this._DocumentCount;
  }

  /**
   * Sets the document count.
   * @param {number} value - The document count to set.
   */
  set DocumentCount(value) {
    if (value < 0) {
      throw new Error('DocumentCount cannot be negative');
    }
    this._DocumentCount = value;
  }

  /**
   * Gets or sets the total bytes.
   * @returns {number} The total bytes.
   */
  get TotalBytes() {
    return this._TotalBytes;
  }

  /**
   * Sets the total bytes.
   * @param {number} value - The total bytes to set.
   */
  set TotalBytes(value) {
    if (value < 0) {
      throw new Error('TotalBytes cannot be negative');
    }
    this._TotalBytes = value;
  }

  /**
   * Gets or sets the term count.
   * @returns {number} The term count.
   */
  get TermCount() {
    return this._TermCount;
  }

  /**
   * Sets the term count.
   * @param {number} value - The term count to set.
   */
  set TermCount(value) {
    if (value < 0) {
      throw new Error('TermCount cannot be negative');
    }
    this._TermCount = value;
  }

  /**
   * Gets or sets the key-value count.
   * @returns {number} The key-value count.
   */
  get KeyValueCount() {
    return this._KeyValueCount;
  }

  /**
   * Sets the key-value count.
   * @param {number} value - The key-value count to set.
   */
  set KeyValueCount(value) {
    if (value < 0) {
      throw new Error('KeyValueCount cannot be negative');
    }
    this._KeyValueCount = value;
  }
}
