import { v4 as uuidV4 } from 'uuid';
import ScheduleIntervalEnum from '../enums/ScheduleIntervalEnum';

/**
 * Represents a crawl schedule with associated interval and GUIDs.
 *
 * @property {number} id - ID of the crawl schedule.
 * @property {string} guid - Globally unique identifier for the crawl schedule.
 * @property {string} tenantGuid - Globally unique identifier for the tenant.
 * @property {string} name - Name of the schedule.
 * @property {ScheduleIntervalEnum} schedule - Schedule interval enumeration.
 * @property {number} interval - Time interval for the schedule.
 * @property {Date} createdUtc - Timestamp when the crawl schedule was created.
 */
export default class CrawlSchedule {
  constructor() {
    /** @type {number} */
    this._id = 0;

    /** @type {string} */
    this.guid = uuidV4();

    /** @type {string} */
    this.tenantGuid = uuidV4();

    /** @type {string} */
    this.name = 'My schedule';

    /** @type {ScheduleIntervalEnum} */
    this.schedule = ScheduleIntervalEnum.DaysInterval; // Assuming this enum is defined elsewhere in your system.

    /** @type {number} */
    this._interval = 1;

    /** @type {Date} */
    this.createdUtc = new Date();
  }

  /**
   * Gets the ID of the crawl schedule.
   * @return {number}
   */
  get id() {
    return this._id;
  }

  /**
   * Sets the ID of the crawl schedule.
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
   * Gets the schedule interval value.
   * @return {number}
   */
  get interval() {
    return this._interval;
  }

  /**
   * Sets the schedule interval.
   * @param {number} value
   * @throws {RangeError} If the interval is less than 1.
   */
  set interval(value) {
    if (value < 1) {
      throw new RangeError('Interval must be greater than 0.');
    }
    this._interval = value;
  }
}
