export default class TypeResult {
    /**
     * Constructs a new instance of TypeResult.
     * @param {object} params - The parameters for the TypeResult.
     * @param {string|null} params.MimeType - The MIME type of the document.
     * @param {string|null} params.Extension - The file extension of the document.
     * @param {DocumentTypeEnum} params.Type - The type of the document as determined by the type detection process.
     */
    constructor({ MimeType, Extension, Type }: {
        MimeType: string | null;
        Extension: string | null;
        Type: DocumentTypeEnum;
    });
    MimeType: string;
    Extension: string;
    Type: DocumentTypeEnum;
}
