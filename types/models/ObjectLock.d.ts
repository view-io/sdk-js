export default class ObjectLock {
    /**
     * @param {Object} objectLock Information about the object lock.
     * @param {string} objectLock.GUID - Object lock GUID (automatically generated if not provided).
     * @param {string} objectLock.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} objectLock.NodeGUID - Node GUID (automatically generated if not provided).
     * @param {string} objectLock.BucketGUID - Bucket GUID (automatically generated if not provided).
     * @param {string} objectLock.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} objectLock.ObjectGUID - Object GUID (automatically generated if not provided).
     * @param {string} objectLock.Key - Key for the object (default is empty string).
     * @param {string} objectLock.Version - Version of the object (default is empty string).
     * @param {boolean} objectLock.IsReadLock - Indicates if this is a read lock (default is false).
     * @param {boolean} objectLock.IsWriteLock - Indicates if this is a write lock (default is false).
     * @param {Date} objectLock.CreatedUtc - Creation timestamp in UTC.
     */
    constructor(objectLock: {
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
        CreatedUtc: Date;
    });
    GUID: any;
    TenantGUID: any;
    NodeGUID: any;
    BucketGUID: any;
    OwnerGUID: any;
    ObjectGUID: any;
    Key: string;
    Version: string;
    IsReadLock: boolean;
    IsWriteLock: boolean;
    CreatedUtc: Date;
}
