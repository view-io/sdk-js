import { SdkConfiguration } from '../SdkConfiguration';
import { EmbeddingDirectorSdk } from './EmbeddingDirectorSdk';

/**
 * Director service.
 * @module base/ViewDirectorSdk
 * @version 0.1.0
 */
export default class ViewDirectorSdk {
  public Embedding: EmbeddingDirectorSdk;
  public config: SdkConfiguration;
  /**
   * Constructs a new DirectorApi.
   * @alias module:base/ViewDirectorSdk
   * @class
   * @param {string} endpoint - The endpoint of the director service.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.Embedding = new EmbeddingDirectorSdk(this.config);
  }
}
