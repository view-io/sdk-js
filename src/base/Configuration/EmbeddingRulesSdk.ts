import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EmbeddingsRule } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class EmbeddingRulesSdk extends ViewSdkBase {
  /**
   * Constructs a new EmbeddingRulesSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  // region Embeddings-Rules

  /**
   * Create a new embeddings rule.
   *
   * @param {EmbeddingsRule} embeddingsRule Information about the embeddings rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsRule|null|ApiErrorResponse>} A promise resolving to the created EmbeddingsRule object or null.
   * @throws {ApiErrorResponse} If the rule is null.
   */
  createEmbeddingsRule = async (embeddingsRule: EmbeddingsRule, cancelToken: AbortController) => {
    if (!embeddingsRule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules';
    return await this.create(url, embeddingsRule, cancelToken);
  };

  /**
   * Check if an embeddings rule exists by its GUID.
   *
   * @param {string} guid - The GUID of the embeddings rule to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the embeddings rule exists, otherwise false.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  existsEmbeddingsRule = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve an embeddings rule by its GUID.
   *
   * @param {string} guid - The GUID of the embeddings rule to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsRule|null|ApiErrorResponse>} A promise resolving to the EmbeddingsRule object or null.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveEmbeddingsRule = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve all embeddings rules.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<EmbeddingsRule>|ApiErrorResponse>} A promise resolving to an array of EmbeddingsRule objects.
   */
  retrieveEmbeddingsRules = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update an existing embeddings rule.
   *
   * @param {EmbeddingsRule} embeddingsRule Information about the embeddings rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsRule|null|ApiErrorResponse>} A promise resolving to the updated EmbeddingsRule object or null.
   * @throws {ApiErrorResponse} If the rule is null.
   */
  updateEmbeddingsRule = async (embeddingsRule: EmbeddingsRule, cancelToken: AbortController) => {
    if (!embeddingsRule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules/' + embeddingsRule.GUID;
    return await this.update(url, embeddingsRule, cancelToken);
  };

  /**
   * Delete an embeddings rule by its GUID.
   *
   * @param {string} guid - The GUID of the embeddings rule to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  deleteEmbeddingsRule = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules/' + guid;
    return await this.delete(url, cancelToken);
  };

  /**
   * Enumerate Embeddings Rules.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsResult|null|ApiErrorResponse>} A promise resolving to the created EmbeddingsResult object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  enumerateEmbeddingsRules = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/embeddingsrules/`;
    return await this.retrieve(url, cancelToken);
  };
}
