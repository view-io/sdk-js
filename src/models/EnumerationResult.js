/**
 * Represents the result of an enumeration against a table.
 *
 * @property {boolean} success - Indicates if the statistics operation was successful.
 * @property {Object} timestamp - Start and end timestamps for the enumeration.
 * @property {number} maxResults - Maximum number of results retrieved.
 * @property {number} iterationsRequired - Iterations required for the enumeration.
 * @property {Array<any>} objects - Metadata for the retrieved objects.
 * @property {boolean} endOfResults - Indicates if the end of results has been reached.
 * @property {number} recordsRemaining - Number of candidate records remaining in the enumeration.
 * @property {number} totalRecords - Total number of records in the enumeration.
 * @property {Array<any>} sharedPrefixes - Shared prefixes for the enumeration.
 * @property {Object} statistics- Statistics for the enumeration.
 */
export default class EnumerationResult {
  constructor(data = {}) {
    const {
      Success = true,
      Timestamp = {},
      MaxResults = 1000,
      IterationsRequired = 0,
      EndOfResults = true,
      RecordsRemaining = 0,
      Objects = [],
      TotalRecords = 0,
      SharedPrefixes = [],
      Statistics = {},
    } = data;

    /** @type {boolean} */
    this.success = Success;

    /** @type {Object} */
    this.timestamp = {
      start: Timestamp.Start || new Date().toISOString(),
      totalMs: Timestamp.TotalMs || 0,
      messages: Timestamp.Messages || {},
    };

    /** @type {number} */
    this.maxResults = MaxResults;

    /** @type {number} */
    this.iterationsRequired = IterationsRequired;

    /** @type {Array<any>} */
    this.objects = Objects;

    /** @type {boolean} */
    this.endOfResults = EndOfResults;

    /** @type {number} */
    this.recordsRemaining = RecordsRemaining;

    /** @type {number} */
    this.totalRecords = TotalRecords;

    /** @type {Array<any>} */
    this.sharedPrefixes = SharedPrefixes;

    /** @type {Object} */
    this.statistics = {
      objects: Statistics.Objects,
      bytes: Statistics.Bytes,
    };
  }
}
