import { v4 as uuidV4 } from 'uuid';

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
  constructor() {
    /** @type {number} */
    this._id = 0;

    /** @type {string} */
    this.guid = uuidV4();

    /** @type {string} */
    this.tenantGuid = uuidV4();

    /** @type {string} */
    this.dataRepositoryGuid = uuidV4();

    /** @type {string} */
    this.viewEndpointGuid = uuidV4();

    /** @type {string|null} */
    this.crawlScheduleGuid = null;

    /** @type {string|null} */
    this.crawlFilterGuid = null;

    /** @type {string|null} */
    this.metadataRuleGuid = null;

    /** @type {string|null} */
    this.embeddingsRuleGuid = null;

    /** @type {string|null} */
    this.processingEndpoint = null;

    /** @type {string|null} */
    this.cleanupEndpoint = null;

    /** @type {string} */
    this.name = 'My crawl operation';

    /** @type {string} */
    this._enumerationDirectory = './enumerations/';

    /** @type {number} */
    this._enumerationsToRetain = 30;

    /** @type {number} */
    this._maxDrainTasks = 8;

    /** @type {boolean} */
    this.processAdditions = true;

    /** @type {boolean} */
    this.processDeletions = false;

    /** @type {boolean} */
    this.processUpdates = true;

    /** @type {Date} */
    this.createdUtc = new Date();
  }

  /**
   * Gets the ID of the crawl plan.
   * @return {number}
   */
  get id() {
    return this._id;
  }

  /**
   * Sets the ID of the crawl plan.
   * @param {number} value
   * @throws {RangeError} If the ID is less than 1.
   */
  set id(value) {
    if (value < 1) {
      throw new RangeError('ID must be greater than 0.');
    }
    this._id = value;
  }

  /**
   * Gets the enumeration directory path.
   * @return {string}
   */
  get enumerationDirectory() {
    return this._enumerationDirectory;
  }

  /**
   * Sets the enumeration directory path.
   * @param {string} value
   * @throws {Error} If the directory is null or empty.
   */
  set enumerationDirectory(value) {
    if (!value) {
      throw new Error('EnumerationDirectory cannot be null or empty.');
    }
    value = value.replace(/\\/g, '/');
    if (!value.endsWith('/')) {
      value += '/';
    }
    this._enumerationDirectory = value;
  }

  /**
   * Gets the number of enumerations to retain.
   * @return {number}
   */
  get enumerationsToRetain() {
    return this._enumerationsToRetain;
  }

  /**
   * Sets the number of enumerations to retain.
   * @param {number} value
   * @throws {RangeError} If the number of enumerations is negative.
   */
  set enumerationsToRetain(value) {
    if (value < 0) {
      throw new RangeError('EnumerationsToRetain must be non-negative.');
    }
    this._enumerationsToRetain = value;
  }

  /**
   * Gets the maximum number of drain tasks.
   * @return {number}
   */
  get maxDrainTasks() {
    return this._maxDrainTasks;
  }

  /**
   * Sets the maximum number of drain tasks.
   * @param {number} value
   * @throws {RangeError} If the number of tasks is less than 1.
   */
  set maxDrainTasks(value) {
    if (value < 1) {
      throw new RangeError('MaxDrainTasks must be greater than 0.');
    }
    this._maxDrainTasks = value;
  }
}
