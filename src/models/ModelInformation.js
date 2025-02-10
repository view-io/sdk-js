export default class ModelInformation {
  /**
   * @param {Object} modelInformation - Parameters for the ModelInformation instance.
   * @param {string|null} modelInformation.Model - The name of the model (default is null).
   * @param {number} modelInformation.Size - The size of the model in bytes (default is 0).
   * @param {Date|null} modelInformation.LastModifiedUtc - The last modified timestamp in UTC (default is null).
   * @param {string|null} modelInformation.MD5Hash - The MD5 hash (default is null).
   * @param {string|null} modelInformation.SHA1Hash - The SHA1 hash (default is null).
   * @param {string|null} modelInformation.SHA256Hash - The SHA256 hash (default is null).
   */
  constructor(modelInformation = {}) {
    const {
      Model = null,
      Size = 0,
      LastModifiedUtc = null,
      MD5Hash = null,
      SHA1Hash = null,
      SHA256Hash = null,
    } = modelInformation;

    if (Size < 0) {
      throw new RangeError('Size must be a non-negative number.');
    }

    this.Model = Model;
    this.Size = Size;
    this.LastModifiedUtc = LastModifiedUtc ? new Date(LastModifiedUtc) : null;
    this.MD5Hash = MD5Hash;
    this.SHA1Hash = SHA1Hash;
    this.SHA256Hash = SHA256Hash;
  }

  /**
   * Converts an Ollama response to a list of ModelInformation instances.
   * @param {OllamaModelResult} resp - The Ollama model response.
   * @param {OllamaModelResult.OllamaModelDetail[]} resp.Models - Array of model details from the response.
   * @param {string|null} resp.Models[].Name - The name of the model (default is null).
   * @param {string|null} resp.Models[].Model - The specific model identifier (default is null).
   * @param {Date|null} resp.Models[].LastModifiedUtc - The last modified timestamp in UTC (default is null).
   * @param {number} resp.Models[].Size - The size of the model in bytes (default is 0).
   * @param {string|null} resp.Models[].Digest - The model's digest (default is null).
   * @param {Object|null} resp.Models[].Details - Additional details (default is null).
   * @returns {ModelInformation[]} - List of ModelInformation instances.
   */
  static fromOllamaResponse(resp) {
    if (!resp || !Array.isArray(resp.Models) || resp.Models.length === 0) {
      return [];
    }

    return resp.Models.map((model) => {
      return new ModelInformation({
        Model: model.Model || null,
        Size: model.Size || 0,
        LastModifiedUtc: model.LastModifiedUtc || null,
        SHA256Hash: model.Digest || null,
      });
    });
  }
}
