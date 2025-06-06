import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { Collection, CollectionStatistics, EnumerationResult } from '../../types';
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
   * @returns {Promise<Array<Collection>>} A promise resolving to an array of Collection objects.
   */
  readAll = async (cancelToken: AbortController): Promise<Array<Collection>> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve a collection by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Collection>} A promise resolving to the Collection object or null if not found.
   * @throws {MethodError} If the collectionGuid is null or empty.
   */
  read = async (collectionGuid: string, cancelToken: AbortController): Promise<Collection> => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve statistics for a collection by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve statistics for.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CollectionStatistics>} A promise resolving to the CollectionStatistics object or null.
   * @throws {MethodError} If the collectionGuid is null or empty.
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
   * @param {Collection} collection Information about the collection.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Collection>} A promise resolving to the created Collection object or null.
   * @throws {MethodError} If the collection is null.
   */
  create = async (collection: Collection, cancelToken: AbortController): Promise<Collection> => {
    if (!collection) {
      GenericExceptionHandlers.ArgumentNullException('collection');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections';
    return await this.createResource(url, collection, cancelToken);
  };

  /**
   * Delete a collection by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if successful.
   * @throws {MethodError} If the collectionGuid is null or empty.
   */
  delete = async (collectionGuid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.deleteResource(url, undefined, cancelToken);
  };

  /**
   * Enumerate Collections.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<Collection>>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  enumerate = async (cancelToken: AbortController): Promise<EnumerationResult<Collection>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/collections`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Check if a collection exists by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the collection exists, otherwise false.
   * @throws {MethodError} If the collectionGuid is null or empty.
   */
  exists = async (collectionGuid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/collections/' + collectionGuid;
    return await this.existsResource(url, cancelToken);
  };
}
