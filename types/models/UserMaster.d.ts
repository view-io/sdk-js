/**
 * Represents user credential and profile information.
 */
export default class UserMaster {
    /**
     * @param {Object} user - User profile and credential data.
     * @param {string} user.GUID - Unique identifier of the user.
     * @param {string} user.TenantGUID - Identifier of the tenant.
     * @param {string} user.FirstName - First name of the user.
     * @param {string} user.LastName - Last name of the user.
     * @param {string} user.Notes - Additional notes.
     * @param {string} user.Email - Email address of the user.
     * @param {string} user.PasswordSha256 - SHA-256 hashed password.
     * @param {boolean} user.Active - Indicates if the user is active.
     * @param {string} user.CreatedUtc - ISO timestamp of user creation.
     * @param {boolean} user.IsProtected - Indicates if the user is protected from deletion/modification.
     */
    constructor(user?: {
        GUID: string;
        TenantGUID: string;
        FirstName: string;
        LastName: string;
        Notes: string;
        Email: string;
        PasswordSha256: string;
        Active: boolean;
        CreatedUtc: string;
        IsProtected: boolean;
    });
    GUID: string;
    TenantGUID: string;
    FirstName: string;
    LastName: string;
    Notes: string;
    Email: string;
    PasswordSha256: string;
    Active: boolean;
    CreatedUtc: string;
    IsProtected: boolean;
    /**
     * Returns the full name of the user.
     * @returns {string}
     */
    get FullName(): string;
}
