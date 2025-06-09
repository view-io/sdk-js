import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EnumerationResult, WebhookEvent } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class WebhookEventSdk extends ViewSdkBase {
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
   * @returns {Promise<boolean>} A promise resolving to true if the webhook event exists.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookevents/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve a webhook event by its GUID.
   *
   * @param {string} guid - The GUID of the webhook event to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookEvent>} A promise resolving to the WebhookEvent object or null.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<WebhookEvent> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookevents/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve a list of webhook events.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<WebhookEvent>>} A promise resolving to an array of WebhookEvent objects.
   * @throws {MethodError} If the webhook events are null.
   */
  readAll = async (cancelToken?: AbortController): Promise<WebhookEvent> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/webhookevents';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Enumerate Webhook events.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<WebhookEvent>>} A promise resolving to the created EnumerationResult object.
   * @throws {MethodError} If the webhook events are null.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<WebhookEvent>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/webhookevents/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
