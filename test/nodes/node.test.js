import { getServer } from '../server';
import { handlers } from './handlers';
import { mockNodeGuid, nodesData, nodesMockApiResponse } from './mockData';
import { api } from '../setupTest';
import NodeModal from '../../src/models/NodeModal';

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
      const data = await api.retrieveNode(mockNodeGuid);
      expect(data instanceof NodeModal).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new NodeModal(nodesData[mockNodeGuid])));
    });

    it('throws error when if missed guid while retrieving a Node', async () => {
      try {
        await api.retrieveNode();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a Node with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveNode(mockNodeGuid, 'default', cancelToken);
      cancelToken.abort();
    });

    it('retrieves all Node', async () => {
      const data = await api.retrieveNodes();
      data.map((node) => {
        expect(JSON.stringify(node)).toBe(JSON.stringify(new NodeModal(nodesData[node.GUID])));
      });
    });

    it('creates a Node', async () => {
      const data = await api.createNode({
        name: 'Default Tenant',
        hostname: 'localhost',
        InstanceType: 'StorageServer',
        LastStartUtc: '2024-09-23T11:55:18.607Z',
        CreatedUtc: '2024-09-23T11:55:18.607Z',
      });
      expect(true).toBe(data instanceof NodeModal);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new NodeModal(nodesData[mockNodeGuid])));
    });

    it('throws error when creating a Node with node parameter', async () => {
      try {
        await api.createNode();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: node is null or empty');
      }
    });

    it('Update a Node', async () => {
      const data = await api.updateNode({
        GUID: mockNodeGuid,
        name: 'Default Tenant',
        hostname: 'localhost',
        InstanceType: 'StorageServer',
        LastStartUtc: '2024-09-23T11:55:18.607Z',
        CreatedUtc: '2024-09-23T11:55:18.607Z',
      });

      expect(true).toBe(data instanceof NodeModal);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new NodeModal(nodesData[mockNodeGuid])));
    });

    it('throws error when if missed guid while updating a Node', async () => {
      try {
        await api.updateNode();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: node is null or empty');
      }
    });

    it('delete a Node', async () => {
      const data = await api.deleteNode(mockNodeGuid);
      expect(true).toBe(data instanceof NodeModal);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new NodeModal(nodesData[mockNodeGuid])));
    });

    it('throws error when if missed guid while deleting a Node', async () => {
      try {
        await api.deleteNode();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a Node exist', async () => {
      const data = await api.existsNode(mockNodeGuid);
      expect(data).toBe('true');
    });

    it('Check if a Node does not exist', async () => {
      const data = await api.existsNode('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a Node existance', async () => {
      try {
        await api.existsNode();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
