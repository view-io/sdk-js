import { v4 as uuidV4 } from 'uuid';
import UserMaster from './UserMaster';
import { BucketCategoryEnum } from '../enums/BucketCategoryEnum';

export default class BucketMetadata {
  /**
   * @param {Object} metadata Information about the bucket metadata.
   * @param {string} metadata.GUID - Bucket GUID (automatically generated if not provided).
   * @param {string} metadata.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} metadata.PoolGUID - Pool GUID (automatically generated if not provided).
   * @param {string} metadata.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} metadata.Category - Bucket category.
   * @param {string} metadata.Name - Name of the bucket.
   * @param {string} metadata.RegionString - Region string (default is 'us-west-1').
   * @param {boolean} metadata.Versioning - Enable or disable versioning (default is true).
   * @param {number|null} metadata.RetentionMinutes - Retention in minutes (optional).
   * @param {number|null} metadata.MaxUploadSize - Maximum upload size (optional).
   * @param {number} metadata.MaxMultipartUploadSeconds - Maximum multipart upload seconds (default is seven days).
   * @param {Date} metadata.LastAccessUtc - Last access timestamp in UTC.
   * @param {Date} metadata.CreatedUtc - Created timestamp in UTC.
   * @param {Object} metadata.Owner Information about the credential.
   * @param {string} metadata.Owner.GUID - User's unique identifier (automatically generated if not provided).
   * @param {string} metadata.Owner.TenantGUID - Tenant's unique identifier (automatically generated if not provided).
   * @param {string} metadata.Owner.FirstName - User's first name.
   * @param {string} metadata.Owner.LastName - User's last name.
   * @param {string} metadata.Owner.Notes - Any additional notes for the user.
   * @param {string} metadata.Owner.Email - User's email address.
   * @param {string} metadata.Owner.PasswordSha256 - SHA-256 hashed password (not serialized).
   * @param {boolean} metadata.Owner.Active - Whether the user is active (default: true).
   * @param {Date} metadata.Owner.CreatedUtc - Date and time the user was created (in UTC, default: current time).
   */
  constructor(metadata) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      PoolGUID = uuidV4(),
      OwnerGUID = uuidV4(),
      Category = BucketCategoryEnum.Data,
      Name = '',
      RegionString = 'us-west-1',
      Versioning = true,
      RetentionMinutes = null,
      MaxUploadSize = null,
      MaxMultipartUploadSeconds = 60 * 60 * 24 * 7, // seven days
      LastAccessUtc = new Date(),
      CreatedUtc = new Date(),
      Owner = null,
    } = metadata;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.PoolGUID = PoolGUID;
    this.OwnerGUID = OwnerGUID;
    this.Category = Category;
    this.Name = Name;
    this.RegionString = RegionString;
    this.Versioning = Versioning;
    this.RetentionMinutes = RetentionMinutes; // Set through the setter method
    this.MaxUploadSize = MaxUploadSize;
    this.MaxMultipartUploadSeconds = MaxMultipartUploadSeconds;
    this.LastAccessUtc = LastAccessUtc;
    this.CreatedUtc = CreatedUtc;
    this.Owner = Owner ? new UserMaster(Owner) : null;
  }

  /**
   * RetentionMinutes getter.
   */
  get RetentionMinutes() {
    return this._retentionMinutes;
  }

  /**
   * RetentionMinutes setter with validation.
   * @param {number|null} value - The retention minutes value.
   */
  set RetentionMinutes(value) {
    if (value !== null && value < 1) {
      throw new Error('RetentionMinutes must be greater than 0');
    }
    this._retentionMinutes = value;
  }
}
