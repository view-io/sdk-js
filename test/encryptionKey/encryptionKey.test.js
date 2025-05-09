import { getServer } from '../server';
import { handlers } from './handlers';
import { mockEncryptionKeyGuid, encryptionKeysData, encryptionKeysMockApiResponse } from './mockData';
import { api } from '../setupTest';
import EncryptionKey from '../../src/models/EncryptionKey';

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
      const data = await api.retrieveEncryptionKey(mockEncryptionKeyGuid);
      expect(data instanceof EncryptionKey).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new EncryptionKey(encryptionKeysData[mockEncryptionKeyGuid])));
    });

    it('throws error when if missed guid while retrieving a EncryptionKey', async () => {
      try {
        await api.retrieveEncryptionKey();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a EncryptionKey with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveEncryptionKey(mockEncryptionKeyGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all EncryptionKey', async () => {
      const data = await api.retrieveEncryptionKeys();
      data.map((key) => {
        expect(JSON.stringify(key)).toBe(JSON.stringify(new EncryptionKey(encryptionKeysData[key.GUID])));
      });
    });

    it('creates a EncryptionKey', async () => {
      const data = await api.createEncryptionKey({
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
      expect(true).toBe(data instanceof EncryptionKey);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new EncryptionKey(encryptionKeysData[mockEncryptionKeyGuid])));
    });

    it('throws error when creating a EncryptionKey with key parameter', async () => {
      try {
        await api.createEncryptionKey();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: key is null or empty');
      }
    });

    it('Update a EncryptionKey', async () => {
      const data = await api.updateEncryptionKey({
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

      expect(true).toBe(data instanceof EncryptionKey);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new EncryptionKey(encryptionKeysData[mockEncryptionKeyGuid])));
    });

    it('throws error when if missed guid while updating a EncryptionKey', async () => {
      try {
        await api.updateEncryptionKey();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('delete a EncryptionKey', async () => {
      const data = await api.deleteEncryptionKey(mockEncryptionKeyGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a EncryptionKey', async () => {
      try {
        await api.deleteEncryptionKey();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a EncryptionKey exist', async () => {
      const data = await api.existsEncryptionKey(mockEncryptionKeyGuid);
      expect(data).toBe('true');
    });

    it('Check if a EncryptionKey does not exist', async () => {
      try {
        const data = await api.existsEncryptionKey('wrongID');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a EncryptionKey existance', async () => {
      try {
        await api.existsEncryptionKey();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
