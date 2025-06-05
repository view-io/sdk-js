import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import BlobsSdk from './BlobsSdk';
import AuthenticationSdk from './AuthenticationSdk';
import WebhookEventsSdk from './WebhookEventsSdk';
import GraphSdk from '../Graph/GraphSdk';
import CollectionsSdk from './CollectionsSdk';
import CredentialsSdk from './CredentialsSdk';
import NodesSdk from './NodesSdk';
import TenantsSdk from './TenantsSdk';
import UserSdk from './UserSdk';
import VectorRepositorySdk from './VectorRepostiorySdk';
import ViewEndpointsSdk from './ViewEndpointsSdk';
import BucketSdk from './BucketSdk';
import EmbeddingRulesSdk from './EmbeddingRulesSdk';
import WebhookRulesSdk from './WebhookRulesSdk';
import GraphRepositoriesSdk from './GraphRepositoriesSdk';
import MetaDataRuleSdk from './MetaDataRuleSdk';
import ObjectLocksSdk from './ObjectLocksSdk';
import WebhookTargetSdk from './WebhookTargetSdk';
/**
 * Configuration service.
 * @module base/ViewConfigurationSdk
 * @version 0.1.0
 */
export default class ViewConfigurationSdk extends ViewSdkBase {
  public AuthenticationSdk: AuthenticationSdk;
  public BlobsSdk: BlobsSdk;
  public BucketSdk: BucketSdk;
  public CollectionsSdk: CollectionsSdk;
  public CredentialsSdk: CredentialsSdk;
  public EmbeddingRulesSdk: EmbeddingRulesSdk;
  public GraphRepositoriesSdk: GraphRepositoriesSdk;
  public MetadataRuleSdk: MetaDataRuleSdk;
  public NodesSdk: NodesSdk;
  public ObjectLockSdk: ObjectLocksSdk;
  public TenantsSdk: TenantsSdk;
  public UserSdk: UserSdk;
  public VectorRepositorySdk: VectorRepositorySdk;
  public ViewEndpointsSdk: ViewEndpointsSdk;
  public WebhookEventsSdk: WebhookEventsSdk;
  public WebhookRulesSdk: WebhookRulesSdk;
  public WebhookTargetSdk: WebhookTargetSdk;

  /**
   * Constructs a new ConfigurationApi.
   * @alias module:base/ConfigurationApi
   * @class
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
}
