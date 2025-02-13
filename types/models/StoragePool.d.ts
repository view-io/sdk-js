export default class StoragePool {
    /**
     * @param {Object} pool Information about the storage pool.
     * @param {number} pool.id - Database row ID.
     * @param {string} pool.GUID - Storage pool GUID (automatically generated if not provided).
     * @param {string} pool.TenantGUID - Tenant GUID.
     * @param {string} pool.EncryptionKeyGUID - Encryption key GUID.
     * @param {string} pool.Name - Name of the storage pool.
     * @param {string} pool.Provider - Provider of the storage pool (default is 'Disk').
     * @param {string} pool.WriteMode - Object key write mode.
     * @param {boolean} pool.UseSsl - Enable or disable SSL.
     * @param {string} pool.Endpoint - Endpoint URL for the storage pool provider.
     * @param {string} pool.AccessKey - Access key.
     * @param {string} pool.SecretKey - Secret key.
     * @param {string} pool.AwsRegion - AWS region.
     * @param {string} pool.AwsBucket - AWS bucket.
     * @param {string} pool.AwsBaseDomain - Base URL for AWS S3 compatible storage platforms.
     * @param {string} pool.AwsBaseUrl - Base URL to use for objects.
     * @param {string} pool.DiskDirectory - Disk directory.
     * @param {string} pool.AzureAccount - Azure account.
     * @param {string} pool.AzureContainer - Azure container.
     * @param {string} pool.Compress - Compression type.
     * @param {boolean} pool.EnableReadCaching - Flag to enable or disable read caching.
     * @param {Date} pool.CreatedUtc - Creation timestamp in UTC.
     */
    constructor(pool: {
        id: number;
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
        CreatedUtc: Date;
    });
    _id: number;
    /**
     * ID setter with validation.
     * @param {number} value - The ID value.
     */
    set id(value: number);
    /**
     * ID getter.
     */
    get id(): number;
    GUID: any;
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
    CreatedUtc: Date;
}
