import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { Collection } from '../../types';

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
   * @returns {Promise<Array<Collection>|null|ApiErrorResponse>} A promise resolving to an array of collections or null if not found.
   * @throws {ApiErrorResponse} If an error occurs during retrieval.
   */
  retrieveCollections = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve a single collection by GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Collection|null|ApiErrorResponse>} A promise that resolves to the retrieved collection, or null if not found.
   * @throws {ApiErrorResponse} If the collectionGuid is null or empty, or if an error occurs during retrieval.
   */
  retrieveCollection = async (collectionGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid || collectionGuid.trim() === '') {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }

    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve collection statistics.
   *
   * @param {string} collectionGuid - The collection GUID.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<CollectionStatistics|ApiErrorResponse>} A promise resolving to collection statistics.
   */
  retrieveCollectionStatistics = async (collectionGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid + '?stats';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Create a new collection.
   *
   * @param {Collection} collection - Information about the collection.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<Collection|ApiErrorResponse>} A promise resolving to the created collection.
   */
  createCollection = async (collection: Collection, cancelToken: AbortController) => {
    if (!collection) {
      GenericExceptionHandlers.ArgumentNullException('collection');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections';
    return await this.create(url, collection, cancelToken);
  };

  /**
   * Delete a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection to delete.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the collection is deleted.
   */
  deleteCollection = async (collectionGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.delete(url, cancelToken);
  };
  /**
   * Retrieve top terms.
   *
   * @param {string} collectionGuid - The collection GUID.
   * @param {number} maxKeys - The maximum number of keys to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<Object|ApiErrorResponse>} A promise resolving to collection statistics.
   * @throws {ApiErrorResponse} If the collectionGuid is null or empty.
   */
  retrieveCollectionTopTerms = async (collectionGuid: string, maxKeys = 10, cancelToken: AbortController) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/collections/${collectionGuid}/topterms?max-keys=${maxKeys}`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Check if a collection exists.
   * @param {string} collectionGuid - The GUID of the collection to check for existence.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to `true` if the collection exists, `false` if it does not, or an error response if the check fails.
   * @throws {ApiErrorResponse} If the collectionGuid argument is null or undefined.
   */
  collectionExists = async (collectionGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/collections/${collectionGuid}`;
    return await this.exists(url, cancelToken);
  };
  // endregion
}
