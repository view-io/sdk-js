import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { Collection } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class CollectionsSdk extends ViewSdkBase {
  /**
   * Constructor for CollectionsSdk.
   * @param {SdkConfiguration} config - The configuration for the SDK.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Collections

  /**
   * Retrieve all collections.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Collection>|ApiErrorResponse>} A promise resolving to an array of Collection objects.
   */
  retrieveCollections = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve a collection by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Collection|null|ApiErrorResponse>} A promise resolving to the Collection object or null if not found.
   * @throws {ApiErrorResponse} If the collectionGuid is null or empty.
   */
  retrieveCollection = async (collectionGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve statistics for a collection by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve statistics for.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CollectionStatistics|null|ApiErrorResponse>} A promise resolving to the CollectionStatistics object or null.
   * @throws {ApiErrorResponse} If the collectionGuid is null or empty.
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
   * @param {Collection} collection Information about the collection.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Collection|null|ApiErrorResponse>} A promise resolving to the created Collection object or null.
   * @throws {ApiErrorResponse} If the collection is null.
   */
  createCollection = async (collection: Collection, cancelToken: AbortController) => {
    if (!collection) {
      GenericExceptionHandlers.ArgumentNullException('collection');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections';
    return await this.create(url, collection, cancelToken);
  };

  /**
   * Delete a collection by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
   * @throws {ApiErrorResponse} If the collectionGuid is null or empty.
   */
  deleteCollection = async (collectionGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.delete(url, cancelToken);
  };

  /**
   * Enumerate Collections.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  enumerateCollections = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/collections`;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Check if a collection exists by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the collection exists, otherwise false.
   * @throws {ApiErrorResponse} If the collectionGuid is null or empty.
   */
  existsCollection = async (collectionGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.exists(url, cancelToken);
  };
}
