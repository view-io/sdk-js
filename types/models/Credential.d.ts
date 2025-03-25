export default class Credential {
    /**
     * @param {Object} credential Information about the credential.
     * @param {string} credential.GUID - Unique identifier for the credential (automatically generated if not provided).
     * @param {string} credential.Name - Name of the credential.
     * @param {string} credential.TenantGUID - Unique identifier for the tenant.
     * @param {string} credential.UserGUID - Unique identifier for the user.
     * @param {string} credential.AccessKey - Access key for the credential.
     * @param {string} credential.SecretKey - Secret key for the credential.
     * @param {boolean} credential.Active - Whether the credential is active.
     * @param {boolean} credential.IsProtected - Whether the credential is protected.
     * @param {Date} credential.CreatedUtc - The date and time when the credential was created in UTC.
     */
    constructor(credential: {
        GUID: string;
        Name: string;
        TenantGUID: string;
        UserGUID: string;
        AccessKey: string;
        SecretKey: string;
        Active: boolean;
        IsProtected: boolean;
        CreatedUtc: Date;
    });
    GUID: any;
    tenantGUID: any;
    userGUID: any;
    accessKey: string;
    secretKey: string;
    active: boolean;
    createdUtc: string | Date;
    isProtected: boolean;
    name: string;
}
