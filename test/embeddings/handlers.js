import { http, HttpResponse } from 'msw';
import { mockEndpoint, mockTenantId } from '../setupTest';
import { mockEmbeddingsResponse } from './mockData';

export const handlers = [
    http.head(`${mockEndpoint}healthcheck/embeddings`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddings/preload/`, ({ request, params, cookies, ctx }) => {
        const { Models, ApiKey } = request.body;
        return HttpResponse.json({
            Success: true
        }, { status: 200 });
    }),
    http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/embeddings/`, ({ request, params, cookies, ctx }) => {
        const { Models, ApiKey, Contents } = request.body;
        return HttpResponse.json(mockEmbeddingsResponse, { status: 200 });
    }),

];
