export default class VoyageAiEmbeddingsResult {
  /**
   * @param {Object} result Information about the embeddings result.
   * @param {string} result.Object - Object type (default is null).
   * @param {Array<VoyageAiEmbeddings>} result.Data - List of embeddings data (default is an empty array).
   */
  constructor(result = {}) {
    const { Object = null, Data = [] } = result;

    this.Object = Object;
    this.Data = Data.map((item) => new VoyageAiEmbeddings(item)); // Ensure each embedding is an instance of VoyageAiEmbeddings
  }

  /**
   * Convert content and embeddings result to embeddings maps.
   * @param {Array<string>} content - List of content to map.
   * @param {VoyageAiEmbeddingsResult} openAiResult - The VoyageAiEmbeddingsResult instance containing embeddings.
   * @returns {Array<EmbeddingsMap>} - List of embeddings maps.
   */
  static toEmbeddingsMaps(content, openAiResult) {
    const ret = [];

    if (!content || content.length < 1) return ret;
    if (!openAiResult || !openAiResult.Data || openAiResult.Data.length !== content.length) return ret;

    for (let i = 0; i < content.length; i++) {
      const map = {
        Content: content[i],
        Embeddings: openAiResult.Data[i].Embeddings,
      };

      ret.push(map);
    }

    return ret;
  }
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
  constructor(embeddingData = {}) {
    const { Embeddings = [], Index = 0, ObjectType = null } = embeddingData;

    this.Embeddings = Embeddings;
    this.Index = Index;
    this.ObjectType = ObjectType;
  }
}
