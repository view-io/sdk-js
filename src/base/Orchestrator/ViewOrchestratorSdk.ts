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
export default class ViewOrchestratorSdk {
  public dataFlowsSdk: DataFlowsSdk;
  public dataFlowLogsSdk: DataFlowLogsSdk;
  public triggerSdk: TriggerSdk;
  public stepsSdk: StepsSdk;
  public config: SdkConfiguration;
  /**
   * Constructs a new OrchestratorApi.
   * @alias module:base/ViewOrchestratorSdk
   * @class
   * @param {string} tenantGuid - Tenant GUID.
   * @param {string} accessKey - Access key.
   * @param {string} endpoint - Endpoint URL .
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    this.config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.dataFlowsSdk = new DataFlowsSdk(this.config);
    this.dataFlowLogsSdk = new DataFlowLogsSdk(this.config);
    this.triggerSdk = new TriggerSdk(this.config);
    this.stepsSdk = new StepsSdk(this.config);
  }
}
