import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EnumerationResult, GraphRepository } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class GraphRepositoriesSdk extends ViewSdkBase {
  /**
   * Constructor for GraphRepositoriesSdk.
   * @param {SdkConfiguration} config - The configuration for the SDK.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  // region Graph-Repository

  /**
   * Create a graph repository.
   *
   * @param {GraphRepository} graph - Information about the graph repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphRepository>} A promise resolving to the created GraphRepository object.
   * @throws {MethodError} If the repo is null.
   */
  create = async (graph: GraphRepository, cancelToken: AbortController): Promise<GraphRepository> => {
    if (!graph) {
      GenericExceptionHandlers.ArgumentNullException('graph');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories';
    return await this.createResource(url, graph, cancelToken);
  };

  /**
   * Check if a graph repository exists.
   *
   * @param {string} guid - The GUID of the graph repository to check.
   * @param {AbArtControllrrontroller} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the graph repository exists, false otherwise.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve a graph repository.
   *
   * @param {string} guid - The GUID of the graph repository to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphRepository>} A promise resolving to the GraphRepository object.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken: AbortController): Promise<GraphRepository> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all graph repositories.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<GraphRepository>>} A promise resolving to a list of GraphRepository objects.
   * @throws {MethodError} If the graph repositories are null.
   */
  readAll = async (cancelToken: AbortController): Promise<Array<GraphRepository>> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update a graph repository.
   *
   * @param {GraphRepository} graph - Information about the graph repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphRepository>} A promise resolving to the updated GraphRepository object.
   * @throws {MethodError} If the graph is null.
   */
  update = async (graph: GraphRepository, cancelToken: AbortController): Promise<GraphRepository> => {
    if (!graph) {
      GenericExceptionHandlers.ArgumentNullException('graph');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories/' + graph.GUID;
    return await this.updateResource(url, graph, cancelToken);
  };

  /**
   * Delete a graph repository.
   *
   * @param {string} guid - The GUID of the graph repository to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the deletion is successful.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Enumerate Graph-Repositories.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  enumerate = async (cancelToken: AbortController): Promise<EnumerationResult<GraphRepository>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/graphrepositories/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
