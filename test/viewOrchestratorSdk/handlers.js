import { http, HttpResponse } from 'msw';
import {
  mockDataFlowData,
  mockDataFlowLogfileContent,
  mockDataFlowLogs,
  mockDataFlowsList,
  mockFlowId,
  mockStepCreatePayload,
  mockStepData,
  mockStepGUID,
  mockStepsList,
  mockTriggerData,
  mockTriggerId,
  mockTriggersList,
  requestID,
  updateTriggerMockData,
} from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  // Create Trigger
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/triggers`, ({ request }) => {
    return HttpResponse.json(mockTriggerData[mockTriggerId]);
  }),

  // Check if Trigger Exists
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/triggers/:guid`, ({ params }) => {
    const { guid } = params;
    if (mockTriggerData[guid]) {
      return HttpResponse.text('Found', { status: 200 });
    }
    return HttpResponse.text('Not Found', { status: 404 });
  }),

  // Retrieve a Trigger
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/triggers/:guid`, ({ params }) => {
    const { guid } = params;
    if (mockTriggerData[guid]) {
      return HttpResponse.json(mockTriggerData[guid]);
    }
    return HttpResponse.text('Trigger not found', { status: 404 });
  }),

  // Retrieve All Triggers
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/triggers`, () => {
    return HttpResponse.json(mockTriggersList);
  }),

  // Update Trigger
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/triggers/:guid`, ({ params, request, pal }) => {
    return HttpResponse.json(updateTriggerMockData);
  }),

  // Delete Trigger
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/triggers/:guid`, ({ params }) => {
    return HttpResponse.json(updateTriggerMockData);
  }),

  // Create Step
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps`, (req, res, ctx) => {
    return HttpResponse.json(mockStepCreatePayload);
  }),

  // Check if Step Exists
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps/:guid`, (req, res, ctx) => {
    const { guid } = req.params;
    if (mockStepData[guid]) {
      return HttpResponse.text('Found', { status: 200 });
    }
    return HttpResponse.text('Not Found', { status: 404 });
  }),

  // Retrieve a Step
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps/:guid`, (req, res, ctx) => {
    const { guid } = req.params;
    if (mockStepData[guid]) {
      return HttpResponse.json(mockStepData[guid], { status: 200 });
    }
    return HttpResponse.text('Not Found', { status: 404 });
  }),

  // Retrieve All Steps
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps`, (req, res, ctx) => {
    return HttpResponse.json(mockStepsList, { status: 200 });
  }),
  // Retrieve All Steps with csharploopbackget
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps/${mockStepGUID}?inclsub&incldata`, (req, res, ctx) => {
    return HttpResponse.json(mockStepData[mockStepGUID], { status: 200 });
  }),

  // Delete Step
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps/:guid`, (req, res, ctx) => {
    const { guid } = req.params;
    if (!mockStepData[guid]) {
      return HttpResponse.text('Not Found', { status: 200 });
    }
    return HttpResponse.json('Deleted', { status: 200 });
  }),

  // Create Step
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps`, (req, res, ctx) => {
    return HttpResponse.json(mockStepCreatePayload);
  }),

  // Check if Step Exists
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps/:guid`, (req, res, ctx) => {
    const { guid } = req.params;
    if (mockStepData[guid]) {
      return HttpResponse.text('Found', { status: 200 });
    }
    return HttpResponse.text('Not Found', { status: 404 });
  }),

  // Retrieve a Step
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps/:guid`, (req, res, ctx) => {
    const { guid } = req.params;
    if (mockStepData[guid]) {
      return HttpResponse.json(mockStepData[guid], { status: 200 });
    }
    return HttpResponse.text('Not Found', { status: 404 });
  }),

  // Retrieve All Steps
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps`, (req, res, ctx) => {
    return HttpResponse.json(mockStepsList, { status: 200 });
  }),

  // Delete Step
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/steps/:guid`, (req, res, ctx) => {
    const { guid } = req.params;
    if (!mockStepData[guid]) {
      return HttpResponse.text('Not Found', { status: 404 });
    }
    return HttpResponse.json(mockStepData[guid], { status: 200 });
  }),

  // Create Data Flow
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/dataflows`, (req, res, ctx) => {
    return HttpResponse.json(mockDataFlowData[mockFlowId], { status: 201 });
  }),

  // Check if Data Flow Exists
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/dataflows/:guid`, (req, res, ctx) => {
    const { guid } = req.params;
    if (mockDataFlowData[guid]) {
      return HttpResponse.text('Found', { status: 200 });
    }
    return HttpResponse.text('Not Found', { status: 404 });
  }),

  // Retrieve a Data Flow
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/dataflows/:guid`, (req, res, ctx) => {
    const { guid } = req.params;
    if (mockDataFlowData[guid]) {
      return HttpResponse.json(mockDataFlowData[guid], { status: 200 });
    }
    return HttpResponse.text('Not Found', { status: 404 });
  }),
  // Retrieve a Data Flow with include data
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/dataflows/:guid?includeData`, (req, res, ctx) => {
    const { guid } = req.params;
    if (mockDataFlowData[guid]) {
      return HttpResponse.json(mockDataFlowData[guid], { status: 200 });
    }
    return HttpResponse.text('Not Found', { status: 404 });
  }),
  // Retrieve request performance data
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/dataflows/:guid/performance?request=${requestID}`,
    (req, res, ctx) => {
      return HttpResponse.json(mockDataFlowData[mockFlowId], { status: 200 });
    }
  ),

  // Retrieve All Data Flows
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/dataflows`, (req, res, ctx) => {
    return HttpResponse.json(mockDataFlowsList, { status: 200 });
  }),

  // Delete Data Flow
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/dataflows/:guid`, (req, res, ctx) => {
    const { guid } = req.params;
    if (!mockDataFlowData[guid]) {
      return HttpResponse.text('Not Found', { status: 404 });
    }
    const deletedFlow = mockDataFlowData[guid];
    delete mockDataFlowData[guid];
    return HttpResponse.json(deletedFlow, { status: 200 });
  }),
  // Retrieve Data Flow Logs
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/dataflows/:dataFlowGuid/logs`, (req, res, ctx) => {
    const { dataFlowGuid } = req.params;

    if (!mockDataFlowLogs[dataFlowGuid] || !mockDataFlowLogs[dataFlowGuid]['request1']) {
      return HttpResponse.text('Logs not found', { status: 404 });
    }

    return HttpResponse.json(mockDataFlowLogs[dataFlowGuid]['request1'], { status: 200 });
  }),

  // Retrieve Data Flow Logfile
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/dataflows/:dataFlowGuid/logfile`, (req, res, ctx) => {
    const { dataFlowGuid } = req.params;

    if (!mockDataFlowLogfileContent[dataFlowGuid] || !mockDataFlowLogfileContent[dataFlowGuid]['request1']) {
      return HttpResponse.text('Logfile not found', { status: 404 });
    }

    return HttpResponse.text(mockDataFlowLogfileContent[dataFlowGuid]['request1'], { status: 200 });
  }),
];
