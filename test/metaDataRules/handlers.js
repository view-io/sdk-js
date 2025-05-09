import { http, HttpResponse } from 'msw';
import { mockMetaDataRuleGuid, metaDataRulesData, metaDataRulesMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/metadatarules`, ({ request, params, cookies }) => {
    return HttpResponse.json(metaDataRulesMockApiResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/metadatarules/${mockMetaDataRuleGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(metaDataRulesData[mockMetaDataRuleGuid]);
    }
  ),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/metadatarules`, ({ request, params, cookies }) => {
    return HttpResponse.json(metaDataRulesData[mockMetaDataRuleGuid]);
  }),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/metadatarules/${mockMetaDataRuleGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(metaDataRulesData[mockMetaDataRuleGuid]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/metadatarules/${mockMetaDataRuleGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('deleted');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/metadatarules/${mockMetaDataRuleGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/metadatarules/${'wrongID'}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('false', { status: 404 });
    }
  ),
];
