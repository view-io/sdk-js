import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { StepMetadata } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export class StepsSdk extends ViewSdkBase {
  /**
   * Constructs a new StepsSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  //region Steps

  /**
   * Create a step.
   *
   * @param {StepMetadata} step - The step object to create.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StepMetadata>} A promise resolving to the created StepMetadata object.
   * @throws {MethodError} If the `step` is null or invalid.
   */
  createStep = async (step: StepMetadata, cancelToken: AbortController): Promise<StepMetadata> => {
    if (!step) {
      GenericExceptionHandlers.ArgumentNullException('step');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/steps`;
    return await this.create(url, step, cancelToken);
  };

  /**
   * Check if a step exists.
   *
   * @param {string} guid - The GUID of the step.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the step exists, otherwise `false`.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  existsStep = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/steps/${guid}`;
    return await this.exists(url, cancelToken);
  };

  /**
   * Read a step.
   *
   * @param {string} guid - The GUID of the step.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StepMetadata>} A promise resolving to the retrieved StepMetadata object.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  retrieveStep = async (guid: string, cancelToken: AbortController): Promise<StepMetadata> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/steps/${guid}`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Read steps.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<StepMetadata>>} A promise resolving to an array of StepMetadata objects.
   * @throws {MethodError} If the `cancelToken` is null or empty.
   */
  retrieveSteps = async (cancelToken: AbortController): Promise<Array<StepMetadata>> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/steps`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Retrieve by GUID with subordinates and packages .
   * @param {string} guid - The GUID of the step.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StepMetadata>} A promise resolving to an array of StepMetadata objects.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  retrieveStepsWithSubordinatesAndPackages = async (
    guid: string,
    cancelToken: AbortController
  ): Promise<StepMetadata> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/steps/${guid}?inclsub&incldata`;
    return await this.retrieve(url, cancelToken);
  };
  /**
   * Delete a step.
   *
   * @param {string} guid - The GUID of the step to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves when the step is deleted.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  deleteStep = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/steps/${guid}`;
    return await this.delete(url, cancelToken);
  };
  //endregion
}
