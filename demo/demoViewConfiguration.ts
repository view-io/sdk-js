import { ViewConfigurationSdk } from 'view-sdk';
import { WebhookEventTypeEnum } from 'view-sdk/dist/types/enums/WebhookEventTypeEnum';
import { VectorRepositoryTypeEnum } from 'view-sdk/dist/types/enums/VectorRepositoryTypeEnum';

const api = new ViewConfigurationSdk(
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default', //access token
  'http://view.homedns.org:8000/' //endpoint
);

// api.accessToken =
//   "mXCNtMWDsW0/pr+IwRFUjbcKaGXxIDHLMkRBC6uiU5EKuJ1vZhr0WCtKx2AUy9mb1Fl67jAdKXTPhS35FWmC0QdR50vS6UcuJdRliZt0a1oudQvMM76q1EIrNwqcNkv7YiNROy3+A8Y6Gkyq2knUlKjgQdp1vkjMuuU1bwyA4HDHRDSDetFjMSxoGcbTZdmb1LWZNZ9vXepBPknDYa+bdIOVeoXKUzOTMO3akkdPT+Jy5JV7f6HEm5Xm8HnZ+62TcSNM24ZaR3U0Kwm9yESI3fjLmMuA26MbP0DD+DRT8uPirP4aA7m1ODeS8NCkzCPU";

const existsWebhookTarget = async () => {
  try {
    const response = await api.WebhookTarget.exists('f4bd1d87-598a-4e16-ace3-5c2a8ce55511');
    console.log(response, 'Webhook target exists');
  } catch (err) {
    console.log('Error checking Webhook target:', err);
  }
};

// existsWebhookTarget();

const deleteWebhookTarget = async () => {
  try {
    const response = await api.WebhookTarget.delete('4bd187db-3a56-495e-b7fe-d00c963d5333');
    console.log(response, 'Webhook target deleted successfully');
  } catch (err) {
    console.log('Error deleting Webhook target:', err);
  }
};

// deleteWebhookTarget();

const updateWebhookTarget = async () => {
  try {
    const response = await api.WebhookTarget.update({
      GUID: '4bd187db-3a56-495e-b7fe-d00c963d5333',
      Name: 'My webhook target [ASH] [UPDATED]',
      Url: 'http://localhost:8311',
      ContentType: 'application/json',
      ExpectStatus: 200,
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      CreatedUtc: '2025-03-29T11:27:22.814177Z',
    });
    console.log(response, 'Webhook target updated successfully');
  } catch (err) {
    console.log('Error updating Webhook target:', err);
  }
};

// updateWebhookTarget();

const readAllWebhookTargets = async () => {
  try {
    const response = await api.WebhookTarget.readAll();
    console.log(response, 'All webhook targets fetched successfully');
  } catch (err) {
    console.log('Error fetching All webhook targets:', err);
  }
};

// readAllWebhookTargets();

const readWebhookTarget = async () => {
  try {
    const response = await api.WebhookTarget.read('4bd187db-3a56-495e-b7fe-d00c963d5333');
    console.log(response, 'Webhook target fetched successfully');
  } catch (err) {
    console.log('Error fetching Webhook target:', err);
  }
};

// readWebhookTarget();

const enumerateWebhookTargets = async () => {
  try {
    const response = await api.WebhookTarget.enumerate();
    console.log(response, 'Webhook targets fetched successfully');
  } catch (err) {
    console.log('Error fetching Webhook targets:', err);
  }
};

// enumerateWebhookTargets();

const createWebhookTarget = async () => {
  try {
    const response = await api.WebhookTarget.create({
      Name: 'My webhook target [ASH]',
      Url: 'http://localhost:8311',
      ContentType: 'application/json',
      ExpectStatus: 200,
    });
    console.log(response, 'Webhook target created successfully');
  } catch (err) {
    console.log('Error creating Webhook target:', err);
  }
};

// createWebhookTarget();

