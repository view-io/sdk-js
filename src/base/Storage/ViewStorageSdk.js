import BucketMetadata from '../../models/BucketMetadata';
import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';
import ViewSdkBase from '../ViewSDKBase';
import TagMetaData from '../../models/TagMetadata';
import ObjectMetadata from '../../models/ObjectMetadata';
import MultipartUpload from '../../models/MultipartUpload';
import UserMaster from '../../models/UserMaster';
import AclMetaData from '../../models/AclMetaData';
import AclEntry from '../../models/AclEntry';
import EnumerationResult from '../../models/EnumerationResult';
import StoragePool from '../../models/StoragePool';
/**
 * Storage service.
 * @module base/ViewStorageSdk
 * @version 0.1.0
 */
export default class ViewStorageSdk extends ViewSdkBase {
  /**
   * Constructs a new StorageApi.
   * @alias module:base/StorageApi
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

  // region Pool
  /**
   * Create a pool.
   *
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
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the created StoragePool object or null.
   * @throws {Error} If the pool is null.
   */
  createStoragePool = async (pool, cancelToken) => {
    if (!pool) {
      GenExceptionHandlersInstance.ArgumentNullException('pool');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools';
    return await this.create(url, pool, StoragePool, cancelToken);
  };

  /**
   * Check if a pool exists.
   *
   * @param {string} guid - The GUID of the pool to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the pool exists, or false if not.
   * @throws {Error} If the guid is null or empty.
   */
  existsStoragePool = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a pool by its GUID.
   *
   * @param {string} guid - The GUID of the pool to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the StoragePool object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveStoragePool = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools/' + guid;
    return await this.retrieve(url, StoragePool, cancelToken);
  };

