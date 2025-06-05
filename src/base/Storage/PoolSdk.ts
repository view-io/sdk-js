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
   * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the created StoragePool object or null.
   * @throws {Error} If the pool is null.
   */
  createStoragePool = async (pool: StoragePool, cancelToken: AbortController) => {
    if (!pool) {
      GenericExceptionHandlers.ArgumentNullException('pool');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/pools';
    return await this.create(url, pool, cancelToken);
  };

  /**
   * Check if a pool exists.
   *
   * @param {string} guid - The GUID of the pool to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the pool exists, or false if not.
   * @throws {Error} If the guid is null or empty.
   */
  existsStoragePool = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/pools/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a pool by its GUID.
   *
   * @param {string} guid - The GUID of the pool to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the StoragePool object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveStoragePool = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/pools/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve all pools.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<StoragePool>|ApiErrorResponse>} A promise resolving to an array of StoragePool objects.
   */
  retrieveStoragePools = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/pools';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update a pool.
   *
   * @param {StoragePool} pool Information about the storage pool.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the updated StoragePool object or null.
   * @throws {Error} If the pool is null.
   */
  updateStoragePool = async (pool: StoragePool, cancelToken: AbortController) => {
    if (!pool) {
      GenericExceptionHandlers.ArgumentNullException('pool');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/pools/' + pool.GUID;
    return await this.update(url, pool, cancelToken);
  };

  /**
   * Delete a pool by its GUID.
   *
   * @param {string} guid - The GUID of the pool to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
   * @throws {Error} If the guid is null or empty.
   */
  deleteStoragePool = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/pools/' + guid;
    return await this.delete(url, cancelToken);
  };
}
