import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import { CrawlPlan, EnumerationResult } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
export class CrawlPlansSdk extends ViewSdkBase {
  /**
   * Constructs a new CrawlPlansSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  // region Crawl Plans
  /**
   * Enumerate Crawl Plans.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<CrawlPlan>>} A promise resolving to the enumeration result or null.
   * @throws {MethodError} If the request fails.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<CrawlPlan>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/crawlplans/`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve All Crawl Plans.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   *@returns {Promise<CrawlPlan[]>} A promise resolving to an array of CrawlPlan objects. If creation fails, the promise resolves to null.
   * @throws {MethodError} If the request fails.
   */
  readAll = async (cancelToken?: AbortController): Promise<CrawlPlan[]> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlplans/`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve By Id Crawl Plans.
   * @param {string} [guid] - GUID of crawl Plans
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   *@returns {Promise<CrawlPlan[]>} A promise resolving CrawlPlan objects. If creation fails, the promise resolves to null.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<CrawlPlan> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlplans/${guid}`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Write Crawl Plans.
   * @param {CrawlPlan} crawlPlanData - An object containing information about the crawl plan.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   *@returns {Promise<CrawlPlan[]>} A promise resolving CrawlPlan objects. If creation fails, the promise resolves to null.
   * @throws {MethodError} If the crawlPlansData is null or empty.
   */
  create = async (crawlPlansData: CrawlPlan, cancelToken?: AbortController): Promise<CrawlPlan> => {
    if (!crawlPlansData) {
      GenericExceptionHandlers.ArgumentNullException('crawlPlansData');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlplans`;
    return await this.createResource(url, crawlPlansData, cancelToken);
  };
  /**
   * Update Crawl Plan.
   * @param {CrawlPlan} crawlPlanData - Information about the crawl plan to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlPlan>} A promise resolving of CrawlPlan objects if the update is successful, or null if the update fails.
   * @throws {MethodError} If the guid is null or empty or If the crawlPlanData is null or empty.
   */
  update = async (crawlPlanData: CrawlPlan, cancelToken?: AbortController): Promise<CrawlPlan> => {
    if (!crawlPlanData) {
      GenericExceptionHandlers.ArgumentNullException('crawlPlanData');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlplans/${crawlPlanData.GUID}`;

    return await this.updateResource(url, crawlPlanData, cancelToken);
  };
  /**
   * Delete Crawl Plans.
   *
   * @param {string} [guid] - GUID of Crawl Plans
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   @returns {Promise<boolean>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlplans/${guid}`;
    return await this.deleteResource(url, cancelToken);
  };
  /**
   * Check Existence Crawl Plans.
   *
   * @param {string} [guid] - GUID of Crawl Plans
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the Node object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlplans/${guid}`;
    return await this.existsResource(url, cancelToken);
  };
}
