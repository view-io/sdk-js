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

    it('delete a ObjectLock', async () => {
      const data = await api.deleteObjectLock(mockObjectLockGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a ObjectLock', async () => {
      try {
        await api.deleteObjectLock();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
