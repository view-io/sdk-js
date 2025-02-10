import DataRepository from '../../models/DataRepository';
import DirectorEmbeddingResponse from '../../models/DirectorEmbeddingResponse';
import ViewSdkBase from '../ViewSDKBase';

/**
 * Director service.
 * @module base/ViewDirectorSdk
 * @version 0.1.0
 */
export default class ViewDirectorSdk extends ViewSdkBase {
  /**
   * Constructs a new DirectorApi.
   * @alias module:base/ViewDirectorSdk
   * @class
   * @param {string} tenantGuid - Tenant GUID.
   * @param {string} accessKey - Access key.
   * @param {string} endpoint - Endpoint URL .
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
    this.Header = '[ViewDirectorSdk] ';
  }

  /**
   * Generate Embedding Director.
   * @param {object} [params] - parameters.
   * @param {string} [params.Model] - Embedding model.
   * @param {string} [params.ApiKey] - API key.
   * @param {string[]} [params.Contents] - List of text Contents.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DirectorEmbeddingResponse|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  generateEmbedding = async (params, cancelToken) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/embeddings/`;
    return await this.post(url, params, DirectorEmbeddingResponse, cancelToken);
  };

  /**
   * Retrieve Connections.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Connection>|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  retrieveConnections = async (token, cancelToken) => {
    const url = `${this.endpoint}/v1.0/connections/`;
    return await this.retrieve(url, DataRepository, cancelToken, { 'x-token': token });
  };
}
