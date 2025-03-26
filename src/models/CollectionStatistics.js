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
    const { Collection, DocumentCount, TotalBytes, TermCount, KeyValueCount } = stats;

    this.Collection = Collection;
    this.DocumentCount = DocumentCount >= 0 ? DocumentCount : 0;
    this.TotalBytes = TotalBytes >= 0 ? TotalBytes : 0;
    this.TermCount = TermCount >= 0 ? TermCount : 0;
    this.KeyValueCount = KeyValueCount >= 0 ? KeyValueCount : 0;
  }
}
