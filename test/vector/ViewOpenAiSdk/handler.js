import { http, HttpResponse } from 'msw';
import { mockEndpoint2 } from '../../setupTest';

export const handlers = [
  // Validate Connectivity Handler
  http.head(`${mockEndpoint2}models`, () => {
    return new HttpResponse('', { status: 200 });
  }),

  // Process Semantic Chunks (Embeddings) Handler
  http.post(`${mockEndpoint2}embeddings`, async ({ request }) => {
    const data = await request.json();

    if (!data || !data.model || !Array.isArray(data.input)) {
      return new HttpResponse('Invalid request format', { status: 400 });
    }

    // Mock response for embeddings generation
    const embeddings = data.input.map((input) => ({
      content: input,
      embeddings: Array(1536).fill(Math.random()), // Mock 1536-dimensional embeddings
    }));

    return HttpResponse.json({
      model: data.model,
      data: embeddings,
    });
  }),
];
