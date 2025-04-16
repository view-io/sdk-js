/**
 * Represents a source document and its metadata.
 */
export default class SourceDocument {
    /**
     * @param {Object} params - Metadata for the source document.
     * @param {string} params.GUID - Unique identifier for the document.
     * @param {string} params.TenantGUID - Tenant identifier.
     * @param {string} params.BucketGUID - Bucket identifier.
     * @param {string} params.CollectionGUID - Collection identifier.
     * @param {string} params.ObjectGUID - Object identifier.
     * @param {string} params.ObjectKey - Object key (file name).
     * @param {string} params.ObjectVersion - Object version string.
     * @param {string} params.ContentType - MIME content type.
     * @param {string} params.DocumentType - Document type (e.g., Text, Pdf).
     * @param {string} params.SourceUrl - Object source URL.
     * @param {number} params.ContentLength - Size in bytes.
     * @param {string} params.MD5Hash - MD5 checksum.
     * @param {string} params.SHA1Hash - SHA-1 checksum.
     * @param {string} params.SHA256Hash - SHA-256 checksum.
     * @param {string} params.CreatedUtc - ISO timestamp for creation.
     * @param {object} params.UdrDocument - Data of document
     */
    constructor(params?: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        CollectionGUID: string;
        ObjectGUID: string;
        ObjectKey: string;
        ObjectVersion: string;
        ContentType: string;
        DocumentType: string;
        SourceUrl: string;
        ContentLength: number;
        MD5Hash: string;
        SHA1Hash: string;
        SHA256Hash: string;
        CreatedUtc: string;
        UdrDocument: object;
    });
    GUID: string;
    TenantGUID: string;
    BucketGUID: string;
    CollectionGUID: string;
    ObjectGUID: string;
    ObjectKey: string;
    ObjectVersion: string;
    ContentType: string;
    DocumentType: string;
    SourceUrl: string;
    ContentLength: number;
    MD5Hash: string;
    SHA1Hash: string;
    SHA256Hash: string;
    CreatedUtc: string;
    UdrDocument: any;
}
