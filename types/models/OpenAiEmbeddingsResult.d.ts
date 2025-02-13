export default class OpenAiEmbeddingsResult {
    /**
     * Build embeddings maps from content and OpenAI result.
     * @param {Array<string>} content - List of content strings.
     * @param {OpenAiEmbeddingsResult} openAiResult - The OpenAI embeddings result instance.
     * @returns {Array<EmbeddingsMap>} - List of embeddings maps.
     */
    static toEmbeddingsMaps(content: Array<string>, openAiResult: OpenAiEmbeddingsResult): Array<EmbeddingsMap>;
    /**
     * @param {Object} resultData - Parameters for the OpenAiEmbeddingsResult instance.
     * @param {string|null} resultData.Object - Object type (default is null).
     * @param {Array<OpenAiEmbeddings>} resultData.Data - List of OpenAiEmbeddings instances (default is an empty array).
     */
    constructor(resultData?: {
        Object: string | null;
        Data: Array<OpenAiEmbeddings>;
    });
    Object: string;
    Data: OpenAiEmbeddings[];
}
/**
 * Represents OpenAI embeddings for individual data items.
 */
export class OpenAiEmbeddings {
    /**
     * @param {Object} embeddingsData - Parameters for the OpenAiEmbeddings instance.
     * @param {Array<number>} embeddingsData.Embeddings - The embedding vector (default is an empty array).
     * @param {number} embeddingsData.Index - The index of the embedding in the dataset (default is 0).
     * @param {string|null} embeddingsData.ObjectType - Object type (default is null).
     */
    constructor(embeddingsData?: {
        Embeddings: Array<number>;
        Index: number;
        ObjectType: string | null;
    });
    Embeddings: number[];
    Index: number;
    ObjectType: string;
}
/**
 * Represents an individual embedding map.
 */
export class EmbeddingsMap {
    /**
     * @param {Object} mapData - Parameters for the EmbeddingsMap instance.
     * @param {string|null} mapData.Content - The content string (default is null).
     * @param {Array<number>} mapData.Embeddings - The embedding vector (default is an empty array).
     */
    constructor(mapData?: {
        Content: string | null;
        Embeddings: Array<number>;
    });
    Content: string;
    Embeddings: number[];
}
