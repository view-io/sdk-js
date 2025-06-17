import { ViewCrawlerSdk } from 'view-sdk';

const api = new ViewCrawlerSdk(
  'http://view.homedns.org:8000', //endpoint
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default' //access token
);

api.config.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ';

//region Data Repository

const CreateCifsDataRepository = async () => {
  try {
    const response = await api.DataRepository.create({
      Name: 'My CIFS repository',
      RepositoryType: 'CIFS',
      CifsHostname: 'localhost',
      CifsUsername: 'domain\\username',
      CifsPassword: 'password',
      CifsShareName: 'share',
      CifsIncludeSubdirectories: true,
    });
    console.log(response, 'CIFS data repository created successfully');
  } catch (error) {
    console.error('Error creating CIFS data repository:', error);
  }
};

// CreateCifsDataRepository();

const CreateDiskDataRepository = async () => {
  try {
    const response = await api.DataRepository.create({
      Name: 'My file repository',
      RepositoryType: 'File',
      DiskDirectory: './files/',
      DiskIncludeSubdirectories: true,
    });
    console.log(response, 'Disk data repository created successfully');
  } catch (error) {
    console.error('Error creating disk data repository:', error);
  }
};

// CreateDiskDataRepository();

const CreateS3DataRepository = async () => {
  try {
    const response = await api.DataRepository.create({
      Name: 'My S3 repository',
      RepositoryType: 'AmazonS3',
      S3BaseUrl: 'https://{bucket}.us-west-1.s3.amazonaws.com/{key}',
      S3AccessKey: 'accesskey',
      S3SecretKey: 'secretkey',
      S3BucketName: 'bucket',
      S3Region: 'us-west-1',
    });
    console.log(response, 'S3 data repository created successfully');
  } catch (error) {
    console.error('Error creating S3 data repository:', error);
  }
};

// CreateS3DataRepository();

const CreateAzureDataRepository = async () => {
  try {
    const response = await api.DataRepository.create({
      Name: 'My Azure BLOB repository',
      RepositoryType: 'AzureBlob',
      AzureEndpointUrl: 'https://accountname.blob.core.windows.net',
      AzureAccountName: 'accountname',
      AzureContainerName: 'containername',
      AzureAccessKey: 'accesskey',
    });
    console.log(response, 'Azure data repository created successfully');
  } catch (error) {
    console.error('Error creating Azure data repository:', error);
  }
};

// CreateAzureDataRepository();

const CreateNfsDataRepository = async () => {
  try {
    const response = await api.DataRepository.create({
      Name: 'My NFS repository',
      RepositoryType: 'NFS',
      NfsVersion: 'V3',
      NfsHostname: '192.168.86.248',
      NfsUserId: 0,
      NfsGroupId: 0,
      NfsShareName: '/nfs',
      NfsIncludeSubdirectories: true,
    });
    console.log(response, 'NFS data repository created successfully');
  } catch (error) {
    console.error('Error creating NFS data repository:', error);
  }
};

// CreateNfsDataRepository();

const updateDataRepository = async () => {
  try {
    const response = await api.DataRepository.update({
      GUID: 'd6369256-e43c-4553-8425-f193630fb6b2',
      Name: 'My updated repository',
      RepositoryType: 'File',
      DiskDirectory: './files/',
    });
    console.log(response, 'Data repository updated successfully');
  } catch (error) {
    console.error('Error updating data repository:', error);
  }
};

// updateDataRepository();

const enumerateDataRepositories = async () => {
  try {
    const response = await api.DataRepository.enumerate();
    console.log(response, 'Data repositories enumerated successfully');
  } catch (error) {
    console.error('Error enumerating data repositories:', error);
  }
};

// enumerateDataRepositories();

const readDataRepository = async () => {
  try {
    const response = await api.DataRepository.read('d6369256-e43c-4553-8425-f193630fb6b2');
    console.log(response, 'Data repository read successfully');
  } catch (error) {
    console.error('Error reading data repository:', error);
  }
};

// readDataRepository();

