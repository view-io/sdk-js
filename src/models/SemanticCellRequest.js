import { DocumentTypeEnum } from '../enums/DocumentTypeEnum';
import PdfOptions from './PdfOptions';

export default class SemanticCellRequest {
  /**
   * @param {Object} semanticCellRequest Information about the semantic cell request.
   * @param {string} semanticCellRequest.DocumentType - The document type (default is DocumentTypeEnum.Unknown).
   * @param {number} semanticCellRequest.MinChunkContentLength - The minimum chunk content length (default is 2).
   * @param {number} semanticCellRequest.MaxChunkContentLength - The maximum chunk content length (default is 512).
   * @param {number} semanticCellRequest.ShiftSize - The shift size (default is 512).
   * @param {PdfOptions} semanticCellRequest.Pdf - The PDF options (default is a new instance of PdfOptions).
   * @param {Object} semanticCellRequest.MetadataRule - The metadata rule (default is null).
   * @param {Uint8Array} semanticCellRequest.Data - The data to be included (default is null).
   */
  constructor(semanticCellRequest = {}) {
    const {
      DocumentType = DocumentTypeEnum.Unknown,
      MinChunkContentLength = 2,
      MaxChunkContentLength = 512,
      ShiftSize = 512,
      Pdf = new PdfOptions(),
      MetadataRule = null,
      Data = null,
    } = semanticCellRequest;

    this.DocumentType = DocumentType;
    this.MinChunkContentLength = this.validateMinChunkContentLength(MinChunkContentLength);
    this.MaxChunkContentLength = this.validateMaxChunkContentLength(MaxChunkContentLength);
    this.ShiftSize = this.validateShiftSize(ShiftSize);
    this.Pdf = Pdf;
    this.MetadataRule = MetadataRule;
    this.Data = Data;
  }

  validateMinChunkContentLength(value) {
    if (value < 1) {
      throw new RangeError('MinChunkContentLength must be greater than or equal to 1.');
    }
    return value;
  }

  validateMaxChunkContentLength(value) {
    if (value < 256 || value > 16384) {
      throw new RangeError('MaxChunkContentLength must be between 256 and 16384.');
    }
    return value;
  }

  validateShiftSize(value) {
    if (value > this.MaxChunkContentLength) {
      throw new RangeError('ShiftSize must be equal to or less than MaxChunkContentLength.');
    }
    return value;
  }
}
