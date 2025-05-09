import { http, HttpResponse } from 'msw';
import { mockNodeGuid, nodesData, nodesMockApiResponse } from './mockData';
import { mockEndpoint } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/nodes`, ({ request, params, cookies }) => {
    return HttpResponse.json(nodesMockApiResponse);
  }),
  http.get(`${mockEndpoint}v1.0/nodes/${mockNodeGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(nodesData[mockNodeGuid]);
  }),
  http.put(`${mockEndpoint}v1.0/nodes`, ({ request, params, cookies }) => {
    return HttpResponse.json(nodesData[mockNodeGuid]);
  }),
  http.put(`${mockEndpoint}v1.0/nodes/${mockNodeGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(nodesData[mockNodeGuid]);
  }),
  http.delete(`${mockEndpoint}v1.0/nodes/${mockNodeGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('deleted');
  }),
  http.head(`${mockEndpoint}v1.0/nodes/${mockNodeGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
  http.head(`${mockEndpoint}v1.0/nodes/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false', { status: 404 });
  }),
];
