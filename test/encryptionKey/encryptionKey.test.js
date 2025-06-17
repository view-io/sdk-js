import { getServer } from '../server';
import { handlers } from './handlers';
import { mockEncryptionKeyGuid, encryptionKeysData, encryptionKeysMockApiResponse } from './mockData';
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

  describe('EncryptionKey', () => {
    it('retrieves a EncryptionKey', async () => {
      const data = await api.EncryptionKey.read(mockEncryptionKeyGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(encryptionKeysData[mockEncryptionKeyGuid]);
    });

    it('throws error when if missed guid while retrieving a EncryptionKey', async () => {
      try {
        await api.EncryptionKey.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a EncryptionKey with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.EncryptionKey.read(mockEncryptionKeyGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all EncryptionKey', async () => {
      const data = await api.EncryptionKey.readAll();
      data.map((key) => {
        expect(key).toEqual(encryptionKeysData[key.GUID]);
      });
    });

    it('creates a EncryptionKey', async () => {
      const newEncryptionKey = {
        TenantGUID: 'default',
        OwnerGUID: 'default',
        KeyBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
        KeyHex: '0000000000000000000000000000000000000000000000000000000000000000',
        vBase64: 'AAAAAAAAAAAAAAAAAAAAAA==',
        IvHex: '00000000000000000000000000000000',
        SaltBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
        SaltHex: '0000000000000000000000000000000000000000000000000000000000000000',
        Name: 'Default key',
        Description: 'Default key',
        CreatedUtc: '2024-09-13T13:40:18.851081Z',
      };
      const data = await api.EncryptionKey.create(newEncryptionKey);
      expect(data).toBeDefined();
      expect(data).toEqual(encryptionKeysData[mockEncryptionKeyGuid]);
    });

    it('throws error when creating a EncryptionKey with key parameter', async () => {
      try {
        await api.EncryptionKey.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: key is null or empty');
      }
    });

    it('Update a EncryptionKey', async () => {
      const data = await api.EncryptionKey.update({
        GUID: mockEncryptionKeyGuid,
        TenantGUID: 'default',
        OwnerGUID: 'default',
        KeyBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
        KeyHex: '0000000000000000000000000000000000000000000000000000000000000000',
        vBase64: 'AAAAAAAAAAAAAAAAAAAAAA==',
        IvHex: '00000000000000000000000000000000',
        SaltBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
        SaltHex: '0000000000000000000000000000000000000000000000000000000000000000',
        Name: 'Default key',
        Description: 'Default key',
        CreatedUtc: '2024-09-13T13:40:18.851081Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(encryptionKeysData[mockEncryptionKeyGuid]);
    });

    it('throws error when if missed guid while updating a EncryptionKey', async () => {
      try {
        await api.EncryptionKey.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: key is null or empty');
      }
    });

    it('delete a EncryptionKey', async () => {
      const data = await api.EncryptionKey.delete(mockEncryptionKeyGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a EncryptionKey', async () => {
      try {
        await api.EncryptionKey.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a EncryptionKey exist', async () => {
      const data = await api.EncryptionKey.exists(mockEncryptionKeyGuid);
      expect(data).toBe(true);
    });

    it('Check if a EncryptionKey does not exist', async () => {
      try {
        await api.EncryptionKey.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a EncryptionKey existance', async () => {
      try {
        await api.EncryptionKey.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
