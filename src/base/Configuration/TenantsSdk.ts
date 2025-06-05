import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { TenantMetadata } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class TenantsSdk extends ViewSdkBase {
  /**
   * Constructs a new TenantsSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Tenants

  /**
   * Retrieve tenant metadata.
   *
   * @param {string} guid - The GUID of the tenant to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the TenantMetadata object or null if not found.
   */
  retrieveTenant = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + guid;
    // Use the `retrieve` method to get the tenant metadata
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve all tenants.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the TenantMetadata object or null if not found.
   */
  retrieveTenants = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/';
    // Use the `retrieveMany` method for fetching the list of tenants
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Delete tenant metadata.
   * @param {string} guid - The GUID of the tenant to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the TenantMetadata object or null if not found.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  deleteTenant = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + guid;
    // Use the `retrieveMany` method for fetching the list of tenants
    return await this.delete(url, cancelToken);
  };

  /**
   * Check if a tenant exists by its GUID.
   *
   * @param {string} guid - The GUID of the tenant.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the tenant exists, false otherwise.
   * @throws {ApiErrorResponse} If the GUID is null or empty.
   */
  existsTenant = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + guid;
    // Use the `exists` method to check for the tenant
    return await this.exists(url, cancelToken);
  };

  /**
   * Write tenant metadata.
   *
   * @param {TenantMetadata} tenant Information about the tenants.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the updated TenantMetadata object or null.
   * @throws {ApiErrorResponse} If the tenant object is null.
   */
  writeTenant = async (tenant: TenantMetadata, cancelToken: AbortController) => {
    if (!tenant) {
      GenericExceptionHandlers.ArgumentNullException('tenant');
    }
    const url = this.config.endpoint + '/v1.0/tenants';
    // Use the `update` method to write the tenant metadata
    return await this.update(url, tenant, cancelToken);
  };

  /**
   * Update tenant metadata.
   *
   * @param {TenantMetadata} tenant Information about the tenants.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the updated TenantMetadata object or null.
   * @throws {ApiErrorResponse} If the tenant object is null.
   */
  updateTenant = async (guid: string, tenant: TenantMetadata, cancelToken: AbortController) => {
    if (!tenant) {
      GenericExceptionHandlers.ArgumentNullException('tenant');
    }
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + guid;
    // Use the `update` method to update the tenant metadata
    return await this.update(url, tenant, cancelToken);
  };

  /**
   * Enumerate Tenants.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  enumerateTenants = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/`;
    return await this.retrieve(url, cancelToken);
  };
}
