import { http, HttpResponse } from 'msw';
import { mockBucketGuid, bucketsData, bucketsMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets`, ({ request, params, cookies }) => {
    return HttpResponse.json(bucketsMockApiResponse);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(bucketsData[mockBucketGuid]);
  }),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets`, ({ request, params, cookies }) => {
    return HttpResponse.json(bucketsData[mockBucketGuid]);
  }),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(bucketsData[mockBucketGuid]);
  }),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('deleted');
    }
  ),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false', { status: 404 });
  }),
];
