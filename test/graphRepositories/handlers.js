import { http, HttpResponse } from 'msw';
import { mockGraphGuid, graphsData, graphsMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphrepositories`, ({ request, params, cookies }) => {
        return HttpResponse.json(graphsMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphrepositories/${mockGraphGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(graphsData[mockGraphGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphrepositories`, ({ request, params, cookies }) => {
        return HttpResponse.json(graphsData[mockGraphGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphrepositories/${mockGraphGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(graphsData[mockGraphGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphrepositories/${mockGraphGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(graphsData[mockGraphGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphrepositories/${mockGraphGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphrepositories/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
