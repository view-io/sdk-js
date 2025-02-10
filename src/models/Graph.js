import { v4 as uuidV4 } from 'uuid';

export default class Graph {
  /**
   * @param {Object} graph Information about the graph.
   * @param {string} graph.GUID - Graph GUID (automatically generated if not provided).
   * @param {string} graph.Name - Name of the graph.
   * @param {Date} graph.CreatedUtc - Creation timestamp in UTC (default is current time).
   */
  constructor(graph) {
    const { GUID = uuidV4(), Name = null, CreatedUtc = new Date() } = graph;

    this.GUID = GUID;
    this.Name = Name;
    this.CreatedUtc = CreatedUtc;
  }
}
