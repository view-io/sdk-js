import { getServer } from '../server';
import { handlers } from './handlers';
import { mockEmbeddingsRuleGuid, embeddingsRulesData, embeddingsRulesMockApiResponse } from './mockData';
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

  describe('EmbeddingsRule', () => {
    it('retrieves a EmbeddingsRule', async () => {
      const data = await api.EmbeddingRule.read(mockEmbeddingsRuleGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(embeddingsRulesData[mockEmbeddingsRuleGuid]);
    });

    it('throws error when if missed guid while retrieving a EmbeddingsRule', async () => {
      try {
        await api.EmbeddingRule.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a EmbeddingsRule with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.EmbeddingRule.read(mockEmbeddingsRuleGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all EmbeddingsRule', async () => {
      const data = await api.EmbeddingRule.readAll();
      data.map((rule) => {
        expect(rule).toEqual(embeddingsRulesData[rule.GUID]);
      });
    });

    it('creates a EmbeddingsRule', async () => {
      const newEmbeddingsRule = {
        TenantGUID: 'default',
        OwnerGUID: 'default',
        Name: 'Example Embeddings Rule',
        ContentType: 'application/json',
        DataFlowEndpoint: 'http://localhost:8501/customDataFlow',
        EmbeddingsGenerator: 'CustomGenerator',
        BatchSize: 8,
        MaxGeneratorTasks: 10,
        MaxContentLength: 8 * 1024 * 1024,
        CreatedUtc: '2024-09-24T12:00:00Z',
      };
      const data = await api.EmbeddingRule.create(newEmbeddingsRule);
      expect(data).toBeDefined();
      expect(data).toEqual(embeddingsRulesData[mockEmbeddingsRuleGuid]);
    });

    it('throws error when creating a EmbeddingsRule with rule parameter', async () => {
      try {
        await api.EmbeddingRule.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('Update a EmbeddingsRule', async () => {
      const data = await api.EmbeddingRule.update({
        GUID: mockEmbeddingsRuleGuid,
        TenantGUID: 'default',
        OwnerGUID: 'default',
        Name: 'Example Embeddings Rule',
        ContentType: 'application/json',
        DataFlowEndpoint: 'http://localhost:8501/customDataFlow',
        EmbeddingsGenerator: 'CustomGenerator',
        BatchSize: 8,
        MaxGeneratorTasks: 10,
        MaxContentLength: 8 * 1024 * 1024,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(embeddingsRulesData[mockEmbeddingsRuleGuid]);
    });

    it('throws error when if missed guid while updating a EmbeddingsRule', async () => {
      try {
        await api.EmbeddingRule.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('delete a EmbeddingsRule', async () => {
      const data = await api.EmbeddingRule.delete(mockEmbeddingsRuleGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a EmbeddingsRule', async () => {
      try {
        await api.EmbeddingRule.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a EmbeddingsRule exist', async () => {
      try {
        const data = await api.EmbeddingRule.exists(mockEmbeddingsRuleGuid);
        expect(data).toBe(true);
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('Check if a EmbeddingsRule does not exist', async () => {
      try {
        await api.EmbeddingRule.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a EmbeddingsRule existance', async () => {
      try {
        await api.EmbeddingRule.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
