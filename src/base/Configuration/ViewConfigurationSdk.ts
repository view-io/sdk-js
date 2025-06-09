import { SdkConfiguration } from '../SdkConfiguration';
import BlobsSdk from './BlobSdk';
import AuthenticationSdk from './AuthenticationSdk';
import WebhookEventSdk from './WebhookEventSdk';
import CredentialSdk from './CredentialSdk';
import NodeSdk from './NodeSdk';
import TenantSdk from './TenantSdk';
import UserSdk from './UserSdk';
import VectorRepositorySdk from './VectorRepostiorySdk';
import EndpointSdk from './EndpointSdk';
import BucketSdk from './BucketSdk';
import EmbeddingRuleSdk from './EmbeddingRuleSdk';
import WebhookRuleSdk from './WebhookRuleSdk';
import GraphRepositorySdk from './GraphRepositorySdk';
import MetaDataRuleSdk from './MetaDataRuleSdk';
import ObjectLockSdk from './ObjectLockSdk';
import WebhookTargetSdk from './WebhookTargetSdk';
import EncryptionKeySdk from './EncryptionKeySdk';
/**
 * Configuration service.
 * @module base/ViewConfigurationSdk
 * @version 0.1.0
 */
export default class ViewConfigurationSdk {
  public Authentication: AuthenticationSdk;
  public Blob: BlobsSdk;
  public Bucket: BucketSdk;
  public Credential: CredentialSdk;
  public EmbeddingRule: EmbeddingRuleSdk;
  public GraphRepository: GraphRepositorySdk;
  public MetadataRule: MetaDataRuleSdk;
  public Nodes: NodeSdk;
  public ObjectLock: ObjectLockSdk;
  public Tenant: TenantSdk;
  public User: UserSdk;
  public VectorRepository: VectorRepositorySdk;
  public Endpoint: EndpointSdk;
  public WebhookEvent: WebhookEventSdk;
  public WebhookRule: WebhookRuleSdk;
  public WebhookTarget: WebhookTargetSdk;
  public config: SdkConfiguration;
  public EncryptionKey: EncryptionKeySdk;
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
    this.Authentication = new AuthenticationSdk(this.config);
    this.Blob = new BlobsSdk(this.config);
    this.Bucket = new BucketSdk(this.config);
    this.Credential = new CredentialSdk(this.config);
    this.EmbeddingRule = new EmbeddingRuleSdk(this.config);
    this.GraphRepository = new GraphRepositorySdk(this.config);
    this.MetadataRule = new MetaDataRuleSdk(this.config);
    this.Nodes = new NodeSdk(this.config);
    this.ObjectLock = new ObjectLockSdk(this.config);
    this.Tenant = new TenantSdk(this.config);
    this.User = new UserSdk(this.config);
    this.VectorRepository = new VectorRepositorySdk(this.config);
    this.EncryptionKey = new EncryptionKeySdk(this.config);
    this.Endpoint = new EndpointSdk(this.config);
    this.WebhookEvent = new WebhookEventSdk(this.config);
    this.WebhookRule = new WebhookRuleSdk(this.config);
    this.WebhookTarget = new WebhookTargetSdk(this.config);
  }
}
