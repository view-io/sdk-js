import { v4 as uuidV4 } from 'uuid';
import { DocumentTypeEnum } from '../enums/DocumentTypeEnum';

/**
 * Instantiate a SourceDocument.
 * @param {Object} params - Parameters for initializing the document.
 * @param {string} [params.GUID] - GUID.
 * @param {string} [params.TenantGUID] - Tenant GUID.
 * @param {string} [params.BucketGUID] - Bucket GUID.
 * @param {string} [params.CollectionGUID] - Collection GUID.
 * @param {string} [params.ObjectGUID] - Object GUID.
 * @param {string} [params.DataFlowRequestGUID] - Data flow request GUID.
 * @param {string} [params.GraphRepositoryGUID] - Graph repository GUID.
 * @param {string} [params.GraphNodeIdentifier] - Graph node identifier.
 * @param {string} [params.DataRepositoryGUID] - Data repository GUID.
 * @param {string} [params.ObjectKey] - Object key.
 * @param {string} [params.ObjectVersion] - Object version.
 * @param {string} [params.ContentType] - Content type.
 * @param {string} [params.DocumentType] - Document type.
 * @param {string} [params.SourceUrl] - Source URL.
 * @param {number} [params.ContentLength] - Content length.
 * @param {string} [params.MD5Hash] - MD5 hash.
 * @param {string} [params.SHA1Hash] - SHA1 hash.
 * @param {string} [params.SHA256Hash] - SHA256 hash.
 * @param {string} [params.CreatedUtc] - Creation timestamp in UTC time.
 * @param {string} [params.ExpirationUtc] - Expiration timestamp in UTC time.
 * @param {Object} [params.Score] - Document score.
 * @param {Object} [params.UdrDocument] - UDR document.
 */
export default class SourceDocument {
  constructor(params = {}) {
    this.GUID = uuidV4;
    this.TenantGUID = uuidV4;
    this.BucketGUID = params.BucketGUID || null;
    this.CollectionGUID = uuidV4;
    this.ObjectGUID = uuidV4;
    this.DataFlowRequestGUID = params.DataFlowRequestGUID || null;
    this.GraphRepositoryGUID = params.GraphRepositoryGUID || null;
    this.GraphNodeIdentifier = params.GraphNodeIdentifier || null;
    this.DataRepositoryGUID = params.DataRepositoryGUID || null;
    this.ObjectKey = params.ObjectKey || null;
    this.ObjectVersion = params.ObjectVersion || '1';
    this.ContentType = params.ContentType || 'application/octet-stream';
    this.DocumentType = params.DocumentType || DocumentTypeEnum.Unknown; // Assuming DocumentTypeEnum is a string or similar
    this.SourceUrl = params.SourceUrl || null;
    this._ContentLength = params.ContentLength || 0;
    this.MD5Hash = params.MD5Hash || '';
    this.SHA1Hash = params.SHA1Hash || null;
    this.SHA256Hash = params.SHA256Hash || null;
    this.CreatedUtc = params.CreatedUtc || new Date().toISOString(); // UTC time
    this.ExpirationUtc = params.ExpirationUtc || null;
    this.Score = params.Score || null;
    this.UdrDocument = params.UdrDocument || null;
  }
  /**
   * Get the content length.
   * @returns {number} The content length.
   */
  get ContentLength() {
    return this._ContentLength;
  }

  /**
   * Set the content length.
   * @param {number} value - The value to set.
   * @throws {RangeError} If the value is negative.
   */
  set ContentLength(value) {
    if (value < 0) throw new RangeError('ContentLength cannot be negative');
    this._ContentLength = value;
  }
}