const existWebhookEvent = async () => {
  try {
    const response = await api.WebhookEvent.exists('b4cf5430-9c25-4514-b3e5-fe7fd1108edb');
    console.log(response, 'Webhook event exists');
  } catch (err) {
    console.log('Error checking Webhook event:', err);
  }
};
// existWebhookEvent();

const readWebhookEvents = async () => {
  try {
    const response = await api.WebhookEvent.readAll();
    console.log(response, 'Webhook events fetched successfully');
  } catch (err) {
    console.log('Error fetching Webhook events:', err);
  }
};

// readWebhookEvents();
const enumerateWebhookEvents = async () => {
  try {
    const response = await api.WebhookEvent.enumerate();
    console.log(response, 'Webhook events fetched successfully');
  } catch (err) {
    console.log('Error fetching Webhook events:', err);
  }
};

// enumerateWebhookEvents();

const readBlobWithData = async () => {
  try {
    const response = await api.Blob.readIncludeData('431638f9-1da1-4dd2-b6de-e88acf990c8c');
    console.log(response, 'Blob read successfully');
  } catch (err) {
    console.log('Error reading Blob:', err);
  }
};

// readBlobWithData();

const blobExists = async () => {
  try {
    const response = await api.Blob.exists('431638f9-1da1-4dd2-b6de-e88acf990c8c');
    console.log(response, 'Blob exists');
  } catch (err) {
    console.log('Error checking Blob:', err);
  }
};

// blobExists();

const deleteBlob = async () => {
  try {
    const response = await api.Blob.delete('7f6eee35-fc32-4798-8ea7-e9e84775043e');
    console.log(response, 'Blob deleted successfully');
  } catch (err) {
    console.log('Error deleting Blob:', err);
  }
};

// deleteBlob();

const updateBlob = async () => {
  try {
    const response = await api.Blob.update({
      GUID: '00000000-0000-0000-0000-000000000000',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      ContentType: 'application/json',
      Name: 'Assistant Chat',
      Description: 'Chat thread for assistant config 7a7214df-aa4a-4b40-83e7-59b98fa1d471',
      Url: './blobs/59825f84-5f93-44ba-9efb-477a258a5881',
      Length: 4562,
      RefObjType: 'assistant_thread',
      RefObjGUID: '7a7214df-aa4a-4b40-83e7-59b98fa1d471',
      IsPublic: false,
      MD5Hash: '****',
      SHA1Hash: '****',
      SHA256Hash: '****',
      CreatedUtc: '2025-06-07T19:07:15.316396Z',
    });
    console.log(response, 'Blob updated successfully');
  } catch (err) {
    console.log('Error updating Blob:', err);
  }
};

// updateBlob();

const readAllBlobs = async () => {
  try {
    const response = await api.Blob.readAll();
    console.log(response, 'All blobs fetched successfully');
  } catch (err) {
    console.log('Error fetching All blobs:', err);
  }
};

// readAllBlobs();

const readBlob = async () => {
  try {
    const response = await api.Blob.read('431638f9-1da1-4dd2-b6de-e88acf990c8c');
    console.log(response, 'Blob read successfully');
  } catch (err) {
    console.log('Error reading Blob:', err);
  }
};

// readBlob();
const enumerateBlobs = async () => {
  try {
    const response = await api.Blob.enumerate();
    console.log(response, 'Blobs fetched successfully');
  } catch (err) {
    console.log('Error fetching Blobs:', err);
  }
};

// enumerateBlobs();
const createBlob = async () => {
  try {
    const response = await api.Blob.create({
      ContentType: 'text/plain',
      Name: 'helloworldASH.txt',
      Description: "A text file containing 'Hello, world!'",
      RefObjType: '[usermanaged]',
      RefObjGUID: '[usermanaged]',
      Data: 'SGVsbG8sIHdvcmxkIQ==',
    });
    console.log(response, 'Blob created successfully');
  } catch (err) {
    console.log('Error creating blob:', err);
  }
};

// createBlob();

