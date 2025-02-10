import BucketMetadata from '../../models/BucketMetadata';
import { GenExceptionHandlersInstance } from '../../exception/GenericExcerptionHandelrs';
import ViewSdkBase from '../ViewSDKBase';
import TagMetaData from '../../models/TagMetadata';
import ObjectMetadata from '../../models/ObjectMetadata';
import MultipartUpload from '../../models/MultipartUpload';
import UserMaster from '../../models/UserMaster';
import AclMetaData from '../../models/AclMetaData';
import AclEntry from '../../models/AclEntry';
import EnumerationResult from '../../models/EnumerationResult';
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

  // region Services

  /**
   * Retrieve List of Buckets.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveAllBuckets = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets';
    return await this.retrieveMany(url, BucketMetadata, cancelToken);
  };

  // region Buckets

  /**
   * Retrieve List of Objects.
   * @param {string} guid - The GUID of the BucketMetadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveBuckets = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid;
    return await this.retrieveMany(url, BucketMetadata, cancelToken);
  };

  /**
   * Retrieve bucket by Guid.
   *
   * @param {string} guid - The GUID of the bucket to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveBucketByGuid = async (guid, cancelToken) => {
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
  writeBucket = async (metadata, cancelToken) => {
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
  retrieveTagByBucket = async (guid, cancelToken) => {
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
  deleteTag = async (guid, cancelToken) => {
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
  writeTagForBucket = async (guid, tagMetaData, cancelToken) => {
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
  retrieveBucketByACL = async (guid, cancelToken) => {
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
  deleteAcl = async (guid, cancelToken) => {
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
  writeAclForBucket = async (guid, aclMetaData, cancelToken) => {
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
   * @param {Object} objectMetadata Information about the Object .
   * @property {Date|null} Object.ExpirationUtc - The expiration timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  writeExpiration = async (bucketGUID, key, objectMetadata, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    if (!objectMetadata) {
      GenExceptionHandlersInstance.ArgumentNullException('objectMetadata');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key + '?expiration';
    return await this.update(url, objectMetadata, ObjectMetadata, cancelToken);
  };

  /**
   * Retrieve data by key.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<String|null|ApiErrorResponse>} A promise resolving to the data retrieved or null if the object is not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrieveData = async (bucketGuid, key, cancelToken) => {
    if (!bucketGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGuid');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGuid + '/objects/' + key;
    // Use the `retrieve` method to get the data for the object key
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve object Range.
   *
   * @param {string} bucketGuid - The GUID of the bucket.
   * @param {string} key - The key of the object.
   * @param {object} objectMetadata - The metadata of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the UserMaster object or null if not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrieveRange = async (bucketGuid, key, cancelToken, range) => {
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
    return await this.retrieve(url, null, cancelToken, { Range: range });
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
   * @param {Object} tagMetaData Information about the tag .
   * @param {string} tagMetaData.Key - Key associated with the metadata.
   * @param {string} tagMetaData.Value - Value associated with the metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the created TagMetaData object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  writeTagForObject = async (bucketGUID, key, tagMetaData, cancelToken) => {
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
   * Retrieve a tag by its key.
   *
   * @param {string} bucketGUID - The GUID of the bucket.
   * @param {string} key - The key of the tag to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetaData object or null if not found.
   * @throws {Error} If the bucketGUID or key is null or empty.
   */
  retrieveTagByObject = async (bucketGUID, key, cancelToken) => {
    if (!bucketGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('bucketGUID');
    }
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucketGUID + '/objects/' + key + '?tags';
    // Use the `retrieve` method to get the user
    return await this.retrieve(url, UserMaster, cancelToken);
  };

  /**
   * Retrieve tag by bucketGuid.
   *
   * @param {string} bucketguid - GUID of the bucket.
   * @param, {string} key - Key of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveObjectByACL = async (key, bucketGuid, cancelToken) => {
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
   * @param {string} guid - GUID of the bucket to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
   * @throws {Error} If the guid is null or empty.
   */
  deleteAclObject = async (key, bucketGuid, cancelToken) => {
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
   * @param {string} guid - The GUID of the bucket.
   * @param {Object} aclMetaData Information about the acl .
   * @param {Object} aclMetaData.Owner - Key associated with the metadata.
   * @param {Array} aclMetaData.Users - List of users, each using UserMaster class.
   * @param {Array} aclMetaData.Entries - List of access control entries.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<AclEntry|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
   * @throws {Error} If the ObjectMetadata is null or empty.
   */
  writeAclForObject = async (key, bucketGuid, aclMetaData, cancelToken) => {
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
  retrieveAllMultipartUpload = async (bucketGUID, cancelToken) => {
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
  retrievePartMultipartUpload = async (bucketGUID, key, partNumber, cancelToken) => {
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
  deletePart = async (bucketGUID, key, partNumber, cancelToken) => {
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
  uploadPart = async (bucketGUID, key, partNumber, data, cancelToken) => {
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
}
