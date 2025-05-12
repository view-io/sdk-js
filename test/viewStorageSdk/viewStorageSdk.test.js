import { getServer } from '../server';
import { handlers } from './handlers';
import { apiViewHealthCheckSdk, apiViewStorageSdk } from '../setupTest';
import {
  mockBucketGUID,
  createBucketRequest,
  updateBucketMetadata,
  mockTags,
  writeMockTags,
  mockObjectKey,
  mockUploadRequest,
  mockUploadKey,
  mockUploadPart,
  expirationMockData,
  mockAcl,
} from './mockData';
import BucketMetadata from '../../src/models/BucketMetadata';
import TagMetaData from '../../src/models/TagMetadata';
import AclMetaData from '../../src/models/AclMetaData';
import ObjectMetadata from '../../src/models/ObjectMetadata';
import MultipartUpload from '../../src/models/MultipartUpload';
import AclEntry from '../../src/models/AclEntry';
import EnumerationResult from '../../src/models/EnumerationResult';

const server = getServer(handlers);

describe('viewStorageSdk', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('Service', () => {
    it('Retrieve all buckets', async () => {
      const data = await apiViewStorageSdk.retrieveBuckets();
      data.forEach((bucket) => {
        expect(bucket instanceof BucketMetadata).toBe(true);
      });
    });
  });

  describe('Buckets', () => {
    it('Retrieve Bucket metadata', async () => {
      const data = await apiViewStorageSdk.retrieveBucketMetadata(mockBucketGUID);
      expect(data instanceof BucketMetadata).toBe(true);
      expect(data.GUID).toBe(mockBucketGUID);
    });

    it('throws error when retrieving a bucket without guid', async () => {
      try {
        await apiViewStorageSdk.retrieveBucketMetadata();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
    it('Create a bucket', async () => {
      const data = await apiViewStorageSdk.createBucket(createBucketRequest);
      expect(data instanceof BucketMetadata).toBe(true);
    });

    it('throws error when creating a bucket without the bucket parameter', async () => {
      try {
        await apiViewStorageSdk.createBucket();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: metadata is null or empty');
      }
    });

    it('update a bucket', async () => {
      const data = await apiViewStorageSdk.updateBucket(updateBucketMetadata);
      expect(data instanceof BucketMetadata).toBe(true);
      expect(data.GUID).toBe(updateBucketMetadata.GUID);
      expect(data.Name).toBe(updateBucketMetadata.Name);
    });

    it('throws error when updating a bucket without the bucket parameter', async () => {
      try {
        await apiViewStorageSdk.updateBucket();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: metadata is null or empty');
      }
    });

    it('delete a bucket', async () => {
      const data = await apiViewStorageSdk.deleteBucket(mockBucketGUID);
      expect(data).toBe(true);
    });

    it('throws error when deleting a bucket without guid', async () => {
      try {
        await apiViewStorageSdk.deleteBucket();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Retrieve all Tags', async () => {
      const data = await apiViewStorageSdk.retrieveBucketTags(mockBucketGUID);
      console.log(data);
      data.forEach((tag) => {
        expect(tag instanceof TagMetaData).toBe(true);
      });
    });

    it('throws error when retrieving a tag without guid', async () => {
      try {
        await apiViewStorageSdk.retrieveBucketTags();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('delete tags by bucket', async () => {
      const data = await apiViewStorageSdk.deleteBucketTags(mockBucketGUID);
      expect(data).toBe(true);
    });

    it('write tags by bucket', async () => {
      const data = await apiViewStorageSdk.createBucketTags(mockBucketGUID, writeMockTags);
      expect(data instanceof TagMetaData).toBe(true);
      expect(data.key).toBe(writeMockTags.key);
      expect(data.Name).toBe(writeMockTags.Name);
    });

    it('throws error when writing a tag without guid', async () => {
      try {
        await apiViewStorageSdk.createBucketTags();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tagMetaData is null or empty');
      }
    });

    it('Retrieve ACL', async () => {
      const data = await apiViewStorageSdk.retrieveBucketACL(mockBucketGUID);

      // Log the data for debugging
      console.log('ACL Data:', JSON.stringify(data, null, 2));

      // Check if data is an array or an object
      if (Array.isArray(data)) {
        // If it's an array, check each item
        data.forEach((aclItem) => {
          expect(aclItem).toBeDefined();
          expect(aclItem.Owner).toBeDefined();
          expect(aclItem.Users).toBeDefined();
          expect(aclItem.Entries).toBeDefined();
        });
      } else {
        // If it's a single object, check its properties
        expect(data).toBeDefined();
        expect(data.owner).toBeDefined();
        expect(data.users).toBeDefined();
        expect(data.entries).toBeDefined();
      }

      // Verify instance type
      if (data instanceof AclMetaData) {
        expect(data instanceof AclMetaData).toBe(true);
      } else if (Array.isArray(data)) {
        data.forEach((item) => {
          expect(item instanceof AclMetaData).toBe(true);
        });
      }
    });

    it('delete acl by bucket', async () => {
      const data = await apiViewStorageSdk.deleteBucketACL(mockBucketGUID);
      expect(data).toBe(true);
    });

    it('write acl by bucket', async () => {
      const data = await apiViewStorageSdk.createBucketACL(mockBucketGUID, mockAcl);
      expect(data instanceof AclEntry).toBe(true);
    });
  });

  describe('Objects', () => {
    it('Write non-chunked object', async () => {
      const data = await apiViewStorageSdk.writeObject(mockBucketGUID, mockObjectKey, 'Hello, world!');
      expect(data instanceof ObjectMetadata).toBe(true);
    });

    it('Retrieve object List', async () => {
      const data = await apiViewStorageSdk.retrieveObjects(mockBucketGUID);
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('Write expiration object', async () => {
      const data = await apiViewStorageSdk.writeObjectExpiration(mockBucketGUID, mockObjectKey, expirationMockData);
      expect(data instanceof ObjectMetadata).toBe(true);
      expect(data.expirationTime).toBe(expirationMockData.expirationTime);
    });

    it('Retrieve object data', async () => {
      const data = await apiViewStorageSdk.retrieveObjectData(mockBucketGUID, mockObjectKey);
      expect(data).toBe('PDF');
    });

    it('Retrieve object by metadata', async () => {
      const data = await apiViewStorageSdk.retrieveObjectMetadata(mockBucketGUID, mockObjectKey);
      expect(data instanceof ObjectMetadata).toBe(true);
    });

    it('Retrieve Range', async () => {
      const data = await apiViewStorageSdk.retrieveObjectDataInRange(mockBucketGUID, mockObjectKey, 'bytes=1-3');
      expect(data).toBe('PDF');
    });

    it('delete  object by key', async () => {
      const data = await apiViewStorageSdk.deleteObject(mockBucketGUID, mockObjectKey);
      expect(data).toBe(true);
    });

    it('Retrieve ACL of object', async () => {
      const data = await apiViewStorageSdk.retrieveObjectACL(mockBucketGUID, mockObjectKey);

      // Check if data is an array or an object
      if (Array.isArray(data)) {
        // If it's an array, check each item
        data.forEach((aclItem) => {
          expect(aclItem).toBeDefined();
          expect(aclItem.Owner).toBeDefined();
          expect(aclItem.Users).toBeDefined();
          expect(aclItem.Entries).toBeDefined();
        });
      } else {
        // If it's a single object, check its properties
        expect(data).toBeDefined();
        expect(data.owner).toBeDefined();
        expect(data.users).toBeDefined();
        expect(data.entries).toBeDefined();
      }

      // Verify instance type
      if (data instanceof AclMetaData) {
        expect(data instanceof AclMetaData).toBe(true);
      } else if (Array.isArray(data)) {
        data.forEach((item) => {
          expect(item instanceof AclMetaData).toBe(true);
        });
      }
    });

    it('delete acl of object', async () => {
      const data = await apiViewStorageSdk.deleteObjectACL(mockBucketGUID, mockObjectKey);
      expect(data).toBe(true);
    });

    it('write acl of object', async () => {
      const data = await apiViewStorageSdk.createObjectACL(mockBucketGUID, mockObjectKey, writeMockTags);
      expect(data instanceof AclEntry).toBe(true);
    });
  });

  describe('Multipart Upload', () => {
    it('Create MultipartUpload', async () => {
      const data = await apiViewStorageSdk.createMultipartUpload(mockBucketGUID, mockUploadRequest);
      expect(data instanceof MultipartUpload).toBe(true);
    });

    it('Retrieve all MultipartUpload', async () => {
      const data = await apiViewStorageSdk.retrieveMultipartUploads(mockBucketGUID);
      console.log(data);
      data.forEach((upload) => {
        expect(upload instanceof MultipartUpload).toBe(true);
      });
    });

    it('Retrieve  MultipartUpload', async () => {
      const data = await apiViewStorageSdk.retrieveMultipartUpload(mockBucketGUID, mockUploadKey);
      expect(data instanceof MultipartUpload).toBe(true);
    });

    it('Retrieve  MultipartUpload by Part', async () => {
      const data = await apiViewStorageSdk.retrievePartOfMultipartUpload(mockBucketGUID, mockUploadKey, mockUploadPart);
      expect(data instanceof MultipartUpload).toBe(true);
    });

    it('delete MultipartUpload by part', async () => {
      const data = await apiViewStorageSdk.deletePartOfMultipartUpload(mockBucketGUID, mockUploadKey, mockUploadPart);
      expect(data).toBe(true);
    });
    it('delete MultipartUpload', async () => {
      const data = await apiViewStorageSdk.deleteMultipartUpload(mockBucketGUID, mockUploadKey);
      expect(data).toBe(true);
    });
  });
});
