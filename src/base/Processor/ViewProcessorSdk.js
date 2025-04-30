import ViewSdkBase from '../ViewSDKBase';
import ProcessorResponse from '../../models/ProcessorResponse';
import SemanticCellResponse from '../../models/SemanticCellResponse';
import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';
import TypeResult from '../../models/TypeResult';
import LexiEmbeddingsResponse from '../../models/LexiEmbeddingsResponse';
import { UdrDocument } from '../../models/UdrDocument';

export default class ViewProcessorSdk extends ViewSdkBase {
  /**
   * Constructs a new ViewProcessorSdk.
   * @alias module:base/ViewProcessorSdk
   * @class
   * @param {string} tenantGuid - Tenant GUID.
   * @param {string} accessKey - Access key.
   * @param {string} endpoint - Endpoint URL.
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
  }

  /**
   * Process a document. This variant is used by the storage server.
   * @param {object} payload - The payload to be processed.
   * @param {AbortSignal} token - Cancellation token.
   */
  async processingPipeline(payload, token = null) {
    if (!payload) throw new Error('payload is required.');
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/processing`;
    return await this.post(url, payload, ProcessorResponse, token);
  }

  /**
   * Cleanup a document.
   * @param {object} payload - The payload to be processed.
   * @param {AbortSignal} token - Cancellation token.
   */
  async cleanupPipeline(payload, token = null) {
    if (!payload) throw new Error('payload is required.');
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/processing/cleanup`;
    return await this.post(url, payload, ProcessorResponse, token);
  }

  /**
   * Determine a document type.
   * @param {object} data - The data to send in the request body.
   * @param {object} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<TypeResult|null>} The result of the document type detection.
   */
  typeDetection = async (data, cancelToken) => {
    if (!data) {
      GenExceptionHandlersInstance.ArgumentNullException('data');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/processing/typedetection`;
    return await this.post(url, data, TypeResult, cancelToken);
  };

  /**
   * Extract semantic cells from a document.
   * @param {object} data - The data to send in the request body.
   * @param {object} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<SemanticCellResponse|null>} The result of the semantic cell extraction.
   */
  extractSemanticCells = async (data, cancelToken) => {
    if (!data) {
      GenExceptionHandlersInstance.ArgumentNullException('data');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/processing/semanticcell`;
    return await this.post(url, data, SemanticCellResponse, cancelToken);
  };

  /**
   * Generate a UDR from a document.
   * @param {object} data - The data to send in the request body.
   * @param {object} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<UdrResponse|null>} The result of the UDR generation.
   */
  generateUdr = async (data, cancelToken) => {
    if (!data) {
      GenExceptionHandlersInstance.ArgumentNullException('data');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/processing/udr`;
    return await this.post(url, data, UdrDocument, cancelToken);
  };

  /**
   * Generate Lexi embeddings from a document.
   * @param {object} data - The data to send in the request body.
   * @param {object} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<LexiEmbeddingsResponse|null>} The result of the Lexi embeddings generation.
   */
  generateLexiEmbeddings = async (data, cancelToken) => {
    if (!data) {
      GenExceptionHandlersInstance.ArgumentNullException('data');
    }

    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/processing/lexiprocessing`;
    return await this.post(url, data, LexiEmbeddingsResponse, cancelToken);
  };
}
