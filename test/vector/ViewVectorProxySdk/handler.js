import { http, HttpResponse } from 'msw';
import {
  mockDocument,
  mockDeleteRequest,
  mockEnumerationResult,
  mockRawQueryResult,
  mockSearchResult,
  VectorRepositoryGUID,
  mockEnumerateResult,
  mockStatisticsResponse,
  mockDocumentGUID,
  mockSemanticCell,
  mockSemanticCellGuid,
  mockSemanticChunkGuid,
  mockSemanticChunk,
} from './mockData';
import { mockEndpoint2, mockTenantId } from '../../setupTest';

export const handlers = [
  // Write Document Handler
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents`, async ({ request }) => {
    const document = await request.json();
    if (document) {
      return HttpResponse.json([mockDocument], { status: 201 }); // Simulates document creation success
    }
    return new HttpResponse('Document is required', { status: 400 });
  }),

  http.get(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents/${mockDocumentGUID}`, async ({ request }) => {
    return HttpResponse.json(mockDocument);
  }),

  http.delete(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents/${mockDocumentGUID}`, async ({ request }) => {
    return HttpResponse.json(true);
  }),

  http.head(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents/${mockDocumentGUID}`, async ({ request }) => {
    return HttpResponse.text('true');
  }),

  // // Delete Document Handler
  // http.delete(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/documents`, async ({ request }) => {
  //   const deleteRequest = await request.json();
  //   if (deleteRequest && deleteRequest.GUID === mockDeleteRequest.GUID) {
  //     return HttpResponse.json(true); // Simulates deletion success as a boolean
  //   }
  //   return new HttpResponse('Document not found', { status: 404 });
  // }),

  // // Truncate Table Handler
  // http.delete(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/documents?truncate`, async ({ request }) => {
  //   const deleteRequest = await request.json();
  //   if (deleteRequest) {
  //     return HttpResponse.text('', { status: 204 }); // Simulates truncation success
  //   }
  //   return new HttpResponse('Invalid request', { status: 400 });
  // }),

  // // Enumerate Table Handler
  // http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/documents?enumerate`, async ({ request }) => {
  //   const query = await request.json();
  //   if (query) {
  //     return HttpResponse.json(mockEnumerationResult, { status: 200 }); // Simulates enumeration success
  //   }
  //   return new HttpResponse('Invalid query', { status: 400 });
  // }),

  // // Similarity Search Handler
  // http.put(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/search/similarity`, async ({ request }) => {
  //   const searchRequest = await request.json();
  //   if (searchRequest) {
  //     return HttpResponse.json([mockDocument], { status: 200 }); // Simulates search success
  //   }
  //   return new HttpResponse('Invalid search request', { status: 400 });
  // }),

  // // Raw Query Handler
  // http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/query`, async ({ request }) => {
  //   const queryRequest = await request.json();
  //   if (queryRequest) {
  //     return HttpResponse.json(mockRawQueryResult, { status: 200 }); // Simulates raw query success
  //   }
  //   return new HttpResponse('Invalid query request', { status: 400 });
  // }),

  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/search`, async ({ request }) => {
    return HttpResponse.json(mockSearchResult);
  }),

  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/enumerate`, async ({ request }) => {
    return HttpResponse.json(mockEnumerateResult);
  }),

  http.get(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/stats`, async ({ request }) => {
    return HttpResponse.json(mockStatisticsResponse);
  }),

  http.delete(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}`, async ({ request }) => {
    return HttpResponse.json(true);
  }),

  http.get(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents/${mockDocumentGUID}/cells`, async ({ request }) => {
    return HttpResponse.json(mockSemanticCell);
  }),

  http.get(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents/${mockDocumentGUID}/cells/${mockSemanticCellGuid}`, async ({ request }) => {
    return HttpResponse.json(mockSemanticCell[0]);
  }),

  http.head(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents/${mockDocumentGUID}/cells/${mockSemanticCellGuid}`, async ({ request }) => {
    return HttpResponse.text('true');
  }),

  http.get(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents/${mockDocumentGUID}/cells/${mockSemanticCellGuid}/chunks`, async ({ request }) => {
    return HttpResponse.json(mockSemanticChunk);
  }),

  http.get(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents/${mockDocumentGUID}/cells/${mockSemanticCellGuid}/chunks/${mockSemanticChunkGuid}`, async ({ request }) => {
    return HttpResponse.json(mockSemanticChunk[0]);
  }),

  http.head(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/vectorrepositories/${VectorRepositoryGUID}/documents/${mockDocumentGUID}/cells/${mockSemanticCellGuid}/chunks/${mockSemanticChunkGuid}`, async ({ request }) => {
    return HttpResponse.text('true');
  }),
];
