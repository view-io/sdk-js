export default class DirectorEmbeddingResponse {
    /**
     * @param {Object} params Parameters for the EmbeddingsModel.
     * @param {boolean} params.Success - Indicates whether the operation was successful.
     * @param {string} params.Model - The model used for embeddings.
     * @param {string|null} params.ApiKey - API key used for authentication.
     * @param {Array<string>} params.Contents - List of text chunks.
     * @param {Array<Array<number>>} params.Embeddings - Embedding vectors for contents (can be fewer or more than contents).
     */
    constructor({ Model, ApiKey, Contents, Embeddings, Success }?: {
        Success: boolean;
        Model: string;
        ApiKey: string | null;
        Contents: Array<string>;
        Embeddings: Array<Array<number>>;
    });
    Model: string;
    ApiKey: string;
    Contents: string[];
    Embeddings: number[][];
    Success: boolean;
}
