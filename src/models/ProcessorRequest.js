/**
 * Represents a request to the processor.
 *
 * @property {Object} tenant - Metadata about the tenant.
 * @property {Object} pool - Metadata about the storage pool.
 * @property {Object} bucket - Metadata about the bucket.
 * @property {Object} dataRepository - Metadata about the data repository.
 * @property {Object} collection - Metadata about the collection.
 * @property {Object} object - Metadata about the object being processed.
 * @property {Object} metadataRule - Rules for processing metadata.
 * @property {Object} embeddingsRule - Rules for generating embeddings.
 * @property {Object} vectorRepository - Information about the vector repository.
 * @property {Object} graphRepository - Information about the graph repository.
 */
export default class ProcessorRequest {
  /**
   * Tenant metadata.
   * @type {Object|null}
   */
  tenant = null;

  /**
   * Storage pool.
   * @type {Object|null}
   */
  pool = null;

  /**
   * Bucket metadata.
   * @type {Object|null}
   */
  bucket = null;

  /**
   * Data repository.
   * @type {Object|null}
   */
  dataRepository = null;

  /**
   * Collection.
   * @type {Collection|null}
   */
  collection = null;

  /**
   * Object metadata.
   * @type {Object|null}
   */
  object = null;

  /**
   * Metadata rule.
   * @type {Object|null}
   */
  metadataRule = null;

  /**
   * Embeddings rule.
   * @type {Object|null}
   */
  embeddingsRule = null;

  /**
   * Vector repository.
   * @type {Object|null}
   */
  vectorRepository = null;

  /**
   * Graph repository.
   * @type {Object|null}
   */
  graphRepository = null;

  /**
   * Constructs a new instance of ProcessorRequest.
   */
  constructor() {
    this.tenant = null;
    this.pool = null;
    this.bucket = null;
    this.dataRepository = null;
    this.collection = null;
    this.object = null;
    this.metadataRule = null;
    this.embeddingsRule = null;
    this.vectorRepository = null;
    this.graphRepository = null;
  }

  // Additional public or private methods can be added here if needed
}
