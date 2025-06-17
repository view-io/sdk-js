import { getServer } from '../server';
import { handlers } from './handlers';
import { mockVectorGuid, vectorsData, vectorsMockApiResponse } from './mockData';
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

  describe('VectorRepository', () => {
    it('retrieves a VectorRepository', async () => {
      const data = await api.VectorRepository.read(mockVectorGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(vectorsData[mockVectorGuid]);
    });

    it('throws error when if missed guid while retrieving a VectorRepository', async () => {
      try {
        await api.VectorRepository.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a VectorRepository with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.VectorRepository.read(mockVectorGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all VectorRepository', async () => {
      const data = await api.VectorRepository.readAll();
      data.forEach((repo) => {
        expect(repo).toEqual(vectorsData[repo.GUID]);
      });
    });

    it('creates a VectorRepository', async () => {
      const newVectorRepository = {
        TenantGUID: 'default',
        Name: 'My vector repository',
        RepositoryType: 'Pgvector',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        DatabaseHostname: 'localhost',
        DatabaseName: 'vectordb',
        DatabaseTable: 'minilm',
        DatabasePort: 5432,
        DatabaseUser: 'postgres',
        DatabasePassword: 'password',
        PromptPrefix:
          'Use the following pieces of context to answer the question at the end. Documents are sorted by similarity to the question. If the context is not enough for you to answer the question, please politely explain that you do not have relevant context. Do not try to make up an answer.',
        CreatedUtc: '2024-09-13T13:40:19.066552Z',
      };
      const data = await api.VectorRepository.create(newVectorRepository);
      expect(data).toBeDefined();
      expect(data).toEqual(vectorsData[mockVectorGuid]);
    });

    it('throws error when creating a VectorRepository with repo parameter', async () => {
      try {
        await api.VectorRepository.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: repo is null or empty');
      }
    });

    it('Update a VectorRepository', async () => {
      const data = await api.VectorRepository.update({
        GUID: mockVectorGuid,
        TenantGUID: 'default',
        Name: 'My vector repository',
        RepositoryType: 'Pgvector',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        DatabaseHostname: 'localhost',
        DatabaseName: 'vectordb',
        DatabaseTable: 'minilm',
        DatabasePort: 5432,
        DatabaseUser: 'postgres',
        DatabasePassword: 'password',
        PromptPrefix:
          'Use the following pieces of context to answer the question at the end. Documents are sorted by similarity to the question. If the context is not enough for you to answer the question, please politely explain that you do not have relevant context. Do not try to make up an answer.',
        CreatedUtc: '2024-09-13T13:40:19.066552Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(vectorsData[mockVectorGuid]);
    });

    it('throws error when if missed guid while updating a VectorRepository', async () => {
      try {
        await api.VectorRepository.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: vector is null or empty');
      }
    });

    it('delete a VectorRepository', async () => {
      const data = await api.VectorRepository.delete(mockVectorGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a VectorRepository', async () => {
      try {
        await api.VectorRepository.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a VectorRepository exist', async () => {
      const data = await api.VectorRepository.exists(mockVectorGuid);
      expect(data).toBe(true);
    });

    it('Check if a VectorRepository does not exist', async () => {
      try {
        await api.VectorRepository.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a VectorRepository existance', async () => {
      try {
        await api.VectorRepository.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
