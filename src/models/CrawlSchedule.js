import ScheduleIntervalEnum from '../enums/ScheduleIntervalEnum';

/**
 * Represents a crawl schedule with associated interval and GUIDs.
 *
 * @property {string} GUID - Globally unique identifier for the crawl schedule.
 * @property {string} TenantGUID - Globally unique identifier for the tenant.
 * @property {string} Name - Name of the schedule.
 * @property {ScheduleIntervalEnum} Schedule - Schedule interval enumeration.
 * @property {number} Interval - Time interval for the schedule.
 * @property {string} CreatedUtc - ISO timestamp when the crawl schedule was created.
 */
export default class CrawlSchedule {
  /**
   * @param {Object} schedule - Crawl schedule data.
   * @param {string} schedule.GUID
   * @param {string} schedule.TenantGUID
   * @param {string} schedule.Name
   * @param {string} schedule.Schedule
   * @param {number} schedule.Interval
   * @param {string} schedule.CreatedUtc
   */
  constructor(schedule = {}) {
    const { GUID, TenantGUID, Name, Schedule, Interval, CreatedUtc } = schedule;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.Name = Name;
    this.Schedule = Schedule;
    this.Interval = Interval;
    this.CreatedUtc = CreatedUtc;
  }
}
