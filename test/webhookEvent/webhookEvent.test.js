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

    // it('creates a WebhookEvent', async () => {
    //     const data = await api.createWebhookEvent({
    //         TenantGUID: 'default',
    //         FirstName: 'Updated',
    //         LastName: 'WebhookEvent',
    //         FullName: 'Updated WebhookEvent',
    //         Notes: 'Default password is password',
    //         Email: 'default@webhookEvent.com',
    //         Active: true,
    //         CreatedUtc: '2024-09-13T13:40:18.810482Z'
    //     });
    //     expect(true).toBe(data instanceof WebhookEvent);
    //     expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookEvent(webhookEventsData[mockWebhookEventGuid])));
    // });

    // it('throws error when creating a WebhookEvent with webhookEvent parameter', async () => {
    //     try {
    //         await api.createWebhookEvent();
    //     } catch (err) {
    //         expect(err instanceof Error).toBe(true);
    //         expect(err.toString()).toBe('Error: ArgumentNullException: webhookEvent is null or empty');
    //     }
    // });

    // it('Update a WebhookEvent', async () => {
    //     const data = await api.updateWebhookEvent({
    //         GUID: mockWebhookEventGuid,
    //         TenantGUID: 'default',
    //         FirstName: 'Updated',
    //         LastName: 'WebhookEvent',
    //         FullName: 'Updated WebhookEvent',
    //         Notes: 'Default password is password',
    //         Email: 'default@webhookEvent.com',
    //         Active: true,
    //         CreatedUtc: '2024-09-13T13:40:18.810482Z'
    //     });

    //     expect(true).toBe(data instanceof WebhookEvent);
    //     expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookEvent(webhookEventsData[mockWebhookEventGuid])));
    // });

    // it('throws error when if missed guid while updating a WebhookEvent', async () => {
    //     try {
    //         await api.updateWebhookEvent();
    //     } catch (err) {
    //         expect(err instanceof Error).toBe(true);
    //         expect(err.toString()).toBe('Error: ArgumentNullException: webhookEvent is null or empty');
    //     }
    // });

    // it('delete a WebhookEvent', async () => {
    //     const data = await api.deleteWebhookEvent(mockWebhookEventGuid);
    //     console.log('data: ', data);
    //     expect(data instanceof WebhookEvent).toBe(true);
    //     expect(JSON.stringify(data)).toBe(JSON.stringify(new WebhookEvent(webhookEventsData[mockWebhookEventGuid])));
    // });

    // it('throws error when if missed guid while deleting a WebhookEvent', async () => {
    //     try {
    //         await api.deleteWebhookEvent();
    //     } catch (err) {
    //         expect(err instanceof Error).toBe(true);
    //         expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
    //     }
    // });

    it('Check if a WebhookEvent exist', async () => {
      const data = await api.existsWebhookEvent(mockWebhookEventGuid);
      expect(data).toBe('true');
    });

    it('Check if a WebhookEvent does not exist', async () => {
      const data = await api.existsWebhookEvent('wrongID');
      expect(data).toBe('false');
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
