export default class EmbeddingModel {
    /**
     * @param {Object} data - Data containing embeddings and associated information.
     * @param {boolean} data.Success - Whether the embedding request was successful.
     * @param {string} data.Model - The model name (e.g., "all-MiniLM-L6-v2").
     * @param {string} data.ApiKey - The API key used (if provided, otherwise null).
     * @param {Array} data.Contents - Array of text chunks.
     * @param {Array} data.Embeddings - Array of embedding vectors corresponding to each text chunk.
     */
    constructor(data: {
        Success: boolean;
        Model: string;
        ApiKey: string;
        Contents: any[];
        Embeddings: any[];
    });
    Success: boolean;
    Model: string;
    ApiKey: string;
    Contents: any[];
    Embeddings: any[];
    /**
     * Validates whether the embeddings correspond to the contents.
     * @returns {boolean} - Returns true if each content has a corresponding embedding.
     */
    validateEmbeddings(): boolean;
    /**
     * Retrieves the embedding for a specific chunk of text.
     * @param {number} index - Index of the text chunk.
     * @returns {Array|null} - Returns the embedding for the specified chunk or null if the index is invalid.
     */
    getEmbeddingForChunk(index: number): any[] | null;
    /**
     * Adds a new chunk of text and its corresponding embedding.
     * @param {string} text - The chunk of text.
     * @param {Array} embedding - The embedding vector.
     */
    addContentWithEmbedding(text: string, embedding: any[]): void;
    /**
     * Returns the number of contents (text chunks).
     * @returns {number} - The number of content chunks.
     */
    getContentCount(): number;
}
