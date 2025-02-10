/**
 * Source document statistics.
 */
export default class SourceDocumentStatistics {
  /**
   * @param {Object} stats - Information about the source document statistics.
   * @param {SourceDocument} stats.SourceDocument - The source document associated with the statistics.
   */
  constructor(stats = {}) {
    const { SourceDocument = null } = stats;

    this._SourceDocument = SourceDocument; // Source document associated with the statistics
  }

  /**
   * Gets or sets the source document.
   * @returns {Object} The source document.
   */
  get SourceDocument() {
    return this._SourceDocument;
  }

  /**
   * Sets the source document.
   * @param {Object} value - The source document to set.
   */
  set SourceDocument(value) {
    if (value === null) {
      throw new Error('SourceDocument cannot be null');
    }
    this._SourceDocument = value;
  }

  /**
   * Gets the tenant GUID.
   * @returns {string} The tenant GUID.
   */
  get TenantGUID() {
    return this._SourceDocument ? this._SourceDocument.TenantGUID : '';
  }

  /**
   * Gets the collection GUID.
   * @returns {string} The collection GUID.
   */
  get CollectionGUID() {
    return this._SourceDocument ? this._SourceDocument.CollectionGUID : '';
  }

  /**
   * Gets the source document GUID.
   * @returns {string} The source document GUID.
   */
  get SourceDocumentGUID() {
    return this._SourceDocument ? this._SourceDocument.GUID : '';
  }

  /**
   * Gets the term count.
   * @returns {number} The term count.
   */
  get Terms() {
    return this._SourceDocument && this._SourceDocument.UdrDocument && this._SourceDocument.UdrDocument.Terms
      ? this._SourceDocument.UdrDocument.Terms.length
      : 0;
  }

  /**
   * Gets the distinct term count.
   * @returns {number} The distinct term count.
   */
  get DistinctTerms() {
    if (this._SourceDocument && this._SourceDocument.UdrDocument && this._SourceDocument.UdrDocument.Terms) {
      const terms = this._SourceDocument.UdrDocument.Terms;
      return [...new Set(terms)].length; // Get unique terms count
    }
    return 0;
  }

  /**
   * Gets the key-value pairs count.
   * @returns {number} The key-value pairs count.
   */
  get KeyValuePairs() {
    if (
      this._SourceDocument &&
      this._SourceDocument.UdrDocument &&
      this._SourceDocument.UdrDocument.Schema &&
      this._SourceDocument.UdrDocument.Schema.Flattened
    ) {
      return this._SourceDocument.UdrDocument.Schema.Flattened.length;
    }
    return 0;
  }

  /**
   * Gets the semantic cell count.
   * @returns {number} The semantic cell count.
   */
  get SemanticCells() {
    const semanticCells =
      this._SourceDocument && this._SourceDocument.UdrDocument && this._SourceDocument.UdrDocument.SemanticCells;
    if (semanticCells) {
      return this.countSemanticCells(semanticCells);
    }
    return 0;
  }

  /**
   * Gets the semantic cell bytes.
   * @returns {number} The semantic cell bytes.
   */
  get SemanticCellBytes() {
    const semanticCells =
      this._SourceDocument && this._SourceDocument.UdrDocument && this._SourceDocument.UdrDocument.SemanticCells;
    if (semanticCells) {
      return this.sumSemanticCellBytes(semanticCells);
    }
    return 0;
  }

  /**
   * Gets the semantic chunk count.
   * @returns {number} The semantic chunk count.
   */
  get SemanticChunks() {
    const semanticCells =
      this._SourceDocument && this._SourceDocument.UdrDocument && this._SourceDocument.UdrDocument.SemanticCells;
    if (semanticCells) {
      return this.countSemanticChunks(semanticCells);
    }
    return 0;
  }

  /**
   * Gets the semantic chunk bytes.
   * @returns {number} The semantic chunk bytes.
   */
  get SemanticChunkBytes() {
    const semanticCells =
      this._SourceDocument && this._SourceDocument.UdrDocument && this._SourceDocument.UdrDocument.SemanticCells;
    if (semanticCells) {
      return this.sumSemanticChunkBytes(semanticCells);
    }
    return 0;
  }

  /**
   * Counts the semantic cells.
   * @param {Array} cells - List of semantic cells.
   * @returns {number} The count of semantic cells.
   */
  countSemanticCells(cells) {
    let count = 0;

    cells.forEach((cell) => {
      count++;

      if (cell.Children && cell.Children.length > 0) {
        count += this.countSemanticCells(cell.Children);
      }
    });

    return count;
  }

  /**
   * Sums the semantic cell bytes.
   * @param {Array} cells - List of semantic cells.
   * @returns {number} The total semantic cell bytes.
   */
  sumSemanticCellBytes(cells) {
    let bytes = 0;

    cells.forEach((cell) => {
      if (cell.Length > 0) bytes += cell.Length;

      if (cell.Children && cell.Children.length > 0) {
        bytes += this.sumSemanticCellBytes(cell.Children);
      }
    });

    return bytes;
  }

  /**
   * Counts the semantic chunks.
   * @param {Array} cells - List of semantic cells.
   * @returns {number} The count of semantic chunks.
   */
  countSemanticChunks(cells) {
    let count = 0;

    cells.forEach((cell) => {
      if (cell.Chunks && cell.Chunks.length > 0) count += cell.Chunks.length;

      if (cell.Children && cell.Children.length > 0) {
        count += this.countSemanticChunks(cell.Children);
      }
    });

    return count;
  }

  /**
   * Sums the semantic chunk bytes.
   * @param {Array} cells - List of semantic cells.
   * @returns {number} The total semantic chunk bytes.
   */
  sumSemanticChunkBytes(cells) {
    let bytes = 0;

    cells.forEach((cell) => {
      if (cell.Chunks && cell.Chunks.length > 0) {
        cell.Chunks.forEach((chunk) => {
          bytes += chunk.Length;
        });
      }

      if (cell.Children && cell.Children.length > 0) {
        bytes += this.sumSemanticChunkBytes(cell.Children);
      }
    });

    return bytes;
  }
}
