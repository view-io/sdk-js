export default class SearchResult {
  /**
   * @param {Object} searchResult Information about the search result.
   * @param {boolean} searchResult.Success - Indicates if the parser was successful.
   * @param {Timestamp} searchResult.Timestamp - Timestamps.
   * @param {string} searchResult.DataFlowRequestGUID - Data flow request GUID.
   * @param {boolean} searchResult.EndOfResults - Boolean indicating end of results.
   * @param {string} searchResult.ContinuationToken - Continuation token for search continuation.
   * @param {number} searchResult.RecordsRemaining - Number of candidate records remaining in the search.
   * @param {Array[]} searchResult.Documents - Documents that matched the query.
   * @param {Array[]} searchResult.Embeddings - Embeddings documents generated from matched documents.
   */
  constructor(searchResult = {}) {
    const {
      Success = false,
      Timestamp = Date.now(),
      DataFlowRequestGUID = null,
      EndOfResults = true,
      ContinuationToken = null,
      RecordsRemaining = 0,
      Documents = [],
      Embeddings = [],
      MaxResults = 0,
      TotalRecords = 0,
    } = searchResult;

    this.Success = Success;
    this.Timestamp = Timestamp;
    this.DataFlowRequestGUID = DataFlowRequestGUID;
    this.EndOfResults = EndOfResults;
    this.ContinuationToken = ContinuationToken;
    this._RecordsRemaining = 0;
    this.RecordsRemaining = RecordsRemaining;
    this.Documents = Documents;
    this.MaxResults = MaxResults;
    this.TotalRecords = TotalRecords;
    this.Embeddings = Embeddings;
  }

  /**
   * RecordsRemaining getter.
   */
  get RecordsRemaining() {
    return this._RecordsRemaining;
  }

  /**
   * RecordsRemaining setter with validation.
   * @param {number} value - The number of remaining records.
   */
  set RecordsRemaining(value) {
    if (value < 0) {
      throw new Error('RecordsRemaining must be greater than or equal to 0');
    }
    this._RecordsRemaining = value;
  }
}
