import { http, HttpResponse } from 'msw';
import { mockEndpoint } from '../../setupTest';
import { mockLexiEmbeddingsResponse, mockTenant } from './mockData';

export const handlers = [
  http.post(`${mockEndpoint}v1.0/tenants/${mockTenant.GUID}/processing/lexiprocessing`, async ({ request }) => {
    return HttpResponse.json(mockLexiEmbeddingsResponse);
  }),
];
