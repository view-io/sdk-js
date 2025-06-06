import { SdkConfiguration } from '../SdkConfiguration';
import { CrawlFilterSdk } from './CrawlFilterSdk';
import { CrawlOperationSdk } from './CrawlOperationSdk';
import { CrawlPlansSdk } from './CrawlPlansSdk';
import { CrawlScheduleSdk } from './CrawlScheduleSdk';
import { DataRepositorySdk } from './DataRepositorySdk';

/**
 * Crawler service.
 * @module base/ViewCrawlerSdk
 * @version 0.1.0
 */
export default class ViewCrawlerSdk {
  public CrawlFilter: CrawlFilterSdk;
  public CrawlSchedule: CrawlScheduleSdk;
  public CrawlPlan: CrawlPlansSdk;
  public CrawlOperation: CrawlOperationSdk;
  public DataRepository: DataRepositorySdk;
  public config: SdkConfiguration;
  /**
   * Constructs a new OrchestratorApi.
   * @alias module:base/ViewOrchestratorSdk
   * @class
   * @param {string} endpoint - The endpoint of the crawler service.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.CrawlFilter = new CrawlFilterSdk(this.config);
    this.CrawlSchedule = new CrawlScheduleSdk(this.config);
    this.CrawlPlan = new CrawlPlansSdk(this.config);
    this.CrawlOperation = new CrawlOperationSdk(this.config);
    this.DataRepository = new DataRepositorySdk(this.config);
  }
}
