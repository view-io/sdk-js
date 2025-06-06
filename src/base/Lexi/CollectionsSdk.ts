import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { Collection, CollectionStatistics } from '../../types';

export class CollectionsSdk extends ViewSdkBase {
  /**
   * Constructs a new CollectionsSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  // region Collections

  /**
   * Retrieve collections.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Collection>>} A promise resolving to an array of collections or null if not found.
   * @throws {MethodError} If an error occurs during retrieval.
   */
  readAll = async (cancelToken: AbortController): Promise<Collection[]> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve a single collection by GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Collection>} A promise that resolves to the retrieved collection, or null if not found.
   * @throws {MethodError} If the collectionGuid is null or empty, or if an error occurs during retrieval.
   */
  read = async (collectionGuid: string, cancelToken: AbortController): Promise<Collection> => {
    if (!collectionGuid || collectionGuid.trim() === '') {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }

    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve collection statistics.
   *
   * @param {string} collectionGuid - The collection GUID.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<CollectionStatistics>} A promise resolving to collection statistics.
   * @throws {MethodError} If the collectionGuid is null or empty, or if an error occurs during retrieval.
   */
  readStatistics = async (collectionGuid: string, cancelToken: AbortController): Promise<CollectionStatistics> => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid + '?stats';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Create a new collection.
   *
   * @param {Collection} collection - Information about the collection.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<Collection>} A promise resolving to the created collection.
   * @throws {MethodError} If the collection is null or empty.
   */
  create = async (collection: Collection, cancelToken: AbortController): Promise<Collection> => {
    if (!collection) {
      GenericExceptionHandlers.ArgumentNullException('collection');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections';
    return await this.createResource(url, collection, cancelToken);
  };

  /**
   * Delete a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection to delete.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving when the collection is deleted.
   * @throws {MethodError} If the collectionGuid is null or empty.
   */
  delete = async (collectionGuid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.deleteResource(url, cancelToken);
  };
  /**
   * Retrieve top terms.
   *
   * @param {string} collectionGuid - The collection GUID.
   * @param {number} maxKeys - The maximum number of keys to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<Object>} A promise resolving to collection statistics.
   * @throws {MethodError} If the collectionGuid is null or empty.
   */
  readTopTerms = async (
    collectionGuid: string,
    maxKeys: number = 10,
    cancelToken: AbortController
  ): Promise<Object> => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/collections/${collectionGuid}/topterms?max-keys=${maxKeys}`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Check if a collection exists.
   * @param {string} collectionGuid - The GUID of the collection to check for existence.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the collection exists, `false` if it does not, or an error response if the check fails.
   * @throws {MethodError} If the collectionGuid argument is null or undefined.
   */
  exists = async (collectionGuid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/collections/${collectionGuid}`;
    return await this.existsResource(url, cancelToken);
  };
  // endregion
}
