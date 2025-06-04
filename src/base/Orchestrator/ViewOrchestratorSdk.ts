import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';
import ViewSdkBase from '../ViewSDKBase';
import { DataFlow, DataFlowLog, StepMetadata, Trigger } from '../../types';

/**
 * Orchestrator service.
 * @module base/ViewOrchestratorSdk
 * @version 0.1.0
 */
export default class ViewOrchestratorSdk extends ViewSdkBase {
  protected Header: string;
  /**
   * Constructs a new OrchestratorApi.
   * @alias module:base/ViewOrchestratorSdk
   * @class
   * @param {string} tenantGuid - Tenant GUID.
   * @param {string} accessKey - Access key.
   * @param {string} endpoint - Endpoint URL .
   */
  constructor(tenantGuid: string, accessKey: string, endpoint: string) {
    super(tenantGuid, accessKey, endpoint);
    this.Header = '[ViewOrchestratorSdk] ';
  }

  // region Triggers
  /**
   * Create a trigger.
   *
   * @param {Object} trigger - The trigger object to create.
   * @param {string} trigger.id - The ID of the trigger.
   * @param {string} trigger.name - The name of the trigger.
   * @param {string} trigger.type - The type of the trigger.
   * @param {string} trigger.configuration - Configuration details of the trigger.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  createTrigger = async (trigger: Trigger, cancelToken: AbortController) => {
    if (!trigger) {
      GenExceptionHandlersInstance.ArgumentNullException('trigger');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/triggers`;
    return await this.create(url, trigger, cancelToken);
  };

  /**
   * Check if a trigger exists.
   *
   * @param {string} guid - The GUID of the trigger.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the trigger exists, `false` otherwise.
   * @throws {Error} If the `guid` is null or empty.
   */
  existsTrigger = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/triggers/${guid}`;
    return await this.exists(url, cancelToken);
  };
  /**
   * Read a trigger.
   *
   * @param {string} guid - The GUID of the trigger.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the retrieved Trigger object or null if not found.
   * @throws {Error} If the `guid` is null or empty.
   */
  retrieveTrigger = async (guid: string, cancelToken: AbortController, headers: any) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/triggers/${guid}`;
    return await this.retrieve(url, cancelToken, headers);
  };
  /**
   * Read triggers.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Trigger>|ApiErrorResponse>} A promise resolving to an array of Trigger objects or an error response.
   */
  retrieveTriggers = async (cancelToken: AbortController, headers: any) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/triggers`;
    return await this.retrieve(url, cancelToken, headers);
  };
  /**
   * Update a trigger.
   *
   * @param {Object} trigger - The trigger object to update.
   * @param {string} trigger.GUID - The GUID of the trigger.
   * @param {string} trigger.TenantGUID - The Tenant GUID.
   * @param {string} trigger.Name - The name of the trigger.
   * @param {string} trigger.HttpUrlPrefix - The HTTP relative URL prefix.
   * @param {string} trigger.Notes - Notes associated with the trigger.
   * @param {string} trigger.TriggerType - The type of the trigger.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the updated Trigger object or an error response.
   * @throws {Error} If the trigger is null.
   */
  updateTrigger = async (trigger: Trigger, cancelToken: AbortController, headers: any) => {
    if (!trigger) {
      GenExceptionHandlersInstance.ArgumentNullException('trigger');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/triggers/${trigger.GUID}`;
    return await this.update(url, trigger, cancelToken, headers);
  };
  /**
   * Delete a trigger.
   *
   * @param {string} guid - The GUID of the trigger to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the trigger is deleted.
   * @throws {Error} If the `guid` is null or empty.
   */
  deleteTrigger = async (guid: string, cancelToken: AbortController, headers: any, obj?: any) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/triggers/${guid}`;
    await this.delete(url, cancelToken, headers, obj);
  };
  //endregion

  //region Steps

  /**
   * Create a step.
   *
   * @param {Object} step - The step object to create.
   * @param {string} step.GUID - The GUID of the step.
   * @param {string} step.TenantGUID - The Tenant GUID.
   * @param {string} step.Name - The name of the step.
   * @param {string} step.Description - The description of the step.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StepMetadata|null|ApiErrorResponse>} A promise resolving to the created StepMetadata object or an error response.
   * @throws {Error} If the `step` is null or invalid.
   */
  createStep = async (step: StepMetadata, cancelToken: AbortController) => {
    if (!step) {
      GenExceptionHandlersInstance.ArgumentNullException('step');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/steps`;
    return await this.create(url, step, cancelToken);
  };

  /**
   * Check if a step exists.
   *
   * @param {string} guid - The GUID of the step.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to `true` if the step exists, or an error response.
   * @throws {Error} If the `guid` is null or empty.
   */
  existsStep = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/steps/${guid}`;
    return await this.exists(url, cancelToken);
  };

  /**
   * Read a step.
   *
   * @param {string} guid - The GUID of the step.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StepMetadata|null|ApiErrorResponse>} A promise resolving to the retrieved StepMetadata object, or an error response if not found.
   * @throws {Error} If the `guid` is null or empty.
   */
  retrieveStep = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/steps/${guid}`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Read steps.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<StepMetadata>|ApiErrorResponse>} A promise resolving to an array of StepMetadata objects, or an error response.
   */
  retrieveSteps = async (cancelToken: AbortController) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/steps`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Retrieve by GUID with subordinates and packages .
   * @param {string} guid - The GUID of the step.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StepMetadata>|ApiErrorResponse} A promise resolving to an array of StepMetadata objects, or an error response.
   */
  retrieveStepsWithSubordinatesAndPackages = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/steps/${guid}?inclsub&incldata`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Delete a step.
   *
   * @param {string} guid - The GUID of the step to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<string>} A promise that resolves when the step is deleted.
   * @throws {Error} If the `guid` is null or empty.
   */
  deleteStep = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/steps/${guid}`;
    await this.delete(url, cancelToken);
  };
  //endregion

  //region DataFlows
  /**
   * Create a data flow.
   *
   * @param {Object} flow - The data flow object to create.
   * @param {string} flow.GUID - The GUID of the data flow.
   * @param {string} flow.TenantGUID - The Tenant GUID.
   * @param {string} flow.Name - The name of the data flow.
   * @param {string} flow.Description - The description of the data flow.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataFlow|null|ApiErrorResponse>} A promise resolving to the created DataFlow object, or an error response.
   * @throws {Error} If the `flow` is null or invalid.
   */
  createDataFlow = async (flow: DataFlow, cancelToken: AbortController) => {
    if (!flow) {
      GenExceptionHandlersInstance.ArgumentNullException('flow');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/dataflows`;
    return await this.create(url, flow, cancelToken);
  };
  /**
   * Check if a data flow exists.
   *
   * @param {string} guid - The GUID of the data flow to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the data flow exists, otherwise `false`.
   * @throws {Error} If the `guid` is null or empty.
   */
  existsDataFlow = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      throw new Error('GUID is required');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/dataflows/${guid}`;
    return await this.exists(url, cancelToken);
  };
  /**
   * Read a data flow.
   *
   * @param {string} guid - The GUID of the data flow to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataFlow|null|ApiErrorResponse>} A promise resolving to the retrieved DataFlow object, or an error response.
   * @throws {Error} If the `guid` is null or empty.
   */
  retrieveDataFlow = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      throw new Error('GUID is required');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/dataflows/${guid}`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Read data flows.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<DataFlow>|ApiErrorResponse>} A promise resolving to an array of DataFlow objects, or an error response.
   */
  retrieveDataFlows = async (cancelToken: AbortController) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/dataflows`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Retrieve by GUID with steps.
   * @param {string} guid - The GUID of the data flow to performance.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<DataFlow>|ApiErrorResponse>} A promise resolving to an array of DataFlow objects, or an error response.
   */
  retrieveDataFlowWithSteps = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      throw new Error('GUID is required');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/dataflows/${guid}?inclsub`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   *Retrieve request performance data.
   * @param {string} dataFlowGuid - The GUID of the data flow to performance.
   * @param {string} requestGuid - The GUID of the request associated with the data flow.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataFlow>|ApiErrorResponse} A promise resolving to an array of DataFlow objects, or an error response.
   */
  retrieveDataFlowPerformanceData = async (dataFlowGuid: string, requestGuid: string, cancelToken: AbortController) => {
    if (!dataFlowGuid || !requestGuid) {
      throw new Error('dataFlowGuid and requestGuid are required');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/dataflows/${dataFlowGuid}/performance?request=${requestGuid}`;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Delete a data flow.
   *
   * @param {string} guid - The GUID of the data flow to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to nothing if successful, or an error response if failure.
   * @throws {Error} If the `guid` is null or empty.
   */
  deleteDataFlow = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      throw new Error('GUID must be provided.');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/dataflows/${guid}`;
    return await this.delete(url, cancelToken);
  };
  //endregion

  //region DataFlow-Logs

  /**
   * Read data flow logs.
   *
   * @param {string} dataFlowGuid - The GUID of the data flow.
   * @param {string} requestGuid - The GUID of the request associated with the data flow logs.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<DataFlowLog>|ApiErrorResponse>} A promise resolving to an array of DataFlowLog objects, or an error response.
   * @throws {Error} If either `dataFlowGuid` or `requestGuid` are null or empty.
   */
  retrieveDataFlowLogs = async (dataFlowGuid: string, requestGuid: string, cancelToken: AbortController) => {
    if (!dataFlowGuid || !requestGuid) {
      throw new Error('Both dataFlowGuid and requestGuid must be provided.');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/dataflows/${dataFlowGuid}/logs?request=${requestGuid}`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Read data flow logfile.
   *
   * @param {string} dataFlowGuid - The GUID of the data flow.
   * @param {string} requestGuid - The GUID of the request associated with the logfile.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<string|null|ApiErrorResponse>} A promise resolving to the log file content as a string, or null if an error occurred.
   * @throws {Error} If either `dataFlowGuid` or `requestGuid` are null or empty.
   */
  retrieveDataFlowLogFile = async (dataFlowGuid: string, requestGuid: string, cancelToken: AbortController) => {
    if (!dataFlowGuid || !requestGuid) {
      throw new Error('Both dataFlowGuid and requestGuid must be provided.');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/dataflows/${dataFlowGuid}/logfile?request=${requestGuid}`;
    return await this.retrieve(url, cancelToken);
  };
}
