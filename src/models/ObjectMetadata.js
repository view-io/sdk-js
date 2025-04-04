/**
 * Represents metadata for an object stored in a bucket.
 */
export default class ObjectMetadata {
  /**
   * @param {Object} data - Object metadata.
   * @param {string} data.GUID - Unique object identifier.
   * @param {string} data.TenantGUID - Tenant identifier.
   * @param {string} data.NodeGUID - Node identifier.
   * @param {string} data.PoolGUID - Pool identifier.
   * @param {string} data.BucketGUID - Bucket identifier.
   * @param {string} data.OwnerGUID - Owner identifier.
   * @param {string} data.Key - Object key or name.
   * @param {string} data.Version - Version of the object.
   * @param {boolean} data.IsLatest - Whether this is the latest version.
   * @param {boolean} data.IsDeleteMarker - If this object is marked for deletion.
   * @param {boolean} data.IsLocal - Whether the object is stored locally.
   * @param {string} data.ContentType - MIME type of the object.
   * @param {string} data.DocumentType - Document classification type.
   * @param {string} data.SourceUrl - Public or internal source URL.
   * @param {string} data.MD5Hash - MD5 checksum.
   * @param {string} data.SHA1Hash - SHA1 checksum.
   * @param {string} data.SHA256Hash - SHA256 checksum.
   * @param {boolean} data.IsEncrypted - Whether the object is encrypted.
   * @param {string} data.WriteMode - Write mode used (e.g., GUID).
   * @param {string} data.CompressionType - Compression type (e.g., None, Gzip).
   * @param {number} data.ContentLength - Original size in bytes.
   * @param {number} data.CompressedLength - Compressed size in bytes.
   * @param {number} data.EncryptedLength - Encrypted size in bytes.
   * @param {number} data.CompressionRatioPercent - Compression ratio in percentage.
   * @param {number} data.CompressionRatioX - Compression multiplier.
   * @param {string} data.LastAccessUtc - Last access timestamp (ISO format).
   * @param {string} data.LastModifiedUtc - Last modified timestamp (ISO format).
   * @param {string} data.CreatedUtc - Creation timestamp (ISO format).
   */
  constructor(data = {}) {
    const {
      GUID,
      TenantGUID,
      NodeGUID,
      PoolGUID,
      BucketGUID,
      OwnerGUID,
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
    } = data;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.NodeGUID = NodeGUID;
    this.PoolGUID = PoolGUID;
    this.BucketGUID = BucketGUID;
    this.OwnerGUID = OwnerGUID;
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
  }
}
