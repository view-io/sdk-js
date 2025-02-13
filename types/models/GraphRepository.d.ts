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
    constructor(repository?: {});
    GUID: any;
    tenantGUID: any;
    name: any;
    repositoryType: any;
    endpointUrl: any;
    apiKey: any;
    username: any;
    password: any;
    hostname: any;
    graphIdentifier: any;
    createdUtc: any;
    _port: number;
    port: any;
    /**
     * Port setter with validation.
     * @param {number} value - Port number (must be between 0 and 65535).
     * @throws {Error} If the port number is out of range.
     */
    set Port(value: number);
    /**
     * Port getter.
     * @returns {number} The port number.
     */
    get Port(): number;
}
