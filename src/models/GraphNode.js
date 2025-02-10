import { v4 as uuidV4 } from 'uuid';

export default class GraphNode {
  /**
   * @param {Object} graphNode Information about the graph node.
   * @param {string} graphNode.GUID - Node GUID (automatically generated if not provided).
   * @param {string} graphNode.GraphGUID - Graph GUID (automatically generated if not provided).
   * @param {string} graphNode.Name - Name of the node (optional).
   * @param {GraphData} graphNode.Data - Node data (optional).
   * @param {Date} graphNode.CreatedUtc - Creation timestamp in UTC (default is current time).
   */
  constructor(graphNode) {
    const { GUID = uuidV4(), GraphGUID = uuidV4(), Name = null, Data = null, CreatedUtc = new Date() } = graphNode;

    this.GUID = GUID;
    this.GraphGUID = GraphGUID;
    this.Name = Name;
    this.Data = Data;
    this.CreatedUtc = CreatedUtc;
  }
}
