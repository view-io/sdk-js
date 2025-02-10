import { http, HttpResponse } from 'msw';
import { mockSemanticCellResponse } from './mockData';
import { mockEndpoint2 } from '../setupTest';

export const handlers = [
  http.put(`${mockEndpoint2}v1.0/document`, ({ request }) => {
    return HttpResponse.json(mockSemanticCellResponse);
  }),
];
