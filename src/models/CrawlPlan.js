/**
 * Represents a crawl plan linking to repository, schedule, and filter.
 *
 * @property {string} GUID - Globally unique identifier for the crawl plan.
 * @property {string} TenantGUID - Tenant identifier.
 * @property {string} DataRepositoryGUID - Identifier of the data repository.
 * @property {string} CrawlScheduleGUID - Identifier of the crawl schedule.
 * @property {string} CrawlFilterGUID - Identifier of the crawl filter.
 * @property {string} MetadataRuleGUID - Identifier of the metadata rule.
 * @property {string} EmbeddingsRuleGUID - Identifier of the embeddings rule.
 * @property {string} Name - Name of the crawl plan.
 * @property {string} EnumerationDirectory - Directory path for enumerations.
 * @property {number} EnumerationsToRetain - Number of enumerations to keep.
 * @property {number} MaxDrainTasks - Maximum number of tasks for writing.
 * @property {boolean} ProcessAdditions - Whether to process new files.
 * @property {boolean} ProcessDeletions - Whether to process deletions.
 * @property {boolean} ProcessUpdates - Whether to process updated files.
 * @property {string} CreatedUtc - Creation timestamp in ISO string format.
 */
export default class CrawlPlan {
  /**
   * @param {Object} plan - Crawl plan definition.
   */
  constructor(plan = {}) {
    const {
      GUID,
      TenantGUID,
      DataRepositoryGUID,
      CrawlScheduleGUID,
      CrawlFilterGUID,
      MetadataRuleGUID,
      EmbeddingsRuleGUID,
      Name,
      EnumerationDirectory,
      EnumerationsToRetain,
      MaxDrainTasks,
      ProcessAdditions,
      ProcessDeletions,
      ProcessUpdates,
      CreatedUtc,
    } = plan;

    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.DataRepositoryGUID = DataRepositoryGUID;
    this.CrawlScheduleGUID = CrawlScheduleGUID;
    this.CrawlFilterGUID = CrawlFilterGUID;
    this.MetadataRuleGUID = MetadataRuleGUID;
    this.EmbeddingsRuleGUID = EmbeddingsRuleGUID;
    this.Name = Name;
    this.EnumerationDirectory = EnumerationDirectory;
    this.EnumerationsToRetain = EnumerationsToRetain;
    this.MaxDrainTasks = MaxDrainTasks;
    this.ProcessAdditions = ProcessAdditions;
    this.ProcessDeletions = ProcessDeletions;
    this.ProcessUpdates = ProcessUpdates;
    this.CreatedUtc = CreatedUtc;
  }
}
