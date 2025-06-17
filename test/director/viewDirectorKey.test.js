import { getServer } from '../server';
import { handlers } from './handlers';
import { mockDirectorEmbeddingRequest, mockDirectorEmbeddingResponse } from './mockData';
import { apiDirectorSdk } from '../setupTest';

const server = getServer(handlers);

describe('ViewDirectorSdk', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('Embedding', () => {
    it('generate embedding', async () => {
      const data = await apiDirectorSdk.Embedding.generateEmbedding(mockDirectorEmbeddingRequest);
      expect(data).toBeDefined();
      expect(data).toEqual(mockDirectorEmbeddingResponse);
    });

    it('retrieve connection', async () => {
      const data = await apiDirectorSdk.Embedding.retrieveConnections();
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });
  });
});
