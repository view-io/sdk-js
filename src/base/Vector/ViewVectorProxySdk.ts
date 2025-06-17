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
  public Document: DocumentSdk;
  public SemanticCell: SemanticCellSdk;
  public SemanticChunk: SemanticChunkSdk;
  public VectorRepositories: VectorRepositoriesSdk;
  public VectorSearch: VectorSearchSdk;
  public config: SdkConfiguration;
  /**
   * Constructs a new ViewVectorProxySdk.
   * @alias module:base/ViewVectorProxySdk
   * @class
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.Document = new DocumentSdk(this.config);
    this.SemanticCell = new SemanticCellSdk(this.config);
    this.SemanticChunk = new SemanticChunkSdk(this.config);
    this.VectorRepositories = new VectorRepositoriesSdk(this.config);
    this.VectorSearch = new VectorSearchSdk(this.config);
  }
}
