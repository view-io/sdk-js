import { v4 as uuidV4 } from 'uuid';
import { CrawlStateEnum } from '../enums/CrawlStateEnum';
/**
 * CrawlOperation model to represent the execution of a crawl plan.
 */
export default class CrawlOperation {
  /**
   * @param {Object} operation - Crawl operation data.
   * @param {string} [operation.GUID] - Operation GUID (auto-generated if not provided).
   * @param {string} [operation.TenantGUID] - Tenant GUID (auto-generated if not provided).
   * @param {string} [operation.CrawlPlanGUID] - Crawl plan GUID.
   * @param {string} [operation.CrawlScheduleGUID] - Crawl schedule GUID.
   * @param {string} [operation.CrawlFilterGUID] - Crawl filter GUID.
   * @param {string} [operation.DataRepositoryGUID] - Data repository GUID (auto-generated if not provided).
   * @param {string} [operation.ViewEndpointGUID] - View endpoint GUID (auto-generated if not provided).
   * @param {string} [operation.MetadataRuleGUID] - Metadata rule GUID.
   * @param {string} [operation.EmbeddingsRuleGUID] - Embeddings rule GUID.
   * @param {string} [operation.ProcessingEndpoint] - Data flow endpoint for processing.
   * @param {string} [operation.CleanupEndpoint] - Data flow endpoint for cleanup.
   * @param {string} [operation.Name] - Name of the crawl operation.
   * @param {long} [operation.ObjectsEnumerated] - Number of objects enumerated (must be non-negative).
   * @param {long} [operation.BytesEnumerated] - Number of bytes enumerated (must be non-negative).
   * @param {long} [operation.ObjectsAdded] - Number of objects added since last enumeration (must be non-negative).
   * @param {long} [operation.BytesAdded] - Number of bytes added since last enumeration (must be non-negative).
   * @param {long} [operation.ObjectsUpdated] - Number of objects updated since last enumeration (must be non-negative).
   * @param {long} [operation.BytesUpdated] - Number of bytes updated since last enumeration (must be non-negative).
   * @param {long} [operation.ObjectsDeleted] - Number of objects deleted since last enumeration (must be non-negative).
   * @param {long} [operation.BytesDeleted] - Number of bytes deleted since last enumeration (must be non-negative).
   * @param {string} [operation.EnumerationFile] - Enumeration file.
   * @param {long} [operation.ObjectsSuccess] - Number of objects successfully written (must be non-negative).
   * @param {long} [operation.BytesSuccess] - Number of bytes successfully written (must be non-negative).
   * @param {long} [operation.ObjectsFailed] - Number of objects unable to be written (must be non-negative).
   * @param {long} [operation.BytesFailed] - Number of bytes unable to be written (must be non-negative).
   * @param {CrawlStateEnum} [operation.State] - State of the crawl operation (default: NotStarted).
   * @param {Date} [operation.CreatedUtc] - UTC creation timestamp (auto-generated if not provided).
   * @param {Date} [operation.StartUtc] - Start timestamp.
   * @param {Date} [operation.StartEnumerationUtc] - Enumeration start timestamp.
   * @param {Date} [operation.StartRetrievalUtc] - Retrieval start timestamp.
   * @param {Date} [operation.FinishEnumerationUtc] - Enumeration finish timestamp.
   * @param {Date} [operation.FinishRetrievalUtc] - Retrieval finish timestamp.
   * @param {Date} [operation.FinishUtc] - Finish timestamp.
   * @param {string} [operation.AdditionalData] - Additional data.
   */
  constructor(operation = {}) {
    const {
      GUID = uuidV4(),
      TenantGUID = uuidV4(),
      CrawlPlanGUID = null,
      CrawlScheduleGUID = null,
      CrawlFilterGUID = null,
      DataRepositoryGUID = uuidV4(),
      ViewEndpointGUID = uuidV4(),
      MetadataRuleGUID = null,
      EmbeddingsRuleGUID = null,
      ProcessingEndpoint = null,
      CleanupEndpoint = null,
      Name = 'My crawl operation',
      ObjectsEnumerated = 0,
      BytesEnumerated = 0,
      ObjectsAdded = 0,
      BytesAdded = 0,
      ObjectsUpdated = 0,
      BytesUpdated = 0,
      ObjectsDeleted = 0,
      BytesDeleted = 0,
      EnumerationFile = null,
      ObjectsSuccess = 0,
      BytesSuccess = 0,
      ObjectsFailed = 0,
      BytesFailed = 0,
      State = CrawlStateEnum.NotStarted,
      CreatedUtc = new Date().toISOString(),
      StartUtc = null,
      StartEnumerationUtc = null,
      StartRetrievalUtc = null,
      FinishEnumerationUtc = null,
      FinishRetrievalUtc = null,
      FinishUtc = null,
      AdditionalData = null,
    } = operation;

    // Assign other fields
    this.guid = GUID;
    this.tenantGUID = TenantGUID;
    this.crawlPlanGUID = CrawlPlanGUID;
    this.crawlScheduleGUID = CrawlScheduleGUID;
    this.crawlFilterGUID = CrawlFilterGUID;
    this.dataRepositoryGUID = DataRepositoryGUID;
    this.viewEndpointGUID = ViewEndpointGUID;
    this.metadataRuleGUID = MetadataRuleGUID;
    this.embeddingsRuleGUID = EmbeddingsRuleGUID;
    this.processingEndpoint = ProcessingEndpoint;
    this.cleanupEndpoint = CleanupEndpoint;
    this.name = Name;

    // Size and object count validations
    this.objectsEnumerated = this._validateNonNegative(ObjectsEnumerated, 'ObjectsEnumerated');
    this.bytesEnumerated = this._validateNonNegative(BytesEnumerated, 'BytesEnumerated');
    this.objectsAdded = this._validateNonNegative(ObjectsAdded, 'ObjectsAdded');
    this.bytesAdded = this._validateNonNegative(BytesAdded, 'BytesAdded');
    this.objectsUpdated = this._validateNonNegative(ObjectsUpdated, 'ObjectsUpdated');
    this.bytesUpdated = this._validateNonNegative(BytesUpdated, 'BytesUpdated');
    this.objectsDeleted = this._validateNonNegative(ObjectsDeleted, 'ObjectsDeleted');
    this.bytesDeleted = this._validateNonNegative(BytesDeleted, 'BytesDeleted');
    this.enumerationFile = EnumerationFile;
    this.objectsSuccess = this._validateNonNegative(ObjectsSuccess, 'ObjectsSuccess');
    this.bytesSuccess = this._validateNonNegative(BytesSuccess, 'BytesSuccess');
    this.objectsFailed = this._validateNonNegative(ObjectsFailed, 'ObjectsFailed');
    this.bytesFailed = this._validateNonNegative(BytesFailed, 'BytesFailed');
    this.state = State;
    this.createdUtc = CreatedUtc;
    this.startUtc = StartUtc;
    this.startEnumerationUtc = StartEnumerationUtc;
    this.startRetrievalUtc = StartRetrievalUtc;
    this.finishEnumerationUtc = FinishEnumerationUtc;
    this.finishRetrievalUtc = FinishRetrievalUtc;
    this.finishUtc = FinishUtc;
    this.additionalData = AdditionalData;
  }

  // ID Getter/Setter with validation
  get Id() {
    return this._id;
  }

  set Id(value) {
    if (value < 1) {
      throw new RangeError('Id must be greater than 0.');
    }
    this._id = value;
  }

  // Non-negative validation method for object counts and sizes
  _validateNonNegative(value, name) {
    if (value < 0) {
      throw new RangeError(`${name} must be non-negative.`);
    }
    return value;
  }
}
