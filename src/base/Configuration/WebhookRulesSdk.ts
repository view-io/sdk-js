import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EnumerationResult, WebhookRule } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class WebhookRulesSdk extends ViewSdkBase {
  /**
   * Constructs a new WebhookRulesSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Webhook-Rules
  /**
   * Create a webhook rule.
   *
   * @param {WebhookRule} rule - The webhook rule to create.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookRule>} A promise resolving to the created WebhookRule.
   * @throws {MethodError} If the rule is null.
   */
  create = async (rule: WebhookRule, cancelToken: AbortController): Promise<WebhookRule> => {
    if (!rule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules';
    return await this.createResource(url, rule, cancelToken);
  };

  /**
   * Check if a webhook rule exists.
   *
   * @param {string} guid - The GUID of the webhook rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the webhook rule exists.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve a webhook rule by its GUID.
   *
   * @param {string} guid - The GUID of the webhook rule to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookRule>} A promise resolving to the WebhookRule object or null.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken: AbortController): Promise<WebhookRule> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve a list of webhook rules.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<WebhookRule>>} A promise resolving to an array of WebhookRule objects.
   */
  readAll = async (cancelToken: AbortController): Promise<WebhookRule> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update a webhook rule.
   *
   * @param {WebhookRule} rule - The webhook rule to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookRule>} A promise resolving to the updated WebhookRule.
   * @throws {MethodError} If the rule is null.
   */
  update = async (rule: WebhookRule, cancelToken: AbortController): Promise<WebhookRule> => {
    if (!rule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules/' + rule.GUID;
    return await this.updateResource(url, rule, cancelToken);
  };

  /**
   * Delete a webhook rule.
   *
   * @param {string} guid - The GUID of the webhook rule to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving when the delete operation is complete.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Enumerate Webhook rules.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<WebhookRule>>} A promise resolving to the created EnumerationResult object.
   * @throws {MethodError} If the webhook rules are null.
   */
  enumerate = async (cancelToken: AbortController): Promise<EnumerationResult<WebhookRule>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/webhookrules`;
    return await this.retrieveResource(url, cancelToken);
  };
}