const webhookRuleExists = async () => {
  try {
    const response = await api.WebhookRule.exists('b4cf5430-9c25-4514-b3e5-fe7fd1108edb');
    console.log(response, 'Webhook rule exists');
  } catch (err) {
    console.log('Error checking Webhook rule:', err);
  }
};

// webhookRuleExists();

const deleteWebhookRule = async () => {
  try {
    const response = await api.WebhookRule.delete('59c7402c-dd30-4723-beba-3a3460f26bf7');
    console.log(response, 'Webhook rule deleted successfully');
  } catch (err) {
    console.log('Error deleting Webhook rule:', err);
  }
};

// deleteWebhookRule();

const updateWebhookRule = async () => {
  try {
    const response = await api.WebhookRule.update({
      GUID: '59c7402c-dd30-4723-beba-3a3460f26bf7',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      TargetGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'My webhook rule [UPDATED]',
      EventType: WebhookEventTypeEnum.ObjectWrite,
      MaxAttempts: 5,
      RetryIntervalMs: 10000,
      TimeoutMs: 30000,
      CreatedUtc: '2025-03-29T11:27:22.814177Z',
    });
    console.log(response, 'Webhook rule updated successfully');
  } catch (err) {
    console.log('Error updating Webhook rule:', err);
  }
};

// updateWebhookRule();

const readAllWebhookRules = async () => {
  try {
    const response = await api.WebhookRule.readAll();
    console.log(response, 'All webhook rules fetched successfully');
  } catch (err) {
    console.log('Error fetching All webhook rules:', err);
  }
};

// readAllWebhookRules();

const readWebhookRule = async () => {
  try {
    const response = await api.WebhookRule.read('b4cf5430-9c25-4514-b3e5-fe7fd1108edb');
    console.log(response, 'Webhook rule fetched successfully');
  } catch (err) {
    console.log('Error fetching Webhook rule:', err);
  }
};

// readWebhookRule();

const enumerateWebhookRules = async () => {
  try {
    const response = await api.WebhookRule.enumerate();
    console.log(response, 'Webhook rules fetched successfully');
  } catch (err) {
    console.log('Error fetching Webhook rules:', err);
  }
};

// enumerateWebhookRules();

const createWebhookRules = async () => {
  try {
    const response = await api.WebhookRule.create({
      Name: 'My webhook rule',
      TargetGUID: '00000000-0000-0000-0000-000000000000',
      EventType: WebhookEventTypeEnum.ObjectWrite,
      MaxAttempts: 5,
      RetryIntervalMs: 10000,
      TimeoutMs: 30000,
    });
    console.log(response, 'Webhook rules created successfully');
  } catch (err) {
    console.log('Error creating Webhook rules:', err);
  }
};

// createWebhookRules();

const encryptionKeyExists = async () => {
  try {
    const response = await api.EncryptionKey.exists('d81a743f-1b02-42a6-a66b-df4c8e93a243');
    console.log(response, 'Encryption key exists');
  } catch (err) {
    console.log('Error checking Encryption key:', err);
  }
};

// encryptionKeyExists();

const deleteEncryptionKey = async () => {
  try {
    const response = await api.EncryptionKey.delete('d81a743f-1b02-42a6-a66b-df4c8e93a243');
    console.log(response, 'Encryption key deleted successfully');
  } catch (err) {
    console.log('Error deleting Encryption key:', err);
  }
};

// deleteEncryptionKey();

const updateEncryptionKey = async () => {
  try {
    const response = await api.EncryptionKey.update({
      GUID: 'd81a743f-1b02-42a6-a66b-df4c8e93a243',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      OwnerGUID: '00000000-0000-0000-0000-000000000000',
      KeyBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
      KeyHex: '0000000000000000000000000000000000000000000000000000000000000000',
      IvBase64: 'AAAAAAAAAAAAAAAAAAAAAA==',
      IvHex: '00000000000000000000000000000000',
      SaltBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
      SaltHex: '0000000000000000000000000000000000000000000000000000000000000000',
      Name: 'Another default key ash test [UPDATED]',
      Description: 'Another default key',
      CreatedUtc: '2025-03-29T08:44:07.522780Z',
    });
    console.log(response, 'Encryption key updated successfully');
  } catch (err) {
    console.log('Error updating Encryption key:', err);
  }
};

