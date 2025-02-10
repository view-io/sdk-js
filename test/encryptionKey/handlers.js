import { http, HttpResponse } from 'msw';
import { mockEncryptionKeyGuid, encryptionKeysData, encryptionKeysMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/encryptionkeys`, ({ request, params, cookies }) => {
        return HttpResponse.json(encryptionKeysMockApiResponse);
    }),
    http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/encryptionkeys/${mockEncryptionKeyGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(encryptionKeysData[mockEncryptionKeyGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/encryptionkeys`, ({ request, params, cookies }) => {
        return HttpResponse.json(encryptionKeysData[mockEncryptionKeyGuid]);
    }),
    http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/encryptionkeys/${mockEncryptionKeyGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(encryptionKeysData[mockEncryptionKeyGuid]);
    }),
    http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/encryptionkeys/${mockEncryptionKeyGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.json(encryptionKeysData[mockEncryptionKeyGuid]);
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/encryptionkeys/${mockEncryptionKeyGuid}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
    http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/encryptionkeys/${'wrongID'}`, ({ request, params, cookies }) => {
        return HttpResponse.text('false').status(404);
    }),
];
