import { v4 as uuidV4 } from 'uuid';
import { WebhookEventTypeEnum } from '../enums/WebhookEventTypeEnum';

/**
 * Represents a webhook rule.
 */
export default class WebhookRule {
  /**
   * @param {Object} [options] - Optional parameters.
   * @param {string} [options.GUID] - GUID (automatically generated if not provided).
   * @param {string} [options.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [options.TargetGUID] - Target GUID (automatically generated if not provided).
   * @param {string} [options.Name] - Name of the webhook rule.
   * @param {WebhookEventTypeEnum} [options.EventType] - Event type (defaults to WebhookEventTypeEnum.Unknown).
   * @param {number} [options.MaxAttempts] - Maximum number of attempts (defaults to 10).
   * @param {number} [options.RetryIntervalMs] - Retry interval in milliseconds (defaults to 30 seconds).
   * @param {number} [options.TimeoutMs] - Timeout in milliseconds (defaults to 1 minute).
   */
  constructor({
    GUID = uuidV4(),
    TenantGUID = uuidV4(),
    TargetGUID = uuidV4(),
    Name = '',
    EventType = WebhookEventTypeEnum.Unknown,
    MaxAttempts = 10,
    RetryIntervalMs = 30 * 1000, // 30 seconds
    TimeoutMs = 60 * 1000, // 1 minute
    CreatedUtc = new Date(),
  } = {}) {
    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.TargetGUID = TargetGUID;
    this.Name = Name;
    this.EventType = EventType;
    this.MaxAttempts = MaxAttempts;
    this.RetryIntervalMs = RetryIntervalMs;
    this.TimeoutMs = TimeoutMs;
    this.CreatedUtc = CreatedUtc; // Default to current UTC time
  }

  // Additional methods can be added here
}
