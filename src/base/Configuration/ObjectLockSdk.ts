import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EnumerationResult, ObjectLock } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class ObjectLockSdk extends ViewSdkBase {
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
   * @returns {Promise<ObjectLock>} A promise resolving to the ObjectLock object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<ObjectLock> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/objectlocks/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all object locks.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<ObjectLock>>} A promise resolving to an array of ObjectLock objects.
   * @throws {MethodError} If the object locks are null.
   */
  readAll = async (cancelToken?: AbortController): Promise<Array<ObjectLock>> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/objectlocks';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Enumerate object locks.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<ObjectLock>>} A promise resolving to the enumeration result.
   * @throws {MethodError} If the object locks are null.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<ObjectLock>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/objectlocks`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Delete an object lock by its GUID.
   *
   * @param {string} guid - The GUID of the object lock to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the deletion is successful.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/objectlocks/' + guid;
    return await this.deleteResource(url, cancelToken);
  };
}
