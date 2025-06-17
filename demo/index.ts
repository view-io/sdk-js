import { ViewConfigurationSdk } from 'view-sdk';

const api = new ViewConfigurationSdk(
  'http://view.homedns.org:8000', //endpoint
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default' //access token
);

api.config.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ';

//region Object Lock

const enumerateObjectLocks = async () => {
  try {
    const response = await api.ObjectLock.enumerate();
    console.log(response, 'Object locks fetched successfully');
  } catch (err) {
    console.log('Error fetching Object locks:', err);
  }
};

// enumerateObjectLocks();

const deleteObjectLock = async () => {
  try {
    const response = await api.ObjectLock.delete('1477c75f-6e37-45ba-a084-cc60465112e1');
    console.log(response, 'Object lock deleted successfully');
  } catch (err) {
    console.log('Error deleting Object lock:', err);
  }
};

// deleteObjectLock();

const readObjectLock = async () => {
  try {
    const response = await api.ObjectLock.read('1477c75f-6e37-45ba-a084-cc60465112e1');
    console.log(response, 'Object lock read successfully');
  } catch (err) {
    console.log('Error reading Object lock:', err);
  }
};

// readObjectLock();

const readAllObjectLocks = async () => {
  try {
    const response = await api.ObjectLock.readAll();
    console.log(response, 'All object locks fetched successfully');
  } catch (err) {
    console.log('Error fetching All object locks:', err);
  }
};

// readAllObjectLocks();

//endregion

//region WebhookTarget

const existsWebhookTarget = async () => {
  try {
    const response = await api.WebhookTarget.exists('1477c75f-6e37-45ba-a084-cc60465112e1');
    console.log(response, 'Webhook target exists');
  } catch (err) {
    console.log('Error checking Webhook target:', err);
  }
};

// existsWebhookTarget();

const deleteWebhookTarget = async () => {
  try {
    const response = await api.WebhookTarget.delete('1477c75f-6e37-45ba-a084-cc60465112e1');
    console.log(response, 'Webhook target deleted successfully');
  } catch (err) {
    console.log('Error deleting Webhook target:', err);
  }
};

// deleteWebhookTarget();

