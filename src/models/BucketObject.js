import UserMaster from './UserMaster';

/**
 * Represents an object stored within a bucket.
 */
export default class BucketObject {
  /**
   * @param {Object} data - Bucket object metadata.
   * @param {string} data.GUID - Unique identifier for the object.
   * @param {string} data.TenantGUID - Tenant identifier.
   * @param {string} data.NodeGUID - Node identifier.
   * @param {string} data.PoolGUID - Pool identifier.
   * @param {string} data.BucketGUID - Bucket identifier.
   * @param {string} data.OwnerGUID - Owner identifier.
   * @param {string} data.DataCatalogDocumentGUID - Linked document GUID from the data catalog.
   * @param {string} data.DataFlowRequestGUID - GUID of the associated data flow request.
   * @param {boolean} data.DataFlowSuccess - Indicates if the data flow succeeded.
   * @param {string} data.Key - Object key (e.g., filename).
   * @param {string} data.Version - Object version.
   * @param {boolean} data.IsLatest - Whether this is the latest version.
   * @param {boolean} data.IsDeleteMarker - Whether this object is marked for deletion.
   * @param {boolean} data.IsLocal - Whether the object is stored locally.
   * @param {string} data.ContentType - MIME type of the object.
   * @param {string} data.DocumentType - Type of document (e.g., Pdf, Text).
   * @param {string} data.SourceUrl - Source URL to access the object.
   * @param {string} data.MD5Hash - MD5 hash of the object.
   * @param {string} data.SHA1Hash - SHA-1 hash of the object.
   * @param {string} data.SHA256Hash - SHA-256 hash of the object.
   * @param {boolean} data.IsEncrypted - Whether the object is encrypted.
   * @param {string} data.WriteMode - Object write mode (e.g., GUID).
   * @param {string} data.CompressionType - Compression type (e.g., None, GZip).
   * @param {number} data.ContentLength - Uncompressed content size in bytes.
   * @param {number} data.CompressedLength - Compressed size in bytes.
   * @param {number} data.EncryptedLength - Encrypted size in bytes.
   * @param {number} data.CompressionRatioPercent - Compression ratio in percent.
   * @param {number} data.CompressionRatioX - Compression ratio (e.g., 1.5x).
   * @param {string} data.LastAccessUtc - ISO timestamp of last access.
   * @param {string} data.LastModifiedUtc - ISO timestamp of last modification.
   * @param {string} data.CreatedUtc - ISO timestamp of object creation.
   * @param {Object} [data.Owner] - Owner information object (optional).
   */
  constructor(data = {}) {
    const {
      GUID,
      TenantGUID,
      NodeGUID,
      PoolGUID,
      BucketGUID,
      OwnerGUID,
      DataCatalogDocumentGUID,
      DataFlowRequestGUID,
      DataFlowSuccess,
      Key,
      Version,
      IsLatest,
      IsDeleteMarker,
      IsLocal,
      ContentType,
      DocumentType,
      SourceUrl,
      MD5Hash,
      SHA1Hash,
      SHA256Hash,
      IsEncrypted,
      WriteMode,
      CompressionType,
      ContentLength,
      CompressedLength,
      EncryptedLength,
      CompressionRatioPercent,
      CompressionRatioX,
      LastAccessUtc,
      LastModifiedUtc,
      CreatedUtc,
      Owner,
    } = data;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.NodeGUID = NodeGUID;
    this.PoolGUID = PoolGUID;
    this.BucketGUID = BucketGUID;
    this.OwnerGUID = OwnerGUID;
    this.DataCatalogDocumentGUID = DataCatalogDocumentGUID;
    this.DataFlowRequestGUID = DataFlowRequestGUID;
    this.DataFlowSuccess = DataFlowSuccess;
    this.Key = Key;
    this.Version = Version;
    this.IsLatest = IsLatest;
    this.IsDeleteMarker = IsDeleteMarker;
    this.IsLocal = IsLocal;
    this.ContentType = ContentType;
    this.DocumentType = DocumentType;
    this.SourceUrl = SourceUrl;
    this.MD5Hash = MD5Hash;
    this.SHA1Hash = SHA1Hash;
    this.SHA256Hash = SHA256Hash;
    this.IsEncrypted = IsEncrypted;
    this.WriteMode = WriteMode;
    this.CompressionType = CompressionType;
    this.ContentLength = ContentLength;
    this.CompressedLength = CompressedLength;
    this.EncryptedLength = EncryptedLength;
    this.CompressionRatioPercent = CompressionRatioPercent;
    this.CompressionRatioX = CompressionRatioX;
    this.LastAccessUtc = LastAccessUtc;
    this.LastModifiedUtc = LastModifiedUtc;
    this.CreatedUtc = CreatedUtc;
    this.Owner = Owner ? new UserMaster(Owner) : null;
  }
}
