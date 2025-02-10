import { http, HttpResponse } from 'msw';
import { mockEndpoint, mockTenantId } from '../setupTest';
import { mockCollectionsData } from './mockData';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections`, ({ request, params, cookies }) => {
    return HttpResponse.json(Object.values(mockCollectionsData));
  }),
];
