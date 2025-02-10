const { ViewCrawlerSdk } = require('view-sdk');

const api = new ViewCrawlerSdk(
  'default', //tenant Id
  'default', //access token
  'http://view.homedns.org:8000/' //endpoint
);

const enumerateDataRepositories = async () => {
  try {
    const data = await api.enumerateDataRepositories();
    console.log('enumerateDataRepositories data', data);
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const retrieveAllDataRepositories = async () => {
  try {
    const data = await api.retrieveAllDataRepositories();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const retrieveByGUIDDataRepositories = async () => {
  try {
    const data = await api.retrieveByGUIDDataRepositories('47e32133-0456-4047-9987-bf626600e42f');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const writeDiskDataRepository = async () => {
  try {
    const data = await api.writeDiskDataRepository({
      Name: 'My file repository test',
      RepositoryType: 'File',
      DiskDirectory: './files/',
      DiskIncludeSubdirectories: true,
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const writeS3DataRepository = async () => {
  try {
    const data = await api.writeS3DataRepository({
      TenantGUID: 'default',
      OwnerGUID: 'default',
      Name: 'My S3 repository from test',
      RepositoryType: 'AmazonS3',
      S3EndpointUrl: null,
      S3BaseUrl: 'https://{bucket}.us-west-1.s3.amazonaws.com/{key}',
      S3AccessKey: 'accesskey',
      S3SecretKey: 'secretkey',
      S3BucketName: 'bucket',
      S3Region: 'us-west-1',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const writeS3CompatibleDataRepository = async () => {
  try {
    const data = await api.writeS3CompatibleDataRepository({
      TenantGUID: 'default',
      OwnerGUID: 'default',
      Name: 'My S3 compatible storage repository test1',
      RepositoryType: 'AmazonS3',
      S3EndpointUrl: 'http://localhost:8002/',
      S3BaseUrl: 'http://localhost:8002/{bucket}/{key}',
      S3AccessKey: 'accesskey',
      S3SecretKey: 'secretkey',
      S3BucketName: 'bucket',
      S3Region: 'us-west-1',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const writeAzureBLOBDataRepository = async () => {
  try {
    const data = await api.writeAzureBLOBDataRepository({
      TenantGUID: 'default',
      OwnerGUID: 'default',
      Name: 'My Azure BLOB repository test',
      RepositoryType: 'AzureBlob',
      AzureEndpointUrl: 'https://accountname.blob.core.windows.net',
      AzureAccountName: 'accountname',
      AzureContainerName: 'containername',
      AzureAccessKey: 'accesskey',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const writeCIFSDataRepository = async () => {
  try {
    const data = await api.writeCIFSDataRepository({
      TenantGUID: 'default',
      OwnerGUID: 'default',
      Name: 'My Azure BLOB repository test',
      RepositoryType: 'AzureBlob',
      AzureEndpointUrl: 'https://accountname.blob.core.windows.net',
      AzureAccountName: 'accountname',
      AzureContainerName: 'containername',
      AzureAccessKey: 'accesskey',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const writeNFSDataRepository = async () => {
  try {
    const data = await api.writeCIFSDataRepository({
      TenantGUID: 'default',
      OwnerGUID: 'default',
      Name: 'My NFS repository test',
      RepositoryType: 'NFS',
      NfsHostname: 'localhost',
      NfsUserId: 0,
      NfsGroupId: 0,
      NfsShareName: 'share',
      NfsIncludeSubdirectories: true,
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const updateDataRepository = async () => {
  try {
    const data = await api.updateDataRepository({
      Name: 'My updated file repository update',
      RepositoryType: 'File',
      IncludeSubdirectories: true,
      DiskDirectory: './files/',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const deleteDataRepository = async () => {
  try {
    const data = await api.deleteDataRepository('53237839-c0b1-41a9-bf03-72173d4b06f4');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const checkExistenceDataRepository = async () => {
  try {
    const data = await api.checkExistenceDataRepository('2c10653f-ca0c-4dff-a64b-8d5c0fe8b276');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//Crawl Schedules
const enumerateCrawlSchedules = async () => {
  try {
    const data = await api.enumerateCrawlSchedules();
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const retrieveAllCrawlSchedules = async () => {
  try {
    const data = await api.retrieveAllCrawlSchedules();
    console.log('data', data);
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const retrieveByIDCrawlSchedules = async () => {
  try {
    const data = await api.retrieveByIDCrawlSchedules('oneminute');
    console.log('data', data);
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const createCrawlSchedules = async () => {
  try {
    const data = await api.createCrawlSchedules({
      Name: 'My schedule update',
      Schedule: 'DaysInterval',
      Interval: 1,
    });
    console.log('data ...', data);
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const updateCrawlSchedules = async () => {
  try {
    const data = await api.updateCrawlSchedules('963e2139-3076-430b-a949-a4e9db6c3d5f', {
      Name: 'My schedule update',
      Schedule: 'DaysInterval',
      Interval: 1,
    });
    console.log('data ...', data);
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteCrawlSchedule = async () => {
  try {
    const data = await api.deleteCrawlSchedule('963e2139-3076-430b-a949-a4e9db6c3d5f');
    console.log('data ...', data);
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const checkExistenceCrawlSchedule = async () => {
  try {
    const data = await api.checkExistenceCrawlSchedule('963e2139-3076-430b-a949-a4e9db6c3d5f');
    console.log('data ...', data);
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const useSDK = () => {
  // enumerateDataRepositories();
  // retrieveAllDataRepositories();
  // retrieveByGUIDDataRepositories()
  // writeDiskDataRepository()
  // writeS3DataRepository()
  // writeS3CompatibleDataRepository()
  // writeAzureBLOBDataRepository()
  // writeCIFSDataRepository()
  // writeNFSDataRepository()
  // updateDataRepository()
  // deleteDataRepository()
  // checkExistenceDataRepository()
  // //Crawl Schedules
  // enumerateCrawlSchedules()
  // retrieveAllCrawlSchedules()
  // retrieveByIDCrawlSchedules()
  // createCrawlSchedules()
  // updateCrawlSchedules()
  // deleteCrawlSchedule()
  // checkExistenceCrawlSchedule()
};

useSDK();
