/**
 * Storage service.
 * @module base/ViewStorageSdk
 * @version 0.1.0
 */
export default class ViewStorageSdk extends ViewSdkBase {
    /**
     * @constructor
     * @param {string} guid
     * @param {CancellationToken} token
     * @param {string} endpoint
     */
    /**
     * Retrieve List of Buckets.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveAllBuckets: (cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
    /**
     * Retrieve List of Objects.
     * @param {string} guid - The GUID of the BucketMetadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveBuckets: (guid: string, cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
    /**
     * Retrieve bucket by Guid.
     *
     * @param {string} guid - The GUID of the bucket to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveBucketByGuid: (guid: string, cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
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
    writeBucket: (metadata: {
        PoolGUID: string;
        Name: string;
        RegionString: string;
        Versioning: boolean;
    }, cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
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
    updateBucket: (metadata: {
        GUID: string;
        TenantGUID: string;
        PoolGUID: string;
        OwnerGUID: string;
        Name: string;
        RegionString: string;
        Versioning: boolean;
        RetentionMinutes: number | null;
        LastAccessUtc: Date;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
    /**
     * Delete a bucket.
     *
     * @param {string} guid - The GUID of the bucket to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
     * @throws {Error} If the GUID is null or empty.
     */
    deleteBucket: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieve tag by bucketGuid.
     *
     * @param {string} guid - GUID of the bucket.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveTagByBucket: (guid: string, cancelToken?: object) => Promise<TagMetaData | null | ApiErrorResponse>;
    /**
     * Delete tag by bucketGuid.
     *
     * @param {string} guid - GUID of the bucket to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise that resolves when the bucket is deleted.
     * @throws {Error} If the guid is null or empty.
     */
    deleteTag: (guid: string, cancelToken?: object) => Promise<void>;
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
    writeTagForBucket: (guid: string, tagMetaData: {
        Key: string;
        Value: string;
    }, cancelToken?: object) => Promise<ObjectMetadata | null | ApiErrorResponse>;
    /**
     * Retrieve tag by bucketGuid.
     *
     * @param {string} guid - GUID of the bucket.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<AclMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveBucketByACL: (guid: string, cancelToken?: object) => Promise<AclMetaData | null | ApiErrorResponse>;
    /**
     * Delete acl by bucketGuid.
     *
     * @param {string} guid - GUID of the bucket to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
     * @throws {Error} If the guid is null or empty.
     */
    deleteAcl: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
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
    writeAclForBucket: (guid: string, aclMetaData: {
        Owner: any;
        Users: any[];
        Entries: any[];
    }, cancelToken?: object) => Promise<AclEntry | null | ApiErrorResponse>;
    /**
     * Check if a Object exists by its GUID.
     *
     * @param {string} guid - The GUID of the node to retrieve.
     * @param {string} objectValue - The GUID of the node to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    existsObject: (guid: string, objectValue: string, cancelToken?: object) => Promise<ObjectMetadata | null | ApiErrorResponse>;
    /**
     * Retrieve Objects.
     *
     * @param {string} bucketGuid - The GUID of the bucket.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<String|null|ApiErrorResponse>} A promise resolving to the data retrieved or null if the object is not found.
     * @throws {Error} If the GUID is null or empty.
     */
    retrieveObjects: (bucketGuid: string, cancelToken?: object) => Promise<string | null | ApiErrorResponse>;
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
    writeObject: (bucketGUID: string, key: string, data: string, cancelToken?: object) => Promise<ObjectMetadata | null | ApiErrorResponse>;
    /**
     * Write expiration .
     * @param {string} bucketGUID - The GUID of the bucket.
     * @param {Object} objectMetadata Information about the Object .
     * @property {Date|null} Object.ExpirationUtc - The expiration timestamp in UTC.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
     * @throws {Error} If the node is null or empty.
     */
    writeExpiration: (bucketGUID: string, key: any, objectMetadata: any, cancelToken?: object) => Promise<ObjectMetadata | null | ApiErrorResponse>;
    /**
     * Retrieve data by key.
     *
     * @param {string} bucketGuid - The GUID of the bucket.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<String|null|ApiErrorResponse>} A promise resolving to the data retrieved or null if the object is not found.
     * @throws {Error} If the GUID is null or empty.
     */
    retrieveData: (bucketGuid: string, key: any, cancelToken?: object) => Promise<string | null | ApiErrorResponse>;
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
    retrieveRange: (bucketGuid: string, key: string, cancelToken?: object, range: any) => Promise<ObjectMetadata | null | ApiErrorResponse>;
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
    retrieveObjectMetadata: (bucketGuid: string, key: string, cancelToken?: object) => Promise<ObjectMetadata | null | ApiErrorResponse>;
    /**
     * Delete a Object by its key.
     *
     * @param {string} bucketGuid - The GUID of the bucket.
     * @param {string} key - The key of the object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the user is deleted.
     * @throws {Error} If the GUID is null or empty.
     */
    deleteObject: (bucketGuid: string, key: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
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
    writeTagForObject: (bucketGUID: string, key: any, tagMetaData: {
        Key: string;
        Value: string;
    }, cancelToken?: object) => Promise<TagMetaData | null | ApiErrorResponse>;
    /**
     * Retrieve a tag by its key.
     *
     * @param {string} bucketGUID - The GUID of the bucket.
     * @param {string} key - The key of the tag to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetaData object or null if not found.
     * @throws {Error} If the bucketGUID or key is null or empty.
     */
    retrieveTagByObject: (bucketGUID: string, key: string, cancelToken?: object) => Promise<TagMetaData | null | ApiErrorResponse>;
    /**
     * Retrieve tag by bucketGuid.
     *
     * @param {string} bucketguid - GUID of the bucket.
     * @param, {string} key - Key of the object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<AclMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveObjectByACL: (key: any, bucketGuid: any, cancelToken?: object) => Promise<AclMetaData | null | ApiErrorResponse>;
    /**
     * Delete acl by bucketGuid.
     *
     * @param {string} guid - GUID of the bucket to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
     * @throws {Error} If the guid is null or empty.
     */
    deleteAclObject: (key: any, bucketGuid: any, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
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
    writeAclForObject: (key: any, bucketGuid: any, aclMetaData: {
        Owner: any;
        Users: any[];
        Entries: any[];
    }, cancelToken?: object) => Promise<AclEntry | null | ApiErrorResponse>;
    /**
     * Create a Multipart Upload.
     * @param {Object} multipartUpload Information about the multipart upload.
     * @param {string} multipartUpload.key - The key of the tag to retrieve.
     */
    createMultipartUpload: (bucketGUID: any, multipartUpload: {
        key: string;
    }, cancelToken: any) => Promise<import("../../models/ApiErrorResponse").default | {
        key: string;
    }>;
    /**
     * Retrieve list of Multipart Upload by its GUID.
     *
     * @param {string} bucketGUID - The GUID of the bucket to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<MultipartUpload|null|ApiErrorResponse>} A promise resolving to the MultipartUpload object or null if not found.
     * @throws {Error} If the GUID is null or empty.
     */
    retrieveAllMultipartUpload: (bucketGUID: string, cancelToken?: object) => Promise<MultipartUpload | null | ApiErrorResponse>;
    /**
     * Retrieve a Multipart Upload by its GUID.
     *
     * @param {string} bucketGUID - The GUID of the bucket to retrieve.
     * @param {string} key - The key of the tag to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<MultipartUpload|null|ApiErrorResponse>} A promise resolving to the MultipartUpload object or null if not found.
     * @throws {Error} If the GUID is null or empty.
     */
    retrieveMultipartUpload: (bucketGUID: string, key: string, cancelToken?: object) => Promise<MultipartUpload | null | ApiErrorResponse>;
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
    retrievePartMultipartUpload: (bucketGUID: string, key: string, partNumber: number, cancelToken?: object) => Promise<MultipartUpload | null | ApiErrorResponse>;
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
    deletePart: (bucketGUID: string, key: string, partNumber: number, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Delete a Multipart Upload by its key .
     *
     * @param {string} bucketGUID - The GUID of the bucket to retrieve.
     * @param {string} key - The key of the Multipart Upload to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Boolean|ApiErrorResponse>} A promise resolving when the user is deleted.
     * @throws {Error} If the GUID is null or empty.
     */
    deleteMultipartUpload: (bucketGUID: string, key: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
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
    uploadPart: (bucketGUID: string, key: any, partNumber: number, data: string, cancelToken?: object) => Promise<TagMetaData | null | ApiErrorResponse>;
}
import ViewSdkBase from '../ViewSDKBase';
import BucketMetadata from '../../models/BucketMetadata';
import TagMetaData from '../../models/TagMetadata';
import ObjectMetadata from '../../models/ObjectMetadata';
import AclMetaData from '../../models/AclMetaData';
import AclEntry from '../../models/AclEntry';
import MultipartUpload from '../../models/MultipartUpload';
