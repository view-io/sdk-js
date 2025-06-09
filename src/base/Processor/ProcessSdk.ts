import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { LexiEmbeddingsResponse, ProcessorConfig, SemanticCellResponse, TypeResult, UdrDocument } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class ProcessSdk extends ViewSdkBase {
  /**
   * Constructs a new ProcessSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Process a document. This variant is used by the storage server.
   * @param {ProcessorConfig} payload - The payload to be processed.
   * @param {AbortSignal} token - Cancellation token.
   */
  processingPipeline = async (payload: ProcessorConfig, token: AbortController): Promise<ProcessorConfig> => {
    if (!payload) GenericExceptionHandlers.ArgumentNullException('payload');
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing`;
    return await this.postCreateResource(url, payload, token);
  };

  /**
   * Cleanup a document.
   * @param {ProcessorConfig} payload - The payload to be processed.
   * @param {AbortSignal} token - Cancellation  token.
   */
  cleanupPipeline = async (payload: ProcessorConfig, token: AbortController): Promise<ProcessorConfig> => {
    if (!payload) GenericExceptionHandlers.ArgumentNullException('payload');
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/cleanup`;
    return await this.postCreateResource(url, payload, token);
  };

  /**
   * Determine a document type.
   * @param {object} data - The data to send in the request body.
   * @param {AbortController} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<TypeResult>} The result of the document type detection.
   */
  typeDetection = async (data: object, cancelToken?: AbortController): Promise<TypeResult> => {
    if (!data) GenericExceptionHandlers.ArgumentNullException('data');

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/typedetection`;
    return await this.postCreateResource(url, data, cancelToken);
  };

  /**
   * Extract semantic cells from a document.
   * @param {object} data - The data to send in the request body.
   * @param {AbortController} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<SemanticCellResponse>} The result of the semantic cell extraction.
   */
  extractSemanticCells = async (data: object, cancelToken?: AbortController): Promise<SemanticCellResponse> => {
    if (!data) GenericExceptionHandlers.ArgumentNullException('data');

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/semanticcell`;
    return await this.postCreateResource(url, data, cancelToken);
  };

  /**
   * Generate a UDR from a document.
   * @param {object} data - The data to send in the request body.
   * @param {object} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<UdrDocument>} The result of the UDR generation.
   */
  generateUdr = async (data: object, cancelToken?: AbortController): Promise<UdrDocument> => {
    if (!data) GenericExceptionHandlers.ArgumentNullException('data');

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/udr`;
    return await this.postCreateResource(url, data, cancelToken);
  };

  /**
   * Generate Lexi embeddings from a document.
   * @param {object} data - The data to send in the request body.
   * @param {AbortController} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<LexiEmbeddingsResponse>} The result of the Lexi embeddings generation.
   */
  generateLexiEmbeddings = async (data: object, cancelToken?: AbortController): Promise<LexiEmbeddingsResponse> => {
    if (!data) GenericExceptionHandlers.ArgumentNullException('data');

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/lexiprocessing`;
    return await this.postCreateResource(url, data, cancelToken);
  };
}
