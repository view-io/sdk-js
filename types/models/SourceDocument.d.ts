/**
 * Instantiate a SourceDocument.
 * @param {Object} params - Parameters for initializing the document.
 * @param {string} [params.GUID] - GUID.
 * @param {string} [params.TenantGUID] - Tenant GUID.
 * @param {string} [params.BucketGUID] - Bucket GUID.
 * @param {string} [params.CollectionGUID] - Collection GUID.
 * @param {string} [params.ObjectGUID] - Object GUID.
 * @param {string} [params.DataFlowRequestGUID] - Data flow request GUID.
 * @param {string} [params.GraphRepositoryGUID] - Graph repository GUID.
 * @param {string} [params.GraphNodeIdentifier] - Graph node identifier.
 * @param {string} [params.DataRepositoryGUID] - Data repository GUID.
 * @param {string} [params.ObjectKey] - Object key.
 * @param {string} [params.ObjectVersion] - Object version.
 * @param {string} [params.ContentType] - Content type.
 * @param {string} [params.DocumentType] - Document type.
 * @param {string} [params.SourceUrl] - Source URL.
 * @param {number} [params.ContentLength] - Content length.
 * @param {string} [params.MD5Hash] - MD5 hash.
 * @param {string} [params.SHA1Hash] - SHA1 hash.
 * @param {string} [params.SHA256Hash] - SHA256 hash.
 * @param {string} [params.CreatedUtc] - Creation timestamp in UTC time.
 * @param {string} [params.ExpirationUtc] - Expiration timestamp in UTC time.
 * @param {Object} [params.Score] - Document score.
 * @param {Object} [params.UdrDocument] - UDR document.
 */
export default class SourceDocument {
    constructor(params?: {});
    GUID: any;
    TenantGUID: any;
    BucketGUID: any;
    CollectionGUID: any;
    ObjectGUID: any;
    DataFlowRequestGUID: any;
    GraphRepositoryGUID: any;
    GraphNodeIdentifier: any;
    DataRepositoryGUID: any;
    ObjectKey: any;
    ObjectVersion: any;
    ContentType: any;
    DocumentType: any;
    SourceUrl: any;
    _ContentLength: any;
    MD5Hash: any;
    SHA1Hash: any;
    SHA256Hash: any;
    CreatedUtc: any;
    ExpirationUtc: any;
    Score: any;
    UdrDocument: any;
    /**
     * Set the content length.
     * @param {number} value - The value to set.
     * @throws {RangeError} If the value is negative.
     */
    set ContentLength(value: number);
    /**
     * Get the content length.
     * @returns {number} The content length.
     */
    get ContentLength(): number;
}
