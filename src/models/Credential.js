import { v4 as uuidV4 } from 'uuid';

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
  constructor(credential) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      UserGUID = uuidV4(),
      AccessKey = '',
      SecretKey = '',
      Active = true,
      CreatedUtc = new Date().toISOString(),
      IsProtected = false,
      Name = '',
    } = credential;
    this.GUID = GUID;
    this.tenantGUID = TenantGUID;
    this.userGUID = UserGUID;
    this.accessKey = AccessKey;
    this.secretKey = SecretKey;
    this.active = Active;
    this.createdUtc = CreatedUtc;
    this.isProtected = IsProtected;
    this.name = Name;
  }
}
