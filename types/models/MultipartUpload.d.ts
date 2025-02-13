export default class MultipartUpload {
    /**
     * @param {Object} data - The input data object.
     * @param {string} data.GUID - Unique identifier (generated if not provided).
     * @param {string} data.TenantGUID - Identifier for the tenant.
     * @param {string} data.BucketGUID - Identifier for the bucket.
     * @param {string} data.PoolGUID - Identifier for the pool.
     * @param {string} data.NodeGUID - Identifier for the node.
     * @param {string} data.OwnerGUID - Identifier for the owner.
     * @param {string} data.UploadGUID - Identifier for the upload.
     * @param {string} data.Key - Key of the object (e.g., filename).
     * @param {Date} data.StartedUtc - Start timestamp in UTC.
     * @param {Date} data.LastAccessUtc - Last access timestamp in UTC.
     * @param {Date} data.CreatedUtc - Creation timestamp in UTC.
     * @param {Date} data.ExpirationUtc - Expiration timestamp in UTC.
     * @param {Object} data.Owner - Information about the owner.
     * @param {Array} data.Parts - Parts of the object (default is an empty array).
     */
    constructor(data: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        PoolGUID: string;
        NodeGUID: string;
        OwnerGUID: string;
        UploadGUID: string;
        Key: string;
        StartedUtc: Date;
        LastAccessUtc: Date;
        CreatedUtc: Date;
        ExpirationUtc: Date;
        Owner: any;
        Parts: any[];
    });
    GUID: any;
    tenantGUID: string;
    bucketGUID: string;
    poolGUID: string;
    nodeGUID: string;
    ownerGUID: string;
    uploadGUID: string;
    key: string;
    startedUtc: Date;
    lastAccessUtc: Date;
    createdUtc: Date;
    expirationUtc: Date;
    owner: UserMaster;
    parts: any[];
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
import UserMaster from './UserMaster';
