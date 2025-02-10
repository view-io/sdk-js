import { getServer } from '../server';
import { handlers } from './handlers';
import { mockWebhookRuleGuid, webhookRulesData, webhookRulesMockApiResponse } from './mockData';
import { api } from '../setupTest';
import WebhookRule from '../../src/models/WebhookRule';

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
      const data = await api.retrieveWebhookRule(mockWebhookRuleGuid);
      expect(data instanceof WebhookRule).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookRule(webhookRulesData[mockWebhookRuleGuid])));
    });

    it('throws error when if missed guid while retrieving a WebhookRule', async () => {
      try {
        await api.retrieveWebhookRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a WebhookRule with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveWebhookRule(mockWebhookRuleGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all WebhookRule', async () => {
      const data = await api.retrieveWebhookRules();
      data.map((rule) => {
        expect(JSON.stringify(rule)).toBe(JSON.stringify(new WebhookRule(webhookRulesData[rule.GUID])));
      });
    });

    it('creates a WebhookRule', async () => {
      const data = await api.createWebhookRule({
        TenantGUID: 'default',
        TargetGUID: 'default',
        Name: 'File Upload Rule',
        EventType: 'Unknown',
        MaxAttempts: 10,
        RetryIntervalMs: 30 * 1000,
        TimeoutMs: 60 * 1000,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });
      expect(data instanceof WebhookRule).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookRule(webhookRulesData[mockWebhookRuleGuid])));
    });

    it('throws error when creating a WebhookRule with rule parameter', async () => {
      try {
        await api.createWebhookRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('Update a WebhookRule', async () => {
      const data = await api.updateWebhookRule({
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

      expect(data instanceof WebhookRule).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookRule(webhookRulesData[mockWebhookRuleGuid])));
    });

    it('throws error when if missed guid while updating a WebhookRule', async () => {
      try {
        await api.updateWebhookRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('delete a WebhookRule', async () => {
      const data = await api.deleteWebhookRule(mockWebhookRuleGuid);
      console.log('data: ', data);
      expect(data instanceof WebhookRule).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookRule(webhookRulesData[mockWebhookRuleGuid])));
    });

    it('throws error when if missed guid while deleting a WebhookRule', async () => {
      try {
        await api.deleteWebhookRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a WebhookRule exist', async () => {
      const data = await api.existsWebhookRule(mockWebhookRuleGuid);
      expect(data).toBe('true');
    });

    it('Check if a WebhookRule does not exist', async () => {
      const data = await api.existsWebhookRule('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a WebhookRule existance', async () => {
      try {
        await api.existsWebhookRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
