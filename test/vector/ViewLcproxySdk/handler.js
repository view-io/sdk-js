import { http, HttpResponse } from 'msw';
import { mockEndpoint2 } from '../../setupTest';

export const handlers = [
  // Validate Connectivity Handler
  http.head(mockEndpoint2, () => {
    return new HttpResponse(true);
  }),

  http.post(`${mockEndpoint2}v1.0/preload/`, async ({ request }) => {
    const data = await request.json();
    if (!data || !Array.isArray(data)) {
      return new HttpResponse('Invalid request format', { status: 400 });
    }
    return HttpResponse.json({ success: true });
  }),

  http.post(`${mockEndpoint2}v1.0/embeddings/`, async ({ request }) => {
    const data = await request.json();
    if (!data || !Array.isArray(data.cells)) {
      return new HttpResponse('Invalid request format', { status: 400 });
    }
    // Return processed cells
    return HttpResponse.json(data.cells);
  }),
];
