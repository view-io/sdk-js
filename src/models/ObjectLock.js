import { v4 as uuidV4 } from 'uuid';

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
  constructor(objectLock) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      NodeGUID = uuidV4(),
      BucketGUID = uuidV4(),
      OwnerGUID = uuidV4(),
      ObjectGUID = uuidV4(),
      Key = '',
      Version = '',
      IsReadLock = false,
      IsWriteLock = false,
      CreatedUtc = new Date(),
    } = objectLock;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.NodeGUID = NodeGUID;
    this.BucketGUID = BucketGUID;
    this.OwnerGUID = OwnerGUID;
    this.ObjectGUID = ObjectGUID;
    this.Key = Key;
    this.Version = Version;
    this.IsReadLock = IsReadLock;
    this.IsWriteLock = IsWriteLock;
    this.CreatedUtc = CreatedUtc;
  }
}
