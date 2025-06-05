import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { AclMetaData, ApiErrorResponse, BucketMetadata, TagMetadata } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import TagMetaData from 'litegraphdb/types/models/TagMetaData';

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
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveBucketMetadata = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?md';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Write Bucket data.
   * @param {BucketMetadata} metadata Information about the bucket metadata.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the created Bucket object or null if the creation fails.
   * @throws {ApiErrorResponse} If the node is null or empty.
   */
  createBucket = async (metadata: BucketMetadata, cancelToken: AbortController) => {
    if (!metadata) {
      GenericExceptionHandlers.ArgumentNullException('metadata');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets';
    return await this.update(url, metadata, cancelToken);
  };

  /**
   * Update Bucket data.
   * @param {BucketMetadata} metadata Information about the bucket metadata.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the created Bucket object or null if the creation fails.
   * @throws {ApiErrorResponse} If the node is null or empty.
   */
  updateBucket = async (metadata: BucketMetadata, cancelToken: AbortController) => {
    if (!metadata) {
      GenericExceptionHandlers.ArgumentNullException('metadata');
    }
    if (!metadata.GUID) {
      GenericExceptionHandlers.ArgumentNullException('metadata.GUID');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + metadata.GUID;
    return await this.update(url, metadata, cancelToken);
  };

  /**
   * Delete a bucket.
   *
   * @param {string} guid - The GUID of the bucket to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  deleteBucket = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.delete(url, cancelToken);
  };

  /**
   * Retrieve tag by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveBucketTags = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?tags';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Delete tag by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the bucket is deleted.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  deleteBucketTags = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?tags';
    return await this.delete(url, cancelToken);
  };

  /**
   * Write Tag .
   * @param {string} guid - The GUID of the bucket.
   * @param {TagMetadata} tagMetaData Information about the tag .
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {ApiErrorResponse} If the ObjectMetadata is null or empty.
   */
  createBucketTags = async (guid: string, tagMetaData: TagMetaData, cancelToken: AbortController) => {
    if (!tagMetaData) {
      GenericExceptionHandlers.ArgumentNullException('tagMetaData');
    }
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?tags';
    return await this.update(url, tagMetaData, cancelToken);
  };

  /**
   * Retrieve tag by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveBucketACL = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?acl';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Delete acl by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  deleteBucketACL = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?acl';
    return await this.delete(url, cancelToken);
  };

  /**
   * Write Acl for bucket.
   * @param {string} guid - The GUID of the bucket.
   * @param {AclMetaData} aclMetaData Information about the acl .
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData|null|ApiErrorResponse>} A promise resolving to the created AclMetaData object or null if the creation fails.
   * @throws {ApiErrorResponse} If the AclMetaData is null or empty.
   */
  createBucketACL = async (guid: string, aclMetaData: AclMetaData, cancelToken: AbortController) => {
    if (!aclMetaData) {
      GenericExceptionHandlers.ArgumentNullException('aclMetaData');
    }
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid + '?acl';
    return await this.update(url, aclMetaData, cancelToken);
  };
}
