/**
 * Represents metadata for an object stored in a bucket.
 */
export default class ObjectMetadata {
    /**
     * @param {Object} data - Object metadata.
     * @param {string} data.GUID - Unique object identifier.
     * @param {string} data.TenantGUID - Tenant identifier.
     * @param {string} data.NodeGUID - Node identifier.
     * @param {string} data.PoolGUID - Pool identifier.
     * @param {string} data.BucketGUID - Bucket identifier.
     * @param {string} data.OwnerGUID - Owner identifier.
     * @param {string} data.Key - Object key or name.
     * @param {string} data.Version - Version of the object.
     * @param {boolean} data.IsLatest - Whether this is the latest version.
     * @param {boolean} data.IsDeleteMarker - If this object is marked for deletion.
     * @param {boolean} data.IsLocal - Whether the object is stored locally.
     * @param {string} data.ContentType - MIME type of the object.
     * @param {string} data.DocumentType - Document classification type.
     * @param {string} data.SourceUrl - Public or internal source URL.
     * @param {string} data.MD5Hash - MD5 checksum.
     * @param {string} data.SHA1Hash - SHA1 checksum.
     * @param {string} data.SHA256Hash - SHA256 checksum.
     * @param {boolean} data.IsEncrypted - Whether the object is encrypted.
     * @param {string} data.WriteMode - Write mode used (e.g., GUID).
     * @param {string} data.CompressionType - Compression type (e.g., None, Gzip).
     * @param {number} data.ContentLength - Original size in bytes.
     * @param {number} data.CompressedLength - Compressed size in bytes.
     * @param {number} data.EncryptedLength - Encrypted size in bytes.
     * @param {number} data.CompressionRatioPercent - Compression ratio in percentage.
     * @param {number} data.CompressionRatioX - Compression multiplier.
     * @param {string} data.LastAccessUtc - Last access timestamp (ISO format).
     * @param {string} data.LastModifiedUtc - Last modified timestamp (ISO format).
     * @param {string} data.CreatedUtc - Creation timestamp (ISO format).
     */
    constructor(data?: {
        GUID: string;
        TenantGUID: string;
        NodeGUID: string;
        PoolGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        Key: string;
        Version: string;
        IsLatest: boolean;
        IsDeleteMarker: boolean;
        IsLocal: boolean;
        ContentType: string;
        DocumentType: string;
        SourceUrl: string;
        MD5Hash: string;
        SHA1Hash: string;
        SHA256Hash: string;
        IsEncrypted: boolean;
        WriteMode: string;
        CompressionType: string;
        ContentLength: number;
        CompressedLength: number;
        EncryptedLength: number;
        CompressionRatioPercent: number;
        CompressionRatioX: number;
        LastAccessUtc: string;
        LastModifiedUtc: string;
        CreatedUtc: string;
    });
    GUID: string;
    TenantGUID: string;
    NodeGUID: string;
    PoolGUID: string;
    BucketGUID: string;
    OwnerGUID: string;
    Key: string;
    Version: string;
    IsLatest: boolean;
    IsDeleteMarker: boolean;
    IsLocal: boolean;
    ContentType: string;
    DocumentType: string;
    SourceUrl: string;
    MD5Hash: string;
    SHA1Hash: string;
    SHA256Hash: string;
    IsEncrypted: boolean;
    WriteMode: string;
    CompressionType: string;
    ContentLength: number;
    CompressedLength: number;
    EncryptedLength: number;
    CompressionRatioPercent: number;
    CompressionRatioX: number;
    LastAccessUtc: string;
    LastModifiedUtc: string;
    CreatedUtc: string;
}
