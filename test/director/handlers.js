import { http, HttpResponse } from 'msw';
import { mockEndpoint, mockTenantId } from '../setupTest';
import { mockDirectorEmbeddingResponse } from './mockData';

export const handlers = [
    http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddings/`, ({ request, params, cookies }) => {
        return HttpResponse.json(mockDirectorEmbeddingResponse);
    }),
    http.get(`${mockEndpoint}v1.0/connections/`, ({ request, params, cookies }) => {
        return HttpResponse.json({});
    }),
]