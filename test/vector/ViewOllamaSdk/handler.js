import { http, HttpResponse } from 'msw';
import { mockEndpoint2 } from '../../setupTest';

export const handlers = [
  // Validate Connectivity Handler
  http.head(mockEndpoint2, () => {
    return new HttpResponse(true);
  }),

  // Load Models Handler (this will throw an error based on the SDK's implementation)
  http.post(`${mockEndpoint2}api/pull`, async ({ request }) => {
    const data = await request.json();
    if (!data || !data.model) {
      return new HttpResponse('Model name is required', { status: 400 });
    }
    // Simulating successful model loading
    return HttpResponse.json({ success: true });
  }),

  // Process Semantic Cells Handler
  http.post(`${mockEndpoint2}api/embed`, async ({ request }) => {
    const { model, input } = await request.json();
    if (!input || !Array.isArray(input)) {
      return new HttpResponse('Invalid input format', { status: 400 });
    }
    // Simulate processing of semantic cells and return the same input
    const response = input.map((content) => ({
      Content: content,
      Embeddings: [Math.random(), Math.random(), Math.random()], // Simulating random embeddings
    }));

    return HttpResponse.json({ statusCode: 200, result: response });
  }),

  // List Models Handler
  http.get(`${mockEndpoint2}api/tags`, async () => {
    const models = [
      { name: 'llama3', description: 'Llama 3 model' },
      { name: 'gpt-3', description: 'GPT-3 model' },
    ];
    return HttpResponse.json(models);
  }),

  // Delete Model Handler
  http.delete(`${mockEndpoint2}api/delete`, async ({ request }) => {
    const { name } = await request.json();
    if (!name) {
      return new HttpResponse('Model name is required', { status: 400 });
    }
    // Simulate successful deletion
    return HttpResponse.json({ success: true });
  }),

  // Additional handler to simulate error on unsupported loadModels call
  http.post(`${mockEndpoint2}api/loadModels`, () => {
    return new HttpResponse('This API is not implemented for this embeddings generator.', {
      status: 501,
    });
  }),
];
