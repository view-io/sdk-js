//eslint-disable-next-line node/no-extraneous-import, node/no-missing-import
import { LiteGraphSdk } from 'litegraph';
import GraphConverters from '../models/GraphConverters';

/**
 * LiteGraphDriver class provides methods for interacting with a LiteGraph endpoint.
 * It allows managing graphs, nodes, edges, and traversals.
 */
export default class LiteGraphDriver {
  /**
   * Initializes the LiteGraphDriver instance.
   * @param {string} endpoint - The LiteGraph endpoint URL.
   * @param {string} tenantGuid - The tenant GUID.
   * @param {string} accessKey - The access key.
   * @throws {Error} If the endpoint is null or empty.
   */

  constructor(endpoint = 'http://localhost:8701/', tenantGuid, accessKey) {
    if (!endpoint) throw new Error('Endpoint cannot be null or empty');

    this._Endpoint = endpoint;
    this._TenantGuid = tenantGuid;
    this._AccessKey = accessKey;
    this._Sdk = new LiteGraphSdk(this._Endpoint, this._TenantGuid, this._AccessKey);
    this._TimeoutMs = 300000; // Default timeout
  }

  /**
   * Gets the LiteGraph endpoint URL.
   * @returns {string} The endpoint URL.
   */
  get Endpoint() {
    return this._Endpoint;
  }

  /**
   * Gets the timeout value in milliseconds.
   * @returns {number} The timeout value.
   */
  get TimeoutMs() {
    return this._TimeoutMs;
  }

  /**
   * Sets the timeout value in milliseconds.
   * @param {number} value - The timeout value.
   * @throws {Error} If the timeout value is less than 1.
   */
  set TimeoutMs(value) {
    if (value < 1) throw new Error('Timeout must be greater than 0');
    this._TimeoutMs = value;
  }

  /**
   * Validates connectivity to the LiteGraph service.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<boolean>} Returns true if connectivity is valid, false otherwise.
   */
  async validateConnectivity(token = null) {
    return await this._Sdk.validateConnectivity(token);
  }

  /**
   * Checks if a graph with the given GUID exists.
   * @param {string} guid - The GUID of the graph to check.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<boolean>} Returns true if the graph exists, false otherwise.
   */
  async graphExists(guid, token = null) {
    return await this._Sdk.graphExists(guid, token);
  }

  /**
   * Creates a new graph.
   * @param {string} guid - The GUID for the new graph.
   * @param {string} name - The name of the new graph.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<Graph|null>} The created graph or null if creation failed.
   * @throws {Error} If the graph name is null or empty.
   */
  async createGraph(guid, name, token = null) {
    if (!name) throw new Error('Graph name cannot be null or empty');
    const graph = await this._Sdk.createGraph(guid, name, token);
    if (graph) {
      return GraphConverters.lgGraphToGraph(graph);
    }
    return null;
  }

  /**
   * Reads a graph by its GUID.
   * @param {string} guid - The GUID of the graph to read.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<Graph|null>} The graph or null if not found.
   */
  async readGraph(guid, token = null) {
    const graph = await this._Sdk.readGraph(guid, token);
    if (graph) {
      return GraphConverters.lgGraphToGraph(graph);
    }
    return null;
  }

  /**
   * Reads all graphs.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<Graph[]>} A list of all graphs.
   */
  async readGraphs(token = null) {
    const graphs = await this._Sdk.readGraphs(token);
    if (graphs) {
      return GraphConverters.lgGraphListToGraphList(graphs);
    }
    return [];
  }

  /**
   * Updates an existing graph.
   * @param {Graph} graph - The graph to update.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<Graph|null>} The updated graph or null if update failed.
   * @throws {Error} If the graph is null.
   */
  async updateGraph(graph, token = null) {
    if (!graph) throw new Error('Graph cannot be null');
    const updatedGraph = await this._Sdk.updateGraph(GraphConverters.graphToLgGraph(graph), token);
    if (updatedGraph) {
      return GraphConverters.lgGraphToGraph(updatedGraph);
    }
    return null;
  }

