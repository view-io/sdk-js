const { ViewConfigurationSdk } = require('view-sdk');

const api = new ViewConfigurationSdk(
  'default', //tenant Id
  'default', //access token
  'http://view.homedns.org:8000/' //endpoint
);

const retrieveTenant = async () => {
  try {
    const data = await api.retrieveTenant('default');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveTenants = async () => {
  try {
    const data = await api.retrieveTenants(
      null,
      'mXCNtMWDsW0/pr+IwRFUjTSriRPB6Pdef3zNGoB/JI8U7bqAeNZhytu/bvgPcNp3A+0NzE+3C8PnaqxOHBsEk3hxUcxSbU6aFJvfuXeP7NmQ3FE1ALdCajUP5zeIZAO7JwLH3Jlu0IBpFln+sz6Vxob4DVW2FPxTrOk+vMoXRToL6fs/uVHHuVuo1z6G2/qJvmgcVcqgivnpMR3HtHWQ8SFsBausz0ZIQPCdGeba9NlFyLBgXhydKe28WUBniZVZtC8NEe7CwsdonKLajia7oQ=='
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveBlobs = async () => {
  try {
    const data = await api.retrieveBlobs();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveBlob = async () => {
  try {
    const data = await api.retrieveBlob('195f961a-adea-4350-8dfc-11c1cd71315f');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const writeBlob = async () => {
  try {
    const data = await api.writeBlob({
      ContentType: 'text/plain',
      Name: 'helloworld.txt',
      Description: "A text file containing 'Hello, world!'",
      RefObjType: '[usermanaged]',
      RefObjGUID: '[usermanaged]',
      Data: 'SGVsbG8sIHdvcmxkIQ==',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteBlob = async () => {
  try {
    const data = await api.deleteBlob('0d0df410-0b6f-49d1-ae8d-401094de3f88');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const existsBlob = async () => {
  try {
    const data = await api.existsBlob('69461bad-0c2c-4cd3-a895-b400c0d691f8');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateWebhookTargets = async () => {
  try {
    const data = await api.enumerateWebhookTargets();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateBlobs = async () => {
  try {
    const data = await api.enumerateBlobs();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateCredentials = async () => {
  try {
    const data = await api.enumerateCredentials();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateUsers = async () => {
  try {
    const data = await api.enumerateUsers();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateEncryptionKeys = async () => {
  try {
    const data = await api.enumerateEncryptionKeys();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateVectorRepositories = async () => {
  try {
    const data = await api.enumerateVectorRepositories();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateGraphRepositories = async () => {
  try {
    const data = await api.enumerateGraphRepositories();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateCollections = async () => {
  try {
    const data = await api.enumerateCollections();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateMetadataRules = async () => {
  try {
    const data = await api.enumerateMetadataRules();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateEmbeddingsRules = async () => {
  try {
    const data = await api.enumerateEmbeddingsRules();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateDataRepositories = async () => {
  try {
    const data = await api.enumerateDataRepositories();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateWebhookEvents = async () => {
  try {
    const data = await api.enumerateWebhookEvents();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateWebhookRules = async () => {
  try {
    const data = await api.enumerateWebhookRules();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const enumerateTenant = async () => {
  try {
    const data = await api.enumerateTenant();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const existsDataRepository = async () => {
  try {
    const data = await api.existsDataRepository('8db00b8a-17dd-4dc4-bdd8-2eee3b7581fe');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveDataRepositories = async () => {
  try {
    const data = await api.retrieveDataRepositories();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveDataRepository = async () => {
  try {
    const data = await api.retrieveDataRepository('8db00b8a-17dd-4dc4-bdd8-2eee3b7581fe');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const writeDiskDataRepository = async () => {
  try {
    const data = await api.writeDiskDataRepository({
      Name: 'My file repository',
      RepositoryType: 'File',
      BaseUrl: './files/',
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
      Name: 'My S3 repository',
      RepositoryType: 'AmazonS3',
      S3EndpointUrl: null,
      S3BaseUrl: null,
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

const writeAzureBlobDataRepository = async () => {
  try {
    const data = await api.writeAzureBlobDataRepository({
      TenantGUID: 'default',
      OwnerGUID: 'default',
      Name: 'My Azure BLOB repository',
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

const writeNfsDataRepository = async () => {
  try {
    const data = await api.writeNfsDataRepository({
      TenantGUID: 'default',
      OwnerGUID: 'default',
      Name: 'My NFS repository',
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

const writeCifsDataRepository = async () => {
  try {
    const data = await api.writeCifsDataRepository({
      TenantGUID: 'default',
      OwnerGUID: 'default',
      Name: 'My CIFS repository',
      RepositoryType: 'CIFS',
      CifsHostname: 'localhost',
      CifsUsername: 'domain\\username',
      CifsPassword: 'password',
      CifsShareName: 'share',
      CifsIncludeSubdirectories: true,
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateDataRepository = async () => {
  try {
    const data = await api.updateDataRepository('4db7b09c-9d7a-4e55-b086-56ee7010dccb', {
      Name: 'My updated file repository',
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
    const data = await api.deleteDataRepository('bb6a8c43-6b6f-495a-9177-355c3eb217fd');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const retrieveTenantsForEmail = async () => {
  try {
    const data = await api.retrieveTenantsForEmail('default@user.com');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const generateAuthenticationTokenByPassword = async () => {
  try {
    const data = await api.generateAuthenticationTokenByPassword({
      email: 'default@user.com',
      password: 'password',
      tenantGUID: 'default',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const generateAuthenticationTokenBySHA256 = async () => {
  try {
    const data = await api.generateAuthenticationTokenBySHA256({
      email: 'default@user.com',
      passwordSHA256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
      tenantGUID: 'default',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const generateAdministratorToken = async () => {
  try {
    const data = await api.generateAdministratorToken({ email: 'admin@view.io', password: 'viewadmin' });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const generateAdministratorTokenBySHA256 = async () => {
  try {
    const data = await api.generateAdministratorTokenBySHA256({
      email: 'admin@view.io',
      passwordSHA256: 'e75255193871e245472533552fe45dfda25768d26e9eb92507e75263e90c6a48',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const validateAuthenticationToken = async () => {
  try {
    const data = await api.validateAuthenticationToken({
      token:
        'mXCNtMWDsW0/pr+IwRFUjeDO2cbVr5o4WlPplku8dbpYzqXbeV0c5ofMbX/YiOhMzPSr1DRg/PyE25KpaGzto0+uchyYY2jGJvlj7I/nSFmqlMEsXYy73LsvYjG4tSlimGN60Hj51mmvdaieE8BOVStYfehip+tEXiELfP7tXX6N6EIFAyCQZRWtRoKkXK+DZoY265roa6TwGehPTz4n4vrKb3XwrWzAWOl/pb6G+t3+P/oa52JqKojKT1wB+sLJ8sjzJpalYuQzLEOcK5Nwyw==',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const retrieveTokenDetails = async () => {
  try {
    const data = await api.retrieveTokenDetails({
      token:
        'mXCNtMWDsW0/pr+IwRFUjeDO2cbVr5o4WlPplku8dbpYzqXbeV0c5ofMbX/YiOhMzPSr1DRg/PyE25KpaGzto0+uchyYY2jGJvlj7I/nSFmqlMEsXYy73LsvYjG4tSlimGN60Hj51mmvdaieE8BOVStYfehip+tEXiELfP7tXX6N6EIFAyCQZRWtRoKkXK+DZoY265roa6TwGehPTz4n4vrKb3XwrWzAWOl/pb6G+t3+P/oa52JqKojKT1wB+sLJ8sjzJpalYuQzLEOcK5Nwyw==',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const useSDK = () => {
  // retrieveTenant();
  // retrieveTenants();
  // retrieveBlobs();
  // retrieveBlob();
  // writeBlob();
  // deleteBlob();
  // existsBlob();
  //enumerateWebhookTargets();
  //enumerateBlobs();
  // enumerateCredentials();
  // enumerateUsers();
  // enumerateEncryptionKeys();
  // enumerateVectorRepositories();
  // enumerateGraphRepositories();
  // enumerateCollections();
  // enumerateMetadataRules();
  // enumerateEmbeddingsRules();
  // enumerateDataRepositories();
  // enumerateWebhookEvents();
  // enumerateWebhookRules();
  // enumerateTenant();
  // existsDataRepository();
  // retrieveDataRepositories();
  // retrieveDataRepository();
  // writeDiskDataRepository();
  // writeS3DataRepository();
  // writeAzureBlobDataRepository();
  // writeNfsDataRepository();
  // writeCifsDataRepository();
  // updateDataRepository();
  //deleteDataRepository();

    retrieveTenantsForEmail();
  // generateAuthenticationTokenByPassword();
  // generateAuthenticationTokenBySHA256()
  // generateAdministratorToken()
  // generateAdministratorTokenBySHA256()
  // validateAuthenticationToken()
  // retrieveTokenDetails()
};

useSDK();
