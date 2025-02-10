import ViewSdkBase from '../ViewSDKBase';
import LexiEmbeddingsResponse from '../../models/LexiEmbeddingsResponse';
import { ApiErrorEnum } from '../../enums/ApiErrorEnum';
import { SeverityEnum } from '../../enums/SeverityEnum';
import { LoggerInstance } from '../../utils/Logger';

export default class ViewLexiEmbeddingsSdk extends ViewSdkBase {
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
   * Process Lexi Embeddings document.
   * @param {Object} tenant - Tenant metadata.
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
   * @param {Object} collection - Collection metadata.
   * @param {number} collection.id - Collection ID.
   * @param {string} collection.GUID - Collection GUID (automatically generated if not provided).
   * @param {string} collection.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} collection.Name - Name of the collection.
   * @param {boolean} collection.AllowOverwrites - Indicates whether source documents can be overwritten (default is true).
   * @param {string} collection.AdditionalData - Additional data (optional).
   * @param {Date} collection.CreatedUtc - Creation timestamp in UTC.
   * @param {Object} results - Search results.
   * @param {boolean} results.Success - Indicates if the parser was successful.
   * @param {Timestamp} results.Timestamp - Timestamps.
   * @param {string} results.DataFlowRequestGUID - Data flow request GUID.
   * @param {boolean} results.EndOfResults - Boolean indicating end of results.
   * @param {string} results.ContinuationToken - Continuation token for search continuation.
   * @param {number} results.RecordsRemaining - Number of candidate records remaining in the search.
   * @param {Array<Object>} results.Documents - Documents that matched the query.
   * @param {Array<Object>} results.Embeddings - Embeddings documents generated from matched documents.
   * @param {Object} embedRule - Embeddings rule.
   * @param {string} embedRule.GUID - Embeddings rule GUID (automatically generated if not provided).
   * @param {string} embedRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} embedRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} embedRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} embedRule.Name - Name of the rule (default is null).
   * @param {string} embedRule.ContentType - Content type (default is "text/plain").
   * @param {string} embedRule.Prefix - Prefix (default is null).
   * @param {string} embedRule.Suffix - Suffix (default is null).
   * @param {string} embedRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {string} embedRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {string} embedRule.VectorRepositoryGUID - Vector repository GUID (default is null).
   * @param {string} embedRule.DataFlowEndpoint - Data flow endpoint (default is localhost).
   * @param {string} embedRule.EmbeddingsGenerator - Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy).
   * @param {string} embedRule.GeneratorUrl - Embeddings generator URL (default is localhost).
   * @param {string} embedRule.GeneratorApiKey - Embeddings provider API key (default is null).
   * @param {number} embedRule.BatchSize - Maximum number of chunks to process per request (default is 16).
   * @param {number} embedRule.MaxGeneratorTasks - Maximum number of parallel embeddings generation tasks (default is 16).
   * @param {number} embedRule.MaxRetries - Maximum number of retries per task (default is 3).
   * @param {number} embedRule.MaxFailures - Maximum number of failures before failing the operation (default is 3).
   * @param {string} embedRule.VectorStoreUrl - Vector store URL (default is localhost).
   * @param {number} embedRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} embedRule.RetentionMinutes - Minutes to retain the generated document (default is null).
   * @param {Date} embedRule.CreatedUtc - Creation timestamp (default is current UTC time).
   * @param {Object} vectorRepo - Vector repository.
   * @param {string} vectorRepo.GUID - Repository GUID (automatically generated if not provided).
   * @param {string} vectorRepo.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} vectorRepo.name - Name of the repository (default is 'My vector repository').
   * @param {string} vectorRepo.repositoryType - Type of vector repository.
   * @param {string} vectorRepo.endpointUrl - Endpoint URL for the repository.
   * @param {string} vectorRepo.apiKey - API key for authentication.
   * @param {string} vectorRepo.model - Embedding model to be used (default is 'all-MiniLM-L6-v2').
   * @param {number} vectorRepo.dimensionality - Dimensionality of embeddings.
   * @param {string} vectorRepo.databaseHostname - Hostname of the database.
   * @param {string} vectorRepo.databaseName - Name of the database.
   * @param {string} vectorRepo.databaseTable - Table name in the database.
   * @param {number} vectorRepo.databasePort - Database port.
   * @param {string} vectorRepo.databaseUser - Database username.
   * @param {string} vectorRepo.databasePassword - Database password.
   * @param {string} vectorRepo.promptPrefix - Prefix to prepend to prompts.
   * @param {string} vectorRepo.promptSuffix - Suffix to append to prompts.
   * @param {Date} vectorRepo.createdUtc - Creation timestamp in UTC.
   * @param {Object} graphRepo - Graph repository.
   * @param {string} graphRepo.GUID - GUID of the graph repository (auto-generated if not provided).
   * @param {string} graphRepo.TenantGUID - Tenant GUID (auto-generated if not provided).
   * @param {string} graphRepo.Name - Name of the graph.
   * @param {string} graphRepo.RepositoryType - Type of graph graph.
   * @param {string} graphRepo.EndpointUrl - Endpoint URL.
   * @param {string} graphRepo.ApiKey - API key for the graph.
   * @param {string} graphRepo.Username - Username for authentication.
   * @param {string} graphRepo.Password - Password for authentication.
   * @param {string} graphRepo.Hostname - Hostname for the graph.
   * @param {number} graphRepo.Port - Port number for the graph (default is 0).
   * @param {string} graphRepo.GraphIdentifier - Identifier of the graph.
   * @param {Date} graphRepo.CreatedUtc - Creation timestamp in UTC (defaults to current UTC time).
   * @param {AbortSignal} [token] - Cancellation token.
   */
  processLexiEmbeddings = async (tenant, collection, results, embedRule, vectorRepo, graphRepo, token = null) => {
    if (!tenant) throw new Error('Tenant is required.');
    if (!results) throw new Error('Search results are required.');
    if (!embedRule) throw new Error('Embeddings rule is required.');
    if (!collection) throw new Error('Collection is required.');
    if (!graphRepo) throw new Error('Graph repository is required.');
    if (!vectorRepo) throw new Error('Vector repository is required.');

    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/processing/lexiprocessing';
    try {
      // Prepare the request payload
      const procReq = {
        Tenant: tenant,
        Collection: collection,
        Results: results,
        EmbeddingsRule: embedRule,
        VectorRepository: vectorRepo,
        GraphRepository: graphRepo,
      };

      // Serialize the payload to JSON
      const jsonPayload = JSON.stringify(procReq);

      // Log the serialized request if needed
      if (this.LogRequests) {
        LoggerInstance.log(SeverityEnum.Debug, `Serialized request body:\n${jsonPayload}`);
      }

      // Send the request using the post method
      const response = await this.post(url, jsonPayload, LexiEmbeddingsResponse, token);

      if (this.LogResponses) {
        LoggerInstance.log(SeverityEnum.Debug, `Response :\n${JSON.stringify(response)}`);
      }

      if (response) {
        LoggerInstance.log(SeverityEnum.Debug, `Success reported from ${url}`);

        // Return the deserialized response body
        return response;
      } else {
        LoggerInstance.log(SeverityEnum.Warn, `Non-success reported from ${url}`);

        // Handle non-success response
        return response || null;
      }
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Warn, `Exception while interacting with ${url}: ${error.message}`);
      return {
        Success: false,
        Error: {
          ApiErrorEnum: ApiErrorEnum.InternalError,
          ErrorDetails: null,
        },
      };
    }
  };
}
