import ViewSdkBase from '../ViewSDKBase';
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
export default class ViewStorageSdk extends ViewSdkBase {
  public bucketSdk: BucketSdk;
  public objectSdk: ObjectSdk;
  public multipartUploadSdk: MultipartUploadSdk;
  public serviceSdk: ServiceSdk;
  public storagePoolSdk: PoolSdk;
  /**
   * Constructs a new StorageApi.
   * @alias module:base/StorageApi
   * @class
   * @param {SdkConfiguration} config
   */
  constructor(config: SdkConfiguration) {
    super(config);
    this.bucketSdk = new BucketSdk(config);
    this.objectSdk = new ObjectSdk(config);
    this.multipartUploadSdk = new MultipartUploadSdk(config);
    this.serviceSdk = new ServiceSdk(config);
    this.storagePoolSdk = new PoolSdk(config);
  }
}
