import { http, HttpResponse } from 'msw';
import { mockSemanticCells } from './mockData';
import { mockEndpoint2 } from '../../setupTest';

export const handlers = [
  // Validate Connectivity Handler
  http.head(mockEndpoint2, () => {
    return new HttpResponse('true');
  }),
  http.head(`${mockEndpoint2}models`, () => {
    return new HttpResponse('true');
  }),
  http.get(`${mockEndpoint2}healthz`, () => {
    return new HttpResponse(true);
  }),
  http.post(`${mockEndpoint2}v1/embeddings`, async ({ request }) => {
    const data = await request.json();
    if (!data || !data.input || !Array.isArray(data.input)) {
      return new HttpResponse('Invalid request format', { status: 400 });
    }
    // Return mock embeddings for each input
    return HttpResponse.json(mockSemanticCells);
  }),
];
