import { getServer } from '../server';
import { handlers } from './handlers';
import { mockCredentialGuid, credentialsData, credentialsMockApiResponse } from './mockData';
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

  describe('Credential', () => {
    it('retrieves a Credential', async () => {
      const data = await api.Credential.read(mockCredentialGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(credentialsData[mockCredentialGuid]);
    });

    it('throws error when if missed guid while retrieving a Credential', async () => {
      try {
        await api.Credential.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a Credential with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.Credential.read(mockCredentialGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all Credential', async () => {
      const data = await api.Credential.readAll();
      data.map((credential) => {
        expect(credential).toEqual(credentialsData[credential.GUID]);
      });
    });

    it('creates a Credential', async () => {
      const newCredential = {
        TenantGUID: 'default',
        UserGUID: 'default',
        AccessKey: 'default',
        SecretKey: 'default',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.830634Z',
      };
      const data = await api.Credential.create(newCredential);
      expect(data).toBeDefined();
      expect(data).toEqual(credentialsData[mockCredentialGuid]);
    });

    it('throws error when creating a Credential with credential parameter', async () => {
      try {
        await api.Credential.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: cred is null or empty');
      }
    });

    it('Update a Credential', async () => {
      const data = await api.Credential.update({
        GUID: mockCredentialGuid,
        TenantGUID: 'default',
        UserGUID: 'default',
        AccessKey: 'default',
        SecretKey: 'default',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.830634Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(credentialsData[mockCredentialGuid]);
    });

    it('throws error when if missed guid while updating a Credential', async () => {
      try {
        await api.Credential.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: cred is null or empty');
      }
    });

    it('delete a Credential', async () => {
      const data = await api.Credential.delete(mockCredentialGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a Credential', async () => {
      try {
        await api.Credential.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a Credential exist', async () => {
      const data = await api.Credential.exists(mockCredentialGuid);
      expect(data).toBe(true);
    });

    it('Check if a Credential does not exist', async () => {
      try {
        await api.Credential.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a Credential existance', async () => {
      try {
        await api.Credential.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
