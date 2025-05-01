import { getServer } from '../server';
import { handlers } from './handlers';
import Trigger from '../../src/models/Trigger';
import { ViewOrchestratorSdk } from '../../src';
import { mockAccessToken, mockEndpoint, mockTenantId } from '../setupTest';
import {
  mockStepCreatePayload,
  mockStepGUID,
  mockStepId,
  mockTriggerData,
  mockTriggerId,
  updateTriggerMockData,
} from './mockData';
import StepMetadata from '../../src/models/StepMetadata';

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

  describe('Trigger Methods', () => {
    it('creates a trigger', async () => {
      const data = await api.createTrigger(mockTriggerData[mockTriggerId]);
      expect(data instanceof Trigger).toBe(true);
      expect(data.Name).toBe(mockTriggerData[mockTriggerId].Name);
    });

    it('throws error when creating a trigger without the trigger parameter', async () => {
      try {
        await api.createTrigger();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: trigger is null or empty');
      }
    });

    it('checks if a trigger exists', async () => {
      const data = await api.existsTrigger(mockTriggerId);
      expect(data).toBe('true');
    });

    it('checks if a trigger does not exist', async () => {
      try {
        const data = await api.existsTrigger('nonExistingTriggerId');
        expect(data).toBe('false');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });

    it('throws error when checking existence without guid', async () => {
      try {
        await api.existsTrigger();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a trigger', async () => {
      const guid = 'trigger123';
      const data = await api.retrieveTrigger(guid);
      expect(data instanceof Trigger).toBe(true);
      expect(data.GUID).toBe(guid);
    });

    it('throws error when retrieving a trigger without guid', async () => {
      try {
        await api.retrieveTrigger();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves all triggers', async () => {
      const data = await api.retrieveTriggers();
      data.forEach((trigger) => {
        expect(trigger instanceof Trigger).toBe(true);
      });
    });

    it('updates a trigger', async () => {
      const data = await api.updateTrigger(updateTriggerMockData);
      expect(data instanceof Trigger).toBe(true);
      expect(data.GUID).toBe(updateTriggerMockData.GUID);
      expect(data.Name).toBe(updateTriggerMockData.Name);
    });

    it('throws error when updating a trigger without the trigger parameter', async () => {
      try {
        await api.updateTrigger();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: trigger is null or empty');
      }
    });

    it('deletes a trigger', async () => {
      const data = await api.deleteTrigger(mockTriggerId);
      expect(data).not.toBeDefined();
    });

    it('throws error when deleting a trigger without guid', async () => {
      try {
        await api.deleteTrigger();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
  describe('Steps Methods', () => {
    it('creates a step', async () => {
      const data = await api.createStep(mockStepCreatePayload);
      expect(data instanceof StepMetadata).toBe(true);
      expect(data.GUID).toBe(mockStepCreatePayload.GUID);
    });

    it('throws error when creating a step without the step parameter', async () => {
      try {
        await api.createStep();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: step is null or empty');
      }
    });

    it('checks if a step exists', async () => {
      const data = await api.existsStep(mockStepId);
      expect(data).toBe('true');
    });

    it('checks if a step does not exist', async () => {
      try {
        const data = await api.existsStep('nonExistingStep');
        expect(data).toBe('false');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });

    it('throws error when checking existence without guid', async () => {
      try {
        await api.existsStep();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a step', async () => {
      const data = await api.retrieveStep(mockStepId);
      expect(data instanceof StepMetadata).toBe(true);
      expect(data.GUID).toBe(mockStepId);
    });

    it('throws error when retrieving a step without guid', async () => {
      try {
        await api.retrieveStep();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves all steps', async () => {
      const data = await api.retrieveSteps();
      data.forEach((step) => {
        expect(step instanceof StepMetadata).toBe(true);
      });
    });
    //retrievebyGUIDwithsubordinatesAndpackages
    it('retrieves all steps with csharploopbackget', async () => {
      const data = await api.retrieveStepsWithSubordinatesAndPackages(mockStepGUID);
      expect(data instanceof StepMetadata).toBe(true);
    });

    it('deletes a step', async () => {
      const data = await api.deleteStep(mockStepId);
      expect(data).not.toBeDefined();
    });

    it('throws error when deleting a step without guid', async () => {
      try {
        await api.deleteStep();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
