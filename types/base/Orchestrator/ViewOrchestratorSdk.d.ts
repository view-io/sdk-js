/**
 * Orchestrator service.
 * @module base/ViewOrchestratorSdk
 * @version 0.1.0
 */
export default class ViewOrchestratorSdk extends ViewSdkBase {
    Header: string;
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
    createTrigger: (trigger: {
        id: string;
        name: string;
        type: string;
        configuration: string;
    }, cancelToken?: object) => Promise<Trigger | null | ApiErrorResponse>;
    /**
     * Check if a trigger exists.
     *
     * @param {string} guid - The GUID of the trigger.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the trigger exists, `false` otherwise.
     * @throws {Error} If the `guid` is null or empty.
     */
    existsTrigger: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Read a trigger.
     *
     * @param {string} guid - The GUID of the trigger.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the retrieved Trigger object or null if not found.
     * @throws {Error} If the `guid` is null or empty.
     */
    retrieveTrigger: (guid: string, cancelToken?: object) => Promise<Trigger | null | ApiErrorResponse>;
    /**
     * Read triggers.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<Trigger>|ApiErrorResponse>} A promise resolving to an array of Trigger objects or an error response.
     */
    retrieveTriggers: (cancelToken?: object) => Promise<Array<Trigger> | ApiErrorResponse>;
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
    updateTrigger: (trigger: {
        GUID: string;
        TenantGUID: string;
        Name: string;
        HttpUrlPrefix: string;
        Notes: string;
        TriggerType: string;
    }, cancelToken?: object) => Promise<Trigger | null | ApiErrorResponse>;
    /**
     * Delete a trigger.
     *
     * @param {string} guid - The GUID of the trigger to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise that resolves when the trigger is deleted.
     * @throws {Error} If the `guid` is null or empty.
     */
    deleteTrigger: (guid: string, cancelToken?: object) => Promise<void>;
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
    createStep: (step: {
        GUID: string;
        TenantGUID: string;
        Name: string;
        Description: string;
    }, cancelToken?: object) => Promise<StepMetadata | null | ApiErrorResponse>;
    /**
     * Check if a step exists.
     *
     * @param {string} guid - The GUID of the step.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to `true` if the step exists, or an error response.
     * @throws {Error} If the `guid` is null or empty.
     */
    existsStep: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Read a step.
     *
     * @param {string} guid - The GUID of the step.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<StepMetadata|null|ApiErrorResponse>} A promise resolving to the retrieved StepMetadata object, or an error response if not found.
     * @throws {Error} If the `guid` is null or empty.
     */
    retrieveStep: (guid: string, cancelToken?: object) => Promise<StepMetadata | null | ApiErrorResponse>;
    /**
     * Read steps.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<StepMetadata>|ApiErrorResponse>} A promise resolving to an array of StepMetadata objects, or an error response.
     */
    retrieveSteps: (cancelToken?: object) => Promise<Array<StepMetadata> | ApiErrorResponse>;
    /**
     * Retrieve by GUID with subordinates and packages .
     * @param {string} guid - The GUID of the step.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<StepMetadata>|ApiErrorResponse} A promise resolving to an array of StepMetadata objects, or an error response.
     */
    retrieveStepsWithSubordinatesAndPackages: (guid: string, cancelToken?: object) => Promise<StepMetadata> | ApiErrorResponse;
    /**
     * Delete a step.
     *
     * @param {string} guid - The GUID of the step to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise that resolves when the step is deleted.
     * @throws {Error} If the `guid` is null or empty.
     */
    deleteStep: (guid: string, cancelToken?: object) => Promise<void>;
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
    createDataFlow: (flow: {
        GUID: string;
        TenantGUID: string;
        Name: string;
        Description: string;
    }, cancelToken?: object) => Promise<DataFlow | null | ApiErrorResponse>;
    /**
     * Check if a data flow exists.
     *
     * @param {string} guid - The GUID of the data flow to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the data flow exists, otherwise `false`.
     * @throws {Error} If the `guid` is null or empty.
     */
    existsDataFlow: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Read a data flow.
     *
     * @param {string} guid - The GUID of the data flow to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataFlow|null|ApiErrorResponse>} A promise resolving to the retrieved DataFlow object, or an error response.
     * @throws {Error} If the `guid` is null or empty.
     */
    retrieveDataFlow: (guid: string, cancelToken?: object) => Promise<DataFlow | null | ApiErrorResponse>;
    /**
     * Read data flows.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<DataFlow>|ApiErrorResponse>} A promise resolving to an array of DataFlow objects, or an error response.
     */
    retrieveDataFlows: (cancelToken?: object) => Promise<Array<DataFlow> | ApiErrorResponse>;
    /**
     * Retrieve by GUID with steps.
     * @param {string} guid - The GUID of the data flow to performance.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<DataFlow>|ApiErrorResponse>} A promise resolving to an array of DataFlow objects, or an error response.
     */
    retrieveDataFlowWithSteps: (guid: string, cancelToken?: object) => Promise<Array<DataFlow> | ApiErrorResponse>;
    /**
     *Retrieve request performance data.
     * @param {string} dataFlowGuid - The GUID of the data flow to performance.
     * @param {string} requestGuid - The GUID of the request associated with the data flow.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataFlow>|ApiErrorResponse} A promise resolving to an array of DataFlow objects, or an error response.
     */
    retrieveDataFlowPerformanceData: (dataFlowGuid: string, requestGuid: string, cancelToken?: object) => Promise<DataFlow> | ApiErrorResponse;
    /**
     * Delete a data flow.
     *
     * @param {string} guid - The GUID of the data flow to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving to nothing if successful, or an error response if failure.
     * @throws {Error} If the `guid` is null or empty.
     */
    deleteDataFlow: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Read data flow logs.
     *
     * @param {string} dataFlowGuid - The GUID of the data flow.
     * @param {string} requestGuid - The GUID of the request associated with the data flow logs.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<DataFlowLog>|ApiErrorResponse>} A promise resolving to an array of DataFlowLog objects, or an error response.
     * @throws {Error} If either `dataFlowGuid` or `requestGuid` are null or empty.
     */
    retrieveDataFlowLogs: (dataFlowGuid: string, requestGuid: string, cancelToken?: object) => Promise<Array<DataFlowLog> | ApiErrorResponse>;
    /**
     * Read data flow logfile.
     *
     * @param {string} dataFlowGuid - The GUID of the data flow.
     * @param {string} requestGuid - The GUID of the request associated with the logfile.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<string|null|ApiErrorResponse>} A promise resolving to the log file content as a string, or null if an error occurred.
     * @throws {Error} If either `dataFlowGuid` or `requestGuid` are null or empty.
     */
    retrieveDataFlowLogFile: (dataFlowGuid: string, requestGuid: string, cancelToken?: object) => Promise<string | null | ApiErrorResponse>;
}
import ViewSdkBase from '../ViewSDKBase';
import Trigger from '../../models/Trigger';
import StepMetadata from '../../models/StepMetadata';
import DataFlow from '../../models/DataFlow';
import DataFlowLog from '../../models/DataFlowLog';
