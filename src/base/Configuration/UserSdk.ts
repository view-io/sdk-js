import { UserMaster } from '../../types';
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
   * @param {UserMaster} user Information about the user.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the created UserMaster object or null.
   * @throws {ApiErrorResponse} If the user object is null.
   */
  createUser = async (user: UserMaster, cancelToken: AbortController) => {
    if (!user) {
      GenericExceptionHandlers.ArgumentNullException('user');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users';
    // Use the `create` method for posting the user
    return await this.create(url, user, cancelToken);
  };

  /**
   * Check if a user exists by its GUID.
   *
   * @param {string} guid - The GUID of the user.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the user exists, false otherwise.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  existsUser = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users/' + guid;
    // Use the `exists` method to check for the user
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a user by its GUID.
   *
   * @param {string} guid - The GUID of the user to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the UserMaster object or null if not found.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  retrieveUser = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users/' + guid;
    // Use the `retrieve` method to get the user
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve all users.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<UserMaster>|null|ApiErrorResponse>} A promise resolving to the list of Users or null if not found.
   */
  retrieveUsers = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users';
    // Use the `retrieveMany` method for fetching the list of users
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update a user.
   * @param {string} guid - The GUID of the user to update.
   * @param {UserMaster} user Information about the user.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the updated UserMaster object or null.
   * @throws {ApiErrorResponse} If the user object is null.
   */
  updateUser = async (user: UserMaster, cancelToken: AbortController) => {
    if (!user) {
      GenericExceptionHandlers.ArgumentNullException('user');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users/' + user.GUID;
    // Use the `update` method to update the user
    return await this.update(url, user, cancelToken);
  };

  /**
   * Delete a user by its GUID.
   *
   * @param {string} guid - The GUID of the user to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  deleteUser = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/users/' + guid;
    // Use the `delete` method to remove the user
    return await this.delete(url, cancelToken);
  };

  /**
   * Enumerate Users.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateUsers = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/users`;
    return await this.retrieve(url, cancelToken);
  };
}
