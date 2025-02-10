import { http, HttpResponse } from 'msw';
import { mockCollectionGuid, collectionsData, collectionsMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections`, ({ request, params, cookies }) => {
        return HttpResponse.json(collectionsMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(collectionsData[mockCollectionGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections`, ({ request, params, cookies }) => {
        return HttpResponse.json(collectionsData[mockCollectionGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(collectionsData[mockCollectionGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(collectionsData[mockCollectionGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
