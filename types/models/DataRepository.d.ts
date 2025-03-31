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
    constructor(dataRepository: {
        GUID: string;
        TenantGUID: string;
        OwnerGUID: string;
        Name: string;
        RepositoryType: string;
        UseSsl: boolean;
        IncludeSubdirectories: boolean;
        DiskDirectory: string;
        S3EndpointUrl: string;
        S3BaseUrl: string;
        S3AccessKey: string;
        S3SecretKey: string;
        S3BucketName: string;
        S3Region: string;
        AzureEndpointUrl: string;
        AzureAccountName: string;
        AzureContainerName: string;
        AzureAccessKey: string;
        CifsHostname: string;
        CifsUsername: string;
        CifsPassword: string;
        CifsShareName: string;
        NfsHostname: string;
        NfsUserId: number;
        NfsGroupId: number;
        NfsShareName: string;
        NfsVersion: string;
        CreatedUtc: Date;
        DiskIncludeSubdirectories: boolean;
        CifsIncludeSubdirectories: boolean;
        NfsIncludeSubdirectories: boolean;
    });
    GUID: string;
    TenantGUID: string;
    OwnerGUID: string;
    Name: string;
    RepositoryType: string;
    UseSsl: boolean;
    IncludeSubdirectories: boolean;
    DiskIncludeSubdirectories: boolean;
    CifsIncludeSubdirectories: boolean;
    DiskDirectory: any;
    S3EndpointUrl: any;
    S3BaseUrl: any;
    S3AccessKey: string;
    S3SecretKey: string;
    S3BucketName: string;
    S3Region: string;
    AzureEndpointUrl: any;
    AzureAccountName: string;
    AzureContainerName: string;
    AzureAccessKey: string;
    CifsHostname: string;
    CifsUsername: string;
    CifsPassword: string;
    CifsShareName: string;
    NfsHostname: string;
    NfsUserId: any;
    NfsGroupId: any;
    NfsShareName: string;
    NfsVersion: string;
    CreatedUtc: Date;
    NfsIncludeSubdirectories: boolean;
    validateNfsUserId(value: any): any;
    validateNfsGroupId(value: any): any;
    formatDirectory(value: any): any;
}
