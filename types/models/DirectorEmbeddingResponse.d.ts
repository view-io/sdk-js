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
    /** @type {string} */
    GUID: string;
    /** @type {string} */
    Model: string;
    /** @type {string|null} */
    ApiKey: string | null;
    /** @type {Array<string>} */
    Contents: Array<string>;
    /**
     * Set the embeddings associated with the response.
     * @param {Array<Array<number>>} value List of embedding arrays.
     */
    set Embeddings(value: Array<Array<number>>);
    /**
     * Get the embeddings associated with the response.
     * @returns {Array<Array<number>>} Embeddings of the response.
     */
    get Embeddings(): Array<Array<number>>;
    /** @type {boolean|null} */
    Success: boolean | null;
    _Embeddings: number[][];
}
