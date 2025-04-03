/**
 * CrawlOperation model to represent the execution of a crawl plan.
 */
export default class CrawlOperation {
  /**
   * @param {Object} operation - Crawl operation data.
   */
  constructor(operation = {}) {
    const {
      GUID,
      TenantGUID,
      CrawlPlanGUID,
      CrawlScheduleGUID,
      CrawlFilterGUID,
      DataRepositoryGUID,
      ViewEndpointGUID,
      MetadataRuleGUID,
      EmbeddingsRuleGUID,
      ProcessingEndpoint,
      CleanupEndpoint,
      Name,
      ObjectsEnumerated,
      BytesEnumerated,
      ObjectsAdded,
      BytesAdded,
      ObjectsUpdated,
      BytesUpdated,
      ObjectsDeleted,
      BytesDeleted,
      EnumerationFile,
      ObjectsSuccess,
      BytesSuccess,
      ObjectsFailed,
      BytesFailed,
      State,
      CreatedUtc,
      StartUtc,
      StartEnumerationUtc,
      StartRetrievalUtc,
      FinishEnumerationUtc,
      FinishRetrievalUtc,
      FinishUtc,
      AdditionalData,
    } = operation;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.CrawlPlanGUID = CrawlPlanGUID;
    this.CrawlScheduleGUID = CrawlScheduleGUID;
    this.CrawlFilterGUID = CrawlFilterGUID;
    this.DataRepositoryGUID = DataRepositoryGUID;
    this.ViewEndpointGUID = ViewEndpointGUID;
    this.MetadataRuleGUID = MetadataRuleGUID;
    this.EmbeddingsRuleGUID = EmbeddingsRuleGUID;
    this.ProcessingEndpoint = ProcessingEndpoint;
    this.CleanupEndpoint = CleanupEndpoint;
    this.Name = Name;

    this.ObjectsEnumerated = this._validateNonNegative(ObjectsEnumerated, 'ObjectsEnumerated');
    this.BytesEnumerated = this._validateNonNegative(BytesEnumerated, 'BytesEnumerated');
    this.ObjectsAdded = this._validateNonNegative(ObjectsAdded, 'ObjectsAdded');
    this.BytesAdded = this._validateNonNegative(BytesAdded, 'BytesAdded');
    this.ObjectsUpdated = this._validateNonNegative(ObjectsUpdated, 'ObjectsUpdated');
    this.BytesUpdated = this._validateNonNegative(BytesUpdated, 'BytesUpdated');
    this.ObjectsDeleted = this._validateNonNegative(ObjectsDeleted, 'ObjectsDeleted');
    this.BytesDeleted = this._validateNonNegative(BytesDeleted, 'BytesDeleted');

    this.EnumerationFile = EnumerationFile;

    this.ObjectsSuccess = this._validateNonNegative(ObjectsSuccess, 'ObjectsSuccess');
    this.BytesSuccess = this._validateNonNegative(BytesSuccess, 'BytesSuccess');
    this.ObjectsFailed = this._validateNonNegative(ObjectsFailed, 'ObjectsFailed');
    this.BytesFailed = this._validateNonNegative(BytesFailed, 'BytesFailed');

    this.State = State;
    this.CreatedUtc = CreatedUtc;
    this.StartUtc = StartUtc;
    this.StartEnumerationUtc = StartEnumerationUtc;
    this.StartRetrievalUtc = StartRetrievalUtc;
    this.FinishEnumerationUtc = FinishEnumerationUtc;
    this.FinishRetrievalUtc = FinishRetrievalUtc;
    this.FinishUtc = FinishUtc;

    this.AdditionalData = AdditionalData;
  }

  /**
   * Validates a value to ensure it is non-negative.
   * @private
   * @param {number} value
   * @param {string} name
   * @returns {number}
   * @throws {RangeError}
   */
  _validateNonNegative(value, name) {
    if (value < 0) {
      throw new RangeError(`${name} must be non-negative.`);
    }
    return value;
  }
}
