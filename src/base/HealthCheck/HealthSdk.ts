import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';

export default class HealthSdk extends ViewSdkBase {
  /**
   * Constructs a new HealthSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * check switchboard health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkSwitchboard = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check config health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkConfig = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/config`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check storage health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkStorage = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/storage-rest`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check Vector health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkVector = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/vector`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check Processor health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkProcessor = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/processor`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check Assistant health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkAssistant = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/assistant`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check Orchestrator health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkOrchestrator = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/orchestrator`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check Crawler health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkCrawler = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/crawler`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check Lexi health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkLexi = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/lexi`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check Embeddings health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkEmbeddings = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/embeddings`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * check Director health.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  checkDirector = async (cancelToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}healthcheck/director`;
    return await this.existsResource(url, cancelToken);
  };
}
