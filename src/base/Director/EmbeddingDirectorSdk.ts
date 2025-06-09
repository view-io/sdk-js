import { DirectorConnection, DirectorEmbeddingResponse, EmbeddingDirectoryRequest } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export class EmbeddingDirectorSdk extends ViewSdkBase {
  /**
   * Constructs a new EmbeddingDirectorSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  /**
   * Generate Embedding Director.
   * @param {EmbeddingDirectoryRequest} [params] - parameters.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DirectorEmbeddingResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  generateEmbedding = async (
    params: EmbeddingDirectoryRequest,
    cancelToken?: AbortController
  ): Promise<DirectorEmbeddingResponse> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/embeddings/`;
    return await this.postCreateResource(url, params, cancelToken);
  };

  /**
   * Retrieve Connections.
   * @returns {Promise<Array<DirectorConnection>>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  retrieveConnections = async (cancelToken?: AbortController): Promise<DirectorConnection[]> => {
    const url = `${this.config.endpoint}/v1.0/connections/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
