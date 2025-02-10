import { http, HttpResponse } from 'msw';
import { mockViewEndpointGuid, viewEndpointsData, viewEndpointsMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/viewendpoints`, ({ request, params, cookies }) => {
        return HttpResponse.json(viewEndpointsMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/viewendpoints/${mockViewEndpointGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(viewEndpointsData[mockViewEndpointGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/viewendpoints`, ({ request, params, cookies }) => {
        return HttpResponse.json(viewEndpointsData[mockViewEndpointGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/viewendpoints/${mockViewEndpointGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(viewEndpointsData[mockViewEndpointGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/viewendpoints/${mockViewEndpointGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(viewEndpointsData[mockViewEndpointGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/viewendpoints/${mockViewEndpointGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/viewendpoints/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
