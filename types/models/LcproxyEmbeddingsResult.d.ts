export default class LcproxyEmbeddingsResult {
    /**
     * Converts content and LcproxyEmbeddingsResult into EmbeddingsMap instances.
     * @param {string[]} content - The content list.
     * @param {LcproxyEmbeddingsResult} lcProxyResult - An instance of LcproxyEmbeddingsResult.
     * @returns {EmbeddingsMap[]} - List of EmbeddingsMap instances.
     */
    static toEmbeddingsMaps(content: string[], lcProxyResult: LcproxyEmbeddingsResult): EmbeddingsMap[];
    /**
     * @param {Object} lcproxyEmbeddingsResult - Parameters for the LcproxyEmbeddingsResult instance.
     * @param {boolean} lcproxyEmbeddingsResult.Success - Indicates whether the operation was successful (default is false).
     * @param {string|null} lcproxyEmbeddingsResult.Model - The model used to generate embeddings (default is null).
     * @param {string[]} lcproxyEmbeddingsResult.Contents - Contents list (default is an empty array).
     * @param {number[][]} lcproxyEmbeddingsResult.Embeddings - Embeddings list of lists (default is an empty array).
     */
    constructor(lcproxyEmbeddingsResult?: {
        Success: boolean;
        Model: string | null;
        Contents: string[];
        Embeddings: number[][];
    });
    Success: boolean;
    Model: string;
    Contents: string[];
    Embeddings: number[][];
    /**
     * Validates the contents list.
     * @param {string[]} value - The contents list.
     * @returns {string[]} - Validated contents list.
     */
    validateContents(value: string[]): string[];
    /**
     * Validates the embeddings list.
     * @param {number[][]} value - The embeddings list of lists.
     * @returns {number[][]} - Validated embeddings list.
     */
    validateEmbeddings(value: number[][]): number[][];
}
import EmbeddingsMap from './EmbeddingsMap';
