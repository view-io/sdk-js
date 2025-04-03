/**
 * CrawlOperation model to represent the execution of a crawl plan.
 */
export default class CrawlOperation {
    /**
     * @param {Object} operation - Crawl operation data.
     */
    constructor(operation?: any);
    GUID: any;
    TenantGUID: any;
    CrawlPlanGUID: any;
    CrawlScheduleGUID: any;
    CrawlFilterGUID: any;
    DataRepositoryGUID: any;
    ViewEndpointGUID: any;
    MetadataRuleGUID: any;
    EmbeddingsRuleGUID: any;
    ProcessingEndpoint: any;
    CleanupEndpoint: any;
    Name: any;
    ObjectsEnumerated: number;
    BytesEnumerated: number;
    ObjectsAdded: number;
    BytesAdded: number;
    ObjectsUpdated: number;
    BytesUpdated: number;
    ObjectsDeleted: number;
    BytesDeleted: number;
    EnumerationFile: any;
    ObjectsSuccess: number;
    BytesSuccess: number;
    ObjectsFailed: number;
    BytesFailed: number;
    State: any;
    CreatedUtc: any;
    StartUtc: any;
    StartEnumerationUtc: any;
    StartRetrievalUtc: any;
    FinishEnumerationUtc: any;
    FinishRetrievalUtc: any;
    FinishUtc: any;
    AdditionalData: any;
    /**
     * Validates a value to ensure it is non-negative.
     * @private
     * @param {number} value
     * @param {string} name
     * @returns {number}
     * @throws {RangeError}
     */
    private _validateNonNegative;
}
