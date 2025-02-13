import ViewSdkBase from '../ViewSDKBase';
import { SeverityEnum } from '../../enums/SeverityEnum';
import UdrDocument from '../../models/UdrDocument';
import { ApiErrorEnum } from '../../enums/ApiErrorEnum';
import { LoggerInstance } from '../../utils/Logger';
import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';

export default class ViewUdrGeneratorSdk extends ViewSdkBase {
  /**
   * Constructs a new ProcessorApi.
   * @alias module:base/ProcessorApi
   * @class
   * @param {string} tenantGuid
   * @param {string} accessKey
   * @param {string} endpoint
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
  }
  /**
   * @constructor
   * @param {string} guid
   * @param {CancellationToken} token
   * @param {string} endpoint
   */

  /**
   * Process Udr Generator.
   * @param {Object} doc - The document request object to process.
   * @param {string} [doc.GUID] - The GUID of the document (automatically generated if not provided).
   * @param {string} [doc.Type=DocumentTypeEnum.Unknown] - The type of the document (default is `DocumentTypeEnum.Unknown`).
   * @param {string} [doc.Key=null] - The key associated with the document (default is `null`).
   * @param {string} [doc.ContentType=null] - The content type of the document (default is `null`).
   * @param {string} [doc.SemanticCellSplitCharacter='\r\n'] - The character used to split semantic cells (default is `'\r\n'`).
   * @param {number} [doc.MaxChunkContentLength=512] - The maximum chunk content length (default is `512`).
   * @param {boolean} [doc.IncludeFlattened=true] - Flag to enable flattened representation of the document (default is `true`).
   * @param {boolean} [doc.CaseInsensitive=true] - Flag to enable case-insensitive processing (default is `true`).
   * @param {number} [doc.TopTerms=10] - The number of top terms to request (default is `10`).
   * @param {string} [doc.AdditionalData=null] - Additional data associated with the document (default is `null`).
   * @param {Object} [doc.Metadata={}] - Metadata associated with the document (default is an empty object).
   * @param {Uint8Array} doc.Data - The data of the document (this is required).
   * @param {MetadataRule} [doc.MetadataRule=null] - Metadata rule associated with the document (default is `null`).
   * @param {string} [filename] - Filename containing data. Setting this value will overwrite the 'Data' property in the document request.
   * @param {AbortSignal} [token] - Cancellation token.
   * @returns {Promise<UdrDocument>} - Document response.
   */
  async processDocument(doc, filename = null, token = null) {
    if (!doc) throw new Error('Document request is required.');

    // If a filename is provided, read the file data and set it to doc.Data
    if (filename) {
      try {
        const fileData = await this.readFile(filename, token);
        doc.Data = fileData;
      } catch (error) {
        LoggerInstance.log(`Error reading file ${filename}: ${error.message}`);
        return null;
      }
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/processing/udr';

    try {
      // Use the create method to send the PUT request and deserialize the response into UdrDocument
      const result = await this.create(url, doc, UdrDocument, token);
      if (result) {
        LoggerInstance.log(SeverityEnum.Debug, `success reported from ${url}`);
        return result;
      } else {
        LoggerInstance.log(SeverityEnum.Warn, `non-success reported from ${url}`);
        return result || null;
      }
    } catch (error) {
      LoggerInstance.log(ApiErrorEnum.InternalError, `Error while interacting with ${url}: ${error.message}`);
      return null;
    }
  }

  /**
   * Process data table.
   * @param {Object} dt - The data table request object to process.
   * @param {string} dt.GUID - The GUID of the data table request (automatically generated if not provided).
   * @param {string} [dt.DatabaseType='Sqlite'] - The database type (default is `Sqlite`).
   * @param {string} [dt.Hostname=null] - The hostname (default is `null`).
   * @param {number} [dt.Port=0] - The port number (default is `0`).
   * @param {string} [dt.Username=null] - The username (default is `null`).
   * @param {string} [dt.Password=null] - The password (default is `null`).
   * @param {string} [dt.DatabaseName=null] - The database name (default is `null`).
   * @param {string} [dt.Query=null] - The query string (default is `null`).
   * @param {boolean} [dt.IncludeFlattened=true] - Flag to enable flattened representation of the document (default is `true`).
   * @param {boolean} [dt.CaseInsensitive=true] - Flag to enable case-insensitive processing (default is `true`).
   * @param {number} [dt.TopTerms=10] - The number of top terms to request (default is `10`).
   * @param {string} [dt.AdditionalData=null] - Additional data associated with the data table request (default is `null`).
   * @param {Object} [dt.Metadata={}] - Metadata associated with the data table request (default is an empty object).
   * @param {Uint8Array} dt.SqliteFileData - The Sqlite file data (this is required).
   * @param {string} [filename] - Filename containing data.
   * @param {AbortSignal} [token] - Cancellation token.
   * @returns {Promise<UdrDocument>} - Document response.
   */
  async processDataTable(dt, filename = null, token = null) {
    if (!dt) throw new Error('Data table request is required.');
    if (!dt.DatabaseType) throw new Error('DatabaseType is required.');

    // Handle specific conditions for Sqlite database type
    if (dt.DatabaseType === 'Sqlite' && !filename) {
      throw new Error('A filename must be supplied when using Sqlite.');
    }

    if (dt.DatabaseType !== 'Sqlite' && filename) {
      throw new Error('A filename should not be supplied when using a database type other than Sqlite.');
    }
    if (filename) {
      try {
        dt.SqliteFileData = await this.readFile(filename, token);
        LoggerInstance.log(dt, 'datat test');
      } catch (error) {
        LoggerInstance.log(`Error reading file ${filename}: ${error.message}`);
        return null;
      }
    }
    const url = `${this.endpoint}/v1.0/datatable`;

    try {
      const result = await this.create(url, dt, UdrDocument, token);
      if (result) {
        LoggerInstance.log(SeverityEnum.Debug, `success reported from ${url}`);
        return result;
      } else {
        LoggerInstance.log(SeverityEnum.Warn, `non-success reported from ${url}`);
        return result || null;
      }
    } catch (error) {
      LoggerInstance.log(ApiErrorEnum.InternalError, `Error while interacting with ${url}: ${error.message}`);
      return null;
    }
  }

  /**
   * Helper function to read file data.
   * @param {string} filename - Filename containing the data.
   * @param {AbortSignal} [token] - Cancellation token.
   * @returns {Promise<Uint8Array>} - File data.
   */
  async readFile(filename, token) {
    const response = await fetch(filename, { signal: token });
    const arrayBuffer = await response.arrayBuffer();
    return new Uint8Array(arrayBuffer);
  }

  /**
   * Process the provided document object and apply metadata rules and configurations.
   *
   * @param {object} document - The document object to be processed.
   * @param {string} document.GUID - Unique identifier for the document (e.g., "00000000-0000-0000-0000-000000000000").
   * @param {string} document.Key - File name or identifier of the document (e.g., "testfile.text").
   * @param {string} document.ContentType - MIME type of the document content (e.g., "text/plain").
   * @param {string} document.Type - Document type (e.g., "Pdf").
   * @param {boolean} document.IncludeFlattened - Indicates whether flattened metadata should be included in the processing.
   * @param {boolean} document.CaseInsensitive - Indicates whether the metadata processing should be case-insensitive.
   * @param {number} document.TopTerms - Number of top terms to be extracted (e.g., 10).
   * @param {string} document.AdditionalData - Additional information or context related to the document (base64-encoded).
   * @param {object} document.Metadata - Metadata object containing key-value pairs of document metadata.
   * @param {string} document.Metadata.foo - Example metadata field with a value (e.g., "bar").
   * @param {object} document.MetadataRule - Configuration rules for metadata extraction and processing.
   * @param {string} document.MetadataRule.GUID - Unique identifier for the metadata rule.
   * @param {string} document.MetadataRule.TenantGUID - Unique identifier for the tenant (e.g., "default").
   * @param {string} document.MetadataRule.BucketGUID - Unique identifier for the data bucket (e.g., "data").
   * @param {string} document.MetadataRule.OwnerGUID - Unique identifier for the owner of the metadata rule (e.g., "default").
   * @param {string} document.MetadataRule.Name - Name of the metadata rule (e.g., "My metadata rule").
   * @param {string} document.MetadataRule.ContentType - MIME type of the content associated with the rule (e.g., "text/plain").
   * @param {string} document.MetadataRule.UdrEndpoint - API endpoint for processing user-defined rules (e.g., "http://localhost:8000/").
   * @param {string} document.MetadataRule.DataCatalogType - Type of data catalog (e.g., "Lexi").
   * @param {string} document.MetadataRule.DataCatalogEndpoint - API endpoint for the data catalog (e.g., "http://localhost:8000/").
   * @param {string} document.MetadataRule.DataCatalogCollection - Data catalog collection name (e.g., "default").
   * @param {number} document.MetadataRule.TopTerms - Number of top terms to extract in metadata processing.
   * @param {boolean} document.MetadataRule.CaseInsensitive - Indicates whether metadata rule processing is case-insensitive.
   * @param {boolean} document.MetadataRule.IncludeFlattened - Indicates whether flattened metadata should be included in the result.
   * @param {string} document.MetadataRule.TargetBucketGUID - GUID of the target bucket for processed metadata (e.g., "metadata").
   * @param {string} document.Data - Base64-encoded string representing the document content to be analyzed.
   * @param {object} [cancelToken] - (Optional) A cancel token object to abort the request if needed.
   */
  UdrDocument = async (document, cancelToken) => {
    if (!document) {
      GenExceptionHandlersInstance.ArgumentNullException('document');
    }

    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/processing/udr';
    return await this.post(url, document, UdrDocument, cancelToken);
  };
}
