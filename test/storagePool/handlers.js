import { http, HttpResponse } from 'msw';
import { mockStoragePoolGuid, storagePoolsData, storagePoolsMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/pools`, ({ request, params, cookies }) => {
        return HttpResponse.json(storagePoolsMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/pools/${mockStoragePoolGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(storagePoolsData[mockStoragePoolGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/pools`, ({ request, params, cookies }) => {
        return HttpResponse.json(storagePoolsData[mockStoragePoolGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/pools/${mockStoragePoolGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(storagePoolsData[mockStoragePoolGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/pools/${mockStoragePoolGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(storagePoolsData[mockStoragePoolGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/pools/${mockStoragePoolGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/pools/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
