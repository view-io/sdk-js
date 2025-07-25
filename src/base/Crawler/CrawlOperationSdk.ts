import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { CrawlOperation, EnumerationResult, MethodError } from '../../types';

export class CrawlOperationSdk extends ViewSdkBase {
  /**
   * Constructs a new CrawlOperationSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Crawl Operations
  /**
   * Enumerate Crawl Operations.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<CrawlOperation>>} A promise resolving to the enumeration result or null
   * @throws {MethodError} If the request fails.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<CrawlOperation>> => {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/crawloperations/`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve All Crawl Operations.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation[]>} A promise resolving to an array of CrawlOperation objects if the operation is successful,
   * @throws {MethodError} If the request fails.
   */
  readAll = async (cancelToken?: AbortController): Promise<CrawlOperation[]> => {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/crawloperations/`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve By Id Crawl Operations.
   * @param {string} [guid] - GUID of crawl operations
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation>}  A promise resolving to a CrawlOperation object if the operation is successful,  or an ApiErrorResponse if an error occurs.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<CrawlOperation> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/crawloperations/${guid}`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve enumeration Crawl Operations.
   * @param {string} [guid] - GUID of crawl operations
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation>}  A promise resolving to a CrawlOperation object if the operation is successful,  or an ApiErrorResponse if an error occurs.
   * @throws {MethodError} If the guid is null or empty.
   */
  readEnumeration = async (guid: string, cancelToken?: AbortController): Promise<CrawlOperation> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/crawloperations/${guid}/enumeration`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Start Crawl Operations.
   * @param {string} [guid] - The GUID of the crawl plan.
   * @param {CrawlOperation} crawlOperationData - Information about the crawl operation to start.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation>}  A promise resolving to a CrawlOperation object if the operation is start,  or an ApiErrorResponse if an error occurs.
   * @throws {MethodError} If the guid is null or empty or crawlOperationsData null or empty.
   */
  start = async (
    guid: string,
    crawlOperationData: CrawlOperation,
    cancelToken?: AbortController
  ): Promise<CrawlOperation> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!crawlOperationData) {
      GenericExceptionHandlers.ArgumentNullException('crawlOperationData');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/crawloperations/${guid}/start`;
    return await this.postCreateResource(url, crawlOperationData, cancelToken);
  };
  /**
   * Stop Crawl Operations.
   * @param {string} [guid] - The GUID of the crawl plan.
   * @param {CrawlOperation} crawlOperationData - Information about the crawl operation to start.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation>}  A promise resolving to a CrawlOperation object if the operation is stop,  or an ApiErrorResponse if an error occurs.
   * @throws {MethodError} If the guid is null or empty or crawlOperationsData null or empty.
   */
  stop = async (
    guid: string,
    crawlOperationData: CrawlOperation,
    cancelToken?: AbortController
  ): Promise<CrawlOperation> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!crawlOperationData) {
      GenericExceptionHandlers.ArgumentNullException('crawlOperationData');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/crawloperations/${guid}/stop`;
    return await this.postCreateResource(url, crawlOperationData, cancelToken);
  };
  /**
   * Delete Crawl Operations.
   *
   * @param {string} [guid] - GUID of Crawl Operations
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   @returns {Promise<boolean>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/crawloperations/${guid}`;
    return await this.deleteResource(url, cancelToken);
  };
  /**
   * Check Existence Crawl Operations.
   *
   * @param {string} [guid] - GUID of Crawl Operations
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the Crawl Operations object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/crawloperations/${guid}`;
    return await this.existsResource(url, cancelToken);
  };
}
