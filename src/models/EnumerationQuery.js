import { EnumerationOrderEnum } from '../enums/EnumerationOrderEnum';

/**
 * Represents an enumeration query with metadata for data retrieval.
 */
export default class EnumerationQuery {
  /**
   * Constructor for the EnumerationQuery class.
   * @param {Object} options - Options to initialize the enumeration query.
   * @param {Timestamp} options.timestamp - The timestamp for the enumeration query.
   * @param {TenantMetadata} options.tenant - Metadata for the tenant.
   * @param {string} options.tenantGuid - GUID for the tenant.
   * @param {BucketMetadata} options.bucket - Metadata for the bucket.
   * @param {string} options.bucketGuid - GUID for the bucket.
   * @param {Collection} options.collection - Collection information.
   * @param {string} options.collectionGuid - GUID for the collection.
   * @param {SourceDocument} options.sourceDocument - Information about the source document.
   * @param {string} options.sourceDocumentGuid - GUID for the source document.
   * @param {VectorRepository} options.vectorRepository - Information about the vector repository.
   * @param {string} options.vectorRepositoryGuid - GUID for the vector repository.
   * @param {GraphRepository} options.graphRepository - Information about the graph repository.
   * @param {string} options.graphRepositoryGuid - GUID for the graph repository.
   * @param {string} options.graphNodeIdentifier - Identifier for the graph node.
   * @param {number} options.maxResults - Maximum number of results to retrieve.
   * @param {string} options.continuationToken - Token for continuation in results.
   * @param {string} options.prefix - Prefix to filter results.
   * @param {string} options.suffix - Suffix to filter results.
   * @param {string} options.marker - Marker for pagination.
   * @param {string} options.delimiter - Delimiter for separating values.
   * @param {string} options.token - Token for authorization.
   * @param {boolean} options.includeData - Flag to include subordinate data.
   * @param {boolean} options.includeOwners - Flag to include owners (default: true for S3 compatibility).
   * @param {Array<SearchFilter>} options.filters - Search filters to apply.
   * @param {EnumerationOrderEnum} options.ordering - Ordering for the enumeration results.
   */
  constructor(options = {}) {
    const {
      timestamp = Date.now(),
      tenant = null,
      tenantGuid = '',
      bucket = null,
      bucketGuid = '',
      collection = null,
      collectionGuid = '',
      sourceDocument = null,
      sourceDocumentGuid = '',
      vectorRepository = null,
      vectorRepositoryGuid = '',
      graphRepository = null,
      graphRepositoryGuid = '',
      graphNodeIdentifier = '',
      maxResults = 1000,
      continuationToken = '',
      prefix = '',
      suffix = '',
      marker = '',
      delimiter = '',
      token = '',
      includeData = false,
      includeOwners = true,
      filters = [],
      ordering = EnumerationOrderEnum.CreatedDescending,
    } = options;

    this.timestamp = timestamp;
    this.tenant = tenant;
    this.tenantGuid = tenantGuid;
    this.bucket = bucket;
    this.bucketGuid = bucketGuid;
    this.collection = collection;
    this.collectionGuid = collectionGuid;
    this.sourceDocument = sourceDocument;
    this.sourceDocumentGuid = sourceDocumentGuid;
    this.vectorRepository = vectorRepository;
    this.vectorRepositoryGuid = vectorRepositoryGuid;
    this.graphRepository = graphRepository;
    this.graphRepositoryGuid = graphRepositoryGuid;
    this.graphNodeIdentifier = graphNodeIdentifier;
    this._maxResults = maxResults;
    this.continuationToken = continuationToken;
    this.prefix = prefix;
    this.suffix = suffix;
    this.marker = marker;
    this.delimiter = delimiter;
    this.token = token;
    this.includeData = includeData;
    this.includeOwners = includeOwners;
    this._filters = filters;
    this.ordering = ordering;
  }

  /**
   * Gets the maximum number of results to retrieve.
   * @return {number}
   */
  get maxResults() {
    return this._maxResults;
  }

  /**
   * Sets the maximum number of results to retrieve.
   * @param {number} value
   * @throws {RangeError} If the value is less than 1 or greater than 1000.
   */
  set maxResults(value) {
    if (value < 1) {
      throw new RangeError('MaxResults must be greater than zero.');
    }
    if (value > 1000) {
      throw new RangeError('MaxResults must be one thousand or less.');
    }
    this._maxResults = value;
  }

  /**
   * Gets the filters for the enumeration.
   * @return {Array<SearchFilter>}
   */
  get filters() {
    return this._filters;
  }

  /**
   * Sets the filters for the enumeration.
   * @param {Array<SearchFilter>} value
   */
  set filters(value) {
    this._filters = value || [];
  }

  /**
   * Creates multiple EnumerationQuery instances from a data table.
   * @param {Array<Object>} dt - Data table to extract information from.
   * @returns {Array<EnumerationQuery>} List of EnumerationQuery instances.
   */
  static fromDataTable(dt) {
    if (!dt || !Array.isArray(dt)) return [];
    return dt.map((row) => EnumerationQuery.fromDataRow(row));
  }
}
