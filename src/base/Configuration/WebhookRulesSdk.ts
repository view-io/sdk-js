import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { WebhookRule } from '../../types';
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
   * @returns {Promise<WebhookRule|ApiErrorResponse>} A promise resolving to the created WebhookRule.
   * @throws {ApiErrorResponse} If the rule is null.
   */
  createWebhookRule = async (rule: WebhookRule, cancelToken: AbortController) => {
    if (!rule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules';
    return await this.create(url, rule, cancelToken);
  };

  /**
   * Check if a webhook rule exists.
   *
   * @param {string} guid - The GUID of the webhook rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the webhook rule exists.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  existsWebhookRule = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a webhook rule by its GUID.
   *
   * @param {string} guid - The GUID of the webhook rule to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookRule|null|ApiErrorResponse>} A promise resolving to the WebhookRule object or null.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveWebhookRule = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve a list of webhook rules.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<WebhookRule>|ApiErrorResponse>} A promise resolving to an array of WebhookRule objects.
   */
  retrieveWebhookRules = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update a webhook rule.
   *
   * @param {WebhookRule} rule - The webhook rule to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookRule|ApiErrorResponse>} A promise resolving to the updated WebhookRule.
   * @throws {ApiErrorResponse} If the rule is null.
   */
  updateWebhookRule = async (rule: WebhookRule, cancelToken: AbortController) => {
    if (!rule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules/' + rule.GUID;
    return await this.update(url, rule, cancelToken);
  };

  /**
   * Delete a webhook rule.
   *
   * @param {string} guid - The GUID of the webhook rule to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the delete operation is complete.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  deleteWebhookRule = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookrules/' + guid;
    return await this.delete(url, cancelToken);
  };

  /**
   * Enumerate Webhook rules.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
   * @throws {Error} If the EnumerationResult is null or invalid.
   */
  enumerateWebhookRules = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/webhookrules`;
    return await this.retrieve(url, cancelToken);
  };
}
