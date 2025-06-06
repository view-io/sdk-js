import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import HealthSdk from './HealthSdk';

/**
 * Healthcheck service.
 * @module base/ViewHealthcheckSdk
 * @version 0.1.0
 */
export default class ViewHealthcheckSdk {
  public config: SdkConfiguration;
  public healthCheck: HealthSdk;
  /**
   * Constructs a new OrchestratorApi.
   * @alias module:base/ViewHealthcheckSdk
   * @class
   * @param {string} endpoint - The API endpoint base URL.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   * @throws {Error} Throws an error if the endpoint is null or empty.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.healthCheck = new HealthSdk(this.config);
  }
}
