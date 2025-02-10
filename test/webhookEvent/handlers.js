import { http, HttpResponse } from 'msw';
import { mockWebhookEventGuid, webhookEventsData, webhookEventsMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookevents`, ({ request, params, cookies }) => {
        return HttpResponse.json(webhookEventsMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookevents/${mockWebhookEventGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(webhookEventsData[mockWebhookEventGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookevents`, ({ request, params, cookies }) => {
        return HttpResponse.json(webhookEventsData[mockWebhookEventGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookevents/${mockWebhookEventGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(webhookEventsData[mockWebhookEventGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookevents/${mockWebhookEventGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(webhookEventsData[mockWebhookEventGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookevents/${mockWebhookEventGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookevents/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
