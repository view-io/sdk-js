import { EnumerationResult, UserMaster, UserMasterCreateRequest } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class UserSdk extends ViewSdkBase {
  /**
   * Constructor for UserSdk.
   * @param {SdkConfiguration} config - The configuration for the SDK.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Users

  /**
   * Create a user.
   *
   * @param {UserMasterCreateRequest} user Information about the user.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<UserMaster>} A promise resolving to the created UserMaster object or null.
   * @throws {MethodError} If the user object is null.
   */
  create = async (user: UserMasterCreateRequest, cancelToken?: AbortController): Promise<UserMaster> => {
    if (!user) {
      GenericExceptionHandlers.ArgumentNullException('user');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users';
    // Use the `create` method for posting the user
    return await this.createResource(url, user, cancelToken);
  };

  /**
   * Check if a user exists by its GUID.
   *
   * @param {string} guid - The GUID of the user.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the user exists, false otherwise.
   * @throws {MethodError} If the GUID is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users/' + guid;
    // Use the `exists` method to check for the user
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve a user by its GUID.
   *
   * @param {string} guid - The GUID of the user to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<UserMaster>} A promise resolving to the UserMaster object or null if not found.
   * @throws {MethodError} If the GUID is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<UserMaster> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users/' + guid;
    // Use the `retrieve` method to get the user
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all users.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<UserMaster>|null|ApiErrorResponse>} A promise resolving to the list of Users or null if not found.
   * @throws {MethodError} If the users are null.
   */
  readAll = async (cancelToken?: AbortController): Promise<UserMaster> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users';
    // Use the `retrieveMany` method for fetching the list of users
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update a user.
   * @param {string} guid - The GUID of the user to update.
   * @param {UserMaster} user Information about the user.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the updated UserMaster object or null.
   * @throws {MethodError} If the user object is null.
   */
  update = async (user: UserMaster, cancelToken?: AbortController): Promise<UserMaster> => {
    if (!user) {
      GenericExceptionHandlers.ArgumentNullException('user');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users/' + user.GUID;
    // Use the `update` method to update the user
    return await this.updateResource(url, user, cancelToken);
  };

  /**
   * Delete a user by its GUID.
   *
   * @param {string} guid - The GUID of the user to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving when the user is deleted.
   * @throws {MethodError} If the GUID is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users/' + guid;
    // Use the `delete` method to remove the user
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Enumerate Users.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<UserMaster>>} A promise resolving to the created EnumerationResult object.
   * @throws {MethodError} If the users are null.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<UserMaster>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/users`;
    return await this.retrieveResource(url, cancelToken);
  };
}
