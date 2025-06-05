import ViewSdkBase from '../ViewSDKBase';
import SemanticCellSdk from './SemanticCellSdk';
import VectorSearchSdk from './VectorSearchSdk';
import DocumentSdk from './DocumentSdk';
import SemanticChunkSdk from './SemanticChunkSdk';
import VectorRepositoriesSdk from './VectorRepositoriesSdk';
import { SdkConfiguration } from '../SdkConfiguration';
/**
 * View Vector Proxy SDK.
 * @module base/ViewVectorProxySdk
 * @version 0.1.0
 */
export default class ViewVectorProxySdk extends ViewSdkBase {
  public DocumentSdk: DocumentSdk;
  public SemanticCellSdk: SemanticCellSdk;
  public SemanticChunkSdk: SemanticChunkSdk;
  public VectorRepositoriesSdk: VectorRepositoriesSdk;
  public VectorSearchSdk: VectorSearchSdk;
  /**
   * Constructs a new ViewVectorProxySdk.
   * @alias module:base/ViewVectorProxySdk
   * @class
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
    this.DocumentSdk = new DocumentSdk(config);
    this.SemanticCellSdk = new SemanticCellSdk(config);
    this.SemanticChunkSdk = new SemanticChunkSdk(config);
    this.VectorRepositoriesSdk = new VectorRepositoriesSdk(config);
    this.VectorSearchSdk = new VectorSearchSdk(config);
  }
}
