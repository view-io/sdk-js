export default class MetadataRule {
    /**
     * @param {Object} metadataRule Information about the metadata rule.
     * @param {string} metadataRule.GUID - Metadata rule GUID (automatically generated if not provided).
     * @param {string} metadataRule.TenantGUID - Tenant GUID (default is null).
     * @param {string} metadataRule.BucketGUID - Bucket GUID (default is null).
     * @param {string} metadataRule.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} metadataRule.Name - Name of the rule (default is null).
     * @param {string} metadataRule.ContentType - Content type (default is "text/plain").
     * @param {string} metadataRule.Prefix - Prefix (default is null).
     * @param {string} metadataRule.Suffix - Suffix (default is null).
     * @param {string} metadataRule.ProcessingEndpoint - Processing endpoint (default is localhost).
     * @param {string} metadataRule.CleanupEndpoint - Cleanup endpoint (default is localhost).
     * @param {string} metadataRule.TypeDetectorEndpoint - Type detector endpoint (default is localhost).
     * @param {string} metadataRule.SemanticCellEndpoint - Semantic cell endpoint (default is localhost).
     * @param {number} metadataRule.MaxChunkContentLength - Maximum chunk content length (default is 512).
     * @param {number} metadataRule.ShiftSize - Shift size (default is 512).
     * @param {string} metadataRule.UdrEndpoint - UDR endpoint (default is localhost).
     * @param {string} metadataRule.DataCatalogType - Data catalog type (default is DataCatalogTypeEnum.Lexi).
     * @param {string} metadataRule.DataCatalogEndpoint - Data catalog endpoint (default is localhost).
     * @param {string} metadataRule.DataCatalogCollection - Data catalog collection identifier (default is null).
     * @param {string} metadataRule.GraphRepositoryGUID - Graph repository GUID (default is null).
     * @param {number} metadataRule.TopTerms - Number of top terms to request (default is 25).
     * @param {boolean} metadataRule.CaseInsensitive - Enable case insensitive processing (default is true).
     * @param {boolean} metadataRule.IncludeFlattened - Enable inclusion of flattened representation (default is true).
     * @param {string} metadataRule.TargetBucketGUID - Target bucket GUID (default is null).
     * @param {number} metadataRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
     * @param {number|null} metadataRule.RetentionMinutes - Minutes to retain generated document (default is null).
     * @param {Date} metadataRule.CreatedUtc - Creation timestamp (default is current UTC time).
     */
    constructor(metadataRule: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        Name: string;
        ContentType: string;
        Prefix: string;
        Suffix: string;
        ProcessingEndpoint: string;
        CleanupEndpoint: string;
        TypeDetectorEndpoint: string;
        SemanticCellEndpoint: string;
        MaxChunkContentLength: number;
        ShiftSize: number;
        UdrEndpoint: string;
        DataCatalogType: string;
        DataCatalogEndpoint: string;
        DataCatalogCollection: string;
        GraphRepositoryGUID: string;
        TopTerms: number;
        CaseInsensitive: boolean;
        IncludeFlattened: boolean;
        TargetBucketGUID: string;
        MaxContentLength: number;
        RetentionMinutes: number | null;
        CreatedUtc: Date;
    });
    GUID: any;
    TenantGUID: string;
    BucketGUID: string;
    OwnerGUID: any;
    Name: string;
    ContentType: string;
    Prefix: string;
    Suffix: string;
    ProcessingEndpoint: string;
    CleanupEndpoint: string;
    TypeDetectorEndpoint: string;
    SemanticCellEndpoint: string;
    MaxChunkContentLength: any;
    ShiftSize: any;
    UdrEndpoint: string;
    DataCatalogType: string;
    DataCatalogEndpoint: string;
    DataCatalogCollection: string;
    GraphRepositoryGUID: string;
    TopTerms: any;
    CaseInsensitive: boolean;
    IncludeFlattened: boolean;
    TargetBucketGUID: string;
    MaxContentLength: any;
    RetentionMinutes: any;
    CreatedUtc: Date;
    validateMaxChunkContentLength(value: any): any;
    validateShiftSize(value: any, maxChunkContentLength: any): any;
    validateTopTerms(value: any): any;
    validateMaxContentLength(value: any): any;
    validateRetentionMinutes(value: any): any;
}
