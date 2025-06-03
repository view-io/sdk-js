/**
 * Enum for schedule intervals.
 * @enum {string}
 */
const ScheduleIntervalEnum = Object.freeze({
  OneTime: 'OneTime', // One-time schedule
  SecondsInterval: 'SecondsInterval', // Schedule interval in seconds
  MinutesInterval: 'MinutesInterval', // Schedule interval in minutes
  HoursInterval: 'HoursInterval', // Schedule interval in hours
  DaysInterval: 'DaysInterval', // Schedule interval in days
});

// Export the enum for use in other modules
module.exports = ScheduleIntervalEnum;
