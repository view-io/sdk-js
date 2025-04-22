import { getServer } from '../server';
import { handlers } from './handlers';
import { ViewOrchestratorSdk } from '../../src';
import { mockAccessToken, mockEndpoint, mockTenantId } from '../setupTest';
import { mockFlowId, mockFlowIdInclude, requestID } from './mockData';
import DataFlow from '../../src/models/DataFlow';

const api = new ViewOrchestratorSdk(mockTenantId, mockAccessToken, mockEndpoint);

const server = getServer(handlers);
describe('ViewOrchestratorSdk', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());
  describe('DataFlows Methods', () => {
    it('creates a data flow', async () => {
      const flow = {
        GUID: 'flow123',
        TenantGUID: 'tenant-guid-123',
        Name: 'Test Data Flow',
        Description: 'Flow description',
      };
      const data = await api.createDataFlow(flow);
      expect(data instanceof DataFlow).toBe(true);
      expect(data.GUID).toBe(flow.GUID);
    });

    it('throws error when creating a data flow without the flow parameter', async () => {
      try {
        await api.createDataFlow();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: flow is null or empty');
      }
    });

    it('checks if a data flow exists', async () => {
      const data = await api.existsDataFlow(mockFlowId);
      expect(data).toBe('true');
    });

    it('checks if a data flow does not exist', async () => {
      const data = await api.existsDataFlow('nonExistingFlow');
      expect(data).toBe('false');
    });

    it('throws error when checking existence without guid', async () => {
      try {
        await api.existsDataFlow();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: GUID is required');
      }
    });

    it('retrieves a data flow', async () => {
      const guid = 'flow123';
      const data = await api.retrieveDataFlow(guid);
      expect(data instanceof DataFlow).toBe(true);
      expect(data.GUID).toBe(guid);
    });

    it('throws error when retrieving a data flow without guid', async () => {
      try {
        await api.retrieveDataFlow();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: GUID is required');
      }
    });

    it('retrieves all data flows', async () => {
      const data = await api.retrieveDataFlows();
      data.forEach((flow) => {
        expect(flow instanceof DataFlow).toBe(true);
      });
    });
    //retrieveByGUID
    it('retrieves a data flow by GUID', async () => {
      const data = await api.retrieveDataFlowWithSteps(mockFlowIdInclude);
      expect(data instanceof DataFlow).toBe(true);
    });
    it('throws an error when retrieving a data flow with an invalid GUID', async () => {
      await expect(api.retrieveDataFlowWithSteps()).rejects.toThrow(Error);
      await expect(api.retrieveDataFlowWithSteps()).rejects.toThrow('GUID is required');
    });
    // issue: fail api test case
    it('retrieves request performance data', async () => {
      const data = await api.retrieveDataFlowPerformanceData(mockFlowId);
      expect(data instanceof DataFlow).toBe(true);
    });
    it('throws an error when retrieving request performance data with an invalid request ID', async () => {
      await expect(api.retrieveDataFlowPerformanceData()).rejects.toThrow(Error);
      await expect(api.retrieveDataFlowPerformanceData()).rejects.toThrow('GUID is required');
    });
    it('deletes a data flow', async () => {
      const guid = 'flow123';
      await api.deleteDataFlow(guid);
      expect(true).toBe(true); // Ensures no error is thrown
    });

    it('throws error when deleting a data flow without guid', async () => {
      try {
        await api.deleteDataFlow();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: GUID must be provided.');
      }
    });
  });
  describe('Data Flow Log Methods', () => {
    it('retrieves data flow logs', async () => {
      const dataFlowGuid = 'flow1';
      const requestGuid = 'request1';
      const logs = await api.retrieveDataFlowLogs(dataFlowGuid, requestGuid);
      console.log(logs, 'chk logs');
      expect(Array.isArray(logs)).toBe(true);
      expect(logs.length).toBe(2);
      expect(logs[0].Name).toBe('My data flow1');
      expect(logs[1].Name).toBe('My data flow2');
    });

    it('throws error when retrieving data flow logs without guids', async () => {
      try {
        await api.retrieveDataFlowLogs(null, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.message).toBe('Both dataFlowGuid and requestGuid must be provided.');
      }
    });

    it('returns 404 for nonexistent data flow logs', async () => {
      try {
        await api.retrieveDataFlowLogs('nonexistentFlow', 'nonexistentRequest');
      } catch (err) {
        expect(err instanceof Error).toBe(false);
        expect(err).toBe('Not Found');
      }
    });

    it('retrieves data flow logfile content', async () => {
      const dataFlowGuid = 'flow1';
      const requestGuid = 'request1';
      const logfile = await api.retrieveDataFlowLogFile(dataFlowGuid, requestGuid);
      expect(typeof logfile).toBe('string');
      expect(logfile).toContain('INFO: 2024-11-01T10:00:00Z - Data flow started successfully');
    });

    it('throws error when retrieving data flow logfile without guids', async () => {
      try {
        await api.retrieveDataFlowLogFile(null, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.message).toBe('Both dataFlowGuid and requestGuid must be provided.');
      }
    });

    it('returns 404 for nonexistent data flow logfile', async () => {
      try {
        await api.retrieveDataFlowLogFile('nonexistentFlow', 'nonexistentRequest');
      } catch (err) {
        expect(err instanceof Error).toBe(false);
        expect(err).toBe('Not Found');
      }
    });
  });
});
