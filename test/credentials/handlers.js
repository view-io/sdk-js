import { http, HttpResponse } from 'msw';
import { mockCredentialGuid, credentialsData, credentialsMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/credentials`, ({ request, params, cookies }) => {
    return HttpResponse.json(credentialsMockApiResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/credentials/${mockCredentialGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(credentialsData[mockCredentialGuid]);
    }
  ),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/credentials`, ({ request, params, cookies }) => {
    return HttpResponse.json(credentialsData[mockCredentialGuid]);
  }),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/credentials/${mockCredentialGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(credentialsData[mockCredentialGuid]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/credentials/${mockCredentialGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(credentialsData[mockCredentialGuid]);
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/credentials/${mockCredentialGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/credentials/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false').status(404);
  }),
];
