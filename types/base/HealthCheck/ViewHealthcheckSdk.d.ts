/**
 * Healthcheck service.
 * @module base/ViewHealthcheckSdk
 * @version 0.1.0
 */
export default class ViewHealthcheckSdk extends ViewSdkBase {
    Header: string;
    /**
     * check switchboard health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkSwitchboardHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check config health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkConfigHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check storage health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkStorageHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check Vector health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkVectorHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check Processor health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkProcessorHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check Assistant health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkAssistantHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check Orchestrator health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkOrchestratorHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check Crawler health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkCrawlerHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check Lexi health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkLexiHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check Embeddings health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkEmbeddingsHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
    /**
     * check Director health.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    checkDirectorHealth: (cancelToken?: object) => Promise<boolean | null | ApiErrorResponse>;
}
import ViewSdkBase from '../ViewSDKBase';
