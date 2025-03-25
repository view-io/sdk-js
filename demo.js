const { ViewConfigurationSdk } = require('view-sdk');

const api = new ViewConfigurationSdk(
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default', //access token
  'http://view.homedns.org:8000/' //endpoint
);

// api.accessToken =
//   "mXCNtMWDsW0/pr+IwRFUjbcKaGXxIDHLMkRBC6uiU5EKuJ1vZhr0WCtKx2AUy9mb1Fl67jAdKXTPhS35FWmC0QdR50vS6UcuJdRliZt0a1oudQvMM76q1EIrNwqcNkv7YiNROy3+A8Y6Gkyq2knUlKjgQdp1vkjMuuU1bwyA4HDHRDSDetFjMSxoGcbTZdmb1LWZNZ9vXepBPknDYa+bdIOVeoXKUzOTMO3akkdPT+Jy5JV7f6HEm5Xm8HnZ+62TcSNM24ZaR3U0Kwm9yESI3fjLmMuA26MbP0DD+DRT8uPirP4aA7m1ODeS8NCkzCPU";
const existsMetaDataRule = async () => {
  try {
    const response = await api.existsMetadataRule('ff0d2c7c-fc51-473a-8c7d-d2123e2d6492');
    console.log(response, 'Metadata rule exists');
  } catch (err) {
    console.log('Error checking Metadata rule:', err);
  }
};

existsMetaDataRule();

const deleteMetaDataRule = async () => {
  try {
    const response = await api.deleteMetadataRule('dfdee78e-3f48-4199-a27b-988b4fee04c9');
    console.log(response, 'Metadata rule deleted successfully');
  } catch (err) {
    console.log('Error deleting Metadata rule:', err);
  }
};

// deleteMetaDataRule();

const updateMetaDataRule = async () => {
  try {
    const response = await api.updateMetadataRule({
      GUID: 'fc02c566-78d9-4f7b-82e5-5688b92e6cfe',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      BucketGUID: '00000000-0000-0000-0000-000000000000',
      OwnerGUID: '00000000-0000-0000-0000-000000000000',
      GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'example-metadata-rule-updated-from-sdk',
      ContentType: '*',
      MaxContentLength: 134217728,
      ProcessingEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
      ProcessingAccessKey: 'default',
      CleanupEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing/cleanup',
      CleanupAccessKey: 'default',
      MinChunkContentLength: 2,
      MaxChunkContentLength: 2048,
      MaxTokensPerChunk: 1920,
      ShiftSize: 256,
      ImageTextExtraction: true,
      TopTerms: 25,
      CaseInsensitive: true,
      IncludeFlattened: true,
      DataCatalogEndpoint: 'http://localhost:8000/',
      DataCatalogAccessKey: 'default',
      DataCatalogType: 'Lexi',
      DataCatalogCollection: '00000000-0000-0000-0000-000000000000',
      CreatedUtc: '2025-03-25T12:19:28.976056Z',
    });
    console.log(response, 'Metadata rule updated successfully');
  } catch (err) {
    console.log('Error updating Metadata rule:', err);
  }
};

// updateMetaDataRule();

const getMetaDataRules = async () => {
  try {
    const response = await api.retrieveMetadataRules();
    console.log(response, 'Metadata rules fetched successfully');
  } catch (err) {
    console.log('Error fetching Metadata rules:', err);
  }
};

// getMetaDataRules();
const getMetaDataRule = async () => {
  try {
    const response = await api.retrieveMetadataRule('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Metadata rule fetched successfully');
  } catch (err) {
    console.log('Error fetching Metadata rule:', err);
  }
};

// getMetaDataRule();

const enumerateMetaDataRules = async () => {
  try {
    const response = await api.enumerateMetadataRules();
    console.log(response, 'Metadata rules fetched successfully');
  } catch (err) {
    console.log('Error fetching Metadata rules:', err);
  }
};

// enumerateMetaDataRules();

const createMetaDataRules = async () => {
  try {
    const response = await api.createMetadataRule({
      BucketGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'example-metadata-rule-ash',
      ContentType: '*',
      MaxContentLength: 134217728,
      ProcessingEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
      ProcessingAccessKey: 'default',
      CleanupEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing/cleanup',
      CleanupAccessKey: 'default',
      MinChunkContentLength: 2,
      MaxChunkContentLength: 2048,
      MaxTokensPerChunk: 1920,
      ShiftSize: 256,
      TopTerms: 25,
      CaseInsensitive: true,
      IncludeFlattened: true,
      DataCatalogEndpoint: 'http://localhost:8000/',
      DataCatalogAccessKey: 'default',
      DataCatalogType: 'Lexi',
      DataCatalogCollection: '00000000-0000-0000-0000-000000000000',
      GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
    });
    console.log(response, 'Meta data rules created successfully');
  } catch (err) {
    console.log('Error creating Meta data rules:', err);
  }
};

