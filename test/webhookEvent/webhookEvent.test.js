import { getServer } from '../server';
import { handlers } from './handlers';
import { mockWebhookEventGuid, webhookEventsData, webhookEventsMockApiResponse } from './mockData';
import { api } from '../setupTest';
import WebhookEvent from '../../src/models/WebhookEvent';

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
      const data = await api.retrieveWebhookEvent(mockWebhookEventGuid);
      expect(data instanceof WebhookEvent).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookEvent(webhookEventsData[mockWebhookEventGuid])));
    });

    it('throws error when if missed guid while retrieving a WebhookEvent', async () => {
      try {
        await api.retrieveWebhookEvent();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a WebhookEvent with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveWebhookEvent(mockWebhookEventGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all WebhookEvent', async () => {
      const data = await api.retrieveWebhookEvents();
      data.map((webhookEvent) => {
        expect(JSON.stringify(webhookEvent)).toBe(
          JSON.stringify(new WebhookEvent(webhookEventsData[webhookEvent.GUID]))
        );
      });
    });

    it('Check if a WebhookEvent exist', async () => {
      const data = await api.existsWebhookEvent(mockWebhookEventGuid);
      expect(data).toBe('true');
    });

    it('Check if a WebhookEvent does not exist', async () => {
      try {
        await api.existsWebhookEvent('wrongID');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a WebhookEvent existance', async () => {
      try {
        await api.existsWebhookEvent();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
