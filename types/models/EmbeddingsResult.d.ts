export default class EmbeddingsResult {
    /**
     * @param {Object} embeddingsResult Information about the embeddings result.
     * @param {boolean} embeddingsResult.Success - Indicates if the operation was successful (default is false).
     * @param {Timestamp} embeddingsResult.Timestamp - The timestamp (default is a new Timestamp instance).
     * @param {number} embeddingsResult.StatusCode - HTTP status code (default is 200, range 0-599).
     * @param {string|null} embeddingsResult.Url - The URL (default is null).
     * @param {string|null} embeddingsResult.Model - The model used to generate embeddings (default is null).
     * @param {EmbeddingsMap[]} embeddingsResult.Result - The result embeddings map array (default is an empty array).
     */
    constructor(embeddingsResult?: {
        Success: boolean;
        Timestamp: any;
        StatusCode: number;
        Url: string | null;
        Model: string | null;
        Result: EmbeddingsMap[];
    });
    Success: boolean;
    Timestamp: any;
    StatusCode: number;
    Url: string;
    Model: string;
    Result: EmbeddingsMap[];
    /**
     * Validates the status code.
     * @param {number} value - The HTTP status code.
     * @returns {number} - Validated status code.
     */
    validateStatusCode(value: number): number;
    /**
     * Validates the result array.
     * @param {EmbeddingsMap[]} value - The result array.
     * @returns {EmbeddingsMap[]} - Validated result array.
     */
    validateResult(value: EmbeddingsMap[]): EmbeddingsMap[];
}
import EmbeddingsMap from './EmbeddingsMap';
