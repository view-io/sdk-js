import { v4 as uuidV4 } from 'uuid';
import { VectorRepositoryTypeEnum } from '../enums/VectorRepositoryTypeEnum';

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
  constructor(repo = {}) {
    const {
      GUID,
      TenantGUID,
      Name,
      RepositoryType,
      Model,
      Dimensionality,
      DatabaseHostname,
      DatabaseName,
      SchemaName,
      DatabaseTable,
      DatabasePort,
      DatabaseUser,
      DatabasePassword,
      CreatedUtc,
    } = repo;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.Name = Name;
    this.RepositoryType = RepositoryType;
    this.Model = Model;
    this.Dimensionality = Dimensionality;
    this.DatabaseHostname = DatabaseHostname;
    this.DatabaseName = DatabaseName;
    this.SchemaName = SchemaName;
    this.DatabaseTable = DatabaseTable;
    this.DatabasePort = DatabasePort;
    this.DatabaseUser = DatabaseUser;
    this.DatabasePassword = DatabasePassword;
    this.CreatedUtc = CreatedUtc;
  }
}
