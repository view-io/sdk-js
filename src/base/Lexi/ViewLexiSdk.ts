import { SdkConfiguration } from '../SdkConfiguration';
import { SearchEnumrateSdk } from './SearchEnumrateSdk';
import { IngestQueueSdk } from './IngestQueueSdk';
import { SearchCollectionSdk } from './SearchCollectionSdk';
import { SourceDocumentSdk } from './SourceDocumentSdk';
import { CollectionsSdk } from './CollectionsSdk';

/**
 * View Lexi SDK.
 * @module base/Lexi/ViewLexiSdk
 * @version 0.1.0
 */
export default class ViewLexiSdk {
  public searchEnumrate: SearchEnumrateSdk;
  public ingestQueue: IngestQueueSdk;
  public searchCollection: SearchCollectionSdk;
  public sourceDocument: SourceDocumentSdk;
  public collections: CollectionsSdk;
  public config: SdkConfiguration;
  /**
   * Constructs a new ViewLexiSdk instance.
   * @alias module:base/ViewLexiSdk
   * @class
   * @param {string} endpoint - The endpoint of the Lexi service.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.searchEnumrate = new SearchEnumrateSdk(this.config);
    this.ingestQueue = new IngestQueueSdk(this.config);
    this.searchCollection = new SearchCollectionSdk(this.config);
    this.sourceDocument = new SourceDocumentSdk(this.config);
    this.collections = new CollectionsSdk(this.config);
  }
}
