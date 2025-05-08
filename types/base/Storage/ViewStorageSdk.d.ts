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
    createStoragePool: (pool: {
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
    }, cancelToken?: object) => Promise<StoragePool | null | ApiErrorResponse>;
    /**
     * Check if a pool exists.
     *
     * @param {string} guid - The GUID of the pool to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the pool exists, or false if not.
     * @throws {Error} If the guid is null or empty.
     */
    existsStoragePool: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieve a pool by its GUID.
     *
     * @param {string} guid - The GUID of the pool to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the StoragePool object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveStoragePool: (guid: string, cancelToken?: object) => Promise<StoragePool | null | ApiErrorResponse>;
    /**
     * Retrieve all pools.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<StoragePool>|ApiErrorResponse>} A promise resolving to an array of StoragePool objects.
     */
    retrieveStoragePools: (cancelToken?: object) => Promise<Array<StoragePool> | ApiErrorResponse>;
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
    updateStoragePool: (pool: {
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
    }, cancelToken?: object) => Promise<StoragePool | null | ApiErrorResponse>;
    /**
     * Delete a pool by its GUID.
     *
     * @param {string} guid - The GUID of the pool to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
     * @throws {Error} If the guid is null or empty.
     */
    deleteStoragePool: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Retrieve List of Buckets.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveBuckets: (cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
    /**
     * Enumerate all buckets in the tenant.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<BucketMetadata[]|null|ApiErrorResponse>} A promise resolving to an array of BucketMetadata objects or null.
     */
    retrieveBucketObjects: (guid: any, cancelToken?: object) => Promise<BucketMetadata[] | null | ApiErrorResponse>;
    /**
     * Retrieve bucket by Guid.
     *
     * @param {string} guid - The GUID of the bucket to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the Bucket object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveBucketMetadata: (guid: string, cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
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
    createBucket: (metadata: {
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
    retrieveBucketTags: (guid: string, cancelToken?: object) => Promise<TagMetaData | null | ApiErrorResponse>;
    /**
     * Delete tag by bucketGuid.
     *
     * @param {string} guid - GUID of the bucket to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise that resolves when the bucket is deleted.
     * @throws {Error} If the guid is null or empty.
     */
    deleteBucketTags: (guid: string, cancelToken?: object) => Promise<void>;
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
    createBucketTags: (guid: string, tagMetaData: {
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
    retrieveBucketACL: (guid: string, cancelToken?: object) => Promise<AclMetaData | null | ApiErrorResponse>;
    /**
     * Delete acl by bucketGuid.
     *
     * @param {string} guid - GUID of the bucket to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
     * @throws {Error} If the guid is null or empty.
     */
    deleteBucketACL: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
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
    createBucketACL: (guid: string, aclMetaData: {
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
     * @param {string} key - The key of the object.
     * @param {Object} object Information about the Object .
     * @property {string} object.ExpirationUtc - The expiration timestamp in UTC.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<ObjectMetadata|null|ApiErrorResponse>} A promise resolving to the created ObjectMetadata object or null if the creation fails.
     * @throws {Error} If the node is null or empty.
     */
    writeObjectExpiration: (bucketGUID: string, key: string, object: any, cancelToken?: object) => Promise<ObjectMetadata | null | ApiErrorResponse>;
    /**
     * Retrieve data by key.
     *
     * @param {string} bucketGuid - The GUID of the bucket.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<String|null|ApiErrorResponse>} A promise resolving to the data retrieved or null if the object is not found.
     * @throws {Error} If the GUID is null or empty.
     */
    retrieveObjectData: (bucketGuid: string, key: any, cancelToken?: object) => Promise<string | null | ApiErrorResponse>;
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
    retrieveObjectDataInRange: (bucketGuid: string, key: string, range: string, cancelToken?: object) => Promise<string | null | ApiErrorResponse>;
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
     * @param {Array<{Key: string, Value: string}>} tagMetaData Information about the tag .
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the created TagMetaData object or null if the creation fails.
     * @throws {Error} If the node is null or empty.
     */
    createObjectTags: (bucketGUID: string, key: any, tagMetaData: Array<{
        Key: string;
        Value: string;
    }>, cancelToken?: object) => Promise<TagMetaData | null | ApiErrorResponse>;
    /**
     * Delete tags from an object.
     * @param {string} bucketGUID - The GUID of the bucket.
     * @param {string} key - The key of the object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the tags are deleted.
     * @throws {Error} If the bucketGUID or key is null or empty.
     */
    deleteObjectTags: (bucketGUID: string, key: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Retrieve a tag by its key.
     *
     * @param {string} bucketGUID - The GUID of the bucket.
     * @param {string} key - The key of the tag to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TagMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetaData object or null if not found.
     * @throws {Error} If the bucketGUID or key is null or empty.
     */
    retrieveObjectTags: (bucketGUID: string, key: string, cancelToken?: object) => Promise<TagMetaData | null | ApiErrorResponse>;
    /**
     * Retrieve tag by bucketGuid.
     *
     * @param {string} bucketguid - GUID of the bucket.
     * @param {string} key - Key of the object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<AclMetaData|null|ApiErrorResponse>} A promise resolving to the TagMetadata object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveObjectACL: (bucketGuid: any, key: string, cancelToken?: object) => Promise<AclMetaData | null | ApiErrorResponse>;
    /**
     * Delete acl by bucketGuid.
     *
     * @param {string} bucketGuid - GUID of the bucket to delete.
     * @param {string} key - Key of the object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the bucket is deleted.
     * @throws {Error} If the guid is null or empty.
     */
    deleteObjectACL: (bucketGuid: string, key: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
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
    createObjectACL: (bucketGuid: string, key: string, aclMetaData: {
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
    retrieveMultipartUploads: (bucketGUID: string, cancelToken?: object) => Promise<MultipartUpload | null | ApiErrorResponse>;
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
    retrievePartOfMultipartUpload: (bucketGUID: string, key: string, partNumber: number, cancelToken?: object) => Promise<MultipartUpload | null | ApiErrorResponse>;
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
    deletePartOfMultipartUpload: (bucketGUID: string, key: string, partNumber: number, cancelToken?: object) => Promise<void | ApiErrorResponse>;
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
    uploadPartOfMultipartUpload: (bucketGUID: string, key: any, partNumber: number, data: string, cancelToken?: object) => Promise<TagMetaData | null | ApiErrorResponse>;
    /**
     * Complete a Multipart Upload by its key .
     *
     * @param {string} bucketGUID - The GUID of the bucket to retrieve.
     * @param {string} key - The key of the Multipart Upload to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Boolean|ApiErrorResponse>} A promise resolving when the user is deleted.
     * @throws {Error} If the GUID is null or empty.
     */
    completeMultipartUpload: (bucketGUID: string, key: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
}
import ViewSdkBase from '../ViewSDKBase';
import StoragePool from '../../models/StoragePool';
import BucketMetadata from '../../models/BucketMetadata';
import TagMetaData from '../../models/TagMetadata';
import ObjectMetadata from '../../models/ObjectMetadata';
import AclMetaData from '../../models/AclMetaData';
import AclEntry from '../../models/AclEntry';
import MultipartUpload from '../../models/MultipartUpload';
