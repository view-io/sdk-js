import { http, HttpResponse } from 'msw';
import {
  mockChatThreadAppendResponse,
  mockChatThreadGuid,
  mockChatThreadListResponse,
  mockCreateChatThreadResponse,
  mockLocalModelListResponse,
  mockTokenStreamResponse,
} from './mockData';
import { mockEndpoint2, mockTenantId } from '../setupTest';

import { Readable } from 'stream';

function createSSEStream() {
  const stream = new Readable({
    read() {
      for (const token of mockTokenStreamResponse) {
        this.push(`data: ${JSON.stringify(token)}\n\n`);
      }
      this.push(null); // end of stream
    },
  });
  return stream;
}

export const assistantHandlers = [
  // chatRagQuestion_LEGACY
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/rag`, async ({ request }) => {
    const body = await request.json();
    if (!body || !body.Question) {
      return new Response('Invalid RAG request', { status: 400 });
    }

    return new Response(createSSEStream(), {
      status: 200,
      headers: { 'Content-Type': 'text/event-stream' },
    });
  }),

  // chatRagMessages
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/rag/chat`, async ({ request }) => {
    const body = await request.json();
    if (!body || !body.Question) {
      return HttpResponse.text('Invalid RAG chat request', { status: 400 });
    }
    return new HttpResponse(createSSEStream(), {
      status: 200,
      headers: { 'Content-Type': 'text/event-stream' },
    });
  }),

  // assistantConfigChat
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/chat/:assistantConfigGuid`, async ({ request }) => {
    const body = await request.json();
    if (!body || !body.Question) {
      return HttpResponse.text('Invalid assistant config chat request', { status: 400 });
    }
    return new HttpResponse(createSSEStream(), {
      status: 200,
      headers: { 'Content-Type': 'text/event-stream' },
    });
  }),

  // chatOnly
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/chat/completions`, async ({ request }) => {
    const body = await request.json();
    if (!body || !body.Question) {
      return HttpResponse.text('Invalid chat only request', { status: 400 });
    }
    return new HttpResponse(createSSEStream(), {
      status: 200,
      headers: { 'Content-Type': 'text/event-stream' },
    });
  }),

  // create config
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/configs`, async ({ request, params, cookies }) => {
    return new HttpResponse.json(mockCreateRagConfigResponse);
  }),

  // create chat only config
  http.post(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/configs/chat-only`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(mockCreateChatOnlyConfigResponse);
    }
  ),

  // read config
  http.get(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/configs/:assistantConfigGuid`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(mockCreateRagConfigResponse);
    }
  ),

  // read all configs
  http.get(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/configs`, async ({ request, params, cookies }) => {
    return new HttpResponse.json(mockListRagConfigResponse);
  }),

  // update config
  http.put(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/configs/:assistantConfigGuid`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(mockUpdateRagConfigResponse);
    }
  ),

  // exists config
  http.head(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/configs/:assistantConfigGuid`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(true);
    }
  ),

  // delete config
  http.delete(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/configs/:assistantConfigGuid`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(true);
    }
  ),

  // create chat thread
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/threads`, async ({ request, params, cookies }) => {
    return new HttpResponse.json(mockCreateChatThreadResponse);
  }),

  // append chat thread
  http.post(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/threads/${mockChatThreadGuid}/messages`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(mockChatThreadAppendResponse);
    }
  ),

  // read chat thread
  http.get(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/threads/${mockChatThreadGuid}`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(mockChatThreadListResponse[0]);
    }
  ),

  // read all chat threads
  http.get(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/threads`, async ({ request, params, cookies }) => {
    return new HttpResponse.json(mockChatThreadListResponse);
  }),

  // exists chat thread
  http.head(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/threads/${mockChatThreadGuid}`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(true);
    }
  ),

  // delete chat thread
  http.delete(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/threads/${mockChatThreadGuid}`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json();
    }
  ),

  // list local models
  http.post(`${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/models`, async ({ request, params, cookies }) => {
    return new HttpResponse.json(mockLocalModelListResponse);
  }),

  //retrieve  model
  http.post(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/models/pull`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(mockLocalModelListResponse[0]);
    }
  ),

  // delete model
  http.post(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/models/delete`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(true);
    }
  ),

  //preload model
  http.post(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/models/load`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(true);
    }
  ),

  //unload model
  http.post(
    `${mockEndpoint2}v1.0/tenants/${mockTenantId}/assistant/models/load`,
    async ({ request, params, cookies }) => {
      return new HttpResponse.json(true);
    }
  ),
];
