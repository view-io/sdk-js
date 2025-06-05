import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { EnumerationQuery } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class VectorRepositoriesSdk extends ViewSdkBase {
  /**
   * Constructs a new VectorRepositoriesSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Repositories
  /**
   * Enumerate all repositories.
   * @param {EnumerationQuery} enumerationQuery - Enumeration query parameters.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise[]} A promise resolving to a list of VectorRepository objects.
   */
  enumerateVectorRepositories = async (enumerationQuery: EnumerationQuery, cancelToken: AbortController) => {
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/vectorrepositories/' +
      enumerationQuery.vectorRepositoryGuid +
      '/enumerate';
    return await this.postCreate(url, enumerationQuery, cancelToken);
  };

  /**
   * Repository statistics.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CollectionStatistics>} A promise resolving to the CollectionStatistics object.
   * @throws {ApiErrorResponse} If the vectorRepositoryGuid is null or empty.
   */
  retrieveVectorRepositoryStatistics = async (vectorRepositoryGuid: string, cancelToken: AbortController) => {
    if (!vectorRepositoryGuid) {
      GenericExceptionHandlers.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/stats';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Empty repository.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the repository is deleted.
   * @throws {ApiErrorResponse} If the VectorRepositoryGUID is null or empty.
   */
  deleteVectorRepository = async (vectorRepositoryGuid: string, cancelToken: AbortController) => {
    if (!vectorRepositoryGuid) {
      GenericExceptionHandlers.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + vectorRepositoryGuid;
    return await this.delete(url, cancelToken);
  };

  //endregion
}
