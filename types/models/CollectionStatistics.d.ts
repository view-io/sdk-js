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
    constructor(stats?: {
        Collection: any;
        DocumentCount: number;
        TotalBytes: number;
        TermCount: number;
        KeyValueCount: number;
    });
    Collection: any;
    DocumentCount: number;
    TotalBytes: number;
    TermCount: number;
    KeyValueCount: number;
}
