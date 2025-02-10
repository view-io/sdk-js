import ViewSdkBase from '../ViewSDKBase';
import CleanupResponse from '../../models/CleanupResponse';
import { ApiErrorEnum } from '../../enums/ApiErrorEnum';
import { SeverityEnum } from '../../enums/SeverityEnum';
import { LoggerInstance } from '../../utils/Logger';
/**
 * View Cleanup Pipeline SDK.
 */
export default class ViewCleanupSdk extends ViewSdkBase {
  /**
   * Constructs a new ProcessorApi.
   * @alias module:base/ProcessorApi
   * @class
   * @param {string} tenantGuid
   * @param {string} accessKey
   * @param {string} endpoint
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
  }
  /**
   * @constructor
   * @param {string} guid
   * @param {CancellationToken} token
   * @param {string} endpoint
   */

  /**
   * Cleanup a document. This variant is used by the storage server.
   * @param {TenantMetadata} tenant - Tenant metadata.
   * @param {number} tenant.id - Tenant ID (defaults to 0, throws error if set to less than 1).
   * @param {string} tenant.GUID - Tenant's unique identifier (automatically generated if not provided).
   * @param {string|null} tenant.ParentGUID - Parent tenant's GUID (optional).
   * @param {string} tenant.Name - Tenant's name (default is an empty string).
   * @param {string} tenant.Region - Region for the tenant (default: 'us-west-1').
   * @param {string} tenant.S3BaseDomain - S3 base domain for the tenant.
   * @param {string} tenant.RestBaseDomain - REST base domain for the tenant.
   * @param {string} tenant.DefaultPoolGUID - Default pool's unique identifier for the tenant.
   * @param {boolean} tenant.Active - Whether the tenant is active (default: true).
   * @param {Date} tenant.CreatedUtc - Creation timestamp in UTC (default: current time).
   * @param {Collection} collection - Collection metadata.
   * @param {number} collection.id - Collection ID.
   * @param {string} collection.GUID - Collection GUID (automatically generated if not provided).
   * @param {string} collection.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} collection.Name - Name of the collection.
   * @param {boolean} collection.AllowOverwrites - Indicates whether source documents can be overwritten (default is true).
   * @param {string} collection.AdditionalData - Additional data (optional).
   * @param {Date} collection.CreatedUtc - Creation timestamp in UTC.
   * @param {StoragePool} pool - Storage pool metadata.
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
   * @param {BucketMetadata} bucket - Bucket metadata.
   * @param {number} bucket.id - Bucket ID.
   * @param {string} bucket.GUID - Bucket GUID (automatically generated if not provided).
   * @param {string} bucket.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} bucket.PoolGUID - Pool GUID (automatically generated if not provided).
   * @param {string} bucket.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} bucket.Category - Bucket category.
   * @param {string} bucket.Name - Name of the bucket.
   * @param {string} bucket.RegionString - Region string (default is 'us-west-1').
   * @param {boolean} bucket.Versioning - Enable or disable versioning (default is true).
   * @param {number|null} bucket.RetentionMinutes - Retention in minutes (optional).
   * @param {number|null} bucket.MaxUploadSize - Maximum upload size (optional).
   * @param {number} bucket.MaxMultipartUploadSeconds - Maximum multipart upload seconds (default is seven days).
   * @param {Date} bucket.LastAccessUtc - Last access timestamp in UTC.
   * @param {Date} bucket.CreatedUtc - Created timestamp in UTC.
   * @param {Object} bucket.Owner Information about the credential.
   * @param {string} bucket.Owner.GUID - User's unique identifier (automatically generated if not provided).
   * @param {string} bucket.Owner.TenantGUID - Tenant's unique identifier (automatically generated if not provided).
   * @param {string} bucket.Owner.FirstName - User's first name.
   * @param {string} bucket.Owner.LastName - User's last name.
   * @param {string} bucket.Owner.Notes - Any additional notes for the user.
   * @param {string} bucket.Owner.Email - User's email address.
   * @param {string} bucket.Owner.PasswordSha256 - SHA-256 hashed password (not serialized).
   * @param {boolean} bucket.Owner.Active - Whether the user is active (default: true).
   * @param {Date} bucket.Owner.CreatedUtc - Date and time the user was created (in UTC, default: current time).
   * @param {ObjectMetadata} obj - Object metadata.
   * @param {string} obj.guid - The GUID of the object.
   * @param {string} obj.parentGUID - The parent GUID.
   * @param {string} obj.tenantGUID - The tenant GUID.
   * @param {string} obj.tenantName - The tenant name.
   * @param {string} obj.nodeGUID - The node GUID.
   * @param {string} obj.poolGUID - The pool GUID.
   * @param {string} obj.bucketGUID - The bucket GUID.
   * @param {string} obj.bucketName - The bucket name.
   * @param {string} obj.ownerGUID - The owner GUID.
   * @param {string} obj.encryptionKeyGUID - The encryption key GUID.
   * @param {string} obj.dataCatalogDocumentGUID - The data catalog document GUID.
   * @param {string} obj.dataRepositoryGUID - The data repository GUID.
   * @param {string} obj.graphRepositoryGUID - The graph repository GUID.
   * @param {string} obj.graphNodeIdentifier - The graph node identifier.
   * @param {string} obj.dataFlowRequestGUID - The data flow request GUID.
   * @param {string} obj.key - The key.
   * @param {string} obj.version - The version.
   * @param {boolean} obj.isLatest - Indicates if this is the latest version.
   * @param {boolean} obj.isDeleteMarker - Indicates if this is a delete marker.
   * @param {boolean} obj.isLocal - Indicates if the object is local.
   * @param {string} obj.contentType - The content type.
   * @param {DocumentTypeEnum} obj.documentType - The document type.
   * @param {number} obj.contentLength - The length of the content.
   * @param {string} obj.sourceUrl - The source URL.
   * @param {string} obj.md5Hash - The MD5 hash.
   * @param {string} obj.sha1Hash - The SHA1 hash.
   * @param {string} obj.sha256Hash - The SHA256 hash.
   * @param {Date|null} obj.expirationUtc - The expiration timestamp in UTC.
   * @param {Date} obj.lastAccessUtc - The last access timestamp in UTC.
   * @param {Date} obj.lastModifiedUtc - The last modified timestamp in UTC.
   * @param {Date} obj.createdUtc - The creation timestamp in UTC.
   * @param {byte[]} obj.data - The data of the object.
   * @param {MetadataRule} mdRule - Metadata rule.
   * @param {string} mdRule.GUID - Metadata rule GUID (automatically generated if not provided).
   * @param {string} mdRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} mdRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} mdRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} mdRule.Name - Name of the rule (default is null).
   * @param {string} mdRule.ContentType - Content type (default is "text/plain").
   * @param {string} mdRule.Prefix - Prefix (default is null).
   * @param {string} mdRule.Suffix - Suffix (default is null).
   * @param {string} mdRule.ProcessingEndpoint - Processing endpoint (default is localhost).
   * @param {string} mdRule.CleanupEndpoint - Cleanup endpoint (default is localhost).
   * @param {string} mdRule.TypeDetectorEndpoint - Type detector endpoint (default is localhost).
   * @param {string} mdRule.SemanticCellEndpoint - Semantic cell endpoint (default is localhost).
   * @param {number} mdRule.MaxChunkContentLength - Maximum chunk content length (default is 512).
   * @param {number} mdRule.ShiftSize - Shift size (default is 512).
   * @param {string} mdRule.UdrEndpoint - UDR endpoint (default is localhost).
   * @param {string} mdRule.DataCatalogType - Data catalog type (default is DataCatalogTypeEnum.Lexi).
   * @param {string} mdRule.DataCatalogEndpoint - Data catalog endpoint (default is localhost).
   * @param {string} mdRule.DataCatalogCollection - Data catalog collection identifier (default is null).
   * @param {string} mdRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {number} mdRule.TopTerms - Number of top terms to request (default is 25).
   * @param {boolean} mdRule.CaseInsensitive - Enable case insensitive processing (default is true).
   * @param {boolean} mdRule.IncludeFlattened - Enable inclusion of flattened representation (default is true).
   * @param {string} mdRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {number} mdRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} mdRule.RetentionMinutes - Minutes to retain generated document (default is null).
   * @param {Date} mdRule.CreatedUtc - Creation timestamp (default is current UTC time).
   * @param {EmbeddingsRule} embedRule - Embeddings rule.
   * @param {string} embedRule.GUID - Embeddings rule GUID (automatically generated if not provided).
   * @param {string} embedRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} embedRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} embedRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} embedRule.Name - Name of the rule (default is null).
   * @param {string} embedRule.ContentType - Content type (default is "text/plain").
   * @param {string} embedRule.Prefix - Prefix (default is null).
   * @param {string} embedRule.Suffix - Suffix (default is null).
   * @param {string} embedRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {string} embedRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {string} embedRule.VectorRepositoryGUID - Vector repository GUID (default is null).
   * @param {string} embedRule.DataFlowEndpoint - Data flow endpoint (default is localhost).
   * @param {string} embedRule.EmbeddingsGenerator - Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy).
   * @param {string} embedRule.GeneratorUrl - Embeddings generator URL (default is localhost).
   * @param {string} embedRule.GeneratorApiKey - Embeddings provider API key (default is null).
   * @param {number} embedRule.BatchSize - Maximum number of chunks to process per request (default is 16).
   * @param {number} embedRule.MaxGeneratorTasks - Maximum number of parallel embeddings generation tasks (default is 16).
   * @param {number} embedRule.MaxRetries - Maximum number of retries per task (default is 3).
   * @param {number} embedRule.MaxFailures - Maximum number of failures before failing the operation (default is 3).
   * @param {string} embedRule.VectorStoreUrl - Vector store URL (default is localhost).
   * @param {number} embedRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} embedRule.RetentionMinutes - Minutes to retain the generated document (default is null).
   * @param {Date} embedRule.CreatedUtc - Creation timestamp (default is current UTC time).
   * @param {VectorRepository} vectorRepo - Vector repository.
   * @param {string} vectorRepo.GUID - Repository GUID (automatically generated if not provided).
   * @param {string} vectorRepo.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} vectorRepo.name - Name of the repository (default is 'My vector repository').
   * @param {string} vectorRepo.repositoryType - Type of vector repository.
   * @param {string} vectorRepo.endpointUrl - Endpoint URL for the repository.
   * @param {string} vectorRepo.apiKey - API key for authentication.
   * @param {string} vectorRepo.model - Embedding model to be used (default is 'all-MiniLM-L6-v2').
   * @param {number} vectorRepo.dimensionality - Dimensionality of embeddings.
   * @param {string} vectorRepo.databaseHostname - Hostname of the database.
   * @param {string} vectorRepo.databaseName - Name of the database.
   * @param {string} vectorRepo.databaseTable - Table name in the database.
   * @param {number} vectorRepo.databasePort - Database port.
   * @param {string} vectorRepo.databaseUser - Database username.
   * @param {string} vectorRepo.databasePassword - Database password.
   * @param {string} vectorRepo.promptPrefix - Prefix to prepend to prompts.
   * @param {string} vectorRepo.promptSuffix - Suffix to append to prompts.
   * @param {Date} vectorRepo.createdUtc - Creation timestamp in UTC.
   * @param {GraphRepository} graphRepo - Graph repository.
   * @param {string} graphRepo.GUID - GUID of the graph repository (auto-generated if not provided).
   * @param {string} graphRepo.TenantGUID - Tenant GUID (auto-generated if not provided).
   * @param {string} graphRepo.Name - Name of the graph.
   * @param {string} graphRepo.RepositoryType - Type of graph graph.
   * @param {string} graphRepo.EndpointUrl - Endpoint URL.
   * @param {string} graphRepo.ApiKey - API key for the graph.
   * @param {string} graphRepo.Username - Username for authentication.
   * @param {string} graphRepo.Password - Password for authentication.
   * @param {string} graphRepo.Hostname - Hostname for the graph.
   * @param {number} graphRepo.Port - Port number for the graph (default is 0).
   * @param {string} graphRepo.GraphIdentifier - Identifier of the graph.
   * @param {Date} graphRepo.CreatedUtc - Creation timestamp in UTC (defaults to current UTC time).
   * @param {AbortSignal} token - Cancellation token.
   */
  async cleanupStorageServer(
    tenant,
    collection,
    pool,
    bucket,
    obj,
    mdRule,
    embedRule,
    vectorRepo,
    graphRepo,
    token = null
  ) {
    if (!obj) throw new Error('Object metadata is required.');
    if (!mdRule) throw new Error('Metadata rule is required.');

    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/processing/cleanup';
    try {
      // Prepare the request payload
      const cleanupReq = {
        Tenant: tenant,
        Collection: collection,
        Pool: pool,
        Bucket: bucket,
        Object: obj,
        MetadataRule: mdRule,
        EmbeddingsRule: embedRule,
        VectorRepository: vectorRepo,
        GraphRepository: graphRepo,
      };

      const json = JSON.stringify(cleanupReq);
      // Log the request if needed
      if (LoggerInstance.logRequests) {
        LoggerInstance.log(SeverityEnum.Debug, `request: \n${json}`);
      }

      // Use the `post` method to send the request
      const response = await this.post(url, json, CleanupResponse, token);
      if (LoggerInstance.logResponses) {
        LoggerInstance.log(SeverityEnum.Debug, `response (status ${status}):\n${JSON.stringify(response)}`);
      }

      if (response) {
        LoggerInstance.log(SeverityEnum.Debug, `success reported from ${url}`);

        // Return the deserialized response body
        return response;
      } else {
        LoggerInstance.log(SeverityEnum.Warn, `non-success reported from ${url}`);

        // Handle non-success response
        return response || null;
      }
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Warn, `exception while interacting with ${url}: ${error.message}`);
      return {
        Success: false,
        Error: {
          ApiErrorEnum: ApiErrorEnum.InternalError,
          ErrorDetails: error.message,
        },
      };
    }
  }

  /**
   * Cleanup a document. This variant is used by the data crawler.
   *
   * @param {Object} tenant - Tenant metadata.
   * @param {number} tenant.id - Tenant ID (defaults to 0, throws error if set to less than 1).
   * @param {string} tenant.GUID - Tenant's unique identifier (automatically generated if not provided).
   * @param {string|null} tenant.ParentGUID - Parent tenant's GUID (optional).
   * @param {string} tenant.Name - Tenant's name (default is an empty string).
   * @param {string} tenant.Region - Region for the tenant (default: 'us-west-1').
   * @param {string} tenant.S3BaseDomain - S3 base domain for the tenant.
   * @param {string} tenant.RestBaseDomain - REST base domain for the tenant.
   * @param {string} tenant.DefaultPoolGUID - Default pool's unique identifier for the tenant.
   * @param {boolean} tenant.Active - Whether the tenant is active (default: true).
   * @param {Date} tenant.CreatedUtc - Creation timestamp in UTC (default: current time).
   * @param {Object} collection - Collection metadata.
   * @param {number} collection.id - Collection ID.
   * @param {string} collection.GUID - Collection GUID (automatically generated if not provided).
   * @param {string} collection.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} collection.Name - Name of the collection.
   * @param {boolean} collection.AllowOverwrites - Indicates whether source documents can be overwritten (default is true).
   * @param {string} collection.AdditionalData - Additional data (optional).
   * @param {Date} collection.CreatedUtc - Creation timestamp in UTC.
   * @param {Object} repo - Data repository.
   * @param {number} repo.Id - ID (must be greater than 0).
   * @param {string} repo.GUID - Data repository GUID (automatically generated if not provided).
   * @param {string} repo.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} repo.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} repo.Name - Name of the repository (default is "My file repository").
   * @param {string} repo.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {boolean} repo.UseSsl - Boolean flag to enable SSL (default is false).
   * @param {boolean} repo.IncludeSubdirectories - Include subdirectories (default is true).
   * @param {string} repo.DiskDirectory - Disk directory (default is null).
   * @param {string} repo.S3EndpointUrl - S3 endpoint URL (default is null).
   * @param {string} repo.S3BaseUrl - S3 base URL (default is null).
   * @param {string} repo.S3AccessKey - S3 access key (default is null).
   * @param {string} repo.S3SecretKey - S3 secret key (default is null).
   * @param {string} repo.S3BucketName - S3 bucket name (default is null).
   * @param {string} repo.S3Region - S3 region (default is null).
   * @param {string} repo.AzureEndpointUrl - Azure endpoint URL (default is null).
   * @param {string} repo.AzureAccountName - Azure account name (default is null).
   * @param {string} repo.AzureContainerName - Azure container name (default is null).
   * @param {string} repo.AzureAccessKey - Azure access key (default is null).
   * @param {string} repo.CifsHostname - CIFS hostname (default is null).
   * @param {string} repo.CifsUsername - CIFS username (default is null).
   * @param {string} repo.CifsPassword - CIFS password (default is null).
   * @param {string} repo.CifsShareName - CIFS share name (default is null).
   * @param {string} repo.NfsHostname - NFS hostname (default is null).
   * @param {number} repo.NfsUserId - NFS user ID (must be non-negative).
   * @param {number} repo.NfsGroupId - NFS group ID (must be non-negative).
   * @param {string} repo.NfsShareName - NFS share name (default is null).
   * @param {string} repo.NfsVersion - NFS version (default is null).
   * @param {Date} repo.CreatedUtc - Created timestamp (default is current UTC time).
   * @param {Object} obj - Object metadata.
   * @param {string} obj.guid - The GUID of the object.
   * @param {string} obj.parentGUID - The parent GUID.
   * @param {string} obj.tenantGUID - The tenant GUID.
   * @param {string} obj.tenantName - The tenant name.
   * @param {string} obj.nodeGUID - The node GUID.
   * @param {string} obj.poolGUID - The pool GUID.
   * @param {string} obj.bucketGUID - The bucket GUID.
   * @param {string} obj.bucketName - The bucket name.
   * @param {string} obj.ownerGUID - The owner GUID.
   * @param {string} obj.encryptionKeyGUID - The encryption key GUID.
   * @param {string} obj.dataCatalogDocumentGUID - The data catalog document GUID.
   * @param {string} obj.dataRepositoryGUID - The data repository GUID.
   * @param {string} obj.graphRepositoryGUID - The graph repository GUID.
   * @param {string} obj.graphNodeIdentifier - The graph node identifier.
   * @param {string} obj.dataFlowRequestGUID - The data flow request GUID.
   * @param {string} obj.key - The key.
   * @param {string} obj.version - The version.
   * @param {boolean} obj.isLatest - Indicates if this is the latest version.
   * @param {boolean} obj.isDeleteMarker - Indicates if this is a delete marker.
   * @param {boolean} obj.isLocal - Indicates if the object is local.
   * @param {string} obj.contentType - The content type.
   * @param {DocumentTypeEnum} obj.documentType - The document type.
   * @param {number} obj.contentLength - The length of the content.
   * @param {string} obj.sourceUrl - The source URL.
   * @param {string} obj.md5Hash - The MD5 hash.
   * @param {string} obj.sha1Hash - The SHA1 hash.
   * @param {string} obj.sha256Hash - The SHA256 hash.
   * @param {Date|null} obj.expirationUtc - The expiration timestamp in UTC.
   * @param {Date} obj.lastAccessUtc - The last access timestamp in UTC.
   * @param {Date} obj.lastModifiedUtc - The last modified timestamp in UTC.
   * @param {Date} obj.createdUtc - The creation timestamp in UTC.
   * @param {byte[]} obj.data - The data of the object.
   * @param {Object} mdRule - Metadata rule.
   * @param {string} mdRule.GUID - Metadata rule GUID (automatically generated if not provided).
   * @param {string} mdRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} mdRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} mdRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} mdRule.Name - Name of the rule (default is null).
   * @param {string} mdRule.ContentType - Content type (default is "text/plain").
   * @param {string} mdRule.Prefix - Prefix (default is null).
   * @param {string} mdRule.Suffix - Suffix (default is null).
   * @param {string} mdRule.ProcessingEndpoint - Processing endpoint (default is localhost).
   * @param {string} mdRule.CleanupEndpoint - Cleanup endpoint (default is localhost).
   * @param {string} mdRule.TypeDetectorEndpoint - Type detector endpoint (default is localhost).
   * @param {string} mdRule.SemanticCellEndpoint - Semantic cell endpoint (default is localhost).
   * @param {number} mdRule.MaxChunkContentLength - Maximum chunk content length (default is 512).
   * @param {number} mdRule.ShiftSize - Shift size (default is 512).
   * @param {string} mdRule.UdrEndpoint - UDR endpoint (default is localhost).
   * @param {string} mdRule.DataCatalogType - Data catalog type (default is DataCatalogTypeEnum.Lexi).
   * @param {string} mdRule.DataCatalogEndpoint - Data catalog endpoint (default is localhost).
   * @param {string} mdRule.DataCatalogCollection - Data catalog collection identifier (default is null).
   * @param {string} mdRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {number} mdRule.TopTerms - Number of top terms to request (default is 25).
   * @param {boolean} mdRule.CaseInsensitive - Enable case insensitive processing (default is true).
   * @param {boolean} mdRule.IncludeFlattened - Enable inclusion of flattened representation (default is true).
   * @param {string} mdRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {number} mdRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} mdRule.RetentionMinutes - Minutes to retain generated document (default is null).
   * @param {Date} mdRule.CreatedUtc - Creation timestamp (default is current UTC time).
   * @param {Object} embedRule - Embeddings rule.
   * @param {string} embedRule.GUID - Embeddings rule GUID (automatically generated if not provided).
   * @param {string} embedRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} embedRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} embedRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} embedRule.Name - Name of the rule (default is null).
   * @param {string} embedRule.ContentType - Content type (default is "text/plain").
   * @param {string} embedRule.Prefix - Prefix (default is null).
   * @param {string} embedRule.Suffix - Suffix (default is null).
   * @param {string} embedRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {string} embedRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {string} embedRule.VectorRepositoryGUID - Vector repository GUID (default is null).
   * @param {string} embedRule.DataFlowEndpoint - Data flow endpoint (default is localhost).
   * @param {string} embedRule.EmbeddingsGenerator - Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy).
   * @param {string} embedRule.GeneratorUrl - Embeddings generator URL (default is localhost).
   * @param {string} embedRule.GeneratorApiKey - Embeddings provider API key (default is null).
   * @param {number} embedRule.BatchSize - Maximum number of chunks to process per request (default is 16).
   * @param {number} embedRule.MaxGeneratorTasks - Maximum number of parallel embeddings generation tasks (default is 16).
   * @param {number} embedRule.MaxRetries - Maximum number of retries per task (default is 3).
   * @param {number} embedRule.MaxFailures - Maximum number of failures before failing the operation (default is 3).
   * @param {string} embedRule.VectorStoreUrl - Vector store URL (default is localhost).
   * @param {number} embedRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} embedRule.RetentionMinutes - Minutes to retain the generated document (default is null).
   * @param {Date} embedRule.CreatedUtc - Creation timestamp (default is current UTC time).
   * @param {Object} vectorRepo - Vector repository.
   * @param {string} vectorRepo.GUID - Repository GUID (automatically generated if not provided).
   * @param {string} vectorRepo.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} vectorRepo.name - Name of the repository (default is 'My vector repository').
   * @param {string} vectorRepo.repositoryType - Type of vector repository.
   * @param {string} vectorRepo.endpointUrl - Endpoint URL for the repository.
   * @param {string} vectorRepo.apiKey - API key for authentication.
   * @param {string} vectorRepo.model - Embedding model to be used (default is 'all-MiniLM-L6-v2').
   * @param {number} vectorRepo.dimensionality - Dimensionality of embeddings.
   * @param {string} vectorRepo.databaseHostname - Hostname of the database.
   * @param {string} vectorRepo.databaseName - Name of the database.
   * @param {string} vectorRepo.databaseTable - Table name in the database.
   * @param {number} vectorRepo.databasePort - Database port.
   * @param {string} vectorRepo.databaseUser - Database username.
   * @param {string} vectorRepo.databasePassword - Database password.
   * @param {string} vectorRepo.promptPrefix - Prefix to prepend to prompts.
   * @param {string} vectorRepo.promptSuffix - Suffix to append to prompts.
   * @param {Date} vectorRepo.createdUtc - Creation timestamp in UTC.
   * @param {Object} graphRepo - Graph repository.
   * @param {string} graphRepo.GUID - GUID of the graph repository (auto-generated if not provided).
   * @param {string} graphRepo.TenantGUID - Tenant GUID (auto-generated if not provided).
   * @param {string} graphRepo.Name - Name of the graph.
   * @param {string} graphRepo.RepositoryType - Type of graph graph.
   * @param {string} graphRepo.EndpointUrl - Endpoint URL.
   * @param {string} graphRepo.ApiKey - API key for the graph.
   * @param {string} graphRepo.Username - Username for authentication.
   * @param {string} graphRepo.Password - Password for authentication.
   * @param {string} graphRepo.Hostname - Hostname for the graph.
   * @param {number} graphRepo.Port - Port number for the graph (default is 0).
   * @param {string} graphRepo.GraphIdentifier - Identifier of the graph.
   * @param {Date} graphRepo.CreatedUtc - Creation timestamp in UTC (defaults to current UTC time).
   * @param {AbortSignal} token - Cancellation token.
   *
   */
  async cleanupDataCrawler(tenant, collection, repo, obj, mdRule, embedRule, vectorRepo, graphRepo, token = null) {
    if (!obj) throw new Error('Object metadata is required.');
    if (!mdRule) throw new Error('Metadata rule is required.');

    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/processing/cleanup';

    try {
      // Prepare the request payload
      const cleanupReq = {
        Tenant: tenant,
        Collection: collection,
        DataRepository: repo,
        Object: obj,
        MetadataRule: mdRule,
        EmbeddingsRule: embedRule,
        VectorRepository: vectorRepo,
        GraphRepository: graphRepo,
      };
      const json = JSON.stringify(cleanupReq);
      // Log the request if needed
      if (LoggerInstance.logRequests) {
        LoggerInstance.log(SeverityEnum.Debug, `request: \n${json}`);
      }

      // Use the `create` method to send the request
      const response = await this.post(url, json, CleanupResponse, token);

      if (LoggerInstance.logResponses) {
        LoggerInstance.log(SeverityEnum.Debug, `response :\n${JSON.stringify(response)}`);
      }

      if (response) {
        LoggerInstance.log(SeverityEnum.Debug, `success reported from ${url}`);

        // Return the deserialized response body
        return response;
      } else {
        LoggerInstance.log(SeverityEnum.Warn, `non-success reported from ${url}`);

        // Handle non-success response
        return response || null;
      }
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Warn, `exception while interacting with ${url}: ${error.message}`);
      return {
        Success: false,
        Error: {
          ApiErrorEnum: ApiErrorEnum.InternalError,
          ErrorDetails: null,
        },
      };
    }
  }
}
