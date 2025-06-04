/**
 * Enum for webhook event statuses.
 * @enum {string}
 */
export enum WebhookEventStatusEnum {
  Created = 'Created',
  AttemptFailed = 'AttemptFailed',
  TaskFailed = 'TaskFailed',
  Succeeded = 'Succeeded',
  Expired = 'Expired',
}
