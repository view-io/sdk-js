import { http, HttpResponse } from 'msw';
import { authTentents, mockTokenResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/token/tenants`, ({ request, params, cookies }) => {
    return HttpResponse.json(authTentents);
  }),
  http.get(`${mockEndpoint}v1.0/token`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockTokenResponse);
  }),
  http.get(`${mockEndpoint}v1.0/token/validate`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockTokenResponse);
  }),
  http.get(`${mockEndpoint}v1.0/token/details`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockTokenResponse);
  }),
];
