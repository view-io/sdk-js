import { getServer } from '../server';
import { handlers } from './handlers';
import { mockObjectLockGuid, objectLocksData, objectLocksMockApiResponse } from './mockData';
import { api } from '../setupTest';
import ObjectLock from '../../src/models/ObjectLock';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('ObjectLock', () => {
    it('retrieves a ObjectLock', async () => {
      const data = await api.retrieveObjectLock(mockObjectLockGuid);
      expect(data instanceof ObjectLock).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new ObjectLock(objectLocksData[mockObjectLockGuid])));
    });

    it('throws error when if missed guid while retrieving a ObjectLock', async () => {
      try {
        await api.retrieveObjectLock();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a ObjectLock with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveObjectLock(mockObjectLockGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all ObjectLock', async () => {
      const data = await api.retrieveObjectLocks();
      data.map((objectLock) => {
        expect(JSON.stringify(objectLock)).toBe(JSON.stringify(new ObjectLock(objectLocksData[objectLock.GUID])));
      });
    });

    it('creates a ObjectLock', async () => {
      const data = await api.createObjectLock({
        TenantGUID: 'default',
        NodeGUID: 'default',
        BucketGUID: 'default',
        OwnerGUID: 'default',
        ObjectGUID: 'default',
        Key: 'my-object-key',
        Version: 'v1.0.0',
        IsReadLock: true,
        IsWriteLock: false,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });
      expect(true).toBe(data instanceof ObjectLock);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new ObjectLock(objectLocksData[mockObjectLockGuid])));
    });

    it('throws error when creating a ObjectLock with objectLock parameter', async () => {
      try {
        await api.createObjectLock();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: objectLock is null or empty');
      }
    });

    it('Update a ObjectLock', async () => {
      const data = await api.updateObjectLock({
        GUID: mockObjectLockGuid,
        TenantGUID: 'default',
        NodeGUID: 'default',
        BucketGUID: 'default',
        OwnerGUID: 'default',
        ObjectGUID: 'default',
        Key: 'my-object-key',
        Version: 'v1.0.0',
        IsReadLock: true,
        IsWriteLock: false,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });

      expect(true).toBe(data instanceof ObjectLock);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new ObjectLock(objectLocksData[mockObjectLockGuid])));
    });

    it('throws error when if missed guid while updating a ObjectLock', async () => {
      try {
        await api.updateObjectLock();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: objectLock is null or empty');
      }
    });

    it('delete a ObjectLock', async () => {
      const data = await api.deleteObjectLock(mockObjectLockGuid);
      console.log('data: ', data);
      expect(data instanceof ObjectLock).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new ObjectLock(objectLocksData[mockObjectLockGuid])));
    });

    it('throws error when if missed guid while deleting a ObjectLock', async () => {
      try {
        await api.deleteObjectLock();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a ObjectLock exist', async () => {
      const data = await api.existsObjectLock(mockObjectLockGuid);
      expect(data).toBe('true');
    });

    it('Check if a ObjectLock does not exist', async () => {
      const data = await api.existsObjectLock('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a ObjectLock existance', async () => {
      try {
        await api.existsObjectLock();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