// updateEncryptionKey();

const readAllEncryptionKeys = async () => {
  try {
    const response = await api.EncryptionKey.readAll();
    console.log(response, 'All encryption keys fetched successfully');
  } catch (err) {
    console.log('Error fetching All encryption keys:', err);
  }
};

// readAllEncryptionKeys();

const readEncryptionKey = async () => {
  try {
    const response = await api.EncryptionKey.read('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Encryption key fetched successfully');
  } catch (err) {
    console.log('Error fetching Encryption key:', err);
  }
};

// readEncryptionKey();

const enumerateEncryptionKeys = async () => {
  try {
    const response = await api.EncryptionKey.enumerate();
    console.log(response, 'Encryption keys fetched successfully');
  } catch (err) {
    console.log('Error fetching Encryption keys:', err);
  }
};

// enumerateEncryptionKeys();

const createEncryptionKeys = async () => {
  try {
    const response = await api.EncryptionKey.create({
      KeyBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
      KeyHex: '0000000000000000000000000000000000000000000000000000000000000000',
      IvBase64: 'AAAAAAAAAAAAAAAAAAAAAA==',
      IvHex: '00000000000000000000000000000000',
      SaltBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
      SaltHex: '0000000000000000000000000000000000000000000000000000000000000000',
      Name: 'Another default key ash test',
      Description: 'Another default key',
    });
    console.log(response, 'Encryption keys created successfully');
  } catch (err) {
    console.log('Error creating Encryption keys:', err);
  }
};

// createEncryptionKeys();

const graphRepositoryExists = async () => {
  try {
    const response = await api.GraphRepository.exists('180ee580-9c0b-4ef6-b0b1-cddabfa2067a');
    console.log(response, 'Graph repository exists');
  } catch (err) {
    console.log('Error checking Graph repository:', err);
  }
};

// graphRepositoryExists();

const deleteGraphRepository = async () => {
  try {
    const response = await api.GraphRepository.delete('180ee580-9c0b-4ef6-b0b1-cddabfa2067a');
    console.log(response, 'Graph repository deleted successfully');
  } catch (err) {
    console.log('Error deleting Graph repository:', err);
  }
};
// deleteGraphRepository();

const updateGraphRepository = async () => {
  try {
    const response = await api.GraphRepository.update({
      GUID: '31ff2943-f15a-4493-9cfc-21b56f821e89',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'My LiteGraph instance ash 3 updated',
      RepositoryType: 'LiteGraph',
      EndpointUrl: 'http://localhost:8701/',
      ApiKey: '***ault',
      Ssl: false,
      GraphIdentifier: 'undefined',
      CreatedUtc: '2025-03-26T11:49:18.804037Z',
      Username: 'User',
      Password: 'Password',
      Port: 0,
      Hostname: 'localhost',
    });
    console.log(response, 'Graph repository updated successfully');
  } catch (err) {
    console.log('Error updating Graph repository:', err);
  }
};

// updateGraphRepository();

const readAllGraphRepositories = async () => {
  try {
    const response = await api.GraphRepository.readAll();
    console.log(response, 'All graph repositories fetched successfully');
  } catch (err) {
    console.log('Error fetching Graph repositories:', err);
  }
};
// readAllGraphRepositories();

const readGraphRepository = async () => {
  try {
    const response = await api.GraphRepository.read('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Graph repository fetched successfully');
  } catch (err) {
    console.log('Error fetching Graph repository:', err);
  }
};

// readGraphRepository();

const enumerateGraphRepositories = async () => {
  try {
    const response = await api.GraphRepository.enumerate();
    console.log(response, 'Graph repositories fetched successfully');
  } catch (err) {
    console.log('Error fetching Graph repositories:', err);
  }
};
// enumerateGraphRepositories();

