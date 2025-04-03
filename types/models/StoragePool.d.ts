export default class StoragePool {
    /**
     * @param {Object} pool - Information about the storage pool.
     * @param {number} pool.Id - Row ID.
     * @param {string} pool.GUID - Storage pool GUID.
     * @param {string} pool.TenantGUID - Tenant GUID.
     * @param {string} pool.EncryptionKeyGUID - Encryption key GUID.
     * @param {string} pool.Name - Name of the storage pool.
     * @param {string} pool.Provider - Provider type.
     * @param {string} pool.WriteMode - Object write mode enum value.
     * @param {boolean} pool.UseSsl - Whether SSL is enabled.
     * @param {string} pool.Endpoint - Endpoint URL.
     * @param {string} pool.AccessKey - Access key.
     * @param {string} pool.SecretKey - Secret key.
     * @param {string} pool.AwsRegion - AWS region name.
     * @param {string} pool.AwsBucket - AWS bucket name.
     * @param {string} pool.AwsBaseDomain - Base domain for AWS.
     * @param {string} pool.AwsBaseUrl - Custom S3 base URL.
     * @param {string} pool.DiskDirectory - Disk directory path.
     * @param {string} pool.AzureAccount - Azure storage account.
     * @param {string} pool.AzureContainer - Azure container name.
     * @param {string} pool.Compress - Compression type enum value.
     * @param {boolean} pool.EnableReadCaching - Whether read caching is enabled.
     * @param {string} pool.CreatedUtc - ISO timestamp of creation.
     */
    constructor(pool?: {
        Id: number;
        GUID: string;
        TenantGUID: string;
        EncryptionKeyGUID: string;
        Name: string;
        Provider: string;
        WriteMode: string;
        UseSsl: boolean;
        Endpoint: string;
        AccessKey: string;
        SecretKey: string;
        AwsRegion: string;
        AwsBucket: string;
        AwsBaseDomain: string;
        AwsBaseUrl: string;
        DiskDirectory: string;
        AzureAccount: string;
        AzureContainer: string;
        Compress: string;
        EnableReadCaching: boolean;
        CreatedUtc: string;
    });
    Id: number;
    GUID: string;
    TenantGUID: string;
    EncryptionKeyGUID: string;
    Name: string;
    Provider: string;
    WriteMode: string;
    UseSsl: boolean;
    Endpoint: string;
    AccessKey: string;
    SecretKey: string;
    AwsRegion: string;
    AwsBucket: string;
    AwsBaseDomain: string;
    AwsBaseUrl: string;
    DiskDirectory: string;
    AzureAccount: string;
    AzureContainer: string;
    Compress: string;
    EnableReadCaching: boolean;
    CreatedUtc: string;
}
