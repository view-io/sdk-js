export default class OllamaModelResult {
  /**
   * @param {Object} resultData - Parameters for the OllamaModelResult instance.
   * @param {Array<OllamaModelResult.OllamaModelDetail>} resultData.Models - List of model details.
   */
  constructor(resultData = {}) {
    const { Models = [] } = resultData;

    if (!Array.isArray(Models)) {
      throw new TypeError('Models must be an array.');
    }

    this.Models = Models.map((model) => new OllamaModelResult.OllamaModelDetail(model));
  }
}

/**
 * Represents the details of a model in the Ollama result.
 */
OllamaModelResult.OllamaModelDetail = class {
  /**
   * @param {Object} detailData - Parameters for the OllamaModelDetail instance.
   * @param {string|null} detailData.Name - The name of the model (default is null).
   * @param {string|null} detailData.Model - The specific model identifier (default is null).
   * @param {Date|null} detailData.LastModifiedUtc - The last modified timestamp in UTC (default is null).
   * @param {number} detailData.Size - The size of the model in bytes (default is 0).
   * @param {string|null} detailData.Digest - The model's digest (default is null).
   * @param {Object|null} detailData.Details - Additional details (default is null).
   */
  constructor(detailData = {}) {
    const { Name = null, Model = null, LastModifiedUtc = null, Size = 0, Digest = null, Details = null } = detailData;

    if (Size < 0) {
      throw new RangeError('Size must be a non-negative number.');
    }

    this.Name = Name;
    this.Model = Model;
    this.LastModifiedUtc = LastModifiedUtc ? new Date(LastModifiedUtc) : null;
    this.Size = Size;
    this.Digest = Digest;
    this.Details = Details;
  }
};
