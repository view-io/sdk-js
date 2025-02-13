/**
 * Represents the type detection results of a parsed document.
 *
 * @property {string|null} mimeType - The MIME type of the document.
 * @property {string|null} extension - The file extension of the document.
 * @property {DocumentTypeEnum} type - The type of the document as determined by the type detection process.
 */
export default class TypeResult {
    /**
     * Constructs a new instance of TypeResult.
     * @param {string|null} mimeType - The MIME type of the document.
     * @param {string|null} extension - The file extension of the document.
     * @param {DocumentTypeEnum} type - The type of the document as determined by the type detection process.
     */
    constructor(mimeType?: string | null, extension?: string | null, type?: DocumentTypeEnum);
    /**
     * MIME type.
     * @type {string|null}
     */
    mimeType: string | null;
    /**
     * Extension.
     * @type {string|null}
     */
    extension: string | null;
    /**
     * Data type.
     * @type {DocumentTypeEnum}
     */
    type: DocumentTypeEnum;
}
import { DocumentTypeEnum } from '../enums/DocumentTypeEnum.js';
