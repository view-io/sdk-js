export default class EmbeddingsMap {
    /**
     * @param {Object} embeddingsMap Information about the embeddings map.
     * @param {string|null} embeddingsMap.Content - The content (default is null).
     * @param {number[]} embeddingsMap.Embeddings - The embeddings (default is an empty array).
     */
    constructor(embeddingsMap?: {
        Content: string | null;
        Embeddings: number[];
    });
    Content: string;
    Embeddings: number[];
    /**
     * Validates the embeddings array.
     * @param {number[]} value - The embeddings array.
     * @returns {number[]} - Validated embeddings array.
     */
    validateEmbeddings(value: number[]): number[];
}
