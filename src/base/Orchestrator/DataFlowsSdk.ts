import { DataFlow } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export class DataFlowsSdk extends ViewSdkBase {
  /**
   * Constructs a new DataFlowsSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region DataFlows
  /**
   * Create a data flow.
   *
   * @param {DataFlow} flow - The data flow object to create.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataFlow>} A promise resolving to the created DataFlow object.
   * @throws {MethodError} If the `flow` is null or invalid.
   */
  create = async (flow: DataFlow, cancelToken: AbortController): Promise<DataFlow> => {
    if (!flow) {
      GenericExceptionHandlers.ArgumentNullException('flow');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/dataflows`;
    return await this.createResource(url, flow, cancelToken);
  };
  /**
   * Check if a data flow exists.
   *
   * @param {string} guid - The GUID of the data flow to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the data flow exists, otherwise `false`.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  exists = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/dataflows/${guid}`;
    return await this.existsResource(url, cancelToken);
  };
  /**
   * Read a data flow.
   *
   * @param {string} guid - The GUID of the data flow to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataFlow>} A promise resolving to the retrieved DataFlow object.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  read = async (guid: string, cancelToken: AbortController): Promise<DataFlow> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/dataflows/${guid}`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Read data flows.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<DataFlow>>} A promise resolving to an array of DataFlow objects.
   * @throws {MethodError} If the `cancelToken` is null or empty.
   */
  readAll = async (cancelToken: AbortController): Promise<Array<DataFlow>> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/dataflows`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   * Retrieve by GUID with steps.
   * @param {string} guid - The GUID of the data flow to performance.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<DataFlow>>} A promise resolving to an array of DataFlow objects.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  readWithSteps = async (guid: string, cancelToken: AbortController): Promise<Array<DataFlow>> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/dataflows/${guid}?inclsub`;
    return await this.retrieveResource(url, cancelToken);
  };
  /**
   *Retrieve request performance data.
   * @param {string} dataFlowGuid - The GUID of the data flow to performance.
   * @param {string} requestGuid - The GUID of the request associated with the data flow.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataFlow>} A promise resolving to an array of DataFlow objects.
   * @throws {MethodError} If the `dataFlowGuid` or `requestGuid` is null or empty.
   */
  readPerformanceData = async (
    dataFlowGuid: string,
    requestGuid: string,
    cancelToken: AbortController
  ): Promise<DataFlow> => {
    if (!dataFlowGuid || !requestGuid) {
      GenericExceptionHandlers.ArgumentNullException('dataFlowGuid and requestGuid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/dataflows/${dataFlowGuid}/performance?request=${requestGuid}`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Delete a data flow.
   *
   * @param {string} guid - The GUID of the data flow to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the data flow was deleted successfully, otherwise `false`.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  delete = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/dataflows/${guid}`;
    return await this.deleteResource(url, cancelToken);
  };
}
