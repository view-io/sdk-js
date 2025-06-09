import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import {
  EnumerationResult,
  VectorRepository,
  VectorRepositoryCreateRequest,
  VectorRepositoryRequest,
} from '../../types';
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
   * @param {VectorRepositoryCreateRequest} vector Information about the vector repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<VectorRepository>} A promise resolving to the created VectorRepository object.
   * @throws {MethodError} If the repo is null.
   */
  create = async (vector: VectorRepositoryCreateRequest, cancelToken?: AbortController): Promise<VectorRepository> => {
    if (!vector) {
      GenericExceptionHandlers.ArgumentNullException('repo');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories';
    return await this.createResource(url, vector, cancelToken);
  };

  /**
   * Check if a vector repository exists.
   *
   * @param {string} guid - The GUID of the vector repository to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the vector repository exists, false otherwise.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve a vector repository.
   *
   * @param {string} guid - The GUID of the vector repository to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<VectorRepository>} A promise resolving to the VectorRepository object.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<VectorRepository> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all vector repositories.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<VectorRepository>>} A promise resolving to a list of VectorRepository objects.
   * @throws {MethodError} If the vector repositories are null.
   */
  readAll = async (cancelToken?: AbortController): Promise<VectorRepository> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update a vector repository.
   *
   * @param {VectorRepositoryRequest} vector Information about the vector repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<VectorRepository>} A promise resolving to the updated VectorRepository object.
   * @throws {MethodError} If the vector is null.
   */
  update = async (vector: VectorRepository, cancelToken?: AbortController): Promise<VectorRepository> => {
    if (!vector) {
      GenericExceptionHandlers.ArgumentNullException('vector');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + vector.GUID;
    return await this.updateResource(url, vector, cancelToken);
  };

  /**
   * Delete a vector repository.
   *
   * @param {string} guid - The GUID of the vector repository to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the vector repository is deleted.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/vectorrepositories/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Enumerate Vector-Repositories.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<VectorRepository>>} A promise resolving to the created EnumerationResult object.
   * @throws {MethodError} If the vector repositories are null.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<VectorRepository>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/vectorrepositories/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
