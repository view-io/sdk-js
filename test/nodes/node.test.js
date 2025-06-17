import { getServer } from '../server';
import { handlers } from './handlers';
import { mockNodeGuid, nodesData, nodesMockApiResponse } from './mockData';
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

  describe('Node', () => {
    it('retrieves a Node', async () => {
      const data = await api.Nodes.read(mockNodeGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(nodesData[mockNodeGuid]);
    });

    it('throws error when if missed guid while retrieving a Node', async () => {
      try {
        await api.Nodes.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a Node with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.Nodes.read(mockNodeGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all Node', async () => {
      const data = await api.Nodes.readAll();
      data.map((node) => {
        expect(node).toEqual(nodesData[node.GUID]);
      });
    });

    it('creates a Node', async () => {
      const newNode = {
        name: 'Default Tenant',
        hostname: 'localhost',
        InstanceType: 'StorageServer',
        LastStartUtc: '2024-09-23T11:55:18.607Z',
        CreatedUtc: '2024-09-23T11:55:18.607Z',
      };
      const data = await api.Nodes.create(newNode);
      expect(data).toBeDefined();
      expect(data).toEqual(nodesData[mockNodeGuid]);
    });

    it('throws error when creating a Node with node parameter', async () => {
      try {
        await api.Nodes.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: node is null or empty');
      }
    });

    it('Update a Node', async () => {
      const data = await api.Nodes.update({
        GUID: mockNodeGuid,
        name: 'Default Tenant',
        hostname: 'localhost',
        InstanceType: 'StorageServer',
        LastStartUtc: '2024-09-23T11:55:18.607Z',
        CreatedUtc: '2024-09-23T11:55:18.607Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(nodesData[mockNodeGuid]);
    });

    it('throws error when if missed guid while updating a Node', async () => {
      try {
        await api.Nodes.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: node is null or empty');
      }
    });

    it('delete a Node', async () => {
      const data = await api.Nodes.delete(mockNodeGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a Node', async () => {
      try {
        await api.Nodes.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a Node exist', async () => {
      const data = await api.Nodes.exists(mockNodeGuid);
      expect(data).toBe(true);
    });

    it('Check if a Node does not exist', async () => {
      try {
        const data = await api.Nodes.exists('wrongID');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a Node existance', async () => {
      try {
        await api.Nodes.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
