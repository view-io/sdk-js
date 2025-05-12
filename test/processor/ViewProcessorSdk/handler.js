import { http, HttpResponse } from 'msw';
import { mockEndpoint2, mockTenantId } from '../../setupTest';
import { mockProcessorResponse, mockSemanticCellResponse, mockTypeResult, mockUdrDocument } from './mockData';

export const handlers = [
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/processing`, async ({ request }) => {
    return HttpResponse.json(mockProcessorResponse);
  }),
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/processing/cleanup`, async ({ request }) => {
    return HttpResponse.json(mockProcessorResponse);
  }),
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/processing/typedetection`, async ({ request }) => {
    return HttpResponse.json(mockTypeResult);
  }),
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/processing/semanticcell`, async ({ request }) => {
    return HttpResponse.json(mockSemanticCellResponse);
  }),
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/processing/udr`, async ({ request }) => {
    return HttpResponse.json(mockUdrDocument);
  }),
];
