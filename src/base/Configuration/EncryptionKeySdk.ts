import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EncryptionKey, EncryptionKeyCreateRequest, EnumerationResult } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class EncryptionKeysSdk extends ViewSdkBase {
  /**
   * Constructor for EncryptionKeysSdk.
   * @param {SdkConfiguration} config - The configuration for the SDK.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  // region Encription-Key

  /**
   * Create an encryption key.
   *
   * @param {EncryptionKeyCreateRequest} key Information about the encryption key.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EncryptionKey>} A promise resolving to the created EncryptionKey object.
   * @throws {MethodError} If the key is null.
   */
  create = async (key: EncryptionKeyCreateRequest, cancelToken?: AbortController): Promise<EncryptionKey> => {
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys';
    return await this.createResource(url, key, cancelToken);
  };

  /**
   * Check if an encryption key exists.
   *
   * @param {string} guid - The GUID of the encryption key to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the encryption key exists, false otherwise.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve an encryption key by its GUID.
   *
   * @param {string} guid - The GUID of the encryption key to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EncryptionKey>} A promise resolving to the EncryptionKey object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<EncryptionKey> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all encryption keys.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<EncryptionKey>>} A promise resolving to an array of EncryptionKey objects.
   * @throws {MethodError} If the cancelToken is null.
   */
  readAll = async (cancelToken?: AbortController): Promise<Array<EncryptionKey>> => {
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update an encryption key.
   *
   * @param {EncryptionKey} key Information about the encryption key.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EncryptionKey>} A promise resolving to the updated EncryptionKey object.
   * @throws {MethodError} If the key is null.
   */
  update = async (key: EncryptionKey, cancelToken?: AbortController): Promise<EncryptionKey> => {
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys/' + key.GUID;
    return await this.updateResource(url, key, cancelToken);
  };

  /**
   * Delete an encryption key by its GUID.
   *
   * @param {string} guid - The GUID of the encryption key to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves when the deletion is complete.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Enumerate Encryption-Keys.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<EncryptionKey>>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<EncryptionKey>> => {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/encryptionkeys/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
