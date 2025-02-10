import { getServer } from '../server';
import { handlers } from './handlers';
import { ViewConfigurationSdk } from '../../src';
import { mockAccessToken, mockEndpoint, mockTenantId } from '../setupTest';
import {
  mockTenantData,
  mockXToken,
  updateTenantMockData,
  createTenantMockData,
  mockBlobGuid,
  mockBlobData,
  mockDataRepositoryGuid,
  mockDiskDataRepositoryRequest,
  mockS3DataRepositoryRequest,
  mockAzureBlobDataRepositoryRequest,
  mockCifsDataRepositoryRequest,
  mockNfsDataRepositoryRequest,
  mockDiskDataRepositoryGuid,
  mockemail,
  mockpassword,
  mockpasswordSHA256,
  token,
} from './mockData';
import TenantMetadata from '../../src/models/TenantMetadata';
import EnumerationResult from '../../src/models/EnumerationResult';
import Blob from '../../src/models/Blob';
import DataRepository from '../../src/models/DataRepository';

const api = new ViewConfigurationSdk(mockTenantId, mockAccessToken, mockEndpoint);

const server = getServer(handlers);

describe('ViewConfigurationSdk', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('Tenant Methods', () => {
    it('get All Tenants', async () => {
      const data = await api.retrieveTenants(null, mockXToken);
      expect(
        data.forEach((tenant) => {
          expect(tenant instanceof TenantMetadata).toBe(true);
        })
      );
    });

    it('retrieves a Tenant', async () => {
      const data = await api.retrieveTenant(mockTenantId);
      expect(data instanceof TenantMetadata).toBe(true);
    });

    it('update a Tenant', async () => {
      const data = await api.updateTenant(mockTenantId, updateTenantMockData);
      expect(data instanceof TenantMetadata).toBe(true);
      expect(data.region).toBe(updateTenantMockData.Region);
    });

    it('delete a Tenant', async () => {
      const data = await api.deleteTenant(mockTenantId, mockXToken);
      expect(data).toBe('true');
    });

    it('create a Tenant', async () => {
      const data = await api.writeTenant(createTenantMockData, null, mockXToken);
      expect(data instanceof TenantMetadata).toBe(true);
    });

    it('Check if a Tenant exist', async () => {
      const data = await api.existsTenant(mockTenantId);
      expect(data).toBe('true');
    });

    it('enumerates tenants', async () => {
      const data = await api.enumerateTenants();
      expect(data instanceof EnumerationResult).toBe(true);
    });
  });

  describe('Blob Methods', () => {
    it('enumerates blobs', async () => {
      const data = await api.enumerateBlobs();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('retrieves List of blob', async () => {
      const data = await api.retrieveBlobs();
      expect(
        data.forEach((blob) => {
          expect(blob instanceof Blob).toBe(true);
        })
      );
    });

    it('retrieves a blob', async () => {
      const data = await api.retrieveBlob(mockBlobGuid);
      expect(data instanceof Blob).toBe(true);
      expect(data.GUID).toBe(mockBlobGuid);
    });

    it('retrieve a blob with data', async () => {
      const data = await api.retrieveBlobIncludeData(mockBlobGuid);
      expect(data instanceof Blob).toBe(true);
      expect(data.Data).toBeDefined();
    });

    it('create a blob', async () => {
      const data = await api.writeBlob(mockBlobData);
      expect(data instanceof Blob).toBe(true);
    });

    it('delete a blob', async () => {
      const data = await api.deleteBlob(mockBlobGuid);
      expect(data).toBe('true');
    });

    it('Check if a blob exist', async () => {
      const data = await api.existsBlob(mockBlobGuid);
      expect(data).toBe('true');
    });
  });

  describe('Enumerate Methods', () => {
    it('enumerates users', async () => {
      const data = await api.enumerateUsers();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates credentials', async () => {
      const data = await api.enumerateCredentials();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates encryption keys', async () => {
      const data = await api.enumerateEncryptionKeys();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates metadata Rules', async () => {
      const data = await api.enumerateMetadataRules();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates embeddings Rules', async () => {
      const data = await api.enumerateEmbeddingsRules();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates Vector Repositories', async () => {
      const data = await api.enumerateVectorRepositories();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates Graph Repositories', async () => {
      const data = await api.enumerateGraphRepositories();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates Collections', async () => {
      const data = await api.enumerateCollections();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates Webhook Rules', async () => {
      const data = await api.enumerateWebhookRules();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates Webhook Targets', async () => {
      const data = await api.enumerateWebhookTargets();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates Webhook Events', async () => {
      const data = await api.enumerateWebhookEvents();
      expect(data instanceof EnumerationResult).toBe(true);
    });

    it('enumerates Data Repositories', async () => {
      const data = await api.enumerateDataRepositories();
      expect(data instanceof EnumerationResult).toBe(true);
    });
  });

  describe('Data Repositories', () => {
    it('get All Repositories', async () => {
      const data = await api.retrieveDataRepositories();
      expect(
        data.forEach((repository) => {
          expect(repository instanceof DataRepository).toBe(true);
        })
      );
    });

    it('get a Repository', async () => {
      const data = await api.retrieveDataRepository(mockDataRepositoryGuid);
      expect(data instanceof DataRepository).toBe(true);
      expect(data.GUID).toBe(mockDataRepositoryGuid);
    });

    it('Write a Disk Data Repository', async () => {
      const data = await api.writeDiskDataRepository(mockDiskDataRepositoryRequest);
      expect(data instanceof DataRepository).toBe(true);
    });

    it('Write an S3 Data Repository', async () => {
      const data = await api.writeS3DataRepository(mockS3DataRepositoryRequest);
      expect(data instanceof DataRepository).toBe(true);
    });

    it('Write an Azure Blob Data Repository', async () => {
      const data = await api.writeAzureBlobDataRepository(mockAzureBlobDataRepositoryRequest);
      expect(data instanceof DataRepository).toBe(true);
    });

    it('Write an CIFS Data Repository', async () => {
      const data = await api.writeCifsDataRepository(mockCifsDataRepositoryRequest);
      expect(data instanceof DataRepository).toBe(true);
    });

    it('Write an NFS Data Repository', async () => {
      const data = await api.writeNfsDataRepository(mockNfsDataRepositoryRequest);
      expect(data instanceof DataRepository).toBe(true);
    });
    it('Update a Data Repository', async () => {
      const data = await api.updateDataRepository(mockDiskDataRepositoryGuid, mockDiskDataRepositoryRequest);
      expect(data instanceof DataRepository).toBe(true);
    });

    it('Delete a Data Repository', async () => {
      const data = await api.deleteDataRepository(mockDiskDataRepositoryGuid);
      expect(data).toBe('true');
    });
  });
  // authentication
  describe('Authentication', () => {
    it('Check if a Tenant exist', async () => {
      const data = await api.retrieveTenantsForEmail(mockemail);
      expect(
        data.forEach((repository) => {
          expect(repository instanceof TenantMetadata).toBe(true);
        })
      );
    });
    it('throws error for invalid email', async () => {
      await expect(api.retrieveTenantsForEmail('')).rejects.toThrow();
    });
    // generateAuthenticationTokenByPassword
    it('generateAuthenticationTokenByPassword', async () => {
      const data = await api.generateAuthenticationTokenByPassword({
        email: mockemail,
        password: mockpassword,
        tenantGUID: mockTenantId,
      });
      expect(JSON.parse(data)).toHaveProperty('Valid');
    });
    it('throws error for invalid password', async () => {
      await expect(
        api.generateAuthenticationTokenByPassword({ email: '', password: '', tenantGUID: '' })
      ).rejects.toThrow();
      await expect(
        api.generateAuthenticationTokenByPassword({ email: mockemail, password: '', tenantGUID: '' })
      ).rejects.toThrow();
      await expect(
        api.generateAuthenticationTokenByPassword({ email: mockemail, password: mockpassword, tenantGUID: '' })
      ).rejects.toThrow();
    });
    //generateAuthenticationTokenBySHA256
    it('generateAuthenticationTokenBySHA256', async () => {
      const data = await api.generateAuthenticationTokenBySHA256({
        email: mockemail,
        passwordSHA256: mockpasswordSHA256,
        tenantGUID: mockTenantId,
      });
      expect(JSON.parse(data)).toHaveProperty('Valid');
    });
    it('throws error for invalid password', async () => {
      await expect(
        api.generateAuthenticationTokenBySHA256({ email: '', password: '', tenantGUID: '' })
      ).rejects.toThrow();
      await expect(
        api.generateAuthenticationTokenBySHA256({ email: mockemail, password: '', tenantGUID: '' })
      ).rejects.toThrow();
      await expect(
        api.generateAuthenticationTokenBySHA256({ email: mockemail, password: mockpassword, tenantGUID: '' })
      ).rejects.toThrow();
    });
    //generateAdministratorToken
    it('generateAdministratorToken', async () => {
      const data = await api.generateAdministratorToken({ email: mockemail, password: mockpassword });
      expect(JSON.parse(data)).toHaveProperty('Valid');
    });
    it('throws error for invalid password', async () => {
      await expect(api.generateAdministratorToken({ email: '', password: '' })).rejects.toThrow();
      await expect(
        api.generateAdministratorToken({ email: mockemail, password: '', tenantGUID: '' })
      ).rejects.toThrow();
    });
    //validateAuthenticationToken
    it('validateAuthenticationToken', async () => {
      const data = await api.validateAuthenticationToken({ token: token });
      expect(JSON.parse(data)).toHaveProperty('Valid');
    });
    it('throws error for invalid token', async () => {
      await expect(api.validateAuthenticationToken({ token: '' })).rejects.toThrow();
    });
    //retrieveTokenDetails
    it('retrieveTokenDetails', async () => {
      const data = await api.retrieveTokenDetails({ token: token });
      expect(JSON.parse(data)).toHaveProperty('Valid');
    });
    it('throws error for invalid token', async () => {
      await expect(api.retrieveTokenDetails({ token: '' })).rejects.toThrow();
    });
  });
});