const createGraphRepository = async () => {
  try {
    const response = await api.GraphRepository.create({
      Name: 'My LiteGraph instance ash 3',
      RepositoryType: 'LiteGraph',
      EndpointUrl: 'http://localhost:8701/',
      ApiKey: 'default',
      GraphIdentifier: '00000000-0000-0000-0000-000000000000',
    });
    console.log(response, 'Graph repository created successfully');
  } catch (err) {
    console.log('Error creating Graph repository:', err);
  }
};

// createGraphRepository();

const vectorRepositoryExists = async () => {
  try {
    const response = await api.VectorRepository.exists('e345dfe7-3e66-4f2b-b78e-3ae1b1c30d9c');
    console.log(response, 'Vector repository exists');
  } catch (err) {
    console.log('Error checking Vector repository:', err);
  }
};

// vectorRepositoryExists();

const deleteVectorRepository = async () => {
  try {
    const response = await api.VectorRepository.delete('57094adf-f08f-4887-a49e-ae898c7317e2');
    console.log(response, 'Vector repository deleted successfully');
  } catch (err) {
    console.log('Error deleting Vector repository:', err);
  }
};

// deleteVectorRepository();

const updateVectorRepository = async () => {
  try {
    const response = await api.VectorRepository.update({
      GUID: 'd5845b70-6da5-4ddf-9795-bf90c24b80fc',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'My vector repository ash updated',
      RepositoryType: VectorRepositoryTypeEnum.Pgvector,
      Model: 'all-MiniLM-L6-v2',
      Dimensionality: 384,
      DatabaseHostname: 'localhost',
      DatabaseName: 'vectordb',
      SchemaName: 'public',
      DatabaseTable: 'minilm',
      DatabasePort: 5432,
      DatabaseUser: 'postgres',
      DatabasePassword: 'password',
      CreatedUtc: '2025-03-26T10:00:43.978210Z',
    });
    console.log(response, 'Vector repository updated successfully');
  } catch (err) {
    console.log('Error updating Vector repository:', err);
  }
};

// updateVectorRepository();

const getAllVectorRepositories = async () => {
  try {
    const response = await api.VectorRepository.readAll();
    console.log(response, 'All vector repositories fetched successfully');
  } catch (err) {
    console.log('Error fetching Vector repositories:', err);
  }
};

// getAllVectorRepositories();

const getVectorRepository = async () => {
  try {
    const response = await api.VectorRepository.read('d5845b70-6da5-4ddf-9795-bf90c24b80fc');
    console.log(response, 'Vector repository fetched successfully');
  } catch (err) {
    console.log('Error fetching Vector repository:', err);
  }
};
// getVectorRepository();

const enumerateVectorRepositories = async () => {
  try {
    const response = await api.VectorRepository.enumerate();
    console.log(response, 'Vector repositories fetched successfully');
  } catch (err) {
    console.log('Error fetching Vector repositories:', err);
  }
};

// enumerateVectorRepositories();

const createVectorRepository = async () => {
  try {
    const response = await api.VectorRepository.create({
      Name: 'My vector repository ash 3',
      RepositoryType: VectorRepositoryTypeEnum.Pgvector,
      Model: 'all-MiniLM-L6-v2',
      Dimensionality: 384,
      DatabaseHostname: 'localhost',
      DatabaseName: 'vectordb',
      SchemaName: 'public',
      DatabaseTable: 'minilm',
      DatabasePort: 5432,
      DatabaseUser: 'postgres',
      DatabasePassword: 'password',
    });
    console.log(response, 'Vector repository created successfully');
  } catch (err) {
    console.log('Error creating Vector repository:', err);
  }
};

// createVectorRepository();

const embeddingRuleExists = async () => {
  try {
    const response = await api.EmbeddingRule.exists('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Embedding rule exists');
  } catch (err) {
    console.log('Error checking Embedding rule:', err);
  }
};

// embeddingRuleExists();

