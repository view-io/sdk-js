/**
 * Data flow trigger, i.e., the event that invokes a data flow.
 */
export default class Trigger {
    constructor(trigger: any);
    /**
     * @param {Object} trigger Information about the trigger.
     * @param {string} trigger.GUID - Trigger GUID (automatically generated if not provided).
     * @param {string} trigger.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} trigger.Name - Name of the trigger.
     * @param {string} trigger.TriggerType - Type of the trigger (default is 'HTTP').
     * @param {string} trigger.HttpMethod - HTTP method (optional).
     * @param {string} trigger.HttpUrlPrefix - HTTP relative URL prefix (optional).
     * @param {string} trigger.Notes - Additional notes for the trigger (optional).
     * @param {Date} trigger.CreatedUtc - Creation timestamp in UTC (default is current date and time).
     */
    _reservedUrlPrefixes: string[];
    _GUID: any;
    _TenantGUID: any;
    Name: any;
    TriggerType: any;
    HttpMethod: any;
    /**
     * HTTP URL Prefix setter with validation.
     * @param {string} value - The URL prefix.
     */
    set HttpUrlPrefix(value: string);
    /**
     * HTTP URL Prefix getter.
     */
    get HttpUrlPrefix(): string;
    Notes: any;
    CreatedUtc: any;
    _HttpUrlPrefix: string;
    /**
     * GUID getter.
     */
    get GUID(): any;
    /**
     * Tenant GUID getter.
     */
    get TenantGUID(): any;
    /**
     * To represent the Trigger as a string (useful for debugging).
     */
    toString(): string;
}
