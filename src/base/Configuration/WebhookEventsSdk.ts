import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class WebhookEventsSdk extends ViewSdkBase {
  /**
   * Constructs a new WebhookEventsSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Webhook-Events
  /**
   * Check if a webhook event exists.
   *
   * @param {string} guid - The GUID of the webhook event.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the webhook event exists.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  existsWebhookEvent = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookevents/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a webhook event by its GUID.
   *
   * @param {string} guid - The GUID of the webhook event to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookEvent|null|ApiErrorResponse>} A promise resolving to the WebhookEvent object or null.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveWebhookEvent = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookevents/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve a list of webhook events.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<WebhookEvent>|ApiErrorResponse>} A promise resolving to an array of WebhookEvent objects.
   */
  retrieveWebhookEvents = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookevents';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Enumerate Webhook events.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
   * @throws {Error} If the EnumerationResult is null or invalid.
   */
  enumerateWebhookEvents = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/webhookevents/`;
    return await this.retrieve(url, cancelToken);
  };
}
