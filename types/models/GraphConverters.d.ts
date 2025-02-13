export default class GraphConverters {
    /**
     * Converts a Graph object to a LiteGraph.Sdk.Graph object.
     * @param {Graph} graph - The Graph object to convert.
     * @returns {LiteGraph.Sdk.Graph} - The converted LiteGraph.Sdk.Graph object.
     */
    static graphToLgGraph(graph: Graph): LiteGraph.Sdk.Graph;
    /**
     * Converts a LiteGraph.Sdk.Graph object to a Graph object.
     * @param {LiteGraph.Sdk.Graph} graph - The LiteGraph.Sdk.Graph object to convert.
     * @returns {Graph} - The converted Graph object.
     */
    static lgGraphToGraph(graph: LiteGraph.Sdk.Graph): Graph;
    /**
     * Converts a list of LiteGraph.Sdk.Graph objects to a list of Graph objects.
     * @param {Array<LiteGraph.Sdk.Graph>} graphs - The list of LiteGraph.Sdk.Graph objects to convert.
     * @returns {Array<Graph>} - The converted list of Graph objects.
     */
    static lgGraphListToGraphList(graphs: Array<LiteGraph.Sdk.Graph>): Array<Graph>;
    /**
     * Converts a GraphNode object to a LiteGraph.Sdk.Node object.
     * @param {GraphNode} node - The GraphNode object to convert.
     * @returns {LiteGraph.Sdk.Node} - The converted LiteGraph.Sdk.Node object.
     */
    static graphNodeToLgNode(node: GraphNode): LiteGraph.Sdk.Node;
    /**
     * Converts a LiteGraph.Sdk.Node object to a GraphNode object.
     * @param {LiteGraph.Sdk.Node} node - The LiteGraph.Sdk.Node object to convert.
     * @returns {GraphNode} - The converted GraphNode object.
     */
    static lgNodeToGraphNode(node: LiteGraph.Sdk.Node): GraphNode;
    /**
     * Converts a list of LiteGraph.Sdk.Node objects to a list of GraphNode objects.
     * @param {Array<LiteGraph.Sdk.Node>} nodes - The list of LiteGraph.Sdk.Node objects to convert.
     * @returns {Array<GraphNode>} - The converted list of GraphNode objects.
     */
    static lgNodeListToGraphNodeList(nodes: Array<LiteGraph.Sdk.Node>): Array<GraphNode>;
    /**
     * Converts a GraphEdge object to a LiteGraph.Sdk.Edge object.
     * @param {GraphEdge} edge - The GraphEdge object to convert.
     * @returns {LiteGraph.Sdk.Edge} - The converted LiteGraph.Sdk.Edge object.
     */
    static graphEdgeToLgEdge(edge: GraphEdge): LiteGraph.Sdk.Edge;
    /**
     * Converts a LiteGraph.Sdk.Edge object to a GraphEdge object.
     * @param {LiteGraph.Sdk.Edge} edge - The LiteGraph.Sdk.Edge object to convert.
     * @returns {GraphEdge} - The converted GraphEdge object.
     */
    static lgEdgeToGraphEdge(edge: LiteGraph.Sdk.Edge): GraphEdge;
    /**
     * Converts a list of LiteGraph.Sdk.Edge objects to a list of GraphEdge objects.
     * @param {Array<LiteGraph.Sdk.Edge>} edges - The list of LiteGraph.Sdk.Edge objects to convert.
     * @returns {Array<GraphEdge>} - The converted list of GraphEdge objects.
     */
    static lgEdgeListToGraphEdgeList(edges: Array<LiteGraph.Sdk.Edge>): Array<GraphEdge>;
}
