import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { DataRepository, EnumerationResult } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export class DataRepositorySdk extends ViewSdkBase {
  /**
   * Constructs a new DataRepositorySdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Data-Repositoty

  /**
   * Retrieve a list of data repositories.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<DataRepository>>} A promise resolving to an array of DataRepository objects.
   * @throws {MethodError} If the request fails.
   */
  retrieveDataRepositories = async (cancelToken: AbortController): Promise<DataRepository[]> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/datarepositories/';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve a specific data repository by its GUID.
   *
   * @param {string} repositoryGuid - The GUID of the data repository to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataRepository>} A promise resolving to the DataRepository object or null.
   * @throws {MethodError} If the repositoryGuid is null or empty.
   */
  retrieveDataRepository = async (repositoryGuid: string, cancelToken: AbortController): Promise<DataRepository> => {
    if (!repositoryGuid) {
      GenericExceptionHandlers.ArgumentNullException('repositoryGuid');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/datarepositories/' + repositoryGuid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Create a new data repository.
   *
   * @param {DataRepository} dataRepository Information about the data repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataRepository>} A promise resolving to the created DataRepository object or null.
   * @throws {MethodError} If the repository is null.
   */
  createDataRepository = async (
    dataRepository: DataRepository,
    cancelToken: AbortController
  ): Promise<DataRepository> => {
    if (!dataRepository) {
      GenericExceptionHandlers.ArgumentNullException('repository');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/datarepositories';
    return await this.create(url, dataRepository, cancelToken);
  };

  /**
   * Delete a data repository by its GUID.
   *
   * @param {string} repositoryGuid - The GUID of the data repository to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to void if the deletion is successful.
   * @throws {MethodError} If the repositoryGuid is null or empty.
   */
  deleteDataRepository = async (repositoryGuid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!repositoryGuid) {
      GenericExceptionHandlers.ArgumentNullException('repositoryGuid');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/datarepositories/' + repositoryGuid;
    return await this.delete(url, cancelToken);
  };

  /**
   * Enumerate Data Repositories.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<DataRepository>>} A promise resolving to the created EnumerationResult object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  enumerateDataRepositories = async (cancelToken: AbortController): Promise<EnumerationResult<DataRepository>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/datarepositories/`;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Check if a data repository exists by its GUID.
   *
   * @param {string} guid - The GUID of the data repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the data repository exists, false otherwise.
   * @throws {MethodError} If the GUID is null or empty.
   */
  existsDataRepository = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/datarepositories/' + guid;
    // Use the `exists` method to check for the data repository
    return await this.exists(url, cancelToken);
  };

  /**
   * Update a data repository by its GUID.
   * @param {DataRepository} dataRepository - The updated data repository object.
   * @param {string} dataRepository.GUID - The GUID of the data repository to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataRepository>} A promise resolving to the updated DataRepository object or null.
   * @throws {MethodError} If the dataRepository is null or empty.
   */
  updateDataRepository = async (
    dataRepository: DataRepository,
    cancelToken: AbortController
  ): Promise<DataRepository> => {
    if (!dataRepository || !dataRepository.GUID) {
      GenericExceptionHandlers.ArgumentNullException('dataRepository');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/datarepositories/${dataRepository.GUID}`;
    return await this.update(url, dataRepository, cancelToken);
  };
}
