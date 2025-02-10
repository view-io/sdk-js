import { http, HttpResponse } from 'msw';
import { mockEndpoint2, mockTenantId } from '../../setupTest';
import { mockProcessorResponse } from './mockData';

export const handlers = [
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/processing`, async ({ request }) => {
    return HttpResponse.json(mockProcessorResponse);
  }),
];
