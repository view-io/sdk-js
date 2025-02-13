/**
 * CrawlOperation model to represent the execution of a crawl plan.
 */
export default class CrawlOperation {
    /**
     * @param {Object} operation - Crawl operation data.
     * @param {string} [operation.GUID] - Operation GUID (auto-generated if not provided).
     * @param {string} [operation.TenantGUID] - Tenant GUID (auto-generated if not provided).
     * @param {string} [operation.CrawlPlanGUID] - Crawl plan GUID.
     * @param {string} [operation.CrawlScheduleGUID] - Crawl schedule GUID.
     * @param {string} [operation.CrawlFilterGUID] - Crawl filter GUID.
     * @param {string} [operation.DataRepositoryGUID] - Data repository GUID (auto-generated if not provided).
     * @param {string} [operation.ViewEndpointGUID] - View endpoint GUID (auto-generated if not provided).
     * @param {string} [operation.MetadataRuleGUID] - Metadata rule GUID.
     * @param {string} [operation.EmbeddingsRuleGUID] - Embeddings rule GUID.
     * @param {string} [operation.ProcessingEndpoint] - Data flow endpoint for processing.
     * @param {string} [operation.CleanupEndpoint] - Data flow endpoint for cleanup.
     * @param {string} [operation.Name] - Name of the crawl operation.
     * @param {long} [operation.ObjectsEnumerated] - Number of objects enumerated (must be non-negative).
     * @param {long} [operation.BytesEnumerated] - Number of bytes enumerated (must be non-negative).
     * @param {long} [operation.ObjectsAdded] - Number of objects added since last enumeration (must be non-negative).
     * @param {long} [operation.BytesAdded] - Number of bytes added since last enumeration (must be non-negative).
     * @param {long} [operation.ObjectsUpdated] - Number of objects updated since last enumeration (must be non-negative).
     * @param {long} [operation.BytesUpdated] - Number of bytes updated since last enumeration (must be non-negative).
     * @param {long} [operation.ObjectsDeleted] - Number of objects deleted since last enumeration (must be non-negative).
     * @param {long} [operation.BytesDeleted] - Number of bytes deleted since last enumeration (must be non-negative).
     * @param {string} [operation.EnumerationFile] - Enumeration file.
     * @param {long} [operation.ObjectsSuccess] - Number of objects successfully written (must be non-negative).
     * @param {long} [operation.BytesSuccess] - Number of bytes successfully written (must be non-negative).
     * @param {long} [operation.ObjectsFailed] - Number of objects unable to be written (must be non-negative).
     * @param {long} [operation.BytesFailed] - Number of bytes unable to be written (must be non-negative).
     * @param {CrawlStateEnum} [operation.State] - State of the crawl operation (default: NotStarted).
     * @param {Date} [operation.CreatedUtc] - UTC creation timestamp (auto-generated if not provided).
     * @param {Date} [operation.StartUtc] - Start timestamp.
     * @param {Date} [operation.StartEnumerationUtc] - Enumeration start timestamp.
     * @param {Date} [operation.StartRetrievalUtc] - Retrieval start timestamp.
     * @param {Date} [operation.FinishEnumerationUtc] - Enumeration finish timestamp.
     * @param {Date} [operation.FinishRetrievalUtc] - Retrieval finish timestamp.
     * @param {Date} [operation.FinishUtc] - Finish timestamp.
     * @param {string} [operation.AdditionalData] - Additional data.
     */
    constructor(operation?: {
        GUID?: string;
        TenantGUID?: string;
        CrawlPlanGUID?: string;
        CrawlScheduleGUID?: string;
        CrawlFilterGUID?: string;
        DataRepositoryGUID?: string;
        ViewEndpointGUID?: string;
        MetadataRuleGUID?: string;
        EmbeddingsRuleGUID?: string;
        ProcessingEndpoint?: string;
        CleanupEndpoint?: string;
        Name?: string;
        ObjectsEnumerated?: long;
        BytesEnumerated?: long;
        ObjectsAdded?: long;
        BytesAdded?: long;
        ObjectsUpdated?: long;
        BytesUpdated?: long;
        ObjectsDeleted?: long;
        BytesDeleted?: long;
        EnumerationFile?: string;
        ObjectsSuccess?: long;
        BytesSuccess?: long;
        ObjectsFailed?: long;
        BytesFailed?: long;
        State?: Readonly<{
            NotStarted: "NotStarted";
            InProgress: "InProgress";
            Completed: "Completed";
            Failed: "Failed";
        }>;
        CreatedUtc?: Date;
        StartUtc?: Date;
        StartEnumerationUtc?: Date;
        StartRetrievalUtc?: Date;
        FinishEnumerationUtc?: Date;
        FinishRetrievalUtc?: Date;
        FinishUtc?: Date;
        AdditionalData?: string;
    });
    guid: any;
    tenantGUID: any;
    crawlPlanGUID: string;
    crawlScheduleGUID: string;
    crawlFilterGUID: string;
    dataRepositoryGUID: any;
    viewEndpointGUID: any;
    metadataRuleGUID: string;
    embeddingsRuleGUID: string;
    processingEndpoint: string;
    cleanupEndpoint: string;
    name: string;
    objectsEnumerated: any;
    bytesEnumerated: any;
    objectsAdded: any;
    bytesAdded: any;
    objectsUpdated: any;
    bytesUpdated: any;
    objectsDeleted: any;
    bytesDeleted: any;
    enumerationFile: string;
    objectsSuccess: any;
    bytesSuccess: any;
    objectsFailed: any;
    bytesFailed: any;
    state: "NotStarted" | Readonly<{
        NotStarted: "NotStarted";
        InProgress: "InProgress";
        Completed: "Completed";
        Failed: "Failed";
    }>;
    createdUtc: string | Date;
    startUtc: Date;
    startEnumerationUtc: Date;
    startRetrievalUtc: Date;
    finishEnumerationUtc: Date;
    finishRetrievalUtc: Date;
    finishUtc: Date;
    additionalData: string;
    set Id(value: any);
    get Id(): any;
    _id: any;
    _validateNonNegative(value: any, name: any): any;
}
