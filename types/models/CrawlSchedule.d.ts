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
    /** @type {number} */
    _id: number;
    /** @type {string} */
    guid: string;
    /** @type {string} */
    tenantGuid: string;
    /** @type {string} */
    name: string;
    /** @type {ScheduleIntervalEnum} */
    schedule: ScheduleIntervalEnum;
    /** @type {number} */
    _interval: number;
    /** @type {Date} */
    createdUtc: Date;
    /**
     * Sets the ID of the crawl schedule.
     * @param {number} value
     * @throws {RangeError} If the ID is less than 1.
     */
    set id(value: number);
    /**
     * Gets the ID of the crawl schedule.
     * @return {number}
     */
    get id(): number;
    /**
     * Sets the schedule interval.
     * @param {number} value
     * @throws {RangeError} If the interval is less than 1.
     */
    set interval(value: number);
    /**
     * Gets the schedule interval value.
     * @return {number}
     */
    get interval(): number;
}
