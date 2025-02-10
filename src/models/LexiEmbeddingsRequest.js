/**
 * LexiEmbeddingsRequest represents a request to perform operations related to Lexi embeddings.
 *
 * @property {Object|null} tenant - The tenant metadata associated with the request.
 * @property {Object|null} collection - The collection metadata for the request.
 * @property {Object|null} results - The search results relevant to the request.
 * @property {Object|null} embeddingsRule - The embeddings rule to be applied to the request.
 * @property {Object|null} vectorRepository - The vector repository associated with the request.
 * @property {Object|null} graphRepository - The graph repository associated with the request.
 */
export default class LexiEmbeddingsRequest {
  /**
   * Tenant metadata.
   * @type {Object|null}
   */
  tenant = null;

  /**
   * Collection metadata.
   * @type {Object|null}
   */
  collection = null;

  /**
   * Search results.
   * @type {Object|null}
   */
  results = null;

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
   * Instantiate LexiEmbeddingsRequest with provided parameters.
   * @param {Object|null} tenant - The tenant metadata associated with the request.
   * @param {Object|null} collection - The collection metadata for the request.
   * @param {Object|null} results - The search results relevant to the request.
   * @param {Object|null} embeddingsRule - The embeddings rule to be applied to the request.
   * @param {Object|null} vectorRepository - The vector repository associated with the request.
   * @param {Object|null} graphRepository - The graph repository associated with the request.
   */
  constructor(
    tenant = null,
    collection = null,
    results = null,
    embeddingsRule = null,
    vectorRepository = null,
    graphRepository = null
  ) {
    this.tenant = tenant;
    this.collection = collection;
    this.results = results;
    this.embeddingsRule = embeddingsRule;
    this.vectorRepository = vectorRepository;
    this.graphRepository = graphRepository;
  }
}

// End of LexiEmbeddingsRequest class
