export default class EnumerationResult {
  /**
   * @param {Object} data - The data to be used to create the EnumerationResult object.
   * @param {boolean} data.Success - Indicates if the statistics operation was successful.
   * @param {Object} data.Timestamp - Start and end timestamps for the enumeration.
   * @param {number} data.MaxResults - Maximum number of results retrieved.
   * @param {number} data.IterationsRequired - Iterations required for the enumeration.
   * @param {boolean} data.EndOfResults - Indicates if the end of results has been reached.
   * @param {number} data.TotalRecords - Total number of records in the enumeration.
   * @param {number} data.RecordsRemaining - Number of candidate records remaining in the enumeration.
   * @param {Array<any>} data.Objects - Metadata for the retrieved objects.
   * @param {Array<any>} data.SharedPrefixes - Shared prefixes for the enumeration.
   * @param {Object} data.Statistics - Statistics for the enumeration.
   */
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
    this.success = Success;
    this.timestamp = {
      start: Timestamp.Start || new Date().toISOString(),
      totalMs: Timestamp.TotalMs || 0,
      messages: Timestamp.Messages || {},
    };
    this.maxResults = MaxResults;
    this.iterationsRequired = IterationsRequired;
    this.objects = Objects;
    this.endOfResults = EndOfResults;
    this.recordsRemaining = RecordsRemaining;
    this.totalRecords = TotalRecords;
    this.sharedPrefixes = SharedPrefixes;
    this.statistics = Statistics;
  }
}
