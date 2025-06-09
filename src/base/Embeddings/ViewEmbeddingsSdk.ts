import { EmbeddingDirectoryRequest, EmbeddingsResult, MethodError, ModelsConfigRequest } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class ViewEmbeddingsSdk extends ViewSdkBase {
  public config: SdkConfiguration;
  /**
   * Constructs a new ViewProcessorSdk.
   * @alias module:base/ViewProcessorSdk
   * @class
   * @param {string} endpoint - The API endpoint base URL.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    super(new SdkConfiguration(endpoint, tenantGuid, accessKey));
  }

  /**
   * Generate embeddings for text content using the specified model and configuration
   * @param {EmbeddingDirectoryRequest} request - The embedding generation request
   * @param {AbortController} cancelToken - Optional cancellation token
   * @returns {Promise<EmbeddingsResult>} The embeddings result
   * @throws {MethodError} If the request is null or empty
   */
  generateEmbeddings = async (
    request: EmbeddingDirectoryRequest,
    cancelToken?: AbortController
  ): Promise<EmbeddingsResult> => {
    if (!request) {
      GenericExceptionHandlers.ArgumentNullException('request');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/embeddings`;
    return await this.postCreateResource(url, request, cancelToken);
  };

  /**
   * Preload Models
   *
   * @param {ModelsConfigRequest} models - The models configuration object
   * @param {AbortController} cancelToken - Optional cancellation token
   * @returns {Promise<object>} A promise resolving to a void indicating the preloading is complete
   * @throws {MethodError} If the models configuration is null or empty
   */
  preloadModels = async (models: ModelsConfigRequest, cancelToken?: AbortController): Promise<void> => {
    if (!models) {
      GenericExceptionHandlers.ArgumentNullException('models');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/embeddings/preload`;
    return await this.postCreateResource(url, models, cancelToken);
  };
}
