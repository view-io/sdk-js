import { v4 as uuidV4 } from 'uuid';

export default class EmbeddingsRule {
  /**
   * @param {Object} embeddingsRule Information about the embeddings rule.
   * @param {string} embeddingsRule.GUID - Embeddings rule GUID (automatically generated if not provided).
   * @param {string} embeddingsRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} embeddingsRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} embeddingsRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} embeddingsRule.Name - Name of the rule (default is null).
   * @param {string} embeddingsRule.ContentType - Content type (default is "text/plain").
   * @param {string} embeddingsRule.Prefix - Prefix (default is null).
   * @param {string} embeddingsRule.Suffix - Suffix (default is null).
   * @param {string} embeddingsRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {string} embeddingsRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {string} embeddingsRule.VectorRepositoryGUID - Vector repository GUID (default is null).
   * @param {string} embeddingsRule.DataFlowEndpoint - Data flow endpoint (default is localhost).
   * @param {string} embeddingsRule.EmbeddingsGenerator - Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy).
   * @param {string} embeddingsRule.GeneratorUrl - Embeddings generator URL (default is localhost).
   * @param {string} embeddingsRule.GeneratorApiKey - Embeddings provider API key (default is null).
   * @param {number} embeddingsRule.BatchSize - Maximum number of chunks to process per request (default is 16).
   * @param {number} embeddingsRule.MaxGeneratorTasks - Maximum number of parallel embeddings generation tasks (default is 16).
   * @param {number} embeddingsRule.MaxRetries - Maximum number of retries per task (default is 3).
   * @param {number} embeddingsRule.MaxFailures - Maximum number of failures before failing the operation (default is 3).
   * @param {string} embeddingsRule.VectorStoreUrl - Vector store URL (default is localhost).
   * @param {number} embeddingsRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} embeddingsRule.RetentionMinutes - Minutes to retain the generated document (default is null).
   * @param {Date} embeddingsRule.CreatedUtc - Creation timestamp (default is current UTC time).
   */
  constructor(embeddingsRule) {
    const {
      GUID = uuidV4(),
      TenantGUID = null,
      BucketGUID = null,
      OwnerGUID = uuidV4(),
      Name = null,
      ContentType = 'text/plain',
      Prefix = null,
      Suffix = null,
      TargetBucketGUID = null,
      GraphRepositoryGUID = null,
      VectorRepositoryGUID = null,
      DataFlowEndpoint = 'http://localhost:8501/processor',
      EmbeddingsGenerator = 'LCProxy', // Default enum value as a string for simplicity
      GeneratorUrl = 'http://localhost:8301/',
      GeneratorApiKey = null,
      BatchSize = 16,
      MaxGeneratorTasks = 16,
      MaxRetries = 3,
      MaxFailures = 3,
      VectorStoreUrl = 'http://localhost:8311/',
      MaxContentLength = 16 * 1024 * 1024,
      RetentionMinutes = null,
      CreatedUtc = new Date(),
    } = embeddingsRule;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.BucketGUID = BucketGUID;
    this.OwnerGUID = OwnerGUID;
    this.Name = Name;
    this.ContentType = ContentType;
    this.Prefix = Prefix;
    this.Suffix = Suffix;
    this.TargetBucketGUID = TargetBucketGUID;
    this.GraphRepositoryGUID = GraphRepositoryGUID;
    this.VectorRepositoryGUID = VectorRepositoryGUID;
    this.DataFlowEndpoint = DataFlowEndpoint;
    this.EmbeddingsGenerator = EmbeddingsGenerator;
    this.GeneratorUrl = GeneratorUrl;
    this.GeneratorApiKey = GeneratorApiKey;

    this.BatchSize = this.validateBatchSize(BatchSize);
    this.MaxGeneratorTasks = this.validateMaxGeneratorTasks(MaxGeneratorTasks);
    this.MaxRetries = this.validateMaxRetries(MaxRetries);
    this.MaxFailures = this.validateMaxFailures(MaxFailures);

    this.VectorStoreUrl = VectorStoreUrl;
    this.MaxContentLength = this.validateMaxContentLength(MaxContentLength);
    this.RetentionMinutes = this.validateRetentionMinutes(RetentionMinutes);
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

  validateRetentionMinutes(value) {
    if (value !== null && value < 1) {
      throw new RangeError('RetentionMinutes must be greater than 0 if specified.');
    }
    return value;
  }
}
