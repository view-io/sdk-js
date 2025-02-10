import { URL } from 'url';
import { v4 as uuidV4 } from 'uuid';

/**
 * Represents a webhook target.
 */
export default class WebhookTarget {
  /**
   * @param {Object} [options] - Optional parameters.
   * @param {string} [options.GUID] - GUID (automatically generated if not provided).
   * @param {string} [options.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [options.Name] - Name of the webhook target (defaults to "My webhook target").
   * @param {string} [options.Url] - URL of the webhook target.
   * @param {string} [options.ContentType] - Content type (defaults to "application/json").
   * @param {number} [options.ExpectStatus] - Expected HTTP status (defaults to 200).
   */
  constructor({
    GUID = uuidV4(),
    TenantGUID = uuidV4(),
    Name = 'My webhook target',
    Url = null,
    CreatedUtc = new Date(),
    ContentType = 'application/json',
    ExpectStatus = 200,
  } = {}) {
    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.Name = Name;
    this._Url = Url;
    this._Uri = Url ? new URL(Url) : null; // Initialize URI from URL if provided
    this.ContentType = ContentType;
    this.ExpectStatus = ExpectStatus;
    this.CreatedUtc = CreatedUtc; // Default to current UTC time
  }

  /**
   * @returns {string} The URL of the webhook target.
   */
  get Url() {
    return this._Url;
  }

  /**
   * @param {string} value - The URL of the webhook target.
   */
  set Url(value) {
    if (!value) throw new Error('Url cannot be null or empty.');
    this._Uri = new URL(value);
    this._Url = value;
  }

  /**
   * @returns {URL} The URI of the webhook target.
   */
  get Uri() {
    return this._Uri;
  }

  /**
   * @param {URL} value - The URI of the webhook target.
   */
  set Uri(value) {
    if (!value) throw new Error('Uri cannot be null.');
    this._Uri = value;
    this._Url = this._Uri.toString();
  }

  // Additional methods can be added here
}
