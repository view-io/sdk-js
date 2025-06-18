import { mockBlobResult, mockBlobResultData, mockEmbeddingResult } from './mockData';

import { http, HttpResponse } from 'msw';
import { mockEndpoint, mockTenantId } from '../setupTest';
import { mockBlobGuid } from './mockData';

export const handlers = [
  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/blobs`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockBlobResult);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs/${mockBlobGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockBlobResult[0]);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs/${mockBlobGuid}`, ({ request, params, cookies }) => {
    const url = new URL(request.url);
    const incldata = url.searchParams.get('incldata');
    if (incldata) {
      return HttpResponse.json(mockBlobResultData);
    }
  }),

  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockBlobResult[0]);
  }),

  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs/${mockBlobGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),

  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs/${mockBlobGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
];
