import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { CreateTriggerRequest, Trigger } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export class TriggerSdk extends ViewSdkBase {
  /**
   * Constructs a new TriggerSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Triggers
  /**
   * Create a trigger.
   *
   * @param {CreateTriggerRequest} trigger - The trigger object to create.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger>} A promise resolving to the created Trigger object.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  createTrigger = async (trigger: CreateTriggerRequest, cancelToken: AbortController): Promise<Trigger> => {
    if (!trigger) {
      GenericExceptionHandlers.ArgumentNullException('trigger');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/triggers`;
    return await this.create(url, trigger, cancelToken);
  };

  /**
   * Check if a trigger exists.
   *
   * @param {string} guid - The GUID of the trigger.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the trigger exists, `false` otherwise.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  existsTrigger = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/triggers/${guid}`;
    return await this.exists(url, cancelToken);
  };
  /**
   * Read a trigger.
   *
   * @param {string} guid - The GUID of the trigger.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger>} A promise resolving to the retrieved Trigger object.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  retrieveTrigger = async (guid: string, cancelToken: AbortController, headers: any): Promise<Trigger> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/triggers/${guid}`;
    return await this.retrieve(url, cancelToken, headers);
  };
  /**
   * Read triggers.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Trigger>>} A promise resolving to an array of Trigger objects.
   */
  retrieveTriggers = async (cancelToken: AbortController, headers: any): Promise<Array<Trigger>> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/triggers`;
    return await this.retrieve(url, cancelToken, headers);
  };
  /**
   * Update a trigger.
   *
   * @param {Trigger} trigger - The trigger object to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger>} A promise resolving to the updated Trigger object.
   * @throws {MethodError} If the trigger is null.
   */
  updateTrigger = async (trigger: Trigger, cancelToken: AbortController, headers: any): Promise<Trigger> => {
    if (!trigger) {
      GenericExceptionHandlers.ArgumentNullException('trigger');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/triggers/${trigger.GUID}`;
    return await this.update(url, trigger, cancelToken, headers);
  };
  /**
   * Delete a trigger.
   *
   * @param {string} guid - The GUID of the trigger to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves when the trigger is deleted.
   * @throws {MethodError} If the `guid` is null or empty.
   */
  deleteTrigger = async (guid: string, cancelToken: AbortController, headers: any, obj?: any): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/triggers/${guid}`;
    return await this.delete(url, cancelToken, headers, obj);
  };
  //endregion
}
