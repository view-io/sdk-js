const { GraphSdk } = require('view-sdk');

const api = new GraphSdk({
  GUID: '01010101-0101-0101-0101-010101010101',
  TenantGUID: 'default',
  Name: 'Sample Graph Repository',
  RepositoryType: 'LiteGraph',
  EndpointUrl: 'http://ec2-18-217-169-161.us-east-2.compute.amazonaws.com:8701/',
  ApiKey: 'graph-api-key',
  GraphIdentifier: 'default',
  CreatedUtc: new Date().toISOString,
});

const insertObjectMetadata = async () => {
  try {
    await api.insertObjectMetadata('default');
    console.log('hello');
  } catch (err) {
    console.log('err:', err);
  }
};
const storagePoolExists = async () => {
  try {
    await api.storagePoolExists({ GUID: 'GUID' });
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const useSDK = () => {
  insertObjectMetadata();
  // storagePoolExists();
};

useSDK();
