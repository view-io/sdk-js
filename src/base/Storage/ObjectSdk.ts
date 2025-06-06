import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { AclMetaData, ObjectMetadata, TagMetadata } from '../../types';

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
   * @returns {Promise<boolean>} A promise resolving to the Node object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, objectValue: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '/objects/' + objectValue;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve Objects.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<String>} A promise resolving to the data retrieved or null if the object is not found.
   * @throws {MethodError} If the GUID is null or empty.
   */
  read = async (bucketGuid: string, cancelToken: AbortController): Promise<string> => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGuid;
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Write Object non-chuncked .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {ObjectMetadata} data Information about the Object .
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {MethodError} If the ObjectMetadata is null or empty.
   */
  write = async (
    bucketGUID: string,
    key: string,
    data: ObjectMetadata,
    cancelToken: AbortController
  ): Promise<ObjectMetadata> => {
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key;
    return await this.createResource(url, data, cancelToken);
  };

  /**
   * Write expiration .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {ObjectMetadata} object Information about the Object .
   * @property {string} object.ExpirationUtc - The expiration timestamp in UTC.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {MethodError} If the node is null or empty.
   */
  writeExpiration = async (bucketGUID: string, key: string, object: ObjectMetadata, cancelToken: AbortController) => {
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
    return await this.updateResource(url, object, cancelToken);
  };

  /**
   * Retrieve data by key.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<String>} A promise resolving to the data retrieved or null if the object is not found.
   * @throws {MethodError} If the GUID is null or empty.
   */
  readData = async (bucketGuid: string, key: string, cancelToken: AbortController): Promise<string> => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key;
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieveResource(url, undefined, cancelToken);
  };

  /**
   * Retrieve object Range.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {string} range - The range of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<string>} A promise resolving to the UserMaster object or null if not found.
   * @throws {MethodError} If the GUID is null or empty.
   */
  readDataInRange = async (
    bucketGuid: string,
    key: string,
    range: string,
    cancelToken: AbortController
  ): Promise<string> => {
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
    return await this.retrieveResource(url, cancelToken, { Range: range });
  };

  /**
   * Retrieve object by metadata.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata>} A promise resolving to the UserMaster object or null if not found.
   * @throws {MethodError} If the GUID is null or empty.
   */
  readMetadata = async (bucketGuid: string, key: string, cancelToken: AbortController): Promise<ObjectMetadata> => {
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
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Delete a Object by its key.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|boolean>} A promise resolving when the user is deleted.
   * @throws {MethodError} If the GUID is null or empty.
   */
  delete = async (bucketGuid: string, key: string, cancelToken: AbortController): Promise<void | boolean> => {
    if (!bucketGuid) {
      GenericExceptionHandlers.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key;
    // Use the `delete` method to remove the object by key
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Write Tag .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {Array<{Key: string, Value: string}>} tagMetaData Information about the tag .
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetadata>} A promise resolving to the created TagMetadata object or null if the creation fails.
   * @throws {MethodError} If the node is null or empty.
   */
  createTags = async (
    bucketGUID: string,
    key: string,
    tagMetaData: TagMetadata,
    cancelToken: AbortController
  ): Promise<TagMetadata> => {
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
    return await this.updateResource(url, tagMetaData, cancelToken);
  };

  /**
   * Delete tags from an object.
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|boolean>} A promise resolving when the tags are deleted.
   * @throws {MethodError} If the bucketGUID or key is null or empty.
   */
  deleteTags = async (bucketGUID: string, key: string, cancelToken: AbortController): Promise<void | boolean> => {
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
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Retrieve a tag by its key.
   *
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the tag to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetadata>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {MethodError} If the bucketGUID or key is null or empty.
   */
  readTags = async (bucketGUID: string, key: string, cancelToken: AbortController): Promise<TagMetadata> => {
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
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve tag by bucketGuid.
   *
   * @param {string} bucketguid - GUID of the bucket.
   * @param {string} key - Key of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  readACL = async (bucketGuid: string, key: string, cancelToken: AbortController): Promise<AclMetaData> => {
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
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Delete acl by bucketGuid.
   *
   * @param {string} bucketGuid - GUID of the bucket to delete.
   * @param {string} key - Key of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves when the bucket is deleted.
   * @throws {MethodError} If the guid is null or empty.
   */
  deleteACL = async (bucketGuid: string, key: string, cancelToken: AbortController): Promise<boolean> => {
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
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Write Acl for bucket.
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {AclMetaData} aclMetaData Information about the acl .
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {MethodError} If the ObjectMetadata is null or empty.
   */
  createACL = async (
    bucketGuid: string,
    key: string,
    aclMetaData: AclMetaData,
    cancelToken: AbortController
  ): Promise<AclMetaData> => {
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
    return await this.updateResource(url, aclMetaData, cancelToken);
  };
}
