/**
 * BLOB model to match API response and handle data access.
 */
export default class Blob {
  /**
   * @param {Object} blob - Information about the BLOB.
   * @param {string} [blob.GUID] - Globally-unique identifier.
   * @param {string} [blob.TenantGUID] - Tenant GUID.
   * @param {string} [blob.ContentType] - Content type of the BLOB.
   * @param {string} [blob.Name] - Name of the BLOB.
   * @param {string} [blob.Description] - Description of the BLOB.
   * @param {string} [blob.Url] - URL to access the BLOB.
   * @param {number} [blob.Length] - Content length of the BLOB.
   * @param {string} [blob.RefObjType] - Type of the referenced object.
   * @param {string} [blob.RefObjGUID] - GUID of the referenced object.
   * @param {boolean} [blob.IsPublic] - Whether the BLOB is publicly accessible.
   * @param {string} [blob.MD5Hash] - MD5 hash of the BLOB.
   * @param {string} [blob.SHA1Hash] - SHA1 hash of the BLOB.
   * @param {string} [blob.SHA256Hash] - SHA256 hash of the BLOB.
   * @param {string} [blob.Data] - BLOB data.
   * @param {string} [blob.CreatedUtc] - UTC timestamp of creation (ISO string).
   */
  constructor(blob = {}) {
    const {
      GUID,
      TenantGUID,
      ContentType,
      Name,
      Description,
      Url,
      Length,
      RefObjType,
      RefObjGUID,
      IsPublic,
      MD5Hash,
      SHA1Hash,
      SHA256Hash,
      CreatedUtc,
      Data,
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
    this.IsPublic = IsPublic;
    this.MD5Hash = MD5Hash;
    this.SHA1Hash = SHA1Hash;
    this.SHA256Hash = SHA256Hash;
    this.CreatedUtc = CreatedUtc;
    this.Data = Data;
  }
}
