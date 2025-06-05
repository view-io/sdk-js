import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { GraphRepository } from '../../types';
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
   * @throws {ApiErrorResponse} If the repo is null.
   */
  async createGraphRepository(graph: GraphRepository, cancelToken: AbortController) {
    if (!graph) {
      GenericExceptionHandlers.ArgumentNullException('graph');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories';
    return await this.create(url, graph, cancelToken);
  }

  /**
   * Check if a graph repository exists.
   *
   * @param {string} guid - The GUID of the graph repository to check.
   * @param {AbArtControllrrontroller} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the graph repository exists, false otherwise.
   * @throws {ApiApiErResponserorResponse} If the guid is null or empty.
   */
  async existsGraphRepository(guid: string, cancelToken: AbortController) {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories/' + guid;
    return await this.exists(url, cancelToken);
  }

  /**
   * Retrieve a graph repository.
   *
   * @param {string} guid - The GUID of the graph repository to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphRepository>} A promise resolving to the GraphRepository object.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  async retrieveGraphRepository(guid: string, cancelToken: AbortController) {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories/' + guid;
    return await this.retrieve(url, cancelToken);
  }

  /**
   * Retrieve all graph repositories.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<GraphRepository>>} A promise resolving to a list of GraphRepository objects.
   */
  async retrieveGraphRepositories(cancelToken: AbortController) {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories';
    return await this.retrieve(url, cancelToken);
  }

  /**
   * Update a graph repository.
   *
   * @param {GraphRepository} graph - Information about the graph repository.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphRepository>} A promise resolving to the updated GraphRepository object.
   * @throws {ApiErrorResponse} If the graph is null.
   */
  async updateGraphRepository(graph: GraphRepository, cancelToken: AbortController) {
    if (!graph) {
      GenericExceptionHandlers.ArgumentNullException('graph');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories/' + graph.GUID;
    return await this.update(url, graph, cancelToken);
  }

  /**
   * Delete a graph repository.
   *
   * @param {string} guid - The GUID of the graph repository to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the graph repository is deleted.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  async deleteGraphRepository(guid: string, cancelToken: AbortController) {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/graphrepositories/' + guid;
    return await this.delete(url, cancelToken);
  }

  /**
   * Enumerate Graph-Repositories.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  enumerateGraphRepositories = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/graphrepositories/`;
    return await this.retrieve(url, cancelToken);
  };
}
