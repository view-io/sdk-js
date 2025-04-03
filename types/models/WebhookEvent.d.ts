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
    constructor(webhookEvent: {
        GUID: string;
        TenantGUID: string;
        TargetGUID: string;
        RuleGUID: string;
        EventType: string;
        ContentLength: number;
        TimeoutMs: number;
        Url: string;
        ContentType: string;
        ExpectStatus: number;
        RetryIntervalMs: number;
        Attempt: number;
        MaxAttempts: number;
        HttpStatus: number;
        CreatedUtc: Date;
        AddedUtc: Date;
        LastAttemptUtc: Date;
        NextAttemptUtc: Date;
        LastFailureUtc: Date;
        SuccessUtc: Date;
        FailedUtc: Date;
    });
    GUID: string;
    TenantGUID: string;
    TargetGUID: string;
    RuleGUID: string;
    EventType: string;
    ContentLength: any;
    TimeoutMs: any;
    Url: any;
    ContentType: any;
    ExpectStatus: any;
    RetryIntervalMs: any;
    Attempt: any;
    MaxAttempts: any;
    HttpStatus: any;
    CreatedUtc: Date;
    AddedUtc: Date;
    LastAttemptUtc: Date;
    NextAttemptUtc: Date;
    LastFailureUtc: Date;
    SuccessUtc: Date;
    FailedUtc: Date;
    validateContentLength(value: any): any;
    validateTimeoutMs(value: any): any;
    validateUrl(value: any): any;
    validateContentType(value: any): any;
    validateExpectStatus(value: any): any;
    validateRetryIntervalMs(value: any): any;
    validateAttempt(value: any): any;
    validateMaxAttempts(value: any): any;
    validateHttpStatus(value: any): any;
}
