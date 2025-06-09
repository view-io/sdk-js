import { ViewEndpoint } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class EndpointSdk extends ViewSdkBase {
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
   * @throws {MethodError} If the endpoint is null.
   */
  create = async (endpoint: ViewEndpoint, cancelToken?: AbortController): Promise<ViewEndpoint> => {
    if (!endpoint) {
      GenericExceptionHandlers.ArgumentNullException('endpoint');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints';
    return await this.createResource(url, endpoint, cancelToken);
  };

  /**
   * Check if a View endpoint exists.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} - True if exists.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Read a View endpoint.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint>} - View endpoint.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<ViewEndpoint> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Read View endpoints.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint[]>} - View endpoints.
   * @throws {MethodError} If the view endpoints are null.
   */
  readAll = async (cancelToken?: AbortController): Promise<Array<ViewEndpoint>> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update a View endpoint.
   * @param {ViewEndpoint} endpoint - The view endpoint to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint>} - View endpoint.
   * @throws {MethodError} If the endpoint is null.
   */
  update = async (endpoint: ViewEndpoint, cancelToken?: AbortController): Promise<ViewEndpoint> => {
    if (!endpoint) {
      GenericExceptionHandlers.ArgumentNullException('endpoint');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints/' + endpoint.GUID;
    return await this.updateResource(url, endpoint, cancelToken);
  };

  /**
   * Delete a View endpoint.
   * @param {string} guid - GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the deletion is successful.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/viewendpoints/' + guid;
    return await this.deleteResource(url, cancelToken);
  };
}
