export default class ModelInformation {
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
    static fromOllamaResponse(resp: OllamaModelResult): ModelInformation[];
    /**
     * @param {Object} modelInformation - Parameters for the ModelInformation instance.
     * @param {string|null} modelInformation.Model - The name of the model (default is null).
     * @param {number} modelInformation.Size - The size of the model in bytes (default is 0).
     * @param {Date|null} modelInformation.LastModifiedUtc - The last modified timestamp in UTC (default is null).
     * @param {string|null} modelInformation.MD5Hash - The MD5 hash (default is null).
     * @param {string|null} modelInformation.SHA1Hash - The SHA1 hash (default is null).
     * @param {string|null} modelInformation.SHA256Hash - The SHA256 hash (default is null).
     */
    constructor(modelInformation?: {
        Model: string | null;
        Size: number;
        LastModifiedUtc: Date | null;
        MD5Hash: string | null;
        SHA1Hash: string | null;
        SHA256Hash: string | null;
    });
    Model: string;
    Size: number;
    LastModifiedUtc: Date;
    MD5Hash: string;
    SHA1Hash: string;
    SHA256Hash: string;
}
