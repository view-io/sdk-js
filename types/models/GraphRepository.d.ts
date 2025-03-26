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
    constructor(repository?: {
        GUID?: string;
        TenantGUID?: string;
        Name?: string;
        RepositoryType?: string;
        EndpointUrl?: string;
        ApiKey?: string;
        Port?: number;
        Ssl?: boolean;
        GraphIdentifier?: string;
        CreatedUtc?: Date | string;
    });
    GUID: string;
    TenantGUID: string;
    Name: string;
    RepositoryType: string;
    EndpointUrl: string;
    ApiKey: string;
    Ssl: boolean;
    GraphIdentifier: string;
    CreatedUtc: string | Date;
    Port: number;
}
