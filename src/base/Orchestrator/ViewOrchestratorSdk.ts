import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { TriggerSdk } from './TriggerSdk';
import { StepsSdk } from './StepsSdk';
import { DataFlowsSdk } from './DataFlowsSdk';
import { DataFlowLogsSdk } from './DataFlowLogs';

/**
 * Orchestrator service.
 * @module base/ViewOrchestratorSdk
 * @version 0.1.0
 */
export default class ViewOrchestratorSdk extends ViewSdkBase {
  public dataFlowsSdk: DataFlowsSdk;
  public dataFlowLogsSdk: DataFlowLogsSdk;
  public triggerSdk: TriggerSdk;
  public stepsSdk: StepsSdk;
  /**
   * Constructs a new OrchestratorApi.
   * @alias module:base/ViewOrchestratorSdk
   * @class
   * @param {string} tenantGuid - Tenant GUID.
   * @param {string} accessKey - Access key.
   * @param {string} endpoint - Endpoint URL .
   */
  constructor(config: SdkConfiguration) {
    super(config);
    this.dataFlowsSdk = new DataFlowsSdk(config);
    this.dataFlowLogsSdk = new DataFlowLogsSdk(config);
    this.triggerSdk = new TriggerSdk(config);
    this.stepsSdk = new StepsSdk(config);
  }
}
