import { http, HttpResponse } from 'msw';
import { mockWebhookRuleGuid, webhookRulesData, webhookRulesMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookrules`, ({ request, params, cookies }) => {
    return HttpResponse.json(webhookRulesMockApiResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookrules/${mockWebhookRuleGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(webhookRulesData[mockWebhookRuleGuid]);
    }
  ),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookrules`, ({ request, params, cookies }) => {
    return HttpResponse.json(webhookRulesData[mockWebhookRuleGuid]);
  }),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookrules/${mockWebhookRuleGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(webhookRulesData[mockWebhookRuleGuid]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookrules/${mockWebhookRuleGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('deleted');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookrules/${mockWebhookRuleGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/webhookrules/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false', { status: 404 });
  }),
];
