/**
 * Represents a webhook target.
 */
export default class WebhookTarget {
    /**
     * @param {Object} [options] - Optional parameters.
     * @param {string} [options.GUID] - GUID (automatically generated if not provided).
     * @param {string} [options.TenantGUID] - Tenant GUID (automatically generated if not provided).
     * @param {string} [options.Name] - Name of the webhook target (defaults to "My webhook target").
     * @param {string} [options.Url] - URL of the webhook target.
     * @param {string} [options.ContentType] - Content type (defaults to "application/json").
     * @param {number} [options.ExpectStatus] - Expected HTTP status (defaults to 200).
     */
    constructor({ GUID, TenantGUID, Name, Url, CreatedUtc, ContentType, ExpectStatus, }?: {
        GUID?: string;
        TenantGUID?: string;
        Name?: string;
        Url?: string;
        ContentType?: string;
        ExpectStatus?: number;
    });
    GUID: string;
    TenantGUID: string;
    Name: string;
    _Url: string;
    _Uri: URL;
    ContentType: string;
    ExpectStatus: number;
    CreatedUtc: any;
    /**
     * @param {string} value - The URL of the webhook target.
     */
    set Url(value: string);
    /**
     * @returns {string} The URL of the webhook target.
     */
    get Url(): string;
    /**
     * @param {URL} value - The URI of the webhook target.
     */
    set Uri(value: URL);
    /**
     * @returns {URL} The URI of the webhook target.
     */
    get Uri(): URL;
}
import { URL } from 'url';
