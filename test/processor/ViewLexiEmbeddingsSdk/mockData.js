export const mockTenant = {
  id: 1,
  GUID: 'default',
  ParentGUID: 'default',
  Name: 'Sample Tenant',
  Region: 'us-west-1',
  Active: true,
  CreatedUtc: new Date().toISOString,
};

export const mockCollection = {
  id: 1001,
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  Name: 'Sample Collection',
  CreatedUtc: new Date().toISOString,
};

export const mockSearchResult = {
  guid: 'default',
  query: 'sample search',
  results: [
    {
      id: 1,
      score: 0.95,
      content: 'Sample content',
    },
  ],
  timestamp: new Date().toISOString,
};

export const mockEmbeddingsRule = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  Name: 'Embeddings Rule 1',
  EmbeddingsGenerator: 'LCProxy',
  GeneratorUrl: 'http://localhost/generate',
  GeneratorApiKey: 'api-key',
  BatchSize: 16,
  CreatedUtc: new Date().toISOString,
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
  createdUtc: new Date().toISOString,
};

export const mockGraphRepo = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  Name: 'Sample Graph Repository',
  RepositoryType: 'Graph',
  EndpointUrl: 'http://graph-repo.example.com',
  ApiKey: 'graph-api-key',
  CreatedUtc: new Date().toISOString,
};

export const mockLexiEmbeddingsResponse = {
  dataFlowRequestGUID: 'default',
  success: true,
  timestamp: '2024-11-22T10:34:56.456Z',
  error: {
    message: 'An error occurred while processing the request',
    code: 500,
  },
  vector: [
    {
      success: true,
      exception: null,
      guid: 'default',
      tenantGUID: 'tenant-001',
      collectionGUID: 'collection-001',
      sourceDocumentGUID: 'source-doc-001',
      bucketGUID: 'bucket-001',
      vectorRepositoryGUID: 'vector-repo-001',
      graphRepositoryGUID: 'graph-repo-001',
      graphNodeIdentifier: 'graph-node-001',
      objectGUID: 'object-001',
      objectKey: 'object-key-001',
      objectVersion: 'v1',
      model: 'model-001',
      embeddingsRule: 'rule-001',
      content: 'This is the content of the document.',
      score: 0.95,
      distance: 0.05,
      semanticCells: [
        {
          guid: 'default',
          cellType: 'Text',
          md5Hash: 'md5-example',
          sha1Hash: 'sha1-example',
          sha256Hash: 'sha256-example',
          position: 1,
          chunks: [
            {
              guid: 'default',
              md5Hash: 'chunk-md5-example',
              sha1Hash: 'chunk-sha1-example',
              sha256Hash: 'chunk-sha256-example',
              position: 0,
              content: 'This is the content for the chunk.',
              embeddings: [0.12, 0.25, 0.47],
            },
          ],
        },
      ],
    },
  ],
};
