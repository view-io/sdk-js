import { http, HttpResponse } from 'msw';
import { mockEmbeddingsRuleGuid, embeddingsRulesData, embeddingsRulesMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddingsrules`, ({ request, params, cookies }) => {
        return HttpResponse.json(embeddingsRulesMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddingsrules/${mockEmbeddingsRuleGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(embeddingsRulesData[mockEmbeddingsRuleGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddingsrules`, ({ request, params, cookies }) => {
        return HttpResponse.json(embeddingsRulesData[mockEmbeddingsRuleGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddingsrules/${mockEmbeddingsRuleGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(embeddingsRulesData[mockEmbeddingsRuleGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddingsrules/${mockEmbeddingsRuleGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(embeddingsRulesData[mockEmbeddingsRuleGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddingsrules/${mockEmbeddingsRuleGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddingsrules/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
