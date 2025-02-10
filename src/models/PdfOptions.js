import { PdfModeEnum } from '../enums/PdfModeEnum';

export default class PdfOptions {
  /**
   * @param {Object} pdfOptions Information about the PDF options.
   * @param {string} pdfOptions.Mode - The PDF processing mode (default is PdfModeEnum.BoundingBoxExtraction).
   * @param {boolean} pdfOptions.ReturnMarkup - True to indicate that the marked-up PDF including bounding boxes should be returned (default is false).
   * @param {boolean} pdfOptions.RetainArtifact - True to indicate that the marked-up PDF file should be preserved in the temporary directory (default is false).
   */
  constructor(pdfOptions = {}) {
    const { Mode = PdfModeEnum.BoundingBoxExtraction, ReturnMarkup = false, RetainArtifact = false } = pdfOptions;

    this.Mode = Mode;
    this.ReturnMarkup = ReturnMarkup;
    this.RetainArtifact = RetainArtifact;
  }
}
