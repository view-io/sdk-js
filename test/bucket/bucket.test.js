import { getServer } from '../server';
import { handlers } from './handlers';
import { mockBucketGuid, bucketsData, bucketsMockApiResponse } from './mockData';
import { api } from '../setupTest';
import BucketMetadata from '../../src/models/BucketMetadata';

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
      const data = await api.retrieveBucket(mockBucketGuid);
      expect(data instanceof BucketMetadata).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new BucketMetadata(bucketsData[mockBucketGuid])));
    });

    it('throws error when if missed guid while retrieving a BucketMetadata', async () => {
      try {
        await api.retrieveBucket();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a BucketMetadata with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveBucket(mockBucketGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all BucketMetadata', async () => {
      const data = await api.retrieveBuckets();
      data.map((bucket) => {
        expect(JSON.stringify(bucket)).toBe(JSON.stringify(new BucketMetadata(bucketsData[bucket.GUID])));
      });
    });

    it('creates a BucketMetadata', async () => {
      const data = await api.createBucket({
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
      expect(true).toBe(data instanceof BucketMetadata);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new BucketMetadata(bucketsData[mockBucketGuid])));
    });

    it('throws error when creating a BucketMetadata with bucket parameter', async () => {
      try {
        await api.createBucket();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: bucket is null or empty');
      }
    });

    it('Update a BucketMetadata', async () => {
      const data = await api.updateBucket({
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

      expect(true).toBe(data instanceof BucketMetadata);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new BucketMetadata(bucketsData[mockBucketGuid])));
    });

    it('throws error when if missed guid while updating a BucketMetadata', async () => {
      try {
        await api.updateBucket();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: bucket is null or empty');
      }
    });

    it('delete a BucketMetadata', async () => {
      const data = await api.deleteBucket(mockBucketGuid);
      console.log('data: ', data);
      expect(data instanceof BucketMetadata).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new BucketMetadata(bucketsData[mockBucketGuid])));
    });

    it('throws error when if missed guid while deleting a BucketMetadata', async () => {
      try {
        await api.deleteBucket();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a BucketMetadata exist', async () => {
      const data = await api.existsBucket(mockBucketGuid);
      expect(data).toBe('true');
    });

    it('Check if a BucketMetadata does not exist', async () => {
      const data = await api.existsBucket('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a BucketMetadata existance', async () => {
      try {
        await api.existsBucket();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
