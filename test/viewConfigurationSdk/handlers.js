import { http, HttpResponse } from 'msw';
import { mockTenantList, mockEmbeddingResult, mockBlobResult, mockBlobGuid, mockBlobResultData, mockDataRepositoryResult, mockDataRepositoryGuid, mockDiskDataRepositoryResult, mockS3DataRepositoryResult, mockDiskDataRepositoryGuid, authTentents, mockTokenResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockTenantList);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockTenantList[0]);
  }),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockTenantList[1]);
  }),
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
  http.put(`${mockEndpoint}v1.0/tenants`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockTenantList[1]);
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),

  http.get(`${mockEndpoint}v2.0/tenants/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/blobs`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockBlobResult);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs/${mockBlobGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockBlobResult[0]);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs/${mockBlobGuid}`, ({ request, params, cookies }) => {
    const incldata = request.url.searchParams.get('incldata');
    if (incldata) {
      return HttpResponse.json(mockBlobResultData);
    }
  }),

  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockBlobResult[0]);
  }),

  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs/${mockBlobGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),

  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/blobs/${mockBlobGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/users`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/credentials/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),


  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/encryptionkeys/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/metadatarules/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/embeddingsrules/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/vectorrepositories/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/graphrepositories/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/collections`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/webhookevents/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/webhooktargets/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/webhookrules`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/datarepositories/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEmbeddingResult);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockDataRepositoryResult);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${mockDataRepositoryGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockDataRepositoryResult[0]);
  }),

  // http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories`, ({ request, params, cookies }) => {
  //   return HttpResponse.json(mockDiskDataRepositoryResult);
  // }),

  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockS3DataRepositoryResult);
  }),

  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${mockDiskDataRepositoryGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockDiskDataRepositoryResult);
  }),

  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${mockDiskDataRepositoryGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
  // authentication
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
  // generateAuthenticationTokenByPassword

];
