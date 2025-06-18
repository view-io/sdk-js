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
  mockObjectData,
  mockBucketData,
} from './mockData';

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
      const data = await apiViewStorageSdk.bucket.readAll();
      data.map((bucket) => {
        expect(bucket).toBeDefined();
      });
    });
  });

  describe('Buckets', () => {
    it('Retrieve Bucket metadata', async () => {
      const data = await apiViewStorageSdk.bucket.readMetadata(mockBucketGUID);
      expect(data).toBeDefined();
      expect(data).toEqual(mockBucketData);
    });

    it('throws error when retrieving a bucket without guid', async () => {
      try {
        await apiViewStorageSdk.bucket.readMetadata();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
    it('Create a bucket', async () => {
      const data = await apiViewStorageSdk.bucket.create(createBucketRequest);
      expect(data).toBeDefined();
      expect(data).toEqual(mockBucketData); // use toEqual for deep equality
    });

    it('throws error when creating a bucket without the bucket parameter', async () => {
      try {
        await apiViewStorageSdk.bucket.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: metadata is null or empty');
      }
    });

    it('update a bucket', async () => {
      const data = await apiViewStorageSdk.bucket.update(updateBucketMetadata);

      expect(data).toBeDefined();
      expect(data).toEqual(updateBucketMetadata);
    });

    it('throws error when updating a bucket without the bucket parameter', async () => {
      try {
        await apiViewStorageSdk.bucket.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: metadata is null or empty');
      }
    });

    it('delete a bucket', async () => {
      const data = await apiViewStorageSdk.bucket.delete(mockBucketGUID);
      expect(data).toBe(true);
    });

    it('throws error when deleting a bucket without guid', async () => {
      try {
        await apiViewStorageSdk.bucket.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Retrieve all Tags', async () => {
      const data = await apiViewStorageSdk.bucket.readTags(mockBucketGUID);
      data.forEach((tag) => {
        expect(tag).toBeDefined();
      });
    });

    it('throws error when retrieving a tag without guid', async () => {
      try {
        await apiViewStorageSdk.bucket.readTags();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('delete tags by bucket', async () => {
      const data = await apiViewStorageSdk.bucket.deleteTags(mockBucketGUID);
      expect(data).toBe(true);
    });

    it('write tags by bucket', async () => {
      const data = await apiViewStorageSdk.bucket.createTags(mockBucketGUID, writeMockTags);
      expect(data).toBeDefined();
      expect(data).toEqual(updateBucketMetadata);
    });

    it('throws error when writing a tag without guid', async () => {
      try {
        await apiViewStorageSdk.bucket.createTags();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tagMetaData is null or empty');
      }
    });

    it('Retrieve ACL', async () => {
      const data = await apiViewStorageSdk.bucket.readACL(mockBucketGUID);
      if (Array.isArray(data)) {
        data.forEach((aclItem) => {
          expect(aclItem).toEqual(mockAcl);
        });
      } else {
        expect(data).toBeDefined();
        expect(data).toEqual(mockAcl);
      }

      if (Array.isArray(data)) {
        data.forEach((item) => {
          expect(item).toEqual(mockAcl);
        });
      }
    });

    it('delete acl by bucket', async () => {
      const data = await apiViewStorageSdk.bucket.deleteACL(mockBucketGUID);
      expect(data).toBe(true);
    });

    it('write acl by bucket', async () => {
      const data = await apiViewStorageSdk.bucket.createACL(mockBucketGUID, mockAcl);
      expect(data).toBeDefined();
      expect(data).toEqual(updateBucketMetadata);
    });
  });

  describe('Objects', () => {
    it('Write non-chunked object', async () => {
      const data = await apiViewStorageSdk.object.write(mockBucketGUID, mockObjectKey, 'Hello, world!');
      expect(data).toBeDefined();
    });

    it('Retrieve object List', async () => {
      const data = await apiViewStorageSdk.object.readData(mockBucketGUID, mockObjectKey);
      expect(data).toBeDefined();
    });

    it('Write expiration object', async () => {
      const data = await apiViewStorageSdk.object.writeExpiration(mockBucketGUID, mockObjectKey, expirationMockData);
      expect(data).toBeDefined();
      expect(data).toHaveProperty('ExpirationUtc', expirationMockData.ExpirationUtc);
    });

    it('Retrieve object data', async () => {
      const data = await apiViewStorageSdk.object.readData(mockBucketGUID, mockObjectKey);
      expect(data).toBeDefined();
      expect(data).toEqual('PDF');
    });

    it('Retrieve object by metadata', async () => {
      const data = await apiViewStorageSdk.object.readMetadata(mockBucketGUID, mockObjectKey);
      expect(data).toBeDefined();
    });

    it('Retrieve Range', async () => {
      const data = await apiViewStorageSdk.object.readDataInRange(mockBucketGUID, mockObjectKey, 'bytes=1-3');
      expect(data).toBeDefined();
      expect(data).toEqual('PDF');
    });

    it('delete  object by key', async () => {
      const data = await apiViewStorageSdk.object.delete(mockBucketGUID, mockObjectKey);
      expect(data).toBe(true);
    });

    it('Retrieve ACL of object', async () => {
      const data = await apiViewStorageSdk.object.readACL(mockBucketGUID, mockObjectKey);

      // Check if data is an array or an object
      if (Array.isArray(data)) {
        // If it's an array, check each item
        data.forEach((aclItem) => {
          expect(aclItem).toEqual(mockAcl);
        });
      } else {
        // If it's a single object, check its properties
        expect(data).toBeDefined();
        expect(data).toEqual(mockAcl);
      }

      // Verify instance type
      if (Array.isArray(data)) {
        data.forEach((item) => {
          expect(item).toEqual(mockAcl);
        });
      }
    });

    it('delete acl of object', async () => {
      const data = await apiViewStorageSdk.object.deleteACL(mockBucketGUID, mockObjectKey);
      expect(data).toBe(true);
    });

    it('write acl of object', async () => {
      const data = await apiViewStorageSdk.object.createACL(mockBucketGUID, mockObjectKey, mockAcl);
      expect(data).toBeDefined();
      expect(data).toEqual(mockObjectData);
    });
  });

  describe('Multipart Upload', () => {
    it('Create MultipartUpload', async () => {
      const data = await apiViewStorageSdk.multipartUpload.create(mockBucketGUID, mockUploadRequest);
      expect(data).toBeDefined();
    });

    it('Retrieve all MultipartUpload', async () => {
      const data = await apiViewStorageSdk.multipartUpload.readAll(mockBucketGUID);
      data.forEach((upload) => {
        expect(upload).toBeDefined();
      });
    });

    it('Retrieve  MultipartUpload', async () => {
      const data = await apiViewStorageSdk.multipartUpload.read(mockBucketGUID, mockUploadKey);
      expect(data).toBeDefined();
    });

    it('Retrieve  MultipartUpload by Part', async () => {
      const data = await apiViewStorageSdk.multipartUpload.readPart(mockBucketGUID, mockUploadKey, mockUploadPart);
      expect(data).toBeDefined();
    });

    it('delete MultipartUpload by part', async () => {
      const data = await apiViewStorageSdk.multipartUpload.deletePart(mockBucketGUID, mockUploadKey, mockUploadPart);
      expect(data).toBe(true);
    });
    it('delete MultipartUpload', async () => {
      const data = await apiViewStorageSdk.multipartUpload.delete(mockBucketGUID, mockUploadKey);
      expect(data).toBe(true);
    });
  });
});
