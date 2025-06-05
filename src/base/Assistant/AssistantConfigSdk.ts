import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { AssistantConfig } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export class AssistantConfigSdk extends ViewSdkBase {
  /**
   * Constructs a new AssistantConfig instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Assistant Config
  /**
   * Retrieve assistant configurations.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<AssistantConfig>>} A promise resolving to an array of AssistantConfig objects.
   * @throws {MethodError}
   */
  retrieveAssistantConfigs = async (cancelToken: AbortController): Promise<Array<AssistantConfig>> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs`;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve an assistant configuration by GUID.
   *
   * @param {string} guid - The GUID of the assistant configuration to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AssistantConfig>} A promise resolving to an AssistantConfig object.
   * @throws {MethodError}
   */
  retrieveAssistantConfig = async (guid: string, cancelToken: AbortController): Promise<AssistantConfig> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs/${guid}`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Check if an assistant configuration exists.
   *
   * @param {string} guid - The GUID of the assistant configuration to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the assistant configuration exists, otherwise `false`.
   * @throws {MethodError}
   */
  existsAssistantConfig = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs/${guid}`;
    return await this.exists(url, cancelToken);
  };

  /**
   * Create a new assistant configuration.
   *
   * @param {AssistantConfig} config - The assistant configuration object
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<AssistantConfig>} A promise resolving to the created AssistantConfig object.
   * @throws {MethodError}
   */
  createAssistantConfig = async (config: AssistantConfig, cancelToken: AbortController): Promise<AssistantConfig> => {
    if (!config) {
      GenericExceptionHandlers.ArgumentNullException('config');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs`;
    return await this.postCreate(url, config, cancelToken);
  };

  /**
   * Update an existing assistant configuration.
   *
   * @param {AssistantConfig} config - The assistant configuration object
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<AssistantConfig>} A promise resolving to the updated AssistantConfig object.
   * @throws {MethodError}
   */
  updateAssistantConfig = async (config: AssistantConfig, cancelToken: AbortController): Promise<AssistantConfig> => {
    if (!config || !config.GUID) {
      GenericExceptionHandlers.ArgumentNullException('config or config.GUID');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs/${config.GUID}`;
    return await this.create(url, config, cancelToken);
  };

  /**
   * Delete an existing assistant configuration.
   *
   * @param {string} guid - GUID of the assistant configuration to delete
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} A promise resolving to true if deletion was successful, false otherwise
   * @throws {MethodError}
   */
  deleteAssistantConfig = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs/${guid}`;
    return await this.delete(url, undefined, cancelToken);
  };
}
