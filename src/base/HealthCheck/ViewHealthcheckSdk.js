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
   * @param {string} tenantGuid - Tenant GUID.
   * @param {string} accessKey - Access key.
   * @param {string} endpoint - Endpoint URL .
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
    this.Header = '[ViewHealthcheckSdk] ';
  }

  /**
   * check switchboard health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkSwitchboardHealth = async (cancelToken) => {
    const url = `${this.endpoint}/`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check config health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkConfigHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/config`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check storage health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkStorageHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/storage-rest`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Vector health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkVectorHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/vector`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Processor health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkProcessorHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/processor`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Assistant health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkAssistantHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/assistant`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Orchestrator health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkOrchestratorHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/orchestrator`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Crawler health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkCrawlerHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/crawler`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Lexi health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkLexiHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/lexi`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Embeddings health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkEmbeddingsHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/embeddings`;
    return await this.exists(url, cancelToken);
  };

  /**
   * check Director health.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  checkDirectorHealth = async (cancelToken) => {
    const url = `${this.endpoint}/healthcheck/director`;
    return await this.exists(url, cancelToken);
  };
}
