/**
 * Class representing a Vector Repository configuration.
 */
export default class VectorRepository {
    /**
     * @param {Object} repo - Configuration object for the vector repository.
     * @param {string} [repo.GUID] - Unique identifier for the repository.
     * @param {string} [repo.TenantGUID] - Tenant identifier.
     * @param {string} [repo.Name] - Name of the repository.
     * @param {string} [repo.RepositoryType] - Type of the vector repository (e.g., 'Pgvector').
     * @param {string} [repo.Model] - Embedding model name.
     * @param {number} [repo.Dimensionality] - Vector dimensionality.
     * @param {string} [repo.DatabaseHostname] - Hostname of the backing database.
     * @param {string} [repo.DatabaseName] - Name of the database.
     * @param {string} [repo.SchemaName] - Schema name in the database.
     * @param {string} [repo.DatabaseTable] - Table name for vector storage.
     * @param {number} [repo.DatabasePort] - Port for the database connection.
     * @param {string} [repo.DatabaseUser] - Database username.
     * @param {string} [repo.DatabasePassword] - Database password.
     * @param {Date|string} [repo.CreatedUtc] - Creation timestamp in UTC.
     */
    constructor(repo?: {
        GUID?: string;
        TenantGUID?: string;
        Name?: string;
        RepositoryType?: string;
        Model?: string;
        Dimensionality?: number;
        DatabaseHostname?: string;
        DatabaseName?: string;
        SchemaName?: string;
        DatabaseTable?: string;
        DatabasePort?: number;
        DatabaseUser?: string;
        DatabasePassword?: string;
        CreatedUtc?: Date | string;
    });
    GUID: string;
    TenantGUID: string;
    Name: string;
    RepositoryType: string;
    Model: string;
    Dimensionality: number;
    DatabaseHostname: string;
    DatabaseName: string;
    SchemaName: string;
    DatabaseTable: string;
    DatabasePort: number;
    DatabaseUser: string;
    DatabasePassword: string;
    CreatedUtc: string | Date;
}
