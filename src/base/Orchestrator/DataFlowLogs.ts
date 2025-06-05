import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { DataFlowLog } from '../../types';

export class DataFlowLogsSdk extends ViewSdkBase {
  /**
   * Constructs a new DataFlowLogsSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  //region DataFlow-Logs

  /**
   * Read data flow logs.
   *
   * @param {string} dataFlowGuid - The GUID of the data flow.
   * @param {string} requestGuid - The GUID of the request associated with the data flow logs.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<DataFlowLog>>} A promise resolving to an array of DataFlowLog objects, or an error response.
   * @throws {MethodError} If either `dataFlowGuid` or `requestGuid` are null or empty.
   */
  retrieveDataFlowLogs = async (
    dataFlowGuid: string,
    requestGuid: string,
    cancelToken: AbortController
  ): Promise<Array<DataFlowLog>> => {
    if (!dataFlowGuid || !requestGuid) {
      GenericExceptionHandlers.ArgumentNullException('dataFlowGuid and requestGuid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/dataflows/${dataFlowGuid}/logs?request=${requestGuid}`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Read data flow logfile.
   *
   * @param {string} dataFlowGuid - The GUID of the data flow.
   * @param {string} requestGuid - The GUID of the request associated with the logfile.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<string|null|ApiErrorResponse>} A promise resolving to the log file content as a string, or null if an error occurred.
   * @throws {Error} If either `dataFlowGuid` or `requestGuid` are null or empty.
   */
  retrieveDataFlowLogFile = async (dataFlowGuid: string, requestGuid: string, cancelToken: AbortController) => {
    if (!dataFlowGuid || !requestGuid) {
      GenericExceptionHandlers.ArgumentNullException('dataFlowGuid and requestGuid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/dataflows/${dataFlowGuid}/logfile?request=${requestGuid}`;
    return await this.retrieve(url, cancelToken);
  };
  //endregion
}
