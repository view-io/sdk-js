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
    constructor(key?: {
        GUID?: string;
        TenantGUID?: string;
        OwnerGUID?: string;
        KeyBase64?: string;
        KeyHex?: string;
        IvBase64?: string;
        IvHex?: string;
        SaltBase64?: string;
        SaltHex?: string;
        Name?: string;
        Description?: string;
        CreatedUtc?: string;
    });
    GUID: string;
    TenantGUID: string;
    OwnerGUID: string;
    KeyBase64: string;
    KeyHex: string;
    IvBase64: string;
    IvHex: string;
    SaltBase64: string;
    SaltHex: string;
    Name: string;
    Description: string;
    CreatedUtc: string;
}
