import { getServer } from '../server';
import { handlers } from './handlers';
import { mockStoragePoolGuid, storagePoolsData, storagePoolsMockApiResponse } from './mockData';
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

  describe('StoragePool', () => {
    it('retrieves a StoragePool', async () => {
      const data = await api.storagePool.read(mockStoragePoolGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(storagePoolsData[mockStoragePoolGuid]);
    });

    it('throws error when if missed guid while retrieving a StoragePool', async () => {
      try {
        await api.storagePool.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a StoragePool with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.storagePool.read(mockStoragePoolGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all StoragePool', async () => {
      const data = await api.storagePool.readAll();
      data.map((pool) => {
        expect(pool).toEqual(storagePoolsData[pool.GUID]);  
      });
    });

    it('creates a StoragePool', async () => {
      const data = await api.storagePool.create({
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
      expect(data).toBeDefined();
      expect(data).toEqual(storagePoolsData[mockStoragePoolGuid]);
    });

    it('throws error when creating a StoragePool with pool parameter', async () => {
      try {
        await api.storagePool.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: pool is null or empty');
      }
    });

    it('Update a StoragePool', async () => {
      const data = await api.storagePool.update({
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

      expect(data).toBeDefined();
      expect(data).toEqual(storagePoolsData[mockStoragePoolGuid]);
    });

    it('throws error when if missed guid while updating a StoragePool', async () => {
      try {
        await api.storagePool.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: pool is null or empty');
      }
    });

    it('delete a StoragePool', async () => {
      const data = await api.storagePool.delete(mockStoragePoolGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a StoragePool', async () => {
      try {
        await api.storagePool.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a StoragePool exist', async () => {
      const data = await api.storagePool.exists(mockStoragePoolGuid);
      expect(data).toBe(true);
    });

    it('Check if a StoragePool does not exist', async () => {
      try {
        const data = await api.storagePool.exists('wrongID');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a StoragePool existance', async () => {
      try {
        await api.storagePool.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
