import { http, HttpResponse } from 'msw';
import { mockEndpoint2 } from '../../setupTest';

export const handlers = [
  // Validate Connectivity Handler
  http.get(`${mockEndpoint2}healthz`, () => {
    return new HttpResponse(true);
  }),

  // Process Embeddings Handler
  http.post(`${mockEndpoint2}embeddings`, async ({ request }) => {
    const { model, input } = await request.json();
    
    if (!input || !Array.isArray(input)) {
      return new HttpResponse('Invalid input format', { status: 400 });
    }

    // Simulate embeddings generation
    const response = {
      model: model,
      data: input.map((text) => ({
        object: 'embedding',
        embedding: Array.from({ length: 1024 }, () => Math.random() * 2 - 1), // Generate 1024-dimensional embeddings
        index: 0,
        text: text
      }))
    };

    return HttpResponse.json(response);
  }),

  // List Models Handler (not implemented in SDK)
  http.get(`${mockEndpoint2}models`, () => {
    return new HttpResponse('This API is not implemented for this embeddings generator.', {
      status: 501,
    });
  }),

  // Load Models Handler (not implemented in SDK)
  http.post(`${mockEndpoint2}models/load`, () => {
    return new HttpResponse('This API is not implemented for this embeddings generator.', {
      status: 501,
    });
  }),

  // Delete Model Handler (not implemented in SDK)
  http.delete(`${mockEndpoint2}models`, () => {
    return new HttpResponse('This API is not implemented for this embeddings generator.', {
      status: 501,
    });
  }),
];
