import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { ApiErrorResponse } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class ServiceSdk extends ViewSdkBase {
  /**
   * Constructs a new ServiceSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  // region Services

  /**
   * Retrieve List of Buckets.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveBuckets = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Enumerate all buckets in the tenant.
   * @param {string} guid - The GUID of the bucket to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata[]|null|ApiErrorResponse>} A promise resolving to an array of BucketMetadata objects or null.
   */
  retrieveBucketObjects = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.retrieve(url, cancelToken);
  };
}
