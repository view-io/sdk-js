import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { BucketMetadata } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class BucketSdk extends ViewSdkBase {
  /**
   * Constructor for BucketSdk.
   * @param {SdkConfiguration} config - The configuration for the SDK.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Bucket

  /**
   * Create a bucket.
   *
   * @param {BucketMetadata} bucket Information about the bucket metadata.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the created BucketMetadata object or null.
   * @throws {ApiErrorResponse} If the bucket is null.
   */
  createBucket = async (bucket: BucketMetadata, cancelToken: AbortController) => {
    if (!bucket) {
      GenericExceptionHandlers.ArgumentNullException('bucket');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets';
    return await this.create(url, bucket, cancelToken);
  };

  /**
   * Check if a bucket exists.
   *
   * @param {string} guid - The GUID of the bucket to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the bucket exists, or false if not.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  existsBucket = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a bucket by its GUID.
   *
   * @param {string} guid - The GUID of the bucket to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the BucketMetadata object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveBucket = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve all buckets.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<BucketMetadata>|ApiErrorResponse>} A promise resolving to an array of BucketMetadata objects.
   */
  retrieveBuckets = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update a bucket.
   *
   * @param {BucketMetadata} bucket Information about the bucket metadata.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the updated BucketMetadata object or null.
   * @throws {ApiErrorResponse} If the bucket is null.
   */
  updateBucket = async (bucket: BucketMetadata, cancelToken: AbortController) => {
    if (!bucket) {
      GenericExceptionHandlers.ArgumentNullException('bucket');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucket.GUID;
    return await this.update(url, bucket, cancelToken);
  };

  /**
   * Delete a bucket by its GUID.
   *
   * @param {string} guid - The GUID of the bucket to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  deleteBucket = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.delete(url, cancelToken);
  };
}
