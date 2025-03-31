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
   * @param {string} [options.CreatedUtc] - Created timestamp (default is current UTC time).
   */
  constructor({
    GUID,
    TenantGUID,
    TargetGUID,
    Name,
    EventType,
    MaxAttempts,
    RetryIntervalMs,
    TimeoutMs,
    CreatedUtc,
  } = {}) {
    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.TargetGUID = TargetGUID;
    this.Name = Name;
    this.EventType = EventType;
    this.MaxAttempts = MaxAttempts;
    this.RetryIntervalMs = RetryIntervalMs;
    this.TimeoutMs = TimeoutMs;
    this.CreatedUtc = CreatedUtc;
  }
  // Additional methods can be added here
}
