import { v4 as uuidV4 } from 'uuid';
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
  constructor(entry) {
    const {
      GUID = uuidV4(),
      TenantGUID,
      BucketGUID,
      OwnerGUID,
      UserGUID,
      CanonicalUser = '',
      EnableRead = false,
      EnableReadAcp = false,
      EnableWrite = false,
      EnableWriteAcp = false,
      FullControl = false,
      CreatedUtc = new Date().toISOString(),
    } = entry;

    this.GUID = GUID;
    this.tenantGUID = TenantGUID;
    this.bucketGUID = BucketGUID;
    this.ownerGUID = OwnerGUID;
    this.userGUID = UserGUID;
    this.canonicalUser = CanonicalUser;
    this.enableRead = EnableRead;
    this.enableReadAcp = EnableReadAcp;
    this.enableWrite = EnableWrite;
    this.enableWriteAcp = EnableWriteAcp;
    this.fullControl = FullControl;
    this.createdUtc = CreatedUtc;
  }
}
