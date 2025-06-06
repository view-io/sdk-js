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
export default class ViewVectorProxySdk {
  public DocumentSdk: DocumentSdk;
  public SemanticCellSdk: SemanticCellSdk;
  public SemanticChunkSdk: SemanticChunkSdk;
  public VectorRepositoriesSdk: VectorRepositoriesSdk;
  public VectorSearchSdk: VectorSearchSdk;
  public config: SdkConfiguration;
  /**
   * Constructs a new ViewVectorProxySdk.
   * @alias module:base/ViewVectorProxySdk
   * @class
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.DocumentSdk = new DocumentSdk(this.config);
    this.SemanticCellSdk = new SemanticCellSdk(this.config);
    this.SemanticChunkSdk = new SemanticChunkSdk(this.config);
    this.VectorRepositoriesSdk = new VectorRepositoriesSdk(this.config);
    this.VectorSearchSdk = new VectorSearchSdk(this.config);
  }
}
