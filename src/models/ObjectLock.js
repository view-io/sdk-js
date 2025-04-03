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
  constructor(objectLock = {}) {
    const {
      GUID,
      TenantGUID,
      NodeGUID,
      BucketGUID,
      OwnerGUID,
      ObjectGUID,
      Key,
      Version,
      IsReadLock,
      IsWriteLock,
      CreatedUtc,
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
