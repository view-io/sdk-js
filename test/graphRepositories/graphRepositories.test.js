import { getServer } from '../server';
import { handlers } from './handlers';
import { mockGraphGuid, graphsData, graphsMockApiResponse } from './mockData';
import { api } from '../setupTest';
import GraphRepository from '../../src/models/GraphRepository';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('GraphRepository', () => {
    it('retrieves a GraphRepository', async () => {
      const data = await api.retrieveGraphRepository(mockGraphGuid);
      expect(data instanceof GraphRepository).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new GraphRepository(graphsData[mockGraphGuid])));
    });

    it('throws error when if missed guid while retrieving a GraphRepository', async () => {
      try {
        await api.retrieveGraphRepository();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a GraphRepository with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveGraphRepository(mockGraphGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all GraphRepository', async () => {
      const data = await api.retrieveGraphRepositories();
      data.forEach((repo) => {
        expect(JSON.stringify(repo)).toBe(JSON.stringify(new GraphRepository(graphsData[repo.GUID])));
      });
    });

    it('creates a GraphRepository', async () => {
      const data = await api.createGraphRepository({
        TenantGUID: 'default',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        Port: 0,
        GraphIdentifier: '11111111-1111-1111-1111-111111111111',
        CreatedUtc: '2024-09-13T13:40:19.017973Z',
      });
      expect(true).toBe(data instanceof GraphRepository);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new GraphRepository(graphsData[mockGraphGuid])));
    });

    it('throws error when creating a GraphRepository with repo parameter', async () => {
      try {
        await api.createGraphRepository();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: graph is null or empty');
      }
    });

    it('Update a GraphRepository', async () => {
      const data = await api.updateGraphRepository({
        GUID: mockGraphGuid,
        TenantGUID: 'default',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        Port: 0,
        GraphIdentifier: '11111111-1111-1111-1111-111111111111',
        CreatedUtc: '2024-09-13T13:40:19.017973Z',
      });

      expect(true).toBe(data instanceof GraphRepository);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new GraphRepository(graphsData[mockGraphGuid])));
    });

    it('throws error when if missed guid while updating a GraphRepository', async () => {
      try {
        await api.updateGraphRepository();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: graph is null or empty');
      }
    });

    it('delete a GraphRepository', async () => {
      const data = await api.deleteGraphRepository(mockGraphGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a GraphRepository', async () => {
      try {
        await api.deleteGraphRepository();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a GraphRepository exist', async () => {
      const data = await api.existsGraphRepository(mockGraphGuid);
      expect(data).toBe('true');
    });

    it('Check if a GraphRepository does not exist', async () => {
      try {
        const data = await api.existsGraphRepository('wrongID');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a GraphRepository existance', async () => {
      try {
        await api.existsGraphRepository();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
