import { v4 as uuidV4 } from 'uuid';
import StepMetadata from './StepMetadata';

/**
 * Data flow, i.e. a collection of steps and paths.
 */
export default class DataFlow {
  /**
   * Constructs a new DataFlow.
   * @param {Object} dataFlow - Information about the data flow.
   * @param {string} dataFlow.GUID - The GUID of the data flow (automatically generated if not provided).
   * @param {string} dataFlow.TenantGUID - The Tenant GUID (automatically generated if not provided).
   * @param {string} dataFlow.TriggerGUID - The trigger GUID (automatically generated if not provided).
   * @param {string} dataFlow.StepGUID - The step GUID (automatically generated if not provided).
   * @param {string} dataFlow.Name - The name of the data flow (default is 'My data flow').
   * @param {string} [dataFlow.Notes] - Optional notes for the data flow.
   * @param {Date} [dataFlow.CreatedUtc] - Optional creation timestamp in UTC (default is current UTC time).
   * @param {number} [dataFlow.LogRetentionDays] - The number of days to retain log entries and files (default is 7).
   * @param {object} [dataFlow.Map] - The map  of the data flow.
   * @param {StepMetadata[]} [dataFlow.Steps] - The steps of the data flow.
   */
  constructor(dataFlow = {}) {
    const { GUID, TenantGUID, TriggerGUID, StepGUID, Name, Notes, CreatedUtc, LogRetentionDays, Map, Steps } = dataFlow;

    this.LogRetentionDays = LogRetentionDays;
    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.TriggerGUID = TriggerGUID;
    this.StepGUID = StepGUID;
    this.Name = Name;
    this.Notes = Notes;
    this.CreatedUtc = CreatedUtc;
    this.Map = Map;
    this.Steps = Steps;
  }
}
