import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { AclMetaData, BucketMetadata, TagMetadata } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class BucketSdk extends ViewSdkBase {
  /**
   * Constructs a new BucketSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Buckets

  /**
   * Retrieve bucket by Guid.
   *
   * @param {string} guid - The GUID of the bucket to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata>} A promise resolving to the Bucket object or null if not found.
   * @throws { MethodError} If the guid is null or empty.
   */
  readMetadata = async (guid: string, cancelToken?: AbortController): Promise<BucketMetadata> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?md';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Write Bucket data.
   * @param {BucketMetadata} metadata Information about the bucket metadata.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata>} A promise resolving to the created Bucket object or null if the creation fails.
   * @throws {MethodError} If the node is null or empty.
   */
  create = async (metadata: BucketMetadata, cancelToken?: AbortController): Promise<BucketMetadata> => {
    if (!metadata) {
      GenericExceptionHandlers.ArgumentNullException('metadata');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets';
    return await this.createResource(url, metadata, cancelToken);
  };

  /**
   * Update Bucket data.
   * @param {BucketMetadata} metadata Information about the bucket metadata.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata>} A promise resolving to the created Bucket object or null if the creation fails.
   * @throws {MethodError} If the node is null or empty.
   */
  update = async (metadata: BucketMetadata, cancelToken?: AbortController): Promise<BucketMetadata> => {
    if (!metadata) {
      GenericExceptionHandlers.ArgumentNullException('metadata');
    }
    if (!metadata.GUID) {
      GenericExceptionHandlers.ArgumentNullException('metadata.GUID');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + metadata.GUID;
    return await this.updateResource(url, metadata, cancelToken);
  };

  /**
   * Delete a bucket.
   *
   * @param {string} guid - The GUID of the bucket to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean>} A promise that resolves when the bucket is deleted.
   * @throws {MethodError} If the GUID is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Retrieve tag by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetadata>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  readTags = async (guid: string, cancelToken?: AbortController): Promise<TagMetadata> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?tags';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Delete tag by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the bucket is deleted.
   * @throws {MethodError} If the guid is null or empty.
   */
  deleteTags = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?tags';
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Write Tag .
   * @param {string} guid - The GUID of the bucket.
   * @param {TagMetadata} tagMetaData Information about the tag .
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {MethodError} If the ObjectMetadata is null or empty.
   */
  createTags = async (guid: string, tagMetaData: TagMetadata, cancelToken?: AbortController): Promise<TagMetadata> => {
    if (!tagMetaData) {
      GenericExceptionHandlers.ArgumentNullException('tagMetaData');
    }
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?tags';
    return await this.updateResource(url, tagMetaData, cancelToken);
  };

  /**
   * Retrieve acl by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  readACL = async (guid: string, cancelToken?: AbortController): Promise<AclMetaData> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?acl';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Delete acl by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean>} A promise that resolves when the bucket is deleted.
   * @throws {MethodError} If the guid is null or empty.
   */
  deleteACL = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?acl';
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Write Acl for bucket.
   * @param {string} guid - The GUID of the bucket.
   * @param {AclMetaData} aclMetaData Information about the acl .
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData>} A promise resolving to the created AclMetaData object or null if the creation fails.
   * @throws {MethodError} If the AclMetaData is null or empty.
   */
  createACL = async (guid: string, aclMetaData: AclMetaData, cancelToken?: AbortController): Promise<AclMetaData> => {
    if (!aclMetaData) {
      GenericExceptionHandlers.ArgumentNullException('aclMetaData');
    }
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?acl';
    return await this.updateResource(url, aclMetaData, cancelToken);
  };
}
