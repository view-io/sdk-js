export default class ObjectLock {
    /**
     * @param {Object} objectLock - Information about the object lock.
     * @param {string} objectLock.GUID - Object lock GUID.
     * @param {string} objectLock.TenantGUID - Tenant GUID.
     * @param {string} objectLock.NodeGUID - Node GUID.
     * @param {string} objectLock.BucketGUID - Bucket GUID.
     * @param {string} objectLock.OwnerGUID - Owner GUID.
     * @param {string} objectLock.ObjectGUID - Object GUID.
     * @param {string} objectLock.Key - Key of the object.
     * @param {string} objectLock.Version - Version of the object.
     * @param {boolean} objectLock.IsReadLock - Indicates if this is a read lock.
     * @param {boolean} objectLock.IsWriteLock - Indicates if this is a write lock.
     * @param {string} objectLock.CreatedUtc - Creation timestamp (ISO string).
     */
    constructor(objectLock?: {
        GUID: string;
        TenantGUID: string;
        NodeGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        ObjectGUID: string;
        Key: string;
        Version: string;
        IsReadLock: boolean;
        IsWriteLock: boolean;
        CreatedUtc: string;
    });
    GUID: string;
    TenantGUID: string;
    NodeGUID: string;
    BucketGUID: string;
    OwnerGUID: string;
    ObjectGUID: string;
    Key: string;
    Version: string;
    IsReadLock: boolean;
    IsWriteLock: boolean;
    CreatedUtc: string;
}
