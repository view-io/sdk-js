export class UdrDocument {
  /**
   * Constructs a new UdrDocument instance.
   * @param {Object} data - The data to be used to create the UdrDocument.
   * @param {string} data.GUID - The GUID of the UdrDocument.
   * @param {boolean} data.Success - Whether the UdrDocument was created successfully.
   * @param {Object} data.Timestamp - The timestamp of the UdrDocument.
   * @param {string} data.Timestamp.Start - The start time of the UdrDocument.
   * @param {string} data.Timestamp.End - The end time of the UdrDocument.
   * @param {number} data.Timestamp.TotalMs - The total time taken to create the UdrDocument.
   * @param {Object} data.Timestamp.Messages - The messages of the UdrDocument.
   * @param {string} data.AdditionalData - The additional data of the UdrDocument.
   * @param {Object} data.Metadata - The metadata of the UdrDocument.
   * @param {string} data.Key - The key of the UdrDocument.
   * @param {string} data.Type - The type of the UdrDocument.
   * @param {Object} data.Terms - The terms of the UdrDocument.
   * @param {number} data.TopTerms - The top terms of the UdrDocument.
   * @param {Object} data.Schema - The schema of the UdrDocument.
   * @param {Object} data.Postings - The postings of the UdrDocument.
   * @param {Object} data.SemanticCells - The semantic cells of the UdrDocument.
   */
  constructor(data) {
    this.GUID = data.GUID;
    this.Success = data.Success;
    this.Timestamp = data.Timestamp;
    this.AdditionalData = data.AdditionalData;
    this.Metadata = data.Metadata;
    this.Key = data.Key;
    this.Type = data.Type;
    this.Terms = data.Terms;
    this.TopTerms = data.TopTerms;
    this.Schema = data.Schema;
    this.Postings = data.Postings;
    this.SemanticCells = data.SemanticCells;
  }
}
