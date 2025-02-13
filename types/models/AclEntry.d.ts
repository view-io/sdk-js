export default class AclEntry {
    /**
     * @param {Object} entry - Access control entry details.
     * @param {string} entry.GUID - Unique identifier for the entry.
     * @param {string} entry.TenantGUID - Tenant GUID.
     * @param {string} entry.BucketGUID - Bucket GUID.
     * @param {string} entry.OwnerGUID - Owner GUID.
     * @param {string} entry.UserGUID - User GUID.
     * @param {string} entry.CanonicalUser - Canonical user identifier.
     * @param {boolean} entry.EnableRead - Permission to read.
     * @param {boolean} entry.EnableReadAcp - Permission to read ACP.
     * @param {boolean} entry.EnableWrite - Permission to write.
     * @param {boolean} entry.EnableWriteAcp - Permission to write ACP.
     * @param {boolean} entry.FullControl - Full control permission.
     * @param {Date} entry.CreatedUtc - Creation timestamp in UTC.
     */
    constructor(entry: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        UserGUID: string;
        CanonicalUser: string;
        EnableRead: boolean;
        EnableReadAcp: boolean;
        EnableWrite: boolean;
        EnableWriteAcp: boolean;
        FullControl: boolean;
        CreatedUtc: Date;
    });
    GUID: any;
    tenantGUID: string;
    bucketGUID: string;
    ownerGUID: string;
    userGUID: string;
    canonicalUser: string;
    enableRead: boolean;
    enableReadAcp: boolean;
    enableWrite: boolean;
    enableWriteAcp: boolean;
    fullControl: boolean;
    createdUtc: string | Date;
}
