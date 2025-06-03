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
  constructor(pool = {}) {
    const {
      Id,
      GUID,
      TenantGUID,
      EncryptionKeyGUID,
      Name,
      Provider,
      WriteMode,
      UseSsl,
      Endpoint,
      AccessKey,
      SecretKey,
      AwsRegion,
      AwsBucket,
      AwsBaseDomain,
      AwsBaseUrl,
      DiskDirectory,
      AzureAccount,
      AzureContainer,
      Compress,
      EnableReadCaching,
      CreatedUtc,
    } = pool;

    this.Id = Id;
    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.EncryptionKeyGUID = EncryptionKeyGUID;
    this.Name = Name;
    this.Provider = Provider;
    this.WriteMode = WriteMode;
    this.UseSsl = UseSsl;
    this.Endpoint = Endpoint;
    this.AccessKey = AccessKey;
    this.SecretKey = SecretKey;
    this.AwsRegion = AwsRegion;
    this.AwsBucket = AwsBucket;
    this.AwsBaseDomain = AwsBaseDomain;
    this.AwsBaseUrl = AwsBaseUrl;
    this.DiskDirectory = DiskDirectory;
    this.AzureAccount = AzureAccount;
    this.AzureContainer = AzureContainer;
    this.Compress = Compress;
    this.EnableReadCaching = EnableReadCaching;
    this.CreatedUtc = CreatedUtc;
  }
}
