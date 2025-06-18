import { getServer } from '../server';
import { handlers } from './handlers';
import { mockWebhookTargetGuid, webhookTargetsData, webhookTargetsMockApiResponse } from './mockData';
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

  describe('WebhookTarget', () => {
    it('retrieves a WebhookTarget', async () => {
      const data = await api.WebhookTarget.read(mockWebhookTargetGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(webhookTargetsData[mockWebhookTargetGuid]);
    });

    it('throws error when if missed guid while retrieving a WebhookTarget', async () => {
      try {
        await api.WebhookTarget.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a WebhookTarget with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.WebhookTarget.read(mockWebhookTargetGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all WebhookTarget', async () => {
      const data = await api.WebhookTarget.readAll();
      data.map((target) => {
        expect(target).toEqual(webhookTargetsData[target.GUID]);
      });
    });

    it('creates a WebhookTarget', async () => {
      const newWebhookTarget = {
        TenantGUID: 'default',
        Name: 'My webhook target',
        Url: 'https://example.com/webhook/payment',
        ContentType: 'application/json',
        ExpectStatus: 200,
        CreatedUtc: '2024-09-24T12:00:00Z',
      };
      const data = await api.WebhookTarget.create(newWebhookTarget);
      expect(data).toBeDefined();
      expect(data).toEqual(webhookTargetsData[mockWebhookTargetGuid]);
    });

    it('throws error when creating a WebhookTarget with target parameter', async () => {
      try {
        await api.WebhookTarget.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: target is null or empty');
      }
    });

    it('Update a WebhookTarget', async () => {
      const data = await api.WebhookTarget.update({
        GUID: mockWebhookTargetGuid,
        TenantGUID: 'default',
        Name: 'My webhook target',
        Url: 'https://example.com/webhook/payment',
        ContentType: 'application/json',
        ExpectStatus: 200,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(webhookTargetsData[mockWebhookTargetGuid]);
    });

    it('throws error when if missed guid while updating a WebhookTarget', async () => {
      try {
        await api.WebhookTarget.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: target is null or empty');
      }
    });

    it('delete a WebhookTarget', async () => {
      const data = await api.WebhookTarget.delete(mockWebhookTargetGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a WebhookTarget', async () => {
      try {
        await api.WebhookTarget.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a WebhookTarget exist', async () => {
      const data = await api.WebhookTarget.exists(mockWebhookTargetGuid);
      expect(data).toBe(true);
    });

    it('Check if a WebhookTarget does not exist', async () => {
      try {
        await api.WebhookTarget.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a WebhookTarget existance', async () => {
      try {
        await api.WebhookTarget.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