  /**
   * Deletes a graph by its GUID.
   * @param {string} guid - The GUID of the graph to delete.
   * @param {boolean} [force=false] - Whether to force delete the graph.
   * @param {string|null} [token=null] - Optional authentication token.
   */
  async deleteGraph(guid, force = false, token = null) {
    await this._Sdk.deleteGraph(guid, force, token);
  }

  // Node Methods

  /**
   * Checks if a node exists in a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} guid - The GUID of the node to check.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<boolean>} Returns true if the node exists, false otherwise.
   */
  async nodeExists(graphGuid, guid, token = null) {
    return await this._Sdk.nodeExists(graphGuid, guid, token);
  }

  /**
   * Creates a new node in the graph.
   * @param {GraphNode} node - The node to create.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphNode|null>} The created node or null if creation failed.
   * @throws {Error} If the node is null.
   */
  async createNode(node, token = null) {
    if (!node) throw new Error('Node cannot be null');
    const createdNode = await this._Sdk.createNode(GraphConverters.graphNodeToLgNode(node), token);
    if (createdNode) {
      return GraphConverters.lgNodeToGraphNode(createdNode);
    }
    return null;
  }

  /**
   * Reads a node by its GUID from a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node to read.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphNode|null>} The node or null if not found.
   */
  async readNode(graphGuid, nodeGuid, token = null) {
    const node = await this._Sdk.readNode(graphGuid, nodeGuid, token);
    if (node) {
      return GraphConverters.lgNodeToGraphNode(node);
    }
    return null;
  }

  /**
   * Reads all nodes in a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphNode[]>} A list of all nodes in the graph.
   */
  async readNodes(graphGuid, token = null) {
    const nodes = await this._Sdk.readNodes(graphGuid, token);
    if (nodes) {
      return GraphConverters.lgNodeListToGraphNodeList(nodes);
    }
    return [];
  }

  /**
   * Searches for nodes in a graph that match a given expression.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} expr - The search expression.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphNode[]>} A list of nodes that match the search expression.
   */
  async searchNodes(graphGuid, expr, token = null) {
    const searchRequest = { GraphGUID: graphGuid, Expr: expr };
    const result = await this._Sdk.searchNodes(searchRequest, token);
    if (result && result.nodes) {
      return GraphConverters.lgNodeListToGraphNodeList(result.nodes);
    }
    return [];
  }

  /**
   * Deletes a node by its GUID from a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node to delete.
   * @param {string|null} [token=null] - Optional authentication token.
   */
  async deleteNode(graphGuid, nodeGuid, token = null) {
    await this._Sdk.deleteNode(graphGuid, nodeGuid, token);
  }

  // Edge Methods

  /**
   * Checks if an edge exists in a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} guid - The GUID of the edge to check.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<boolean>} Returns true if the edge exists, false otherwise.
   */
  async edgeExists(graphGuid, guid, token = null) {
    return await this._Sdk.edgeExists(graphGuid, guid, token);
  }

  /**
   * Creates a new edge in the graph.
   * @param {GraphEdge} edge - The edge to create.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphEdge|null>} The created edge or null if creation failed.
   */
  async createEdge(edge, token = null) {
    const createdEdge = await this._Sdk.createEdge(GraphConverters.GraphEdgeToLgEdge(edge), token);
    if (createdEdge) {
      return GraphConverters.lgEdgeToGraphEdge(createdEdge);
    }
    return null;
  }

  /**
   * Reads an edge by its GUID from a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} edgeGuid - The GUID of the edge to read.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphEdge|null>} The edge or null if not found.
   */
  async readEdge(graphGuid, edgeGuid, token = null) {
    const edge = await this._Sdk.readEdge(graphGuid, edgeGuid, token);
    if (edge) {
      return GraphConverters.lgEdgeToGraphEdge(edge);
    }
    return null;
  }

