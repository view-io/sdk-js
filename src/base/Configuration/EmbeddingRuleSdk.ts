import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EmbeddingRuleCreateRequest, EmbeddingsRule, EnumerationResult } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class EmbeddingRuleSdk extends ViewSdkBase {
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
   * @param {EmbeddingRuleCreateRequest} embeddingsRule Information about the embeddings rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsRule>} A promise resolving to the created EmbeddingsRule object or null.
   * @throws {MethodError} If the rule is null.
   */
  create = async (
    embeddingsRule: EmbeddingRuleCreateRequest,
    cancelToken?: AbortController
  ): Promise<EmbeddingsRule> => {
    if (!embeddingsRule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules';
    return await this.createResource(url, embeddingsRule, cancelToken);
  };

  /**
   * Check if an embeddings rule exists by its GUID.
   *
   * @param {string} guid - The GUID of the embeddings rule to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the embeddings rule exists, otherwise false.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve an embeddings rule by its GUID.
   *
   * @param {string} guid - The GUID of the embeddings rule to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsRule>} A promise resolving to the EmbeddingsRule object or null.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<EmbeddingsRule> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all embeddings rules.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<EmbeddingsRule>>} A promise resolving to an array of EmbeddingsRule objects.
   * @throws {MethodError} If the embeddings rule is null.
   */
  readAll = async (cancelToken?: AbortController): Promise<Array<EmbeddingsRule>> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update an existing embeddings rule.
   *
   * @param {EmbeddingsRule} embeddingsRule Information about the embeddings rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsRule>} A promise resolving to the updated EmbeddingsRule object or null.
   * @throws {MethodError} If the rule is null.
   */
  update = async (embeddingsRule: EmbeddingsRule, cancelToken?: AbortController): Promise<EmbeddingsRule> => {
    if (!embeddingsRule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules/' + embeddingsRule.GUID;
    return await this.updateResource(url, embeddingsRule, cancelToken);
  };

  /**
   * Delete an embeddings rule by its GUID.
   *
   * @param {string} guid - The GUID of the embeddings rule to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the deletion is successful.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/embeddingsrules/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Enumerate Embeddings Rules.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<EmbeddingsRule>>} A promise resolving to the created EmbeddingsResult object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<EmbeddingsRule>> => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/embeddingsrules/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
