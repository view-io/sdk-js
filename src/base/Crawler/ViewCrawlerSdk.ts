import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';
import ApiErrorResponse from '../../models/ApiErrorResponse';
import CrawlFilter from '../../models/CrawlFilter';
import CrawlOperation from '../../models/CrawlOperation';
import CrawlPlan from '../../models/CrawlPlan';
import CrawlSchedule from '../../models/CrawlSchedule';
import DataRepository from '../../models/DataRepository';
import EnumerationResult from '../../models/EnumerationResult';
import ViewSdkBase from '../ViewSDKBase';

/**
 * Crawler service.
 * @module base/ViewCrawlerSdk
 * @version 0.1.0
 */
export default class ViewCrawlerSdk extends ViewSdkBase {
  /**
   * Constructs a new OrchestratorApi.
   * @alias module:base/ViewOrchestratorSdk
   * @class
   * @param {string} tenantGuid - Tenant GUID.
   * @param {string} accessKey - Access key.
   * @param {string} endpoint - Endpoint URL .
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
    this.Header = '[ViewHealthcheckSdk] ';
  }

  //region Data-Repositoty

  /**
   * Retrieve a list of data repositories.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<DataRepository>|ApiErrorResponse>} A promise resolving to an array of DataRepository objects.
   */
  retrieveDataRepositories = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories/';
    return await this.retrieveMany(url, DataRepository, cancelToken);
  };

  /**
   * Retrieve a specific data repository by its GUID.
   *
   * @param {string} repositoryGuid - The GUID of the data repository to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise resolving to the DataRepository object or null.
   * @throws {Error} If the repositoryGuid is null or empty.
   */
  retrieveDataRepository = async (repositoryGuid, cancelToken) => {
    if (!repositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('repositoryGuid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories/' + repositoryGuid;
    return await this.retrieve(url, DataRepository, cancelToken);
  };

  /**
   * Create a new data repository.
   *
   * @param {Object} dataRepository Information about the data repository.
   * @param {number} dataRepository.Id - ID (must be greater than 0).
   * @param {string} dataRepository.GUID - Data repository GUID (automatically generated if not provided).
   * @param {string} dataRepository.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} dataRepository.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} dataRepository.Name - Name of the repository (default is "My file repository").
   * @param {string} dataRepository.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {boolean} dataRepository.UseSsl - Boolean flag to enable SSL (default is false).
   * @param {boolean} dataRepository.IncludeSubdirectories - Include subdirectories (default is true).
   * @param {string} dataRepository.DiskDirectory - Disk directory (default is null).
   * @param {string} dataRepository.S3EndpointUrl - S3 endpoint URL (default is null).
   * @param {string} dataRepository.S3BaseUrl - S3 base URL (default is null).
   * @param {string} dataRepository.S3AccessKey - S3 access key (default is null).
   * @param {string} dataRepository.S3SecretKey - S3 secret key (default is null).
   * @param {string} dataRepository.S3BucketName - S3 bucket name (default is null).
   * @param {string} dataRepository.S3Region - S3 region (default is null).
   * @param {string} dataRepository.AzureEndpointUrl - Azure endpoint URL (default is null).
   * @param {string} dataRepository.AzureAccountName - Azure account name (default is null).
   * @param {string} dataRepository.AzureContainerName - Azure container name (default is null).
   * @param {string} dataRepository.AzureAccessKey - Azure access key (default is null).
   * @param {string} dataRepository.CifsHostname - CIFS hostname (default is null).
   * @param {string} dataRepository.CifsUsername - CIFS username (default is null).
   * @param {string} dataRepository.CifsPassword - CIFS password (default is null).
   * @param {string} dataRepository.CifsShareName - CIFS share name (default is null).
   * @param {string} dataRepository.NfsHostname - NFS hostname (default is null).
   * @param {number} dataRepository.NfsUserId - NFS user ID (must be non-negative).
   * @param {number} dataRepository.NfsGroupId - NFS group ID (must be non-negative).
   * @param {string} dataRepository.NfsShareName - NFS share name (default is null).
   * @param {string} dataRepository.NfsVersion - NFS version (default is null).
   * @param {Date} dataRepository.CreatedUtc - Created timestamp (default is current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise resolving to the created DataRepository object or null.
   * @throws {Error} If the repository is null.
   */
  createDataRepository = async (dataRepository, cancelToken) => {
    if (!dataRepository) {
      GenExceptionHandlersInstance.ArgumentNullException('repository');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories';
    return await this.create(url, dataRepository, DataRepository, cancelToken);
  };

  /**
   * Delete a data repository by its GUID.
   *
   * @param {string} repositoryGuid - The GUID of the data repository to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
   * @throws {Error} If the repositoryGuid is null or empty.
   */
  deleteDataRepository = async (repositoryGuid, cancelToken) => {
    if (!repositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('repositoryGuid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories/' + repositoryGuid;
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Enumerate Data Repositories.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateDataRepositories = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/datarepositories/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  /**
   * Check if a data repository exists by its GUID.
   *
   * @param {string} guid - The GUID of the data repository.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the data repository exists, false otherwise.
   * @throws {Error} If the GUID is null or empty.
   */
  existsDataRepository = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories/' + guid;
    // Use the `exists` method to check for the data repository
    return await this.exists(url, DataRepository, cancelToken);
  };

  /**
   * Update a data repository by its GUID.
   * @param {Object} dataRepository - The updated data repository object.
   * @param {string} dataRepository.GUID - The GUID of the data repository to update.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise resolving to the updated DataRepository object or null.
   * @throws {Error} If the dataRepository is null or empty.
   */
  updateDataRepository = async (dataRepository, cancelToken) => {
    if (!dataRepository || !dataRepository.GUID) {
      GenExceptionHandlersInstance.ArgumentNullException('dataRepository');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/datarepositories/${dataRepository.GUID}`;
    return await this.update(url, dataRepository, DataRepository, cancelToken);
  };

  // region Crawl Schedules
  /**
   * Enumerate Crawl Schedules.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<CrawlSchedule>|null>} A promise resolving to the enumeration result or null.
   */
  enumerateCrawlSchedules = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/crawlschedules/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };
  /**
   * Retrieve All Crawl Schedules.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   *  @returns {Promise<CrawlSchedule[]>} A promise that resolves to an array of crawl schedules.
   */
  retrieveAllCrawlSchedules = async (cancelToken) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlschedules/`;
    return await this.retrieve(url, CrawlSchedule, cancelToken);
  };
  /**
   * Retrieve By ID Crawl Schedules.
   * @param {string} [guid] - GUID of crawl schedules
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlSchedule|null|ApiErrorResponse>} A promise that resolves to the crawl schedule object, or null if not found, or an error response.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveCrawlSchedule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlschedules/${guid}`;
    return await this.retrieve(url, CrawlSchedule, cancelToken);
  };
  /**
   * Create Crawl Schedules.
   * @param {Object} scheduleData - Information about the schedule.
   * @param {string} scheduleData.Name - Name of the schedule.
   * @param {string} scheduleData.Schedule - Type of schedule.
   * @param {number} scheduleData.Interval - The interval value for the schedule.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlSchedule|null|ApiErrorResponse>} A promise that resolves to the created crawl schedule
   * @throws {Error} If the scheduleData is null or empty.
   */
  createCrawlSchedules = async (scheduleData, cancelToken) => {
    if (!scheduleData) {
      GenExceptionHandlersInstance.ArgumentNullException('scheduleData');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlschedules/`;
    return await this.update(url, scheduleData, CrawlSchedule, cancelToken);
  };
  /**
   * Update Crawl Schedules.
   * @param {Object} scheduleData - Information about the schedule.
   * @param {string} scheduleData.GUID - GUID of the schedule.
   * @param {string} scheduleData.Name - Name of the schedule.
   * @param {string} scheduleData.Schedule - Type of schedule.
   * @param {number} scheduleData.Interval - The interval value for the schedule.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlSchedule|ApiErrorResponse>} A promise that resolves to the updated crawl schedule
   * @throws {Error} If the guid is null or empty or If the scheduleData is null or empty .
   */
  updateCrawlSchedules = async (scheduleData, cancelToken) => {
    if (!scheduleData) {
      GenExceptionHandlersInstance.ArgumentNullException('scheduleData');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlschedules/${scheduleData.GUID}`;
    return await this.update(url, scheduleData, CrawlSchedule, cancelToken);
  };
  /**
   * Delete Crawl Schedule.
   *
   * @param {string} guid - The GUID of the crawl schedule to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
   * @throws {Error} If the guid is null or empty.
   */
  deleteCrawlSchedule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlschedules/${guid}`;
    return await this.deleteRaw(url, cancelToken);
  };
  /**
   * Check Existence of Crawl Schedule.
   *
   * @param {string} guid - GUID of Crawl Schedule.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the Crawl Schedule exists, otherwise `false` or an error response if the check fails.
   * @throws {Error} If the guid is null or empty.
   */
  existsCrawlSchedule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlschedules/${guid}`;
    return await this.exists(url, cancelToken);
  };

  // region Crawl filter
  /**
   * Enumerate Crawl Filters.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<CrawlFilter>|null>} A promise resolving to the enumeration result or null.
   */
  enumerateCrawlFilters = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/crawlfilters/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };
  /**
   * Retrieve All Crawl Filters.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlFilter[]>} A promise resolving to the created Trigger object or null if creation fails.
   */
  retrieveCrawlFilters = async (cancelToken) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlfilters/`;
    return await this.retrieveMany(url, CrawlFilter, cancelToken);
  };
  /**
   * Retrieve By Id Crawl Filters.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * * @param {string} [guid] - GUID of crawl Filters
   * @returns {Promise<CrawlFilter|null|ApiErrorResponse>} A promise that resolves to the crawl filter object, or null if not found, or an error response.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveCrawlFilter = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlfilters/${guid}`;
    return await this.retrieve(url, CrawlFilter, cancelToken);
  };
  /**
   * Create Crawl Filters.
   * @param {Object} crawlFiltersData - Information about the crawl filter.
   * @param {string} crawlFiltersData.Name - Name of the crawl filter .
   * @param {number} crawlFiltersData.MinimumSize - Minimum size of the files to include in the crawl filter.
   * @param {number} crawlFiltersData.MaximumSize - Maximum size of the files to include in the crawl filter.
   * @param {boolean} crawlFiltersData.IncludeSubdirectories - Whether to include subdirectories in the crawl filter (true or false).
   * @param {string} crawlFiltersData.ContentType - The content type to filter.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlFilter|null|ApiErrorResponse>} A promise that resolves to the crawl filter object, or null if not found, or an error response.
   * @throws {Error} If the crawlFiltersData is null or empty.
   */
  createCrawlFilter = async (crawlFiltersData, cancelToken) => {
    if (!crawlFiltersData) {
      GenExceptionHandlersInstance.ArgumentNullException('crawlFiltersData');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlfilters/`;
    return await this.create(url, crawlFiltersData, CrawlFilter, cancelToken);
  };
  /**
   * Update Crawl Filters.
   * @param {Object} crawlFilterData - Information about the schedule.
   * @param {string} crawlFilterData.GUID - GUID of the filter.
   * @param {string} crawlFilterData.Name - Name of the filter (e.g., "My updated filter").
   * @param {number} crawlFilterData.MinimumSize - Minimum file size to include in the filter (e.g., 1 byte).
   * @param {number} crawlFilterData.MaximumSize - Maximum file size to include in the filter (e.g., 134217728 bytes, or 128 MB).
   * @param {boolean} crawlFilterData.IncludeSubdirectories - Whether to include subdirectories in the filter (true or false).
   * @param {string} crawlFilterData.ContentType - The content type to filter (e.g., "*").
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlFilter|null|ApiErrorResponse>} A promise that resolves to the crawl filter object, or null if not found, or an error response.
   * @throws {Error} If the guid is null or empty or If crawlFiltersData is null or empty.
   */
  updateCrawlFilter = async (crawlFilterData, cancelToken) => {
    if (!crawlFilterData || !crawlFilterData.GUID) {
      GenExceptionHandlersInstance.ArgumentNullException('crawlFilterData or crawlFilterData.GUID');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlfilters/${crawlFilterData.GUID}`;

    return await this.update(url, crawlFilterData, CrawlFilter, cancelToken);
  };
  /**
   * Delete Crawl Filters.
   *
   * @param {string} [guid] - GUID of Crawl Filters
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
   * @throws {Error} If the guid is null or empty.
   */
  deleteCrawlFilter = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlfilters/${guid}`;
    return await this.deleteRaw(url, cancelToken);
  };
  /**
   * Check Existence Crawl Filters.
   *
   * @param {string} [guid] - GUID of Crawl Filters
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the crawl filter object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  existsCrawlFilter = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlfilters/${guid}`;
    return await this.exists(url, cancelToken);
  };

  // region Crawl Plans
  /**
   * Enumerate Crawl Plans.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<CrawlPlan>|null>} A promise resolving to the enumeration result or null.
   */
  enumerateCrawlPlans = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/crawlplans/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };
  /**
   * Retrieve All Crawl Plans.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   *@returns {Promise<CrawlPlan[]>} A promise resolving to an array of CrawlPlan objects. If creation fails, the promise resolves to null.
   */
  retrieveCrawlPlans = async (cancelToken) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlplans/`;
    return await this.retrieveMany(url, CrawlPlan, cancelToken);
  };
  /**
   * Retrieve By Id Crawl Plans.
   * @param {string} [guid] - GUID of crawl Plans
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   *@returns {Promise<CrawlPlan[]>} A promise resolving CrawlPlan objects. If creation fails, the promise resolves to null.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveCrawlPlan = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlplans/${guid}`;
    return await this.retrieve(url, CrawlPlan, cancelToken);
  };
  /**
   * Write Crawl Plans.
   * @param {Object} crawlPlanData - An object containing information about the crawl plan.
   * @param {string} crawlPlanData.DataRepositoryGUID - The GUID of the data repository associated with the crawl plan.
   * @param {string} crawlPlanData.CrawlScheduleGUID - The GUID of the crawl schedule for the plan.
   * @param {string} crawlPlanData.CrawlFilterGUID - The GUID of the crawl filter to be applied.
   * @param {string} crawlPlanData.Name - The name of the crawl plan.
   * @param {string} crawlPlanData.EnumerationDirectory - The directory path where enumerations will be stored.
   * @param {number} crawlPlanData.EnumerationsToRetain - The number of enumerations to retain in the system.
   * @param {string} crawlPlanData.MetadataRuleGUID - The GUID of the metadata rule to be applied.
   * @param {string} crawlPlanData.ProcessingEndpoint - The URL endpoint for processing data.
   * @param {string} crawlPlanData.ProcessingAccessKey - The access key used for authenticating to the processing endpoint.
   * @param {string} crawlPlanData.CleanupEndpoint - The URL endpoint for performing cleanup operations.
   * @param {string} crawlPlanData.CleanupAccessKey - The access key used for authenticating to the cleanup endpoint.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   *@returns {Promise<CrawlPlan[]>} A promise resolving CrawlPlan objects. If creation fails, the promise resolves to null.
   * @throws {Error} If the crawlPlansData is null or empty.
   */
  createCrawlPlan = async (crawlPlansData, cancelToken) => {
    if (!crawlPlansData) {
      GenExceptionHandlersInstance.ArgumentNullException('crawlPlansData');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlplans`;
    return await this.create(url, crawlPlansData, CrawlPlan, cancelToken);
  };
  /**
   * Update Crawl Plan.
   * @param {Object} crawlPlanData - Information about the crawl plan to update.
   * @param {string} crawlPlanData.GUID - GUID of the crawl plan to update.
   * @param {string} crawlPlanData.DataRepositoryGUID - GUID of the data repository associated with the crawl plan.
   * @param {string} crawlPlanData.CrawlScheduleGUID - GUID of the crawl schedule for the crawl plan.
   * @param {string} crawlPlanData.CrawlFilterGUID - GUID of the crawl filter applied to the crawl plan.
   * @param {string} crawlPlanData.MetadataRuleGUID - GUID of the metadata rule to be applied in the crawl plan.
   * @param {string} crawlPlanData.Name - The updated name of the crawl plan.
   * @param {string} crawlPlanData.EnumerationDirectory - Directory for storing enumerations in the updated crawl plan.
   * @param {number} crawlPlanData.EnumerationsToRetain - Number of enumerations to retain after updating the crawl plan.
   * @param {number} crawlPlanData.MaxDrainTasks - Maximum number of drain tasks to run concurrently for the updated crawl plan.
   * @param {boolean} crawlPlanData.ProcessAdditions - Whether to process new additions in the updated crawl plan (true or false).
   * @param {boolean} crawlPlanData.ProcessDeletions - Whether to process deletions in the updated crawl plan (true or false).
   * @param {boolean} crawlPlanData.ProcessUpdates - Whether to process updates in the updated crawl plan (true or false).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlPlan | null>} A promise resolving of CrawlPlan objects if the update is successful, or null if the update fails.
   * @throws {Error} If the guid is null or empty or If the crawlPlanData is null or empty.
   */
  updateCrawlPlan = async (crawlPlanData, cancelToken) => {
    if (!crawlPlanData) {
      GenExceptionHandlersInstance.ArgumentNullException('crawlPlanData');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlplans/${crawlPlanData.GUID}`;

    return await this.update(url, crawlPlanData, CrawlPlan, cancelToken);
  };
  /**
   * Delete Crawl Plans.
   *
   * @param {string} [guid] - GUID of Crawl Plans
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
   * @throws {Error} If the guid is null or empty.
   */
  deleteCrawlPlan = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlplans/${guid}`;
    return await this.deleteRaw(url, cancelToken);
  };
  /**
   * Check Existence Crawl Plans.
   *
   * @param {string} [guid] - GUID of Crawl Plans
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the Node object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  existsCrawlPlan = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawlplans/${guid}`;
    return await this.exists(url, cancelToken);
  };

  // region Crawl Operations
  /**
   * Enumerate Crawl Operations.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<CrawlOperation>|null>} A promise resolving to the enumeration result or null.
   */
  enumerateCrawlOperations = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/crawloperations/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };
  /**
   * Retrieve All Crawl Operations.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation[] | null>} A promise resolving to an array of CrawlOperation objects if the operation is successful,
   */
  retrieveCrawlOperations = async (cancelToken) => {
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawloperations/`;
    return await this.retrieveMany(url, CrawlOperation, cancelToken);
  };
  /**
   * Retrieve By Id Crawl Operations.
   * @param {string} [guid] - GUID of crawl operations
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation|ApiErrorResponse>}  A promise resolving to a CrawlOperation object if the operation is successful,  or an ApiErrorResponse if an error occurs.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveCrawlOperation = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawloperations/${guid}`;
    return await this.retrieve(url, CrawlOperation, cancelToken);
  };
  /**
   * Retrieve enumeration Crawl Operations.
   * @param {string} [guid] - GUID of crawl operations
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation|ApiErrorResponse>}  A promise resolving to a CrawlOperation object if the operation is successful,  or an ApiErrorResponse if an error occurs.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveEnumerationCrawlOperations = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawloperations/${guid}/enumeration`;
    return await this.retrieve(url, CrawlOperation, cancelToken);
  };
  /**
   * Start Crawl Operations.
   * @param {string} [guid] - The GUID of the crawl plan.
   * @param {Object} crawlOperationData - Information about the crawl operation to start.
   * @param {string} crawlOperationData.Name - The name of the tenant for which the crawl operation is being started.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation|ApiErrorResponse>}  A promise resolving to a CrawlOperation object if the operation is start,  or an ApiErrorResponse if an error occurs.
   * @throws {Error} If the guid is null or empty or crawlOperationsData null or empty.
   */
  startCrawlOperation = async (guid, crawlOperationData, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    if (!crawlOperationData) {
      GenExceptionHandlersInstance.ArgumentNullException('crawlOperationData');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawloperations/${guid}/start`;
    return await this.post(url, crawlOperationData, CrawlOperation, cancelToken);
  };
  /**
   * Stop Crawl Operations.
   * @param {string} [guid] - The GUID of the crawl plan.
   * @param {Object} crawlOperationData - Information about the crawl operation to start.
   * @param {string} crawlOperationData.Name - The name of the tenant for which the crawl operation is being started.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CrawlOperation|ApiErrorResponse>}  A promise resolving to a CrawlOperation object if the operation is stop,  or an ApiErrorResponse if an error occurs.
   * @throws {Error} If the guid is null or empty or crawlOperationsData null or empty.
   */
  stopCrawlOperation = async (guid, crawlOperationData, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    if (!crawlOperationData) {
      GenExceptionHandlersInstance.ArgumentNullException('crawlOperationData');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawloperations/${guid}/stop`;
    return await this.post(url, crawlOperationData, CrawlOperation, cancelToken);
  };
  /**
   * Delete Crawl Operations.
   *
   * @param {string} [guid] - GUID of Crawl Operations
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
   * @throws {Error} If the guid is null or empty.
   */
  deleteCrawlOperation = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawloperations/${guid}`;
    return await this.deleteRaw(url, cancelToken);
  };
  /**
   * Check Existence Crawl Operations.
   *
   * @param {string} [guid] - GUID of Crawl Operations
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to the Crawl Operations object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  existsCrawlOperation = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}/v1.0/tenants/${this.tenantGuid}/crawloperations/${guid}`;
    return await this.exists(url, cancelToken);
  };
}
