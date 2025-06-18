import { SdkConfiguration } from '../SdkConfiguration';
import { ChatSdk } from './ChatSdk';
import { ChatThreadSdk } from './ChatThreadSdk';
import { ModelSdk } from './ModelSdk';
import { AssistantConfigSdk } from './AssistantConfigSdk';

export default class ViewAssistantSdk {
  public Chat: ChatSdk;
  public ChatThread: ChatThreadSdk;
  public Model: ModelSdk;
  public AssistantConfig: AssistantConfigSdk;
  public config: SdkConfiguration;
  /**
   * Creates an instance of SdkBase.
   * @param {string} endpoint - The API endpoint base URL.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   * @throws {Error} Throws an error if the endpoint is null or empty.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.Chat = new ChatSdk(this.config);
    this.ChatThread = new ChatThreadSdk(this.config);
    this.Model = new ModelSdk(this.config);
    this.AssistantConfig = new AssistantConfigSdk(this.config);
  }
}
