/**
 * Class representing a Graph Repository configuration.
 */
export default class GraphRepository {
  /**
   * @param {Object} repository - Graph repository configuration.
   * @param {string} [repository.GUID]
   * @param {string} [repository.TenantGUID]
   * @param {string} [repository.Name]
   * @param {string} [repository.RepositoryType]
   * @param {string} [repository.EndpointUrl]
   * @param {string} [repository.ApiKey]
   * @param {number} [repository.Port]
   * @param {boolean} [repository.Ssl]
   * @param {string} [repository.GraphIdentifier]
   * @param {Date|string} [repository.CreatedUtc]
   */
  constructor(repository = {}) {
    const { GUID, TenantGUID, Name, RepositoryType, EndpointUrl, ApiKey, Port, Ssl, GraphIdentifier, CreatedUtc } =
      repository;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.Name = Name;
    this.RepositoryType = RepositoryType;
    this.EndpointUrl = EndpointUrl;
    this.ApiKey = ApiKey;
    this.Ssl = Ssl;
    this.GraphIdentifier = GraphIdentifier;
    this.CreatedUtc = CreatedUtc;
    this.Port = Port;
  }
}
