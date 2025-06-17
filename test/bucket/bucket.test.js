import { getServer } from '../server';
import { handlers } from './handlers';
import { mockBucketGuid, bucketsData, bucketsMockApiResponse } from './mockData';
import { apiViewStorageSdk as api } from '../setupTest';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('BucketMetadata', () => {
    it('retrieves a BucketMetadata', async () => {
      const data = await api.bucket.readMetadata(mockBucketGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(bucketsData[mockBucketGuid]);
    });

    it('throws error when if missed guid while retrieving a BucketMetadata', async () => {
      try {
        await api.bucket.readAll();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a BucketMetadata with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.bucket.readMetadata(mockBucketGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all BucketMetadata', async () => {
      const data = await api.bucket.readAll();
      data.map((bucket) => {
        expect(bucket).toEqual(bucketsData[bucket.GUID]);
      });
    });

    it('creates a BucketMetadata', async () => {
      const data = await api.bucket.create({
        TenantGUID: 'default',
        PoolGUID: 'a9d47c1f-08f6-4fc8-bd91-6b3e3c908a9e',
        OwnerGUID: '92b9c3c1-f24d-4c89-97b3-675937146c2e',
        Category: 'Data',
        Name: 'Primary Data Bucket',
        RegionString: 'us-west-1',
        Versioning: true,
        RetentionMinutes: 1440,
        MaxUploadSize: 5000000000,
        MaxMultipartUploadSeconds: 604800,
        LastAccessUtc: '2024-09-24T10:15:30Z',
        CreatedUtc: '2024-09-23T08:45:00Z',
        Owner: {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
        },
      });
      expect(data).toBeDefined();
      expect(data).toEqual(bucketsData[mockBucketGuid]);
    });

    it('throws error when creating a BucketMetadata with bucket parameter', async () => {
      try {
        await api.bucket.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: metadata is null or empty');
      }
    });

    it('Update a BucketMetadata', async () => {
      const data = await api.bucket.update({
        GUID: mockBucketGuid,
        TenantGUID: 'default',
        PoolGUID: 'a9d47c1f-08f6-4fc8-bd91-6b3e3c908a9e',
        OwnerGUID: '92b9c3c1-f24d-4c89-97b3-675937146c2e',
        Category: 'Data',
        Name: 'Primary Data Bucket',
        RegionString: 'us-west-1',
        Versioning: true,
        RetentionMinutes: 1440,
        MaxUploadSize: 5000000000,
        MaxMultipartUploadSeconds: 604800,
        LastAccessUtc: '2024-09-24T10:15:30Z',
        CreatedUtc: '2024-09-23T08:45:00Z',
        Owner: {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
        },
      });

      expect(data).toBeDefined();
      expect(data).toEqual(bucketsData[mockBucketGuid]);
    });

    it('throws error when if missed guid while updating a BucketMetadata', async () => {
      try {
        await api.bucket.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: metadata is null or empty');
      }
    });

    it('delete a BucketMetadata', async () => {
      const data = await api.bucket.delete(mockBucketGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a BucketMetadata', async () => {
      try {
        await api.bucket.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
