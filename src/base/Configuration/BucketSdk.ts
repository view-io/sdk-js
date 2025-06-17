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
   * @returns {Promise<BucketMetadata>} A promise resolving to the created BucketMetadata object or null.
   * @throws {MethodError} If the bucket is null.
   */
  create = async (bucket: BucketMetadata, cancelToken?: AbortController): Promise<BucketMetadata> => {
    if (!bucket) {
      GenericExceptionHandlers.ArgumentNullException('bucket');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/buckets';
    return await this.createResource(url, bucket, cancelToken);
  };

  /**
   * Check if a bucket exists.
   *
   * @param {string} guid - The GUID of the bucket to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the bucket exists, or false if not.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve a bucket by its GUID.
   *
   * @param {string} guid - The GUID of the bucket to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata>} A promise resolving to the BucketMetadata object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<BucketMetadata> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all buckets.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<BucketMetadata>>} A promise resolving to an array of BucketMetadata objects.
   */
  readAll = async (cancelToken?: AbortController): Promise<Array<BucketMetadata>> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update a bucket.
   *
   * @param {BucketMetadata} bucket Information about the bucket metadata.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata>} A promise resolving to the updated BucketMetadata object or null.
   * @throws {MethodError} If the bucket is null.
   */
  update = async (bucket: BucketMetadata, cancelToken?: AbortController): Promise<BucketMetadata> => {
    if (!bucket) {
      GenericExceptionHandlers.ArgumentNullException('bucket');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucket.GUID;
    return await this.updateResource(url, bucket, cancelToken);
  };

  /**
   * Delete a bucket by its GUID.
   *
   * @param {string} guid - The GUID of the bucket to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if successful.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.deleteResource(url, undefined, cancelToken);
  };
}
