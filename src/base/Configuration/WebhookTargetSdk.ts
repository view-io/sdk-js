import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { WebhookTarget } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class WebhookTargetSdk extends ViewSdkBase {
  /**
   * Constructs a new WebhookTargetSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  // region webhook-Targets

  /**
   * Create a webhook target.
   * @param {WebhookTarget} target - The webhook target to create.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget>} - Webhook target.
   */
  createWebhookTarget = async (target: WebhookTarget, cancelToken: AbortController) => {
    if (!target) {
      GenericExceptionHandlers.ArgumentNullException('target');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets';
    return await this.create(url, target, cancelToken);
  };

  /**
   * Check if a webhook target exists.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} - True if exists.
   */
  existsWebhookTarget = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Read a webhook target.
   * @param {string} guid - GUID.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget>} - Webhook target.
   */
  retrieveWebhookTarget = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Read webhook targets.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget[]>} - Webhook targets.
   */
  retrieveWebhookTargets = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update a webhook target.
   * @param {WebhookTarget} target - The webhook target to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget>} - Webhook target.
   */
  updateWebhookTarget = async (target: WebhookTarget, cancelToken: AbortController) => {
    if (!target) {
      GenericExceptionHandlers.ArgumentNullException('target');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets/' + target.GUID;
    return await this.update(url, target, cancelToken);
  };

  /**
   * Delete a webhook target.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>}
   */
  deleteWebhookTarget = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets/' + guid;
    return await this.delete(url, cancelToken);
  };

  /**
   * Enumerate Webhook target.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
   * @throws {ApiErrorResponse} If the EnumerationResult is null or invalid.
   */
  enumerateWebhookTargets = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/webhooktargets/`;
    return await this.retrieve(url, cancelToken);
  };
}
