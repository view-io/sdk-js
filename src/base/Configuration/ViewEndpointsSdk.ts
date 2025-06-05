import { ViewEndpoint } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class ViewEndpointsSdk extends ViewSdkBase {
  /**
   * Constructs a new ViewEndpointsSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  //region View-Endpoints

  /**
   * Create a View endpoint.
   * @param {ViewEndpoint} endpoint - The view endpoint to create.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint>} - View endpoint.
   */
  createViewEndpoint = async (endpoint: ViewEndpoint, cancelToken: AbortController) => {
    if (!endpoint) {
      GenericExceptionHandlers.ArgumentNullException('endpoint');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints';
    return await this.create(url, endpoint, cancelToken);
  };

  /**
   * Check if a View endpoint exists.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} - True if exists.
   */
  existsViewEndpoint = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Read a View endpoint.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint>} - View endpoint.
   */
  retrieveViewEndpoint = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Read View endpoints.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint[]>} - View endpoints.
   */
  retrieveViewEndpoints = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update a View endpoint.
   * @param {ViewEndpoint} endpoint - The view endpoint to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint>} - View endpoint.
   */
  updateViewEndpoint = async (endpoint: ViewEndpoint, cancelToken: AbortController) => {
    if (!endpoint) {
      GenericExceptionHandlers.ArgumentNullException('endpoint');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints/' + endpoint.GUID;
    return await this.update(url, endpoint, cancelToken);
  };

  /**
   * Delete a View endpoint.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>}
   */
  deleteViewEndpoint = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints/' + guid;
    return await this.delete(url, cancelToken);
  };
}
