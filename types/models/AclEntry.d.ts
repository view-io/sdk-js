/**
 * Represents an Access Control List (ACL) entry for a bucket.
 */
export default class AclEntry {
    /**
     * @param {Object} entry - Access control entry details.
     * @param {string} entry.GUID - Unique identifier for the ACL entry.
     * @param {string} entry.TenantGUID - Tenant identifier.
     * @param {string} entry.BucketGUID - Bucket identifier.
     * @param {string} entry.OwnerGUID - Owner identifier.
     * @param {string} entry.UserGUID - User identifier.
     * @param {string} entry.CanonicalUser - Canonical user string.
     * @param {boolean} entry.EnableRead - Read permission.
     * @param {boolean} entry.EnableReadAcp - Read ACP permission.
     * @param {boolean} entry.EnableWrite - Write permission.
     * @param {boolean} entry.EnableWriteAcp - Write ACP permission.
     * @param {boolean} entry.FullControl - Full control permission.
     * @param {string} entry.CreatedUtc - ISO timestamp when the entry was created.
     */
    constructor(entry?: {
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
        CreatedUtc: string;
    });
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
    CreatedUtc: string;
}
