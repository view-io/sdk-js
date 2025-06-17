import { getServer } from '../server';
import { handlers } from './handlers';
import { mockWebhookRuleGuid, webhookRulesData, webhookRulesMockApiResponse } from './mockData';
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

  describe('WebhookRule', () => {
    it('retrieves a WebhookRule', async () => {
      const data = await api.WebhookRule.read(mockWebhookRuleGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(webhookRulesData[mockWebhookRuleGuid]);
    });

    it('throws error when if missed guid while retrieving a WebhookRule', async () => {
      try {
        await api.WebhookRule.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a WebhookRule with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.WebhookRule.read(mockWebhookRuleGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all WebhookRule', async () => {
      const data = await api.WebhookRule.readAll();
      data.map((rule) => {
        expect(rule).toEqual(webhookRulesData[rule.GUID]);
      });
    });

    it('creates a WebhookRule', async () => {
      const newWebhookRule = {
        TenantGUID: 'default',
        TargetGUID: 'default',
        Name: 'File Upload Rule',
        EventType: 'Unknown',
        MaxAttempts: 10,
        RetryIntervalMs: 30 * 1000,
        TimeoutMs: 60 * 1000,
        CreatedUtc: '2024-09-24T12:00:00Z',
      };
      const data = await api.WebhookRule.create(newWebhookRule);
      expect(data).toBeDefined();
      expect(data).toEqual(webhookRulesData[mockWebhookRuleGuid]);
    });

    it('throws error when creating a WebhookRule with rule parameter', async () => {
      try {
        await api.WebhookRule.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('Update a WebhookRule', async () => {
      const data = await api.WebhookRule.update({
        GUID: mockWebhookRuleGuid,
        TenantGUID: 'default',
        TargetGUID: 'default',
        Name: 'File Upload Rule',
        EventType: 'Unknown',
        MaxAttempts: 10,
        RetryIntervalMs: 30 * 1000,
        TimeoutMs: 60 * 1000,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(webhookRulesData[mockWebhookRuleGuid]);
    });

    it('throws error when if missed guid while updating a WebhookRule', async () => {
      try {
        await api.WebhookRule.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('delete a WebhookRule', async () => {
      const data = await api.WebhookRule.delete(mockWebhookRuleGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a WebhookRule', async () => {
      try {
        await api.WebhookRule.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a WebhookRule exist', async () => {
      const data = await api.WebhookRule.exists(mockWebhookRuleGuid);
      expect(data).toBe(true);
    });

    it('Check if a WebhookRule does not exist', async () => {
      try {
        await api.WebhookRule.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a WebhookRule existance', async () => {
      try {
        await api.WebhookRule.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
