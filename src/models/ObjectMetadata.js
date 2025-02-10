import { v4 as uuidV4 } from 'uuid';
import { DocumentTypeEnum } from '../enums/DocumentTypeEnum';
/**
 * Represents metadata for an object.
 *
 * @property {string} guid - The GUID of the object.
 * @property {string} tenantGUID - The tenant GUID.
 * @property {string} nodeGUID - The node GUID.
 * @property {string} poolGUID - The pool GUID.
 * @property {string} bucketGUID - The bucket GUID.
 * @property {string} ownerGUID - The owner GUID.
 * @property {string} key - The key.
 * @property {string} version - The version.
 * @property {boolean} isLatest - Indicates if this is the latest version.
 * @property {boolean} isDeleteMarker - Indicates if this is a delete marker.
 * @property {boolean} isLocal - Indicates if the object is local.
 * @property {string} contentType - The content type.
 * @property {DocumentTypeEnum} documentType - The document type.
 * @property {string} writeMode - The write mode.
 * @property {string} compressionType - The compression type.
 * @property {number} contentLength - The length of the content.
 * @property {number} compressedLength - The compressed length of the content.
 * @property {number} encryptedLength - The encrypted length of the content.
 * @property {number} compressionRatioPercent - The compression ratio in percentage.
 * @property {number} compressionRatioX - The compression ratio as a multiplier.
 * @property {string} sourceUrl - The source URL.
 * @property {string} md5Hash - The MD5 hash.
 * @property {string} sha1Hash - The SHA1 hash.
 * @property {string} sha256Hash - The SHA256 hash.
 * @property {boolean} isEncrypted - Indicates if the object is encrypted.
 * @property {Date|null} expirationUtc - The expiration timestamp in UTC.
 * @property {Date} lastAccessUtc - The last access timestamp in UTC.
 * @property {Date} lastModifiedUtc - The last modified timestamp in UTC.
 * @property {Date} createdUtc - The creation timestamp in UTC.
 */
export default class ObjectMetadata {
  constructor(data = {}) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      NodeGUID = uuidV4(),
      PoolGUID = uuidV4(),
      BucketGUID = uuidV4(),
      OwnerGUID = uuidV4(),
      Key = '',
      Version = '',
      IsLatest = true,
      IsDeleteMarker = false,
      IsLocal = true,
      ContentType = 'text/plain',
      DocumentType = DocumentTypeEnum.Unknown,
      WriteMode = '',
      CompressionType = 'None',
      ContentLength = 0,
      CompressedLength = 0,
      EncryptedLength = 0,
      CompressionRatioPercent = 0,
      CompressionRatioX = 0,
      SourceUrl = '',
      MD5Hash = '',
      SHA1Hash = '',
      SHA256Hash = '',
      IsEncrypted = false,
      ExpirationUtc = null,
      LastAccessUtc = new Date(),
      LastModifiedUtc = new Date(),
      CreatedUtc = new Date(),
    } = data;

    /** @type {string} */
    this.guid = GUID;

    /** @type {string} */
    this.tenantGUID = TenantGUID;

    /** @type {string} */
    this.nodeGUID = NodeGUID;

    /** @type {string} */
    this.poolGUID = PoolGUID;

    /** @type {string} */
    this.bucketGUID = BucketGUID;

    /** @type {string} */
    this.ownerGUID = OwnerGUID;

    /** @type {string} */
    this.key = Key;

    /** @type {string} */
    this.version = Version;

    /** @type {boolean} */
    this.isLatest = IsLatest;

    /** @type {boolean} */
    this.isDeleteMarker = IsDeleteMarker;

    /** @type {boolean} */
    this.isLocal = IsLocal;

    /** @type {string} */
    this.contentType = ContentType;

    /** @type {DocumentTypeEnum} */
    this.documentType = DocumentType;

    /** @type {string} */
    this.writeMode = WriteMode;

    /** @type {string} */
    this.compressionType = CompressionType;

    /** @type {number} */
    this.contentLength = ContentLength;

    /** @type {number} */
    this.compressedLength = CompressedLength;

    /** @type {number} */
    this.encryptedLength = EncryptedLength;

    /** @type {number} */
    this.compressionRatioPercent = CompressionRatioPercent;

    /** @type {number} */
    this.compressionRatioX = CompressionRatioX;

    /** @type {string} */
    this.sourceUrl = SourceUrl;

    /** @type {string} */
    this.md5Hash = MD5Hash;

    /** @type {string} */
    this.sha1Hash = SHA1Hash;

    /** @type {string} */
    this.sha256Hash = SHA256Hash;

    /** @type {boolean} */
    this.isEncrypted = IsEncrypted;

    /** @type {Date|null} */
    this.expirationUtc = ExpirationUtc ? new Date(ExpirationUtc) : null;

    /** @type {Date} */
    this.lastAccessUtc = new Date(LastAccessUtc);

    /** @type {Date} */
    this.lastModifiedUtc = new Date(LastModifiedUtc);

    /** @type {Date} */
    this.createdUtc = new Date(CreatedUtc);
  }

  /**
   * Gets the content length.
   * @return {number}
   */
  get contentLength() {
    return this._contentLength;
  }

  /**
   * Sets the content length.
   * @param {number} value
   * @throws {RangeError} If the value is less than 0.
   */
  set contentLength(value) {
    if (value < 0) {
      throw new RangeError('ContentLength must be greater than or equal to zero.');
    }
    this._contentLength = value;
  }
}
