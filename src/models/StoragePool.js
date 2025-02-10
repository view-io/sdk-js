import { v4 as uuidV4 } from 'uuid';
import { CompressionTypeEnum } from '../enums/CompressionTypeEnum';
import { ObjectWriteModeEnum } from '../enums/ObjectWriteModeEnum';

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
  constructor(pool) {
    const {
      id,
      GUID = uuidV4(),
      TenantGUID = null,
      EncryptionKeyGUID = null,
      Name = null,
      Provider = 'Disk',
      WriteMode = ObjectWriteModeEnum.GUID,
      UseSsl = false,
      Endpoint = null,
      AccessKey = null,
      SecretKey = null,
      AwsRegion = null,
      AwsBucket = null,
      AwsBaseDomain = null,
      AwsBaseUrl = null,
      DiskDirectory = null,
      AzureAccount = null,
      AzureContainer = null,
      Compress = CompressionTypeEnum.NONE,
      EnableReadCaching = false,
      CreatedUtc = new Date(),
    } = pool;

    this._id = 0;
    this.id = id; // Set through the setter method
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

  /**
   * ID getter.
   */
  get id() {
    return this._id;
  }

  /**
   * ID setter with validation.
   * @param {number} value - The ID value.
   */
  set id(value) {
    if (value < 0) {
      throw new Error('ID must be greater than or equal to 0');
    }
    this._id = value;
  }
}
