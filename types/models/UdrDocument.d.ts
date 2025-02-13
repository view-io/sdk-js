export default class UdrDocument {
    /**
     * Constructor to initialize UdrDocument with provided values or defaults.
     * @param {Object} params - Parameters to initialize the UdrDocument instance.
     */
    constructor({ GUID, Success, Timestamp, Error, AdditionalData, Metadata, Key, Type, Terms, Schema, TopTerms, Postings, SemanticCells, }?: any);
    GUID: any;
    Success: any;
    Timestamp: any;
    Error: any;
    AdditionalData: any;
    set Metadata(value: any);
    get Metadata(): any;
    Key: any;
    Type: any;
    set Terms(value: any);
    get Terms(): any;
    TopTerms: any;
    Schema: any;
    set Postings(value: any);
    get Postings(): any;
    set SemanticCells(value: any);
    get SemanticCells(): any;
    /**
     * Retrieve top terms and their counts.
     * @param {number} count - Number of top terms to retrieve (default is 10).
     * @returns {Object} Dictionary containing terms and their counts.
     */
    getTopTerms(count?: number): any;
    _Metadata: any;
    _Terms: any;
    _Postings: any;
    _SemanticCells: any;
}
