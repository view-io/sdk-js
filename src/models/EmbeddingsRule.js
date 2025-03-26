import { v4 as uuidV4 } from 'uuid';

/**
 * Class representing an Embeddings Rule configuration.
 */
export default class EmbeddingsRule {
  /**
   * Create a new EmbeddingsRule instance.
   *
   * @param {Object} embeddingsRule - Embeddings rule configuration.
   * @param {string} [embeddingsRule.GUID] - Unique identifier for the embeddings rule.
   * @param {string} [embeddingsRule.TenantGUID] - Tenant identifier.
   * @param {string} [embeddingsRule.BucketGUID] - Bucket identifier.
   * @param {string} [embeddingsRule.OwnerGUID] - Owner identifier.
   * @param {string} [embeddingsRule.Name] - Name of the rule.
   * @param {string} [embeddingsRule.ContentType] - Content type (e.g., '*').
   * @param {string} [embeddingsRule.GraphRepositoryGUID] - Identifier for the graph repository.
   * @param {string} [embeddingsRule.VectorRepositoryGUID] - Identifier for the vector repository.
   * @param {string} [embeddingsRule.ProcessingEndpoint] - URL to processing endpoint.
   * @param {string} [embeddingsRule.ProcessingAccessKey] - Access key for processing endpoint.
   * @param {string} [embeddingsRule.EmbeddingsServerUrl] - URL to embeddings server.
   * @param {string} [embeddingsRule.EmbeddingsServerApiKey] - API key for embeddings server.
   * @param {string} [embeddingsRule.EmbeddingsGenerator] - Generator type (e.g., 'LCProxy').
   * @param {string} [embeddingsRule.EmbeddingsGeneratorUrl] - URL of the embeddings generator.
   * @param {string} [embeddingsRule.EmbeddingsGeneratorApiKey] - API key for the embeddings generator.
   * @param {number} [embeddingsRule.BatchSize] - Maximum number of chunks per request.
   * @param {number} [embeddingsRule.MaxGeneratorTasks] - Maximum parallel generation tasks.
   * @param {number} [embeddingsRule.MaxRetries] - Maximum retries per task.
   * @param {number} [embeddingsRule.MaxFailures] - Maximum failures before stopping operation.
   * @param {string} [embeddingsRule.VectorStoreUrl] - URL of the vector store.
   * @param {string} [embeddingsRule.VectorStoreAccessKey] - Access key for vector store.
   * @param {number} [embeddingsRule.MaxContentLength] - Maximum size (in bytes) of content.
   * @param {string|Date} [embeddingsRule.CreatedUtc] - UTC timestamp when rule was created.
   */
  constructor(embeddingsRule) {
    const {
      GUID,
      TenantGUID,
      BucketGUID,
      OwnerGUID,
      Name,
      ContentType,
      GraphRepositoryGUID,
      VectorRepositoryGUID,
      ProcessingEndpoint,
      ProcessingAccessKey,
      EmbeddingsServerUrl,
      EmbeddingsServerApiKey,
      EmbeddingsGenerator,
      EmbeddingsGeneratorUrl,
      EmbeddingsGeneratorApiKey,
      BatchSize,
      MaxGeneratorTasks,
      MaxRetries,
      MaxFailures,
      VectorStoreUrl,
      VectorStoreAccessKey,
      MaxContentLength,
      CreatedUtc,
    } = embeddingsRule;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.BucketGUID = BucketGUID;
    this.OwnerGUID = OwnerGUID;
    this.Name = Name;
    this.ContentType = ContentType;
    this.GraphRepositoryGUID = GraphRepositoryGUID;
    this.VectorRepositoryGUID = VectorRepositoryGUID;

    this.ProcessingEndpoint = ProcessingEndpoint;
    this.ProcessingAccessKey = ProcessingAccessKey;

    this.EmbeddingsServerUrl = EmbeddingsServerUrl;
    this.EmbeddingsServerApiKey = EmbeddingsServerApiKey;
    this.EmbeddingsGenerator = EmbeddingsGenerator;
    this.EmbeddingsGeneratorUrl = EmbeddingsGeneratorUrl;
    this.EmbeddingsGeneratorApiKey = EmbeddingsGeneratorApiKey;

    this.BatchSize = this.validateBatchSize(BatchSize);
    this.MaxGeneratorTasks = this.validateMaxGeneratorTasks(MaxGeneratorTasks);
    this.MaxRetries = this.validateMaxRetries(MaxRetries);
    this.MaxFailures = this.validateMaxFailures(MaxFailures);

    this.VectorStoreUrl = VectorStoreUrl;
    this.VectorStoreAccessKey = VectorStoreAccessKey;
    this.MaxContentLength = this.validateMaxContentLength(MaxContentLength);
    this.CreatedUtc = CreatedUtc;
  }

  validateBatchSize(value) {
    if (value < 1) {
      throw new RangeError('BatchSize must be greater than 0.');
    }
    return value;
  }

  validateMaxGeneratorTasks(value) {
    if (value < 1) {
      throw new RangeError('MaxGeneratorTasks must be greater than 0.');
    }
    return value;
  }

  validateMaxRetries(value) {
    if (value < 1) {
      throw new RangeError('MaxRetries must be greater than 0.');
    }
    return value;
  }

  validateMaxFailures(value) {
    if (value < 1) {
      throw new RangeError('MaxFailures must be greater than 0.');
    }
    return value;
  }

  validateMaxContentLength(value) {
    if (value < 1) {
      throw new RangeError('MaxContentLength must be greater than 0.');
    }
    return value;
  }
}
