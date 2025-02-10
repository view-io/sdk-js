import { v4 as uuidV4 } from 'uuid';
/**
 * EncryptionKey model to match API response and handle validations.
 */
export default class EncryptionKey {
  /**
   * @param {Object} key - Information about the encryption key.
   * @param {string} [key.GUID] - GUID of the encryption key (automatically generated if not provided).
   * @param {string} [key.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [key.OwnerGUID] - Owner GUID (automatically generated if not provided).
   * @param {string} [key.KeyBase64] - Key in base64 form.
   * @param {string} [key.KeyHex] - Key in hexadecimal form.
   * @param {string} [key.IvBase64] - Initialization vector in base64 form.
   * @param {string} [key.IvHex] - Initialization vector in hexadecimal form.
   * @param {string} [key.SaltBase64] - Salt in base64 form.
   * @param {string} [key.SaltHex] - Salt in hexadecimal form.
   * @param {string} [key.Name] - Name of the encryption key.
   * @param {string} [key.Description] - Description of the encryption key.
   * @param {string} [key.CreatedUtc] - Creation timestamp in UTC.
   */
  constructor(key = {}) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      OwnerGUID = uuidV4(),
      KeyBase64 = null,
      KeyHex = null,
      IvBase64 = null,
      IvHex = null,
      SaltBase64 = null,
      SaltHex = null,
      Name = '',
      Description = '',
      CreatedUtc = new Date().toISOString(),
    } = key;

    this.GUID = GUID;
    this.tenantGUID = TenantGUID;
    this.ownerGUID = OwnerGUID;
    this.name = Name;
    this.description = Description;
    this.createdUtc = CreatedUtc;

    // Initialize keys and IVs based on input, handling both Base64 and Hex formats.
    this.keyBase64 = KeyBase64 || Buffer.alloc(32).toString('base64');
    this.keyHex = KeyHex || Buffer.alloc(32).toString('hex');

    this.ivBase64 = IvBase64 || Buffer.alloc(16).toString('base64');
    this.ivHex = IvHex || Buffer.alloc(16).toString('hex');

    this.saltBase64 = SaltBase64 || Buffer.alloc(16).toString('base64');
    this.saltHex = SaltHex || Buffer.alloc(16).toString('hex');
  }

  // Optional: You can still implement getters and setters to access and modify the values.

  get KeyBase64() {
    return this.keyBase64;
  }

  set KeyBase64(value) {
    this.keyBase64 = value || Buffer.alloc(32).toString('base64');
  }

  get KeyHex() {
    return this.keyHex;
  }

  set KeyHex(value) {
    this.keyHex = value || Buffer.alloc(32).toString('hex');
  }

  get IvBase64() {
    return this.ivBase64;
  }

  set IvBase64(value) {
    this.ivBase64 = value || Buffer.alloc(16).toString('base64');
  }

  get IvHex() {
    return this.ivHex;
  }

  set IvHex(value) {
    this.ivHex = value || Buffer.alloc(16).toString('hex');
  }

  get SaltBase64() {
    return this.saltBase64;
  }

  set SaltBase64(value) {
    this.saltBase64 = value || Buffer.alloc(16).toString('base64');
  }

  get SaltHex() {
    return this.saltHex;
  }

  set SaltHex(value) {
    this.saltHex = value || Buffer.alloc(16).toString('hex');
  }
}