const readAllDataRepositories = async () => {
  try {
    const response = await api.DataRepository.readAll();
    console.log(response, 'All data repositories read successfully');
  } catch (error) {
    console.error('Error reading all data repositories:', error);
  }
};

// readAllDataRepositories();

const deleteDataRepository = async () => {
  try {
    const response = await api.DataRepository.delete('d6369256-e43c-4553-8425-f193630fb6b2');
    console.log(response, 'Data repository deleted successfully');
  } catch (error) {
    console.error('Error deleting data repository:', error);
  }
};

// deleteDataRepository();

const existsDataRepository = async () => {
  try {
    const response = await api.DataRepository.exists('d6369256-e43c-4553-8425-f193630fb6b2');
    console.log(response, 'Data repository exists successfully');
  } catch (error) {
    console.error('Error checking if data repository exists:', error);
  }
};

// existsDataRepository();

//endregion

//region Crawl Schedule

const createCrawlSchedule = async () => {
  try {
    const response = await api.CrawlSchedule.create({
      Name: 'My schedule',
      Schedule: 'DaysInterval',
      Interval: 1,
    } as any);
    console.log(response, 'Crawl schedule created successfully');
  } catch (error) {
    console.error('Error creating crawl schedule:', error);
  }
};

// createCrawlSchedule();

const enumerateCrawlSchedules = async () => {
  try {
    const response = await api.CrawlSchedule.enumerate();
    console.log(response, 'Crawl schedules enumerated successfully');
  } catch (error) {
    console.error('Error enumerating crawl schedules:', error);
  }
};

// enumerateCrawlSchedules();

const readCrawlSchedule = async () => {
  try {
    const response = await api.CrawlSchedule.read('73acbb7d-6cf7-4166-afe0-f22d314b4f6b');
    console.log(response, 'Crawl schedule read successfully');
  } catch (error) {
    console.error('Error reading crawl schedule:', error);
  }
};

// readCrawlSchedule();

const readAllCrawlSchedules = async () => {
  try {
    const response = await api.CrawlSchedule.readAll();
    console.log(response, 'All crawl schedules read successfully');
  } catch (error) {
    console.error('Error reading all crawl schedules:', error);
  }
};

// readAllCrawlSchedules();

const updateCrawlSchedule = async () => {
  try {
    const response = await api.CrawlSchedule.update({
      GUID: '73acbb7d-6cf7-4166-afe0-f22d314b4f6b',
      Name: 'My updated schedule',
      Schedule: 'DaysInterval',
      Interval: 2,
    } as any);
    console.log(response, 'Crawl schedule updated successfully');
  } catch (error) {
    console.error('Error updating crawl schedule:', error);
  }
};

// updateCrawlSchedule();

const deleteCrawlSchedule = async () => {
  try {
    const response = await api.CrawlSchedule.delete('73acbb7d-6cf7-4166-afe0-f22d314b4f6b');
    console.log(response, 'Crawl schedule deleted successfully');
  } catch (error) {
    console.error('Error deleting crawl schedule:', error);
  }
};

// deleteCrawlSchedule();

const existsCrawlSchedule = async () => {
  try {
    const response = await api.CrawlSchedule.exists('73acbb7d-6cf7-4166-afe0-f22d314b4f6b');
    console.log(response, 'Crawl schedule exists successfully');
  } catch (error) {
    console.error('Error checking if crawl schedule exists:', error);
  }
};

// existsCrawlSchedule();

//endregion

//region Crawl Filter

const createCrawlFilter = async () => {
  try {
    const response = await api.CrawlFilter.create({
      Name: 'My filter',
      MinimumSize: 1024,
      MaximumSize: 10240,
      IncludeSubdirectories: true,
      IncludeHiddenFiles: true,
      IncludeSystemFiles: true,
      IncludeEmptyFiles: true,
    } as any);
    console.log(response, 'Crawl filter created successfully');
  } catch (error) {
    console.error('Error creating crawl filter:', error);
  }
};

// createCrawlFilter();

const enumerateCrawlFilters = async () => {
  try {
    const response = await api.CrawlFilter.enumerate();
    console.log(response, 'Crawl filters enumerated successfully');
  } catch (error) {
    console.error('Error enumerating crawl filters:', error);
  }
};

