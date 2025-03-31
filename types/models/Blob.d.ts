/**
 * BLOB model to match API response and handle data access.
 */
export default class Blob {
    /**
     * @param {Object} blob - Information about the BLOB.
     * @param {string} [blob.GUID] - Globally-unique identifier.
     * @param {string} [blob.TenantGUID] - Tenant GUID.
     * @param {string} [blob.ContentType] - Content type of the BLOB.
     * @param {string} [blob.Name] - Name of the BLOB.
     * @param {string} [blob.Description] - Description of the BLOB.
     * @param {string} [blob.Url] - URL to access the BLOB.
     * @param {number} [blob.Length] - Content length of the BLOB.
     * @param {string} [blob.RefObjType] - Type of the referenced object.
     * @param {string} [blob.RefObjGUID] - GUID of the referenced object.
     * @param {boolean} [blob.IsPublic] - Whether the BLOB is publicly accessible.
     * @param {string} [blob.MD5Hash] - MD5 hash of the BLOB.
     * @param {string} [blob.SHA1Hash] - SHA1 hash of the BLOB.
     * @param {string} [blob.SHA256Hash] - SHA256 hash of the BLOB.
     * @param {string} [blob.Data] - BLOB data.
     * @param {string} [blob.CreatedUtc] - UTC timestamp of creation (ISO string).
     */
    constructor(blob?: {
        GUID?: string;
        TenantGUID?: string;
        ContentType?: string;
        Name?: string;
        Description?: string;
        Url?: string;
        Length?: number;
        RefObjType?: string;
        RefObjGUID?: string;
        IsPublic?: boolean;
        MD5Hash?: string;
        SHA1Hash?: string;
        SHA256Hash?: string;
        Data?: string;
        CreatedUtc?: string;
    });
    GUID: string;
    TenantGUID: string;
    ContentType: string;
    Name: string;
    Description: string;
    Url: string;
    Length: number;
    RefObjType: string;
    RefObjGUID: string;
    IsPublic: boolean;
    MD5Hash: string;
    SHA1Hash: string;
    SHA256Hash: string;
    CreatedUtc: string;
    Data: string;
}
