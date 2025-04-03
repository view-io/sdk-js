/**
 * Represents a webhook target.
 */
export default class WebhookTarget {
    /**
     * @param {Object} options - Webhook target definition.
     * @param {string} [options.GUID] - Unique identifier.
     * @param {string} [options.TenantGUID] - Tenant identifier.
     * @param {string} [options.Name] - Name of the webhook target.
     * @param {string} [options.Url] - Target URL.
     * @param {string} [options.ContentType] - Content type (e.g. application/json).
     * @param {number} [options.ExpectStatus] - Expected HTTP status code.
     * @param {string} [options.CreatedUtc] - Timestamp of creation (ISO 8601 string).
     */
    constructor(options?: {
        GUID?: string;
        TenantGUID?: string;
        Name?: string;
        Url?: string;
        ContentType?: string;
        ExpectStatus?: number;
        CreatedUtc?: string;
    });
    GUID: string;
    TenantGUID: string;
    Name: string;
    ContentType: string;
    ExpectStatus: number;
    CreatedUtc: string;
    Url: string;
}
