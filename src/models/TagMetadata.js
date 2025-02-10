import { v4 as uuidV4 } from 'uuid';

export default class TagMetaData {
  /**
   * @param {Object} tagMetaData Information about the tag metadata.
   * @param {string} tagMetaData.GUID - Globally unique identifier  (automatically generated if not provided).
   * @param {string} tagMetaData.TenantGUID - Tenant GUID (default is "default").
   * @param {string} tagMetaData.BucketGUID - Bucket GUID.
   * @param {string} tagMetaData.OwnerGUID - Owner GUID (default is "default").
   * @param {string} tagMetaData.Key - Key associated with the metadata.
   * @param {string} tagMetaData.Value - Value associated with the metadata.
   * @param {Date} tagMetaData.CreatedUtc - Creation timestamp in UTC.
   */
  constructor(tagMetaData) {
    const {
      GUID = uuidV4(),
      TenantGUID = 'default',
      BucketGUID,
      OwnerGUID = 'default',
      Key,
      Value,
      CreatedUtc = new Date(),
    } = tagMetaData;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.BucketGUID = BucketGUID;
    this.OwnerGUID = OwnerGUID;
    this.Key = Key;
    this.Value = Value;
    this.CreatedUtc = CreatedUtc instanceof Date ? CreatedUtc : new Date(CreatedUtc);
  }
}
