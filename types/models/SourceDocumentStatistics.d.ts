/**
 * Source document statistics.
 */
export default class SourceDocumentStatistics {
    /**
     * @param {Object} stats - Information about the source document statistics.
     * @param {SourceDocument} stats.SourceDocument - The source document associated with the statistics.
     */
    constructor(stats?: {
        SourceDocument: any;
    });
    _SourceDocument: any;
    /**
     * Sets the source document.
     * @param {Object} value - The source document to set.
     */
    set SourceDocument(value: any);
    /**
     * Gets or sets the source document.
     * @returns {Object} The source document.
     */
    get SourceDocument(): any;
    /**
     * Gets the tenant GUID.
     * @returns {string} The tenant GUID.
     */
    get TenantGUID(): string;
    /**
     * Gets the collection GUID.
     * @returns {string} The collection GUID.
     */
    get CollectionGUID(): string;
    /**
     * Gets the source document GUID.
     * @returns {string} The source document GUID.
     */
    get SourceDocumentGUID(): string;
    /**
     * Gets the term count.
     * @returns {number} The term count.
     */
    get Terms(): number;
    /**
     * Gets the distinct term count.
     * @returns {number} The distinct term count.
     */
    get DistinctTerms(): number;
    /**
     * Gets the key-value pairs count.
     * @returns {number} The key-value pairs count.
     */
    get KeyValuePairs(): number;
    /**
     * Gets the semantic cell count.
     * @returns {number} The semantic cell count.
     */
    get SemanticCells(): number;
    /**
     * Gets the semantic cell bytes.
     * @returns {number} The semantic cell bytes.
     */
    get SemanticCellBytes(): number;
    /**
     * Gets the semantic chunk count.
     * @returns {number} The semantic chunk count.
     */
    get SemanticChunks(): number;
    /**
     * Gets the semantic chunk bytes.
     * @returns {number} The semantic chunk bytes.
     */
    get SemanticChunkBytes(): number;
    /**
     * Counts the semantic cells.
     * @param {Array} cells - List of semantic cells.
     * @returns {number} The count of semantic cells.
     */
    countSemanticCells(cells: any[]): number;
    /**
     * Sums the semantic cell bytes.
     * @param {Array} cells - List of semantic cells.
     * @returns {number} The total semantic cell bytes.
     */
    sumSemanticCellBytes(cells: any[]): number;
    /**
     * Counts the semantic chunks.
     * @param {Array} cells - List of semantic cells.
     * @returns {number} The count of semantic chunks.
     */
    countSemanticChunks(cells: any[]): number;
    /**
     * Sums the semantic chunk bytes.
     * @param {Array} cells - List of semantic cells.
     * @returns {number} The total semantic chunk bytes.
     */
    sumSemanticChunkBytes(cells: any[]): number;
}
