import { VectorSearchTypeEnum } from '../enums/VectorSearchTypeEnum';

export default class VectorSearchRequest {
  /**
   * @param {Object} vectorSearchRequest Information about the vector search request.
   * @param {string} vectorSearchRequest.VectorRepositoryGUID - The GUID of the vector repository (default is null).
   * @param {VectorSearchTypeEnum} vectorSearchRequest.SearchType - The type of search (default is VectorSearchTypeEnum.InnerProduct).
   * @param {number} vectorSearchRequest.StartIndex - The starting index for the search (default is 0).
   * @param {number} vectorSearchRequest.MaxResults - The maximum number of results to retrieve (default is 100).
   * @param {Array<number>} vectorSearchRequest.Embeddings - The embeddings for the search (default is an empty array).
   */
  constructor(vectorSearchRequest = {}) {
    const {
      SearchType = VectorSearchTypeEnum.InnerProduct,
      VectorRepositoryGUID = null,
      StartIndex = 0,
      MaxResults = 100,
      Embeddings = [],
    } = vectorSearchRequest;

    this.SearchType = SearchType;
    this.VectorRepositoryGUID = VectorRepositoryGUID;
    this.StartIndex = this.validateStartIndex(StartIndex);
    this.MaxResults = this.validateMaxResults(MaxResults);
    this.Embeddings = this.validateEmbeddings(Embeddings);
  }

  /**
   * Validates the start index.
   * @param {number} value - The value for StartIndex.
   * @returns {number} - The validated StartIndex value.
   * @throws {RangeError} - If value is less than 0.
   */
  validateStartIndex(value) {
    if (value < 0) {
      throw new RangeError('StartIndex must be greater than or equal to 0.');
    }
    return value;
  }

  /**
   * Validates the maximum results value.
   * @param {number} value - The value for MaxResults.
   * @returns {number} - The validated MaxResults value.
   * @throws {RangeError} - If value is less than 1.
   */
  validateMaxResults(value) {
    if (value < 1) {
      throw new RangeError('MaxResults must be greater than or equal to 1.');
    }
    return value;
  }

  /**
   * Validates the embeddings array.
   * @param {Array<number>} value - The embeddings array.
   * @returns {Array<number>} - The validated embeddings array.
   */
  validateEmbeddings(value) {
    return value == null ? [] : value;
  }
}
