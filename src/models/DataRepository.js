import { v4 as uuidV4 } from 'uuid';

export default class DataRepository {
  /**
   * @param {Object} dataRepository Information about the data repository.
   * @param {string} dataRepository.GUID - Data repository GUID (automatically generated if not provided).
   * @param {string} dataRepository.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} dataRepository.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} dataRepository.Name - Name of the repository (default is "My file repository").
   * @param {string} dataRepository.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {boolean} dataRepository.UseSsl - Boolean flag to enable SSL (default is false).
   * @param {boolean} dataRepository.IncludeSubdirectories - Include subdirectories (default is true).
   * @param {string} dataRepository.DiskDirectory - Disk directory (default is null).
   * @param {string} dataRepository.S3EndpointUrl - S3 endpoint URL (default is null).
   * @param {string} dataRepository.S3BaseUrl - S3 base URL (default is null).
   * @param {string} dataRepository.S3AccessKey - S3 access key (default is null).
   * @param {string} dataRepository.S3SecretKey - S3 secret key (default is null).
   * @param {string} dataRepository.S3BucketName - S3 bucket name (default is null).
   * @param {string} dataRepository.S3Region - S3 region (default is null).
   * @param {string} dataRepository.AzureEndpointUrl - Azure endpoint URL (default is null).
   * @param {string} dataRepository.AzureAccountName - Azure account name (default is null).
   * @param {string} dataRepository.AzureContainerName - Azure container name (default is null).
   * @param {string} dataRepository.AzureAccessKey - Azure access key (default is null).
   * @param {string} dataRepository.CifsHostname - CIFS hostname (default is null).
   * @param {string} dataRepository.CifsUsername - CIFS username (default is null).
   * @param {string} dataRepository.CifsPassword - CIFS password (default is null).
   * @param {string} dataRepository.CifsShareName - CIFS share name (default is null).
   * @param {string} dataRepository.NfsHostname - NFS hostname (default is null).
   * @param {number} dataRepository.NfsUserId - NFS user ID (must be non-negative).
   * @param {number} dataRepository.NfsGroupId - NFS group ID (must be non-negative).
   * @param {string} dataRepository.NfsShareName - NFS share name (default is null).
   * @param {string} dataRepository.NfsVersion - NFS version (default is null).
   * @param {Date} dataRepository.CreatedUtc - Created timestamp (default is current UTC time).
   * @param {boolean} dataRepository.DiskIncludeSubdirectories - Include subdirectories on disk (default is true).
   * @param {boolean} dataRepository.CifsIncludeSubdirectories - Include subdirectories on CIFS (default is true).
   * @param {boolean} dataRepository.NfsIncludeSubdirectories - Include subdirectories on NFS (default is true).
   */
  constructor(dataRepository) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      OwnerGUID = uuidV4(),
      Name = 'My file repository',
      RepositoryType = 'File', // Assuming enum value is passed as a string
      UseSsl = false,
      IncludeSubdirectories = true,
      DiskIncludeSubdirectories = true,
      DiskDirectory = null,
      S3EndpointUrl = null,
      S3BaseUrl = null,
      S3AccessKey = null,
      S3SecretKey = null,
      S3BucketName = null,
      S3Region = null,
      AzureEndpointUrl = null,
      AzureAccountName = null,
      AzureContainerName = null,
      AzureAccessKey = null,
      CifsHostname = null,
      CifsUsername = null,
      CifsPassword = null,
      CifsShareName = null,
      NfsHostname = null,
      NfsUserId = 0,
      NfsGroupId = 0,
      NfsShareName = null,
      NfsVersion = null,
      CreatedUtc = new Date(),
      CifsIncludeSubdirectories = true,
      NfsIncludeSubdirectories = true,
    } = dataRepository;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.OwnerGUID = OwnerGUID;
    this.Name = Name;
    this.RepositoryType = RepositoryType;
    this.UseSsl = UseSsl;
    this.IncludeSubdirectories = IncludeSubdirectories;
    this.DiskIncludeSubdirectories = DiskIncludeSubdirectories;
    this.CifsIncludeSubdirectories = CifsIncludeSubdirectories;
    this.DiskDirectory = this.formatDirectory(DiskDirectory);
    this.S3EndpointUrl = this.formatDirectory(S3EndpointUrl);
    this.S3BaseUrl = this.formatDirectory(S3BaseUrl);
    this.S3AccessKey = S3AccessKey;
    this.S3SecretKey = S3SecretKey;
    this.S3BucketName = S3BucketName;
    this.S3Region = S3Region;
    this.AzureEndpointUrl = this.formatDirectory(AzureEndpointUrl);
    this.AzureAccountName = AzureAccountName;
    this.AzureContainerName = AzureContainerName;
    this.AzureAccessKey = AzureAccessKey;
    this.CifsHostname = CifsHostname;
    this.CifsUsername = CifsUsername;
    this.CifsPassword = CifsPassword;
    this.CifsShareName = CifsShareName;
    this.NfsHostname = NfsHostname;
    this.NfsUserId = this.validateNfsUserId(NfsUserId);
    this.NfsGroupId = this.validateNfsGroupId(NfsGroupId);
    this.NfsShareName = NfsShareName;
    this.NfsVersion = NfsVersion;
    this.CreatedUtc = CreatedUtc;
    this.CifsIncludeSubdirectories = CifsIncludeSubdirectories;
    this.NfsIncludeSubdirectories = NfsIncludeSubdirectories;
  }

  validateNfsUserId(value) {
    if (value < 0) {
      throw new RangeError('NfsUserId must be non-negative.');
    }
    return value;
  }

  validateNfsGroupId(value) {
    if (value < 0) {
      throw new RangeError('NfsGroupId must be non-negative.');
    }
    return value;
  }

  formatDirectory(value) {
    if (value) {
      value = value.replace(/\\/g, '/');
      if (!value.endsWith('/')) value += '/';
    }
    return value;
  }
}
