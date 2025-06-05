import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { VectorRepository, VectorRepositoryRequest } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class VectorRepositorySdk extends ViewSdkBase {
  /**
   * Constructor for VectorRepositorySdk.
   * @param {SdkConfiguration} config - The configuration for the SDK.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  // region Vector-Repositories

  /**
   * Create a vector repository.
   *
   * @param {VectorRepositoryRequest} vector Information about the vector repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<VectorRepository>} A promise resolving to the created VectorRepository object.
   * @throws {ApiErrorResponse} If the repo is null.
   */
  async createVectorRepository(vector: VectorRepositoryRequest, cancelToken: AbortController) {
    if (!vector) {
      GenericExceptionHandlers.ArgumentNullException('repo');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories';
    return await this.create(url, vector, cancelToken);
  }

  /**
   * Check if a vector repository exists.
   *
   * @param {string} guid - The GUID of the vector repository to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the vector repository exists, false otherwise.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  async existsVectorRepository(guid: string, cancelToken: AbortController) {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + guid;
    return await this.exists(url, cancelToken);
  }

  /**
   * Retrieve a vector repository.
   *
   * @param {string} guid - The GUID of the vector repository to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<VectorRepository>} A promise resolving to the VectorRepository object.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  async retrieveVectorRepository(guid: string, cancelToken: AbortController) {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + guid;
    return await this.retrieve(url, cancelToken);
  }

  /**
   * Retrieve all vector repositories.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<VectorRepository>>} A promise resolving to a list of VectorRepository objects.
   */
  async retrieveVectorRepositories(cancelToken: AbortController) {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories';
    return await this.retrieve(url, cancelToken);
  }

  /**
   * Update a vector repository.
   *
   * @param {VectorRepositoryRequest} vector Information about the vector repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<VectorRepository>} A promise resolving to the updated VectorRepository object.
   * @throws {ApiErrorResponse} If the vector is null.
   */
  async updateVectorRepository(vector: VectorRepositoryRequest, cancelToken: AbortController) {
    if (!vector) {
      GenericExceptionHandlers.ArgumentNullException('vector');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + vector.GUID;
    return await this.update(url, vector, cancelToken);
  }

  /**
   * Delete a vector repository.
   *
   * @param {string} guid - The GUID of the vector repository to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the vector repository is deleted.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  async deleteVectorRepository(guid: string, cancelToken: AbortController) {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + guid;
    return await this.delete(url, cancelToken);
  }

  /**
   * Enumerate Vector-Repositories.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  enumerateVectorRepositories = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/vectorrepositories/`;
    return await this.retrieve(url, cancelToken);
  };
}
