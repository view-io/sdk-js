import { URL } from 'url';
import { v4 as uuidV4 } from 'uuid';

export default class WebhookEvent {
  /**
   * @param {Object} webhookEvent Information about the webhook event.
   * @param {string} webhookEvent.GUID - GUID (automatically generated if not provided).
   * @param {string} webhookEvent.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} webhookEvent.TargetGUID - Target GUID (automatically generated if not provided).
   * @param {string} webhookEvent.RuleGUID - Rule GUID (automatically generated if not provided).
   * @param {string} webhookEvent.EventType - Event type (default is 'Unknown').
   * @param {number} webhookEvent.ContentLength - Content length (must be non-negative).
   * @param {number} webhookEvent.TimeoutMs - Timeout in milliseconds (must be greater than 0).
   * @param {string} webhookEvent.Url - URL (must be a valid URL).
   * @param {string} webhookEvent.ContentType - Content type (default is 'application/json').
   * @param {number} webhookEvent.ExpectStatus - HTTP status to expect on success (must be between 100 and 599).
   * @param {number} webhookEvent.RetryIntervalMs - Retry interval in milliseconds (must be greater than 0).
   * @param {number} webhookEvent.Attempt - Attempt number (must be non-negative).
   * @param {number} webhookEvent.MaxAttempts - Maximum attempts (must be greater than 0).
   * @param {number} webhookEvent.HttpStatus - HTTP status last received (must be between 0 and 599).
   * @param {Date} webhookEvent.CreatedUtc - Created timestamp (default is current UTC time).
   * @param {Date} webhookEvent.AddedUtc - Timestamp when added (default is current UTC time).
   * @param {Date} webhookEvent.LastAttemptUtc - Timestamp when last attempted (default is null).
   * @param {Date} webhookEvent.NextAttemptUtc - Timestamp for next attempt (default is null).
   * @param {Date} webhookEvent.LastFailureUtc - Timestamp for last failure (default is null).
   * @param {Date} webhookEvent.SuccessUtc - Timestamp for success (default is null).
   * @param {Date} webhookEvent.FailedUtc - Timestamp for failed (default is null).
   */
  constructor(webhookEvent) {
    const {
      GUID,
      TenantGUID,
      TargetGUID,
      RuleGUID,
      EventType,
      ContentLength,
      TimeoutMs,
      Url,
      ContentType,
      ExpectStatus,
      RetryIntervalMs,
      Attempt,
      MaxAttempts,
      HttpStatus,
      CreatedUtc,
      AddedUtc,
      LastAttemptUtc,
      NextAttemptUtc,
      LastFailureUtc,
      SuccessUtc,
      FailedUtc,
    } = webhookEvent;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.TargetGUID = TargetGUID;
    this.RuleGUID = RuleGUID;
    this.EventType = EventType;
    this.ContentLength = this.validateContentLength(ContentLength);
    this.TimeoutMs = this.validateTimeoutMs(TimeoutMs);
    this.Url = this.validateUrl(Url);
    this.ContentType = this.validateContentType(ContentType);
    this.ExpectStatus = this.validateExpectStatus(ExpectStatus);
    this.RetryIntervalMs = this.validateRetryIntervalMs(RetryIntervalMs);
    this.Attempt = this.validateAttempt(Attempt);
    this.MaxAttempts = this.validateMaxAttempts(MaxAttempts);
    this.HttpStatus = this.validateHttpStatus(HttpStatus);
    this.CreatedUtc = CreatedUtc;
    this.AddedUtc = AddedUtc;
    this.LastAttemptUtc = LastAttemptUtc;
    this.NextAttemptUtc = NextAttemptUtc;
    this.LastFailureUtc = LastFailureUtc;
    this.SuccessUtc = SuccessUtc;
    this.FailedUtc = FailedUtc;
  }

  validateContentLength(value) {
    if (value < 0) {
      throw new RangeError('ContentLength must be non-negative.');
    }
    return value;
  }

  validateTimeoutMs(value) {
    if (value < 1) {
      throw new RangeError('TimeoutMs must be greater than 0.');
    }
    return value;
  }

  validateUrl(value) {
    if (!value) {
      throw new TypeError('Url cannot be null or empty.');
    }
    try {
      new URL(value); // Validate URL format
    } catch (err) {
      throw new TypeError('Invalid URL format.');
    }
    return value;
  }

  validateContentType(value) {
    if (!value) {
      throw new TypeError('ContentType cannot be null or empty.');
    }
    return value;
  }

  validateExpectStatus(value) {
    if (value < 100 || value > 599) {
      throw new RangeError('ExpectStatus must be between 100 and 599.');
    }
    return value;
  }

  validateRetryIntervalMs(value) {
    if (value < 1) {
      throw new RangeError('RetryIntervalMs must be greater than 0.');
    }
    return value;
  }

  validateAttempt(value) {
    if (value < 0) {
      throw new RangeError('Attempt must be non-negative.');
    }
    return value;
  }

  validateMaxAttempts(value) {
    if (value < 1) {
      throw new RangeError('MaxAttempts must be greater than 0.');
    }
    return value;
  }

  validateHttpStatus(value) {
    if (value < 0 || value > 599) {
      throw new RangeError('HttpStatus must be between 0 and 599.');
    }
    return value;
  }
}
