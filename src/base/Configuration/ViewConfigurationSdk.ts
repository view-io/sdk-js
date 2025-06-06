import { SdkConfiguration } from '../SdkConfiguration';
import BlobsSdk from './BlobsSdk';
import AuthenticationSdk from './AuthenticationSdk';
import WebhookEventsSdk from './WebhookEventsSdk';
import CollectionsSdk from './CollectionsSdk';
import CredentialsSdk from './CredentialsSdk';
import NodesSdk from './NodesSdk';
import TenantsSdk from './TenantsSdk';
import UserSdk from './UserSdk';
import VectorRepositorySdk from './VectorRepostiorySdk';
import EndpointsSdk from './EndpointsSdk';
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
export default class ViewConfigurationSdk {
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
  public EndpointsSdk: EndpointsSdk;
  public WebhookEventsSdk: WebhookEventsSdk;
  public WebhookRulesSdk: WebhookRulesSdk;
  public WebhookTargetSdk: WebhookTargetSdk;
  public config: SdkConfiguration;
  /**
   * Constructs a new ConfigurationApi.
   * @alias module:base/ConfigurationApi
   * @class
   * @param {string} endpoint - The endpoint of the configuration service.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.AuthenticationSdk = new AuthenticationSdk(this.config);
    this.BlobsSdk = new BlobsSdk(this.config);
    this.BucketSdk = new BucketSdk(this.config);
    this.CollectionsSdk = new CollectionsSdk(this.config);
    this.CredentialsSdk = new CredentialsSdk(this.config);
    this.EmbeddingRulesSdk = new EmbeddingRulesSdk(this.config);
    this.GraphRepositoriesSdk = new GraphRepositoriesSdk(this.config);
    this.MetadataRuleSdk = new MetaDataRuleSdk(this.config);
    this.NodesSdk = new NodesSdk(this.config);
    this.ObjectLockSdk = new ObjectLocksSdk(this.config);
    this.TenantsSdk = new TenantsSdk(this.config);
    this.UserSdk = new UserSdk(this.config);
    this.VectorRepositorySdk = new VectorRepositorySdk(this.config);
  }
}
