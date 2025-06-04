import ViewSdkBase from '../ViewSDKBase';
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
export default class ViewLexiSdk extends ViewSdkBase {
  public searchEnumrateSdk: SearchEnumrateSdk;
  public ingestQueueSdk: IngestQueueSdk;
  public searchCollectionSdk: SearchCollectionSdk;
  public sourceDocumentSdk: SourceDocumentSdk;
  public collectionsSdk: CollectionsSdk;
  /**
   * Constructs a new ViewLexiSdk instance.
   * @alias module:base/ViewLexiSdk
   * @class
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
    this.searchEnumrateSdk = new SearchEnumrateSdk(config);
    this.ingestQueueSdk = new IngestQueueSdk(config);
    this.searchCollectionSdk = new SearchCollectionSdk(config);
    this.sourceDocumentSdk = new SourceDocumentSdk(config);
    this.collectionsSdk = new CollectionsSdk(config);
  }
}
