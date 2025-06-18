import { StoragePool } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class PoolSdk extends ViewSdkBase {
  /**
   * Constructs a new PoolSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Pool
  /**
   * Create a pool.
   *
   * @param {StoragePool} pool Information about the storage pool.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool>} A promise resolving to the created StoragePool object or null.
   * @throws {MethodError} If the pool is null.
   */
  create = async (pool: StoragePool, cancelToken?: AbortController): Promise<StoragePool> => {
    if (!pool) {
      GenericExceptionHandlers.ArgumentNullException('pool');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/pools';
    return await this.createResource(url, pool, cancelToken);
  };

  /**
   * Check if a pool exists.
   *
   * @param {string} guid - The GUID of the pool to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the pool exists, or false if not.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/pools/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve a pool by its GUID.
   *
   * @param {string} guid - The GUID of the pool to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool>} A promise resolving to the StoragePool object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<StoragePool> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/pools/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all pools.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<StoragePool>>} A promise resolving to an array of StoragePool objects.
   */
  readAll = async (cancelToken?: AbortController): Promise<StoragePool[]> => {
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/pools';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update a pool.
   *
   * @param {StoragePool} pool Information about the storage pool.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool>} A promise resolving to the updated StoragePool object or null.
   * @throws {MethodError} If the pool is null.
   */
  update = async (pool: StoragePool, cancelToken?: AbortController): Promise<StoragePool> => {
    if (!pool) {
      GenericExceptionHandlers.ArgumentNullException('pool');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/pools/' + pool.GUID;
    return await this.updateResource(url, pool, cancelToken);
  };

  /**
   * Delete a pool by its GUID.
   *
   * @param {string} guid - The GUID of the pool to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|boolean>} A promise resolving to void if successful.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<void | boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/pools/' + guid;
    return await this.deleteResource(url, cancelToken);
  };
}
