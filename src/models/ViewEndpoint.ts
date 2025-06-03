import { URL } from 'url';
import { v4 as uuidV4 } from 'uuid';

/**
 * Represents a view storage server endpoint.
 */
export default class ViewEndpoint {
  /**
   * @param {Object} [options] - Optional parameters.
   * @param {string} [options.GUID] - GUID (automatically generated if not provided).
   * @param {string} [options.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [options.OwnerGUID] - Owner GUID (automatically generated if not provided).
   * @param {string} [options.Name] - Name of the view endpoint (defaults to "My View endpoint").
   * @param {boolean} [options.UseSsl] - Boolean flag to enable or disable SSL (defaults to false).
   * @param {string} [options.S3Url] - S3 URL (defaults to "http://localhost:8002/").
   * @param {string} [options.S3BaseUrl] - S3 base URL (defaults to "http://localhost:8002/{bucket}/{key}").
   * @param {string} [options.RestUrl] - REST URL (defaults to "http://localhost:8001/").
   * @param {string} [options.BucketName] - Bucket name (defaults to "data").
   * @param {string} [options.Region] - Region (defaults to "us-west-1").
   * @param {string} [options.AccessKey] - Access key.
   * @param {string} [options.SecretKey] - Secret key.
   * @param {string} [options.ApiKey] - API key.
   * @param {Date} [options.CreatedUtc] - Created date (defaults to current UTC time).
   */
  constructor({
    GUID = uuidV4(),
    TenantGUID = uuidV4(),
    OwnerGUID = uuidV4(),
    Name = 'My View endpoint',
    UseSsl = false,
    S3Url = 'http://localhost:8002/',
    S3BaseUrl = 'http://localhost:8002/{bucket}/{key}',
    RestUrl = 'http://localhost:8001/',
    BucketName = 'data',
    Region = 'us-west-1',
    AccessKey = null,
    SecretKey = null,
    ApiKey = null,
    CreatedUtc = new Date(),
  } = {}) {
    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.OwnerGUID = OwnerGUID;
    this.Name = Name;
    this.UseSsl = UseSsl;
    this.S3Url = S3Url;
    this.S3BaseUrl = S3BaseUrl;
    this.RestUrl = RestUrl;
    this.BucketName = BucketName;
    this.Region = Region;
    this.AccessKey = AccessKey;
    this.SecretKey = SecretKey;
    this.ApiKey = ApiKey;
    this.CreatedUtc = CreatedUtc;
  }

  /**
   * @returns {string} The S3 URL.
   */
  get S3Url() {
    return this._S3Url;
  }

  /**
   * @param {string} value - The S3 URL.
   */
  set S3Url(value) {
    if (!value) throw new Error('S3Url cannot be null or empty.');
    if (!value.endsWith('/')) value += '/';
    this._S3Url = value;
  }

  /**
   * @returns {URL} The S3 URI.
   */
  get S3Uri() {
    return new URL(this.S3Url);
  }

  /**
   * @param {URL} value - The S3 URI.
   */
  set S3Uri(value) {
    if (!value) throw new Error('S3Uri cannot be null.');
    this.S3Url = value.toString();
  }

  /**
   * @returns {string} The S3 base URL.
   */
  get S3BaseUrl() {
    return this._S3BaseUrl;
  }

  /**
   * @param {string} value - The S3 base URL.
   */
  set S3BaseUrl(value) {
    if (!value) throw new Error('S3BaseUrl cannot be null or empty.');
    if (!value.includes('{bucket}')) throw new Error('Supplied S3 base URL is missing {bucket} from URL');
    if (!value.includes('{key}')) throw new Error('Supplied S3 base URL is missing {key} from URL');
    if (!value.endsWith('/')) value += '/';
    this._S3BaseUrl = value;
  }

  /**
   * @returns {string} The REST URL.
   */
  get RestUrl() {
    return this._RestUrl;
  }

  /**
   * @param {string} value - The REST URL.
   */
  set RestUrl(value) {
    if (!value) throw new Error('RestUrl cannot be null or empty.');
    if (!value.endsWith('/')) value += '/';
    this._RestUrl = value;
  }

  /**
   * @returns {URL} The REST URI.
   */
  get RestUri() {
    return new URL(this.RestUrl);
  }

  /**
   * @param {URL} value - The REST URI.
   */
  set RestUri(value) {
    if (!value) throw new Error('RestUri cannot be null.');
    this.RestUrl = value.toString();
  }

  // Additional methods can be added here
}
