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
    constructor(filter?: {
        GUID: string;
        TenantGUID: string;
        Name: string;
        MinimumSize: number;
        MaximumSize: number;
        IncludeSubdirectories: boolean;
        ContentType: string;
        CreatedUtc: string;
    });
    GUID: string;
    TenantGUID: string;
    Name: string;
    MinimumSize: number;
    MaximumSize: number;
    IncludeSubdirectories: boolean;
    ContentType: string;
    CreatedUtc: string;
}
