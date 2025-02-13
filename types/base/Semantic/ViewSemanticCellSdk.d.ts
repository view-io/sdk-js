/**
 * View Semantic Cell SDK.
 * @module base/ViewSemanticCellSdk
 * @version 0.1.0
 */
export default class ViewSemanticCellSdk extends ViewSdkBase {
    /**
     * Constructs a new ViewSemanticCellSdk.
     * @alias module:base/ViewSemanticCellSdk
     * @class
     * @param {string} endpoint - Endpoint URL (default is "http://localhost:8341/").
     */
    constructor(endpoint: string);
    Header: string;
    /**
     * Extract semantic cells from a document.
     * @param {Object} scReq - The semantic cell extraction request.
     * @param {string} scReq.DocumentType - The document type (default is `DocumentTypeEnum.Unknown`).
     * @param {number} scReq.MinChunkContentLength - The minimum chunk content length (default is 2).
     * @param {number} scReq.MaxChunkContentLength - The maximum chunk content length (default is 512).
     * @param {number} scReq.ShiftSize - The shift size (default is 512).
     * @param {PdfOptions} scReq.Pdf - The PDF options (default is a new instance of `PdfOptions`).
     * @param {MetadataRule} scReq.MetadataRule - The metadata rule containing the endpoint (default is null).
     * @param {Uint8Array} scReq.Data - The data to be included in the extraction (default is null).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SemanticCellResponse|null>} A promise resolving to the extracted SemanticCellResponse or null.
     * @throws {Error} If the request is invalid.
     */
    processRaw: (scReq: {
        DocumentType: string;
        MinChunkContentLength: number;
        MaxChunkContentLength: number;
        ShiftSize: number;
        Pdf: PdfOptions;
        MetadataRule: MetadataRule;
        Data: Uint8Array;
    }, cancelToken?: object) => Promise<SemanticCellResponse | null>;
    /**
     * Extract semantic cells from a document.
     *
     * @param {Object} docType - Document type.
     * @param {Object} mdRule - Metadata rule containing configuration for the extraction.
     * @param {string} mdRule.GUID - Metadata rule GUID (automatically generated if not provided).
     * @param {string} mdRule.TenantGUID - Tenant GUID (default is null).
     * @param {string} mdRule.BucketGUID - Bucket GUID (default is null).
     * @param {string} mdRule.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} mdRule.Name - Name of the rule (default is null).
     * @param {string} mdRule.ContentType - Content type (default is "text/plain").
     * @param {string} mdRule.Prefix - Prefix (default is null).
     * @param {string} mdRule.Suffix - Suffix (default is null).
     * @param {string} mdRule.ProcessingEndpoint - Processing endpoint (default is localhost).
     * @param {string} mdRule.CleanupEndpoint - Cleanup endpoint (default is localhost).
     * @param {string} mdRule.TypeDetectorEndpoint - Type detector endpoint (default is localhost).
     * @param {string} mdRule.SemanticCellEndpoint - Semantic cell endpoint (default is localhost).
     * @param {number} mdRule.MaxChunkContentLength - Maximum chunk content length (default is 512).
     * @param {number} mdRule.ShiftSize - Shift size (default is 512).
     * @param {string} mdRule.UdrEndpoint - UDR endpoint (default is localhost).
     * @param {string} mdRule.DataCatalogType - Data catalog type (default is "Lexi").
     * @param {string} mdRule.DataCatalogEndpoint - Data catalog endpoint (default is localhost).
     * @param {string} mdRule.DataCatalogCollection - Data catalog collection identifier (default is null).
     * @param {string} mdRule.GraphRepositoryGUID - Graph repository GUID (default is null).
     * @param {number} mdRule.TopTerms - Number of top terms to request (default is 25).
     * @param {boolean} mdRule.CaseInsensitive - Enable case insensitive processing (default is true).
     * @param {boolean} mdRule.IncludeFlattened - Enable inclusion of flattened representation (default is true).
     * @param {string} mdRule.TargetBucketGUID - Target bucket GUID (default is null).
     * @param {number} mdRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
     * @param {number|null} mdRule.RetentionMinutes - Minutes to retain generated document (default is null).
     * @param {Date} mdRule.CreatedUtc - Creation timestamp (default is current UTC time).
     * @param {Uint8Array} data - Data.
     * @param {number} [maxChunkContentLength=512] - Maximum chunk content length.
     * @param {number} [shiftSize=512] - Shift size.
     * @param {Object} pdfOptions - PDF options for processing.
     * @param {string} pdfOptions.Mode - The PDF processing mode (default is "BoundingBoxExtraction").
     * @param {boolean} pdfOptions.ReturnMarkup - True to indicate that the marked-up PDF including bounding boxes should be returned (default is false).
     * @param {boolean} pdfOptions.RetainArtifact - True to indicate that the marked-up PDF file should be preserved in the temporary directory (default is false).
     * @param {object} [cancelToken] - Optional object with an abort method to cancel the request.
     * @returns {Promise<SemanticCellResponse>} A promise resolving to the semantic cell response.
     * @throws {Error} If data is null or empty, or if the metadata rule is null.
     */
    process: (docType: any, mdRule: {
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
    }, data: Uint8Array, maxChunkContentLength?: number, shiftSize?: number, pdfOptions?: {
        Mode: string;
        ReturnMarkup: boolean;
        RetainArtifact: boolean;
    }, cancelToken?: object) => Promise<SemanticCellResponse>;
}
import ViewSdkBase from '../ViewSDKBase';
import SemanticCellResponse from '../../models/SemanticCellResponse';
