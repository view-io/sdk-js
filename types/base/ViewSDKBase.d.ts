/**
 * ViewSdk Base service.
 * @module base/ViewSdkBase
 * @version 0.1.0
 */
export default class ViewSdkBase {
    /**
     * @constructor
     * @param {string} tenantGuid
     * @param {string} accessKey
     * @param {string} endpoint
     */
    constructor(tenantGuid: string, accessKey: string, endpoint: string);
    logResponses: boolean;
    tenantGuid: string;
    /**
     * Setter for the access key.
     * @param {string} value - The access key.
     * @throws {Error} Throws an error if the access key is null or empty.
     */
    set accessKey(value: string);
    get accessKey(): string;
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default http://localhost
     */
    endpoint: string;
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    defaultHeaders: Array<string>;
    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    timeout: number;
    agent: any;
    _accessKey: string;
    /**
     * Setter for the access token.
     * @param {string} value - The access token.
     * @throws {Error} Throws an error if the access token is null or empty.
     */
    set accessToken(value: string);
    /**
     * Getter for the access token.
     * @return {string} The access token.
     */
    get accessToken(): string;
    _accessToken: string;
    /**
     * Create an object via PUT request to the specified URL.
     *
     * @template T
     * @param {string} url - The URL to send the PUT request to.
     * @param {T} [obj] - The object to send in the request body.
     * @param {Class} [Model] - Modal to deserialize on
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or null if the request fails.
     * @throws {Error} If the URL or object is null or empty.
     */
    create: <T>(url: string, obj?: T, Model?: Class, cancelToken?: object) => Promise<T | null | ApiErrorResponse>;
    /**
     * Check if data exists from the given URL with optional cancellation support using superagent's abort method.
     *
     * @template T
     * @param {string} url - The URL to request data from.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
     * @throws {Error} If the URL is null or empty.
     */
    exists: <T>(url: string, cancelToken?: object) => Promise<T | null | ApiErrorResponse>;
    /**
     * Update an object via PUT request to the specified URL.
     *
     * @template T
     * @param {string} url - The URL to send the PUT request to.
     * @param {T} obj - The object to send in the request body.
     * @param {Class} Model - Modal to deserialize on
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @param {Object} [headers] - Additional headers for the request.
     * @param {string} [headers.token] - headers token for authorization.
     * @param {string} [headers.Range] - headers range for the request.
     * @param {string} [headers.email] - headers email for the request.
     * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or null if the request fails.
     * @throws {Error} If the URL or object is null or empty.
     */
    update: <T>(url: string, obj: T, Model: Class, cancelToken?: object, headers?: {
        token?: string;
        Range?: string;
        email?: string;
    }) => Promise<T | null | ApiErrorResponse>;
    /**
     * Retrieve single data from the given URL with optional cancellation support using superagent's abort method.
     *
     * @template T
     * @param {string} url - The URL to request data from.
     * @param {Class} Model - Modal to deserialize on
     * @param {Object} [headers] - Additional headers for the request.
     * @param {string} [headers.token] - headers token for authorization.
     * @param {string} [headers.Range] - headers range for the request.
     * @param {string} [headers.email] - headers email for the request.
     * @param {{}} [cancelToken] - Optional headers with an `abort` method to cancel the request.
     * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
     * @throws {Error} If the URL is null or empty.
     */
    retrieve: <T>(url: string, Model: Class, cancelToken?: {}, headers?: {
        token?: string;
        Range?: string;
        email?: string;
    }) => Promise<T | null | ApiErrorResponse>;
    retrieveRaw: (url: any, cancelToken: any) => Promise<any>;
    /**
     * Retrieve all data from the given URL with optional cancellation support using superagent's abort method.
     *
     * @template T
     * @param {string} url - The URL to request data from.
     * @param {Class} Model - Modal to deserialize on
     * @param {{}} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @param {object} [headers] - Optional object with an `abort` method to cancel the request
     * @param {string} [headers.token] - headers token for authorization.
     * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
     * @throws {Error} If the URL is null or empty.
     */
    retrieveMany: <T>(url: string, Model: Class, cancelToken?: {}, headers?: {
        token?: string;
    }) => Promise<T | null | ApiErrorResponse>;
    /**
     * Delete single data from the given URL with optional cancellation support using superagent's abort method.
     *
     * @template T
     * @param {string} url - The URL to delete data from.
     * @param {Class} Model - Modal to deserialize on
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @param {object} [headers] - Optional object with an `abort` method to cancel the request
     * @param {string} [headers.token] - headers token for authorization.
     * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
     * @throws {Error} If the URL is null or empty.
     */
    delete: <T>(url: string, Model: Class, cancelToken?: object, headers?: {
        token?: string;
    }) => Promise<T | null | ApiErrorResponse>;
    /**
     * Delete single data from the given URL with optional cancellation support using superagent's abort method.
     *
     * @template T
     * @param {string} url - The URL to delete data from.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @param {object} [headers] - Optional object with an `abort` method to cancel the request
     * @param {string} [headers.token] - headers token for authorization.
     * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
     * @throws {Error} If the URL is null or empty.
     */
    deleteRaw: <T>(url: string, cancelToken?: object, headers?: {
        token?: string;
    }) => Promise<T | null | ApiErrorResponse>;
    /**
     * Delete single data from the given URL with optional cancellation support using superagent's abort method.
     *
     * @template T
     * @param {string} url - The URL to delete data from.
     * @param {T} obj - The object to send in the request body.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<T|null|ApiErrorResponse>} The parsed JSON data from the response or null if the request fails.
     * @throws {Error} If the URL is null or empty.
     */
    deleteWithPayload: <T>(url: string, obj: T, cancelToken?: object) => Promise<T | null | ApiErrorResponse>;
    /**
     * Create an object via POST request to the specified URL.
     *
     * @template T
     * @param {string} url - The URL to send the PUT request to.
     * @param {T} obj - The object to send in the request body.
     * @param {Class} Model - Modal to deserialize on
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or null if the request fails.
     * @throws {Error} If the URL or object is null or empty.
     */
    post: <T>(url: string, obj: T, Model: Class, cancelToken?: object) => Promise<T | null | ApiErrorResponse>;
    /**
     * Create an object via POST request to the specified URL.
     *
     * @template T
     * @param {string} url - The URL to send the POST request to.
     * @param {T} obj - The object to send in the request body.
     * @param {Class} Model - Class to deserialize the response body into.
     * @param {string} contentType - The content type of the request (e.g., 'application/json').
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<T|null|ApiErrorResponse>} The created object as the response or an `ApiErrorResponse` if the request fails.
     * @throws {Error} If the URL or object is null or empty.
     */
    postContentType: <T>(url: string, obj: T, Model: Class, contentType: string, cancelToken?: object) => Promise<T | null | ApiErrorResponse>;
    /**
     * Create an object via POST request to the specified URL.
     *
     * @template T
     * @param {string} url - The URL to send the POST request to.
     * @param {T} obj - The object to send in the request body.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<object|null|ApiErrorResponse>} The raw response data from the API or an error response.
     * @throws {Error} If the URL or object is null or empty.
     */
    createRaw: <T>(url: string, obj: T, cancelToken?: object) => Promise<object | null | ApiErrorResponse>;
}
import ApiErrorResponse from '../models/ApiErrorResponse';
