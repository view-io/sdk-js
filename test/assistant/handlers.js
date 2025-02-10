import { http, HttpResponse } from 'msw';
import { mockTokenStreamResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const assistantHandlers = [
  // Handler for RAG requests
  http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/rag`, (req, res, ctx) => {
    if (!req.body || !req.body.Question) {
      return HttpResponse.text('Invalid RAG request', { status: 400 });
    }

    const tokenStream = mockTokenStreamResponse.map((token) => `data: ${JSON.stringify(token)}\n`).join('');
    return res(ctx.status(200), ctx.set('Content-Type', 'text/event-stream'), ctx.body(tokenStream));
  }),

  // Handler for chat requests
  http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/chat`, (req, res, ctx) => {
    if (!req.body || !req.body.Question) {
      return HttpResponse.text('Invalid Chat request', { status: 400 });
    }

    const tokenStream = mockTokenStreamResponse.map((token) => `data: ${JSON.stringify(token)}\n`).join('');
    return res(ctx.status(200), ctx.set('Content-Type', 'text/event-stream'), ctx.body(tokenStream));
  }),
];
