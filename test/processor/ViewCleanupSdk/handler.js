import { http, HttpResponse } from 'msw';
import { mockEndpoint2, mockTenantId } from '../../setupTest';
import { mockCleanupResponse } from './mockData';

export const handlers = [
  // Handler for storage server cleanup
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/processing/cleanup`, async ({ request }) => {
    return HttpResponse.json(mockCleanupResponse);
  }),
];
