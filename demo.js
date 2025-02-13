var { ViewConfigurationSdk } = require('view-sdk');

var api = new ViewConfigurationSdk(
  'default', //tenant Id
  'default', //access token
  'http://ec2-18-217-169-161.us-east-2.compute.amazonaws.com:8601/' //endpoint
);
var guid = 'default'; // {String}

// region Nodes
const getNodeById = async () => {
  try {
    const data = await api.retrieveNodes();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const getNodeList = async () => {
  try {
    const data = await api.retrieveNodes();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const createNode = async () => {
  // Node object to create
  const node = {
    Id: 2,
    GUID: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
    name: 'string',
    hostname: 'localhost',
    InstanceType: 'StorageServer',
    LastStartUtc: '2024-09-13T09:43:49.952Z',
    CreatedUtc: '2024-09-13T09:43:49.952Z',
  };

  try {
    const createdNode = await api.createNode(node);
    console.log(createdNode, 'Node created successfully');
  } catch (err) {
    console.log('err: ', err);
    console.log('Error creating node:', JSON.stringify(err));
  }
};

const updateNode = async () => {
  // Node object to update
  const node = {
    Id: 2,
    GUID: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
    name: 'string',
    hostname: 'localhost',
    InstanceType: 'StorageServer',
    LastStartUtc: '2024-09-13T09:43:49.952Z',
    CreatedUtc: '2024-09-13T09:43:49.952Z',
  };

  try {
    const createdNode = await api.updateNode(node);
    console.log(createdNode, 'Node created successfully');
  } catch (err) {
    console.log('Error creating node:', JSON.stringify(err));
  }
};

const deleteNodeById = async () => {
  try {
    const data = await api.deleteNode(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const checkIfNodeExistsById = async () => {
  try {
    const data = await api.existsNode(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//region Tenants

const getTenantById = async () => {
  try {
    const data = await api.retrieveTenant();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err0: ', err);
    console.log('err:', JSON.stringify(err));
  }
};
const updateTenant = async () => {
  // Node object to update
  const tenant = {
    id: 1,
    GUID: '3fa85f64-5717-4562-b3fc-2c963f66afa5',
    ParentGUID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    Name: '',
    Region: 'us-west-2',
    S3BaseDomain: '',
    RestBaseDomain: '',
    DefaultPoolGUID: '',
    Active: true,
    CreatedUtc: '2024-09-13T10:10:58.708Z',
  };

  try {
    const updatedTenant = await api.updateTenant(tenant);
    console.log(updatedTenant, 'Tenant created successfully');
  } catch (err) {
    console.log('Error creating Tenant:', JSON.stringify(err));
  }
};

//region Credentials

const getCredentialById = async () => {
  try {
    const data = await api.retrieveCredential(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
//region Users

const getUserById = async () => {
  try {
    const data = await api.retrieveUser(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// region Encryption-Key

const getEncryptionKeyById = async () => {
  try {
    const data = await api.retrieveEncryptionKey(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

//region Graph-Repository
const getGraphById = async () => {
  try {
    const data = await api.retrieveGraphRepository('example-graph-repository');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

// region Vector-Repository
const getVectorById = async () => {
  try {
    const data = await api.retrieveVectorRepository('example-vector-repository');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const useSdk = async () => {
  // await getNodeById();
  // await getNodeList();
  // await createNode();
  // await updateNode();
  // await deleteNodeById();
  // await checkIfNodeExistsById();
  // await getTenantById();
  // await updateTenant();
  await getCredentialById();
  await getUserById();
  await getEncryptionKeyById();
  await getGraphById();
  // await getVectorById();
};
useSdk();
