import { http, HttpResponse } from 'msw';
import {
  mockCollectionGuid,
  collectionsData,
  collectionStatisticsMockResponse,
  mockCollectStatisticsGuid,
  documentMockApiResponse,
  mockSourceDocument,
  mockDocumentGuid,
  mockDocumentKey,
  mockDocVersionId,
  mockEnumerationResult,
  mockSearchCollection,
  MaxKeys,
  mockSeachEnumerationResult,
  ingestqueueID,
  ingestqueueResponse,
} from './mockData';
import { mockEndpoint, mockEndpoint2, mockEndpoint3, mockTenantId } from '../setupTest';
const url = require('url');
const querystring = require('querystring');
export const handlers = [
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(collectionsData[mockCollectionGuid]);
    }
  ),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections`, ({ request, params, cookies }) => {
    return HttpResponse.json(Object.values(collectionsData));
  }),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections`, ({ request, params, cookies }) => {
    return HttpResponse.json(collectionsData[mockCollectionGuid]);
  }),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(collectionsData[mockCollectionGuid]);
    }
  ),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectStatisticsGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(collectionStatisticsMockResponse);
    }
  ),
  http.get(
    `${mockEndpoint3}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}/topterms`,
    ({ request, params, cookies }) => {
      return HttpResponse.json({
        "xmpg": 3009,
        "rdf": 1663,
        "type": 876
      });
    }
  ),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}/documents/${mockDocumentGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(mockSourceDocument[mockDocumentGuid]);
    }
  ),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false').status(404);
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}/documents/${mockDocumentGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}/documents/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false').status(404);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}/documents`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(Object.values(documentMockApiResponse));
    }
  ),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}/documents`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(mockSourceDocument[mockDocumentGuid]);
    }
  ),

  // Handler for deleting a document from a collection
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}/documents/${mockDocumentGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text(''); // Returns no content (204 response)
    }
  ),
  // const url =
  //     this.endpoint +
  //     '/v1.0/tenants/' +
  //     this.tenantGuid +
  //     '/collections/' +
  //     collectionGuid +
  //     '/documents?key=' +
  //     key +
  //     '&versionId=' +
  //     version;
  // Handler for deleting a document by key and version

  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}/documents`,
    ({ request }) => {
      const parsedUrl = url.parse(request.url); // Parse the URL
      const queryParams = querystring.parse(parsedUrl.query); // Extract query parameters

      const key = queryParams.key;
      const versionId = queryParams.versionId;

      if (key === mockDocumentKey && versionId === mockDocVersionId) {
        return HttpResponse.text('');
      }

      return new HttpResponse(null, { status: 404 });
    }
  ),
  // Handler for enumerating a collection
  http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}`, async ({ request }) => {
    return HttpResponse.json(mockEnumerationResult);
  }),

  // Handler for searching a collection
  http.post(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/${mockCollectionGuid}/search`,
    async ({ request, params, cookies }) => {
      return HttpResponse.json({
        Success: true,
        Documents: mockSearchCollection,
        Embeddings: [],
        RecordsRemaining: 0,
        EndOfResults: true,
      });
    }
  ),
  http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/collections/default2/documents`,
    (request, params, cookies) => {
      return HttpResponse.json(mockSeachEnumerationResult);
    }),
  //ingestqueue
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/ingestqueue`, ({ request, params, cookies }) => {
    return HttpResponse.json(ingestqueueResponse);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/ingestqueue/${ingestqueueID}`, ({ request, params, cookies }) => {
    return HttpResponse.json(ingestqueueResponse[0]);
  }),
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/ingestqueue/${ingestqueueID}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/ingestqueue`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/ingestqueue`, ({ request, params, cookies }) => {
    return HttpResponse.text('false').status(404);
  }),
];
