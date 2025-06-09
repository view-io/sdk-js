import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EnumerationResult, NodeModal, NodeRequest } from '../../types';

export default class NodeSdk extends ViewSdkBase {
  /**
   * Constructs a new NodesSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Nodes
  /**
   * Retrieve a Node by its GUID.
   * @param {string} guid - The GUID of the node to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<NodeModal>} A promise resolving to the Node object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<NodeModal> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    } else {
      // if (!(node instanceof ViewNode)) {
      //   throw new Error("Invalid object: Expected an instance of Node.");
      // }
    }
    const url = this.config.endpoint + '/v1.0/nodes/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve All Nodes.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<NodeModal>} A promise resolving to the Node object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  readAll = async (cancelToken?: AbortController): Promise<NodeModal> => {
    const url = this.config.endpoint + '/v1.0/nodes';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Create a Node.
   *
   * @param {NodeRequest} node Information about the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<NodeModal>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {MethodError} If the node is null or empty.
   */
  create = async (node: NodeRequest, cancelToken?: AbortController): Promise<NodeModal> => {
    if (!node) {
      GenericExceptionHandlers.ArgumentNullException('node');
    } else {
      // if (!(node instanceof ViewNode)) {
      //   throw new Error("Invalid object: Expected an instance of Node.");
      // }
    }
    const url = this.config.endpoint + '/v1.0/nodes';
    return await this.createResource(url, node, cancelToken);
  };

  /**
   * Update a Node.
   *
   * @param {NodeRequest} node Information about the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<NodeModal>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {MethodError} If the node is null or empty.
   */
  update = async (node: NodeRequest, cancelToken?: AbortController): Promise<NodeModal> => {
    if (!node) {
      GenericExceptionHandlers.ArgumentNullException('node');
    }
    const url = this.config.endpoint + '/v1.0/nodes/' + node.GUID;
    return await this.updateResource(url, node, cancelToken);
  };

  /**
   * Delete a Node.
   *
   * @param {string} guid - The GUID of the node to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<NodeModal>} A promise resolving to the Node object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/nodes/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Check if a Node exists by its GUID.
   *
   * @param {string} guid - The GUID of the node to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<NodeModal>} A promise resolving to the Node object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/nodes/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Enumerate Nodes.
   * @param {number} [maxKeys] - The maximum number of nodes to return. Default is 5.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<NodeModal>>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  enumerate = async (maxKeys = 5, cancelToken?: AbortController): Promise<EnumerationResult<NodeModal>> => {
    const url = `${this.config.endpoint}/v2.0/nodes/?max-keys=${maxKeys}`;
    return await this.retrieveResource(url, cancelToken);
  };
}
