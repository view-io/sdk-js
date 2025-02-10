export default class SemanticCellResponse {
  /**
   * @param {Object} semanticCellResponse Information about the semantic cell response.
   * @param {string} semanticCellResponse.DataFlowRequestGUID - The Data Flow Request GUID (default is null).
   * @param {boolean} semanticCellResponse.Success - Indicates success (default is true).
   * @param {string} semanticCellResponse.Timestamp - The timestamp (default is a new instance of Timestamp).
   * @param {Object} semanticCellResponse.Error - The error response if any (default is null).
   * @param {Object[]} semanticCellResponse.SemanticCells - The list of semantic cells (default is null).
   * @param {Uint8Array} semanticCellResponse.Data - The additional data (default is null).
   */
  constructor(semanticCellResponse = {}) {
    const {
      DataFlowRequestGUID = null,
      Success = true,
      Timestamp = Date.now(),
      Error = null,
      SemanticCells = null,
      Data = null,
    } = semanticCellResponse;

    this.DataFlowRequestGUID = DataFlowRequestGUID;
    this.Success = Success;
    this.Timestamp = {
      start: Timestamp.Start || new Date().toISOString(),
      totalMs: Timestamp.TotalMs || 0,
      messages: Timestamp.Messages || {},
    };
    this.Error = Error;
    this.SemanticCells = SemanticCells;
    this.Data = Data;
  }
}
