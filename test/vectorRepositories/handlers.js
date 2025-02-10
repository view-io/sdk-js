import { http, HttpResponse } from 'msw';
import { mockVectorGuid, vectorsData, vectorsMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectorrepositories`, ({ request, params, cookies }) => {
        return HttpResponse.json(vectorsMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectorrepositories/${mockVectorGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(vectorsData[mockVectorGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectorrepositories`, ({ request, params, cookies }) => {
        return HttpResponse.json(vectorsData[mockVectorGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectorrepositories/${mockVectorGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(vectorsData[mockVectorGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectorrepositories/${mockVectorGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(vectorsData[mockVectorGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectorrepositories/${mockVectorGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectorrepositories/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
