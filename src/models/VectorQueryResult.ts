export default class VectorQueryResult {
  /**
   * @param {Object} vectorQueryResult Information about the vector query result.
   * @param {boolean} vectorQueryResult.Success - Boolean indicating whether the operation was successful (default is false).
   * @param {Timestamp} vectorQueryResult.Timestamp - Timestamp (default is a new Timestamp instance).
   * @param {number} vectorQueryResult.StatusCode - HTTP status code (default is 200).
   * @param {string} vectorQueryResult.Query - Query (default is null).
   * @param {Object} vectorQueryResult.Result - Result of the query (default is null).
   */
  constructor(vectorQueryResult = {}) {
    const {
      Success = false,
      Timestamp = Date.now(),
      StatusCode = 200,
      Query = null,
      Result = null,
    } = vectorQueryResult;

    this.Success = Success;
    this.Timestamp = Timestamp;
    this.StatusCode = this.validateStatusCode(StatusCode);
    this.Query = Query;
    this.Result = Result;
  }

  validateStatusCode(value) {
    if (value < 0 || value > 599) {
      throw new RangeError('StatusCode must be between 0 and 599.');
    }
    return value;
  }
}
