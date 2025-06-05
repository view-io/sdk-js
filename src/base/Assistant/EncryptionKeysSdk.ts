import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EncryptionKey } from '../../types';
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
   * @param {EncryptionKey} key Information about the encryption key.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EncryptionKey|null|ApiErrorResponse>} A promise resolving to the created EncryptionKey object.
   * @throws {ApiErrorResponse} If the key is null.
   */
  createEncryptionKey = async (key: EncryptionKey, cancelToken: AbortController) => {
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys';
    return await this.create(url, key, cancelToken);
  };

  /**
   * Check if an encryption key exists.
   *
   * @param {string} guid - The GUID of the encryption key to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the encryption key exists, false otherwise.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  existsEncryptionKey = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve an encryption key by its GUID.
   *
   * @param {string} guid - The GUID of the encryption key to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EncryptionKey|null|ApiErrorResponse>} A promise resolving to the EncryptionKey object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveEncryptionKey = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve all encryption keys.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<EncryptionKey>|ApiErrorResponse>} A promise resolving to an array of EncryptionKey objects.
   */
  retrieveEncryptionKeys = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update an encryption key.
   *
   * @param {EncryptionKey} key Information about the encryption key.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EncryptionKey|null|ApiErrorResponse>} A promise resolving to the updated EncryptionKey object.
   * @throws {ApiErrorResponse} If the key is null.
   */
  updateEncryptionKey = async (key: EncryptionKey, cancelToken: AbortController) => {
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys/' + key.GUID;
    return await this.update(url, key, cancelToken);
  };

  /**
   * Delete an encryption key by its GUID.
   *
   * @param {string} guid - The GUID of the encryption key to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the deletion is complete.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  deleteEncryptionKey = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/encryptionkeys/' + guid;
    return await this.delete(url, cancelToken);
  };

  /**
   * Enumerate Encryption-Keys.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  enumerateEncryptionKeys = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/encryptionkeys/`;
    return await this.retrieve(url, cancelToken);
  };
}
