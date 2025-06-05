import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { Credential } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class CredentialsSdk extends ViewSdkBase {
  /**
   * Constructor for CredentialsSdk.
   * @param {SdkConfiguration} config - The configuration for the SDK.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  //region Credentials

  /**
   * Retrieve a credential by its GUID.
   *
   * @param {string} guid - The GUID of the credential to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Credential|null|ApiErrorResponse>} A promise resolving to the Credential object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveCredential = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve all credentials.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Credential>|null|ApiErrorResponse>} A promise resolving to the list of Credentials or null if not found.
   */
  retrieveCredentials = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials';

    // Use the `retrieveMany` method for fetching the list of credentials
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Create a credential.
   *
   * @param {Credential} cred Information about the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Credential|null|ApiErrorResponse>} A promise resolving to the created Credential object or null.
   * @throws {ApiErrorResponse} If the credential is null.
   */
  createCredential = async (cred: Credential, cancelToken: AbortController) => {
    if (!cred) {
      GenericExceptionHandlers.ArgumentNullException('cred');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials';
    // Use the `create` method for posting the credential
    return await this.create(url, cred, cancelToken);
  };

  /**
   * Update a credential.
   *
   * @param {Credential} cred Information about the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Credential|null|ApiErrorResponse>} A promise resolving to the updated Credential object or null.
   * @throws {ApiErrorResponse} If the credential is null.
   */
  updateCredential = async (cred: Credential, cancelToken: AbortController) => {
    if (!cred) {
      GenericExceptionHandlers.ArgumentNullException('cred');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials/' + cred.GUID;
    // Use the `update` method to update the credential
    return await this.update(url, cred, cancelToken);
  };

  /**
   * Check if a credential exists by its GUID.
   *
   * @param {string} guid - The GUID of the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the credential exists, false otherwise.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  existsCredential = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials/' + guid;
    // Use the `exists` method to check for the credential
    return await this.exists(url, cancelToken);
  };

  /**
   * Delete a credential by its GUID.
   *
   * @param {string} guid - The GUID of the credential to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the credential is deleted.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  deleteCredential = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials/' + guid;
    // Use the `delete` method to remove the credential
    return await this.delete(url, cancelToken);
  };

  /**
   * Enumerate Credentials.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  enumerateCredentials = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/credentials/`;
    return await this.retrieve(url, cancelToken);
  };
}
