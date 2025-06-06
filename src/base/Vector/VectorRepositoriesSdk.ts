import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { CollectionStatistics, EnumerationQuery, VectorRepository } from '../../types';
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
   * @returns {Promise<VectorRepository[]>} A promise resolving to a list of VectorRepository objects.
   */
  enumerate = async (enumerationQuery: EnumerationQuery, cancelToken: AbortController): Promise<VectorRepository[]> => {
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/vectorrepositories/' +
      enumerationQuery.vectorRepositoryGuid +
      '/enumerate';
    return await this.postCreateResource(url, enumerationQuery, cancelToken);
  };

  /**
   * Repository statistics.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CollectionStatistics>} A promise resolving to the CollectionStatistics object.
   * @throws {MethodError} If the vectorRepositoryGuid is null or empty.
   */
  readStatistics = async (
    vectorRepositoryGuid: string,
    cancelToken: AbortController
  ): Promise<CollectionStatistics> => {
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
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Empty repository.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void | boolean>} A promise that resolves when the repository is deleted.
   * @throws {MethodError} If the VectorRepositoryGUID is null or empty.
   */
  delete = async (vectorRepositoryGuid: string, cancelToken: AbortController): Promise<void | boolean> => {
    if (!vectorRepositoryGuid) {
      GenericExceptionHandlers.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + vectorRepositoryGuid;
    return await this.deleteResource(url, cancelToken);
  };

  //endregion
}
