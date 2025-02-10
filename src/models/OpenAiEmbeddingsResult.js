export default class OpenAiEmbeddingsResult {
  /**
   * @param {Object} resultData - Parameters for the OpenAiEmbeddingsResult instance.
   * @param {string|null} resultData.Object - Object type (default is null).
   * @param {Array<OpenAiEmbeddings>} resultData.Data - List of OpenAiEmbeddings instances (default is an empty array).
   */
  constructor(resultData = {}) {
    const { Object = null, Data = [] } = resultData;

    if (!Array.isArray(Data) || !Data.every((item) => item instanceof OpenAiEmbeddings)) {
      throw new TypeError('Data must be an array of OpenAiEmbeddings instances.');
    }

    this.Object = Object;
    this.Data = Data;
  }

  /**
   * Build embeddings maps from content and OpenAI result.
   * @param {Array<string>} content - List of content strings.
   * @param {OpenAiEmbeddingsResult} openAiResult - The OpenAI embeddings result instance.
   * @returns {Array<EmbeddingsMap>} - List of embeddings maps.
   */
  static toEmbeddingsMaps(content, openAiResult) {
    if (!Array.isArray(content) || content.length === 0) {
      return [];
    }

    if (!openAiResult || !Array.isArray(openAiResult.Data) || openAiResult.Data.length !== content.length) {
      return [];
    }

    return content.map((item, index) => ({
      Content: item,
      Embeddings: openAiResult.Data[index].Embeddings,
    }));
  }
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
  constructor(embeddingsData = {}) {
    const { Embeddings = [], Index = 0, ObjectType = null } = embeddingsData;

    if (!Array.isArray(Embeddings)) {
      throw new TypeError('Embeddings must be an array of numbers.');
    }

    this.Embeddings = Embeddings;
    this.Index = Index;
    this.ObjectType = ObjectType;
  }
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
  constructor(mapData = {}) {
    const { Content = null, Embeddings = [] } = mapData;

    if (!Array.isArray(Embeddings)) {
      throw new TypeError('Embeddings must be an array of numbers.');
    }

    this.Content = Content;
    this.Embeddings = Embeddings;
  }
}
