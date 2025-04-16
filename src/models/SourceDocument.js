/**
 * Represents a source document and its metadata.
 */
export default class SourceDocument {
  /**
   * @param {Object} params - Metadata for the source document.
   * @param {string} params.GUID - Unique identifier for the document.
   * @param {string} params.TenantGUID - Tenant identifier.
   * @param {string} params.BucketGUID - Bucket identifier.
   * @param {string} params.CollectionGUID - Collection identifier.
   * @param {string} params.ObjectGUID - Object identifier.
   * @param {string} params.ObjectKey - Object key (file name).
   * @param {string} params.ObjectVersion - Object version string.
   * @param {string} params.ContentType - MIME content type.
   * @param {string} params.DocumentType - Document type (e.g., Text, Pdf).
   * @param {string} params.SourceUrl - Object source URL.
   * @param {number} params.ContentLength - Size in bytes.
   * @param {string} params.MD5Hash - MD5 checksum.
   * @param {string} params.SHA1Hash - SHA-1 checksum.
   * @param {string} params.SHA256Hash - SHA-256 checksum.
   * @param {string} params.CreatedUtc - ISO timestamp for creation.
   * @param {object} params.UdrDocument - Data of document
   */
  constructor(params = {}) {
    const {
      GUID,
      TenantGUID,
      BucketGUID,
      CollectionGUID,
      ObjectGUID,
      ObjectKey,
      ObjectVersion,
      ContentType,
      DocumentType,
      SourceUrl,
      ContentLength,
      MD5Hash,
      SHA1Hash,
      SHA256Hash,
      CreatedUtc,
      UdrDocument,
    } = params;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.BucketGUID = BucketGUID;
    this.CollectionGUID = CollectionGUID;
    this.ObjectGUID = ObjectGUID;
    this.ObjectKey = ObjectKey;
    this.ObjectVersion = ObjectVersion;
    this.ContentType = ContentType;
    this.DocumentType = DocumentType;
    this.SourceUrl = SourceUrl;
    this.ContentLength = ContentLength;
    this.MD5Hash = MD5Hash;
    this.SHA1Hash = SHA1Hash;
    this.SHA256Hash = SHA256Hash;
    this.CreatedUtc = CreatedUtc;
    this.UdrDocument = UdrDocument;
  }
}
