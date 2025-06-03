import { v4 as uuidV4 } from 'uuid';

export default class UdrDataTableRequest {
  /**
   * @param {Object} udrDataTableRequest Information about the UDR data table request.
   * @param {string} udrDataTableRequest.GUID - Document GUID (automatically generated if not provided).
   * @param {string} udrDataTableRequest.DatabaseType - Database type (default is "Sqlite").
   * @param {string} udrDataTableRequest.Hostname - Hostname (default is null).
   * @param {number} udrDataTableRequest.Port - Port number (default is 0).
   * @param {string} udrDataTableRequest.Username - Username (default is null).
   * @param {string} udrDataTableRequest.Password - Password (default is null).
   * @param {string} udrDataTableRequest.DatabaseName - Database name (default is null).
   * @param {string} udrDataTableRequest.Query - Query string (default is null).
   * @param {boolean} udrDataTableRequest.IncludeFlattened - Enable flattened representation of the document (default is true).
   * @param {boolean} udrDataTableRequest.CaseInsensitive - Enable case insensitive processing (default is true).
   * @param {number} udrDataTableRequest.TopTerms - Number of top terms to request (default is 10).
   * @param {string} udrDataTableRequest.AdditionalData - Additional data (default is null).
   * @param {Object} udrDataTableRequest.Metadata - Metadata associated with the document (default is an empty object).
   * @param {Uint8Array} udrDataTableRequest.SqliteFileData - Sqlite file data (required).
   */
  constructor(udrDataTableRequest) {
    const {
      GUID = uuidV4(),
      DatabaseType = 'Sqlite',
      Hostname = null,
      Port = 0,
      Username = null,
      Password = null,
      DatabaseName = null,
      Query = null,
      IncludeFlattened = true,
      CaseInsensitive = true,
      TopTerms = 10,
      AdditionalData = null,
      Metadata = {},
      SqliteFileData,
    } = udrDataTableRequest;

    if (!SqliteFileData) throw new Error('SqliteFileData is required.');
    if (!this._isValidDatabaseType(DatabaseType)) {
      throw new Error(`Unknown database type '${DatabaseType}'.`);
    }

    this.GUID = GUID;
    this.DatabaseType = DatabaseType;
    this.Hostname = Hostname;
    this.Port = this._validatePort(Port);
    this.Username = Username;
    this.Password = Password;
    this.DatabaseName = DatabaseName;
    this.Query = Query;
    this.IncludeFlattened = IncludeFlattened;
    this.CaseInsensitive = CaseInsensitive;
    this.TopTerms = this._validateTopTerms(TopTerms);
    this.AdditionalData = AdditionalData;
    this.Metadata = Metadata || {};
    this.SqliteFileData = SqliteFileData;
  }

  _isValidDatabaseType(databaseType) {
    const validDatabaseTypes = ['Mysql', 'Postgresql', 'SqlServer', 'Sqlite'];
    return validDatabaseTypes.includes(databaseType);
  }

  _validatePort(port) {
    if (port < 0 || port > 65535) {
      throw new RangeError('Port must be between 0 and 65535.');
    }
    return port;
  }

  _validateTopTerms(topTerms) {
    if (topTerms < 0) {
      throw new RangeError('TopTerms must be greater than or equal to 0.');
    }
    return topTerms;
  }
}
