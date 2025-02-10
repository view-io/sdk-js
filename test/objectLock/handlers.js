import { http, HttpResponse } from 'msw';
import { mockObjectLockGuid, objectLocksData, objectLocksMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/objectlocks`, ({ request, params, cookies }) => {
        return HttpResponse.json(objectLocksMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/objectlocks/${mockObjectLockGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(objectLocksData[mockObjectLockGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/objectlocks`, ({ request, params, cookies }) => {
        return HttpResponse.json(objectLocksData[mockObjectLockGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/objectlocks/${mockObjectLockGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(objectLocksData[mockObjectLockGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/objectlocks/${mockObjectLockGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(objectLocksData[mockObjectLockGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/objectlocks/${mockObjectLockGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/objectlocks/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
