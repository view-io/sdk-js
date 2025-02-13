/**
 * Represents a crawl plan which is a top-level scheduled task linking to repository, schedule, and filter.
 *
 * @property {number} id - ID of the crawl plan.
 * @property {string} guid - Globally unique identifier for the crawl plan.
 * @property {string} tenantGuid - Globally unique identifier for the tenant.
 * @property {string} dataRepositoryGuid - Globally unique identifier for the data repository.
 * @property {string} viewEndpointGuid - Globally unique identifier for the view endpoint.
 * @property {string|null} crawlScheduleGuid - Globally unique identifier for the crawl schedule.
 * @property {string|null} crawlFilterGuid - Globally unique identifier for the crawl filter.
 * @property {string|null} metadataRuleGuid - Globally unique identifier for the metadata rule.
 * @property {string|null} embeddingsRuleGuid - Globally unique identifier for the embeddings rule.
 * @property {string|null} processingEndpoint - Data flow endpoint for processing.
 * @property {string|null} cleanupEndpoint - Data flow endpoint for cleanup processing.
 * @property {string} name - Name of the crawl plan.
 * @property {string} enumerationDirectory - Directory where enumerations are stored.
 * @property {number} enumerationsToRetain - Number of enumerations to retain.
 * @property {number} maxDrainTasks - Maximum number of tasks for writing data to the View.
 * @property {boolean} processAdditions - Flag indicating whether new files should be uploaded to the specified View endpoint.
 * @property {boolean} processDeletions - Flag indicating whether deleted files should be removed from the specified View endpoint.
 * @property {boolean} processUpdates - Flag indicating whether updated files should be uploaded to the specified View endpoint.
 * @property {Date} createdUtc - Timestamp when the crawl plan was created.
 * @property {string} processingAccessKey - Access key used for processing.
 * @property {string} CleanupAccessKey - Access key used for cleanup.
 *
 */
export default class CrawlPlan {
    /** @type {number} */
    _id: number;
    /** @type {string} */
    guid: string;
    /** @type {string} */
    tenantGuid: string;
    /** @type {string} */
    dataRepositoryGuid: string;
    /** @type {string} */
    viewEndpointGuid: string;
    /** @type {string|null} */
    crawlScheduleGuid: string | null;
    /** @type {string|null} */
    crawlFilterGuid: string | null;
    /** @type {string|null} */
    metadataRuleGuid: string | null;
    /** @type {string|null} */
    embeddingsRuleGuid: string | null;
    /** @type {string|null} */
    processingEndpoint: string | null;
    /** @type {string|null} */
    cleanupEndpoint: string | null;
    /** @type {string} */
    name: string;
    /** @type {string} */
    _enumerationDirectory: string;
    /** @type {number} */
    _enumerationsToRetain: number;
    /** @type {number} */
    _maxDrainTasks: number;
    /** @type {boolean} */
    processAdditions: boolean;
    /** @type {boolean} */
    processDeletions: boolean;
    /** @type {boolean} */
    processUpdates: boolean;
    /** @type {Date} */
    createdUtc: Date;
    /**
     * Sets the ID of the crawl plan.
     * @param {number} value
     * @throws {RangeError} If the ID is less than 1.
     */
    set id(value: number);
    /**
     * Gets the ID of the crawl plan.
     * @return {number}
     */
    get id(): number;
    /**
     * Sets the enumeration directory path.
     * @param {string} value
     * @throws {Error} If the directory is null or empty.
     */
    set enumerationDirectory(value: string);
    /**
     * Gets the enumeration directory path.
     * @return {string}
     */
    get enumerationDirectory(): string;
    /**
     * Sets the number of enumerations to retain.
     * @param {number} value
     * @throws {RangeError} If the number of enumerations is negative.
     */
    set enumerationsToRetain(value: number);
    /**
     * Gets the number of enumerations to retain.
     * @return {number}
     */
    get enumerationsToRetain(): number;
    /**
     * Sets the maximum number of drain tasks.
     * @param {number} value
     * @throws {RangeError} If the number of tasks is less than 1.
     */
    set maxDrainTasks(value: number);
    /**
     * Gets the maximum number of drain tasks.
     * @return {number}
     */
    get maxDrainTasks(): number;
}
