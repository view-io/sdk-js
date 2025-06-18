import { http, HttpResponse } from 'msw';
import { tenantData } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}`, ({ request, params, cookies }) => {
    return HttpResponse.json(tenantData[mockTenantId]);
  }),
  http.get(`${mockEndpoint}v1.0/tenants`, ({ request, params, cookies }) => {
    return HttpResponse.json(tenantData);
  }),
  http.put(`${mockEndpoint}v1.0/tenants`, ({ request, params, cookies }) => {
    return HttpResponse.json(tenantData[mockTenantId]);
  }),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}`, ({ request, params, cookies }) => {
    return HttpResponse.json(tenantData[mockTenantId]);
  }),
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}`, ({ request, params }) => {
    return HttpResponse.text('true', { status: 200 });
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true', { status: 200 });
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false', { status: 404 });
  }),
];
