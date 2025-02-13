export default class VoyageAiEmbeddingsResult {
    /**
     * Convert content and embeddings result to embeddings maps.
     * @param {Array<string>} content - List of content to map.
     * @param {VoyageAiEmbeddingsResult} openAiResult - The VoyageAiEmbeddingsResult instance containing embeddings.
     * @returns {Array<EmbeddingsMap>} - List of embeddings maps.
     */
    static toEmbeddingsMaps(content: Array<string>, openAiResult: VoyageAiEmbeddingsResult): Array<EmbeddingsMap>;
    /**
     * @param {Object} result Information about the embeddings result.
     * @param {string} result.Object - Object type (default is null).
     * @param {Array<VoyageAiEmbeddings>} result.Data - List of embeddings data (default is an empty array).
     */
    constructor(result?: {
        Object: string;
        Data: Array<VoyageAiEmbeddings>;
    });
    Object: string;
    Data: VoyageAiEmbeddings[];
}
/**
 * VoyageAI embeddings class.
 */
export class VoyageAiEmbeddings {
    /**
     * @param {Object} embeddingData Embedding data.
     * @param {Array<number>} embeddingData.Embeddings - Embedding values (default is an empty array).
     * @param {number} embeddingData.Index - Index of the embedding (default is 0).
     * @param {string} embeddingData.ObjectType - Object type (default is null).
     */
    constructor(embeddingData?: {
        Embeddings: Array<number>;
        Index: number;
        ObjectType: string;
    });
    Embeddings: number[];
    Index: number;
    ObjectType: string;
}
