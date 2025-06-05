import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class ObjectLocksSdk extends ViewSdkBase {
  /**
   * Constructs a new ObjectLocksSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  //region Object-Locks

  /**
   * Retrieve an object lock by its GUID.
   *
   * @param {string} guid - The GUID of the object lock to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectLock|null|ApiErrorResponse>} A promise resolving to the ObjectLock object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveObjectLock = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/objectlocks/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve all object locks.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<ObjectLock>|ApiErrorResponse>} A promise resolving to an array of ObjectLock objects.
   */
  retrieveObjectLocks = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/objectlocks';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Enumerate object locks.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|ApiErrorResponse>} A promise resolving to the enumeration result.
   */
  enumerateObjectLocks = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/objectlocks`;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Delete an object lock by its GUID.
   *
   * @param {string} guid - The GUID of the object lock to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
   * @throws {Error} If the guid is null or empty.
   */
  deleteObjectLock = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/objectlocks/' + guid;
    return await this.delete(url, cancelToken);
  };
}
