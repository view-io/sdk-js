export default class Blob {
    /**
     * @param {Object} blob Information about the BLOB.
     * @param {string} blob.GUID - Globally-unique identifier (automatically generated if not provided).
     * @param {string} blob.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} blob.ContentType - Content type of the BLOB.
     * @param {string} blob.Name - Name of the BLOB.
     * @param {string} blob.Description - Description of the BLOB.
     * @param {string} blob.Url - URL to access the BLOB directly.
     * @param {number} blob.Length - Content length of the BLOB.
     * @param {string} blob.RefObjType - Object type to which this BLOB refers.
     * @param {string} blob.RefObjGUID - Globally-unique identifier of the object to which this BLOB refers.
     * @param {string} blob.MD5Hash - MD5 hash of the BLOB data.
     * @param {string} blob.SHA1Hash - SHA1 hash of the BLOB data.
     * @param {string} blob.SHA256Hash - SHA256 hash of the BLOB data.
     * @param {Date} blob.CreatedUtc - Timestamp from creation in UTC.
     * @param {string} blob.Data - BLOB data.
     */
    constructor(blob: {
        GUID: string;
        TenantGUID: string;
        ContentType: string;
        Name: string;
        Description: string;
        Url: string;
        Length: number;
        RefObjType: string;
        RefObjGUID: string;
        MD5Hash: string;
        SHA1Hash: string;
        SHA256Hash: string;
        CreatedUtc: Date;
        Data: string;
    });
    GUID: any;
    TenantGUID: any;
    ContentType: string;
    Name: string;
    Description: string;
    Url: string;
    Length: number;
    RefObjType: string;
    RefObjGUID: string;
    MD5Hash: string;
    SHA1Hash: string;
    SHA256Hash: string;
    CreatedUtc: Date;
    Data: string;
    /**
     * ID setter with validation.
     * @param {number} value - The ID value.
     */
    set id(value: number);
    /**
     * ID getter.
     */
    get id(): number;
    _id: number;
}
