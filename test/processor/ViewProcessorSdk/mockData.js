export const mockTenant = {
  id: 1,
  GUID: 'default',
  ParentGUID: 'default',
  Name: 'Sample Tenant',
  Region: 'us-west-1',
  S3BaseDomain: 's3.example.com',
  RestBaseDomain: 'api.example.com',
  DefaultPoolGUID: 'pool-001',
  Active: true,
  CreatedUtc: new Date().toISOString(),
};

export const mockCollection = {
  id: 1001,
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  Name: 'Sample Collection',
  AllowOverwrites: true,
  CreatedUtc: new Date().toISOString(),
};

export const mockPool = {
  id: 2001,
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  Name: 'Sample Pool',
  Provider: 'Disk',
  CreatedUtc: new Date().toISOString(),
};

export const mockBucket = {
  id: 3001,
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  PoolGUID: mockPool.GUID,
  Category: 'Default',
  Name: 'Sample Bucket',
  Versioning: true,
  CreatedUtc: new Date().toISOString(),
};

export const mockObject = {
  guid: 'default',
  tenantGUID: mockTenant.GUID,
  bucketGUID: mockBucket.GUID,
  key: 'sample-object',
  contentType: 'text/plain',
  contentLength: 1024,
  createdUtc: new Date().toISOString(),
};

export const mockMetadataRule = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  Name: 'Metadata Rule 1',
  ContentType: 'text/plain',
  MaxContentLength: 16777216,
  CreatedUtc: new Date().toISOString(),
};

export const mockEmbeddingsRule = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  Name: 'Embeddings Rule 1',
  EmbeddingsGenerator: 'LCProxy',
  GeneratorUrl: 'http://localhost/generate',
  GeneratorApiKey: 'api-key',
  BatchSize: 16,
  CreatedUtc: new Date().toISOString(),
};

export const mockVectorRepo = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  name: 'Sample Vector Repository',
  repositoryType: 'Default',
  endpointUrl: 'http://vector-repo.example.com',
  apiKey: 'vector-api-key',
  model: 'all-MiniLM-L6-v2',
  dimensionality: 384,
  createdUtc: new Date().toISOString(),
};

export const mockGraphRepo = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  Name: 'Sample Graph Repository',
  RepositoryType: 'Graph',
  EndpointUrl: 'http://graph-repo.example.com',
  ApiKey: 'graph-api-key',
  CreatedUtc: new Date().toISOString(),
};

export const mockProcessorResponse = {
  GUID: 'default',
  Success: true,
  Async: false,
  Timestamp: {
    Start: new Date().toISOString(),
    TotalMs: 1000,
    Messages: [],
  },
};

export const mockTypeResult = {
  MimeType: 'text/plain',
  Extension: 'txt',
  Type: 'Text',
};

export const mockSemanticCellResponse = {
  DataFlowRequestGUID: 'default',
  Success: true,
  Timestamp: {
    Start: new Date().toISOString(),
    TotalMs: 1000,
    Messages: [],
  },
  Error: null,
  SemanticCells: [],
  Data: null,
};

export const mockUdrDocument = {
  GUID: 'default',
  Success: true,
  Timestamp: {
    Start: new Date().toISOString(),
    TotalMs: 1000,
    Messages: [],
  },
  AdditionalData: null,
  Metadata: null,
  Key: 'sample-object',
  Type: 'Text',
  Terms: [],
  TopTerms: [],
  Schema: [],
  Postings: [],
  SemanticCells: [],
};
