import { getServer } from '../server';
import { handlers } from './handlers';
import { mockObjectLockGuid, objectLocksData, objectLocksMockApiResponse } from './mockData';
import { api } from '../setupTest';

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
      const data = await api.ObjectLock.read(mockObjectLockGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(objectLocksData[mockObjectLockGuid]);
    });

    it('throws error when if missed guid while retrieving a ObjectLock', async () => {
      try {
        await api.ObjectLock.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a ObjectLock with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.ObjectLock.read(mockObjectLockGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all ObjectLock', async () => {
      const data = await api.ObjectLock.readAll();
      data.map((objectLock) => {
        expect(objectLock).toEqual(objectLocksData[objectLock.GUID]);
      });
    });

    it('delete a ObjectLock', async () => {
      const data = await api.ObjectLock.delete(mockObjectLockGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a ObjectLock', async () => {
      try {
        await api.ObjectLock.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
