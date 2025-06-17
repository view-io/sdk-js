import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EnumerationResult, MetadataRule, MetadataRuleCreateRequest } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class MetaDataRuleSdk extends ViewSdkBase {
  /**
   * Constructs a new MetaDataRuleSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Metadata-Rules

  /**
   * Create a new metadata rule.
   *
   * @param {MetadataRuleCreateRequest} metadataRule Information about the metadata rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MetadataRule>} A promise resolving to the created MetadataRule object or null.
   * @throws {MethodError} If the rule is null.
   */
  create = async (metadataRule: MetadataRuleCreateRequest, cancelToken?: AbortController): Promise<MetadataRule> => {
    if (!metadataRule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/metadatarules';
    return await this.createResource(url, metadataRule, cancelToken);
  };

  /**
   * Check if a metadata rule exists by its GUID.
   *
   * @param {string} guid - The GUID of the metadata rule to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the metadata rule exists, otherwise false.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/metadatarules/' + guid;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieve a metadata rule by its GUID.
   *
   * @param {string} guid - The GUID of the metadata rule to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MetadataRule>} A promise resolving to the MetadataRule object or null.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<MetadataRule> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/metadatarules/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve all metadata rules.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<MetadataRule>>} A promise resolving to an array of MetadataRule objects.
   * @throws {MethodError} If the metadata rules are null.
   */
  readAll = async (cancelToken?: AbortController): Promise<Array<MetadataRule>> => {
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/metadatarules';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update an existing metadata rule.
   *
   * @param {MetadataRule} metadataRule Information about the metadata rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MetadataRule>} A promise resolving to the updated MetadataRule object or null.
   * @throws {MethodError} If the rule is null.
   */
  update = async (metadataRule: MetadataRule, cancelToken?: AbortController): Promise<MetadataRule> => {
    if (!metadataRule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/metadatarules/' + metadataRule.GUID;
    return await this.updateResource(url, metadataRule, cancelToken);
  };

  /**
   * Delete a metadata rule by its GUID.
   *
   * @param {string} guid - The GUID of the metadata rule to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the deletion is successful.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + 'v1.0/tenants/' + this.config.tenantGuid + '/metadatarules/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Enumerate Metadata Rules.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<MetadataRule>>} A promise resolving to the created MetadataRule object or null if creation fails.
   * @throws {MethodError} If the metadata rules are null.
   */
  enumerate = async (cancelToken?: AbortController): Promise<EnumerationResult<MetadataRule>> => {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/metadatarules/`;
    return await this.retrieveResource(url, cancelToken);
  };
}
