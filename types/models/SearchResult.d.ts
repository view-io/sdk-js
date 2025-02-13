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
    constructor(searchResult?: {
        Success: boolean;
        Timestamp: any;
        DataFlowRequestGUID: string;
        EndOfResults: boolean;
        ContinuationToken: string;
        RecordsRemaining: number;
        Documents: any[][];
        Embeddings: any[][];
    });
    Success: boolean;
    Timestamp: any;
    DataFlowRequestGUID: string;
    EndOfResults: boolean;
    ContinuationToken: string;
    _RecordsRemaining: number;
    /**
     * RecordsRemaining setter with validation.
     * @param {number} value - The number of remaining records.
     */
    set RecordsRemaining(value: number);
    /**
     * RecordsRemaining getter.
     */
    get RecordsRemaining(): number;
    Documents: any[][];
    MaxResults: any;
    TotalRecords: any;
    Embeddings: any[][];
}
