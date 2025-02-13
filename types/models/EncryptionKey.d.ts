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
    GUID: any;
    tenantGUID: any;
    ownerGUID: any;
    name: string;
    description: string;
    createdUtc: string;
    keyBase64: string;
    keyHex: string;
    ivBase64: string;
    ivHex: string;
    saltBase64: string;
    saltHex: string;
    set KeyBase64(value: string);
    get KeyBase64(): string;
    set KeyHex(value: string);
    get KeyHex(): string;
    set IvBase64(value: string);
    get IvBase64(): string;
    set IvHex(value: string);
    get IvHex(): string;
    set SaltBase64(value: string);
    get SaltBase64(): string;
    set SaltHex(value: string);
    get SaltHex(): string;
}
