import { SdkConfiguration } from '../SdkConfiguration';
import BucketSdk from './BucketSdk';
import ObjectSdk from './ObjectSdk';
import MultipartUploadSdk from './MultipartUploadSdk';
import ServiceSdk from './ServiceSdk';
import PoolSdk from './PoolSdk';

/**
 * Storage service.
 * @module base/ViewStorageSdk
 * @version 0.1.0
 */
export default class ViewStorageSdk {
  public bucketSdk: BucketSdk;
  public objectSdk: ObjectSdk;
  public multipartUploadSdk: MultipartUploadSdk;
  public serviceSdk: ServiceSdk;
  public storagePoolSdk: PoolSdk;
  public config: SdkConfiguration;
  /**
   * Constructs a new StorageApi.
   * @alias module:base/StorageApi
   * @class
   * @param {string} endpoint - The endpoint of the storage service.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.bucketSdk = new BucketSdk(this.config);
    this.objectSdk = new ObjectSdk(this.config);
    this.multipartUploadSdk = new MultipartUploadSdk(this.config);
    this.serviceSdk = new ServiceSdk(this.config);
    this.storagePoolSdk = new PoolSdk(this.config);
  }
}
