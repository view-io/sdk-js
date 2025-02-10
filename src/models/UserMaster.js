import { v4 as uuidV4 } from 'uuid';

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
  constructor(user) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      FirstName = '',
      LastName = '',
      Notes = '',
      Email = '',
      PasswordSha256 = '',
      Active = true,
      CreatedUtc = new Date().toISOString(),
      IsProtected = true,
    } = user;
    this.GUID = GUID;
    this.tenantGUID = TenantGUID;
    this.firstName = FirstName;
    this.lastName = LastName;
    this.notes = Notes;
    this.email = Email;
    this.passwordSha256 = PasswordSha256;
    this.active = Active;
    this.createdUtc = CreatedUtc;
    this.isProtected = IsProtected;
  }

  /**
   * Get the full name of the user by combining first and last names.
   * @returns {string} Full name of the user.
   */
  get fullName() {
    return this.firstName || this.lastName ? [this.firstName, this.lastName].join(' ') : '';
  }
}
