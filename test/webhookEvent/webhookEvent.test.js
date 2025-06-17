import { getServer } from '../server';
import { handlers } from './handlers';
import { mockWebhookEventGuid, webhookEventsData, webhookEventsMockApiResponse } from './mockData';
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

  describe('WebhookEvent', () => {
    it('retrieves a WebhookEvent', async () => {
      const data = await api.WebhookEvent.read(mockWebhookEventGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(webhookEventsData[mockWebhookEventGuid]);
    });

    it('throws error when if missed guid while retrieving a WebhookEvent', async () => {
      try {
        await api.WebhookEvent.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a WebhookEvent with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.WebhookEvent.read(mockWebhookEventGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all WebhookEvent', async () => {
      const data = await api.WebhookEvent.readAll();
      data.map((webhookEvent) => {
        expect(webhookEvent).toEqual(webhookEventsData[webhookEvent.GUID]);
      });
    });

    it('Check if a WebhookEvent exist', async () => {
      const data = await api.WebhookEvent.exists(mockWebhookEventGuid);
      expect(data).toBe(true);
    });

    it('Check if a WebhookEvent does not exist', async () => {
      try {
        await api.WebhookEvent.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a WebhookEvent existance', async () => {
      try {
        await api.WebhookEvent.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