  /**
   * Retrieve all pools.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<StoragePool>|ApiErrorResponse>} A promise resolving to an array of StoragePool objects.
   */
  retrieveStoragePools = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools';
    return await this.retrieveMany(url, StoragePool, cancelToken);
  };

  /**
   * Update a pool.
   *
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
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the updated StoragePool object or null.
   * @throws {Error} If the pool is null.
   */
  updateStoragePool = async (pool, cancelToken) => {
    if (!pool) {
      GenExceptionHandlersInstance.ArgumentNullException('pool');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools/' + pool.GUID;
    return await this.update(url, pool, StoragePool, cancelToken);
  };

  /**
   * Delete a pool by its GUID.
   *
   * @param {string} guid - The GUID of the pool to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
   * @throws {Error} If the guid is null or empty.
   */
  deleteStoragePool = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools/' + guid;
    return await this.deleteRaw(url, cancelToken);
  };

  // region Services

  /**
   * Retrieve List of Buckets.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveBuckets = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets';
    return await this.retrieveMany(url, BucketMetadata, cancelToken);
  };

  /**
   * Enumerate all buckets in the tenant.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata[]|null|ApiErrorResponse>} A promise resolving to an array of BucketMetadata objects or null.
   */
  enumerateBucketObjects = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  // region Buckets

  /**
   * Retrieve bucket by Guid.
   *
   * @param {string} guid - The GUID of the bucket to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveBucketMetadata = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid + '?md';
    return await this.retrieve(url, BucketMetadata, cancelToken);
  };

  /**
   * Write Bucket data.
   * @param {Object} metadata Information about the bucket metadata.
   * @param {string} metadata.PoolGUID - Pool GUID (automatically generated if not provided).
   * @param {string} metadata.Name - Name of the bucket.
   * @param {string} metadata.RegionString - Region string (default is 'us-west-1').
   * @param {boolean} metadata.Versioning - Enable or disable versioning (default is true).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the created Bucket object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  createBucket = async (metadata, cancelToken) => {
    if (!metadata) {
      GenExceptionHandlersInstance.ArgumentNullException('metadata');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets';
    return await this.update(url, metadata, BucketMetadata, cancelToken);
  };

  /**
   * Update Bucket data.
   * @param {Object} metadata Information about the bucket metadata.
   * @param {string} metadata.GUID - Bucket GUID (automatically generated if not provided).
   * @param {string} metadata.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} metadata.PoolGUID - Pool GUID (automatically generated if not provided).
   * @param {string} metadata.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} metadata.Name - Name of the bucket.
   * @param {string} metadata.RegionString - Region string (default is 'us-west-1').
   * @param {boolean} metadata.Versioning - Enable or disable versioning (default is true).
   * @param {number|null} metadata.RetentionMinutes - Retention in minutes (optional).
   * @param {Date} metadata.LastAccessUtc - Last access timestamp in UTC.
   * @param {Date} metadata.CreatedUtc - Created timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the created Bucket object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  updateBucket = async (metadata, cancelToken) => {
    if (!metadata) {
      GenExceptionHandlersInstance.ArgumentNullException('metadata');
    }
    if (!metadata.GUID) {
      GenExceptionHandlersInstance.ArgumentNullException('metadata.GUID');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + metadata.GUID;
    return await this.update(url, metadata, BucketMetadata, cancelToken);
  };

  /**
   * Delete a bucket.
   *
   * @param {string} guid - The GUID of the bucket to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
   * @throws {Error} If the GUID is null or empty.
   */
  deleteBucket = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid;
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Retrieve tag by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveBucketTags = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid + '?tags';
    return await this.retrieve(url, TagMetaData, cancelToken);
  };

  /**
   * Delete tag by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the bucket is deleted.
   * @throws {Error} If the guid is null or empty.
   */
  deleteBucketTags = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid + '?tags';
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Write Tag .
   * @param {string} guid - The GUID of the bucket.
   * @param {Object} tagMetaData Information about the tag .
   * @param {string} tagMetaData.Key - Key associated with the metadata.
   * @param {string} tagMetaData.Value - Value associated with the metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {Error} If the ObjectMetadata is null or empty.
   */
  createBucketTags = async (guid, tagMetaData, cancelToken) => {
    if (!tagMetaData) {
      GenExceptionHandlersInstance.ArgumentNullException('tagMetaData');
    }
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid + '?tags';
    return await this.update(url, tagMetaData, TagMetaData, cancelToken);
  };

  /**
   * Retrieve tag by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveBucketACL = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid + '?acl';
    return await this.retrieve(url, AclMetaData, cancelToken);
  };

  /**
   * Delete acl by bucketGuid.
   *
   * @param {string} guid - GUID of the bucket to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
   * @throws {Error} If the guid is null or empty.
   */
  deleteBucketACL = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid + '?acl';
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Write Acl for bucket.
   * @param {string} guid - The GUID of the bucket.
   * @param {Object} aclMetaData Information about the acl .
   * @param {Object} aclMetaData.Owner - Key associated with the metadata.
   * @param {Array} aclMetaData.Users - List of users, each using UserMaster class.
   * @param {Array} aclMetaData.Entries - List of access control entries.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclEntry|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {Error} If the ObjectMetadata is null or empty.
   */
  createBucketACL = async (guid, aclMetaData, cancelToken) => {
    if (!aclMetaData) {
      GenExceptionHandlersInstance.ArgumentNullException('aclMetaData');
    }
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid + '?acl';
    return await this.update(url, aclMetaData, AclEntry, cancelToken);
  };

  // region Objects

  /**
   * Check if a Object exists by its GUID.
   *
   * @param {string} guid - The GUID of the node to retrieve.
   * @param {string} objectValue - The GUID of the node to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  existsObject = async (guid, objectValue, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid + '/objects/' + objectValue;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve Objects.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<String|null|ApiErrorResponse>} A promise resolving to the data retrieved or null if the object is not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrieveObjects = async (bucketGuid, cancelToken) => {
    if (!bucketGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGuid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGuid;
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  /**
   * Write Object non-chuncked .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {Object} ObjectMetadata Information about the Object .
   * @param {string} data Information about the Object .
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata  |null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the ObjectMetadata is null or empty.
   */
  writeObject = async (bucketGUID, key, data, cancelToken) => {
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key;
    return await this.create(url, data, ObjectMetadata, cancelToken);
  };

  // /**
  // * Write Object non-chuncked .
  // * @param {string} bucketGUID - The GUID of the bucket.
  // * @param {string} key - The key of the object.
  // * @param {string} data Information about the Object .
  // * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
  // * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
  // * @throws {Error} If the node is null or empty.
  // */
  // writeObject = async (bucketGUID, key, data, cancelToken) => {
  //     if (!key) {
  //         GenExceptionHandlersInstance.ArgumentNullException('key')
  //     }
  //     if (!bucketGUID) {
  //         GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
  //     }
  //     const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key + '?expiration';
  //     return await this.create(url, data, null, cancelToken);
  // };

  /**
   * Write expiration .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {Object} object Information about the Object .
   * @property {string} object.ExpirationUtc - The expiration timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  writeObjectExpiration = async (bucketGUID, key, object, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    if (!object?.ExpirationUtc) {
      GenExceptionHandlersInstance.ArgumentNullException('ExpirationUtc');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key + '?expiration';
    return await this.update(url, object, ObjectMetadata, cancelToken);
  };

  /**
   * Retrieve data by key.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<String|null|ApiErrorResponse>} A promise resolving to the data retrieved or null if the object is not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrieveObjectData = async (bucketGuid, key, cancelToken) => {
    if (!bucketGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key;
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieve(url, undefined, cancelToken);
  };

  /**
   * Retrieve object Range.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {string} range - The range of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<string|null|ApiErrorResponse>} A promise resolving to the UserMaster object or null if not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrieveObjectDataInRange = async (bucketGuid, key, range, cancelToken) => {
    if (!bucketGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    if (!range) {
      GenExceptionHandlersInstance.ArgumentNullException('range');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key;
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieve(url, undefined, cancelToken, { Range: range });
  };

  /**
   * Retrieve object by metadata.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {object} objectMetadata - The metadata of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the UserMaster object or null if not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrieveObjectMetadata = async (bucketGuid, key, cancelToken) => {
    if (!bucketGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key + '?md';
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieve(url, ObjectMetadata, cancelToken);
  };

  /**
   * Delete a Object by its key.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {Error} If the GUID is null or empty.
   */
  deleteObject = async (bucketGuid, key, cancelToken) => {
    if (!bucketGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key;
    // Use the `delete` method to remove the object by key
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Write Tag .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {Array<{Key: string, Value: string}>} tagMetaData Information about the tag .
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the created TagMetaData object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  createObjectTags = async (bucketGUID, key, tagMetaData, cancelToken) => {
    if (!tagMetaData) {
      GenExceptionHandlersInstance.ArgumentNullException('tagMetaData');
    }
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key + '?tags';
    return await this.update(url, tagMetaData, TagMetaData, cancelToken);
  };

  /**
   * Delete tags from an object.
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the tags are deleted.
   * @throws {Error} If the bucketGUID or key is null or empty.
   */
  deleteObjectTags = async (bucketGUID, key, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key + '?tags';
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Retrieve a tag by its key.
   *
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the tag to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetaData object or null if not found.
   * @throws {Error} If the bucketGUID or key is null or empty.
   */
  retrieveObjectTags = async (bucketGUID, key, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key + '?tags';
    // Use the `retrieve` method to get the user
    return await this.retrieve(url, TagMetaData, cancelToken);
  };

  /**
   * Retrieve tag by bucketGuid.
   *
   * @param {string} bucketguid - GUID of the bucket.
   * @param {string} key - Key of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveObjectACL = async (bucketGuid, key, cancelToken) => {
    if (!bucketGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key + '?acl';
    return await this.retrieve(url, AclMetaData, cancelToken);
  };

  /**
   * Delete acl by bucketGuid.
   *
   * @param {string} bucketGuid - GUID of the bucket to delete.
   * @param {string} key - Key of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
   * @throws {Error} If the guid is null or empty.
   */
  deleteObjectACL = async (bucketGuid, key, cancelToken) => {
    if (!bucketGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key + '?acl';
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Write Acl for bucket.
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {Object} aclMetaData Information about the acl .
   * @param {Object} aclMetaData.Owner - Key associated with the metadata.
   * @param {Array} aclMetaData.Users - List of users, each using UserMaster class.
   * @param {Array} aclMetaData.Entries - List of access control entries.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclEntry|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {Error} If the ObjectMetadata is null or empty.
   */
  createObjectACL = async (bucketGuid, key, aclMetaData, cancelToken) => {
    if (!aclMetaData) {
      GenExceptionHandlersInstance.ArgumentNullException('aclMetaData');
    }
    if (!bucketGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key + '?acl';
    return await this.update(url, aclMetaData, AclEntry, cancelToken);
  };

  // region Multipart Upload

  /**
   * Create a Multipart Upload.
   * @param {Object} multipartUpload Information about the multipart upload.
   * @param {string} multipartUpload.key - The key of the tag to retrieve.
   */
  createMultipartUpload = async (bucketGUID, multipartUpload, cancelToken) => {
    if (!multipartUpload) {
      GenExceptionHandlersInstance.ArgumentNullException('multipartUpload');
    }
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/uploads';
    return await this.create(url, multipartUpload, MultipartUpload, cancelToken);
  };

  /**
   * Retrieve list of Multipart Upload by its GUID.
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MultipartUpload|null|ApiErrorResponse>} A promise resolving to the MultipartUpload object or null if not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrieveMultipartUploads = async (bucketGUID, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/uploads';
    // Use the `retrieve` method to get list of Multipart Upload
    return await this.retrieveMany(url, MultipartUpload, cancelToken);
  };

  /**
   * Retrieve a Multipart Upload by its GUID.
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {string} key - The key of the tag to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MultipartUpload|null|ApiErrorResponse>} A promise resolving to the MultipartUpload object or null if not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrieveMultipartUpload = async (bucketGUID, key, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/uploads/' + key;
    // Use the `retrieve` method to get the object
    return await this.retrieve(url, MultipartUpload, cancelToken);
  };

  /**
   * Retrieve a part of a Multipart Upload by its key and part number.
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {number} partNumber - The part number of the Multipart Upload to retrieve.
   * @param {string} key - The key of the Multipart Upload to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MultipartUpload|null|ApiErrorResponse>} A promise resolving to the MultipartUpload object or null if not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrievePartOfMultipartUpload = async (bucketGUID, key, partNumber, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    if (!partNumber) {
      GenExceptionHandlersInstance.ArgumentNullException('partNumber');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/buckets/' +
      bucketGUID +
      '/uploads/' +
      key +
      '?partNumber=' +
      partNumber;
    // Use the `retrieve` method to get the object
    return await this.retrieve(url, MultipartUpload, cancelToken);
  };

  /**
   * Delete a part of a Multipart Upload by its key and part number.
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {number} partNumber - The part number of the Multipart Upload to retrieve.
   * @param {string} key - The key of the Multipart Upload to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {Error} If the GUID is null or empty.
   */
  deletePartOfMultipartUpload = async (bucketGUID, key, partNumber, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    if (!partNumber) {
      GenExceptionHandlersInstance.ArgumentNullException('partNumber');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/buckets/' +
      bucketGUID +
      '/uploads/' +
      key +
      '?partNumber=' +
      partNumber;
    // Use the `delete` method to remove the Multipart Upload
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Delete a Multipart Upload by its key .
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {string} key - The key of the Multipart Upload to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {Error} If the GUID is null or empty.
   */
  deleteMultipartUpload = async (bucketGUID, key, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/uploads/' + key;
    // Use the `delete` method to remove the Multipart Upload
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Upload Part .
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {Object} tagMetaData Information about the tag .
   * @param {Number} partNumber - Part number.
   * @param {string} data Information about the Object .
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the created TagMetaData object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  uploadPartOfMultipartUpload = async (bucketGUID, key, partNumber, data, cancelToken) => {
    if (!partNumber) {
      GenExceptionHandlersInstance.ArgumentNullException('partNumber');
    }
    if (!data) {
      GenExceptionHandlersInstance.ArgumentNullException('data');
    }
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/buckets/' +
      bucketGUID +
      '/uploads/' +
      key +
      '/parts?partNumber' +
      partNumber;
    return await this.update(url, data, TagMetaData, cancelToken);
  };

  /**
   * Complete a Multipart Upload by its key .
   *
   * @param {string} bucketGUID - The GUID of the bucket to retrieve.
   * @param {string} key - The key of the Multipart Upload to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {Error} If the GUID is null or empty.
   */
  completeMultipartUpload = async (bucketGUID, key, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/uploads/' + key;
    // Use the `delete` method to remove the Multipart Upload
    return await this.create(url, undefined, MultipartUpload, cancelToken);
  };
}
