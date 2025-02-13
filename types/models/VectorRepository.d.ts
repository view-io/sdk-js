export default class VectorRepository {
    /**
     * @param {Object} repo Information about the vector repository.
     * @param {string} repo.GUID - Repository GUID (automatically generated if not provided).
     * @param {string} repo.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} repo.name - Name of the repository (default is 'My vector repository').
     * @param {string} repo.repositoryType - Type of vector repository.
     * @param {string} repo.endpointUrl - Endpoint URL for the repository.
     * @param {string} repo.apiKey - API key for authentication.
     * @param {string} repo.model - Embedding model to be used (default is 'all-MiniLM-L6-v2').
     * @param {number} repo.dimensionality - Dimensionality of embeddings.
     * @param {string} repo.databaseHostname - Hostname of the database.
     * @param {string} repo.databaseName - Name of the database.
     * @param {string} repo.databaseTable - Table name in the database.
     * @param {number} repo.databasePort - Database port.
     * @param {string} repo.databaseUser - Database username.
     * @param {string} repo.databasePassword - Database password.
     * @param {string} repo.promptPrefix - Prefix to prepend to prompts.
     * @param {string} repo.promptSuffix - Suffix to append to prompts.
     * @param {Date} repo.createdUtc - Creation timestamp in UTC.
     */
    constructor(repo?: {
        GUID: string;
        TenantGUID: string;
        name: string;
        repositoryType: string;
        endpointUrl: string;
        apiKey: string;
        model: string;
        dimensionality: number;
        databaseHostname: string;
        databaseName: string;
        databaseTable: string;
        databasePort: number;
        databaseUser: string;
        databasePassword: string;
        promptPrefix: string;
        promptSuffix: string;
        createdUtc: Date;
    });
    GUID: any;
    tenantGUID: any;
    name: string;
    repositoryType: string;
    endpointUrl: string;
    apiKey: string;
    model: string;
    /**
     * Dimensionality setter with validation.
     * @param {number} value - Dimensionality of the repository.
     */
    set dimensionality(value: number);
    /**
     * Dimensionality getter.
     */
    get dimensionality(): number;
    databaseHostname: string;
    databaseName: string;
    databaseTable: string;
    /**
     * Database port setter with validation.
     * @param {number} value - Port number.
     */
    set databasePort(value: number);
    /**
     * Database port getter.
     */
    get databasePort(): number;
    databaseUser: string;
    databasePassword: string;
    promptPrefix: string;
    promptSuffix: string;
    createdUtc: Date | (() => string);
    _dimensionality: number;
    _databasePort: number;
}
