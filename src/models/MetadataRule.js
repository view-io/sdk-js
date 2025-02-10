import { v4 as uuidV4 } from 'uuid';

export default class MetadataRule {
  /**
   * @param {Object} metadataRule Information about the metadata rule.
   * @param {string} metadataRule.GUID - Metadata rule GUID (automatically generated if not provided).
   * @param {string} metadataRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} metadataRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} metadataRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} metadataRule.Name - Name of the rule (default is null).
   * @param {string} metadataRule.ContentType - Content type (default is "text/plain").
   * @param {string} metadataRule.Prefix - Prefix (default is null).
   * @param {string} metadataRule.Suffix - Suffix (default is null).
   * @param {string} metadataRule.ProcessingEndpoint - Processing endpoint (default is localhost).
   * @param {string} metadataRule.CleanupEndpoint - Cleanup endpoint (default is localhost).
   * @param {string} metadataRule.TypeDetectorEndpoint - Type detector endpoint (default is localhost).
   * @param {string} metadataRule.SemanticCellEndpoint - Semantic cell endpoint (default is localhost).
   * @param {number} metadataRule.MaxChunkContentLength - Maximum chunk content length (default is 512).
   * @param {number} metadataRule.ShiftSize - Shift size (default is 512).
   * @param {string} metadataRule.UdrEndpoint - UDR endpoint (default is localhost).
   * @param {string} metadataRule.DataCatalogType - Data catalog type (default is DataCatalogTypeEnum.Lexi).
   * @param {string} metadataRule.DataCatalogEndpoint - Data catalog endpoint (default is localhost).
   * @param {string} metadataRule.DataCatalogCollection - Data catalog collection identifier (default is null).
   * @param {string} metadataRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {number} metadataRule.TopTerms - Number of top terms to request (default is 25).
   * @param {boolean} metadataRule.CaseInsensitive - Enable case insensitive processing (default is true).
   * @param {boolean} metadataRule.IncludeFlattened - Enable inclusion of flattened representation (default is true).
   * @param {string} metadataRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {number} metadataRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} metadataRule.RetentionMinutes - Minutes to retain generated document (default is null).
   * @param {Date} metadataRule.CreatedUtc - Creation timestamp (default is current UTC time).
   */
  constructor(metadataRule) {
    const {
      GUID = uuidV4(),
      TenantGUID = null,
      BucketGUID = null,
      OwnerGUID = uuidV4(),
      Name = null,
      ContentType = 'text/plain',
      Prefix = null,
      Suffix = null,
      ProcessingEndpoint = 'http://localhost:8501/processor',
      CleanupEndpoint = 'http://localhost:8501/processor/cleanup',
      TypeDetectorEndpoint = 'http://localhost:8501/processor/typedetector',
      SemanticCellEndpoint = 'http://localhost:8341/',
      MaxChunkContentLength = 512,
      ShiftSize = 512,
      UdrEndpoint = 'http://localhost:8321/',
      DataCatalogType = 'Lexi', // Default enum value as a string for simplicity
      DataCatalogEndpoint = 'http://localhost:8201/',
      DataCatalogCollection = null,
      GraphRepositoryGUID = null,
      TopTerms = 25,
      CaseInsensitive = true,
      IncludeFlattened = true,
      TargetBucketGUID = null,
      MaxContentLength = 16 * 1024 * 1024,
      RetentionMinutes = null,
      CreatedUtc = new Date(),
    } = metadataRule;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.BucketGUID = BucketGUID;
    this.OwnerGUID = OwnerGUID;
    this.Name = Name;
    this.ContentType = ContentType;
    this.Prefix = Prefix;
    this.Suffix = Suffix;
    this.ProcessingEndpoint = ProcessingEndpoint;
    this.CleanupEndpoint = CleanupEndpoint;
    this.TypeDetectorEndpoint = TypeDetectorEndpoint;
    this.SemanticCellEndpoint = SemanticCellEndpoint;

    this.MaxChunkContentLength = this.validateMaxChunkContentLength(MaxChunkContentLength);
    this.ShiftSize = this.validateShiftSize(ShiftSize, this.MaxChunkContentLength);

    this.UdrEndpoint = UdrEndpoint;
    this.DataCatalogType = DataCatalogType;
    this.DataCatalogEndpoint = DataCatalogEndpoint;
    this.DataCatalogCollection = DataCatalogCollection;
    this.GraphRepositoryGUID = GraphRepositoryGUID;
    this.TopTerms = this.validateTopTerms(TopTerms);
    this.CaseInsensitive = CaseInsensitive;
    this.IncludeFlattened = IncludeFlattened;
    this.TargetBucketGUID = TargetBucketGUID;
    this.MaxContentLength = this.validateMaxContentLength(MaxContentLength);
    this.RetentionMinutes = this.validateRetentionMinutes(RetentionMinutes);
    this.CreatedUtc = CreatedUtc;
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

  validateRetentionMinutes(value) {
    if (value !== null && value < 1) {
      throw new RangeError('RetentionMinutes must be greater than 0 if specified.');
    }
    return value;
  }
}
