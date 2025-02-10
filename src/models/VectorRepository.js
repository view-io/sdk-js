import { v4 as uuidV4 } from 'uuid';
import { VectorRepositoryTypeEnum } from '../enums/VectorRepositoryTypeEnum';

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
  constructor(repo = {}) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      name = 'My vector repository',
      repositoryType = VectorRepositoryTypeEnum.Pgvector,
      endpointUrl = null,
      apiKey = null,
      model = 'all-MiniLM-L6-v2',
      dimensionality = 384,
      databaseHostname = null,
      databaseName = null,
      databaseTable = null,
      databasePort = 0,
      databaseUser = null,
      databasePassword = null,
      promptPrefix = `Use the following pieces of context to answer the question at the end. Documents are sorted by similarity to the question. If the context is not enough for you to answer the question, politely explain that you don't have relevant context. Do not try to make up an answer.`,
      promptSuffix = null,
      createdUtc = new Date().toISOString,
    } = repo;

    this.GUID = GUID;
    this.tenantGUID = TenantGUID;
    this.name = name;
    this.repositoryType = repositoryType;
    this.endpointUrl = endpointUrl;
    this.apiKey = apiKey;
    this.model = model;
    this.dimensionality = dimensionality;
    this.databaseHostname = databaseHostname;
    this.databaseName = databaseName;
    this.databaseTable = databaseTable;
    this.databasePort = databasePort;
    this.databaseUser = databaseUser;
    this.databasePassword = databasePassword;
    this.promptPrefix = promptPrefix;
    this.promptSuffix = promptSuffix;
    this.createdUtc = createdUtc;
  }

  /**
   * Dimensionality setter with validation.
   * @param {number} value - Dimensionality of the repository.
   */
  set dimensionality(value) {
    if (value < 1) {
      throw new Error('Dimensionality must be greater than 0');
    }
    this._dimensionality = value;
  }

  /**
   * Dimensionality getter.
   */
  get dimensionality() {
    return this._dimensionality;
  }

  /**
   * Database port setter with validation.
   * @param {number} value - Port number.
   */
  set databasePort(value) {
    if (value < 0 || value > 65535) {
      throw new Error('Database port must be between 0 and 65535');
    }
    this._databasePort = value;
  }

  /**
   * Database port getter.
   */
  get databasePort() {
    return this._databasePort;
  }
}
