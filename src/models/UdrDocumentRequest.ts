import { v4 as uuidV4 } from 'uuid';
import { DocumentTypeEnum } from '../enums/DocumentTypeEnum';

export default class UdrDocumentRequest {
  /**
   * @param {Object} udrDocumentRequest Information about the UDR document request.
   * @param {string} udrDocumentRequest.GUID - Document GUID (automatically generated if not provided).
   * @param {string} udrDocumentRequest.Type - Document type (default is DocumentTypeEnum.Unknown).
   * @param {string} udrDocumentRequest.Key - Key (default is null).
   * @param {string} udrDocumentRequest.ContentType - Content type (default is null).
   * @param {string} udrDocumentRequest.SemanticCellSplitCharacter - Character on which to split semantic cells (default is "\r\n").
   * @param {number} udrDocumentRequest.MaxChunkContentLength - Maximum chunk content length (default is 512).
   * @param {boolean} udrDocumentRequest.IncludeFlattened - Enable flattened representation of the document (default is true).
   * @param {boolean} udrDocumentRequest.CaseInsensitive - Enable case insensitive processing (default is true).
   * @param {number} udrDocumentRequest.TopTerms - Number of top terms to request (default is 10).
   * @param {string} udrDocumentRequest.AdditionalData - Additional data (default is null).
   * @param {Object} udrDocumentRequest.Metadata - Metadata associated with the document (default is an empty object).
   * @param {Uint8Array} udrDocumentRequest.Data - Data of the document (required).
   * @param {Object} udrDocumentRequest.MetadataRule - Metadata rule associated with the document (default is null).
   */
  constructor(udrDocumentRequest) {
    const {
      GUID = uuidV4(),
      Type = DocumentTypeEnum.Unknown,
      Key = null,
      ContentType = null,
      SemanticCellSplitCharacter = '\r\n',
      MaxChunkContentLength = 512,
      IncludeFlattened = true,
      CaseInsensitive = true,
      TopTerms = 10,
      AdditionalData = null,
      Metadata = {},
      Data,
      MetadataRule = null,
    } = udrDocumentRequest;

    if (!Data) throw new Error('Data is required.');

    this.GUID = GUID;
    this.Type = Type;
    this.Key = Key;
    this.ContentType = ContentType;
    this.SemanticCellSplitCharacter = SemanticCellSplitCharacter;
    this.MaxChunkContentLength = this.validateMaxChunkContentLength(MaxChunkContentLength);
    this.IncludeFlattened = IncludeFlattened;
    this.CaseInsensitive = CaseInsensitive;
    this.TopTerms = this.validateTopTerms(TopTerms);
    this.AdditionalData = AdditionalData;
    this.Metadata = Metadata || {};
    this.Data = Data;
    this.MetadataRule = MetadataRule instanceof MetadataRule ? MetadataRule : null;
  }

  validateMaxChunkContentLength(value) {
    if (value < 128 || value > 2048) {
      throw new RangeError('MaxChunkContentLength must be between 128 and 2048.');
    }
    return value;
  }

  validateTopTerms(value) {
    if (value < 0) {
      throw new RangeError('TopTerms must be greater than or equal to 0.');
    }
    return value;
  }
}
