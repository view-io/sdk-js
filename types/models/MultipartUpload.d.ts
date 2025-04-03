/**
 * Represents a multipart upload session for an object.
 */
export default class MultipartUpload {
    /**
     * @param {Object} data - Multipart upload metadata.
     * @param {string} data.GUID - Unique identifier of the multipart upload.
     * @param {string} data.TenantGUID - Tenant identifier.
     * @param {string} data.BucketGUID - Bucket identifier.
     * @param {string} data.PoolGUID - Pool identifier.
     * @param {string} data.NodeGUID - Node identifier.
     * @param {string} data.OwnerGUID - Owner identifier.
     * @param {string} data.UploadGUID - Upload session GUID.
     * @param {string} data.Key - Object key (e.g. filename).
     * @param {string} data.StartedUtc - When the upload started (ISO timestamp).
     * @param {string} data.LastAccessUtc - Last access timestamp.
     * @param {string} data.CreatedUtc - Creation timestamp.
     * @param {string} data.ExpirationUtc - Expiration timestamp.
     * @param {Array} data.Parts - List of parts (currently empty).
     */
    constructor(data?: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        PoolGUID: string;
        NodeGUID: string;
        OwnerGUID: string;
        UploadGUID: string;
        Key: string;
        StartedUtc: string;
        LastAccessUtc: string;
        CreatedUtc: string;
        ExpirationUtc: string;
        Parts: any[];
    });
    GUID: string;
    TenantGUID: string;
    BucketGUID: string;
    PoolGUID: string;
    NodeGUID: string;
    OwnerGUID: string;
    UploadGUID: string;
    Key: string;
    StartedUtc: string;
    LastAccessUtc: string;
    CreatedUtc: string;
    ExpirationUtc: string;
    Parts: any[];
}
