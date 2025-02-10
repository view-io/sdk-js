import { http, HttpResponse } from 'msw';
import { mockEndpoint, mockTenantId } from '../../setupTest';
import { mockUdrResponse } from './mockData';

export const handlers = [
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/processing/udr`, async ({ request }) => {
    return HttpResponse.json(mockUdrResponse);
  }),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/processing/datatable`, async ({ request }) => {
    return HttpResponse.json(mockUdrResponse);
  }),
];
