import { getServer } from '../server';
import { handlers } from './handlers';
import { tenantData, mockTenantData } from './mockData';
import { api, mockTenantId } from '../setupTest';

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
      const data = await api.Tenant.read(mockTenantId);
      expect(data).toBeDefined();
      expect(data).toEqual(tenantData[mockTenantId]);
    });

    it('retrieves all tenants', async () => {
      const data = await api.Tenant.readAll();
      expect(data).toBeDefined();
      expect(data).toEqual(tenantData);
    });

    it('creates a tenant', async () => {
      const data = await api.Tenant.create({
        GUID: mockTenantId,
        Name: 'Default Tenant',
        Region: 'us-west-1',
      });
    });

    it('throws error when if missed guid while retrieving a Tenant', async () => {
      try {
        await api.Tenant.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('throws error when if missed guid while creating a Tenant', async () => {
      try {
        await api.Tenant.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant is null or empty');
      }
    });

    it('throws error when if missed guid while deleting a Tenant', async () => {
      try {
        await api.Tenant.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('throws error when if missed guid while updating a Tenant', async () => {
      try {
        await api.Tenant.update({
          GUID: mockTenantId,
          Name: 'Default Tenant',
          Region: 'us-west-1',
          S3BaseDomain: 'localhost',
          RestBaseDomain: '',
        });
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant is null or empty');
      }
    });

    it('Update a Tenant', async () => {
      const data = await api.Tenant.update({
        GUID: mockTenantId,
        Name: 'Default Tenant',
        Region: 'us-west-1',
        S3BaseDomain: 'localhost',
        RestBaseDomain: '',
        DefaultPoolGUID: 'default',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.751202Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(tenantData[mockTenantId]);
    });

    it('throws error when if missed tenant while updating a Tenant', async () => {
      try {
        await api.Tenant.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant is null or empty');
      }
    });

    it('Check if a Tenant exist', async () => {
      const data = await api.Tenant.exists(mockTenantId);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while checking a Tenant existance', async () => {
      try {
        await api.Tenant.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a Tenant does not exist', async () => {
      try {
        await api.Tenant.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('deletes a tenant', async () => {
      const r = await api.Tenant.delete(mockTenantId);
      // If successful, no errors should occur
      expect(r).toBe(true);
    });

    it('throws error when if missed guid while deleting a Tenant', async () => {
      try {
        await api.Tenant.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
