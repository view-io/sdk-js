/**
 * Configuration service.
 * @module base/ViewConfigurationSdk
 * @version 0.1.0
 */
export default class ViewConfigurationSdk extends ViewSdkBase {
    /**
     * @constructor
     * @param {string} guid
     * @param {CancellationToken} token
     * @param {string} endpoint
     */
    /**
     * Retrieve a Node by its GUID.
     * @param {string} guid - The GUID of the node to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveNode: (guid: string, cancelToken?: object) => Promise<Node | null | ApiErrorResponse>;
    /**
     * Retrieve All Nodes.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveNodes: (cancelToken?: object) => Promise<Node | null | ApiErrorResponse>;
    /**
     * Create a Node.
     *
     * @param {Object} node Information about the credential.
     * @param {number} node.id - Node ID.
     * @param {string} node.GUID - Node GUID (automatically generated if not provided).
     * @param {string} node.name - Name of the node.
     * @param {string} node.hostname - Hostname of the node (default is 'localhost').
     * @param {string} node.InstanceType - Software instance type.
     * @param {Date} node.LastStartUtc - Last start timestamp in UTC.
     * @param {Date} node.CreatedUtc - Creation timestamp in UTC.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
     * @throws {Error} If the node is null or empty.
     */
    createNode: (node: {
        id: number;
        GUID: string;
        name: string;
        hostname: string;
        InstanceType: string;
        LastStartUtc: Date;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<Node | null | ApiErrorResponse>;
    /**
     * Update a Node.
     *
     * @param {Object} node Information about the credential.
     * @param {number} node.id - Node ID.
     * @param {string} node.GUID - Node GUID (automatically generated if not provided).
     * @param {string} node.name - Name of the node.
     * @param {string} node.hostname - Hostname of the node (default is 'localhost').
     * @param {string} node.InstanceType - Software instance type.
     * @param {Date} node.LastStartUtc - Last start timestamp in UTC.
     * @param {Date} node.CreatedUtc - Creation timestamp in UTC.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
     * @throws {Error} If the node is null or empty.
     */
    updateNode: (node: {
        id: number;
        GUID: string;
        name: string;
        hostname: string;
        InstanceType: string;
        LastStartUtc: Date;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<Node | null | ApiErrorResponse>;
    /**
     * Delete a Node.
     *
     * @param {string} guid - The GUID of the node to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    deleteNode: (guid: string, cancelToken?: object) => Promise<Node | null | ApiErrorResponse>;
    /**
     * Check if a Node exists by its GUID.
     *
     * @param {string} guid - The GUID of the node to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    existsNode: (guid: string, cancelToken?: object) => Promise<Node | null | ApiErrorResponse>;
    /**
     * Enumerate Nodes.
     * @param {number} [maxKeys] - The maximum number of nodes to return. Default is 5.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateNodes: (maxKeys?: number, cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Retrieve tenant metadata.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the TenantMetadata object or null if not found.
     */
    retrieveTenant: (guid: any, cancelToken?: object) => Promise<TenantMetadata | null | ApiErrorResponse>;
    /**
     * Retrieve all tenants.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the TenantMetadata object or null if not found.
     */
    retrieveTenants: (cancelToken?: object) => Promise<TenantMetadata | null | ApiErrorResponse>;
    /**
     * Delete tenant metadata.
     * @param {string} guid - The GUID of the tenant to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the TenantMetadata object or null if not found.
     * @throws {Error} If the GUID is null or empty.
     */
    deleteTenant: (guid: string, cancelToken?: object) => Promise<TenantMetadata | null | ApiErrorResponse>;
    /**
     * Check if a tenant exists by its GUID.
     *
     * @param {string} guid - The GUID of the tenant.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the tenant exists, false otherwise.
     * @throws {Error} If the GUID is null or empty.
     */
    existsTenant: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Write tenant metadata.
     *
     * @param {Object} tenant Information about the tenants.
     * @param {string|null} tenant.AccountGUID - Account GUID (optional).
     * @param {string} tenant.Name - Tenant's name (default is an empty string).
     * @param {string} tenant.S3BaseDomain - S3 base domain for the tenant.
     * @param {string} tenant.RestBaseDomain - REST base domain for the tenant.
     * @param {string} tenant.DefaultPoolGUID - Default pool's unique identifier for the tenant.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the updated TenantMetadata object or null.
     * @throws {Error} If the tenant object is null.
     */
    writeTenant: (tenant: {
        AccountGUID: string | null;
        Name: string;
        S3BaseDomain: string;
        RestBaseDomain: string;
        DefaultPoolGUID: string;
    }, cancelToken?: object) => Promise<TenantMetadata | null | ApiErrorResponse>;
    /**
     * Update tenant metadata.
     *
     * @param {Object} tenant Information about the tenants.
     * @param {number} tenant.id - Tenant ID (defaults to 0, throws error if set to less than 1).
     * @param {string} tenant.GUID - Tenant's unique identifier (automatically generated if not provided).
     * @param {string|null} tenant.ParentGUID - Parent tenant's GUID (optional).
     * @param {string} tenant.Name - Tenant's name (default is an empty string).
     * @param {string} tenant.Region - Region for the tenant (default: 'us-west-1').
     * @param {string} tenant.S3BaseDomain - S3 base domain for the tenant.
     * @param {string} tenant.RestBaseDomain - REST base domain for the tenant.
     * @param {string} tenant.DefaultPoolGUID - Default pool's unique identifier for the tenant.
     * @param {boolean} tenant.Active - Whether the tenant is active (default: true).
     * @param {Date} tenant.CreatedUtc - Creation timestamp in UTC (default: current time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the updated TenantMetadata object or null.
     * @throws {Error} If the tenant object is null.
     */
    updateTenant: (guid: any, tenant: {
        id: number;
        GUID: string;
        ParentGUID: string | null;
        Name: string;
        Region: string;
        S3BaseDomain: string;
        RestBaseDomain: string;
        DefaultPoolGUID: string;
        Active: boolean;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<TenantMetadata | null | ApiErrorResponse>;
    /**
     * Enumerate Tenants.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateTenants: (cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Retrieve a credential by its GUID.
     *
     * @param {string} guid - The GUID of the credential to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Credential|null|ApiErrorResponse>} A promise resolving to the Credential object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveCredential: (guid: string, cancelToken?: object) => Promise<Credential | null | ApiErrorResponse>;
    /**
     * Retrieve all credentials.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<Credential>|null|ApiErrorResponse>} A promise resolving to the list of Credentials or null if not found.
     */
    retrieveCredentials: (cancelToken?: object) => Promise<Array<Credential> | null | ApiErrorResponse>;
    /**
     * Create a credential.
     *
     * @param {Object} cred Information about the credential.
     * @param {string} cred.GUID - Unique identifier for the credential (automatically generated if not provided).
     * @param {string} cred.tenantGuid - Unique identifier for the tenant.
     * @param {string} cred.UserGUID - Unique identifier for the user.
     * @param {string} cred.AccessKey - Access key for the credential.
     * @param {string} cred.SecretKey - Secret key for the credential.
     * @param {boolean} cred.Active - Whether the credential is active.
     * @param {Date} cred.CreatedUtc - The date and time when the credential was created in UTC.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Credential|null|ApiErrorResponse>} A promise resolving to the created Credential object or null.
     * @throws {Error} If the credential is null.
     */
    createCredential: (cred: {
        GUID: string;
        tenantGuid: string;
        UserGUID: string;
        AccessKey: string;
        SecretKey: string;
        Active: boolean;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<Credential | null | ApiErrorResponse>;
    /**
     * Update a credential.
     *
     * @param {Object} cred Information about the credential.
     * @param {string} cred.GUID - Unique identifier for the credential (automatically generated if not provided).
     * @param {string} cred.tenantGuid - Unique identifier for the tenant.
     * @param {string} cred.UserGUID - Unique identifier for the user.
     * @param {string} cred.AccessKey - Access key for the credential.
     * @param {string} cred.SecretKey - Secret key for the credential.
     * @param {boolean} cred.Active - Whether the credential is active.
     * @param {Date} cred.CreatedUtc - The date and time when the credential was created in UTC.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Credential|null|ApiErrorResponse>} A promise resolving to the updated Credential object or null.
     * @throws {Error} If the credential is null.
     */
    updateCredential: (cred: {
        GUID: string;
        tenantGuid: string;
        UserGUID: string;
        AccessKey: string;
        SecretKey: string;
        Active: boolean;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<Credential | null | ApiErrorResponse>;
    /**
     * Check if a credential exists by its GUID.
     *
     * @param {string} guid - The GUID of the credential.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the credential exists, false otherwise.
     * @throws {Error} If the GUID is null or empty.
     */
    existsCredential: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Delete a credential by its GUID.
     *
     * @param {string} guid - The GUID of the credential to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the credential is deleted.
     * @throws {Error} If the GUID is null or empty.
     */
    deleteCredential: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Enumerate Credentials.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateCredentials: (cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Create a user.
     *
     * @param {Object} user Information about the credential.
     * @param {string} user.tenantGuid - Tenant's unique identifier (automatically generated if not provided).
     * @param {string} user.FirstName - User's first name.
     * @param {string} user.LastName - User's last name.
     * @param {string} user.Notes - Any additional notes for the user.
     * @param {string} user.Email - User's email address.
     * @param {string} user.PasswordSha256 - SHA-256 hashed password (not serialized).
     * @param {boolean} user.Active - Whether the user is active (default: true).
     * @param {Date} user.CreatedUtc - Date and time the user was created (in UTC, default: current time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the created UserMaster object or null.
     * @throws {Error} If the user object is null.
     */
    createUser: (user: {
        tenantGuid: string;
        FirstName: string;
        LastName: string;
        Notes: string;
        Email: string;
        PasswordSha256: string;
        Active: boolean;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<UserMaster | null | ApiErrorResponse>;
    /**
     * Check if a user exists by its GUID.
     *
     * @param {string} guid - The GUID of the user.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the user exists, false otherwise.
     * @throws {Error} If the GUID is null or empty.
     */
    existsUser: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieve a user by its GUID.
     *
     * @param {string} guid - The GUID of the user to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the UserMaster object or null if not found.
     * @throws {Error} If the GUID is null or empty.
     */
    retrieveUser: (guid: string, cancelToken?: object) => Promise<UserMaster | null | ApiErrorResponse>;
    /**
     * Retrieve all users.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<UserMaster>|null|ApiErrorResponse>} A promise resolving to the list of Users or null if not found.
     */
    retrieveUsers: (cancelToken?: object) => Promise<Array<UserMaster> | null | ApiErrorResponse>;
    /**
     * Update a user.
     *@param {string} guid - The GUID of the user to update.
     * @param {Object} user Information about the credential.
     * @param {string} user.tenantGuid - Tenant's unique identifier (automatically generated if not provided).
     * @param {string} user.FirstName - User's first name.
     * @param {string} user.LastName - User's last name.
     * @param {string} user.Notes - Any additional notes for the user.
     * @param {string} user.Email - User's email address.
     * @param {string} user.PasswordSha256 - SHA-256 hashed password (not serialized).
     * @param {boolean} user.Active - Whether the user is active (default: true).
     * @param {Date} user.CreatedUtc - Date and time the user was created (in UTC, default: current time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the updated UserMaster object or null.
     * @throws {Error} If the user object is null.
     */
    updateUser: (guid: string, user: {
        tenantGuid: string;
        FirstName: string;
        LastName: string;
        Notes: string;
        Email: string;
        PasswordSha256: string;
        Active: boolean;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<UserMaster | null | ApiErrorResponse>;
    /**
     * Delete a user by its GUID.
     *
     * @param {string} guid - The GUID of the user to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the user is deleted.
     * @throws {Error} If the GUID is null or empty.
     */
    deleteUser: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Enumerate Users.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateUsers: (cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Create an encryption key.
     *
     * @param {Object} key Information about the encryption key.
     * @param {string} key.KeyBase64 - Encryption key in base64 format.
     * @param {string} key.KeyHex - Encryption key in hexadecimal format.
     * @param {string} key.IvBase64 - Initialization vector in base64 format.
     * @param {string} key.IvHex - Initialization vector in hexadecimal form.
     * @param {string} key.SaltBase64 - Salt in base64 form.
     * @param {string} key.SaltHex - Salt in hexadecimal form.
     * @param {string} key.Name - Name of the encryption key.
     * @param {string} key.Description - Description of the encryption key.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EncryptionKey|null|ApiErrorResponse>} A promise resolving to the created EncryptionKey object.
     * @throws {Error} If the key is null.
     */
    createEncryptionKey: (key: {
        KeyBase64: string;
        KeyHex: string;
        IvBase64: string;
        IvHex: string;
        SaltBase64: string;
        SaltHex: string;
        Name: string;
        Description: string;
    }, cancelToken?: object) => Promise<EncryptionKey | null | ApiErrorResponse>;
    /**
     * Check if an encryption key exists.
     *
     * @param {string} guid - The GUID of the encryption key to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to true if the encryption key exists, false otherwise.
     * @throws {Error} If the guid is null or empty.
     */
    existsEncryptionKey: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Retrieve an encryption key by its GUID.
     *
     * @param {string} guid - The GUID of the encryption key to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EncryptionKey|null|ApiErrorResponse>} A promise resolving to the EncryptionKey object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveEncryptionKey: (guid: string, cancelToken?: object) => Promise<EncryptionKey | null | ApiErrorResponse>;
    /**
     * Retrieve all encryption keys.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<EncryptionKey>|ApiErrorResponse>} A promise resolving to an array of EncryptionKey objects.
     */
    retrieveEncryptionKeys: (cancelToken?: object) => Promise<Array<EncryptionKey> | ApiErrorResponse>;
    /**
     * Update an encryption key.
     *
     * @param {Object} key Information about the encryption key.
     * @param {string} key.GUID - GUID of the encryption key (automatically generated if not provided).
     * @param {string} key.tenantGuid - Tenant GUID (automatically generated if not provided).
     * @param {string} key.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} key.KeyBase64 - Key in base64 form.
     * @param {string} key.KeyHex - Key in hexadecimal form.
     * @param {string} key.IvBase64 - Initialization vector in base64 form.
     * @param {string} key.IvHex - Initialization vector in hexadecimal form.
     * @param {string} key.SaltBase64 - Salt in base64 form.
     * @param {string} key.SaltHex - Salt in hexadecimal form.
     * @param {string} key.Name - Name of the encryption key.
     * @param {string} key.Description - Description of the encryption key.
     * @param {Date} key.CreatedUtc - Creation timestamp in UTC.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EncryptionKey|null|ApiErrorResponse>} A promise resolving to the updated EncryptionKey object.
     * @throws {Error} If the key is null.
     */
    updateEncryptionKey: (key: {
        GUID: string;
        tenantGuid: string;
        OwnerGUID: string;
        KeyBase64: string;
        KeyHex: string;
        IvBase64: string;
        IvHex: string;
        SaltBase64: string;
        SaltHex: string;
        Name: string;
        Description: string;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<EncryptionKey | null | ApiErrorResponse>;
    /**
     * Delete an encryption key by its GUID.
     *
     * @param {string} guid - The GUID of the encryption key to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise that resolves when the deletion is complete.
     * @throws {Error} If the guid is null or empty.
     */
    deleteEncryptionKey: (guid: string, cancelToken?: object) => Promise<void>;
    /**
     * Enumerate Encryption-Keys.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateEncryptionKeys: (cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Create a vector repository.
     *
     * @param {Object} vector Information about the vector repository.
     * @param {string} vector.GUID - Repository GUID (automatically generated if not provided).
     * @param {string} vector.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} vector.name - Name of the repository (default is 'My vector repository').
     * @param {string} vector.repositoryType - Type of vector repository.
     * @param {string} vector.endpointUrl - Endpoint URL for the repository.
     * @param {string} vector.apiKey - API key for authentication.
     * @param {string} vector.model - Embedding model to be used (default is 'all-MiniLM-L6-v2').
     * @param {number} vector.dimensionality - Dimensionality of embeddings.
     * @param {string} vector.databaseHostname - Hostname of the database.
     * @param {string} vector.databaseName - Name of the database.
     * @param {string} vector.databaseTable - Table name in the database.
     * @param {number} vector.databasePort - Database port.
     * @param {string} vector.databaseUser - Database username.
     * @param {string} vector.databasePassword - Database password.
     * @param {string} vector.promptPrefix - Prefix to prepend to prompts.
     * @param {string} vector.promptSuffix - Suffix to append to prompts.
     * @param {Date} vector.createdUtc - Creation timestamp in UTC.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<VectorRepository>} A promise resolving to the created VectorRepository object.
     * @throws {Error} If the repo is null.
     */
    createVectorRepository(vector: {
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
    }, cancelToken?: object): Promise<VectorRepository>;
    /**
     * Check if a vector repository exists.
     *
     * @param {string} guid - The GUID of the vector repository to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to true if the vector repository exists, false otherwise.
     * @throws {Error} If the guid is null or empty.
     */
    existsVectorRepository(guid: string, cancelToken?: object): Promise<boolean>;
    /**
     * Retrieve a vector repository.
     *
     * @param {string} guid - The GUID of the vector repository to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<VectorRepository>} A promise resolving to the VectorRepository object.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveVectorRepository(guid: string, cancelToken?: object): Promise<VectorRepository>;
    /**
     * Retrieve all vector repositories.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<VectorRepository>>} A promise resolving to a list of VectorRepository objects.
     */
    retrieveVectorRepositories(cancelToken?: object): Promise<Array<VectorRepository>>;
    /**
     * Update a vector repository.
     *
     * @param {Object} vector Information about the vector repository.
     * @param {string} vector.GUID - Repository GUID (automatically generated if not provided).
     * @param {string} vector.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} vector.name - Name of the repository (default is 'My vector repository').
     * @param {string} vector.repositoryType - Type of vector repository.
     * @param {string} vector.endpointUrl - Endpoint URL for the repository.
     * @param {string} vector.apiKey - API key for authentication.
     * @param {string} vector.model - Embedding model to be used (default is 'all-MiniLM-L6-v2').
     * @param {number} vector.dimensionality - Dimensionality of embeddings.
     * @param {string} vector.databaseHostname - Hostname of the database.
     * @param {string} vector.databaseName - Name of the database.
     * @param {string} vector.databaseTable - Table name in the database.
     * @param {number} vector.databasePort - Database port.
     * @param {string} vector.databaseUser - Database username.
     * @param {string} vector.databasePassword - Database password.
     * @param {string} vector.promptPrefix - Prefix to prepend to prompts.
     * @param {string} vector.promptSuffix - Suffix to append to prompts.
     * @param {Date} vector.createdUtc - Creation timestamp in UTC.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<VectorRepository>} A promise resolving to the updated VectorRepository object.
     * @throws {Error} If the vector is null.
     */
    updateVectorRepository(vector: {
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
    }, cancelToken?: object): Promise<VectorRepository>;
    /**
     * Delete a vector repository.
     *
     * @param {string} guid - The GUID of the vector repository to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise that resolves when the vector repository is deleted.
     * @throws {Error} If the guid is null or empty.
     */
    deleteVectorRepository(guid: string, cancelToken?: object): Promise<void>;
    /**
     * Enumerate Vector-Repositories.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateVectorRepositories: (cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Create a graph repository.
     *
     * @param {Object} graph - Information about the graph repository.
     * @param {string} [graph.GUID] - GUID of the graph repository (auto-generated if not provided).
     * @param {string} [graph.tenantGuid] - Tenant GUID (auto-generated if not provided).
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
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphRepository>} A promise resolving to the created GraphRepository object.
     * @throws {Error} If the repo is null.
     */
    createGraphRepository(graph: {
        GUID?: string;
        tenantGuid?: string;
        Name?: string;
        RepositoryType?: string;
        EndpointUrl?: string;
        ApiKey?: string;
        Username?: string;
        Password?: string;
        Hostname?: string;
        Port?: number;
        GraphIdentifier?: string;
        CreatedUtc?: Date;
    }, cancelToken?: object): Promise<GraphRepository>;
    /**
     * Check if a graph repository exists.
     *
     * @param {string} guid - The GUID of the graph repository to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to true if the graph repository exists, false otherwise.
     * @throws {Error} If the guid is null or empty.
     */
    existsGraphRepository(guid: string, cancelToken?: object): Promise<boolean>;
    /**
     * Retrieve a graph repository.
     *
     * @param {string} guid - The GUID of the graph repository to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphRepository>} A promise resolving to the GraphRepository object.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveGraphRepository(guid: string, cancelToken?: object): Promise<GraphRepository>;
    /**
     * Retrieve all graph repositories.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<GraphRepository>>} A promise resolving to a list of GraphRepository objects.
     */
    retrieveGraphRepositories(cancelToken?: object): Promise<Array<GraphRepository>>;
    /**
     * Update a graph repository.
     *
     * @param {Object} graph - Information about the graph repository.
     * @param {string} [graph.GUID] - GUID of the graph repository (auto-generated if not provided).
     * @param {string} [graph.tenantGuid] - Tenant GUID (auto-generated if not provided).
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
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphRepository>} A promise resolving to the updated GraphRepository object.
     * @throws {Error} If the graph is null.
     */
    updateGraphRepository(graph: {
        GUID?: string;
        tenantGuid?: string;
        Name?: string;
        RepositoryType?: string;
        EndpointUrl?: string;
        ApiKey?: string;
        Username?: string;
        Password?: string;
        Hostname?: string;
        Port?: number;
        GraphIdentifier?: string;
        CreatedUtc?: Date;
    }, cancelToken?: object): Promise<GraphRepository>;
    /**
     * Delete a graph repository.
     *
     * @param {string} guid - The GUID of the graph repository to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise that resolves when the graph repository is deleted.
     * @throws {Error} If the guid is null or empty.
     */
    deleteGraphRepository(guid: string, cancelToken?: object): Promise<void>;
    /**
     * Enumerate Graph-Repositories.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateGraphRepositories: (cancelToken?: object) => Promise<Trigger | null | ApiErrorResponse>;
    /**
     * Create a bucket.
     *
     * @param {Object} bucket Information about the bucket metadata.
     * @param {number} bucket.id - Bucket ID.
     * @param {string} bucket.GUID - Bucket GUID (automatically generated if not provided).
     * @param {string} bucket.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} bucket.PoolGUID - Pool GUID (automatically generated if not provided).
     * @param {string} bucket.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} bucket.Category - Bucket category.
     * @param {string} bucket.Name - Name of the bucket.
     * @param {string} bucket.RegionString - Region string (default is 'us-west-1').
     * @param {boolean} bucket.Versioning - Enable or disable versioning (default is true).
     * @param {number|null} bucket.RetentionMinutes - Retention in minutes (optional).
     * @param {number|null} bucket.MaxUploadSize - Maximum upload size (optional).
     * @param {number} bucket.MaxMultipartUploadSeconds - Maximum multipart upload seconds (default is seven days).
     * @param {Date} bucket.LastAccessUtc - Last access timestamp in UTC.
     * @param {Date} bucket.CreatedUtc - Created timestamp in UTC.
     * @param {UserMaster|null} bucket.Owner - Owner of the bucket (optional).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the created BucketMetadata object or null.
     * @throws {Error} If the bucket is null.
     */
    createBucket: (bucket: {
        id: number;
        GUID: string;
        TenantGUID: string;
        PoolGUID: string;
        OwnerGUID: string;
        Category: string;
        Name: string;
        RegionString: string;
        Versioning: boolean;
        RetentionMinutes: number | null;
        MaxUploadSize: number | null;
        MaxMultipartUploadSeconds: number;
        LastAccessUtc: Date;
        CreatedUtc: Date;
        Owner: UserMaster | null;
    }, cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
    /**
     * Check if a bucket exists.
     *
     * @param {string} guid - The GUID of the bucket to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the bucket exists, or false if not.
     * @throws {Error} If the guid is null or empty.
     */
    existsBucket: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieve a bucket by its GUID.
     *
     * @param {string} guid - The GUID of the bucket to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the BucketMetadata object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveBucket: (guid: string, cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
    /**
     * Retrieve all buckets.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<BucketMetadata>|ApiErrorResponse>} A promise resolving to an array of BucketMetadata objects.
     */
    retrieveBuckets: (cancelToken?: object) => Promise<Array<BucketMetadata> | ApiErrorResponse>;
    /**
     * Update a bucket.
     *
     * @param {Object} bucket Information about the bucket metadata.
     * @param {number} bucket.id - Bucket ID.
     * @param {string} bucket.GUID - Bucket GUID (automatically generated if not provided).
     * @param {string} bucket.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} bucket.PoolGUID - Pool GUID (automatically generated if not provided).
     * @param {string} bucket.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} bucket.Category - Bucket category.
     * @param {string} bucket.Name - Name of the bucket.
     * @param {string} bucket.RegionString - Region string (default is 'us-west-1').
     * @param {boolean} bucket.Versioning - Enable or disable versioning (default is true).
     * @param {number|null} bucket.RetentionMinutes - Retention in minutes (optional).
     * @param {number|null} bucket.MaxUploadSize - Maximum upload size (optional).
     * @param {number} bucket.MaxMultipartUploadSeconds - Maximum multipart upload seconds (default is seven days).
     * @param {Date} bucket.LastAccessUtc - Last access timestamp in UTC.
     * @param {Date} bucket.CreatedUtc - Created timestamp in UTC.
     * @param {UserMaster|null} bucket.Owner - Owner of the bucket (optional).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the updated BucketMetadata object or null.
     * @throws {Error} If the bucket is null.
     */
    updateBucket: (bucket: {
        id: number;
        GUID: string;
        TenantGUID: string;
        PoolGUID: string;
        OwnerGUID: string;
        Category: string;
        Name: string;
        RegionString: string;
        Versioning: boolean;
        RetentionMinutes: number | null;
        MaxUploadSize: number | null;
        MaxMultipartUploadSeconds: number;
        LastAccessUtc: Date;
        CreatedUtc: Date;
        Owner: UserMaster | null;
    }, cancelToken?: object) => Promise<BucketMetadata | null | ApiErrorResponse>;
    /**
     * Delete a bucket by its GUID.
     *
     * @param {string} guid - The GUID of the bucket to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
     * @throws {Error} If the guid is null or empty.
     */
    deleteBucket: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Retrieve all collections.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<Collection>|ApiErrorResponse>} A promise resolving to an array of Collection objects.
     */
    retrieveCollections: (cancelToken?: object) => Promise<Array<Collection> | ApiErrorResponse>;
    /**
     * Retrieve a collection by its GUID.
     *
     * @param {string} collectionGuid - The GUID of the collection to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Collection|null|ApiErrorResponse>} A promise resolving to the Collection object or null if not found.
     * @throws {Error} If the collectionGuid is null or empty.
     */
    retrieveCollection: (collectionGuid: string, cancelToken?: object) => Promise<Collection | null | ApiErrorResponse>;
    /**
     * Retrieve statistics for a collection by its GUID.
     *
     * @param {string} collectionGuid - The GUID of the collection to retrieve statistics for.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CollectionStatistics|null|ApiErrorResponse>} A promise resolving to the CollectionStatistics object or null.
     * @throws {Error} If the collectionGuid is null or empty.
     */
    retrieveCollectionStatistics: (collectionGuid: string, cancelToken?: object) => Promise<CollectionStatistics | null | ApiErrorResponse>;
    /**
     * Create a new collection.
     *
     * @param {Object} collection Information about the collection.
     * @param {string} collection.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} collection.Name - Name of the collection.
     * @param {boolean} collection.AllowOverwrites - Indicates whether source documents can be overwritten (default is true).
     * @param {string} collection.AdditionalData - Additional data (optional).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Collection|null|ApiErrorResponse>} A promise resolving to the created Collection object or null.
     * @throws {Error} If the collection is null.
     */
    createCollection: (collection: {
        TenantGUID: string;
        Name: string;
        AllowOverwrites: boolean;
        AdditionalData: string;
    }, cancelToken?: object) => Promise<Collection | null | ApiErrorResponse>;
    /**
     * Delete a collection by its GUID.
     *
     * @param {string} collectionGuid - The GUID of the collection to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
     * @throws {Error} If the collectionGuid is null or empty.
     */
    deleteCollection: (collectionGuid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Enumerate Collections.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateCollections: (cancelToken?: object) => Promise<Trigger | null | ApiErrorResponse>;
    /**
     * Check if a collection exists by its GUID.
     *
     * @param {string} collectionGuid - The GUID of the collection to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the collection exists, otherwise false.
     * @throws {Error} If the collectionGuid is null or empty.
     */
    existsCollection: (collectionGuid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    retrieveObjectLock: (guid: any, cancelToken: any) => Promise<any>;
    /**
     * Retrieve all object locks.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<ObjectLock>|ApiErrorResponse>} A promise resolving to an array of ObjectLock objects.
     */
    retrieveObjectLocks: (cancelToken?: object) => Promise<Array<ObjectLock> | ApiErrorResponse>;
    /**
     * Enumerate object locks.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|ApiErrorResponse>} A promise resolving to the enumeration result.
     */
    enumerateObjectLocks: (cancelToken?: object) => Promise<EnumerationResult | ApiErrorResponse>;
    /**
     * Delete an object lock by its GUID.
     *
     * @param {string} guid - The GUID of the object lock to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
     * @throws {Error} If the guid is null or empty.
     */
    deleteObjectLock: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Create a new metadata rule.
     *
     * @param {Object} metadataRule Information about the metadata rule.
     * @param {string} metadataRule.GUID - Metadata rule GUID (automatically generated if not provided).
     * @param {string} metadataRule.TenantGUID - Tenant GUID (default is null).
     * @param {string} metadataRule.BucketGUID - Bucket GUID (default is null).
     * @param {string} metadataRule.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} metadataRule.Name - Name of the rule (default is null).
     * @param {string} metadataRule.ContentType - Content type (default is "text/plain").
     * @param {string} metadataRule.Prefix - Prefix (default is null).
     * @param {string} metadataRule.Suffix - Suffix (default is null).
     * @param {string} metadataRule.ProcessingEndpoint - Processing endpoint (default is localhost).
     * @param {string} metadataRule.CleanupEndpoint - Cleanup endpoint (default is localhost).
     * @param {string} metadataRule.TypeDetectorEndpoint - Type detector endpoint (default is localhost).
     * @param {string} metadataRule.SemanticCellEndpoint - Semantic cell endpoint (default is localhost).
     * @param {number} metadataRule.MaxChunkContentLength - Maximum chunk content length (default is 512).
     * @param {number} metadataRule.ShiftSize - Shift size (default is 512).
     * @param {string} metadataRule.UdrEndpoint - UDR endpoint (default is localhost).
     * @param {string} metadataRule.DataCatalogType - Data catalog type (default is DataCatalogTypeEnum.Lexi).
     * @param {string} metadataRule.DataCatalogEndpoint - Data catalog endpoint (default is localhost).
     * @param {string} metadataRule.DataCatalogCollection - Data catalog collection identifier (default is null).
     * @param {string} metadataRule.GraphRepositoryGUID - Graph repository GUID (default is null).
     * @param {number} metadataRule.TopTerms - Number of top terms to request (default is 25).
     * @param {boolean} metadataRule.CaseInsensitive - Enable case insensitive processing (default is true).
     * @param {boolean} metadataRule.IncludeFlattened - Enable inclusion of flattened representation (default is true).
     * @param {string} metadataRule.TargetBucketGUID - Target bucket GUID (default is null).
     * @param {number} metadataRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
     * @param {number|null} metadataRule.RetentionMinutes - Minutes to retain generated document (default is null).
     * @param {Date} metadataRule.CreatedUtc - Creation timestamp (default is current UTC time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<MetadataRule|null|ApiErrorResponse>} A promise resolving to the created MetadataRule object or null.
     * @throws {Error} If the rule is null.
     */
    createMetadataRule: (metadataRule: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        Name: string;
        ContentType: string;
        Prefix: string;
        Suffix: string;
        ProcessingEndpoint: string;
        CleanupEndpoint: string;
        TypeDetectorEndpoint: string;
        SemanticCellEndpoint: string;
        MaxChunkContentLength: number;
        ShiftSize: number;
        UdrEndpoint: string;
        DataCatalogType: string;
        DataCatalogEndpoint: string;
        DataCatalogCollection: string;
        GraphRepositoryGUID: string;
        TopTerms: number;
        CaseInsensitive: boolean;
        IncludeFlattened: boolean;
        TargetBucketGUID: string;
        MaxContentLength: number;
        RetentionMinutes: number | null;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<MetadataRule | null | ApiErrorResponse>;
    /**
     * Check if a metadata rule exists by its GUID.
     *
     * @param {string} guid - The GUID of the metadata rule to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the metadata rule exists, otherwise false.
     * @throws {Error} If the guid is null or empty.
     */
    existsMetadataRule: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieve a metadata rule by its GUID.
     *
     * @param {string} guid - The GUID of the metadata rule to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<MetadataRule|null|ApiErrorResponse>} A promise resolving to the MetadataRule object or null.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveMetadataRule: (guid: string, cancelToken?: object) => Promise<MetadataRule | null | ApiErrorResponse>;
    /**
     * Retrieve all metadata rules.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<MetadataRule>|ApiErrorResponse>} A promise resolving to an array of MetadataRule objects.
     */
    retrieveMetadataRules: (cancelToken?: object) => Promise<Array<MetadataRule> | ApiErrorResponse>;
    /**
     * Update an existing metadata rule.
     *
     * @param {Object} metadataRule Information about the metadata rule.
     * @param {string} metadataRule.GUID - Metadata rule GUID (automatically generated if not provided).
     * @param {string} metadataRule.TenantGUID - Tenant GUID (default is null).
     * @param {string} metadataRule.BucketGUID - Bucket GUID (default is null).
     * @param {string} metadataRule.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} metadataRule.Name - Name of the rule (default is null).
     * @param {string} metadataRule.ContentType - Content type (default is "text/plain").
     * @param {string} metadataRule.Prefix - Prefix (default is null).
     * @param {string} metadataRule.Suffix - Suffix (default is null).
     * @param {string} metadataRule.ProcessingEndpoint - Processing endpoint (default is localhost).
     * @param {string} metadataRule.CleanupEndpoint - Cleanup endpoint (default is localhost).
     * @param {string} metadataRule.TypeDetectorEndpoint - Type detector endpoint (default is localhost).
     * @param {string} metadataRule.SemanticCellEndpoint - Semantic cell endpoint (default is localhost).
     * @param {number} metadataRule.MaxChunkContentLength - Maximum chunk content length (default is 512).
     * @param {number} metadataRule.ShiftSize - Shift size (default is 512).
     * @param {string} metadataRule.UdrEndpoint - UDR endpoint (default is localhost).
     * @param {string} metadataRule.DataCatalogType - Data catalog type (default is DataCatalogTypeEnum.Lexi).
     * @param {string} metadataRule.DataCatalogEndpoint - Data catalog endpoint (default is localhost).
     * @param {string} metadataRule.DataCatalogCollection - Data catalog collection identifier (default is null).
     * @param {string} metadataRule.GraphRepositoryGUID - Graph repository GUID (default is null).
     * @param {number} metadataRule.TopTerms - Number of top terms to request (default is 25).
     * @param {boolean} metadataRule.CaseInsensitive - Enable case insensitive processing (default is true).
     * @param {boolean} metadataRule.IncludeFlattened - Enable inclusion of flattened representation (default is true).
     * @param {string} metadataRule.TargetBucketGUID - Target bucket GUID (default is null).
     * @param {number} metadataRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
     * @param {number|null} metadataRule.RetentionMinutes - Minutes to retain generated document (default is null).
     * @param {Date} metadataRule.CreatedUtc - Creation timestamp (default is current UTC time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<MetadataRule|null|ApiErrorResponse>} A promise resolving to the updated MetadataRule object or null.
     * @throws {Error} If the rule is null.
     */
    updateMetadataRule: (metadataRule: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        Name: string;
        ContentType: string;
        Prefix: string;
        Suffix: string;
        ProcessingEndpoint: string;
        CleanupEndpoint: string;
        TypeDetectorEndpoint: string;
        SemanticCellEndpoint: string;
        MaxChunkContentLength: number;
        ShiftSize: number;
        UdrEndpoint: string;
        DataCatalogType: string;
        DataCatalogEndpoint: string;
        DataCatalogCollection: string;
        GraphRepositoryGUID: string;
        TopTerms: number;
        CaseInsensitive: boolean;
        IncludeFlattened: boolean;
        TargetBucketGUID: string;
        MaxContentLength: number;
        RetentionMinutes: number | null;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<MetadataRule | null | ApiErrorResponse>;
    /**
     * Delete a metadata rule by its GUID.
     *
     * @param {string} guid - The GUID of the metadata rule to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
     * @throws {Error} If the guid is null or empty.
     */
    deleteMetadataRule: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Enumerate Metadata Rules.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateMetadataRules: (cancelToken?: object) => Promise<Trigger | null | ApiErrorResponse>;
    /**
     * Create a new embeddings rule.
     *
     * @param {Object} embeddingsRule Information about the embeddings rule.
     * @param {string} embeddingsRule.GUID - Embeddings rule GUID (automatically generated if not provided).
     * @param {string} embeddingsRule.TenantGUID - Tenant GUID (default is null).
     * @param {string} embeddingsRule.BucketGUID - Bucket GUID (default is null).
     * @param {string} embeddingsRule.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} embeddingsRule.Name - Name of the rule (default is null).
     * @param {string} embeddingsRule.ContentType - Content type (default is "text/plain").
     * @param {string} embeddingsRule.Prefix - Prefix (default is null).
     * @param {string} embeddingsRule.Suffix - Suffix (default is null).
     * @param {string} embeddingsRule.TargetBucketGUID - Target bucket GUID (default is null).
     * @param {string} embeddingsRule.GraphRepositoryGUID - Graph repository GUID (default is null).
     * @param {string} embeddingsRule.VectorRepositoryGUID - Vector repository GUID (default is null).
     * @param {string} embeddingsRule.DataFlowEndpoint - Data flow endpoint (default is localhost).
     * @param {string} embeddingsRule.EmbeddingsGenerator - Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy).
     * @param {string} embeddingsRule.GeneratorUrl - Embeddings generator URL (default is localhost).
     * @param {string} embeddingsRule.GeneratorApiKey - Embeddings provider API key (default is null).
     * @param {number} embeddingsRule.BatchSize - Maximum number of chunks to process per request (default is 16).
     * @param {number} embeddingsRule.MaxGeneratorTasks - Maximum number of parallel embeddings generation tasks (default is 16).
     * @param {number} embeddingsRule.MaxRetries - Maximum number of retries per task (default is 3).
     * @param {number} embeddingsRule.MaxFailures - Maximum number of failures before failing the operation (default is 3).
     * @param {string} embeddingsRule.VectorStoreUrl - Vector store URL (default is localhost).
     * @param {number} embeddingsRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
     * @param {number|null} embeddingsRule.RetentionMinutes - Minutes to retain the generated document (default is null).
     * @param {Date} embeddingsRule.CreatedUtc - Creation timestamp (default is current UTC time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EmbeddingsRule|null|ApiErrorResponse>} A promise resolving to the created EmbeddingsRule object or null.
     * @throws {Error} If the rule is null.
     */
    createEmbeddingsRule: (embeddingsRule: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        Name: string;
        ContentType: string;
        Prefix: string;
        Suffix: string;
        TargetBucketGUID: string;
        GraphRepositoryGUID: string;
        VectorRepositoryGUID: string;
        DataFlowEndpoint: string;
        EmbeddingsGenerator: string;
        GeneratorUrl: string;
        GeneratorApiKey: string;
        BatchSize: number;
        MaxGeneratorTasks: number;
        MaxRetries: number;
        MaxFailures: number;
        VectorStoreUrl: string;
        MaxContentLength: number;
        RetentionMinutes: number | null;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<EmbeddingsRule | null | ApiErrorResponse>;
    /**
     * Check if an embeddings rule exists by its GUID.
     *
     * @param {string} guid - The GUID of the embeddings rule to check.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the embeddings rule exists, otherwise false.
     * @throws {Error} If the guid is null or empty.
     */
    existsEmbeddingsRule: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieve an embeddings rule by its GUID.
     *
     * @param {string} guid - The GUID of the embeddings rule to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EmbeddingsRule|null|ApiErrorResponse>} A promise resolving to the EmbeddingsRule object or null.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveEmbeddingsRule: (guid: string, cancelToken?: object) => Promise<EmbeddingsRule | null | ApiErrorResponse>;
    /**
     * Retrieve all embeddings rules.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<EmbeddingsRule>|ApiErrorResponse>} A promise resolving to an array of EmbeddingsRule objects.
     */
    retrieveEmbeddingsRules: (cancelToken?: object) => Promise<Array<EmbeddingsRule> | ApiErrorResponse>;
    /**
     * Update an existing embeddings rule.
     *
     * @param {Object} embeddingsRule Information about the embeddings rule.
     * @param {string} embeddingsRule.GUID - Embeddings rule GUID (automatically generated if not provided).
     * @param {string} embeddingsRule.TenantGUID - Tenant GUID (default is null).
     * @param {string} embeddingsRule.BucketGUID - Bucket GUID (default is null).
     * @param {string} embeddingsRule.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} embeddingsRule.Name - Name of the rule (default is null).
     * @param {string} embeddingsRule.ContentType - Content type (default is "text/plain").
     * @param {string} embeddingsRule.Prefix - Prefix (default is null).
     * @param {string} embeddingsRule.Suffix - Suffix (default is null).
     * @param {string} embeddingsRule.TargetBucketGUID - Target bucket GUID (default is null).
     * @param {string} embeddingsRule.GraphRepositoryGUID - Graph repository GUID (default is null).
     * @param {string} embeddingsRule.VectorRepositoryGUID - Vector repository GUID (default is null).
     * @param {string} embeddingsRule.DataFlowEndpoint - Data flow endpoint (default is localhost).
     * @param {string} embeddingsRule.EmbeddingsGenerator - Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy).
     * @param {string} embeddingsRule.GeneratorUrl - Embeddings generator URL (default is localhost).
     * @param {string} embeddingsRule.GeneratorApiKey - Embeddings provider API key (default is null).
     * @param {number} embeddingsRule.BatchSize - Maximum number of chunks to process per request (default is 16).
     * @param {number} embeddingsRule.MaxGeneratorTasks - Maximum number of parallel embeddings generation tasks (default is 16).
     * @param {number} embeddingsRule.MaxRetries - Maximum number of retries per task (default is 3).
     * @param {number} embeddingsRule.MaxFailures - Maximum number of failures before failing the operation (default is 3).
     * @param {string} embeddingsRule.VectorStoreUrl - Vector store URL (default is localhost).
     * @param {number} embeddingsRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
     * @param {number|null} embeddingsRule.RetentionMinutes - Minutes to retain the generated document (default is null).
     * @param {Date} embeddingsRule.CreatedUtc - Creation timestamp (default is current UTC time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EmbeddingsRule|null|ApiErrorResponse>} A promise resolving to the updated EmbeddingsRule object or null.
     * @throws {Error} If the rule is null.
     */
    updateEmbeddingsRule: (embeddingsRule: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        Name: string;
        ContentType: string;
        Prefix: string;
        Suffix: string;
        TargetBucketGUID: string;
        GraphRepositoryGUID: string;
        VectorRepositoryGUID: string;
        DataFlowEndpoint: string;
        EmbeddingsGenerator: string;
        GeneratorUrl: string;
        GeneratorApiKey: string;
        BatchSize: number;
        MaxGeneratorTasks: number;
        MaxRetries: number;
        MaxFailures: number;
        VectorStoreUrl: string;
        MaxContentLength: number;
        RetentionMinutes: number | null;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<EmbeddingsRule | null | ApiErrorResponse>;
    /**
     * Delete an embeddings rule by its GUID.
     *
     * @param {string} guid - The GUID of the embeddings rule to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
     * @throws {Error} If the guid is null or empty.
     */
    deleteEmbeddingsRule: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Enumerate Embeddings Rules.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EmbeddingsResult|null|ApiErrorResponse>} A promise resolving to the created EmbeddingsResult object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateEmbeddingsRules: (cancelToken?: object) => Promise<EmbeddingsResult | null | ApiErrorResponse>;
    /**
     * Check if a webhook event exists.
     *
     * @param {string} guid - The GUID of the webhook event.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the webhook event exists.
     * @throws {Error} If the guid is null or empty.
     */
    existsWebhookEvent: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieve a webhook event by its GUID.
     *
     * @param {string} guid - The GUID of the webhook event to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<WebhookEvent|null|ApiErrorResponse>} A promise resolving to the WebhookEvent object or null.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveWebhookEvent: (guid: string, cancelToken?: object) => Promise<WebhookEvent | null | ApiErrorResponse>;
    /**
     * Retrieve a list of webhook events.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<WebhookEvent>|ApiErrorResponse>} A promise resolving to an array of WebhookEvent objects.
     */
    retrieveWebhookEvents: (cancelToken?: object) => Promise<Array<WebhookEvent> | ApiErrorResponse>;
    /**
     * Enumerate Webhook events.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
     * @throws {Error} If the EnumerationResult is null or invalid.
     */
    enumerateWebhookEvents: (cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Create a webhook rule.
     *
     * @param {Object} [rule] - Optional parameters.
     * @param {string} [rule.GUID] - GUID (automatically generated if not provided).
     * @param {string} [rule.TenantGUID] - Tenant GUID (automatically generated if not provided).
     * @param {string} [rule.TargetGUID] - Target GUID (automatically generated if not provided).
     * @param {string} [rule.Name] - Name of the webhook rule.
     * @param {WebhookEventTypeEnum} [rule.EventType] - Event type (defaults to WebhookEventTypeEnum.Unknown).
     * @param {number} [rule.MaxAttempts] - Maximum number of attempts (defaults to 10).
     * @param {number} [rule.RetryIntervalMs] - Retry interval in milliseconds (defaults to 30 seconds).
     * @param {number} [rule.TimeoutMs] - Timeout in milliseconds (defaults to 1 minute).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<WebhookRule|ApiErrorResponse>} A promise resolving to the created WebhookRule.
     * @throws {Error} If the rule is null.
     */
    createWebhookRule: (rule?: {
        GUID?: string;
        TenantGUID?: string;
        TargetGUID?: string;
        Name?: string;
        EventType?: WebhookEventTypeEnum;
        MaxAttempts?: number;
        RetryIntervalMs?: number;
        TimeoutMs?: number;
    }, cancelToken?: object) => Promise<WebhookRule | ApiErrorResponse>;
    /**
     * Check if a webhook rule exists.
     *
     * @param {string} guid - The GUID of the webhook rule.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the webhook rule exists.
     * @throws {Error} If the guid is null or empty.
     */
    existsWebhookRule: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieve a webhook rule by its GUID.
     *
     * @param {string} guid - The GUID of the webhook rule to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<WebhookRule|null|ApiErrorResponse>} A promise resolving to the WebhookRule object or null.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveWebhookRule: (guid: string, cancelToken?: object) => Promise<WebhookRule | null | ApiErrorResponse>;
    /**
     * Retrieve a list of webhook rules.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<WebhookRule>|ApiErrorResponse>} A promise resolving to an array of WebhookRule objects.
     */
    retrieveWebhookRules: (cancelToken?: object) => Promise<Array<WebhookRule> | ApiErrorResponse>;
    /**
     * Update a webhook rule.
     *
     * @param {Object} [rule] - Optional parameters.
     * @param {string} [rule.GUID] - GUID (automatically generated if not provided).
     * @param {string} [rule.TenantGUID] - Tenant GUID (automatically generated if not provided).
     * @param {string} [rule.TargetGUID] - Target GUID (automatically generated if not provided).
     * @param {string} [rule.Name] - Name of the webhook rule.
     * @param {WebhookEventTypeEnum} [rule.EventType] - Event type (defaults to WebhookEventTypeEnum.Unknown).
     * @param {number} [rule.MaxAttempts] - Maximum number of attempts (defaults to 10).
     * @param {number} [rule.RetryIntervalMs] - Retry interval in milliseconds (defaults to 30 seconds).
     * @param {number} [rule.TimeoutMs] - Timeout in milliseconds (defaults to 1 minute).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<WebhookRule|ApiErrorResponse>} A promise resolving to the updated WebhookRule.
     * @throws {Error} If the rule is null.
     */
    updateWebhookRule: (rule?: {
        GUID?: string;
        TenantGUID?: string;
        TargetGUID?: string;
        Name?: string;
        EventType?: WebhookEventTypeEnum;
        MaxAttempts?: number;
        RetryIntervalMs?: number;
        TimeoutMs?: number;
    }, cancelToken?: object) => Promise<WebhookRule | ApiErrorResponse>;
    /**
     * Delete a webhook rule.
     *
     * @param {string} guid - The GUID of the webhook rule to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the delete operation is complete.
     * @throws {Error} If the guid is null or empty.
     */
    deleteWebhookRule: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Enumerate Webhook rules.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
     * @throws {Error} If the EnumerationResult is null or invalid.
     */
    enumerateWebhookRules: (cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Create a webhook target.
     * @param {Object} [target] - Optional parameters.
     * @param {string} [target.Name] - Name of the webhook target (defaults to "My webhook target").
     * @param {string} [target.Url] - URL of the webhook target.
     * @param {string} [target.ContentType] - Content type (defaults to "application/json").
     * @param {number} [target.ExpectStatus] - Expected HTTP status (defaults to 200).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<WebhookTarget>} - Webhook target.
     */
    createWebhookTarget(target?: {
        Name?: string;
        Url?: string;
        ContentType?: string;
        ExpectStatus?: number;
    }, cancelToken?: object): Promise<WebhookTarget>;
    /**
     * Check if a webhook target exists.
     * @param {string} guid - GUID.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} - True if exists.
     */
    existsWebhookTarget(guid: string, cancelToken?: object): Promise<boolean>;
    /**
     * Read a webhook target.
     * @param {string} guid - GUID.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<WebhookTarget>} - Webhook target.
     */
    retrieveWebhookTarget(guid: string, cancelToken?: object): Promise<WebhookTarget>;
    /**
     * Read webhook targets.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<WebhookTarget[]>} - Webhook targets.
     */
    retrieveWebhookTargets(cancelToken?: object): Promise<WebhookTarget[]>;
    /**
     * Update a webhook target.
     * @param {Object} [target] - Optional parameters.
     * @param {string} [target.GUID] - GUID (automatically generated if not provided).
     * @param {string} [target.TenantGUID] - Tenant GUID (automatically generated if not provided).
     * @param {string} [target.Name] - Name of the webhook target (defaults to "My webhook target").
     * @param {string} [target.Url] - URL of the webhook target.
     * @param {string} [target.ContentType] - Content type (defaults to "application/json").
     * @param {number} [target.ExpectStatus] - Expected HTTP status (defaults to 200).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<WebhookTarget>} - Webhook target.
     */
    updateWebhookTarget(target?: {
        GUID?: string;
        TenantGUID?: string;
        Name?: string;
        Url?: string;
        ContentType?: string;
        ExpectStatus?: number;
    }, cancelToken?: object): Promise<WebhookTarget>;
    /**
     * Delete a webhook target.
     * @param {string} guid - GUID.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>}
     */
    deleteWebhookTarget(guid: string, cancelToken?: object): Promise<void>;
    /**
     * Enumerate Webhook target.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
     * @throws {Error} If the EnumerationResult is null or invalid.
     */
    enumerateWebhookTargets: (cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Create a View endpoint.
     * @param {Object} [endpoint] - Optional parameters.
     * @param {string} [endpoint.GUID] - GUID (automatically generated if not provided).
     * @param {string} [endpoint.TenantGUID] - Tenant GUID (automatically generated if not provided).
     * @param {string} [endpoint.OwnerGUID] - Owner GUID (automatically generated if not provided).
     * @param {string} [endpoint.Name] - Name of the view endpoint (defaults to "My View endpoint").
     * @param {boolean} [endpoint.UseSsl] - Boolean flag to enable or disable SSL (defaults to false).
     * @param {string} [endpoint.S3Url] - S3 URL (defaults to "http://localhost:8002/").
     * @param {string} [endpoint.S3BaseUrl] - S3 base URL (defaults to "http://localhost:8002/{bucket}/{key}").
     * @param {string} [endpoint.RestUrl] - REST URL (defaults to "http://localhost:8001/").
     * @param {string} [endpoint.BucketName] - Bucket name (defaults to "data").
     * @param {string} [endpoint.Region] - Region (defaults to "us-west-1").
     * @param {string} [endpoint.AccessKey] - Access key.
     * @param {string} [endpoint.SecretKey] - Secret key.
     * @param {string} [endpoint.ApiKey] - API key.
     * @param {Date} [endpoint.CreatedUtc] - Created date (defaults to current UTC time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<ViewEndpoint>} - View endpoint.
     */
    createViewEndpoint(endpoint?: {
        GUID?: string;
        TenantGUID?: string;
        OwnerGUID?: string;
        Name?: string;
        UseSsl?: boolean;
        S3Url?: string;
        S3BaseUrl?: string;
        RestUrl?: string;
        BucketName?: string;
        Region?: string;
        AccessKey?: string;
        SecretKey?: string;
        ApiKey?: string;
        CreatedUtc?: Date;
    }, cancelToken?: object): Promise<ViewEndpoint>;
    /**
     * Check if a View endpoint exists.
     * @param {string} guid - GUID.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} - True if exists.
     */
    existsViewEndpoint(guid: string, cancelToken?: object): Promise<boolean>;
    /**
     * Read a View endpoint.
     * @param {string} guid - GUID.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<ViewEndpoint>} - View endpoint.
     */
    retrieveViewEndpoint(guid: string, cancelToken?: object): Promise<ViewEndpoint>;
    /**
     * Read View endpoints.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<ViewEndpoint[]>} - View endpoints.
     */
    retrieveViewEndpoints(cancelToken?: object): Promise<ViewEndpoint[]>;
    /**
     * Update a View endpoint.
     * @param {Object} [endpoint] - Optional parameters.
     * @param {string} [endpoint.GUID] - GUID (automatically generated if not provided).
     * @param {string} [endpoint.TenantGUID] - Tenant GUID (automatically generated if not provided).
     * @param {string} [endpoint.OwnerGUID] - Owner GUID (automatically generated if not provided).
     * @param {string} [endpoint.Name] - Name of the view endpoint (defaults to "My View endpoint").
     * @param {boolean} [endpoint.UseSsl] - Boolean flag to enable or disable SSL (defaults to false).
     * @param {string} [endpoint.S3Url] - S3 URL (defaults to "http://localhost:8002/").
     * @param {string} [endpoint.S3BaseUrl] - S3 base URL (defaults to "http://localhost:8002/{bucket}/{key}").
     * @param {string} [endpoint.RestUrl] - REST URL (defaults to "http://localhost:8001/").
     * @param {string} [endpoint.BucketName] - Bucket name (defaults to "data").
     * @param {string} [endpoint.Region] - Region (defaults to "us-west-1").
     * @param {string} [endpoint.AccessKey] - Access key.
     * @param {string} [endpoint.SecretKey] - Secret key.
     * @param {string} [endpoint.ApiKey] - API key.
     * @param {Date} [endpoint.CreatedUtc] - Created date (defaults to current UTC time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<ViewEndpoint>} - View endpoint.
     */
    updateViewEndpoint(endpoint?: {
        GUID?: string;
        TenantGUID?: string;
        OwnerGUID?: string;
        Name?: string;
        UseSsl?: boolean;
        S3Url?: string;
        S3BaseUrl?: string;
        RestUrl?: string;
        BucketName?: string;
        Region?: string;
        AccessKey?: string;
        SecretKey?: string;
        ApiKey?: string;
        CreatedUtc?: Date;
    }, cancelToken?: object): Promise<ViewEndpoint>;
    /**
     * Delete a View endpoint.
     * @param {string} guid - GUID.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>}
     */
    deleteViewEndpoint(guid: string, cancelToken?: object): Promise<void>;
    /**
     * Enumerate BLOBs.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    enumerateBlobs: (cancelToken?: object) => Promise<EnumerationResult | null | ApiErrorResponse>;
    /**
     * Retrieve a list of blobs.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<Blob>|ApiErrorResponse>} A promise resolving to an array of Blob objects.
     */
    retrieveBlobs: (cancelToken?: object) => Promise<Array<Blob> | ApiErrorResponse>;
    /**
     * Retrieve a blob by its GUID.
     *
     * @param {string} guid - The GUID of the blob to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Blob|null|ApiErrorResponse>} A promise resolving to the Blob object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveBlob: (guid: string, cancelToken?: object) => Promise<Blob | null | ApiErrorResponse>;
    /**
     * Retrieve a blob with data by its GUID.
     *
     * @param {string} guid - The GUID of the blob to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Blob|null|ApiErrorResponse>} A promise resolving to the Blob object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveBlobIncludeData: (guid: string, cancelToken?: object) => Promise<Blob | null | ApiErrorResponse>;
    /**
     * Write BLOB data.
     * @param {Object} blob Information about the blob.
     * @param {string} blob.ContentType - Content type of the BLOB.
     * @param {string} blob.Name - Name of the BLOB.
     * @param {string} blob.Description - Description of the BLOB.
     * @param {string} blob.RefObjType - Object type to which this BLOB refers.
     * @param {string} blob.RefObjGUID - Globally-unique identifier of the object to which this BLOB refers.
     * @param {Uint8Array} blob.Data - BLOB data.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
     * @throws {Error} If the node is null or empty.
     */
    writeBlob: (blob: {
        ContentType: string;
        Name: string;
        Description: string;
        RefObjType: string;
        RefObjGUID: string;
        Data: Uint8Array;
    }, cancelToken?: object) => Promise<Node | null | ApiErrorResponse>;
    /**
     * Update a BLOB.
     *
     * @param {Object} blob - Information about the blob to update.
     * @param {string} blob.GUID - GUID of the BLOB to update.
     * @param {string} [blob.ContentType] - Content type of the BLOB.
     * @param {string} [blob.Name] - Name of the BLOB.
     * @param {string} [blob.Description] - Description of the BLOB.
     * @param {string} [blob.RefObjType] - Object type to which this BLOB refers.
     * @param {string} [blob.RefObjGUID] - Globally-unique identifier of the object to which this BLOB refers.
     * @param {Uint8Array} [blob.Data] - BLOB data.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Blob|null|ApiErrorResponse>} A promise resolving to the updated Blob object or null if update fails.
     * @throws {Error} If the blob is null or empty.
     */
    updateBlob: (blob: {
        GUID: string;
        ContentType?: string;
        Name?: string;
        Description?: string;
        RefObjType?: string;
        RefObjGUID?: string;
        Data?: Uint8Array;
    }, cancelToken?: object) => Promise<Blob | null | ApiErrorResponse>;
    /**
     * Delete a BLOB.
     *
     * @param {string} guid - The GUID of the BLOB to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Blob|null|ApiErrorResponse>} A promise resolving to the Blob object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    deleteBlob: (guid: string, cancelToken?: object) => Promise<Blob | null | ApiErrorResponse>;
    /**
     * Check if a BLOB exists by its GUID.
     *
     * @param {string} guid - The GUID of the BLOB to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Blob|null|ApiErrorResponse>} A promise resolving to the Blob object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    existsBlob: (guid: string, cancelToken?: object) => Promise<Blob | null | ApiErrorResponse>;
    /**
     * Retrieve tenants for email.
     *
     * @param {object} hedars - Headers for custom authentication.
     * @param {object} hedars.email - email to get tenants
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<TenantMetadata[]|ApiErrorResponse>} A promise resolving to an array of TenantMetadata objects or an error response if not found.
     * @throws {Error} If the email is null or empty.
     */
    retrieveTenantsForEmail: (email: any, cancelToken?: object) => Promise<TenantMetadata[] | ApiErrorResponse>;
    /**
     * Generate authentication token (using password)
     *
     * @param {Object} headers - Headers for custom authentication.
     * @param {string} headers.email - The email address used to authenticate the tenant.
     * @param {string} headers.password - The password for the tenant's account.
     * @param {string} headers.tenantGUID - The GUID of the tenant for which the token is being generated.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
     * @throws {Error} If the email is null or empty or if the password is null or empty or if the tenantGUID is null or empty.
     */
    generateAuthenticationTokenByPassword: ({ email, password, tenantGUID }: {
        email: string;
        password: string;
        tenantGUID: string;
    }, cancelToken?: object) => Promise<{
        TimestampUtc: string;
        ExpirationUtc: string;
        IsExpired: boolean;
        Token: string;
        Valid: boolean;
    } | ApiErrorResponse>;
    /**
     * Generate authentication token (using password SHA-256)
     *
     * @param {Object} headers - Headers for custom authentication.
     * @param {string} headers.email - The email address used to authenticate the tenant.
     * @param {string} headers.passwordSHA256 - The passwordSHA256 for the tenant's account.
     * @param {string} headers.tenantGUID - The GUID of the tenant for which the token is being generated.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
     * @throws {Error} If the email is null or empty.
     */
    generateAuthenticationTokenBySHA256: ({ email, passwordSHA256, tenantGUID }: {
        email: string;
        passwordSHA256: string;
        tenantGUID: string;
    }, cancelToken?: object) => Promise<{
        TimestampUtc: string;
        ExpirationUtc: string;
        IsExpired: boolean;
        Token: string;
        Valid: boolean;
    } | ApiErrorResponse>;
    /**
     * Generate administrator token (using password)
     *
     * @param {Object} headers - Headers for custom authentication.
     * @param {string} headers.email - The email address used to authenticate the administrator.
     * @param {string} headers.password - The password for the administrator account.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
      @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
     * @throws {Error} If the email is null or empty or if the password is null or empty.
     */
    generateAdministratorToken: ({ email, password }: {
        email: string;
        password: string;
    }, cancelToken?: object) => Promise<{
        TimestampUtc: string;
        ExpirationUtc: string;
        IsExpired: boolean;
        Token: string;
        Valid: boolean;
    } | ApiErrorResponse>;
    /**
     * Generate administrator token (using password SHA-256)
     *
     * @param {Object} headers - Headers for custom authentication.
     * @param {string} headers.email - The admin email address used to authenticate the administrator.
     * @param {string} headers.passwordSHA256 - The admin passwordSHA256 for the administrator account.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
     * @throws {Error} If the email is null or empty or if the passwordSHA256 is null or empty.
     */
    generateAdministratorTokenBySHA256: ({ email, passwordSHA256 }: {
        email: string;
        passwordSHA256: string;
    }, cancelToken?: object) => Promise<{
        TimestampUtc: string;
        ExpirationUtc: string;
        IsExpired: boolean;
        Token: string;
        Valid: boolean;
    } | ApiErrorResponse>;
    /**
     * Validate authentication token
     *
     * @param {Object} headers - Headers for custom authentication.
     * @param {string} headers.token - The token to get validate the token.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
     * @throws {Error} If the token is null or empty.
     */
    validateAuthenticationToken: ({ token }: {
        token: string;
    }, cancelToken?: object) => Promise<{
        TimestampUtc: string;
        ExpirationUtc: string;
        IsExpired: boolean;
        Token: string;
        Valid: boolean;
    } | ApiErrorResponse>;
    /**
     * Retrieve token details
     *
     * @param {Object} headers - Headers for custom authentication.
     * @param {string} headers.token - The token to get validate the token.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
     * @throws {Error} If the token is null or empty.
     */
    retrieveTokenDetails: ({ token }: {
        token: string;
    }, cancelToken?: object) => Promise<{
        TimestampUtc: string;
        ExpirationUtc: string;
        IsExpired: boolean;
        Token: string;
        Valid: boolean;
    } | ApiErrorResponse>;
}
import ViewSdkBase from './ViewSDKBase';
import EnumerationResult from '../models/EnumerationResult';
import TenantMetadata from '../models/TenantMetadata';
import Credential from '../models/Credential';
import UserMaster from '../models/UserMaster';
import EncryptionKey from '../models/EncryptionKey';
import VectorRepository from '../models/VectorRepository';
import GraphRepository from '../models/GraphRepository';
import BucketMetadata from '../models/BucketMetadata';
import Collection from '../models/Collection';
import CollectionStatistics from '../models/CollectionStatistics';
import ObjectLock from '../models/ObjectLock';
import MetadataRule from '../models/MetadataRule';
import EmbeddingsRule from '../models/EmbeddingsRule';
import EmbeddingsResult from '../models/EmbeddingsResult';
import WebhookEvent from '../models/WebhookEvent';
import WebhookRule from '../models/WebhookRule';
import WebhookTarget from '../models/WebhookTarget';
import ViewEndpoint from '../models/ViewEndpoint';
import Blob from '../models/Blob';
