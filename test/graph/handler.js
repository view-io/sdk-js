import { http, HttpResponse, rest } from 'msw';
import { mockEndpoint3, mockTenantId } from '../setupTest';
import {
  mockGraphResult,
  mockGraphId,
  mockGraphResponse,
  mockNodeId,
  mockGraphResponses,
  mockNodeData,
} from './mockData';
export const handlers = [
  http.get(`${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}`, async ({ params }) => {
    return HttpResponse.json(mockGraphResponse);
  }),
  http.get(`${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs`, async ({ params }) => {
    return HttpResponse.json(mockGraphResponses);
  }),
  http.post(`${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/nodes/search`, async ({ params }) => {
    return HttpResponse.json({
      Success: true,

      Nodes: [
        {
          GUID: 'test-guid',
          Type: 'Object',
          Properties: mockGraphResult.Object,
        },
      ],
    });
  }),

  http.put(`${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/nodes`, async (req, res, ctx) => {
    return HttpResponse.json({
      Success: true,
      Nodes: [
        {
          GUID: 'default',
          Type: 'Object',
          Properties: mockGraphResult.Object,
        },
      ],
    });
  }),

  http.put(`${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs`, async (req, res, ctx) => {
    return HttpResponse.json(true);
  }),

  http.post(`${mockEndpoint3}v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/nodes`, async ({ params }) => {
    return HttpResponse.json({
      Success: true,
      Node: {
        GUID: 'new-node-guid',
        Type: 'Object',
        Properties: mockGraphResult.Object,
      },
    });
  }),

  http.get(
    `${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/edges/between`, // Match the endpoint
    async (req, res, ctx) => {
      // Mock response data
      const mockEdges = [
        {
          Type: 'Edge',
          Properties: { weight: 10, description: 'Mocked edge' },
        },
      ];

      return HttpResponse.json(mockEdges);
    }
  ),

  http.delete(`${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/nodes/delete`, async () => {
    return HttpResponse.json({ success: true });
  }),

  http.head(mockEndpoint3, (req, res, ctx) => {
    return HttpResponse.json({ success: true });
  }),

  http.head(`${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}`, (req, res, ctx) => {
    return HttpResponse.json(true);
  }),
  http.head(
    `${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/nodes/${mockNodeId}`,
    (req, res, ctx) => {
      return HttpResponse.json(true);
    }
  ),
  http.head(
    `${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/edges/${mockNodeId}`,
    (req, res, ctx) => {
      return HttpResponse.json(true);
    }
  ),
  http.delete(`${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/nodes/${mockNodeId}`, async () => {
    return HttpResponse.json(true);
  }),

  http.get(
    `${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/nodes/${mockNodeId}/parents`,
    async () => {
      return HttpResponse.json(mockNodeData);
    }
  ),

  http.get(
    `${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/nodes/${mockNodeId}/edges/to`,
    async () => {
      return HttpResponse.json([
        {
          GUID: 'edge-guid',
          Type: 'Edge',
          Properties: { weight: 1 },
        },
      ]);
    }
  ),

  http.get(
    `${mockEndpoint3}/v1.0/tenants/${mockTenantId}/graphs/${mockGraphId}/nodes/${mockNodeId}/edges/from`,
    async () => {
      return HttpResponse.json([
        {
          GUID: 'edge-guid',
          Type: 'Edge',
          Properties: { weight: 1 },
        },
      ]);
    }
  ),
];
