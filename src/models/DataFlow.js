import { v4 as uuidV4 } from 'uuid';

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
   * @param {StepMetadata} [dataFlow.Step] - The entry step of the data flow.
   */
  constructor(dataFlow = {}) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      TriggerGUID = uuidV4(),
      StepGUID = uuidV4(),
      Name = 'My data flow',
      Notes = null,
      CreatedUtc = new Date(),
      LogRetentionDays = 7,
      Step = null,
    } = dataFlow;

    this._LogRetentionDays = 7; // Default value for log retention days

    // Set properties
    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.TriggerGUID = TriggerGUID;
    this.StepGUID = StepGUID;
    this.Name = Name;
    this.Notes = Notes;
    this.CreatedUtc = CreatedUtc;
    this.Step = Step;

    // LogRetentionDays uses setter for validation
    this.LogRetentionDays = LogRetentionDays;
  }

  /**
   * LogRetentionDays getter.
   */
  get LogRetentionDays() {
    return this._LogRetentionDays;
  }

  /**
   * LogRetentionDays setter with validation.
   * @param {number} value - The number of days for log retention.
   * @throws {Error} If the value is less than 0.
   */
  set LogRetentionDays(value) {
    if (value < 0) {
      throw new Error('LogRetentionDays cannot be less than 0');
    }
    this._LogRetentionDays = value;
  }
}
