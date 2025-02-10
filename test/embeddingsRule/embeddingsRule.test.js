import { getServer } from '../server';
import { handlers } from './handlers';
import { mockEmbeddingsRuleGuid, embeddingsRulesData, embeddingsRulesMockApiResponse } from './mockData';
import { api } from '../setupTest';
import EmbeddingsRule from '../../src/models/EmbeddingsRule';

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
      const data = await api.retrieveEmbeddingsRule(mockEmbeddingsRuleGuid);
      expect(data instanceof EmbeddingsRule).toBe(true);
      expect(JSON.stringify(data)).toBe(
        JSON.stringify(new EmbeddingsRule(embeddingsRulesData[mockEmbeddingsRuleGuid]))
      );
    });

    it('throws error when if missed guid while retrieving a EmbeddingsRule', async () => {
      try {
        await api.retrieveEmbeddingsRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a EmbeddingsRule with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveEmbeddingsRule(mockEmbeddingsRuleGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all EmbeddingsRule', async () => {
      const data = await api.retrieveEmbeddingsRules();
      data.map((rule) => {
        expect(JSON.stringify(rule)).toBe(JSON.stringify(new EmbeddingsRule(embeddingsRulesData[rule.GUID])));
      });
    });

    it('creates a EmbeddingsRule', async () => {
      const data = await api.createEmbeddingsRule({
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
      expect(true).toBe(data instanceof EmbeddingsRule);
      expect(JSON.stringify(data)).toBe(
        JSON.stringify(new EmbeddingsRule(embeddingsRulesData[mockEmbeddingsRuleGuid]))
      );
    });

    it('throws error when creating a EmbeddingsRule with rule parameter', async () => {
      try {
        await api.createEmbeddingsRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('Update a EmbeddingsRule', async () => {
      const data = await api.updateEmbeddingsRule({
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

      expect(true).toBe(data instanceof EmbeddingsRule);
      expect(JSON.stringify(data)).toBe(
        JSON.stringify(new EmbeddingsRule(embeddingsRulesData[mockEmbeddingsRuleGuid]))
      );
    });

    it('throws error when if missed guid while updating a EmbeddingsRule', async () => {
      try {
        await api.updateEmbeddingsRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('delete a EmbeddingsRule', async () => {
      const data = await api.deleteEmbeddingsRule(mockEmbeddingsRuleGuid);
      console.log('data: ', data);
      expect(data instanceof EmbeddingsRule).toBe(true);
      expect(JSON.stringify(data)).toBe(
        JSON.stringify(new EmbeddingsRule(embeddingsRulesData[mockEmbeddingsRuleGuid]))
      );
    });

    it('throws error when if missed guid while deleting a EmbeddingsRule', async () => {
      try {
        await api.deleteEmbeddingsRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a EmbeddingsRule exist', async () => {
      const data = await api.existsEmbeddingsRule(mockEmbeddingsRuleGuid);
      expect(data).toBe('true');
    });

    it('Check if a EmbeddingsRule does not exist', async () => {
      const data = await api.existsEmbeddingsRule('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a EmbeddingsRule existance', async () => {
      try {
        await api.existsEmbeddingsRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
