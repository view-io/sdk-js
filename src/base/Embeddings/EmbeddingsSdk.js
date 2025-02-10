import ApiErrorResponse from '../../models/ApiErrorResponse';
import EmbeddingModel from '../../models/Embedding';
import ViewSdkBase from '../ViewSDKBase';

/**
 * Embeddings service.
 * @module base/EmbeddingsSdk
 * @version 0.1.0
 */
export default class EmbeddingsSdk extends ViewSdkBase {
  /**
   * Constructs a new EmbeddingsApi.
   * @alias module:base/EmbeddingsSdk
   * @class
   * @param {string} tenantGuid - Tenant GUID.
   * @param {string} accessKey - Access key.
   * @param {string} endpoint - Endpoint URL .
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
    this.Header = '[EmbeddingsSdk] ';
  }

  /**
   * Checks the existence of embeddings.
   *@param {Object} data - The data object containing models and API key.
   * @param {Array<string>} data.Models - An array of model names to check for existence.
   * @param {string} data.ApiKey - The API key for accessing the embeddings.
   * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to `true` if embeddings exist, or an error response if the check fails.
   */
  checkEmbeddingsExistence = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/embeddings`;
    return await this.exists(url, cancelToken);
  };

  /**
   * Preloads embedding models.
   * @param {Object} payload - The payload containing models and API key.
   * @param {Array<string>} payload.Models - An array of model names to preload.
   * @param {string} payload.ApiKey - The API key for accessing the embeddings.
   * @param {Array<string>} payload.Contents - An array of text chunks for which to generate embeddings.
   * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingModel|ApiErrorResponse>} A promise that resolves to the response of the preload operation or an error response if the preload fails.
   */
  preloadModels = async (payload, cancelToken) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/embeddings/preload/`;
    return await this.post(url, payload, EmbeddingModel, cancelToken);
  };

  /**
   * Generates embeddings for the provided contents.
   * @param {Object} payload - The payload containing models and API key.
   * @param {Array<string>} payload.Models - An array of model names to preload.
   * @param {string} payload.ApiKey - The API key for accessing the embeddings.
   * @param {Array<string>} payload.Contents - An array of text chunks for which to generate embeddings.
   * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingModel|ApiErrorResponse>} A promise that resolves to the generated embeddings or an error response if the generation fails.
   */
  generateEmbeddings = async (payload, cancelToken) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/embeddings/`;
    return await this.post(url, payload, EmbeddingModel, cancelToken);
  };
}
