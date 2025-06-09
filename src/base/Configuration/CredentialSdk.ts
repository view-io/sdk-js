import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { Credential, CredentialCreateRequest, EnumerationResult } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class CredentialSdk extends ViewSdkBase {
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
   * @returns {Promise<Credential>} A promise resolving to the Credential object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<Credential> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all credentials.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Credential>>} A promise resolving to the list of Credentials or null if not found.
   */
  readAll = async (cancelToken?: AbortController): Promise<Array<Credential>> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials';

    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Create a credential.
   *
   * @param {CredentialCreateRequest} cred Information about the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Credential>} A promise resolving to the created Credential object or null.
   * @throws {MethodError} If the credential is null.
   */
  create = async (cred: CredentialCreateRequest, cancelToken?: AbortController): Promise<Credential> => {
    if (!cred) {
      GenericExceptionHandlers.ArgumentNullException('cred');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials';
    return await this.createResource(url, cred, cancelToken);
  };

  /**
   * Update a credential.
   *
   * @param {Credential} cred Information about the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Credential>} A promise resolving to the updated Credential object or null.
   * @throws {MethodError} If the credential is null.
   */
  update = async (cred: Credential, cancelToken?: AbortController): Promise<Credential> => {
    if (!cred) {
      GenericExceptionHandlers.ArgumentNullException('cred');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials/' + cred.GUID;
    return await this.updateResource(url, cred, cancelToken);
  };

  /**
   * Check if a credential exists by its GUID.
   *
   * @param {string} guid - The GUID of the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the credential exists, false otherwise.
   * @throws {MethodError} If the GUID is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Delete a credential by its GUID.
   *
   * @param {string} guid - The GUID of the credential to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the credential is deleted, false otherwise.
   * @throws {MethodError} If the GUID is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/credentials/' + guid;
    return await this.deleteResource(url, undefined, cancelToken);
  };

  /**
   * Enumerate Credentials.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<Credential>>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<Credential>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/credentials/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
