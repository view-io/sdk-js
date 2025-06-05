import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { MultipartUpload } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class MultipartUploadSdk extends ViewSdkBase {
  /**
   * Constructs a new MultipartUploadSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  // region Multipart Upload

  /**
   * Create a Multipart Upload.
   * @param {MultipartUpload} multipartUpload Information about the multipart upload.
   * @param {string} multipartUpload.key - The key of the tag to retrieve.
   */
  createMultipartUpload = async (
    bucketGUID: string,
    multipartUpload: MultipartUpload,
    cancelToken: AbortController
  ) => {
    if (!multipartUpload) {
      GenericExceptionHandlers.ArgumentNullException('multipartUpload');
    }
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGUID + '/uploads';
    return await this.create(url, multipartUpload, cancelToken);
  };

  /**
   * Retrieve list of Multipart Upload by its GUID.
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MultipartUpload|null|ApiErrorResponse>} A promise resolving to the MultipartUpload object or null if not found.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  retrieveMultipartUploads = async (bucketGUID: string, cancelToken: AbortController) => {
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGUID + '/uploads';
    // Use the `retrieve` method to get list of Multipart Upload
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve a Multipart Upload by its GUID.
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {string} key - The key of the tag to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MultipartUpload|null|ApiErrorResponse>} A promise resolving to the MultipartUpload object or null if not found.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  retrieveMultipartUpload = async (bucketGUID: string, key: string, cancelToken: AbortController) => {
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGUID + '/uploads/' + key;
    // Use the `retrieve` method to get the object
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve a part of a Multipart Upload by its key and part number.
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {number} partNumber - The part number of the Multipart Upload to retrieve.
   * @param {string} key - The key of the Multipart Upload to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MultipartUpload|null|ApiErrorResponse>} A promise resolving to the MultipartUpload object or null if not found.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  retrievePartOfMultipartUpload = async (
    bucketGUID: string,
    key: string,
    partNumber: number,
    cancelToken: AbortController
  ) => {
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    if (!partNumber) {
      GenericExceptionHandlers.ArgumentNullException('partNumber');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGUID +
      '/uploads/' +
      key +
      '?partNumber=' +
      partNumber;
    // Use the `retrieve` method to get the object
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Delete a part of a Multipart Upload by its key and part number.
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {number} partNumber - The part number of the Multipart Upload to retrieve.
   * @param {string} key - The key of the Multipart Upload to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  deletePartOfMultipartUpload = async (
    bucketGUID: string,
    key: string,
    partNumber: number,
    cancelToken: AbortController
  ) => {
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    if (!partNumber) {
      GenericExceptionHandlers.ArgumentNullException('partNumber');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/buckets/' +
      bucketGUID +
      '/uploads/' +
      key +
      '?partNumber=' +
      partNumber;
    // Use the `delete` method to remove the Multipart Upload
    return await this.delete(url, cancelToken);
  };

  /**
   * Delete a Multipart Upload by its key .
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {string} key - The key of the Multipart Upload to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  deleteMultipartUpload = async (bucketGUID: string, key: string, cancelToken: AbortController) => {
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGUID + '/uploads/' + key;
    // Use the `delete` method to remove the Multipart Upload
    return await this.delete(url, cancelToken);
  };

  /**
   * Upload Part .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the Multipart Upload to retrieve.
   * @param {Number} partNumber - Part number.
   * @param {string} data Information about the Object .
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the created TagMetaData object or null if the creation fails.
   * @throws {ApiErrorResponse} If the node is null or empty.
   */
  uploadPartOfMultipartUpload = async (
    bucketGUID: string,
    key: string,
    partNumber: number,
    data: string,
    cancelToken: AbortController
  ) => {
    if (!partNumber) {
      GenericExceptionHandlers.ArgumentNullException('partNumber');
    }
    if (!data) {
      GenericExceptionHandlers.ArgumentNullException('data');
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
      '/uploads/' +
      key +
      '/parts?partNumber' +
      partNumber;
    return await this.update(url, data, cancelToken);
  };

  /**
   * Complete a Multipart Upload by its key .
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {string} key - The key of the Multipart Upload to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  completeMultipartUpload = async (bucketGUID: string, key: string, cancelToken: AbortController) => {
    if (!bucketGUID) {
      GenericExceptionHandlers.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + bucketGUID + '/uploads/' + key;
    // Use the `delete` method to remove the Multipart Upload
    return await this.create(url, {}, cancelToken);
  };
}
