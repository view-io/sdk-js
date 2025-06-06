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
  readAll = async (cancelToken: AbortController): Promise<Array<AssistantConfig>> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve an assistant configuration by GUID.
   *
   * @param {string} guid - The GUID of the assistant configuration to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AssistantConfig>} A promise resolving to an AssistantConfig object.
   * @throws {MethodError}
   */
  read = async (guid: string, cancelToken: AbortController): Promise<AssistantConfig> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs/${guid}`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Check if an assistant configuration exists.
   *
   * @param {string} guid - The GUID of the assistant configuration to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the assistant configuration exists, otherwise `false`.
   * @throws {MethodError}
   */
  exists = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs/${guid}`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Create a new assistant configuration.
   *
   * @param {AssistantConfig} config - The assistant configuration object
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<AssistantConfig>} A promise resolving to the created AssistantConfig object.
   * @throws {MethodError}
   */
  create = async (config: AssistantConfig, cancelToken: AbortController): Promise<AssistantConfig> => {
    if (!config) {
      GenericExceptionHandlers.ArgumentNullException('config');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs`;
    return await this.postCreateResource(url, config, cancelToken);
  };

  /**
   * Update an existing assistant configuration.
   *
   * @param {AssistantConfig} config - The assistant configuration object
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<AssistantConfig>} A promise resolving to the updated AssistantConfig object.
   * @throws {MethodError}
   */
  update = async (config: AssistantConfig, cancelToken: AbortController): Promise<AssistantConfig> => {
    if (!config || !config.GUID) {
      GenericExceptionHandlers.ArgumentNullException('config or config.GUID');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs/${config.GUID}`;
    return await this.createResource(url, config, cancelToken);
  };

  /**
   * Delete an existing assistant configuration.
   *
   * @param {string} guid - GUID of the assistant configuration to delete
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} A promise resolving to true if deletion was successful, false otherwise
   * @throws {MethodError}
   */
  delete = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/configs/${guid}`;
    return await this.deleteResource(url, undefined, cancelToken);
  };
}
