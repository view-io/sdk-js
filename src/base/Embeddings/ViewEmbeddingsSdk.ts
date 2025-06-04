import { EmbeddingDirectoryRequest, ModelsConfigRequest } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class ViewEmbeddingsSdk extends ViewSdkBase {
  /**
   * Constructs a new ViewProcessorSdk.
   * @alias module:base/ViewProcessorSdk
   * @class
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Generate embeddings for text content using the specified model and configuration
   * @param {EmbeddingDirectoryRequest} request - The embedding generation request
   * @param {AbortController} cancelToken - Optional cancellation token
   * @returns {Promise<EmbeddingsResult>} The embeddings result
   * @throws {ApiErrorResponse} If the request is null or empty
   */
  generateEmbeddings = async (request: EmbeddingDirectoryRequest, cancelToken: AbortController) => {
    if (!request) {
      GenericExceptionHandlers.ArgumentNullException('request');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/embeddings`;
    return await this.postCreate(url, request, cancelToken);
  };

  /**
   * Preload Models
   *
   * @param {ModelsConfigRequest} models - The models configuration object
   * @param {AbortController} cancelToken - Optional cancellation token
   * @returns {Promise<object>} A promise resolving to a void indicating the preloading is complete
   * @throws {ApiErrorResponse} If the models configuration is null or empty
   */
  preloadModels = async (models: ModelsConfigRequest, cancelToken: AbortController) => {
    if (!models) {
      GenericExceptionHandlers.ArgumentNullException('models');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/embeddings/preload`;
    return await this.postCreate(url, models, cancelToken);
  };
}
