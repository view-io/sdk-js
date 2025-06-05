import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { AclMetaData, ApiErrorResponse, ObjectMetadata } from '../../types';
import TagMetaData from 'litegraphdb/types/models/TagMetaData';

export default class ObjectSdk extends ViewSdkBase {
  /**
   * Constructs a new ObjectSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Objects

  /**
   * Check if a Object exists by its GUID.
   *
   * @param {string} guid - The GUID of the node to retrieve.
   * @param {string} objectValue - The GUID of the node to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  existsObject = async (guid: string, objectValue: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '/objects/' + objectValue;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve Objects.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<String|null|ApiErrorResponse>} A promise resolving to the data retrieved or null if the object is not found.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  retrieveObjects = async (bucketGuid: string, cancelToken: AbortController) => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGuid;
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Write Object non-chuncked .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {ObjectMetadata} data Information about the Object .
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata  |null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {ApiErrorResponse} If the ObjectMetadata is null or empty.
   */
  writeObject = async (bucketGUID: string, key: string, data: ObjectMetadata, cancelToken: AbortController) => {
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key;
    return await this.create(url, data, cancelToken);
  };

  /**
   * Write expiration .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {ObjectMetadata} object Information about the Object .
   * @property {string} object.ExpirationUtc - The expiration timestamp in UTC.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {ApiErrorResponse} If the node is null or empty.
   */
  writeObjectExpiration = async (
    bucketGUID: string,
    key: string,
    object: ObjectMetadata,
    cancelToken: AbortController
  ) => {
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    if (!object?.ExpirationUtc) {
      GenericExceptionHandlers.ArgumentNullException('ExpirationUtc');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGUID +
      '/objects/' +
      key +
      '?expiration';
    return await this.update(url, object, cancelToken);
  };

  /**
   * Retrieve data by key.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<String|null|ApiErrorResponse>} A promise resolving to the data retrieved or null if the object is not found.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  retrieveObjectData = async (bucketGuid: string, key: string, cancelToken: AbortController) => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key;
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieve(url, undefined, cancelToken);
  };

  /**
   * Retrieve object Range.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {string} range - The range of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<string|null|ApiErrorResponse>} A promise resolving to the UserMaster object or null if not found.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  retrieveObjectDataInRange = async (bucketGuid: string, key: string, range: string, cancelToken: AbortController) => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    if (!range) {
      GenericExceptionHandlers.ArgumentNullException('range');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key;
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieve(url, cancelToken, { Range: range });
  };

  /**
   * Retrieve object by metadata.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the UserMaster object or null if not found.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  retrieveObjectMetadata = async (bucketGuid: string, key: string, cancelToken: AbortController) => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGuid +
      '/objects/' +
      key +
      '?md';
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Delete a Object by its key.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  deleteObject = async (bucketGuid: string, key: string, cancelToken: AbortController) => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key;
    // Use the `delete` method to remove the object by key
    return await this.delete(url, cancelToken);
  };

  /**
   * Write Tag .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {Array<{Key: string, Value: string}>} tagMetaData Information about the tag .
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the created TagMetaData object or null if the creation fails.
   * @throws {ApiErrorResponse} If the node is null or empty.
   */
  createObjectTags = async (
    bucketGUID: string,
    key: string,
    tagMetaData: TagMetaData,
    cancelToken: AbortController
  ) => {
    if (!tagMetaData) {
      GenericExceptionHandlers.ArgumentNullException('tagMetaData');
    }
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGUID +
      '/objects/' +
      key +
      '?tags';
    return await this.update(url, tagMetaData, cancelToken);
  };

  /**
   * Delete tags from an object.
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the tags are deleted.
   * @throws {ApiErrorResponse} If the bucketGUID or key is null or empty.
   */
  deleteObjectTags = async (bucketGUID: string, key: string, cancelToken: AbortController) => {
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGUID +
      '/objects/' +
      key +
      '?tags';
    return await this.delete(url, cancelToken);
  };

  /**
   * Retrieve a tag by its key.
   *
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the tag to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetaData object or null if not found.
   * @throws {ApiErrorResponse} If the bucketGUID or key is null or empty.
   */
  retrieveObjectTags = async (bucketGUID: string, key: string, cancelToken: AbortController) => {
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGUID +
      '/objects/' +
      key +
      '?tags';
    // Use the `retrieve` method to get the user
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve tag by bucketGuid.
   *
   * @param {string} bucketguid - GUID of the bucket.
   * @param {string} key - Key of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveObjectACL = async (bucketGuid: string, key: string, cancelToken: AbortController) => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGuid +
      '/objects/' +
      key +
      '?acl';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Delete acl by bucketGuid.
   *
   * @param {string} bucketGuid - GUID of the bucket to delete.
   * @param {string} key - Key of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  deleteObjectACL = async (bucketGuid: string, key: string, cancelToken: AbortController) => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGuid +
      '/objects/' +
      key +
      '?acl';
    return await this.delete(url, cancelToken);
  };

  /**
   * Write Acl for bucket.
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AclMetaData} aclMetaData Information about the acl .
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclEntry|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {ApiErrorResponse} If the ObjectMetadata is null or empty.
   */
  createObjectACL = async (bucketGuid: string, key: string, aclMetaData: AclMetaData, cancelToken: AbortController) => {
    if (!aclMetaData) {
      GenericExceptionHandlers.ArgumentNullException('aclMetaData');
    }
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGuid +
      '/objects/' +
      key +
      '?acl';
    return await this.update(url, aclMetaData, cancelToken);
  };
}
