import { v4 as uuidV4 } from 'uuid';
import UserMaster from './UserMaster';

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
  constructor(data) {
    const {
      GUID = uuidV4(),
      TenantGUID,
      BucketGUID,
      PoolGUID,
      NodeGUID,
      OwnerGUID,
      UploadGUID,
      Key,
      StartedUtc = new Date(),
      LastAccessUtc = new Date(),
      CreatedUtc = new Date(),
      ExpirationUtc = new Date(),
      Owner = {},
      Parts = [],
    } = data;

    this.GUID = GUID;
    this.tenantGUID = TenantGUID;
    this.bucketGUID = BucketGUID;
    this.poolGUID = PoolGUID;
    this.nodeGUID = NodeGUID;
    this.ownerGUID = OwnerGUID;
    this.uploadGUID = UploadGUID;
    this.key = Key;
    this.startedUtc = new Date(StartedUtc);
    this.lastAccessUtc = new Date(LastAccessUtc);
    this.createdUtc = new Date(CreatedUtc);
    this.expirationUtc = new Date(ExpirationUtc);
    this.owner = new UserMaster(Owner);
    this.parts = Parts;
  }

  /**
   * ID getter.
   */
  get id() {
    return this._id;
  }

  /**
   * ID setter with validation.
   * @param {number} value - The ID value.
   */
  set id(value) {
    if (value < 1) {
      throw new Error('ID must be greater than 0');
    }
    this._id = value;
  }
}
