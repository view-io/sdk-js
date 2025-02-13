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
    constructor(filter?: {
        GUID?: string;
        TenantGUID?: string;
        Name?: string;
        Prefix?: string;
        Suffix?: string;
        MinimumSize?: number;
        MaximumSize?: number;
        IncludeSubdirectories?: boolean;
        ContentType?: string;
        CreatedUtc?: Date;
    });
    guid: any;
    tenantGUID: any;
    name: string;
    prefix: string;
    suffix: string;
    _minimumSize: number;
    _maximumSize: number;
    includeSubdirectories: boolean;
    contentType: string;
    createdUtc: string | Date;
    set Id(value: any);
    get Id(): any;
    _id: any;
    set MinimumSize(value: number);
    get MinimumSize(): number;
    set MaximumSize(value: number);
    get MaximumSize(): number;
}