const deleteEmbeddingRule = async () => {
  try {
    const response = await api.EmbeddingRule.delete('962dfbd8-a6bf-43bb-9430-3c2a12e0b1a8');
    console.log(response, 'Embedding rule deleted successfully');
  } catch (err) {
    console.log('Error deleting Embedding rule:', err);
  }
};

// deleteEmbeddingRule();

const updateEmbeddingRule = async () => {
  try {
    const response = await api.EmbeddingRule.update({
      GUID: '962dfbd8-a6bf-43bb-9430-3c2a12e0b1a8',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      BucketGUID: '00000000-0000-0000-0000-000000000000',
      OwnerGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'Embeddings rule test ash updated',
      ContentType: '*',
      GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
      VectorRepositoryGUID: '00000000-0000-0000-0000-000000000000',
      ProcessingEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
      ProcessingAccessKey: '***ault',
      EmbeddingsServerUrl: 'http://nginx-processor:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/embeddings',
      EmbeddingsServerApiKey: '***ault',
      EmbeddingsGenerator: 'LCProxy',
      EmbeddingsGeneratorUrl: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/embeddings',
      EmbeddingsGeneratorApiKey: '',
      BatchSize: 512,
      MaxGeneratorTasks: 32,
      MaxRetries: 3,
      MaxFailures: 3,
      VectorStoreUrl: 'http://localhost:8000/',
      VectorStoreAccessKey: '***ault',
      MaxContentLength: 16777216,
      CreatedUtc: '2025-03-26T09:37:15.386Z',
    });
    console.log(response, 'Embedding rule updated successfully');
  } catch (err) {
    console.log('Error updating Embedding rule:', err);
  }
};

// updateEmbeddingRule();

const readAllEmbeddingRules = async () => {
  try {
    const response = await api.EmbeddingRule.readAll();
    console.log(response, 'All embedding rules fetched successfully');
  } catch (err) {
    console.log('Error fetching Embedding rules:', err);
  }
};
// readAllEmbeddingRules();

const readEmbeddingRule = async () => {
  try {
    const response = await api.EmbeddingRule.read('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Embedding rule fetched successfully');
  } catch (err) {
    console.log('Error fetching Embedding rule:', err);
  }
};

// readEmbeddingRule();

const enumerateEmbeddingRules = async () => {
  try {
    const response = await api.EmbeddingRule.enumerate();
    console.log(response, 'Embedding rules fetched successfully');
  } catch (err) {
    console.log('Error fetching Embedding rules:', err);
  }
};

// enumerateEmbeddingRules();

const createEmbeddingRules = async () => {
  try {
    const response = await api.EmbeddingRule.create({
      BucketGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'Embeddings rule test ash',
      ContentType: '*',
      GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
      VectorRepositoryGUID: '00000000-0000-0000-0000-000000000000',
      ProcessingEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
      ProcessingAccessKey: 'default',
      EmbeddingsGenerator: 'LCProxy',
      EmbeddingsGeneratorUrl: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/embeddings',
      EmbeddingsGeneratorApiKey: '',
      BatchSize: 512,
      MaxGeneratorTasks: 32,
      MaxRetries: 3,
      MaxFailures: 3,
      VectorStoreUrl: 'http://localhost:8000/',
      VectorStoreAccessKey: 'default',
      MaxContentLength: 16777216,
    });
    console.log(response, 'Embedding rule created successfully');
  } catch (err) {
    console.log('Error creating Embedding rule:', err);
  }
};

// createEmbeddingRules();

export const existsMetaDataRule = async () => {
  try {
    const response = await api.MetadataRule.exists('ff0d2c7c-fc51-473a-8c7d-d2123e2d6492');
    console.log(response, 'Metadata rule exists');
  } catch (err) {
    console.log('Error checking Metadata rule:', err);
  }
};

// existsMetaDataRule();

export const deleteMetaDataRule = async () => {
  try {
    const response = await api.MetadataRule.delete('dfdee78e-3f48-4199-a27b-988b4fee04c9');
    console.log(response, 'Metadata rule deleted successfully');
  } catch (err) {
    console.log('Error deleting Metadata rule:', err);
  }
};

