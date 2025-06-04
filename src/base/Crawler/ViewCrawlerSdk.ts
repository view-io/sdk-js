import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
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
export default class ViewCrawlerSdk extends ViewSdkBase {
  public CrawlFilter: CrawlFilterSdk;
  public CrawlSchedule: CrawlScheduleSdk;
  public CrawlPlan: CrawlPlansSdk;
  public CrawlOperation: CrawlOperationSdk;
  public DataRepository: DataRepositorySdk;
  /**
   * Constructs a new OrchestratorApi.
   * @alias module:base/ViewOrchestratorSdk
   * @class
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
    this.CrawlFilter = new CrawlFilterSdk(config);
    this.CrawlSchedule = new CrawlScheduleSdk(config);
    this.CrawlPlan = new CrawlPlansSdk(config);
    this.CrawlOperation = new CrawlOperationSdk(config);
    this.DataRepository = new DataRepositorySdk(config);
  }
}
