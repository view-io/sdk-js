import { v4 as uuidV4 } from 'uuid';

export default class GraphEdge {
  /**
   * @param {Object} graphEdge Information about the graph edge.
   * @param {string} graphEdge.GUID - Edge GUID (automatically generated if not provided).
   * @param {string} graphEdge.GraphGUID - Graph GUID (automatically generated if not provided).
   * @param {string} graphEdge.Name - Name of the edge (optional).
   * @param {string} graphEdge.From - From node GUID.
   * @param {GraphNode} graphEdge.FromNode - From node object (optional, populated during route retrieval).
   * @param {string} graphEdge.To - To node GUID.
   * @param {GraphNode} graphEdge.ToNode - To node object (optional, populated during route retrieval).
   * @param {number} graphEdge.Cost - Cost associated with the edge (default is 0).
   * @param {Date} graphEdge.CreatedUtc - Creation timestamp in UTC (default is current time).
   */
  constructor(graphEdge) {
    const {
      GUID = uuidV4(),
      GraphGUID = uuidV4(),
      Name = null,
      From = null,
      FromNode = null,
      To = null,
      ToNode = null,
      Cost = 0,
      CreatedUtc = new Date(),
    } = graphEdge;

    this.GUID = GUID;
    this.GraphGUID = GraphGUID;
    this.Name = Name;
    this.From = From;
    this.FromNode = FromNode;
    this.To = To;
    this.ToNode = ToNode;
    this.Cost = Cost;
    this.CreatedUtc = CreatedUtc;
  }
}
