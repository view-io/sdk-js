/**
 * Class representing a Metadata Rule configuration.
 */
export default class MetadataRule {
    /**
     * Create a new MetadataRule instance.
     *
     * @param {Object} metadataRule - Metadata rule configuration.
     * @param {string} [metadataRule.GUID] - Unique identifier for the metadata rule.
     * @param {string} [metadataRule.TenantGUID] - Tenant identifier.
     * @param {string} [metadataRule.BucketGUID] - Bucket identifier.
     * @param {string} [metadataRule.OwnerGUID] - Owner identifier.
     * @param {string} [metadataRule.Name] - Name of the rule.
     * @param {string} [metadataRule.ContentType] - Content type to match (e.g., '*', 'text/plain').
     * @param {string} [metadataRule.ProcessingEndpoint] - URL to processing endpoint.
     * @param {string} [metadataRule.ProcessingAccessKey] - Access key for processing endpoint.
     * @param {string} [metadataRule.CleanupEndpoint] - URL to cleanup endpoint.
     * @param {string} [metadataRule.CleanupAccessKey] - Access key for cleanup endpoint.
     * @param {number} [metadataRule.MinChunkContentLength] - Minimum length of chunk content.
     * @param {number} [metadataRule.MaxChunkContentLength] - Maximum length of chunk content.
     * @param {number} [metadataRule.MaxTokensPerChunk] - Maximum number of tokens per chunk.
     * @param {number} [metadataRule.ShiftSize] - Number of bytes to shift window when chunking.
     * @param {boolean} [metadataRule.ImageTextExtraction] - Enable image text extraction.
     * @param {string} [metadataRule.DataCatalogType] - Data catalog type (e.g., 'Lexi').
     * @param {string} [metadataRule.DataCatalogEndpoint] - Endpoint URL for data catalog.
     * @param {string} [metadataRule.DataCatalogAccessKey] - Access key for data catalog.
     * @param {string} [metadataRule.DataCatalogCollection] - Data catalog collection ID.
     * @param {string} [metadataRule.GraphRepositoryGUID] - Identifier for the graph repository.
     * @param {number} [metadataRule.TopTerms] - Number of top terms to extract.
     * @param {boolean} [metadataRule.CaseInsensitive] - Enable case-insensitive processing.
     * @param {boolean} [metadataRule.IncludeFlattened] - Include flattened document representation.
     * @param {number} [metadataRule.MaxContentLength] - Maximum size (in bytes) of content to process.
     * @param {string|Date} [metadataRule.CreatedUtc] - UTC timestamp when the rule was created.
     */
    constructor(metadataRule: {
        GUID?: string;
        TenantGUID?: string;
        BucketGUID?: string;
        OwnerGUID?: string;
        Name?: string;
        ContentType?: string;
        ProcessingEndpoint?: string;
        ProcessingAccessKey?: string;
        CleanupEndpoint?: string;
        CleanupAccessKey?: string;
        MinChunkContentLength?: number;
        MaxChunkContentLength?: number;
        MaxTokensPerChunk?: number;
        ShiftSize?: number;
        ImageTextExtraction?: boolean;
        DataCatalogType?: string;
        DataCatalogEndpoint?: string;
        DataCatalogAccessKey?: string;
        DataCatalogCollection?: string;
        GraphRepositoryGUID?: string;
        TopTerms?: number;
        CaseInsensitive?: boolean;
        IncludeFlattened?: boolean;
        MaxContentLength?: number;
        CreatedUtc?: string | Date;
    });
    GUID: any;
    TenantGUID: string;
    BucketGUID: string;
    OwnerGUID: any;
    Name: string;
    ContentType: string;
    ProcessingEndpoint: string;
    ProcessingAccessKey: string;
    CleanupEndpoint: string;
    CleanupAccessKey: string;
    MinChunkContentLength: number;
    MaxChunkContentLength: any;
    ShiftSize: any;
    MaxTokensPerChunk: number;
    ImageTextExtraction: boolean;
    DataCatalogType: string;
    DataCatalogEndpoint: string;
    DataCatalogAccessKey: string;
    DataCatalogCollection: string;
    GraphRepositoryGUID: string;
    TopTerms: any;
    CaseInsensitive: boolean;
    IncludeFlattened: boolean;
    MaxContentLength: any;
    CreatedUtc: Date;
    validateMaxChunkContentLength(value: any): any;
    validateShiftSize(value: any, maxChunkContentLength: any): any;
    validateTopTerms(value: any): any;
    validateMaxContentLength(value: any): any;
}
