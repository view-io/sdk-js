import { http, HttpResponse } from 'msw';
import { mockWebhookTargetGuid, webhookTargetsData, webhookTargetsMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhooktargets`, ({ request, params, cookies }) => {
    return HttpResponse.json(webhookTargetsMockApiResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/webhooktargets/${mockWebhookTargetGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(webhookTargetsData[mockWebhookTargetGuid]);
    }
  ),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhooktargets`, ({ request, params, cookies }) => {
    return HttpResponse.json(webhookTargetsData[mockWebhookTargetGuid]);
  }),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/webhooktargets/${mockWebhookTargetGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(webhookTargetsData[mockWebhookTargetGuid]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/webhooktargets/${mockWebhookTargetGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('deleted');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/webhooktargets/${mockWebhookTargetGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/webhooktargets/${'wrongID'}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('false', { status: 404 });
    }
  ),
];
