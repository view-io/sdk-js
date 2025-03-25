export default class TenantMetadata {
    /**
     * @param {Object} tenant Information about the credential.
     * @param {string} tenant.GUID - Tenant's unique identifier (automatically generated if not provided).
     * @param {string} tenant.AccountGUID - Account GUID.
     * @param {string} tenant.DefaultPoolGUID - Default pool's unique identifier for the tenant.
     * @param {string} tenant.Name - Tenant's name (default is an empty string).
     * @param {string} tenant.Region - Region for the tenant (default: 'us-west-1').
     * @param {string} tenant.S3BaseDomain - S3 base domain for the tenant.
     * @param {string} tenant.RestBaseDomain - REST base domain for the tenant.
     * @param {string|null} tenant.ParentGUID - Parent tenant's GUID (optional).
     * @param {boolean} tenant.Active - Whether the tenant is active (default: true).
     * @param {boolean} metadata.IsProtected - Indicates if the tenant is protected.
     * @param {Date} tenant.CreatedUtc - Creation timestamp in UTC (default: current time).
     */
    constructor(tenant: {
        GUID: string;
        AccountGUID: string;
        DefaultPoolGUID: string;
        Name: string;
        Region: string;
        S3BaseDomain: string;
        RestBaseDomain: string;
        ParentGUID: string | null;
        Active: boolean;
    });
    GUID: any;
    parentGUID: string;
    name: string;
    region: string;
    s3BaseDomain: any;
    restBaseDomain: string;
    defaultPoolGUID: string;
    active: boolean;
    createdUtc: any;
    accountGUID: string;
    isProtected: any;
    /**
     * Setter for the tenant ID with validation.
     * @param {number} value - The new ID value.
     */
    set id(value: number);
    /**
     * Getter for the tenant ID.
     * @returns {number} The tenant ID.
     */
    get id(): number;
    _id: number;
}
