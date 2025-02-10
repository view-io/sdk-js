import { v4 as uuidV4 } from 'uuid';

export default class Blob {
  /**
   * @param {Object} blob Information about the BLOB.
   * @param {string} blob.GUID - Globally-unique identifier (automatically generated if not provided).
   * @param {string} blob.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} blob.ContentType - Content type of the BLOB.
   * @param {string} blob.Name - Name of the BLOB.
   * @param {string} blob.Description - Description of the BLOB.
   * @param {string} blob.Url - URL to access the BLOB directly.
   * @param {number} blob.Length - Content length of the BLOB.
   * @param {string} blob.RefObjType - Object type to which this BLOB refers.
   * @param {string} blob.RefObjGUID - Globally-unique identifier of the object to which this BLOB refers.
   * @param {string} blob.MD5Hash - MD5 hash of the BLOB data.
   * @param {string} blob.SHA1Hash - SHA1 hash of the BLOB data.
   * @param {string} blob.SHA256Hash - SHA256 hash of the BLOB data.
   * @param {Date} blob.CreatedUtc - Timestamp from creation in UTC.
   * @param {string} blob.Data - BLOB data.
   */
  constructor(blob) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      ContentType = null,
      Name = null,
      Description = null,
      Url = null,
      Length = 0,
      RefObjType = null,
      RefObjGUID = null,
      MD5Hash = '',
      SHA1Hash = null,
      SHA256Hash = null,
      CreatedUtc = new Date(),
      Data = null,
    } = blob;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.ContentType = ContentType;
    this.Name = Name;
    this.Description = Description;
    this.Url = Url;
    this.Length = Length;
    this.RefObjType = RefObjType;
    this.RefObjGUID = RefObjGUID;
    this.MD5Hash = MD5Hash;
    this.SHA1Hash = SHA1Hash;
    this.SHA256Hash = SHA256Hash;
    this.CreatedUtc = CreatedUtc;
    this.Data = Data;
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
