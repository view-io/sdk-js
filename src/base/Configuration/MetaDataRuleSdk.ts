import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { MetadataRule } from '../../types';
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
   * @param {MetadataRule} metadataRule Information about the metadata rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MetadataRule|null|ApiErrorResponse>} A promise resolving to the created MetadataRule object or null.
   * @throws {ApiErrorResponse} If the rule is null.
   */
  createMetadataRule = async (metadataRule: MetadataRule, cancelToken: AbortController) => {
    if (!metadataRule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/metadatarules';
    return await this.create(url, metadataRule, cancelToken);
  };

  /**
   * Check if a metadata rule exists by its GUID.
   *
   * @param {string} guid - The GUID of the metadata rule to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the metadata rule exists, otherwise false.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  existsMetadataRule = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/metadatarules/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a metadata rule by its GUID.
   *
   * @param {string} guid - The GUID of the metadata rule to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MetadataRule|null|ApiErrorResponse>} A promise resolving to the MetadataRule object or null.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  retrieveMetadataRule = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/metadatarules/' + guid;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve all metadata rules.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<MetadataRule>|ApiErrorResponse>} A promise resolving to an array of MetadataRule objects.
   */
  retrieveMetadataRules = async (cancelToken: AbortController) => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/metadatarules';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update an existing metadata rule.
   *
   * @param {MetadataRule} metadataRule Information about the metadata rule.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MetadataRule|null|ApiErrorResponse>} A promise resolving to the updated MetadataRule object or null.
   * @throws {ApiErrorResponse} If the rule is null.
   */
  updateMetadataRule = async (metadataRule: MetadataRule, cancelToken: AbortController) => {
    if (!metadataRule) {
      GenericExceptionHandlers.ArgumentNullException('rule');
    }
    const url =
      this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/metadatarules/' + metadataRule.GUID;
    return await this.update(url, metadataRule, cancelToken);
  };

  /**
   * Delete a metadata rule by its GUID.
   *
   * @param {string} guid - The GUID of the metadata rule to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
   * @throws {ApiErrorResponse} If the guid is null or empty.
   */
  deleteMetadataRule = async (guid: string, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/metadatarules/' + guid;
    return await this.delete(url, cancelToken);
  };

  /**
   * Enumerate Metadata Rules.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateMetadataRules = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/metadatarules/`;
    return await this.retrieve(url, cancelToken);
  };
}