// deleteMetaDataRule();

export const updateMetaDataRule = async () => {
  try {
    const response = await api.MetadataRule.update({
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

export const getMetaDataRules = async () => {
  try {
    const response = await api.MetadataRule.readAll();
    console.log(response, 'Metadata rules fetched successfully');
  } catch (err) {
    console.log('Error fetching Metadata rules:', err);
  }
};

// getMetaDataRules();
export const getMetaDataRule = async () => {
  try {
    const response = await api.MetadataRule.read('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Metadata rule fetched successfully');
  } catch (err) {
    console.log('Error fetching Metadata rule:', err);
  }
};

// getMetaDataRule();

export const enumerateMetaDataRules = async () => {
  try {
    const response = await api.MetadataRule.enumerate();
    console.log(response, 'Metadata rules fetched successfully');
  } catch (err) {
    console.log('Error fetching Metadata rules:', err);
  }
};

// enumerateMetaDataRules();

export const createMetaDataRules = async () => {
  try {
    const response = await api.MetadataRule.create({
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

export const credentialExists = async () => {
  try {
    const response = await api.Credential.exists('65bcfde5-76de-4866-9259-6698e935b894');
    console.log(response, 'Credential exists');
  } catch (err) {
    console.log('Error fetching Credential:', err);
  }
};

// credentialExists();

export const deleteCredential = async () => {
  try {
    const response = await api.Credential.delete('58051d5c-fb01-4e9a-83f7-f310b4449f15');
    console.log(response, 'Credential deleted successfully');
  } catch (err) {
    console.log('Error deleting Credential:', err);
  }
};

// deleteCredential();
export const getAllCredentials = async () => {
  try {
    const credentials = await api.Credential.readAll();
    console.log(credentials, 'All credentials fetched successfully');
  } catch (err) {
    console.log('Error fetching Credentials:', err);
  }
};

// getAllCredentials();

export const getCredential = async () => {
  try {
    const credential = await api.Credential.read('f734b815-c9ef-403a-8125-cfec4d405482');
    console.log(credential, 'Credential fetched successfully');
  } catch (err) {
    console.log('Error fetching Credential:', err);
  }
};
// getCredential();

export const enumerateCredentials = async () => {
  try {
    const credentials = await api.Credential.enumerate();
    console.log(credentials, 'Credentials fetched successfully');
  } catch (err) {
    console.log('Error fetching Credentials:', err);
  }
};

// enumerateCredentials();
export const createCredential = async () => {
  try {
    const response = await api.Credential.create({
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

export const userExists = async () => {
  try {
    const response = await api.User.exists('9b7796bc-b36f-4e68-8cec-4ce98c9be7cd');
    console.log(response, 'User exists');
  } catch (err) {
    console.log('Error fetching User:', err);
  }
};

// userExists();

export const deleteUser = async () => {
  try {
    const response = await api.User.delete('1522f272-c572-4419-88b5-f0a0d37dabf6');
    console.log(response, 'User deleted successfully');
  } catch (err) {
    console.log('Error deleting User:', err);
  }
};

// deleteUser();

export const getUsers = async () => {
  try {
    const users = await api.User.readAll();
    console.log(users, 'Users fetched successfully');
  } catch (err) {
    console.log('Error fetching Users:', err);
  }
};

// getUsers();

export const updateUser = async () => {
  try {
    const user = await api.User.update({
      GUID: '0a54349a-39d4-4756-960d-9d7b6af9435c',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      Active: true,
      CreatedUtc: '2025-03-25T12:19:28.976056Z',
      IsProtected: false,
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

export const getUser = async () => {
  try {
    const user = await api.User.read('0a54349a-39d4-4756-960d-9d7b6af9435c');
    console.log(user, 'User fetched successfully');
  } catch (err) {
    console.log('Error fetching User:', err);
  }
};

// getUser();

export const enumerateUsers = async () => {
  try {
    const users = await api.User.enumerate();
    console.log(users, 'Users fetched successfully');
  } catch (err) {
    console.log('Error fetching Users:', err);
  }
};

// enumerateUsers();

export const createUser = async () => {
  try {
    const user = await api.User.create({
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

export const tenantExists = async () => {
  try {
    const tenant = await api.Tenant.exists('904a458b-8e62-4a8d-baa4-dae577245930');
    console.log(tenant, 'Tenant exists'); //true
  } catch (err) {
    console.log('Error fetching Tenant:', err);
  }
};
// tenantExists();

export const nodeExists = async () => {
  try {
    const node = await api.Nodes.exists('33079aff-6421-4987-a80e-26c621f2aa24');
    console.log(node, 'Node exists'); //true
  } catch (err) {
    console.log('Error fetching Node:', err);
  }
};

// nodeExists();

export const enumerateNode = async () => {
  try {
    const nodes = await api.Nodes.enumerate(2);
    console.log(nodes, 'Nodes fetched successfully');
  } catch (err) {
    console.log('Error fetching Nodes:', err);
  }
};
// enumerateNode();

export const enumerateTenant = async () => {
  try {
    const tenants = await api.Tenant.enumerate();
    console.log(tenants, 'Tenants fetched successfully');
  } catch (err) {
    console.log('Error fetching Tenants:', err);
  }
};
// enumerateTenant();
const deleteNode = async () => {
  try {
    await api.Nodes.delete('a46fa027-1b89-4250-996e-d7c5c0c82ca3');
    console.log('Node deleted successfully');
  } catch (err) {
    console.log('Error deleting Node:', err);
  }
};
// deleteNode();

const getNode = async () => {
  try {
    const nodes = await api.Nodes.read('33079aff-6421-4987-a80e-26c621f2aa24');
    console.log(nodes, 'Nodes fetched successfully');
  } catch (err) {
    console.log('Error fetching Nodes:', err);
  }
};
// getNode();

const getNodes = async () => {
  try {
    const nodes = await api.Nodes.readAll();
    console.log(nodes, 'Nodes fetched successfully');
  } catch (err) {
    console.log('Error fetching Nodes:', err);
  }
};
// getNodes();

const fetchTenant = async () => {
  try {
    const tenants = await api.Tenant.readAll();
    console.log(tenants, 'Tenant fetched successfully');
  } catch (err) {
    console.log('Error fetching Tenant:', err);
  }
};
// fetchTenant();

const updateTenant = async () => {
  try {
    const updatedTenant = await api.Tenant.update({
      GUID: '00000000-0000-0000-0000-000000000000',
      AccountGUID: '00000000-0000-0000-0000-000000000000',
      DefaultPoolGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'Default Tenant',
      Region: 'us-west-1',
      S3BaseDomain: 'localhost',
      RestBaseDomain: 'localhost',
      Active: true,
      IsProtected: true,
      CreatedUtc: '2025-06-07T17:59:30.333249Z',
    });
    console.log(updatedTenant, 'Tenant updated successfully');
  } catch (err) {
    console.log('Error updating Tenant:', err);
  }
};
// updateTenant();

const deleteTenant = async () => {
  try {
    await api.Tenant.delete('3b681727-f9a0-4904-ad9a-223b8101d2f4');
    console.log('Tenant deleted successfully');
  } catch (err) {
    console.log('Error deleting Tenant:', err);
  }
};

// deleteTenant();

const enumerateTenants = async () => {
  try {
    const tenants = await api.Tenant.enumerate();
    console.log(tenants, 'Tenants fetched successfully');
  } catch (err) {
    console.log('Error fetching Tenants:', err);
  }
};

// enumerateTenants();
const createTenant = async () => {
  try {
    const createdTenant = await api.Tenant.create({
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
    const tenant = await api.Tenant.read('00000000-0000-0000-0000-000000000000');
    console.log(tenant);
  } catch (err) {
    console.log('err: ', err);
  }
};

// retrieveTenantById();
