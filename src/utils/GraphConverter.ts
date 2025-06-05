export default class GraphConverters {
  /**
   * Converts a Graph object to a LiteGraph.Sdk.Graph object.
   * @param {Graph} graph - The Graph object to convert.
   * @returns {LiteGraph.Sdk.Graph} - The converted LiteGraph.Sdk.Graph object.
   */
  static graphToLgGraph(graph: any) {
    if (!graph) return null;

    return {
      GUID: graph.GUID,
      Name: graph.Name,
      CreatedUtc: graph.CreatedUtc,
    };
  }

  /**
   * Converts a LiteGraph.Sdk.Graph object to a Graph object.
   * @param {LiteGraph.Sdk.Graph} graph - The LiteGraph.Sdk.Graph object to convert.
   * @returns {Graph} - The converted Graph object.
   */
  static lgGraphToGraph(graph: any) {
    if (!graph) return null;

    return {
      GUID: graph.GUID,
      Name: graph.Name,
      CreatedUtc: graph.CreatedUtc,
    };
  }

  /**
   * Converts a list of LiteGraph.Sdk.Graph objects to a list of Graph objects.
   * @param {Array<LiteGraph.Sdk.Graph>} graphs - The list of LiteGraph.Sdk.Graph objects to convert.
   * @returns {Array<Graph>} - The converted list of Graph objects.
   */
  static lgGraphListToGraphList(graphs: any) {
    if (!graphs) return null;

    return graphs.map((graph: any) => GraphConverters.lgGraphToGraph(graph));
  }

  /**
   * Converts a GraphNode object to a LiteGraph.Sdk.Node object.
   * @param {GraphNode} node - The GraphNode object to convert.
   * @returns {LiteGraph.Sdk.Node} - The converted LiteGraph.Sdk.Node object.
   */
  static graphNodeToLgNode(node: any) {
    if (!node) return null;

    return {
      GUID: node.GUID,
      GraphGUID: node.GraphGUID,
      Name: node.Name,
      Data: node.Data,
      CreatedUtc: node.CreatedUtc,
    };
  }

  /**
   * Converts a LiteGraph.Sdk.Node object to a GraphNode object.
   * @param {LiteGraph.Sdk.Node} node - The LiteGraph.Sdk.Node object to convert.
   * @returns {GraphNode} - The converted GraphNode object.
   */
  static lgNodeToGraphNode(node: any) {
    if (!node) return null;

    return {
      GUID: node.GUID,
      GraphGUID: node.GraphGUID,
      Name: node.name,
      Data: node.data,
      CreatedUtc: node.CreatedUtc,
    };
  }

  /**
   * Converts a list of LiteGraph.Sdk.Node objects to a list of GraphNode objects.
   * @param {Array<LiteGraph.Sdk.Node>} nodes - The list of LiteGraph.Sdk.Node objects to convert.
   * @returns {Array<GraphNode>} - The converted list of GraphNode objects.
   */
  static lgNodeListToGraphNodeList(nodes: any) {
    if (!Array.isArray(nodes)) {
      // If it's a single object, wrap it in an array
      if (nodes) return [GraphConverters.lgNodeToGraphNode(nodes)];
      return null;
    }
    return nodes.map((node) => GraphConverters.lgNodeToGraphNode(node));
  }

  /**
   * Converts a GraphEdge object to a LiteGraph.Sdk.Edge object.
   * @param {GraphEdge} edge - The GraphEdge object to convert.
   * @returns {LiteGraph.Sdk.Edge} - The converted LiteGraph.Sdk.Edge object.
   */
  static graphEdgeToLgEdge(edge: any) {
    if (!edge) return null;

    return {
      GUID: edge.GUID,
      GraphGUID: edge.GraphGUID,
      Name: edge.Name,
      From: edge.From,
      To: edge.To,
      Cost: edge.Cost,
      CreatedUtc: edge.CreatedUtc,
    };
  }

  /**
   * Converts a LiteGraph.Sdk.Edge object to a GraphEdge object.
   * @param {LiteGraph.Sdk.Edge} edge - The LiteGraph.Sdk.Edge object to convert.
   * @returns {GraphEdge} - The converted GraphEdge object.
   */
  static lgEdgeToGraphEdge(edge: any) {
    if (!edge) throw new Error('Edge cannot be null');

    return {
      GUID: edge.GUID,
      GraphGUID: edge.GraphGUID,
      Name: edge.Name,
      From: edge.From,
      To: edge.To, // Note: `edge.To` instead of `edge.From` in the C# code might be a mistake.
      Cost: edge.Cost,
      CreatedUtc: edge.CreatedUtc,
    };
  }

  /**
   * Converts a list of LiteGraph.Sdk.Edge objects to a list of GraphEdge objects.
   * @param {Array<LiteGraph.Sdk.Edge>} edges - The list of LiteGraph.Sdk.Edge objects to convert.
   * @returns {Array<GraphEdge>} - The converted list of GraphEdge objects.
   */
  static lgEdgeListToGraphEdgeList(edges: any) {
    if (!edges) return null;

    return edges.map((edge: any) => GraphConverters.lgEdgeToGraphEdge(edge));
  }
}