const updateWebhookTarget = async () => {
  try {
    const response = await api.WebhookTarget.update({
      GUID: '1477c75f-6e37-45ba-a084-cc60465112e1',
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
    const response = await api.WebhookTarget.read('1477c75f-6e37-45ba-a084-cc60465112e1');
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

//endregion

//region WebhookEvent

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

const readWebhookEvent = async () => {
  try {
    const response = await api.WebhookEvent.read('b4cf5430-9c25-4514-b3e5-fe7fd1108edb');
    console.log(response, 'Webhook event fetched successfully');
  } catch (err) {
    console.log('Error fetching Webhook event:', err);
  }
};

// readWebhookEvent();

//endregion

//region Blob

const readBlobWithData = async () => {
  try {
    const response = await api.Blob.readIncludeData('d9056378-85db-4c5b-8687-044c108dce08');
    console.log(response, 'Blob read successfully');
  } catch (err) {
    console.log('Error reading Blob:', err);
  }
};

// readBlobWithData();

const blobExists = async () => {
  try {
    const response = await api.Blob.exists('d9056378-85db-4c5b-8687-044c108dce08');
    console.log(response, 'Blob exists');
  } catch (err) {
    console.log('Error checking Blob:', err);
  }
};

// blobExists();

const deleteBlob = async () => {
  try {
    const response = await api.Blob.delete('d9056378-85db-4c5b-8687-044c108dce08');
    console.log(response, 'Blob deleted successfully');
  } catch (err) {
    console.log('Error deleting Blob:', err);
  }
};

// deleteBlob();

const updateBlob = async () => {
  try {
    const response = await api.Blob.update({
      GUID: 'd9056378-85db-4c5b-8687-044c108dce08',
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
    const response = await api.Blob.read('d9056378-85db-4c5b-8687-044c108dce08');
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

//endregion

//region WebhookRule

const webhookRuleExists = async () => {
  try {
    const response = await api.WebhookRule.exists('9f7139c9-e95c-4705-a849-a01f5dda14b9');
    console.log(response, 'Webhook rule exists');
  } catch (err) {
    console.log('Error checking Webhook rule:', err);
  }
};

// webhookRuleExists();

const deleteWebhookRule = async () => {
  try {
    const response = await api.WebhookRule.delete('9f7139c9-e95c-4705-a849-a01f5dda14b9');
    console.log(response, 'Webhook rule deleted successfully');
  } catch (err) {
    console.log('Error deleting Webhook rule:', err);
  }
};

// deleteWebhookRule();

const updateWebhookRule = async () => {
  try {
    const response = await api.WebhookRule.update({
      GUID: '9f7139c9-e95c-4705-a849-a01f5dda14b9',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      TargetGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'My webhook rule [UPDATED]',
      EventType: 'ObjectWrite' as any,
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
    const response = await api.WebhookRule.read('9f7139c9-e95c-4705-a849-a01f5dda14b9');
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
      EventType: 'ObjectWrite' as any,
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

//endregion

//region EncryptionKey

const encryptionKeyExists = async () => {
  try {
    const response = await api.EncryptionKey.exists('e6b3d713-ce6f-4d76-802d-e343eeb905b3');
    console.log(response, 'Encryption key exists');
  } catch (err) {
    console.log('Error checking Encryption key:', err);
  }
};

// encryptionKeyExists();

const deleteEncryptionKey = async () => {
  try {
    const response = await api.EncryptionKey.delete('e6b3d713-ce6f-4d76-802d-e343eeb905b3');
    console.log(response, 'Encryption key deleted successfully');
  } catch (err) {
    console.log('Error deleting Encryption key:', err);
  }
};

// deleteEncryptionKey();

const updateEncryptionKey = async () => {
  try {
    const response = await api.EncryptionKey.update({
      GUID: 'e6b3d713-ce6f-4d76-802d-e343eeb905b3',
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
    const response = await api.EncryptionKey.read('e6b3d713-ce6f-4d76-802d-e343eeb905b3');
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

//endregion

//region GraphRepository

const graphRepositoryExists = async () => {
  try {
    const response = await api.GraphRepository.exists('e2f9e53c-6f54-47e5-932d-e756921e0aeb');
    console.log(response, 'Graph repository exists');
  } catch (err) {
    console.log('Error checking Graph repository:', err);
  }
};

// graphRepositoryExists();

const deleteGraphRepository = async () => {
  try {
    const response = await api.GraphRepository.delete('e2f9e53c-6f54-47e5-932d-e756921e0aeb');
    console.log(response, 'Graph repository deleted successfully');
  } catch (err) {
    console.log('Error deleting Graph repository:', err);
  }
};
// deleteGraphRepository();

const updateGraphRepository = async () => {
  try {
    const response = await api.GraphRepository.update({
      GUID: 'e2f9e53c-6f54-47e5-932d-e756921e0aeb',
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
    const response = await api.GraphRepository.read('e2f9e53c-6f54-47e5-932d-e756921e0aeb');
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

//endregion

//region VectorRepository

const vectorRepositoryExists = async () => {
  try {
    const response = await api.VectorRepository.exists('c954934b-46cc-4252-a868-5572f3b5503b');
    console.log(response, 'Vector repository exists');
  } catch (err) {
    console.log('Error checking Vector repository:', err);
  }
};

// vectorRepositoryExists();

const deleteVectorRepository = async () => {
  try {
    const response = await api.VectorRepository.delete('c954934b-46cc-4252-a868-5572f3b5503b');
    console.log(response, 'Vector repository deleted successfully');
  } catch (err) {
    console.log('Error deleting Vector repository:', err);
  }
};

// deleteVectorRepository();

const updateVectorRepository = async () => {
  try {
    const response = await api.VectorRepository.update({
      GUID: 'c954934b-46cc-4252-a868-5572f3b5503b',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'My vector repository ash updated',
      RepositoryType: 'Pgvector' as any,
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
    const response = await api.VectorRepository.read('c954934b-46cc-4252-a868-5572f3b5503b');
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
      RepositoryType: 'Pgvector' as any,
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

//endregion

//region EmbeddingRule

const embeddingRuleExists = async () => {
  try {
    const response = await api.EmbeddingRule.exists('5264a24e-fabb-4124-8a9e-6c532b2cbf92');
    console.log(response, 'Embedding rule exists');
  } catch (err) {
    console.log('Error checking Embedding rule:', err);
  }
};

// embeddingRuleExists();

const deleteEmbeddingRule = async () => {
  try {
    const response = await api.EmbeddingRule.delete('5264a24e-fabb-4124-8a9e-6c532b2cbf92');
    console.log(response, 'Embedding rule deleted successfully');
  } catch (err) {
    console.log('Error deleting Embedding rule:', err);
  }
};

// deleteEmbeddingRule();

const updateEmbeddingRule = async () => {
  try {
    const response = await api.EmbeddingRule.update({
      GUID: '5264a24e-fabb-4124-8a9e-6c532b2cbf92',
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
    const response = await api.EmbeddingRule.read('5264a24e-fabb-4124-8a9e-6c532b2cbf92');
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
      Name: 'Embeddings rule',
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

//endregion

//region MetadataRule

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
    const response = await api.MetadataRule.delete('f07e5737-7893-4df8-ab3a-bbd8e2272d98');
    console.log(response, 'Metadata rule deleted successfully');
  } catch (err) {
    console.log('Error deleting Metadata rule:', err);
  }
};

// deleteMetaDataRule();

export const updateMetaDataRule = async () => {
  try {
    const response = await api.MetadataRule.update({
      GUID: 'f07e5737-7893-4df8-ab3a-bbd8e2272d98',
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
    const response = await api.MetadataRule.read('f07e5737-7893-4df8-ab3a-bbd8e2272d98');
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
      Name: 'example-metadata-rule-2',
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

createMetaDataRules();

//endregion

//region Credential

export const credentialExists = async () => {
  try {
    const response = await api.Credential.exists('e3c9137c-cbf3-4f7c-80ba-be2ea96fb669');
    console.log(response, 'Credential exists');
  } catch (err) {
    console.log('Error fetching Credential:', err);
  }
};

// credentialExists();

export const deleteCredential = async () => {
  try {
    const response = await api.Credential.delete('e3c9137c-cbf3-4f7c-80ba-be2ea96fb669');
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
    const credential = await api.Credential.read('e3c9137c-cbf3-4f7c-80ba-be2ea96fb669');
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
      UserGUID: 'da575ca5-f9d2-43ad-9268-cf68e49f6ee9',
      Name: 'Default credential',
      Active: true,
    });
    console.log(response, 'Credential created successfully');
  } catch (err) {
    console.log('Error creating Credential:', err);
  }
};
// createCredential();

//endregion

//region User

export const userExists = async () => {
  try {
    const response = await api.User.exists('f75b0fbc-de48-487b-b1bd-4398fd828173');
    console.log(response, 'User exists');
  } catch (err) {
    console.log('Error fetching User:', err);
  }
};

// userExists();

export const deleteUser = async () => {
  try {
    const response = await api.User.delete('f75b0fbc-de48-487b-b1bd-4398fd828173');
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
      GUID: 'da575ca5-f9d2-43ad-9268-cf68e49f6ee9',
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
    const user = await api.User.read('f75b0fbc-de48-487b-b1bd-4398fd828173');
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

//endregion

//region Node
export const nodeExists = async () => {
  try {
    const node = await api.Nodes.exists('c8ebddf6-3b4f-4709-ae51-1d533a69115b');
    console.log(node, 'Node exists'); //true
  } catch (err) {
    console.log('Error fetching Node:', err);
  }
};

// nodeExists();

export const enumerateNode = async () => {
  try {
    const nodes = await api.Nodes.enumerate();
    console.log(nodes, 'Nodes fetched successfully');
  } catch (err) {
    console.log('Error fetching Nodes:', err);
  }
};
// enumerateNode();

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
    const nodes = await api.Nodes.read('8f8b6997-7082-4ad1-93e2-a397cf214cbf');
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

//endregion

//region Tenant

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
      GUID: 'a73a5aad-6e70-469f-89b7-8f4beb46cfce',
      AccountGUID: 'f6381ef8-a1d1-48f7-b663-e0e534eed820',
      DefaultPoolGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'Default Tenant123',
      Region: 'us-west-1',
      S3BaseDomain: 'localhost',
      RestBaseDomain: 'localhost',
      Active: true,
      IsProtected: true,
      CreatedUtc: '2025-06-09T17:59:30.333249Z',
    });
    console.log(updatedTenant, 'Tenant updated successfully');
  } catch (err) {
    console.log('Error updating Tenant:', err);
  }
};
// updateTenant();

const deleteTenant = async () => {
  try {
    await api.Tenant.delete('a73a5aad-6e70-469f-89b7-8f4beb46cfce');
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
      Name: 'My tenant test12',
      Region: 'us-west-1',
      S3BaseDomain: 'localhost',
      RestBaseDomain: 'localhost',
      DefaultPoolGUID: '00000000-0000-0000-0000-000000000000',
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

export const tenantExists = async () => {
  try {
    const tenant = await api.Tenant.exists('00000000-0000-0000-0000-000000000000');
    console.log(tenant, 'Tenant exists'); //true
  } catch (err) {
    console.log('Error fetching Tenant:', err);
  }
};
// tenantExists();

//endregion

//region Authentication

const retrieveTenantsForEmail = async () => {
  try {
    // api.config.accessToken =
    //   'mXCNtMWDsW0/pr+IwRFUjQeX+5M5Bn5IvSEZ9F72vLOu0HzqmUUI+y0Dl3wovaOUtABmRXJOrhg4BE3v8oY4FfydsBoP7k8H56P5/QRI2os22ZayM/cNqSgPI8WT8Byx3jwLXJ5Nygd+CAMeEn2YULbSa12E+RyLyTlBHhfppNZ2BmaUsMBd5jz5DFjonICQQWkpWPVYymio49PcusxyWr8bybRjhIbRSH7RC27DkIWezMoaTAPf3x1HLd6yCcK180woutjkfsfKKaMie6vz8q8pRO4wdjCPrhp9H97r4EZYMqvGdLVvBpkkx+6znpAu';
    const tenants = await api.Authentication.retrieveTenantsForEmail('default@user.com');
    console.log(tenants, 'Tenants fetched successfully');
  } catch (err) {
    console.log('Error fetching Tenants:', err);
  }
};

// retrieveTenantsForEmail();

const generateAuthenticationTokenByPassword = async () => {
  try {
    const token = await api.Authentication.generateAuthenticationTokenByPassword({
      email: 'default@user.com',
      password: 'password',
      tenantGUID: '00000000-0000-0000-0000-000000000000',
    });
    console.log(token, 'Token generated successfully');
  } catch (err) {
    console.log('Error generating Token:', err);
  }
};

// generateAuthenticationTokenByPassword();

const generateAuthenticationTokenBySHA256 = async () => {
  try {
    const token = await api.Authentication.generateAuthenticationTokenBySHA256({
      email: 'default@user.com',
      passwordSHA256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
      tenantGUID: '00000000-0000-0000-0000-000000000000',
    });
    console.log(token, 'Token generated successfully');
  } catch (err) {
    console.log('Error generating Token:', err);
  }
};

// generateAuthenticationTokenBySHA256();

const generateAdministratorToken = async () => {
  try {
    const token = await api.Authentication.generateAdministratorToken({
      email: 'admin@view.io',
      password: 'viewadmin',
    });
    console.log(token, 'Token generated successfully');
  } catch (err) {
    console.log('Error generating Token:', err);
  }
};

// generateAdministratorToken();

const generateAdministratorTokenBySHA256 = async () => {
  try {
    const token = await api.Authentication.generateAdministratorTokenBySHA256({
      email: 'admin@view.io',
      passwordSHA256: 'e75255193871e245472533552fe45dfda25768d26e9eb92507e75263e90c6a48',
    });
    console.log(token, 'Token generated successfully');
  } catch (err) {
    console.log('Error generating Token:', err);
  }
};

// generateAdministratorTokenBySHA256();

const validateAuthenticationToken = async () => {
  try {
    const token = await api.Authentication.validateAuthenticationToken({
      token:
        'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ',
    });
    console.log(token, 'Token validated successfully');
  } catch (err) {
    console.log('Error validating Token:', err);
  }
};

// validateAuthenticationToken();

const retrieveTokenDetails = async () => {
  try {
    const token = await api.Authentication.retrieveTokenDetails({
      token:
        'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ',
    });
    console.log(token, 'Token details fetched successfully');
  } catch (err) {
    console.log('Error fetching Token details:', err);
  }
};

// retrieveTokenDetails();
//endregion
