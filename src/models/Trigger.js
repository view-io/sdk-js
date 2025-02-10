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
   * @param {string} trigger.Notes - Additional notes for the trigger (optional).
   * @param {Date} trigger.CreatedUtc - Creation timestamp in UTC (default is current date and time).
   */
  _reservedUrlPrefixes = ['/v1.0'];
  constructor(trigger) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      Name = 'My trigger',
      TriggerType = 'HTTP',
      HttpMethod = null,
      HttpUrlPrefix = null,
      Notes = null,
      CreatedUtc = new Date(),
    } = trigger;

    this._GUID = GUID;
    this._TenantGUID = TenantGUID;
    this.Name = Name;
    this.TriggerType = TriggerType;
    this.HttpMethod = HttpMethod;
    this.HttpUrlPrefix = HttpUrlPrefix;
    this.Notes = Notes;
    this.CreatedUtc = CreatedUtc;

    // Validation of HttpUrlPrefix
    if (this.HttpUrlPrefix && this._reservedUrlPrefixes.includes(this.HttpUrlPrefix)) {
      throw new Error('Supplied HttpUrlPrefix is reserved and cannot be used.');
    }

    // Ensure HttpUrlPrefix starts with a '/'
    if (this.HttpUrlPrefix && !this.HttpUrlPrefix.startsWith('/')) {
      this.HttpUrlPrefix = '/' + this.HttpUrlPrefix;
    }

    this._HttpUrlPrefix = this.HttpUrlPrefix;
  }

  /**
   * GUID getter.
   */
  get GUID() {
    return this._GUID;
  }

  /**
   * Tenant GUID getter.
   */
  get TenantGUID() {
    return this._TenantGUID;
  }

  /**
   * HTTP URL Prefix getter.
   */
  get HttpUrlPrefix() {
    return this._HttpUrlPrefix;
  }

  /**
   * HTTP URL Prefix setter with validation.
   * @param {string} value - The URL prefix.
   */
  set HttpUrlPrefix(value) {
    if (value && !value.startsWith('/')) {
      value = '/' + value;
    }
    if (value && this._reservedUrlPrefixes.includes(value)) {
      throw new Error('Supplied HttpUrlPrefix is reserved and cannot be used.');
    }

    this._HttpUrlPrefix = value;
  }

  /**
   * To represent the Trigger as a string (useful for debugging).
   */
  toString() {
    return `${this.Name} [${this.TriggerType}]`;
  }
}
