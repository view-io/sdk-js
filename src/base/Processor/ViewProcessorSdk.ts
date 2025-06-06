import { SdkConfiguration } from '../SdkConfiguration';
import ProcessSdk from './ProcessSdk';

export default class ViewProcessorSdk {
  public config: SdkConfiguration;
  public processSdk: ProcessSdk;
  /**
   * Constructs a new ViewProcessorSdk.
   * @alias module:base/ViewProcessorSdk
   * @class
   * @param {string} endpoint - The API endpoint base URL.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   * @throws {Error} Throws an error if the endpoint is null or empty.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.processSdk = new ProcessSdk(this.config);
  }
}
