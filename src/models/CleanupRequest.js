/**
 * Represents a cleanup request.
 *
 * @property {Object} tenant - Metadata for the tenant.
 * @property {Object} pool - Metadata for the storage pool.
 * @property {Object} bucket - Metadata for the bucket.
 * @property {Object} dataRepository - Metadata for the data repository.
 * @property {Object} collection - Metadata for the collection.
 * @property {Object} object - Metadata for the object.
 * @property {Object} metadataRule - Rule for metadata cleanup.
 * @property {Object} embeddingsRule - Rule for embeddings cleanup.
 * @property {Object} vectorRepository - Information about the vector repository.
 * @property {Object} graphRepository - Information about the graph repository.
 */
export default class CleanupRequest {
  /**
   * Tenant metadata.
   * @type {TenantMetadata|null}
   */
  tenant = null;

  /**
   * Storage pool.
   * @type {StoragePool|null}
   */
  pool = null;

  /**
   * Bucket metadata.
   * @type {BucketMetadata|null}
   */
  bucket = null;

  /**
   * Data repository.
   * @type {DataRepository|null}
   */
  dataRepository = null;

  /**
   * Collection.
   * @type {Collection|null}
   */
  collection = null;

  /**
   * Object metadata.
   * @type {ObjectMetadata|null}
   */
  object = null;

  /**
   * Metadata rule.
   * @type {MetadataRule|null}
   */
  metadataRule = null;

  /**
   * Embeddings rule.
   * @type {EmbeddingsRule|null}
   */
  embeddingsRule = null;

  /**
   * Vector repository.
   * @type {VectorRepository|null}
   */
  vectorRepository = null;

  /**
   * Graph repository.
   * @type {GraphRepository|null}
   */
  graphRepository = null;

  /**
   * Constructs a new CleanupRequest instance.
   *
   * @param {Object|null} tenant - Metadata for the tenant.
   * @param {Object|null} pool - Metadata for the storage pool.
   * @param {Object|null} bucket - Metadata for the bucket.
   * @param {Object|null} dataRepository - Metadata for the data repository.
   * @param {Object|null} collection - Metadata for the collection.
   * @param {Object|null} object - Metadata for the object.
   * @param {Object|null} metadataRule - Rule for metadata cleanup.
   * @param {Object|null} embeddingsRule - Rule for embeddings cleanup.
   * @param {Object|null} vectorRepository - Information about the vector repository.
   * @param {Object|null} graphRepository - Information about the graph repository.
   */
  constructor({
    tenant = null,
    pool = null,
    bucket = null,
    dataRepository = null,
    collection = null,
    object = null,
    metadataRule = null,
    embeddingsRule = null,
    vectorRepository = null,
    graphRepository = null,
  }) {
    this.tenant = tenant;
    this.pool = pool;
    this.bucket = bucket;
    this.dataRepository = dataRepository;
    this.collection = collection;
    this.object = object;
    this.metadataRule = metadataRule;
    this.embeddingsRule = embeddingsRule;
    this.vectorRepository = vectorRepository;
    this.graphRepository = graphRepository;
  }

  // Additional public or private methods can be added here if needed
}
