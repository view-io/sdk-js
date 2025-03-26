import { v4 as uuidV4 } from 'uuid';

export default class Collection {
  /**
   * @param {Object} collection Information about the collection.
   * @param {string} collection.GUID - Collection GUID (automatically generated if not provided).
   * @param {string} collection.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} collection.Name - Name of the collection.
   * @param {boolean} collection.AllowOverwrites - Indicates whether source documents can be overwritten (default is true).
   * @param {string} collection.AdditionalData - Additional data (optional).
   * @param {Date} collection.CreatedUtc - Creation timestamp in UTC.
   */
  constructor(collection) {
    const { GUID, TenantGUID, Name, AllowOverwrites, AdditionalData, CreatedUtc } = collection;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.Name = Name;
    this.AllowOverwrites = AllowOverwrites;
    this.AdditionalData = AdditionalData;
    this.CreatedUtc = CreatedUtc;
  }
}
