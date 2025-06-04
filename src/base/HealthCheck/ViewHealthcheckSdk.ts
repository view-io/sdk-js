import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

/**
 * Healthcheck service.
 * @module base/ViewHealthcheckSdk
 * @version 0.1.0
 */
export default class ViewHealthcheckSdk extends ViewSdkBase {
  /**
   * Constructs a new OrchestratorApi.
   * @alias module:base/ViewHealthcheckSdk
   * @class
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * check switchboard health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkSwitchboardHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check config health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkConfigHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/config`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check storage health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkStorageHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/storage-rest`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Vector health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkVectorHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/vector`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Processor health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkProcessorHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/processor`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Assistant health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkAssistantHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/assistant`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Orchestrator health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkOrchestratorHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/orchestrator`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Crawler health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkCrawlerHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/crawler`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Lexi health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkLexiHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/lexi`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Embeddings health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkEmbeddingsHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/embeddings`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Director health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {ApiErrorResponse} If the trigger is null or invalid.
   */
  checkDirectorHealth = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/healthcheck/director`;
    return await this.exists(url, cancelToken);
  };
}
