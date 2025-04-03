export default class BucketMetadata {
  /**
   * @param {Object} metadata - Bucket metadata information.
   * @param {string} metadata.GUID - Bucket GUID.
   * @param {string} metadata.TenantGUID - Tenant GUID.
   * @param {string} metadata.PoolGUID - Pool GUID.
   * @param {string} metadata.OwnerGUID - Owner GUID.
   * @param {string} metadata.Name - Name of the bucket.
   * @param {string} metadata.RegionString - Bucket region string.
   * @param {boolean} metadata.Versioning - Whether versioning is enabled.
   * @param {number} metadata.MaxMultipartUploadSeconds - Max allowed multipart upload duration.
   * @param {string} metadata.LastAccessUtc - ISO timestamp of last access.
   * @param {string} metadata.CreatedUtc - ISO timestamp of creation.
   */
  constructor(metadata = {}) {
    const {
      GUID,
      TenantGUID,
      PoolGUID,
      OwnerGUID,
      Name,
      RegionString,
      Versioning,
      MaxMultipartUploadSeconds,
      LastAccessUtc,
      CreatedUtc,
    } = metadata;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.PoolGUID = PoolGUID;
    this.OwnerGUID = OwnerGUID;
    this.Name = Name;
    this.RegionString = RegionString;
    this.Versioning = Versioning;
    this.MaxMultipartUploadSeconds = MaxMultipartUploadSeconds;
    this.LastAccessUtc = LastAccessUtc;
    this.CreatedUtc = CreatedUtc;
  }
}
