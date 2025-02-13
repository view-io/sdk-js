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
    _Collection: any;
    _DocumentCount: number;
    _TotalBytes: number;
    _TermCount: number;
    _KeyValueCount: number;
    /**
     * Sets the collection.
     * @param {Object} value - The collection to set.
     */
    set Collection(value: any);
    /**
     * Gets or sets the collection.
     * @returns {Object} The collection.
     */
    get Collection(): any;
    /**
     * Sets the document count.
     * @param {number} value - The document count to set.
     */
    set DocumentCount(value: number);
    /**
     * Gets or sets the document count.
     * @returns {number} The document count.
     */
    get DocumentCount(): number;
    /**
     * Sets the total bytes.
     * @param {number} value - The total bytes to set.
     */
    set TotalBytes(value: number);
    /**
     * Gets or sets the total bytes.
     * @returns {number} The total bytes.
     */
    get TotalBytes(): number;
    /**
     * Sets the term count.
     * @param {number} value - The term count to set.
     */
    set TermCount(value: number);
    /**
     * Gets or sets the term count.
     * @returns {number} The term count.
     */
    get TermCount(): number;
    /**
     * Sets the key-value count.
     * @param {number} value - The key-value count to set.
     */
    set KeyValueCount(value: number);
    /**
     * Gets or sets the key-value count.
     * @returns {number} The key-value count.
     */
    get KeyValueCount(): number;
}