// createMetaDataRules();

const credentialExists = async () => {
  try {
    const response = await api.existsCredential('65bcfde5-76de-4866-9259-6698e935b894');
    console.log(response, 'Credential exists');
  } catch (err) {
    console.log('Error fetching Credential:', err);
  }
};

// credentialExists();

const deleteCredential = async () => {
  try {
    const response = await api.deleteCredential('58051d5c-fb01-4e9a-83f7-f310b4449f15');
    console.log(response, 'Credential deleted successfully');
  } catch (err) {
    console.log('Error deleting Credential:', err);
  }
};

// deleteCredential();
const getAllCredentials = async () => {
  try {
    const credentials = await api.retrieveCredentials();
    console.log(credentials, 'All credentials fetched successfully');
  } catch (err) {
    console.log('Error fetching Credentials:', err);
  }
};

// getAllCredentials();

const getCredential = async () => {
  try {
    const credential = await api.retrieveCredential('f734b815-c9ef-403a-8125-cfec4d405482');
    console.log(credential, 'Credential fetched successfully');
  } catch (err) {
    console.log('Error fetching Credential:', err);
  }
};
// getCredential();

const enumerateCredentials = async () => {
  try {
    const credentials = await api.enumerateCredentials();
    console.log(credentials, 'Credentials fetched successfully');
  } catch (err) {
    console.log('Error fetching Credentials:', err);
  }
};

// enumerateCredentials();
const createCredential = async () => {
  try {
    const response = await api.createCredential({
      UserGUID: '9b7796bc-b36f-4e68-8cec-4ce98c9be7cd',
      Name: 'Default credential',
      Active: true,
    });
    console.log(response, 'Credential created successfully');
  } catch (err) {
    console.log('Error creating Credential:', err);
  }
};
// createCredential();

const userExists = async () => {
  try {
    const response = await api.existsUser('9b7796bc-b36f-4e68-8cec-4ce98c9be7cd');
    console.log(response, 'User exists');
  } catch (err) {
    console.log('Error fetching User:', err);
  }
};

// userExists();

const deleteUser = async () => {
  try {
    const response = await api.deleteUser('1522f272-c572-4419-88b5-f0a0d37dabf6');
    console.log(response, 'User deleted successfully');
  } catch (err) {
    console.log('Error deleting User:', err);
  }
};

// deleteUser();

const getUsers = async () => {
  try {
    const users = await api.retrieveUsers();
    console.log(users, 'Users fetched successfully');
  } catch (err) {
    console.log('Error fetching Users:', err);
  }
};

// getUsers();

const updateUser = async () => {
  try {
    const user = await api.updateUser('0a54349a-39d4-4756-960d-9d7b6af9435c', {
      FirstName: 'New',
      LastName: 'User',
      Notes: 'Default password is password',
      Email: 'new@user.com',
      PasswordSha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    });
    console.log(user, 'User updated successfully');
  } catch (err) {
    console.log('Error updating User:', err);
  }
};

// updateUser();

const getUser = async () => {
  try {
    const user = await api.retrieveUser('0a54349a-39d4-4756-960d-9d7b6af9435c');
    console.log(user, 'User fetched successfully');
  } catch (err) {
    console.log('Error fetching User:', err);
  }
};

// getUser();

const enumerateUsers = async () => {
  try {
    const users = await api.enumerateUsers();
    console.log(users, 'Users fetched successfully');
  } catch (err) {
    console.log('Error fetching Users:', err);
  }
};

// enumerateUsers();

const createUser = async () => {
  try {
    const user = await api.createUser({
      FirstName: 'Ashish',
      LastName: 'Patel',
      Notes: 'Default password is password',
      Email: 'ashish@user.com',
      PasswordSha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    });
    console.log(user, 'User created successfully');
  } catch (err) {
    console.log('Error creating User:', err);
  }
};

// createUser();

const tenantExists = async () => {
  try {
    const tenant = await api.existsTenant('904a458b-8e62-4a8d-baa4-dae577245930');
    console.log(tenant, 'Tenant exists'); //true
  } catch (err) {
    console.log('Error fetching Tenant:', err);
  }
};
// tenantExists();

