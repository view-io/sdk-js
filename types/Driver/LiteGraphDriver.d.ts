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
    constructor(endpoint: string, tenantGuid: string, accessKey: string);
    _Endpoint: string;
    _TenantGuid: string;
    _AccessKey: string;
    _Sdk: any;
    _TimeoutMs: number;
    /**
     * Gets the LiteGraph endpoint URL.
     * @returns {string} The endpoint URL.
     */
    get Endpoint(): string;
    /**
     * Sets the timeout value in milliseconds.
     * @param {number} value - The timeout value.
     * @throws {Error} If the timeout value is less than 1.
     */
    set TimeoutMs(value: number);
    /**
     * Gets the timeout value in milliseconds.
     * @returns {number} The timeout value.
     */
    get TimeoutMs(): number;
    /**
     * Validates connectivity to the LiteGraph service.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<boolean>} Returns true if connectivity is valid, false otherwise.
     */
    validateConnectivity(token?: string | null): Promise<boolean>;
    /**
     * Checks if a graph with the given GUID exists.
     * @param {string} guid - The GUID of the graph to check.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<boolean>} Returns true if the graph exists, false otherwise.
     */
    graphExists(guid: string, token?: string | null): Promise<boolean>;
    /**
     * Creates a new graph.
     * @param {string} guid - The GUID for the new graph.
     * @param {string} name - The name of the new graph.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<Graph|null>} The created graph or null if creation failed.
     * @throws {Error} If the graph name is null or empty.
     */
    createGraph(guid: string, name: string, token?: string | null): Promise<Graph | null>;
    /**
     * Reads a graph by its GUID.
     * @param {string} guid - The GUID of the graph to read.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<Graph|null>} The graph or null if not found.
     */
    readGraph(guid: string, token?: string | null): Promise<Graph | null>;
    /**
     * Reads all graphs.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<Graph[]>} A list of all graphs.
     */
    readGraphs(token?: string | null): Promise<Graph[]>;
    /**
     * Updates an existing graph.
     * @param {Graph} graph - The graph to update.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<Graph|null>} The updated graph or null if update failed.
     * @throws {Error} If the graph is null.
     */
    updateGraph(graph: Graph, token?: string | null): Promise<Graph | null>;
    /**
     * Deletes a graph by its GUID.
     * @param {string} guid - The GUID of the graph to delete.
     * @param {boolean} [force=false] - Whether to force delete the graph.
     * @param {string|null} [token=null] - Optional authentication token.
     */
    deleteGraph(guid: string, force?: boolean, token?: string | null): Promise<void>;
    /**
     * Checks if a node exists in a graph.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} guid - The GUID of the node to check.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<boolean>} Returns true if the node exists, false otherwise.
     */
    nodeExists(graphGuid: string, guid: string, token?: string | null): Promise<boolean>;
    /**
     * Creates a new node in the graph.
     * @param {GraphNode} node - The node to create.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphNode|null>} The created node or null if creation failed.
     * @throws {Error} If the node is null.
     */
    createNode(node: GraphNode, token?: string | null): Promise<GraphNode | null>;
    /**
     * Reads a node by its GUID from a graph.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} nodeGuid - The GUID of the node to read.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphNode|null>} The node or null if not found.
     */
    readNode(graphGuid: string, nodeGuid: string, token?: string | null): Promise<GraphNode | null>;
    /**
     * Reads all nodes in a graph.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphNode[]>} A list of all nodes in the graph.
     */
    readNodes(graphGuid: string, token?: string | null): Promise<GraphNode[]>;
    /**
     * Searches for nodes in a graph that match a given expression.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} expr - The search expression.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphNode[]>} A list of nodes that match the search expression.
     */
    searchNodes(graphGuid: string, expr: string, token?: string | null): Promise<GraphNode[]>;
    /**
     * Deletes a node by its GUID from a graph.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} nodeGuid - The GUID of the node to delete.
     * @param {string|null} [token=null] - Optional authentication token.
     */
    deleteNode(graphGuid: string, nodeGuid: string, token?: string | null): Promise<void>;
    /**
     * Checks if an edge exists in a graph.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} guid - The GUID of the edge to check.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<boolean>} Returns true if the edge exists, false otherwise.
     */
    edgeExists(graphGuid: string, guid: string, token?: string | null): Promise<boolean>;
    /**
     * Creates a new edge in the graph.
     * @param {GraphEdge} edge - The edge to create.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphEdge|null>} The created edge or null if creation failed.
     */
    createEdge(edge: GraphEdge, token?: string | null): Promise<GraphEdge | null>;
    /**
     * Reads an edge by its GUID from a graph.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} edgeGuid - The GUID of the edge to read.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphEdge|null>} The edge or null if not found.
     */
    readEdge(graphGuid: string, edgeGuid: string, token?: string | null): Promise<GraphEdge | null>;
    /**
     * Reads all edges in a graph.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphEdge[]>} A list of all edges in the graph.
     */
    readEdges(graphGuid: string, token?: string | null): Promise<GraphEdge[]>;
    /**
     * Deletes an edge by its GUID from a graph.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} edgeGuid - The GUID of the edge to delete.
     * @param {string|null} [token=null] - Optional authentication token.
     */
    deleteEdge(graphGuid: string, edgeGuid: string, token?: string | null): Promise<void>;
    /**
     * Retrieves all edges originating from a specific node.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} nodeGuid - The GUID of the node.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphEdge[]>} A list of edges originating from the node.
     */
    edgesFromNode(graphGuid: string, nodeGuid: string, token?: string | null): Promise<GraphEdge[]>;
    /**
     * Retrieves all edges pointing to a specific node.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} nodeGuid - The GUID of the node.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphEdge[]>} A list of edges pointing to the node.
     */
    edgesToNode(graphGuid: string, nodeGuid: string, token?: string | null): Promise<GraphEdge[]>;
    /**
     * Retrieves edges between two specific nodes.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} fromNodeGuid - The GUID of the source node.
     * @param {string} toNodeGuid - The GUID of the target node.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphEdge[]>} A list of edges between the nodes.
     */
    edgesBetweenNodes(graphGuid: string, fromNodeGuid: string, toNodeGuid: string, token?: string | null): Promise<GraphEdge[]>;
    /**
     * Retrieves all edges associated with a specific node.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} nodeGuid - The GUID of the node.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphEdge[]>} A list of all edges connected to the node.
     */
    allNodeEdges(graphGuid: string, nodeGuid: string, token?: string | null): Promise<GraphEdge[]>;
    /**
     * Retrieves the parent nodes of a specific node.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} nodeGuid - The GUID of the node.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphNode[]>} A list of parent nodes.
     */
    getNodeParents(graphGuid: string, nodeGuid: string, token?: string | null): Promise<GraphNode[]>;
    /**
     * Retrieves the child nodes of a specific node.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} nodeGuid - The GUID of the node.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphNode[]>} A list of child nodes.
     */
    getNodeChildren(graphGuid: string, nodeGuid: string, token?: string | null): Promise<GraphNode[]>;
    /**
     * Retrieves the neighboring nodes of a specific node.
     * @param {string} graphGuid - The GUID of the graph.
     * @param {string} nodeGuid - The GUID of the node.
     * @param {string|null} [token=null] - Optional authentication token.
     * @returns {Promise<GraphNode[]>} A list of neighboring nodes.
     */
    getNodeNeighbors(graphGuid: string, nodeGuid: string, token?: string | null): Promise<GraphNode[]>;
    /**
     * Disposes of the LiteGraph SDK and any associated resources.
     */
    dispose(): void;
    _Serializer: any;
}