// enumerateCrawlFilters();

const readCrawlFilter = async () => {
  try {
    const response = await api.CrawlFilter.read('c0dcd0e9-1355-4ab0-bbd6-e8d0d2eb4303');
    console.log(response, 'Crawl filter read successfully');
  } catch (error) {
    console.error('Error reading crawl filter:', error);
  }
};

// readCrawlFilter();

const readAllCrawlFilters = async () => {
  try {
    const response = await api.CrawlFilter.readAll();
    console.log(response, 'All crawl filters read successfully');
  } catch (error) {
    console.error('Error reading all crawl filters:', error);
  }
};

// readAllCrawlFilters();

const updateCrawlFilter = async () => {
  try {
    const response = await api.CrawlFilter.update({
      GUID: 'c0dcd0e9-1355-4ab0-bbd6-e8d0d2eb4303',
      Name: 'My updated filter',
    } as any);
    console.log(response, 'Crawl filter updated successfully');
  } catch (error) {
    console.error('Error updating crawl filter:', error);
  }
};

// updateCrawlFilter();

const deleteCrawlFilter = async () => {
  try {
    const response = await api.CrawlFilter.delete('c0dcd0e9-1355-4ab0-bbd6-e8d0d2eb4303');
    console.log(response, 'Crawl filter deleted successfully');
  } catch (error) {
    console.error('Error deleting crawl filter:', error);
  }
};

// deleteCrawlFilter();

const existsCrawlFilter = async () => {
  try {
    const response = await api.CrawlFilter.exists('c0dcd0e9-1355-4ab0-bbd6-e8d0d2eb4303');
    console.log(response, 'Crawl filter exists successfully');
  } catch (error) {
    console.error('Error checking if crawl filter exists:', error);
  }
};

// existsCrawlFilter();

//endregion

//region Crawl Plan

const createCrawlPlan = async () => {
  try {
    const response = await api.CrawlPlan.create({
      DataRepositoryGUID: '35a71cb0-f20d-4df8-964c-a67608f4cff7',
      CrawlScheduleGUID: '2cba6c4b-d6e4-4044-8684-60cb0b4e0390',
      CrawlFilterGUID: '50f1563e-3e91-4359-ad56-b7104e39dda5',
      Name: 'My crawl plan',
      EnumerationDirectory: './enumerations/',
      EnumerationsToRetain: 30,
      MetadataRuleGUID: '00000000-0000-0000-0000-000000000000',
      ProcessingEndpoint: 'http://nginx-processor:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
      ProcessingAccessKey: 'default',
      CleanupEndpoint:
        'http://nginx-processor:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing/cleanup',
      CleanupAccessKey: 'default',
    } as any);
    console.log(response, 'Crawl plan created successfully');
  } catch (error) {
    console.error('Error creating crawl plan:', error);
  }
};

// createCrawlPlan();

const enumerateCrawlPlans = async () => {
  try {
    const response = await api.CrawlPlan.enumerate();
    console.log(response, 'Crawl plans enumerated successfully');
  } catch (error) {
    console.error('Error enumerating crawl plans:', error);
  }
};

// enumerateCrawlPlans();

const readCrawlPlan = async () => {
  try {
    const response = await api.CrawlPlan.read('c1905dc3-da28-4fe2-9a26-d6cb13717013');
    console.log(response, 'Crawl plan read successfully');
  } catch (error) {
    console.error('Error reading crawl plan:', error);
  }
};

// readCrawlPlan();

const readAllCrawlPlans = async () => {
  try {
    const response = await api.CrawlPlan.readAll();
    console.log(response, 'All crawl plans read successfully');
  } catch (error) {
    console.error('Error reading all crawl plans:', error);
  }
};

// readAllCrawlPlans();

