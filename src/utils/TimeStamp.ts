export default class Timestamp {
  /**
   * Constructor to initialize the start time and optional metadata.
   * @param {object} metadata - Optional user-supplied metadata.
   */
  constructor(metadata = null) {
    this.start = new Date().toISOString; // Start time set to current UTC time
    this.end = null; // End time initialized to null
    this.messages = new Map(); // Log messages stored in a Map
    this.metadata = metadata; // User-supplied metadata
  }

  /**
   * Get the total time elapsed in milliseconds between start and end (or now if end is null).
   * @returns {number} Total milliseconds.
   */
  get totalMs() {
    const endTime = this.end || new Date().toISOString;
    return Math.round(this.totalMsBetween(this.start, endTime) * 100) / 100;
  }

  /**
   * Add a message to the log with the current timestamp.
   * @param {string} msg - The message to add.
   */
  addMessage(msg) {
    if (!msg || typeof msg !== 'string') {
      throw new Error('Message must be a non-empty string.');
    }
    this.messages.set(new Date().toISOString, msg);
  }

  /**
   * Calculate the total milliseconds between two Date objects.
   * @param {Date} start - The start time.
   * @param {Date} end - The end time.
   * @returns {number} The total milliseconds between the two times.
   */
  totalMsBetween(start, end) {
    try {
      const totalMs = end.getTime() - start.getTime();
      return totalMs;
    } catch (error) {
      return -1; // Return -1 in case of an error
    }
  }

  /**
   * Dispose method to clean up resources (not strictly necessary in JavaScript).
   */
  dispose() {
    this.messages.clear();
    this.metadata = null;
    this.start = null;
    this.end = null;
  }
}
