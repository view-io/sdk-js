import { http, HttpResponse } from 'msw';
import { mockEmbeddings } from './mockData';
import { mockEndpoint, mockTenantId } from '../../setupTest';

export const handlers = [
  http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddings`, async ({ request }) => {
    // Return mock embeddings for each input
    return HttpResponse.json(mockEmbeddings);
  }),
  http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddings/preload`, async ({ request }) => {
    // Return mock embeddings for each input
    return HttpResponse.text('ok');
  }),
];
