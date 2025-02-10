import { DocumentTypeEnum } from '../enums/DocumentTypeEnum.js';

/**
 * Represents the type detection results of a parsed document.
 *
 * @property {string|null} mimeType - The MIME type of the document.
 * @property {string|null} extension - The file extension of the document.
 * @property {DocumentTypeEnum} type - The type of the document as determined by the type detection process.
 */
export default class TypeResult {
  /**
   * MIME type.
   * @type {string|null}
   */
  mimeType;

  /**
   * Extension.
   * @type {string|null}
   */
  extension;

  /**
   * Data type.
   * @type {DocumentTypeEnum}
   */
  type;

  /**
   * Constructs a new instance of TypeResult.
   * @param {string|null} mimeType - The MIME type of the document.
   * @param {string|null} extension - The file extension of the document.
   * @param {DocumentTypeEnum} type - The type of the document as determined by the type detection process.
   */
  constructor(mimeType = null, extension = null, type = DocumentTypeEnum.Unknown) {
    this.mimeType = mimeType;
    this.extension = extension;
    this.type = type;
  }

  // Additional methods can be added here if needed
}
