/**
 * Enum for webhook event statuses.
 * @enum {string}
 */
const WebhookEventStatusEnum = Object.freeze({
  Created: 'Created', // Event has been created
  AttemptFailed: 'AttemptFailed', // Event attempt failed
  TaskFailed: 'TaskFailed', // Event task failed
  Succeeded: 'Succeeded', // Event succeeded
  Expired: 'Expired', // Event has expired
});

// Export the enum for use in other modules
module.exports = WebhookEventStatusEnum;
