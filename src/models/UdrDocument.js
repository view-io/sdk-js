import { DocumentTypeEnum } from './../enums/DocumentTypeEnum';

export default class UdrDocument {
  /**
   * Constructor to initialize UdrDocument with provided values or defaults.
   * @param {Object} params - Parameters to initialize the UdrDocument instance.
   */
  constructor({
    GUID = null,
    Success = false,
    Timestamp = new Date().toISOString,
    Error = null,
    AdditionalData = null,
    Metadata = {},
    Key = null,
    Type = DocumentTypeEnum.Unknown,
    Terms = [],
    Schema = null,
    TopTerms = null,
    Postings = [],
    SemanticCells = [],
  } = {}) {
    this.GUID = GUID; // GUID
    this.Success = Success; // Indicates if the parser was successful
    this.Timestamp = Timestamp; // Start and end timestamps
    this.Error = Error; // Error response, if any
    this.AdditionalData = AdditionalData; // Additional data
    this.Metadata = Metadata; // Metadata attached to the result
    this.Key = Key; // Key
    this.Type = Type; // Document type
    this.Terms = Terms; // Terms identified through text extraction
    this.TopTerms = TopTerms;
    this.Schema = Schema; // Schema
    this.Postings = Postings; // Postings
    this.SemanticCells = SemanticCells; // Semantic cells
  }

  /**
   * Retrieve top terms and their counts.
   * @param {number} count - Number of top terms to retrieve (default is 10).
   * @returns {Object} Dictionary containing terms and their counts.
   */
  getTopTerms(count = 10) {
    if (count < 1) throw new RangeError('Count must be at least 1');

    const termCounts = this.Terms.reduce((acc, term) => {
      if (term) {
        acc[term] = (acc[term] || 0) + 1;
      }
      return acc;
    }, {});

    return Object.entries(termCounts)
      .sort((a, b) => b[1] - a[1]) // Sort by count descending
      .slice(0, count) // Take the top `count` terms
      .reduce((acc, [term, count]) => {
        acc[term] = count;
        return acc;
      }, {});
  }

  // Getter and setter for Metadata
  get Metadata() {
    return this._Metadata;
  }

  set Metadata(value) {
    this._Metadata = value || {};
  }

  // Getter and setter for Terms
  get Terms() {
    return this._Terms;
  }

  set Terms(value) {
    this._Terms = value || [];
  }

  // Getter and setter for Postings
  get Postings() {
    return this._Postings;
  }

  set Postings(value) {
    this._Postings = value || [];
  }

  // Getter and setter for SemanticCells
  get SemanticCells() {
    return this._SemanticCells;
  }

  set SemanticCells(value) {
    this._SemanticCells = value || [];
  }
}
