import { http, HttpResponse } from 'msw';
import { mockEndpoint2, mockTenantId } from '../../setupTest';
import { mockTypeDetectorResponse, mockTypeResponse } from './mockData';

export const handlers = [
  http.post(`${mockEndpoint2}`, async ({ request }) => {
    return HttpResponse.json(mockTypeDetectorResponse);
  }),

  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/processing/typedetection`, async ({ request }) => {
    return HttpResponse.json(mockTypeResponse);
  }),
];


