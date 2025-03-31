/**
 * EncryptionKey model to match API response and handle validations.
 */
export default class EncryptionKey {
  /**
   * @param {Object} key - Information about the encryption key.
   * @param {string} [key.GUID] - GUID of the encryption key.
   * @param {string} [key.TenantGUID] - Tenant GUID associated with the key.
   * @param {string} [key.OwnerGUID] - Owner GUID of the key.
   * @param {string} [key.KeyBase64] - Encryption key in base64 format.
   * @param {string} [key.KeyHex] - Encryption key in hexadecimal format.
   * @param {string} [key.IvBase64] - Initialization vector in base64 format.
   * @param {string} [key.IvHex] - Initialization vector in hexadecimal format.
   * @param {string} [key.SaltBase64] - Salt in base64 format.
   * @param {string} [key.SaltHex] - Salt in hexadecimal format.
   * @param {string} [key.Name] - Display name of the encryption key.
   * @param {string} [key.Description] - Description or notes about the key.
   * @param {string} [key.CreatedUtc] - UTC timestamp of key creation.
   */
  constructor(key = {}) {
    const {
      GUID,
      TenantGUID,
      OwnerGUID,
      KeyBase64,
      KeyHex,
      IvBase64,
      IvHex,
      SaltBase64,
      SaltHex,
      Name,
      Description,
      CreatedUtc,
    } = key;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.OwnerGUID = OwnerGUID;
    this.KeyBase64 = KeyBase64;
    this.KeyHex = KeyHex;
    this.IvBase64 = IvBase64;
    this.IvHex = IvHex;
    this.SaltBase64 = SaltBase64;
    this.SaltHex = SaltHex;
    this.Name = Name;
    this.Description = Description;
    this.CreatedUtc = CreatedUtc;
  }
}
