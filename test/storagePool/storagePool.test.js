import { getServer } from '../server';
import { handlers } from './handlers';
import { mockStoragePoolGuid, storagePoolsData, storagePoolsMockApiResponse } from './mockData';
import { api } from '../setupTest';
import StoragePool from '../../src/models/StoragePool';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('StoragePool', () => {
    it('retrieves a StoragePool', async () => {
      const data = await api.retrievePool(mockStoragePoolGuid);
      expect(data instanceof StoragePool).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new StoragePool(storagePoolsData[mockStoragePoolGuid])));
    });

    it('throws error when if missed guid while retrieving a StoragePool', async () => {
      try {
        await api.retrievePool();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a StoragePool with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrievePool(mockStoragePoolGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all StoragePool', async () => {
      const data = await api.retrievePools();
      data.map((pool) => {
        expect(JSON.stringify(pool)).toBe(JSON.stringify(new StoragePool(storagePoolsData[pool.GUID])));
      });
    });

    it('creates a StoragePool', async () => {
      const data = await api.createPool({
        TenantGUID: 'default',
        EncryptionKeyGUID: 'a9d47c1f-08f6-4fc8-bd91-6b3e3c908a9e',
        Name: 'Primary Storage Pool',
        Provider: 'AWS',
        WriteMode: 'GUID',
        UseSsl: true,
        Endpoint: 'https://s3.amazonaws.com',
        AccessKey: 'AKIAEXAMPLEKEY',
        SecretKey: 'SECRETEXAMPLEKEY',
        AwsRegion: 'us-west-1',
        AwsBucket: 'my-app-bucket',
        AwsBaseDomain: 'https://s3.amazonaws.com',
        AwsBaseUrl: 'https://my-app-bucket.s3.amazonaws.com',
        DiskDirectory: null,
        AzureAccount: null,
        AzureContainer: null,
        Compress: 'NONE',
        EnableReadCaching: true,
        CreatedUtc: '2024-09-24T10:15:30Z',
      });
      expect(true).toBe(data instanceof StoragePool);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new StoragePool(storagePoolsData[mockStoragePoolGuid])));
    });

    it('throws error when creating a StoragePool with pool parameter', async () => {
      try {
        await api.createPool();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: pool is null or empty');
      }
    });

    it('Update a StoragePool', async () => {
      const data = await api.updatePool({
        GUID: mockStoragePoolGuid,
        TenantGUID: 'default',
        EncryptionKeyGUID: 'a9d47c1f-08f6-4fc8-bd91-6b3e3c908a9e',
        Name: 'Primary Storage Pool',
        Provider: 'AWS',
        WriteMode: 'GUID',
        UseSsl: true,
        Endpoint: 'https://s3.amazonaws.com',
        AccessKey: 'AKIAEXAMPLEKEY',
        SecretKey: 'SECRETEXAMPLEKEY',
        AwsRegion: 'us-west-1',
        AwsBucket: 'my-app-bucket',
        AwsBaseDomain: 'https://s3.amazonaws.com',
        AwsBaseUrl: 'https://my-app-bucket.s3.amazonaws.com',
        DiskDirectory: null,
        AzureAccount: null,
        AzureContainer: null,
        Compress: 'NONE',
        EnableReadCaching: true,
        CreatedUtc: '2024-09-24T10:15:30Z',
      });

      expect(true).toBe(data instanceof StoragePool);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new StoragePool(storagePoolsData[mockStoragePoolGuid])));
    });

    it('throws error when if missed guid while updating a StoragePool', async () => {
      try {
        await api.updatePool();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: pool is null or empty');
      }
    });

    it('delete a StoragePool', async () => {
      const data = await api.deletePool(mockStoragePoolGuid);
      console.log('data: ', data);
      expect(data instanceof StoragePool).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new StoragePool(storagePoolsData[mockStoragePoolGuid])));
    });

    it('throws error when if missed guid while deleting a StoragePool', async () => {
      try {
        await api.deletePool();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a StoragePool exist', async () => {
      const data = await api.existsPool(mockStoragePoolGuid);
      expect(data).toBe('true');
    });

    it('Check if a StoragePool does not exist', async () => {
      const data = await api.existsPool('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a StoragePool existance', async () => {
      try {
        await api.existsPool();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
