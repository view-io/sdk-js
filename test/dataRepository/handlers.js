import { http, HttpResponse } from 'msw';
import { mockDataRepositoryGuid, dataRepositorysData, dataRepositorysMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories`, ({ request, params, cookies }) => {
    return HttpResponse.json(dataRepositorysMockApiResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${mockDataRepositoryGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(dataRepositorysData[mockDataRepositoryGuid]);
    }
  ),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories`, ({ request, params, cookies }) => {
    return HttpResponse.json(dataRepositorysData[mockDataRepositoryGuid]);
  }),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${mockDataRepositoryGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(dataRepositorysData[mockDataRepositoryGuid]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${mockDataRepositoryGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${mockDataRepositoryGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${'wrongID'}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('false', { status: 404 });
    }
  ),
];
