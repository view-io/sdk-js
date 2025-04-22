import { v4 as uuidV4 } from 'uuid';
/**
 * Data flow trigger, i.e., the event that invokes a data flow.
 */
export default class Trigger {
  /**
   * @param {Object} trigger Information about the trigger.
   * @param {string} trigger.GUID - Trigger GUID (automatically generated if not provided).
   * @param {string} trigger.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} trigger.Name - Name of the trigger.
   * @param {string} trigger.TriggerType - Type of the trigger (default is 'HTTP').
   * @param {string} trigger.HttpMethod - HTTP method (optional).
   * @param {string} trigger.HttpUrlPrefix - HTTP relative URL prefix (optional).
   * @param {Date} trigger.CreatedUtc - Creation timestamp in UTC (default is current date and time).
   */
  constructor(trigger) {
    const { GUID, TenantGUID, Name, TriggerType, HttpMethod, HttpUrlPrefix, CreatedUtc } = trigger;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.Name = Name;
    this.TriggerType = TriggerType;
    this.HttpMethod = HttpMethod;
    this.HttpUrlPrefix = HttpUrlPrefix;
    this.CreatedUtc = CreatedUtc;
  }
}
