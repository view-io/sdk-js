import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import { EmbeddingDirectorSdk } from './EmbeddingDirectorSdk';

/**
 * Director service.
 * @module base/ViewDirectorSdk
 * @version 0.1.0
 */
export default class ViewDirectorSdk extends ViewSdkBase {
  public Embedding: EmbeddingDirectorSdk;
  /**
   * Constructs a new DirectorApi.
   * @alias module:base/ViewDirectorSdk
   * @class
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
    this.Embedding = new EmbeddingDirectorSdk(config);
  }
}
