import ViewSdkBase from '../ViewSDKBase';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { SdkConfiguration } from '../SdkConfiguration';
import { ProcessorConfig } from '../../types';
export default class ViewProcessorSdk extends ViewSdkBase {
  /**
   * Constructs a new ViewProcessorSdk.
   * @alias module:base/ViewProcessorSdk
   * @class
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
  async processingPipeline(payload: ProcessorConfig, token: AbortController) {
    if (!payload) GenericExceptionHandlers.ArgumentNullException('payload');
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing`;
    return await this.postCreate(url, payload, token);
  }

  /**
   * Cleanup a document.
   * @param {ProcessorConfig} payload - The payload to be processed.
   * @param {AbortSignal} token - Cancellation  token.
   */
  async cleanupPipeline(payload: ProcessorConfig, token: AbortController) {
    if (!payload) GenericExceptionHandlers.ArgumentNullException('payload');
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/cleanup`;
    return await this.postCreate(url, payload, token);
  }

  /**
   * Determine a document type.
   * @param {object} data - The data to send in the request body.
   * @param {AbortController} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<TypeResult|null>} The result of the document type detection.
   */
  typeDetection = async (data: object, cancelToken: AbortController) => {
    if (!data) GenericExceptionHandlers.ArgumentNullException('data');

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/typedetection`;
    return await this.postCreate(url, data, cancelToken);
  };

  /**
   * Extract semantic cells from a document.
   * @param {object} data - The data to send in the request body.
   * @param {AbortController} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<SemanticCellResponse|null>} The result of the semantic cell extraction.
   */
  extractSemanticCells = async (data: object, cancelToken: AbortController) => {
    if (!data) GenericExceptionHandlers.ArgumentNullException('data');

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/semanticcell`;
    return await this.postCreate(url, data, cancelToken);
  };

  /**
   * Generate a UDR from a document.
   * @param {object} data - The data to send in the request body.
   * @param {object} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<UdrResponse|null>} The result of the UDR generation.
   */
  generateUdr = async (data: object, cancelToken: AbortController) => {
    if (!data) GenericExceptionHandlers.ArgumentNullException('data');

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/udr`;
    return await this.postCreate(url, data, cancelToken);
  };

  /**
   * Generate Lexi embeddings from a document.
   * @param {object} data - The data to send in the request body.
   * @param {AbortController} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<LexiEmbeddingsResponse|null>} The result of the Lexi embeddings generation.
   */
  generateLexiEmbeddings = async (data: object, cancelToken: AbortController) => {
    if (!data) GenericExceptionHandlers.ArgumentNullException('data');

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/processing/lexiprocessing`;
    return await this.postCreate(url, data, cancelToken);
  };
}
