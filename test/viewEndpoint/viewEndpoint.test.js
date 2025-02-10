import { getServer } from '../server';
import { handlers } from './handlers';
import { mockViewEndpointGuid, viewEndpointsData, viewEndpointsMockApiResponse } from './mockData';
import { api } from '../setupTest';
import ViewEndpoint from '../../src/models/ViewEndpoint';

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
      const data = await api.retrieveViewEndpoint(mockViewEndpointGuid);
      expect(data instanceof ViewEndpoint).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new ViewEndpoint(viewEndpointsData[mockViewEndpointGuid])));
    });

    it('throws error when if missed guid while retrieving a ViewEndpoint', async () => {
      try {
        await api.retrieveViewEndpoint();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a ViewEndpoint with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveViewEndpoint(mockViewEndpointGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all ViewEndpoint', async () => {
      const data = await api.retrieveViewEndpoints();
      data.forEach((endpoint) => {
        expect(JSON.stringify(endpoint)).toBe(JSON.stringify(new ViewEndpoint(viewEndpointsData[endpoint.GUID])));
      });
    });

    it('creates a ViewEndpoint', async () => {
      const data = await api.createViewEndpoint({
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
      expect(true).toBe(data instanceof ViewEndpoint);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new ViewEndpoint(viewEndpointsData[mockViewEndpointGuid])));
    });

    it('throws error when creating a ViewEndpoint with endpoint parameter', async () => {
      try {
        await api.createViewEndpoint();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: endpoint is null or empty');
      }
    });

    it('Update a ViewEndpoint', async () => {
      const data = await api.updateViewEndpoint({
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

      expect(true).toBe(data instanceof ViewEndpoint);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new ViewEndpoint(viewEndpointsData[mockViewEndpointGuid])));
    });

    it('throws error when if missed guid while updating a ViewEndpoint', async () => {
      try {
        await api.updateViewEndpoint();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: endpoint is null or empty');
      }
    });

    it('delete a ViewEndpoint', async () => {
      const data = await api.deleteViewEndpoint(mockViewEndpointGuid);
      console.log('data: ', data);
      expect(data instanceof ViewEndpoint).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new ViewEndpoint(viewEndpointsData[mockViewEndpointGuid])));
    });

    it('throws error when if missed guid while deleting a ViewEndpoint', async () => {
      try {
        await api.deleteViewEndpoint();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a ViewEndpoint exist', async () => {
      const data = await api.existsViewEndpoint(mockViewEndpointGuid);
      expect(data).toBe('true');
    });

    it('Check if a ViewEndpoint does not exist', async () => {
      const data = await api.existsViewEndpoint('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a ViewEndpoint existance', async () => {
      try {
        await api.existsViewEndpoint();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
