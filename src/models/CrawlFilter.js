import { v4 as uuidV4 } from 'uuid';

/**
 * CrawlFilter model to represent the filter with validation and default values.
 */
export default class CrawlFilter {
  /**
   * @param {Object} filter
   * @param {string} [filter.GUID] - GUID (auto-generated if not provided).
   * @param {string} [filter.TenantGUID] - Tenant GUID (auto-generated if not provided).
   * @param {string} [filter.Name] - Name of the filter.
   * @param {string} [filter.Prefix] - Prefix string for the filter.
   * @param {string} [filter.Suffix] - Suffix string for the filter.
   * @param {number} [filter.MinimumSize] - Minimum size (must be non-negative).
   * @param {number} [filter.MaximumSize] - Maximum size (must be non-negative).
   * @param {boolean} [filter.IncludeSubdirectories] - Whether to include subdirectories (default: true).
   * @param {string} [filter.ContentType] - Content type for the filter.
   * @param {Date} [filter.CreatedUtc] - UTC creation timestamp (auto-generated if not provided).
   */
  constructor(filter = {}) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      Name = 'My filter',
      Prefix = null,
      Suffix = null,
      MinimumSize = 0,
      MaximumSize = null,
      IncludeSubdirectories = true,
      ContentType = null,
      CreatedUtc = new Date().toISOString(),
    } = filter;

    // Assign other fields
    this.guid = GUID;
    this.tenantGUID = TenantGUID;
    this.name = Name;
    this.prefix = Prefix;
    this.suffix = Suffix;

    // Size validation
    if (MinimumSize < 0) {
      throw new RangeError('MinimumSize must be non-negative.');
    }
    this._minimumSize = MinimumSize;

    if (MaximumSize !== null && MaximumSize < 0) {
      throw new RangeError('MaximumSize must be non-negative.');
    }
    this._maximumSize = MaximumSize;

    // Other fields
    this.includeSubdirectories = IncludeSubdirectories;
    this.contentType = ContentType;
    this.createdUtc = CreatedUtc;
  }

  // ID Getter/Setter with validation
  get Id() {
    return this._id;
  }

  set Id(value) {
    if (value < 1) {
      throw new RangeError('Id must be greater than 0.');
    }
    this._id = value;
  }

  // MinimumSize Getter/Setter with validation
  get MinimumSize() {
    return this._minimumSize;
  }

  set MinimumSize(value) {
    if (value !== null && value < 0) {
      throw new RangeError('MinimumSize must be non-negative.');
    }
    this._minimumSize = value;
  }

  // MaximumSize Getter/Setter with validation
  get MaximumSize() {
    return this._maximumSize;
  }

  set MaximumSize(value) {
    if (value !== null && value < 0) {
      throw new RangeError('MaximumSize must be non-negative.');
    }
    this._maximumSize = value;
  }
}