const nodeExists = async () => {
  try {
    const node = await api.existsNode('33079aff-6421-4987-a80e-26c621f2aa24');
    console.log(node, 'Node exists'); //true
  } catch (err) {
    console.log('Error fetching Node:', err);
  }
};

// nodeExists();

const enumerateNode = async () => {
  try {
    const nodes = await api.enumerateNodes(2);
    console.log(nodes, 'Nodes fetched successfully');
  } catch (err) {
    console.log('Error fetching Nodes:', err);
  }
};
// enumerateNode();

const enumerateTenant = async () => {
  try {
    const tenants = await api.enumerateTenants();
    console.log(tenants, 'Tenants fetched successfully');
  } catch (err) {
    console.log('Error fetching Tenants:', err);
  }
};
// enumerateTenant();
const deleteNode = async () => {
  try {
    await api.deleteNode(
      'a46fa027-1b89-4250-996e-d7c5c0c82ca3',
      'mXCNtMWDsW0/pr+IwRFUjRIMUbQt3q8fPhMkZy/hqGcOngKCn7Y2ECkUnzAbBrPgPCdPA3ASJRxnKBByHm4Wx7hBS0IXrS5TbP72dmcD8YuuIc/xD/acvVvhqcFokjkTXY/em8FEA14OsxTPHcBmT3bo2rBv6/scgUffg7EsmN5+n9J18PTV9ZeM+1sKbkVq/uqd/VNUkPCr2K+7/IJEcujnChGW4xoHvjvjMcaNuEoYgHkzjpyOqhUibQXgMTacgfmHEwyOiTyKTZDjGhMqmgbojWvXeyATJspRnTMgsMbBtpu9Es6HT719uq8p0Lfv'
    );
    console.log('Node deleted successfully');
  } catch (err) {
    console.log('Error deleting Node:', err);
  }
};
// deleteNode();

const getNode = async () => {
  try {
    const nodes = await api.retrieveNode('33079aff-6421-4987-a80e-26c621f2aa24');
    console.log(nodes, 'Nodes fetched successfully');
  } catch (err) {
    console.log('Error fetching Nodes:', err);
  }
};
// getNode();

const getNodes = async () => {
  try {
    const nodes = await api.retrieveNodes();
    console.log(nodes, 'Nodes fetched successfully');
  } catch (err) {
    console.log('Error fetching Nodes:', err);
  }
};
// getNodes();

const fetchTenant = async () => {
  try {
    const tenants = await api.retrieveTenants();
    console.log(tenants, 'Tenant fetched successfully');
  } catch (err) {
    console.log('Error fetching Tenant:', err);
  }
};
// fetchTenant();

const updateTenant = async () => {
  // tenant object to update
  const tenant = {
    GUID: '904a458b-8e62-4a8d-baa4-dae577245930',
    parentGUID: null,
    name: 'My tenant demo updated now',
    region: 'us-west-1',
    s3BaseDomain: '',
    restBaseDomain: 'localhost',
    defaultPoolGUID: 'df6c9117-a1ea-44ca-bddc-fa7a3d932fe9',
    active: true,
    createdUtc: '2025-03-25T08:49:01.577527Z',
    accountGUID: 'e6c5dd52-cb13-47c0-839c-6c5281f05075',
    isProtected: false,
  };

  try {
    const updatedTenant = await api.updateTenant(
      '904a458b-8e62-4a8d-baa4-dae577245930', // tenant guid
      tenant
    );
    console.log(updatedTenant, 'Tenant updated successfully');
  } catch (err) {
    console.log('Error updating Tenant:', err);
  }
};
// updateTenant();

const deleteTenant = async () => {
  try {
    await api.deleteTenant('3b681727-f9a0-4904-ad9a-223b8101d2f4');
    console.log('Tenant deleted successfully');
  } catch (err) {
    console.log('Error deleting Tenant:', err);
  }
};

// deleteTenant();

const createTenant = async () => {
  try {
    const createdTenant = await api.writeTenant({
      Name: 'My tenant demo',
      Region: 'us-west-1',
      S3BaseDomain: 'localhost',
      RestBaseDomain: 'localhost',
      DefaultPoolGUID: 'df6c9117-a1ea-44ca-bddc-fa7a3d932fe9',
    });
    console.log(createdTenant, 'Tenant created successfully');
  } catch (err) {
    console.log('Error creating Tenant:', err);
  }
};

// createTenant();

const retrieveTenantById = async () => {
  try {
    const tenant = await api.retrieveTenant('00000000-0000-0000-0000-000000000000');
    console.log(tenant);
  } catch (err) {
    console.log('err: ', err);
  }
};

// retrieveTenantById();
