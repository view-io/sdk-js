/**
 * Represents a view storage server endpoint.
 */
export default class ViewEndpoint {
    /**
     * @param {Object} [options] - Optional parameters.
     * @param {string} [options.GUID] - GUID (automatically generated if not provided).
     * @param {string} [options.TenantGUID] - Tenant GUID (automatically generated if not provided).
     * @param {string} [options.OwnerGUID] - Owner GUID (automatically generated if not provided).
     * @param {string} [options.Name] - Name of the view endpoint (defaults to "My View endpoint").
     * @param {boolean} [options.UseSsl] - Boolean flag to enable or disable SSL (defaults to false).
     * @param {string} [options.S3Url] - S3 URL (defaults to "http://localhost:8002/").
     * @param {string} [options.S3BaseUrl] - S3 base URL (defaults to "http://localhost:8002/{bucket}/{key}").
     * @param {string} [options.RestUrl] - REST URL (defaults to "http://localhost:8001/").
     * @param {string} [options.BucketName] - Bucket name (defaults to "data").
     * @param {string} [options.Region] - Region (defaults to "us-west-1").
     * @param {string} [options.AccessKey] - Access key.
     * @param {string} [options.SecretKey] - Secret key.
     * @param {string} [options.ApiKey] - API key.
     * @param {Date} [options.CreatedUtc] - Created date (defaults to current UTC time).
     */
    constructor({ GUID, TenantGUID, OwnerGUID, Name, UseSsl, S3Url, S3BaseUrl, RestUrl, BucketName, Region, AccessKey, SecretKey, ApiKey, CreatedUtc, }?: {
        GUID?: string;
        TenantGUID?: string;
        OwnerGUID?: string;
        Name?: string;
        UseSsl?: boolean;
        S3Url?: string;
        S3BaseUrl?: string;
        RestUrl?: string;
        BucketName?: string;
        Region?: string;
        AccessKey?: string;
        SecretKey?: string;
        ApiKey?: string;
        CreatedUtc?: Date;
    });
    GUID: string;
    TenantGUID: string;
    OwnerGUID: string;
    Name: string;
    UseSsl: boolean;
    /**
     * @param {string} value - The S3 URL.
     */
    set S3Url(value: string);
    /**
     * @returns {string} The S3 URL.
     */
    get S3Url(): string;
    /**
     * @param {string} value - The S3 base URL.
     */
    set S3BaseUrl(value: string);
    /**
     * @returns {string} The S3 base URL.
     */
    get S3BaseUrl(): string;
    /**
     * @param {string} value - The REST URL.
     */
    set RestUrl(value: string);
    /**
     * @returns {string} The REST URL.
     */
    get RestUrl(): string;
    BucketName: string;
    Region: string;
    AccessKey: string;
    SecretKey: string;
    ApiKey: string;
    CreatedUtc: Date;
    _S3Url: string;
    /**
     * @param {URL} value - The S3 URI.
     */
    set S3Uri(value: URL);
    /**
     * @returns {URL} The S3 URI.
     */
    get S3Uri(): URL;
    _S3BaseUrl: string;
    _RestUrl: string;
    /**
     * @param {URL} value - The REST URI.
     */
    set RestUri(value: URL);
    /**
     * @returns {URL} The REST URI.
     */
    get RestUri(): URL;
}
import { URL } from 'url';
