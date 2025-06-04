import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { ChatSdk } from './ChatSdk';
import { ChatThreadSdk } from './ChatThreadSdk';
import { ModelSdk } from './ModelSdk';
import { AssistantConfigSdk } from './AssistantConfigSdk';

export default class ViewAssistantSdk extends ViewSdkBase {
  public Chat: ChatSdk;
  public ChatThread: ChatThreadSdk;
  public Model: ModelSdk;
  public AssistantConfig: AssistantConfigSdk;
  /**
   * Constructs a new ViewAssistantSdk.
   * @alias module:base/ViewAssistantSdk
   * @class
   * @param {SdkConfiguration} config
   */
  constructor(config: SdkConfiguration) {
    super(config);
    this.Chat = new ChatSdk(config);
    this.ChatThread = new ChatThreadSdk(config);
    this.Model = new ModelSdk(config);
    this.AssistantConfig = new AssistantConfigSdk(config);
  }
}
