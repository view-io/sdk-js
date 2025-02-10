import { http, HttpResponse } from 'msw';
import { mockUserGuid, usersData, usersMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users`, ({ request, params, cookies }) => {
        return HttpResponse.json(usersMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users/${mockUserGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(usersData[mockUserGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users`, ({ request, params, cookies }) => {
        return HttpResponse.json(usersData[mockUserGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users/${mockUserGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(usersData[mockUserGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users/${mockUserGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(usersData[mockUserGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users/${mockUserGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
