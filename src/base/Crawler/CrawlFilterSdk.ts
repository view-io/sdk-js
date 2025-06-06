import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { CrawlFilter, EnumerationResult } from '../../types';

export class CrawlFilterSdk extends ViewSdkBase {
  /**
   * Constructs a new CrawlFilterSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Crawl filter
  /**
   * Enumerate Crawl Filters.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<CrawlFilter>>} A promise resolving to the enumeration result or null.
   * @throws {MethodError} If the `cancelToken` is null or empty.
   */
  enumerate = async (cancelToken: AbortController): Promise<EnumerationResult<CrawlFilter>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/crawlfilters/`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve All Crawl Filters.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlFilter[]>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the `cancelToken` is null or empty.
   */
  readAll = async (cancelToken: AbortController): Promise<CrawlFilter[]> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlfilters/`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve By Id Crawl Filters.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * * @param {string} [guid] - GUID of crawl Filters
   * @returns {Promise<CrawlFilter|null|ApiErrorResponse>} A promise that resolves to the crawl filter object, or null if not found, or an error response.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken: AbortController): Promise<CrawlFilter> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlfilters/${guid}`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Create Crawl Filters.
   * @param {CrawlFilter} crawlFiltersData - Information about the crawl filter.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlFilter>} A promise that resolves to the crawl filter object, or null if not found, or an error response.
   * @throws {MethodError} If the crawlFiltersData is null or empty.
   */
  create = async (crawlFiltersData: CrawlFilter, cancelToken: AbortController): Promise<CrawlFilter> => {
    if (!crawlFiltersData) {
      GenericExceptionHandlers.ArgumentNullException('crawlFiltersData');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlfilters/`;
    return await this.createResource(url, crawlFiltersData, cancelToken);
  };
  /**
   * Update Crawl Filters.
   * @param {CrawlFilter} crawlFilterData - Information about the schedule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlFilter|null|ApiErrorResponse>} A promise that resolves to the crawl filter object, or null if not found, or an error response.
   * @throws {MethodError} If the guid is null or empty or If crawlFiltersData is null or empty.
   */
  update = async (crawlFilterData: CrawlFilter, cancelToken: AbortController): Promise<CrawlFilter> => {
    if (!crawlFilterData || !crawlFilterData.GUID) {
      GenericExceptionHandlers.ArgumentNullException('crawlFilterData or crawlFilterData.GUID');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlfilters/${crawlFilterData.GUID}`;

    return await this.updateResource(url, crawlFilterData, cancelToken);
  };
  /**
   * Delete Crawl Filters.
   *
   * @param {string} [guid] - GUID of Crawl Filters
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlfilters/${guid}`;
    return await this.deleteResource(url, cancelToken);
  };
  /**
   * Check Existence Crawl Filters.
   *
   * @param {string} [guid] - GUID of Crawl Filters
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the crawl filter object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlfilters/${guid}`;
    return await this.existsResource(url, cancelToken);
  };
}
