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
    constructor(data?: {});
    /** @type {string} */
    guid: string;
    /** @type {string} */
    tenantGUID: string;
    /** @type {string} */
    nodeGUID: string;
    /** @type {string} */
    poolGUID: string;
    /** @type {string} */
    bucketGUID: string;
    /** @type {string} */
    ownerGUID: string;
    /** @type {string} */
    key: string;
    /** @type {string} */
    version: string;
    /** @type {boolean} */
    isLatest: boolean;
    /** @type {boolean} */
    isDeleteMarker: boolean;
    /** @type {boolean} */
    isLocal: boolean;
    /** @type {string} */
    contentType: string;
    /** @type {DocumentTypeEnum} */
    documentType: DocumentTypeEnum;
    /** @type {string} */
    writeMode: string;
    /** @type {string} */
    compressionType: string;
    /**
     * Sets the content length.
     * @param {number} value
     * @throws {RangeError} If the value is less than 0.
     */
    set contentLength(value: number);
    /**
     * Gets the content length.
     * @return {number}
     */
    get contentLength(): number;
    /** @type {number} */
    compressedLength: number;
    /** @type {number} */
    encryptedLength: number;
    /** @type {number} */
    compressionRatioPercent: number;
    /** @type {number} */
    compressionRatioX: number;
    /** @type {string} */
    sourceUrl: string;
    /** @type {string} */
    md5Hash: string;
    /** @type {string} */
    sha1Hash: string;
    /** @type {string} */
    sha256Hash: string;
    /** @type {boolean} */
    isEncrypted: boolean;
    /** @type {Date|null} */
    expirationUtc: Date | null;
    /** @type {Date} */
    lastAccessUtc: Date;
    /** @type {Date} */
    lastModifiedUtc: Date;
    /** @type {Date} */
    createdUtc: Date;
    _contentLength: number;
}
import { DocumentTypeEnum } from '../enums/DocumentTypeEnum';
