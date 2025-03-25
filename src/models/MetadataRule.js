import { v4 as uuidV4 } from 'uuid';

/**
 * Class representing a Metadata Rule configuration.
 */
export default class MetadataRule {
  /**
   * Create a new MetadataRule instance.
   *
   * @param {Object} metadataRule - Metadata rule configuration.
   * @param {string} [metadataRule.GUID] - Unique identifier for the metadata rule.
   * @param {string} [metadataRule.TenantGUID] - Tenant identifier.
   * @param {string} [metadataRule.BucketGUID] - Bucket identifier.
   * @param {string} [metadataRule.OwnerGUID] - Owner identifier.
   * @param {string} [metadataRule.Name] - Name of the rule.
   * @param {string} [metadataRule.ContentType] - Content type to match (e.g., '*', 'text/plain').
   * @param {string} [metadataRule.ProcessingEndpoint] - URL to processing endpoint.
   * @param {string} [metadataRule.ProcessingAccessKey] - Access key for processing endpoint.
   * @param {string} [metadataRule.CleanupEndpoint] - URL to cleanup endpoint.
   * @param {string} [metadataRule.CleanupAccessKey] - Access key for cleanup endpoint.
   * @param {number} [metadataRule.MinChunkContentLength] - Minimum length of chunk content.
   * @param {number} [metadataRule.MaxChunkContentLength] - Maximum length of chunk content.
   * @param {number} [metadataRule.MaxTokensPerChunk] - Maximum number of tokens per chunk.
   * @param {number} [metadataRule.ShiftSize] - Number of bytes to shift window when chunking.
   * @param {boolean} [metadataRule.ImageTextExtraction] - Enable image text extraction.
   * @param {string} [metadataRule.DataCatalogType] - Data catalog type (e.g., 'Lexi').
   * @param {string} [metadataRule.DataCatalogEndpoint] - Endpoint URL for data catalog.
   * @param {string} [metadataRule.DataCatalogAccessKey] - Access key for data catalog.
   * @param {string} [metadataRule.DataCatalogCollection] - Data catalog collection ID.
   * @param {string} [metadataRule.GraphRepositoryGUID] - Identifier for the graph repository.
   * @param {number} [metadataRule.TopTerms] - Number of top terms to extract.
   * @param {boolean} [metadataRule.CaseInsensitive] - Enable case-insensitive processing.
   * @param {boolean} [metadataRule.IncludeFlattened] - Include flattened document representation.
   * @param {number} [metadataRule.MaxContentLength] - Maximum size (in bytes) of content to process.
   * @param {string|Date} [metadataRule.CreatedUtc] - UTC timestamp when the rule was created.
   */
  constructor(metadataRule) {
    const {
      GUID = uuidV4(),
      TenantGUID = null,
      BucketGUID = null,
      OwnerGUID = uuidV4(),
      Name = null,
      ContentType = 'text/plain',
      ProcessingEndpoint = 'http://localhost:8000/v1.0/tenants/default/processing',
      ProcessingAccessKey = 'default',
      CleanupEndpoint = 'http://localhost:8000/v1.0/tenants/default/processing/cleanup',
      CleanupAccessKey = 'default',
      MinChunkContentLength = 2,
      MaxChunkContentLength = 512,
      MaxTokensPerChunk = 1920,
      ShiftSize = 512,
      ImageTextExtraction = false,
      DataCatalogType = 'Lexi',
      DataCatalogEndpoint = 'http://localhost:8000/',
      DataCatalogAccessKey = 'default',
      DataCatalogCollection = null,
      GraphRepositoryGUID = null,
      TopTerms = 25,
      CaseInsensitive = true,
      IncludeFlattened = true,
      MaxContentLength = 16 * 1024 * 1024,
      CreatedUtc = new Date(),
    } = metadataRule;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.BucketGUID = BucketGUID;
    this.OwnerGUID = OwnerGUID;
    this.Name = Name;
    this.ContentType = ContentType;

    this.ProcessingEndpoint = ProcessingEndpoint;
    this.ProcessingAccessKey = ProcessingAccessKey;
    this.CleanupEndpoint = CleanupEndpoint;
    this.CleanupAccessKey = CleanupAccessKey;

    this.MinChunkContentLength = MinChunkContentLength;
    this.MaxChunkContentLength = this.validateMaxChunkContentLength(MaxChunkContentLength);
    this.ShiftSize = this.validateShiftSize(ShiftSize, this.MaxChunkContentLength);
    this.MaxTokensPerChunk = MaxTokensPerChunk;

    this.ImageTextExtraction = ImageTextExtraction;

    this.DataCatalogType = DataCatalogType;
    this.DataCatalogEndpoint = DataCatalogEndpoint;
    this.DataCatalogAccessKey = DataCatalogAccessKey;
    this.DataCatalogCollection = DataCatalogCollection;
    this.GraphRepositoryGUID = GraphRepositoryGUID;

    this.TopTerms = this.validateTopTerms(TopTerms);
    this.CaseInsensitive = CaseInsensitive;
    this.IncludeFlattened = IncludeFlattened;
    this.MaxContentLength = this.validateMaxContentLength(MaxContentLength);
    this.CreatedUtc = new Date(CreatedUtc);
  }

  validateMaxChunkContentLength(value) {
    if (value < 256 || value > 16384) {
      throw new RangeError('MaxChunkContentLength must be between 256 and 16384.');
    }
    return value;
  }

  validateShiftSize(value, maxChunkContentLength) {
    if (value < 1 || value > maxChunkContentLength) {
      throw new RangeError('ShiftSize must be greater than 0 and less than or equal to MaxChunkContentLength.');
    }
    return value;
  }

  validateTopTerms(value) {
    if (value < 1) {
      throw new RangeError('TopTerms must be greater than 0.');
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