  /**
   * Reads all edges in a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphEdge[]>} A list of all edges in the graph.
   */
  async readEdges(graphGuid, token = null) {
    const edges = await this._Sdk.readEdges(graphGuid, token);
    if (edges) {
      return GraphConverters.lgEdgeListToGraphEdgeList(edges);
    }
    return [];
  }

  /**
   * Deletes an edge by its GUID from a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} edgeGuid - The GUID of the edge to delete.
   * @param {string|null} [token=null] - Optional authentication token.
   */
  async deleteEdge(graphGuid, edgeGuid, token = null) {
    await this._Sdk.deleteEdge(graphGuid, edgeGuid, token);
  }

  // Traversal Methods

  /**
   * Retrieves all edges originating from a specific node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphEdge[]>} A list of edges originating from the node.
   */
  async edgesFromNode(graphGuid, nodeGuid, token = null) {
    const edges = await this._Sdk.getEdgesFromNode(graphGuid, nodeGuid, token);
    if (edges) {
      return GraphConverters.lgEdgeListToGraphEdgeList(edges);
    }
    return [];
  }

  /**
   * Retrieves all edges pointing to a specific node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphEdge[]>} A list of edges pointing to the node.
   */
  async edgesToNode(graphGuid, nodeGuid, token = null) {
    const edges = await this._Sdk.getEdgesToNode(graphGuid, nodeGuid, token);
    if (edges) {
      return GraphConverters.lgEdgeListToGraphEdgeList(edges);
    }
    return [];
  }

  /**
   * Retrieves edges between two specific nodes.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} fromNodeGuid - The GUID of the source node.
   * @param {string} toNodeGuid - The GUID of the target node.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphEdge[]>} A list of edges between the nodes.
   */
  async edgesBetweenNodes(graphGuid, fromNodeGuid, toNodeGuid, token = null) {
    const edges = await this._Sdk.getEdgesBetween(graphGuid, fromNodeGuid, toNodeGuid, token);
    if (edges) {
      return GraphConverters.lgEdgeListToGraphEdgeList(edges);
    }
    return [];
  }

  /**
   * Retrieves all edges associated with a specific node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphEdge[]>} A list of all edges connected to the node.
   */
  async allNodeEdges(graphGuid, nodeGuid, token = null) {
    const edges = await this._Sdk.getAllNodeEdges(graphGuid, nodeGuid, token);
    if (edges) {
      return GraphConverters.lgEdgeListToGraphEdgeList(edges);
    }
    return [];
  }

  /**
   * Retrieves the parent nodes of a specific node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphNode[]>} A list of parent nodes.
   */
  async getNodeParents(graphGuid, nodeGuid, token = null) {
    const nodes = await this._Sdk.getParentsFromNode(graphGuid, nodeGuid, token);
    if (nodes) {
      return GraphConverters.lgNodeListToGraphNodeList(nodes);
    }
    return [];
  }

  /**
   * Retrieves the child nodes of a specific node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphNode[]>} A list of child nodes.
   */
  async getNodeChildren(graphGuid, nodeGuid, token = null) {
    const nodes = await this._Sdk.getChildrenFromNode(graphGuid, nodeGuid, token);
    if (nodes) {
      return GraphConverters.lgNodeListToGraphNodeList(nodes);
    }
    return [];
  }

  /**
   * Retrieves the neighboring nodes of a specific node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {string|null} [token=null] - Optional authentication token.
   * @returns {Promise<GraphNode[]>} A list of neighboring nodes.
   */
  async getNodeNeighbors(graphGuid, nodeGuid, token = null) {
    const nodes = await this._Sdk.getNodeNeighbors(graphGuid, nodeGuid, token);
    if (nodes) {
      return GraphConverters.lgNodeListToGraphNodeList(nodes);
    }
    return [];
  }

  /**
   * Disposes of the LiteGraph SDK and any associated resources.
   */
  dispose() {
    if (this._Sdk) this._Sdk.dispose();
    this._Serializer = null;
  }
}
