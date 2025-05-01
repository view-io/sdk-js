import { http, HttpResponse } from 'msw';
import {
  CrawlFilterResponse,
  CrawlOperationGUID,
  CrawlOperationResponse,
  CrawlPlansGUID,
  CrawlPlansResponse,
  CrawlSchedulesGUID,
  CrawlSchedulesResponse,
  data1,
  DataRepositoryGUID,
  enumerateCrawlOperationResponse,
  enumerateCrawlSchedulesResponse,
  enumerateFilterResponse,
  enumeratePlansResponse,
  enumerateResponse,
} from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/datarepositories/`, ({ request, params, cookies }) => {
    return HttpResponse.json(enumerateResponse);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/`, ({ request, params, cookies }) => {
    return HttpResponse.json(data1);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${DataRepositoryGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(data1[0]);
    }
  ),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories`, ({ request, params, cookies }) => {
    return HttpResponse.json(data1[0]);
  }),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${DataRepositoryGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(data1[0]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${DataRepositoryGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${DataRepositoryGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/datarepositories/${'wrongID'}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('false', { status: 404 });
    }
  ),

  //crawlschedules
  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/crawlschedules/`, ({ request, params, cookies }) => {
    return HttpResponse.json(enumerateCrawlSchedulesResponse);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlschedules/`, ({ request, params, cookies }) => {
    return HttpResponse.json(CrawlSchedulesResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlschedules/${CrawlSchedulesGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(CrawlSchedulesResponse[0]);
    }
  ),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlschedules/`, ({ request, params, cookies }) => {
    return HttpResponse.json(CrawlSchedulesResponse[0]);
  }),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlschedules/${CrawlSchedulesGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(CrawlSchedulesResponse[0]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlschedules/${CrawlSchedulesGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlschedules/${CrawlSchedulesGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlschedules/${'wrongID'}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('false', { status: 404 });
    }
  ),
  //Crawl Filters
  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/crawlfilters`, ({ request, params, cookies }) => {
    return HttpResponse.json(enumerateFilterResponse);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlfilters/`, ({ request, params, cookies }) => {
    return HttpResponse.json(CrawlFilterResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlfilters/${CrawlSchedulesGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(CrawlFilterResponse[0]);
    }
  ),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlfilters/`, ({ request, params, cookies }) => {
    return HttpResponse.json(CrawlFilterResponse[0]);
  }),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlfilters/${CrawlSchedulesGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(CrawlFilterResponse[0]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlfilters/${CrawlSchedulesGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlfilters/${CrawlSchedulesGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlfilters/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false', { status: 404 });
  }),

  // region Crawl Plans
  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/crawlplans`, ({ request, params, cookies }) => {
    return HttpResponse.json(enumeratePlansResponse);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlplans`, ({ request, params, cookies }) => {
    return HttpResponse.json(CrawlPlansResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlplans/${CrawlPlansGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(CrawlPlansResponse[0]);
    }
  ),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlplans`, ({ request, params, cookies }) => {
    return HttpResponse.json(CrawlPlansResponse[0]);
  }),
  http.put(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlplans/${CrawlPlansGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(CrawlPlansResponse[0]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlplans/${CrawlPlansGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlplans/${CrawlPlansGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawlplans/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false', { status: 404 });
  }),

  // Crawl Operations
  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/crawloperations`, ({ request, params, cookies }) => {
    return HttpResponse.json(enumerateCrawlOperationResponse);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawloperations`, ({ request, params, cookies }) => {
    return HttpResponse.json(CrawlOperationResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawloperations/${CrawlOperationGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(CrawlOperationResponse[0]);
    }
  ),
  //retrieveEnumerationCrawlOperations
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawloperations/${CrawlOperationGUID}/enumeration`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(enumerateCrawlOperationResponse);
    }
  ),
  http.post(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawloperations/${CrawlOperationGUID}/start`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(CrawlOperationResponse[0]);
    }
  ),
  http.post(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawloperations/${CrawlOperationGUID}/stop`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(CrawlOperationResponse[0]);
    }
  ),
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawloperations/${CrawlOperationGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/crawloperations/${CrawlOperationGUID}`,
    ({ request, params, cookies }) => {
      return HttpResponse.text('true');
    }
  ),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/crawloperations/wrongID`, ({ request, params, cookies }) => {
    return HttpResponse.text('false', { status: 404 });
  }),
];
