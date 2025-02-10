import { getServer } from '../server';
import { handlers } from './handlers';
import { tenantData, mockTenantData } from './mockData';
import { api, mockTenantId } from '../setupTest';
import TenantMetadata from '../../src/models/TenantMetadata';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('Tenant', () => {
    it('retrieves tenant', async () => {
      const data = await api.retrieveTenant(mockTenantId);
      expect(true).toBe(data instanceof TenantMetadata);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new TenantMetadata(tenantData[mockTenantId])));
    });

    it('Update a Tenant', async () => {
      const data = await api.updateTenant(mockTenantId, {
        GUID: mockTenantId,
        Name: 'Default Tenant',
        Region: 'us-west-1',
        S3BaseDomain: 'localhost',
        RestBaseDomain: '',
        DefaultPoolGUID: 'default',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.751202Z',
      });

      expect(data instanceof TenantMetadata).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new TenantMetadata(tenantData[mockTenantId])));
    });

    it('throws error when if missed guid while updating a Tenant', async () => {
      try {
        await api.updateTenant();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant is null or empty');
      }
    });
  });

  it('deletes a tenant', async () => {
    const r = await api.deleteTenant(mockTenantId, 'token');
    // If successful, no errors should occur
    expect(r).toBe('true');
  });
});
