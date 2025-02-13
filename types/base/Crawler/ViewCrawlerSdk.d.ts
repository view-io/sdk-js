/**
 * Crawler service.
 * @module base/ViewCrawlerSdk
 * @version 0.1.0
 */
export default class ViewCrawlerSdk extends ViewSdkBase {
    Header: string;
    /**
     * Enumerate Data Repositories.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult<DataRepository>|null>} A promise resolving to the enumeration result or null.
     */
    enumerateDataRepositories: (cancelToken?: object) => Promise<EnumerationResult<DataRepository> | null>;
    /**
     * Retrieve All Data Repositories.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataRepository[]>} A promise that resolves to an array of data repositories.
     */
    retrieveAllDataRepositories: (cancelToken?: object) => Promise<DataRepository[]>;
    /**
     * Retrieve Data By GUID Repository.
     * @param {string} guid - The GUID of the data repository to retrieve.
     * @param {CancelToken} cancelToken - The token to cancel the operation.
     * @returns {Promise<DataRepository|ApiErrorResponse>} A promise that resolves to the data repository object, or null if not found, or an error response.
     */
    retrieveByGUIDDataRepositories: (guid: string, cancelToken: CancelToken) => Promise<DataRepository | ApiErrorResponse>;
    /**
     * Write Disk Data Repository.
     * @param {Object} repository - Information about the repository object data.
     * @param {string} repository.Name - Name of repository.
     * @param {string} [repository.RepositoryType] - Type of repository.
     * @param {string} repository.DiskDirectory - The directory path for storing the repository.
     * @param {boolean} repository.DiskIncludeSubdirectories - Whether to include subdirectories in the disk directory.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise that resolves to the written data repository object, or null if the write fails, or an error response.
     * @throws {Error} If the repository is null or empty.
     */
    writeDiskDataRepository: (repository: {
        Name: string;
        RepositoryType?: string;
        DiskDirectory: string;
        DiskIncludeSubdirectories: boolean;
    }, cancelToken?: object) => Promise<DataRepository | null | ApiErrorResponse>;
    /**
     * Write S3 Data Repository.
     * @param {Object} repository - Information about the repository object data.
     * @param {string} repository.TenantGUID - GUID of the tenant (e.g., "default").
     * @param {string} repository.OwnerGUID - GUID of the owner (e.g., "default").
     * @param {string} repository.Name - Name of the repository.
     * @param {string} repository.RepositoryType - Type of the repository.
     * @param {string|null} [repository.S3EndpointUrl] - (Optional) URL for the S3 endpoint (null if not provided).
     * @param {string} repository.S3BaseUrl - Base URL for the S3 repository, with placeholders for bucket and key").
     * @param {string} repository.S3AccessKey - Access key for the S3 repository.
     * @param {string} repository.S3SecretKey - Secret key for the S3 repository.
     * @param {string} repository.S3BucketName - Name of the S3 bucket.
     * @param {string} repository.S3Region - Region of the S3 bucket.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise that resolves to the written data repository object, or null if the write fails, or an error response.
     * @throws {Error} If the repository is null or empty.
     */
    writeS3DataRepository: (repository: {
        TenantGUID: string;
        OwnerGUID: string;
        Name: string;
        RepositoryType: string;
        S3EndpointUrl?: string | null;
        S3BaseUrl: string;
        S3AccessKey: string;
        S3SecretKey: string;
        S3BucketName: string;
        S3Region: string;
    }, cancelToken?: object) => Promise<DataRepository | null | ApiErrorResponse>;
    /**
     * Write S3 Compatible Storage Data Repository.
     * @param {Object} repository - Information about the repository object data.
     * @param {string} repository.TenantGUID - GUID of the tenant.
     * @param {string} repository.OwnerGUID - GUID of the owner.
     * @param {string} repository.Name - Name of the repository.
     * @param {string} repository.RepositoryType - Type of the repository.
     * @param {string} repository.S3EndpointUrl - URL of the S3-compatible storage endpoint.
     * @param {string} repository.S3BaseUrl - Base URL for accessing objects in the S3-compatible storage.
     * @param {string} repository.S3AccessKey - Access key for authentication with the S3-compatible storage.
     * @param {string} repository.S3SecretKey - Secret key for authentication with the S3-compatible storage.
     * @param {string} repository.S3BucketName - Name of the S3-compatible storage bucket.
     * @param {string} repository.S3Region - Region of the S3-compatible storage bucket.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise that resolves to the written data repository object, or null if the write fails, or an error response.
     * @throws {Error} If the repository is null or empty.
     */
    writeS3CompatibleDataRepository: (repository: {
        TenantGUID: string;
        OwnerGUID: string;
        Name: string;
        RepositoryType: string;
        S3EndpointUrl: string;
        S3BaseUrl: string;
        S3AccessKey: string;
        S3SecretKey: string;
        S3BucketName: string;
        S3Region: string;
    }, cancelToken?: object) => Promise<DataRepository | null | ApiErrorResponse>;
    /**
     * Write Azure BLOB Data Repository.
     * @param {Object} repository - Information about the repository object data.
     * @param {string} repository.TenantGUID - GUID of the tenant.
     * @param {string} repository.OwnerGUID - GUID of the owner.
     * @param {string} repository.Name - Name of the repository.
     * @param {string} repository.RepositoryType - Type of the repository (e.g., "AzureBlob").
     * @param {string} repository.AzureEndpointUrl - URL of the Azure Blob storage endpoint.
     * @param {string} repository.AzureAccountName - Name of the Azure storage account.
     * @param {string} repository.AzureContainerName - Name of the Azure Blob storage container.
     * @param {string} repository.AzureAccessKey - Access key for authentication with the Azure Blob storage.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise that resolves to the written data repository object, or null if the write fails, or an error response.
     * @throws {Error} If the repository is null or empty.
     */
    writeAzureBLOBDataRepository: (repository: {
        TenantGUID: string;
        OwnerGUID: string;
        Name: string;
        RepositoryType: string;
        AzureEndpointUrl: string;
        AzureAccountName: string;
        AzureContainerName: string;
        AzureAccessKey: string;
    }, cancelToken?: object) => Promise<DataRepository | null | ApiErrorResponse>;
    /**
     * Write CIFS Data Repository.
     * @param {Object} repository - Information about the repository object data.
     * @param {string} repository.TenantGUID - GUID of the tenant.
     * @param {string} repository.OwnerGUID - GUID of the owner.
     * @param {string} repository.Name - Name of the repository.
     * @param {string} repository.RepositoryType - Type of the repository (e.g., "CIFS").
     * @param {string} repository.CifsHostname - Hostname or IP address of the CIFS server.
     * @param {string} repository.CifsUsername - Username for authentication with the CIFS server.
     * @param {string} repository.CifsPassword - Password for authentication with the CIFS server.
     * @param {string} repository.CifsShareName - The name of the CIFS share.
     * @param {boolean} repository.CifsIncludeSubdirectories - Whether to include subdirectories in the CIFS share (true or false).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise that resolves to the written data repository object, or null if the write fails, or an error response.
     * @throws {Error} If the repository is null or empty.
     */
    writeCIFSDataRepository: (repository: {
        TenantGUID: string;
        OwnerGUID: string;
        Name: string;
        RepositoryType: string;
        CifsHostname: string;
        CifsUsername: string;
        CifsPassword: string;
        CifsShareName: string;
        CifsIncludeSubdirectories: boolean;
    }, cancelToken?: object) => Promise<DataRepository | null | ApiErrorResponse>;
    /**
     * Write NFS Data Repository.
     * @param {Object} repository - Information about the repository object data.
     * @param {string} repository.TenantGUID - GUID of the tenant.
     * @param {string} repository.OwnerGUID - GUID of the owner.
     * @param {string} repository.Name - Name of the repository.
     * @param {string} repository.RepositoryType - Type of the repository.
     * @param {string} repository.NfsHostname - Hostname or IP address of the NFS server.
     * @param {number} repository.NfsUserId - User ID (UID) for authentication with the NFS server.
     * @param {number} repository.NfsGroupId - Group ID (GID) for authentication with the NFS server.
     * @param {string} repository.NfsShareName - Name of the NFS share.
     * @param {boolean} repository.NfsIncludeSubdirectories - Whether to include subdirectories in the NFS share (true or false).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise that resolves to the written data repository object, or null if the write fails, or an error response.
     * @throws {Error} If the repository is null or empty.
     */
    writeNFSDataRepository: (repository: {
        TenantGUID: string;
        OwnerGUID: string;
        Name: string;
        RepositoryType: string;
        NfsHostname: string;
        NfsUserId: number;
        NfsGroupId: number;
        NfsShareName: string;
        NfsIncludeSubdirectories: boolean;
    }, cancelToken?: object) => Promise<DataRepository | null | ApiErrorResponse>;
    /**
     * Update Data Repository.
     * @param {Object} repository - Information about the repository object data.
     * @param {string} repository.Name - Name of the repository.
     * @param {string} repository.RepositoryType - Type of the repository.
     * @param {boolean} repository.IncludeSubdirectories - Whether to include subdirectories in the repository (true or false).
     * @param {string} repository.DiskDirectory - Path to the directory where the files are stored.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise that resolves to the written data repository object, or null if the write fails, or an error response.
     * @throws {Error} If the repository is null or empty.
     */
    updateDataRepository: (repository: {
        Name: string;
        RepositoryType: string;
        IncludeSubdirectories: boolean;
        DiskDirectory: string;
    }, cancelToken?: object) => Promise<DataRepository | null | ApiErrorResponse>;
    /**
     * Delete Repository.
     *
     * @param {string} guid - The GUID of the repository to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
      @returns {Promise<void|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
     * @throws {Error} If the guid is null or empty.
     */
    deleteDataRepository: (guid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Check Existence.
     *
     * @param {string} guid - GUID of data repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise that resolves to `true` if the data repository exists, otherwise `false` or an error response if the check fails.
     * @throws {Error} If the guid is null or empty.
     */
    checkExistenceDataRepository: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Enumerate Crawl Schedules.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult<CrawlSchedule>|null>} A promise resolving to the enumeration result or null.
     */
    enumerateCrawlSchedules: (cancelToken?: object) => Promise<EnumerationResult<CrawlSchedule> | null>;
    /**
     * Retrieve All Crawl Schedules.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     *  @returns {Promise<CrawlSchedule[]>} A promise that resolves to an array of crawl schedules.
     */
    retrieveAllCrawlSchedules: (cancelToken?: object) => Promise<CrawlSchedule[]>;
    /**
     * Retrieve By ID Crawl Schedules.
     * @param {string} [guid] - GUID of crawl schedules
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CrawlSchedule|null|ApiErrorResponse>} A promise that resolves to the crawl schedule object, or null if not found, or an error response.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveByIDCrawlSchedules: (guid?: string, cancelToken?: object) => Promise<CrawlSchedule | null | ApiErrorResponse>;
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
    createCrawlSchedules: (scheduleData: {
        Name: string;
        Schedule: string;
        Interval: number;
    }, cancelToken?: object) => Promise<CrawlSchedule | null | ApiErrorResponse>;
    /**
     * Update Crawl Schedules.
     * @param {string} [guid] - GUID of Crawl Schedules
     * @param {Object} scheduleData - Information about the schedule.
     * @param {string} scheduleData.Name - Name of the schedule.
     * @param {string} scheduleData.Schedule - Type of schedule.
     * @param {number} scheduleData.Interval - The interval value for the schedule.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CrawlSchedule|ApiErrorResponse>} A promise that resolves to the updated crawl schedule
     * @throws {Error} If the guid is null or empty or If the scheduleData is null or empty .
     */
    updateCrawlSchedules: (guid?: string, scheduleData: {
        Name: string;
        Schedule: string;
        Interval: number;
    }, cancelToken?: object) => Promise<CrawlSchedule | ApiErrorResponse>;
    /**
     * Delete Crawl Schedule.
     *
     * @param {string} guid - The GUID of the crawl schedule to delete.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
     * @throws {Error} If the guid is null or empty.
     */
    deleteCrawlSchedule: (guid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Check Existence of Crawl Schedule.
     *
     * @param {string} guid - GUID of Crawl Schedule.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise that resolves to `true` if the Crawl Schedule exists, otherwise `false` or an error response if the check fails.
     * @throws {Error} If the guid is null or empty.
     */
    checkExistenceCrawlSchedule: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Enumerate Crawl Filters.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult<CrawlFilter>|null>} A promise resolving to the enumeration result or null.
     */
    enumerateCrawlFilter: (cancelToken?: object) => Promise<EnumerationResult<CrawlFilter> | null>;
    /**
     * Retrieve All Crawl Filters.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CrawlFilter[]>} A promise resolving to the created Trigger object or null if creation fails.
     */
    retrieveAllCrawlFilter: (cancelToken?: object) => Promise<CrawlFilter[]>;
    /**
     * Retrieve By Id Crawl Filters.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * * @param {string} [guid] - GUID of crawl Filters
     * @returns {Promise<CrawlFilter|null|ApiErrorResponse>} A promise that resolves to the crawl filter object, or null if not found, or an error response.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveByIdFilter: (guid?: string, cancelToken?: object) => Promise<CrawlFilter | null | ApiErrorResponse>;
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
    createCrawlFilter: (crawlFiltersData: {
        Name: string;
        MinimumSize: number;
        MaximumSize: number;
        IncludeSubdirectories: boolean;
        ContentType: string;
    }, cancelToken?: object) => Promise<CrawlFilter | null | ApiErrorResponse>;
    /**
     * Update Crawl Filters.
     * @param {string} [guid] - GUID of Crawl Filters
     * @param {Object} scheduleData - Information about the schedule.
     * @param {string} filterData.Name - Name of the filter (e.g., "My updated filter").
     * @param {number} filterData.MinimumSize - Minimum file size to include in the filter (e.g., 1 byte).
     * @param {number} filterData.MaximumSize - Maximum file size to include in the filter (e.g., 134217728 bytes, or 128 MB).
     * @param {boolean} filterData.IncludeSubdirectories - Whether to include subdirectories in the filter (true or false).
     * @param {string} filterData.ContentType - The content type to filter (e.g., "*").
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CrawlFilter|null|ApiErrorResponse>} A promise that resolves to the crawl filter object, or null if not found, or an error response.
     * @throws {Error} If the guid is null or empty or If crawlFiltersData is null or empty.
     */
    updateCrawlFilter: (guid?: string, crawlFiltersData: any, cancelToken?: object) => Promise<CrawlFilter | null | ApiErrorResponse>;
    /**
     * Delete Crawl Filters.
     *
     * @param {string} [guid] - GUID of Crawl Filters
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
     * @throws {Error} If the guid is null or empty.
     */
    deleteCrawlFilter: (guid?: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Check Existence Crawl Filters.
     *
     * @param {string} [guid] - GUID of Crawl Filters
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to the crawl filter object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    checkExistenceCrawlFilter: (guid?: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Enumerate Crawl Plans.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult<CrawlPlan>|null>} A promise resolving to the enumeration result or null.
     */
    enumerateCrawlPlans: (cancelToken?: object) => Promise<EnumerationResult<CrawlPlan> | null>;
    /**
     * Retrieve All Crawl Plans.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     *@returns {Promise<CrawlPlan[]>} A promise resolving to an array of CrawlPlan objects. If creation fails, the promise resolves to null.
     */
    retrieveAllCrawlPlans: (cancelToken?: object) => Promise<CrawlPlan[]>;
    /**
     * Retrieve By Id Crawl Plans.
     * @param {string} [guid] - GUID of crawl Plans
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     *@returns {Promise<CrawlPlan[]>} A promise resolving CrawlPlan objects. If creation fails, the promise resolves to null.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveByIdCrawlPlan: (guid?: string, cancelToken?: object) => Promise<CrawlPlan[]>;
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
    writeCrawlPlans: (crawlPlansData: any, cancelToken?: object) => Promise<CrawlPlan[]>;
    /**
     * Update Crawl Plans.
     * @param {string} [guid] - GUID of Crawl Plans
     * @param {Object} crawlPlanData - Information about the crawl plan to update.
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
    updateCrawlPlans: (guid?: string, crawlPlanData: {
        DataRepositoryGUID: string;
        CrawlScheduleGUID: string;
        CrawlFilterGUID: string;
        MetadataRuleGUID: string;
        Name: string;
        EnumerationDirectory: string;
        EnumerationsToRetain: number;
        MaxDrainTasks: number;
        ProcessAdditions: boolean;
        ProcessDeletions: boolean;
        ProcessUpdates: boolean;
    }, cancelToken?: object) => Promise<CrawlPlan | null>;
    /**
     * Delete Crawl Plans.
     *
     * @param {string} [guid] - GUID of Crawl Plans
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
     * @throws {Error} If the guid is null or empty.
     */
    deleteCrawlPlans: (guid?: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Check Existence Crawl Plans.
     *
     * @param {string} [guid] - GUID of Crawl Plans
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to the Node object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    checkExistenceCrawlPlans: (guid?: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Enumerate Crawl Operations.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult<CrawlOperation>|null>} A promise resolving to the enumeration result or null.
     */
    enumerateCrawlOperations: (cancelToken?: object) => Promise<EnumerationResult<CrawlOperation> | null>;
    /**
     * Retrieve All Crawl Operations.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CrawlOperation[] | null>} A promise resolving to an array of CrawlOperation objects if the operation is successful,
     */
    retrieveAllCrawlOperations: (cancelToken?: object) => Promise<CrawlOperation[] | null>;
    /**
     * Retrieve By Id Crawl Operations.
     * @param {string} [guid] - GUID of crawl operations
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CrawlOperation|ApiErrorResponse>}  A promise resolving to a CrawlOperation object if the operation is successful,  or an ApiErrorResponse if an error occurs.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveByIdCrawlOperations: (guid?: string, cancelToken?: object) => Promise<CrawlOperation | ApiErrorResponse>;
    /**
     * Retrieve enumeration Crawl Operations.
     * @param {string} [guid] - GUID of crawl operations
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CrawlOperation|ApiErrorResponse>}  A promise resolving to a CrawlOperation object if the operation is successful,  or an ApiErrorResponse if an error occurs.
     * @throws {Error} If the guid is null or empty.
     */
    retrieveEnumerationCrawlOperations: (guid?: string, cancelToken?: object) => Promise<CrawlOperation | ApiErrorResponse>;
    /**
     * Start Crawl Operations.
     * @param {string} [guid] - The GUID of the crawl plan.
     * @param {Object} crawlOperationData - Information about the crawl operation to start.
     * @param {string} crawlOperationData.Name - The name of the tenant for which the crawl operation is being started.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CrawlOperation|ApiErrorResponse>}  A promise resolving to a CrawlOperation object if the operation is start,  or an ApiErrorResponse if an error occurs.
     * @throws {Error} If the guid is null or empty or crawlOperationsData null or empty.
     */
    startCrawlOperations: (guid?: string, crawlOperationsData: any, cancelToken?: object) => Promise<CrawlOperation | ApiErrorResponse>;
    /**
     * Stop Crawl Operations.
     * @param {string} [guid] - The GUID of the crawl plan.
     * @param {Object} crawlOperationData - Information about the crawl operation to start.
     * @param {string} crawlOperationData.Name - The name of the tenant for which the crawl operation is being started.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CrawlOperation|ApiErrorResponse>}  A promise resolving to a CrawlOperation object if the operation is stop,  or an ApiErrorResponse if an error occurs.
     * @throws {Error} If the guid is null or empty or crawlOperationsData null or empty.
     */
    stopCrawlOperations: (guid?: string, crawlOperationsData: any, cancelToken?: object) => Promise<CrawlOperation | ApiErrorResponse>;
    /**
     * Delete Crawl Operations.
     *
     * @param {string} [guid] - GUID of Crawl Operations
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to true if the deletion was successful, or an error response if it failed.
     * @throws {Error} If the guid is null or empty.
     */
    deleteCrawlOperations: (guid?: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Check Existence Crawl Operations.
     *
     * @param {string} [guid] - GUID of Crawl Operations
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to the Crawl Operations object or null if not found.
     * @throws {Error} If the guid is null or empty.
     */
    checkExistenceCrawlOperations: (guid?: string, cancelToken?: object) => Promise<boolean>;
}
import ViewSdkBase from '../ViewSDKBase';
import EnumerationResult from '../../models/EnumerationResult';
import DataRepository from '../../models/DataRepository';
import ApiErrorResponse from '../../models/ApiErrorResponse';
import CrawlSchedule from '../../models/CrawlSchedule';
import CrawlFilter from '../../models/CrawlFilter';
import CrawlPlan from '../../models/CrawlPlan';
import CrawlOperation from '../../models/CrawlOperation';
