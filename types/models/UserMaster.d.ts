export default class UserMaster {
    /**
     * @param {Object} user Information about the credential.
     * @param {string} user.GUID - User's unique identifier (automatically generated if not provided).
     * @param {string} user.TenantGUID - Tenant's unique identifier (automatically generated if not provided).
     * @param {string} user.FirstName - User's first name.
     * @param {string} user.LastName - User's last name.
     * @param {string} user.Notes - Any additional notes for the user.
     * @param {string} user.Email - User's email address.
     * @param {string} user.PasswordSha256 - SHA-256 hashed password (not serialized).
     * @param {boolean} user.Active - Whether the user is active (default: true).
     * @param {Date} user.CreatedUtc - Date and time the user was created (in UTC, default: current time).
     * @param {boolean} user.IsProtected - Whether the user is protected (default: true).
     */
    constructor(user: {
        GUID: string;
        TenantGUID: string;
        FirstName: string;
        LastName: string;
        Notes: string;
        Email: string;
        PasswordSha256: string;
        Active: boolean;
        CreatedUtc: Date;
        IsProtected: boolean;
    });
    GUID: any;
    tenantGUID: any;
    firstName: string;
    lastName: string;
    notes: string;
    email: string;
    passwordSha256: string;
    active: boolean;
    createdUtc: string | Date;
    isProtected: boolean;
    /**
     * Get the full name of the user by combining first and last names.
     * @returns {string} Full name of the user.
     */
    get fullName(): string;
}
