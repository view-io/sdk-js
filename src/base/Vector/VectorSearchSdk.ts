import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { EmbeddingResponse, VectorSearch, VectorSearchRequest } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class VectorSearchSdk extends ViewSdkBase {
  /**
   * Constructs a new VectorSearchSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  //region Search
  /**
   *  search.
   * @param {string} vectorRepositoryGUID - Vector repository's unique identifier.
   * @param {VectorSearchRequest} searchReq - Search request parameters.
   * @param {AbortController} [cancelToken] - Optional cancellation token with an `abort` method.
   * @returns {Promise<VectorSearch[]>} A promise resolving to a list of VectorSearchs or null.
   * @throws {MethodError} If the search request is null.
   */
  vectorSearch = async (
    vectorRepositoryGUID: string,
    searchReq: VectorSearchRequest,
    cancelToken?: AbortController
  ): Promise<VectorSearch[]> => {
    if (!vectorRepositoryGUID) {
      GenericExceptionHandlers.ArgumentNullException('vectorRepositoryGUID');
    }
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('searchReq');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGUID +
      '/search';

    return await this.postCreateResource(url, searchReq, cancelToken);
  };
  /**
   * Find embeddings.
   * @param {string} vector_repository_guid - Vector repository's unique identifier.
   * @param {VectorSearchRequest} searchReq - Search request parameters.
   * @param {AbortController} [cancelToken] - Optional cancellation token with an `abort` method.
   * @returns {Promise<EmbeddingResponse>} A promise resolving to the EmbeddingResponse object or null.
   * @throws {MethodError} If the search request is null.
   */

  findEmbeddings = async (
    vector_repository_guid: string,
    searchReq: VectorSearchRequest,
    cancelToken?: AbortController
  ): Promise<EmbeddingResponse> => {
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('searchReq');
    }
    if (!vector_repository_guid) {
      GenericExceptionHandlers.ArgumentNullException('vector_repository_guid');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/vectorrepositories/' +
      vector_repository_guid +
      '/find';

    return await this.postCreateResource(url, searchReq, cancelToken);
  };
}
