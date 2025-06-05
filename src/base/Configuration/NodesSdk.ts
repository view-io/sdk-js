import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { NodeModal, NodeRequest } from '../../types';

export default class NodesSdk extends ViewSdkBase {
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
   * @returns {Promise<NodeModal|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveNode = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/nodes/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve All Nodes.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveNodes = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/nodes';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Create a Node.
   *
   * @param {NodeRequest} node Information about the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<NodeModal|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {ApiErrorResponse} If the node is null or empty.
   */
  createNode = async (node: NodeRequest, cancelToken: AbortController) => {
    if (!node) {
      GenericExceptionHandlers.ArgumentNullException('node');
    } else {
      // if (!(node instanceof ViewNode)) {
      //   throw new Error("Invalid object: Expected an instance of Node.");
      // }
    }
    const url = this.config.endpoint + '/v1.0/nodes';
    return await this.create(url, node, cancelToken);
  };

  /**
   * Update a Node.
   *
   * @param {NodeRequest} node Information about the credential.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<NodeModal|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {ApiErrorResponse} If the node is null or empty.
   */
  updateNode = async (node: NodeRequest, cancelToken: AbortController) => {
    if (!node) {
      GenericExceptionHandlers.ArgumentNullException('node');
    }
    const url = this.config.endpoint + '/v1.0/nodes/' + node.GUID;
    return await this.update(url, node, cancelToken);
  };

  /**
   * Delete a Node.
   *
   * @param {string} guid - The GUID of the node to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<NodeModal|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  deleteNode = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/nodes/' + guid;
    return await this.delete(url, cancelToken);
  };

  /**
   * Check if a Node exists by its GUID.
   *
   * @param {string} guid - The GUID of the node to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  existsNode = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/nodes/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Enumerate Nodes.
   * @param {number} [maxKeys] - The maximum number of nodes to return. Default is 5.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  enumerateNodes = async (maxKeys = 5, cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/nodes/?max-keys=${maxKeys}`;
    return await this.retrieve(url, cancelToken);
  };
}
