import { getServer } from '../server';
import { handlers } from './handlers';
import { mockViewEndpointGuid, viewEndpointsData } from './mockData';
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

  describe('ViewEndpoint', () => {
    it('retrieves a ViewEndpoint', async () => {
      const data = await api.Endpoint.read(mockViewEndpointGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(viewEndpointsData[mockViewEndpointGuid]);
    });

    it('throws error when if missed guid while retrieving a ViewEndpoint', async () => {
      try {
        await api.Endpoint.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a ViewEndpoint with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.Endpoint.read(mockViewEndpointGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all ViewEndpoint', async () => {
      const data = await api.Endpoint.readAll();
      data.forEach((endpoint) => {
        expect(endpoint).toBeDefined();
        expect(endpoint).toEqual(viewEndpointsData[endpoint.GUID]);
      });
    });

    it('creates a ViewEndpoint', async () => {
      const data = await api.Endpoint.create({
        TenantGUID: 'default',
        OwnerGUID: 'default',
        Name: 'My View endpoint',
        UseSsl: false,
        S3Url: 'http://localhost:8002/',
        S3BaseUrl: 'http://localhost:8002/{bucket}/{key}',
        RestUrl: 'http://localhost:8001/',
        BucketName: 'data',
        Region: 'us-west-1',
        AccessKey: null,
        SecretKey: null,
        ApiKey: null,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });
      expect(data).toBeDefined();
      expect(data).toEqual(viewEndpointsData[mockViewEndpointGuid]);
    });

    it('throws error when creating a ViewEndpoint with endpoint parameter', async () => {
      try {
        await api.Endpoint.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: endpoint is null or empty');
      }
    });

    it('Update a ViewEndpoint', async () => {
      const data = await api.Endpoint.update({
        GUID: mockViewEndpointGuid,
        TenantGUID: 'default',
        OwnerGUID: 'default',
        Name: 'My View endpoint',
        UseSsl: false,
        S3Url: 'http://localhost:8002/',
        S3BaseUrl: 'http://localhost:8002/{bucket}/{key}',
        RestUrl: 'http://localhost:8001/',
        BucketName: 'data',
        Region: 'us-west-1',
        AccessKey: null,
        SecretKey: null,
        ApiKey: null,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(viewEndpointsData[mockViewEndpointGuid]);
    });

    it('throws error when if missed guid while updating a ViewEndpoint', async () => {
      try {
        await api.Endpoint.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: endpoint is null or empty');
      }
    });

    it('delete a ViewEndpoint', async () => {
      const data = await api.Endpoint.delete(mockViewEndpointGuid);
      expect(data).toBeDefined();
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a ViewEndpoint', async () => {
      try {
        await api.Endpoint.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a ViewEndpoint exist', async () => {
      const data = await api.Endpoint.exists(mockViewEndpointGuid);
      expect(data).toBe(true);
    });

    it('Check if a ViewEndpoint does not exist', async () => {
      try {
        await api.Endpoint.exists('wrongID');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a ViewEndpoint existance', async () => {
      try {
        await api.Endpoint.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
