import WebhookEventStatusEnum from '../enums/WebhookEventStatusEnum';

/**
 * Represents the arguments for a webhook event.
 *
 * @property {WebhookEvent|null} event - The webhook event.
 * @property {WebhookEventStatusEnum} status - The status of the webhook event.
 */
export default class WebhookEventArgs {
  constructor() {
    /** @type {WebhookEvent|null} */
    this.event = null;

    /** @type {WebhookEventStatusEnum} */
    this.status = WebhookEventStatusEnum.Created;
  }
}
