import { getServer } from '../server';
import { handlers } from './handlers';
import { mockGraphGuid, graphsData, graphsMockApiResponse } from './mockData';
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

  describe('GraphRepository', () => {
    it('retrieves a GraphRepository', async () => {
      const data = await api.GraphRepository.read(mockGraphGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(graphsData[mockGraphGuid]);
    });

    it('throws error when if missed guid while retrieving a GraphRepository', async () => {
      try {
        await api.GraphRepository.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a GraphRepository with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.GraphRepository.read(mockGraphGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all GraphRepository', async () => {
      const data = await api.GraphRepository.readAll();
      data.forEach((repo) => {
        expect(repo).toEqual(graphsData[repo.GUID]);
      });
    });

    it('creates a GraphRepository', async () => {
      const newGraphRepository = {
        TenantGUID: 'default',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        Port: 0,
        GraphIdentifier: '11111111-1111-1111-1111-111111111111',
        CreatedUtc: '2024-09-13T13:40:19.017973Z',
      };
      const data = await api.GraphRepository.create(newGraphRepository);
      expect(data).toBeDefined();
      expect(data).toEqual(graphsData[mockGraphGuid]);
    });

    it('throws error when creating a GraphRepository with repo parameter', async () => {
      try {
        await api.GraphRepository.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: graph is null or empty');
      }
    });

    it('Update a GraphRepository', async () => {
      const data = await api.GraphRepository.update({
        GUID: mockGraphGuid,
        TenantGUID: 'default',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        Port: 0,
        GraphIdentifier: '11111111-1111-1111-1111-111111111111',
        CreatedUtc: '2024-09-13T13:40:19.017973Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(graphsData[mockGraphGuid]);
    });

    it('throws error when if missed guid while updating a GraphRepository', async () => {
      try {
        await api.GraphRepository.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: graph is null or empty');
      }
    });

    it('delete a GraphRepository', async () => {
      const data = await api.GraphRepository.delete(mockGraphGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a GraphRepository', async () => {
      try {
        await api.GraphRepository.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a GraphRepository exist', async () => {
      const data = await api.GraphRepository.exists(mockGraphGuid);
      expect(data).toBe(true);
    });

    it('Check if a GraphRepository does not exist', async () => {
      try {
        await api.GraphRepository.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a GraphRepository existance', async () => {
      try {
        await api.GraphRepository.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
