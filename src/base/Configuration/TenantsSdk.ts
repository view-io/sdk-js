import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { EnumerationResult, TenantMetadata } from '../../types';
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
   * @returns {Promise<TenantMetadata>} A promise resolving to the TenantMetadata object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken: AbortController): Promise<TenantMetadata> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + guid;
    // Use the `retrieve` method to get the tenant metadata
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all tenants.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata>} A promise resolving to the TenantMetadata object or null if not found.
   * @throws {MethodError} If the tenants are null.
   */
  readAll = async (cancelToken: AbortController): Promise<TenantMetadata> => {
    const url = this.config.endpoint + '/v1.0/tenants/';
    // Use the `retrieveMany` method for fetching the list of tenants
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Delete tenant metadata.
   * @param {string} guid - The GUID of the tenant to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the TenantMetadata object or null if not found.
   * @throws {MethodError} If the GUID is null or empty.
   */
  delete = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + guid;
    // Use the `retrieveMany` method for fetching the list of tenants
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Check if a tenant exists by its GUID.
   *
   * @param {string} guid - The GUID of the tenant.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the tenant exists, false otherwise.
   * @throws {MethodError} If the GUID is null or empty.
   */
  exists = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + guid;
    // Use the `exists` method to check for the tenant
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Write tenant metadata.
   *
   * @param {TenantMetadata} tenant Information about the tenants.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata>} A promise resolving to the updated TenantMetadata object or null.
   * @throws {MethodError} If the tenant object is null.
   */
  create = async (tenant: TenantMetadata, cancelToken: AbortController): Promise<TenantMetadata> => {
    if (!tenant) {
      GenericExceptionHandlers.ArgumentNullException('tenant');
    }
    const url = this.config.endpoint + '/v1.0/tenants';
    // Use the `update` method to write the tenant metadata
    return await this.updateResource(url, tenant, cancelToken);
  };

  /**
   * Update tenant metadata.
   *
   * @param {TenantMetadata} tenant Information about the tenants.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata>} A promise resolving to the updated TenantMetadata object or null.
   * @throws {MethodError} If the tenant object is null.
   */
  update = async (guid: string, tenant: TenantMetadata, cancelToken: AbortController): Promise<TenantMetadata> => {
    if (!tenant) {
      GenericExceptionHandlers.ArgumentNullException('tenant');
    }
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + guid;
    // Use the `update` method to update the tenant metadata
    return await this.updateResource(url, tenant, cancelToken);
  };

  /**
   * Enumerate Tenants.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<TenantMetadata>>} A promise resolving to the EnumerationResult object.
   * @throws {MethodError} If the tenants are null.
   */
  enumerate = async (cancelToken: AbortController): Promise<EnumerationResult<TenantMetadata>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
