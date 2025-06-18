import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { BucketMetadata } from '../../types';
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
   * @returns {Promise<BucketMetadata>} A promise resolving to the Bucket object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  retrieveBuckets = async (cancelToken?: AbortController): Promise<BucketMetadata> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Enumerate all buckets in the tenant.
   * @param {string} guid - The GUID of the bucket to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata[]>} A promise resolving to an array of BucketMetadata objects or null.
   */
  retrieveBucketObjects = async (guid: string, cancelToken?: AbortController): Promise<BucketMetadata[]> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/buckets/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };
}
