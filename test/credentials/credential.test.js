import { getServer } from '../server';
import { handlers } from './handlers';
import { mockCredentialGuid, credentialsData, credentialsMockApiResponse } from './mockData';
import { api } from '../setupTest';
import Credential from '../../src/models/Credential';

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
      const data = await api.retrieveCredential(mockCredentialGuid);
      expect(data instanceof Credential).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new Credential(credentialsData[mockCredentialGuid])));
    });

    it('throws error when if missed guid while retrieving a Credential', async () => {
      try {
        await api.retrieveCredential();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a Credential with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveCredential(mockCredentialGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all Credential', async () => {
      const data = await api.retrieveCredentials();
      data.map((credential) => {
        expect(JSON.stringify(credential)).toBe(JSON.stringify(new Credential(credentialsData[credential.GUID])));
      });
    });

    it('creates a Credential', async () => {
      const data = await api.createCredential({
        TenantGUID: 'default',
        UserGUID: 'default',
        AccessKey: 'default',
        SecretKey: 'default',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.830634Z',
      });
      expect(true).toBe(data instanceof Credential);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new Credential(credentialsData[mockCredentialGuid])));
    });

    it('throws error when creating a Credential with credential parameter', async () => {
      try {
        await api.createCredential();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: cred is null or empty');
      }
    });

    it('Update a Credential', async () => {
      const data = await api.updateCredential({
        GUID: mockCredentialGuid,
        TenantGUID: 'default',
        UserGUID: 'default',
        AccessKey: 'default',
        SecretKey: 'default',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.830634Z',
      });

      expect(true).toBe(data instanceof Credential);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new Credential(credentialsData[mockCredentialGuid])));
    });

    it('throws error when if missed guid while updating a Credential', async () => {
      try {
        await api.updateCredential();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: cred is null or empty');
      }
    });

    it('delete a Credential', async () => {
      const data = await api.deleteCredential(mockCredentialGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a Credential', async () => {
      try {
        await api.deleteCredential();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a Credential exist', async () => {
      const data = await api.existsCredential(mockCredentialGuid);
      expect(data).toBe('true');
    });

    it('Check if a Credential does not exist', async () => {
      try {
        await api.existsCredential('wrongID');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a Credential existance', async () => {
      try {
        await api.existsCredential();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
