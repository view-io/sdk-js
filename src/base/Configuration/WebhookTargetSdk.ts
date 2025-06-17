import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EnumerationResult, WebhookTarget, WebhookTargetCreateRequest } from '../../types';
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
   * @param {WebhookTargetCreateRequest} target - The webhook target to create.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget>} - Webhook target.
   */
  create = async (target: WebhookTargetCreateRequest, cancelToken?: AbortController): Promise<WebhookTarget> => {
    if (!target) {
      GenericExceptionHandlers.ArgumentNullException('target');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets';
    return await this.createResource(url, target, cancelToken);
  };

  /**
   * Check if a webhook target exists.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} - True if exists.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Read a webhook target.
   * @param {string} guid - GUID.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget>} - Webhook target.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<WebhookTarget> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Read webhook targets.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget[]>} - Webhook targets.
   */
  readAll = async (cancelToken?: AbortController): Promise<WebhookTarget> => {
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update a webhook target.
   * @param {WebhookTarget} target - The webhook target to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget>} - Webhook target.
   */
  update = async (target: WebhookTarget, cancelToken?: AbortController): Promise<WebhookTarget> => {
    if (!target) {
      GenericExceptionHandlers.ArgumentNullException('target');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets/' + target.GUID;
    return await this.updateResource(url, target, cancelToken);
  };

  /**
   * Delete a webhook target.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>}
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/webhooktargets/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Enumerate Webhook target.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<WebhookTarget>>} A promise resolving to the created EnumerationResult object.
   * @throws {MethodError} If the webhook targets are null.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<WebhookTarget>> => {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/webhooktargets/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
