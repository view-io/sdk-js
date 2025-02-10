import { getServer } from '../server';
import { handlers } from './handlers';
import { mockWebhookTargetGuid, webhookTargetsData, webhookTargetsMockApiResponse } from './mockData';
import { api } from '../setupTest';
import WebhookTarget from '../../src/models/WebhookTarget';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('WebhookTarget', () => {
    it('retrieves a WebhookTarget', async () => {
      const data = await api.retrieveWebhookTarget(mockWebhookTargetGuid);
      expect(data instanceof WebhookTarget).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookTarget(webhookTargetsData[mockWebhookTargetGuid])));
    });

    it('throws error when if missed guid while retrieving a WebhookTarget', async () => {
      try {
        await api.retrieveWebhookTarget();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a WebhookTarget with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveWebhookTarget(mockWebhookTargetGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all WebhookTarget', async () => {
      const data = await api.retrieveWebhookTargets();
      data.map((target) => {
        expect(JSON.stringify(target)).toBe(JSON.stringify(new WebhookTarget(webhookTargetsData[target.GUID])));
      });
    });

    it('creates a WebhookTarget', async () => {
      const data = await api.createWebhookTarget({
        TenantGUID: 'default',
        Name: 'My webhook target',
        Url: 'https://example.com/webhook/payment',
        ContentType: 'application/json',
        ExpectStatus: 200,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });
      expect(true).toBe(data instanceof WebhookTarget);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookTarget(webhookTargetsData[mockWebhookTargetGuid])));
    });

    it('throws error when creating a WebhookTarget with target parameter', async () => {
      try {
        await api.createWebhookTarget();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: target is null or empty');
      }
    });

    it('Update a WebhookTarget', async () => {
      const data = await api.updateWebhookTarget({
        GUID: mockWebhookTargetGuid,
        TenantGUID: 'default',
        Name: 'My webhook target',
        Url: 'https://example.com/webhook/payment',
        ContentType: 'application/json',
        ExpectStatus: 200,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });

      expect(true).toBe(data instanceof WebhookTarget);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookTarget(webhookTargetsData[mockWebhookTargetGuid])));
    });

    it('throws error when if missed guid while updating a WebhookTarget', async () => {
      try {
        await api.updateWebhookTarget();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: target is null or empty');
      }
    });

    it('delete a WebhookTarget', async () => {
      const data = await api.deleteWebhookTarget(mockWebhookTargetGuid);
      console.log('data: ', data);
      expect(data instanceof WebhookTarget).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookTarget(webhookTargetsData[mockWebhookTargetGuid])));
    });

    it('throws error when if missed guid while deleting a WebhookTarget', async () => {
      try {
        await api.deleteWebhookTarget();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a WebhookTarget exist', async () => {
      const data = await api.existsWebhookTarget(mockWebhookTargetGuid);
      expect(data).toBe('true');
    });

    it('Check if a WebhookTarget does not exist', async () => {
      const data = await api.existsWebhookTarget('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a WebhookTarget existance', async () => {
      try {
        await api.existsWebhookTarget();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