const updateCrawlPlan = async () => {
  try {
    const response = await api.CrawlPlan.update({
      GUID: 'c1905dc3-da28-4fe2-9a26-d6cb13717013',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      DataRepositoryGUID: '35a71cb0-f20d-4df8-964c-a67608f4cff7',
      CrawlScheduleGUID: '2cba6c4b-d6e4-4044-8684-60cb0b4e0390',
      Name: 'My updated crawl plan',
      EnumerationDirectory: './enumerations/',
      MetadataRuleGUID: '00000000-0000-0000-0000-000000000000',
      EnumerationsToRetain: 30,
      ProcessingEndpoint: 'http://nginx-processor:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
      ProcessingAccessKey: 'default',
      CleanupEndpoint:
        'http://nginx-processor:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing/cleanup',
      CleanupAccessKey: 'default',
    } as any);
    console.log(response, 'Crawl plan updated successfully');
  } catch (error) {
    console.error('Error updating crawl plan:', error);
  }
};

// updateCrawlPlan();

const deleteCrawlPlan = async () => {
  try {
    const response = await api.CrawlPlan.delete('c1905dc3-da28-4fe2-9a26-d6cb13717013');
    console.log(response, 'Crawl plan deleted successfully');
  } catch (error) {
    console.error('Error deleting crawl plan:', error);
  }
};

// deleteCrawlPlan();

const existsCrawlPlan = async () => {
  try {
    const response = await api.CrawlPlan.exists('c1905dc3-da28-4fe2-9a26-d6cb13717013');
    console.log(response, 'Crawl plan exists successfully');
  } catch (error) {
    console.error('Error checking if crawl plan exists:', error);
  }
};

// existsCrawlPlan();

//endregion

//region Crawl Operation

const enumerateCrawlOperations = async () => {
  try {
    const response = await api.CrawlOperation.enumerate();
    console.log(response, 'Crawl operations enumerated successfully');
  } catch (error) {
    console.error('Error enumerating crawl operations:', error);
  }
};

// enumerateCrawlOperations();

const readCrawlOperation = async () => {
  try {
    const response = await api.CrawlOperation.read('01169c15-ced9-4c68-883e-915865ed096b');
    console.log(response, 'Crawl operation read successfully');
  } catch (error) {
    console.error('Error reading crawl operation:', error);
  }
};

// readCrawlOperation();

const readEnumrationCrawlOperations = async () => {
  try {
    const response = await api.CrawlOperation.readEnumeration('01169c15-ced9-4c68-883e-915865ed096b');
    console.log(response, 'All crawl operations read successfully');
  } catch (error) {
    console.error('Error reading all crawl operations:', error);
  }
};

// readEnumrationCrawlOperations();

const readAllCrawlOperations = async () => {
  try {
    const response = await api.CrawlOperation.readAll();
    console.log(response, 'All crawl operations read successfully');
  } catch (error) {
    console.error('Error reading all crawl operations:', error);
  }
};

// readAllCrawlOperations();

const startCrawlOperation = async () => {
  try {
    const response = await api.CrawlOperation.start('01169c15-ced9-4c68-883e-915865ed096b', {
      Name: 'My crawl operation',
    } as any);
    console.log(response, 'Crawl operation started successfully');
  } catch (error) {
    console.error('Error starting crawl operation:', error);
  }
};

// startCrawlOperation();

const stopCrawlOperation = async () => {
  try {
    const response = await api.CrawlOperation.stop('01169c15-ced9-4c68-883e-915865ed096b', {
      Name: 'My crawl operation',
    } as any);
    console.log(response, 'Crawl operation stopped successfully');
  } catch (error) {
    console.error('Error stopping crawl operation:', error);
  }
};

// stopCrawlOperation();

const deleteCrawlOperation = async () => {
  try {
    const response = await api.CrawlOperation.delete('01169c15-ced9-4c68-883e-915865ed096b');
    console.log(response, 'Crawl operation deleted successfully');
  } catch (error) {
    console.error('Error deleting crawl operation:', error);
  }
};

// deleteCrawlOperation();

const existsCrawlOperation = async () => {
  try {
    const response = await api.CrawlOperation.exists('01169c15-ced9-4c68-883e-915865ed096b');
    console.log(response, 'Crawl operation exists successfully');
  } catch (error) {
    console.error('Error checking if crawl operation exists:', error);
  }
};

// existsCrawlOperation();
//endregion
