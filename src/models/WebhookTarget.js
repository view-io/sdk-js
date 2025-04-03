/**
 * Represents a webhook target.
 */
export default class WebhookTarget {
  /**
   * @param {Object} options - Webhook target definition.
   * @param {string} [options.GUID] - Unique identifier.
   * @param {string} [options.TenantGUID] - Tenant identifier.
   * @param {string} [options.Name] - Name of the webhook target.
   * @param {string} [options.Url] - Target URL.
   * @param {string} [options.ContentType] - Content type (e.g. application/json).
   * @param {number} [options.ExpectStatus] - Expected HTTP status code.
   * @param {string} [options.CreatedUtc] - Timestamp of creation (ISO 8601 string).
   */
  constructor(options = {}) {
    const { GUID, TenantGUID, Name, Url, ContentType, ExpectStatus, CreatedUtc } = options;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.Name = Name;
    this.ContentType = ContentType;
    this.ExpectStatus = ExpectStatus;
    this.CreatedUtc = CreatedUtc;
    this.Url = Url;
  }
}
