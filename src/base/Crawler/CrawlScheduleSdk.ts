import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { CrawlSchedule, EnumerationResult } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export class CrawlScheduleSdk extends ViewSdkBase {
  /**
   * Constructs a new CrawlScheduleSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Crawl Schedules
  /**
   * Enumerate Crawl Schedules.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<CrawlSchedule>>} A promise resolving to the enumeration result or null.
   * @throws {MethodError} If the request fails.
   */
  enumerate = async (cancelToken: AbortController): Promise<EnumerationResult<CrawlSchedule> | null> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/crawlschedules/`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve All Crawl Schedules.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   *  @returns {Promise<CrawlSchedule[]>} A promise that resolves to an array of crawl schedules.
   *  @throws {MethodError} If the request fails.
   */
  readAll = async (cancelToken: AbortController): Promise<CrawlSchedule[]> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlschedules/`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve By ID Crawl Schedules.
   * @param {string} [guid] - GUID of crawl schedules
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlSchedule|null|ApiErrorResponse>} A promise that resolves to the crawl schedule object, or null if not found, or an error response.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken: AbortController): Promise<CrawlSchedule> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlschedules/${guid}`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Create Crawl Schedules.
   * @param {CrawlSchedule} scheduleData - Information about the schedule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlSchedule|null|ApiErrorResponse>} A promise that resolves to the created crawl schedule
   * @throws {MethodError} If the scheduleData is null or empty.
   */
  create = async (scheduleData: CrawlSchedule, cancelToken: AbortController): Promise<CrawlSchedule> => {
    if (!scheduleData) {
      GenericExceptionHandlers.ArgumentNullException('scheduleData');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlschedules/`;
    return await this.updateResource(url, scheduleData, cancelToken);
  };
  /**
   * Update Crawl Schedules.
   * @param {CrawlSchedule} scheduleData - Information about the schedule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlSchedule|ApiErrorResponse>} A promise that resolves to the updated crawl schedule
   * @throws {MethodError} If the guid is null or empty or If the scheduleData is null or empty .
   */
  update = async (scheduleData: CrawlSchedule, cancelToken: AbortController): Promise<CrawlSchedule> => {
    if (!scheduleData) {
      GenericExceptionHandlers.ArgumentNullException('scheduleData');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlschedules/${scheduleData.GUID}`;
    return await this.updateResource(url, scheduleData, cancelToken);
  };
  /**
   * Delete Crawl Schedule.
   *
   * @param {string} guid - The GUID of the crawl schedule to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlschedules/${guid}`;
    return await this.deleteResource(url, cancelToken);
  };
  /**
   * Check Existence of Crawl Schedule.
   *
   * @param {string} guid - GUID of Crawl Schedule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the Crawl Schedule exists, otherwise `false` or an error response if the check fails.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/crawlschedules/${guid}`;
    return await this.existsResource(url, cancelToken);
  };
}
