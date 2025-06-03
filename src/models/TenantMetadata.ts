import { v4 as uuidV4 } from 'uuid';

export default class TenantMetadata {
  /**
   * @param {Object} tenant Information about the credential.
   * @param {string} tenant.GUID - Tenant's unique identifier (automatically generated if not provided).
   * @param {string} tenant.AccountGUID - Account GUID.
   * @param {string} tenant.DefaultPoolGUID - Default pool's unique identifier for the tenant.
   * @param {string} tenant.Name - Tenant's name (default is an empty string).
   * @param {string} tenant.Region - Region for the tenant (default: 'us-west-1').
   * @param {string} tenant.S3BaseDomain - S3 base domain for the tenant.
   * @param {string} tenant.RestBaseDomain - REST base domain for the tenant.
   * @param {string|null} tenant.ParentGUID - Parent tenant's GUID (optional).
   * @param {boolean} tenant.Active - Whether the tenant is active (default: true).
   * @param {boolean} metadata.IsProtected - Indicates if the tenant is protected.
   * @param {Date} tenant.CreatedUtc - Creation timestamp in UTC (default: current time).
   */
  constructor(tenant) {
    const {
      GUID = uuidV4(),
      ParentGUID = null,
      AccountGUID = null,
      Name = '',
      Region = 'us-west-1',
      s3BaseDomain = '',
      RestBaseDomain = '',
      DefaultPoolGUID = '',
      Active = true,
      CreatedUtc = new Date().toISOString(),
      IsProtected = false,
    } = tenant;
    this.GUID = GUID;
    this.parentGUID = ParentGUID;
    this.name = Name;
    this.region = Region;
    this.s3BaseDomain = s3BaseDomain;
    this.restBaseDomain = RestBaseDomain;
    this.defaultPoolGUID = DefaultPoolGUID;
    this.active = Active;
    this.createdUtc = CreatedUtc;
    this.accountGUID = AccountGUID;
    this.isProtected = IsProtected;
  }

  /**
   * Getter for the tenant ID.
   * @returns {number} The tenant ID.
   */
  get id() {
    return this._id;
  }

  /**
   * Setter for the tenant ID with validation.
   * @param {number} value - The new ID value.
   */
  set id(value) {
    if (value < 1) {
      throw new Error('ID must be greater than 0');
    }
    this._id = value;
  }
}
