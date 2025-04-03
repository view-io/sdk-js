/**
 * CrawlFilter model to represent the filter.
 */
export default class CrawlFilter {
  /**
   * @param {Object} filter
   * @param {string} filter.GUID - Unique filter identifier.
   * @param {string} filter.TenantGUID - Tenant identifier.
   * @param {string} filter.Name - Name of the filter.
   * @param {number} filter.MinimumSize - Minimum file size to include.
   * @param {number} filter.MaximumSize - Maximum file size to include.
   * @param {boolean} filter.IncludeSubdirectories - Whether to include subdirectories.
   * @param {string} filter.ContentType - Content type to include.
   * @param {string} filter.CreatedUtc - UTC timestamp of creation (ISO 8601 format).
   */
  constructor(filter = {}) {
    const { GUID, TenantGUID, Name, MinimumSize, MaximumSize, IncludeSubdirectories, ContentType, CreatedUtc } = filter;

    if (MinimumSize < 0) {
      throw new RangeError('MinimumSize must be non-negative.');
    }
    if (MaximumSize !== null && MaximumSize < 0) {
      throw new RangeError('MaximumSize must be non-negative.');
    }

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.Name = Name;
    this.MinimumSize = MinimumSize;
    this.MaximumSize = MaximumSize;
    this.IncludeSubdirectories = IncludeSubdirectories;
    this.ContentType = ContentType;
    this.CreatedUtc = CreatedUtc;
  }
}
