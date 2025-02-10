import { v4 as uuidV4 } from 'uuid';
import { GraphRepositoryTypeEnum } from '../enums/GraphRepositoryTypeEnum';

export default class GraphRepository {
  /**
   * @param {Object} graph - Information about the graph repository.
   * @param {string} [graph.GUID] - GUID of the graph repository (auto-generated if not provided).
   * @param {string} [graph.TenantGUID] - Tenant GUID (auto-generated if not provided).
   * @param {string} [graph.Name] - Name of the graph.
   * @param {string} [graph.RepositoryType] - Type of graph graph.
   * @param {string} [graph.EndpointUrl] - Endpoint URL.
   * @param {string} [graph.ApiKey] - API key for the graph.
   * @param {string} [graph.Username] - Username for authentication.
   * @param {string} [graph.Password] - Password for authentication.
   * @param {string} [graph.Hostname] - Hostname for the graph.
   * @param {number} [graph.Port] - Port number for the graph (default is 0).
   * @param {string} [graph.GraphIdentifier] - Identifier of the graph.
   * @param {Date} [graph.CreatedUtc] - Creation timestamp in UTC (defaults to current UTC time).
   */
  constructor(repository = {}) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      Name = 'My vector repository',
      RepositoryType = GraphRepositoryTypeEnum.LiteGraph,
      EndpointUrl = null,
      ApiKey = null,
      Username = null,
      Password = null,
      Hostname = null,
      Port = 0,
      GraphIdentifier,
      CreatedUtc = new Date(),
    } = repository;

    this.GUID = GUID;
    this.tenantGUID = TenantGUID;
    this.name = Name;
    this.repositoryType = RepositoryType;
    this.endpointUrl = EndpointUrl;
    this.apiKey = ApiKey;
    this.username = Username;
    this.password = Password;
    this.hostname = Hostname;
    this.graphIdentifier = GraphIdentifier;
    this.createdUtc = CreatedUtc;

    this._port = 0; // Default port
    this.port = Port; // Validate and set through setter
  }

  /**
   * Port getter.
   * @returns {number} The port number.
   */
  get Port() {
    return this._port;
  }

  /**
   * Port setter with validation.
   * @param {number} value - Port number (must be between 0 and 65535).
   * @throws {Error} If the port number is out of range.
   */
  set Port(value) {
    if (value < 0 || value > 65535) {
      throw new Error('Port must be between 0 and 65535');
    }
    this._port = value;
  }
}
