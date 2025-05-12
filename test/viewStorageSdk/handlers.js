import { http, HttpResponse } from 'msw';
import { mockEndpoint } from '../setupTest';
import {
  mockServicesList,
  mockUploadKey,
  mockUploadList,
  updateBucketMetadata,
  mockEmbeddingResult,
} from '../viewStorageSdk/mockData';
import { mockTenantId } from '../setupTest';
import {
  mockBucketGUID,
  mockBucketData,
  mockTags,
  mockAcl,
  mockObjectKey,
  mockObjectData,
  mockUploadData,
  mockUploadPart,
} from './mockData';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets`, ({ request }) => {
    return HttpResponse.json(mockServicesList);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}`, ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    if (searchParams.has('md')) {
      return HttpResponse.json(mockBucketData);
    }
    if (searchParams.has('acl')) {
      return HttpResponse.json(mockAcl);
    }
    if (searchParams.has('tags')) {
      return HttpResponse.json(mockTags);
    }

    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets`, () => {
    return HttpResponse.json(mockBucketData);
  }),

  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}`, () => {
    return HttpResponse.json(updateBucketMetadata);
  }),

  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}`, ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    if (searchParams.has('tags') || searchParams.has('acl')) {
      return HttpResponse.text('deleted');
    }
    return HttpResponse.text('deleted');
  }),

  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}`, ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    if (searchParams.has('tags')) {
      return HttpResponse.json(mockTags);
    }
    if (searchParams.has('acl')) {
      return HttpResponse.json(mockAcl);
    }
  }),

  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/objects/${mockObjectKey}`, () => {
    return HttpResponse.json(mockObjectData);
  }),

  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/uploads`, () => {
    return HttpResponse.json(mockUploadData);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/uploads`, () => {
    return HttpResponse.json(mockUploadList);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/uploads/${mockUploadKey}`, () => {
    return HttpResponse.json(mockUploadData);
  }),

  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/uploads/${mockUploadKey}`,
    ({ request }) => {
      const searchParams = new URL(request.url).searchParams;
      if (searchParams.get('partNumber') === mockUploadPart.toString()) {
        return HttpResponse.json(mockUploadData);
      }
    }
  ),

  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/uploads/${mockUploadKey}`,
    ({ request }) => {
      const searchParams = new URL(request.url).searchParams;
      if (searchParams.get('partNumber') === mockUploadPart.toString()) {
        return HttpResponse.text('true');
      }
      return HttpResponse.text('true');
    }
  ),

  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/uploads/${mockUploadKey}`, () => {
    return HttpResponse.text('true');
  }),

  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/uploads/${mockUploadKey}/parts`,
    ({ request }) => {
      const searchParams = new URL(request.url).searchParams;
      if (searchParams.get('partNumber') === mockUploadPart.toString()) {
        return HttpResponse.json(mockUploadData);
      }
    }
  ),

  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/objects/${mockObjectKey}`,
    ({ request }) => {
      const searchParams = new URL(request.url).searchParams;
      if (searchParams.has('expiration')) {
        return HttpResponse.json(mockObjectData);
      }
    }
  ),

  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/objects/${mockObjectKey}`,
    ({ request }) => {
      const searchParams = new URL(request.url).searchParams;
      if (searchParams.has('tags') || searchParams.has('acl')) {
        return HttpResponse.text('true');
      }
      return HttpResponse.text('true');
    }
  ),

  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/objects/${mockObjectKey}`,
    ({ request }) => {
      const searchParams = new URL(request.url).searchParams;
      if (searchParams.has('acl')) {
        return HttpResponse.json(mockAcl);
      }
      if (searchParams.has('tags')) {
        return HttpResponse.json(mockTags);
      }
      if (searchParams.has('md')) {
        return HttpResponse.json(mockObjectData);
      }
      return HttpResponse.text('PDF');
    }
  ),

  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/buckets/${mockBucketGUID}/objects/${mockObjectKey}`,
    ({ request }) => {
      const searchParams = new URL(request.url).searchParams;
      if (searchParams.has('tags')) {
        return HttpResponse.json(mockTags);
      }
      if (searchParams.has('acl')) {
        return HttpResponse.json(mockAcl);
      }
    }
  ),
];
