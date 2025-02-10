export const mockGraphId = 'default';
export const mockId = 'default';
export const mockNodeId = 'default';
export const fromNodeGuid = 'default';
export const toNodeGuid = 'default';
export const mockTenant = {
  GUID: 'default',
  ParentGUID: 'default',
  Name: 'Sample Tenant',
  Region: 'us-west-1',
  S3BaseDomain: 's3.sampledomain.com',
  RestBaseDomain: 'api.sampledomain.com',
  DefaultPoolGUID: 'pool-guid-456',
  Active: true,
  CreatedUtc: Date().toISOString,
};
export const mockGraph = {
  GUID: 'default',
  Name: 'Network Graph A',
  CreatedUtc: '2024-11-29T10:00:00Z',
};

export const mockPool = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  EncryptionKeyGUID: 'encryption-key-guid-001',
  Name: 'Primary Storage Pool',
  Provider: 'AWS',
  WriteMode: 'Sequential',
  UseSsl: true,
  Endpoint: 'https://s3.amazonaws.com',
  AccessKey: 'mock-access-key',
  SecretKey: 'mock-secret-key',
  AwsRegion: 'us-west-1',
  AwsBucket: 'sample-bucket',
  AwsBaseDomain: 'amazonaws.com',
  AwsBaseUrl: 'https://sample-bucket.s3.amazonaws.com',
  DiskDirectory: '/mnt/storage',
  AzureAccount: 'sample-account',
  AzureContainer: 'sample-container',
  Compress: 'gzip',
  EnableReadCaching: false,
  CreatedUtc: Date().toISOString,
};

export const mockBucket = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  PoolGUID: mockPool.GUID,
  OwnerGUID: 'owner-guid-998',
  Category: 'General',
  Name: 'Sample Bucket',
  RegionString: 'us-west-1',
  Versioning: true,
  RetentionMinutes: null,
  MaxUploadSize: null,
  MaxMultipartUploadSeconds: 604800, // 7 days
  LastAccessUtc: new Date().toISOString,
  CreatedUtc: Date().toISOString,
  Owner: {
    GUID: 'default',
    TenantGUID: mockTenant.GUID,
    FirstName: 'John',
    LastName: 'Doe',
    Notes: 'Sample owner for testing',
    Email: 'john.doe@example.com',
    PasswordSha256: 'hashed-password',
    Active: true,
    CreatedUtc: Date().toISOString,
  },
};

export const mockObject = {
  guid: 'default',
  parentGUID: 'default',
  tenantGUID: mockTenant.GUID,
  tenantName: mockTenant.Name,
  nodeGUID: 'node-guid-777',
  poolGUID: mockPool.GUID,
  bucketGUID: mockBucket.GUID,
  bucketName: mockBucket.Name,
  ownerGUID: mockBucket.Owner.GUID,
  encryptionKeyGUID: 'encryption-key-guid-001',
  dataCatalogDocumentGUID: 'doc-guid-888',
  dataRepositoryGUID: 'repo-guid-333',
  graphRepositoryGUID: 'graph-guid-444',
  graphNodeIdentifier: 'node-id-666',
  dataFlowRequestGUID: 'flow-guid-111',
  key: 'sample-key',
  version: 'v1',
  isLatest: true,
  isDeleteMarker: false,
  isLocal: true,
  contentType: 'application/json',
  documentType: 'JSON',
  contentLength: 1024,
  sourceUrl: 'https://source-url.example.com',
  md5Hash: 'md5hashvalue',
  sha1Hash: 'sha1hashvalue',
  sha256Hash: 'sha256hashvalue',
  expirationUtc: null,
  lastAccessUtc: Date().toISOString,
  lastModifiedUtc: Date().toISOString,
  createdUtc: Date().toISOString,
  data: Buffer.from('sample-data'),
};

export const mockCollection = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  Name: 'Sample Collection',
  AllowOverwrites: true,
  AdditionalData: 'Dummy data',
  CreatedUtc: Date().toISOString,
};

export const mockSourceDocument = {
  GUID: 'default',
  TenantGUID: mockTenant.GUID,
  BucketGUID: mockBucket.GUID,
  CollectionGUID: mockCollection.GUID,
  ObjectGUID: 'default',
  DataFlowRequestGUID: 'default',
  GraphRepositoryGUID: 'default',
  GraphNodeIdentifier: 'node-12345',
  DataRepositoryGUID: 'default',
  ObjectKey: 'example/key/path/to/object',
  ObjectVersion: '3',
  ContentType: 'application/json',
  DocumentType: 'Contract',
  SourceUrl: 'https://example.com/source/object',
  ContentLength: 12457,
  MD5Hash: 'd41d8cd98f00b204e9800998ecf8427e',
  SHA1Hash: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
  SHA256Hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  CreatedUtc: '2024-11-27T12:00:00Z',
  ExpirationUtc: '2025-11-27T12:00:00Z',
  Score: {
    score: 0.95,
    termsScore: 0.89,
    filtersScore: 12.0,
  },
  UdrDocument: {
    GUID: 'default',
    Success: true,
    Timestamp: '2024-11-26T10:34:56.456Z',
    Error: {
      code: 404,
      message: 'Resource not found',
    },
    AdditionalData: 'Additional information about the document',
    Metadata: {
      Author: 'John Doe',
      CreatedDate: '2024-11-25T08:15:30.123Z',
      Tags: ['Sample', 'Document', 'Test'],
    },
    Key: 'sample-key',
    Type: 'Text',
    Terms: ['apple', 'banana', 'apple', 'cherry', 'banana', 'cherry', 'cherry'],
    Schema: {
      schemaId: 'schema-001',
      schemaVersion: '1.0.0',
      description: 'Sample schema for testing',
    },
    Postings: [
      {
        postingId: 'posting-001',
        content: 'This is the content of the first posting',
        timestamp: '2024-11-26T09:00:00.000Z',
      },
      {
        postingId: 'posting-002',
        content: 'This is the content of the second posting',
        timestamp: '2024-11-26T09:30:00.000Z',
      },
    ],
    SemanticCells: [
      {
        cellId: 'cell-001',
        cellType: 'Text',
        content: 'Semantic content for the first cell',
        position: 1,
      },
      {
        cellId: 'cell-002',
        cellType: 'Image',
        content: 'Metadata for an image cell',
        position: 2,
      },
    ],
  },
};

export const mockNodeData = [
  {
    GUID: 'default',
    GraphGUID: 'default',
    Name: 'Sensor Node 01',
    Data: {
      Type: 'SemanticCell',
      location: 'Warehouse A',
      readings: {
        temperature: 22.5,
        humidity: 60,
        lastChecked: '2024-11-29T12:30:00Z',
      },
      alerts: [
        {
          type: 'Temperature',
          level: 'High',
          timestamp: '2024-11-28T10:45:00Z',
        },
      ],
    },
    CreatedUtc: '2024-11-29T08:15:00Z',
  },
  {
    GUID: 'default',
    GraphGUID: 'default',
    Name: 'Sensor Node 01',
    Data: {
      Type: 'SemanticCell',
      location: 'Warehouse A',
      readings: {
        temperature: 22.5,
        humidity: 60,
        lastChecked: '2024-11-29T12:30:00Z',
      },
      alerts: [
        {
          type: 'Temperature',
          level: 'High',
          timestamp: '2024-11-28T10:45:00Z',
        },
      ],
    },
    CreatedUtc: '2024-11-29T08:15:00Z',
  },
];

export const mockNodeRequest = {
  GUID: 'default',
  GraphGUID: 'default',
  Name: 'Sensor Node 01',
  Data: {
    Type: 'SemanticCell',
    location: 'Warehouse A',
    readings: {
      temperature: 22.5,
      humidity: 60,
      lastChecked: '2024-11-29T12:30:00Z',
    },
    alerts: [
      {
        type: 'Temperature',
        level: 'High',
        timestamp: '2024-11-28T10:45:00Z',
      },
    ],
  },
  CreatedUtc: '2024-11-29T08:15:00Z',
};
export const mockGraphNode = {
  GUID: 'default',
  GraphGUID: 'default',
  Name: 'Node 1',
  Data: {
    attributes: {
      type: 'Server',
      status: 'active',
      ipAddress: '192.168.1.1',
    },
    metrics: {
      cpuUsage: 35.5,
      memoryUsage: 64.3,
    },
  },
  CreatedUtc: '2024-11-29T15:00:00Z',
};

export const mockDataRepository = {
  GUID: 'default',
  TenantGUID: 'default',
  OwnerGUID: 'default',
  Name: 'Customer File Repository',
  RepositoryType: 'File',
  UseSsl: true,
  IncludeSubdirectories: true,
  DiskDirectory: '/var/data/repository/',
  S3EndpointUrl: 'https://s3.example.com',
  S3BaseUrl: 'https://s3-base.example.com',
  S3AccessKey: 'ACCESS_KEY_EXAMPLE',
  S3SecretKey: 'SECRET_KEY_EXAMPLE',
  S3BucketName: 'example-bucket',
  S3Region: 'us-east-1',
  AzureEndpointUrl: 'https://azure.example.com',
  AzureAccountName: 'azure_account',
  AzureContainerName: 'container-name',
  AzureAccessKey: 'azure-access-key',
  CifsHostname: 'cifs-server.example.com',
  CifsUsername: 'cifs-user',
  CifsPassword: 'cifs-password',
  CifsShareName: 'shared-folder',
  NfsHostname: 'nfs-server.example.com',
  NfsUserId: 1001,
  NfsGroupId: 1002,
  NfsShareName: '/mnt/nfs-share',
  NfsVersion: '4.1',
  CreatedUtc: '2024-11-29T12:00:00Z',
};

export const mockGraphResult = {
  Success: true,
  Timestamp: '2024-11-27T12:00:00Z',
  Graph: {
    GUID: 'default',
    Name: 'Sample Graph',
    Description: 'A mock graph for testing',
    Nodes: [
      {
        GUID: 'default',
        Type: 'Tenant',
        Properties: {
          Name: 'Tenant A',
          Location: 'Region 1',
        },
      },
      {
        GUID: 'default',
        Type: 'Bucket',
        Properties: {
          Name: 'Bucket A',
          StorageClass: 'Standard',
        },
      },
    ],
    Edges: [
      {
        GUID: 'default',
        Source: '6c6c8bc3-12a7-487f-8049-2c3f3ef8d4b3',
        Target: '8fa9cb84-2c90-4350-a8f5-9b07b763b6c8',
        Type: 'Contains',
      },
    ],
  },
  Tenant: mockTenant,
  StoragePool: {
    GUID: 'default',
    Type: 'StoragePool',
    Properties: {
      Capacity: '100TB',
      Used: '30TB',
    },
  },
  Bucket: mockBucket,
  Object: mockObject,
  Collection: mockCollection,
  SourceDocument: mockSourceDocument,
  DataRepository: {
    GUID: '3f123a45-7f8a-4912-b8f7-ad4567b8c9f3',
    Type: 'DataRepository',
    Properties: {
      RepositoryName: 'Repo A',
      RepositoryType: 'SQL',
    },
  },
  SemanticCells: [
    {
      GUID: 'cell-123',
      Description: 'A semantic cell for graph analysis',
    },
    {
      GUID: 'cell-456',
      Description: 'Another semantic cell',
    },
  ],
  SemanticChunks: [
    {
      GUID: 'chunk-789',
      Description: 'A semantic chunk for graph processing',
    },
    {
      GUID: 'chunk-012',
      Description: 'Another semantic chunk',
    },
  ],
  Edges: [
    {
      GUID: 'default',
      Source: '6c6c8bc3-12a7-487f-8049-2c3f3ef8d4b3',
      Target: '8fa9cb84-2c90-4350-a8f5-9b07b763b6c8',
      Type: 'Contains',
    },
    {
      GUID: 'default',
      Source: '8fa9cb84-2c90-4350-a8f5-9b07b763b6c8',
      Target: 'abc1234e-4b67-8a45-cb23-df890ad34bc7',
      Type: 'References',
    },
  ],
};

export const mockGraphResponse = {
  GUID: 'default',
  Name: 'Example Graph',
  CreatedUtc: '2024-11-29T12:34:56Z',
};
export const mockGraphResponses = [
  {
    GUID: 'default',
    Name: 'Example Graph',
    CreatedUtc: '2024-11-29T12:34:56Z',
  },
  {
    GUID: 'default',
    Name: 'Example Graph2',
    CreatedUtc: '2024-11-29T12:34:56Z',
  },
  {
    GUID: 'default',
    Name: 'Example Graph3',
    CreatedUtc: '2024-11-29T12:34:56Z',
  },
];

export const mockSemanticCell = [
  {
    GUID: 'default',
    cellType: 'Text',
    MD5Hash: '9e107d9d372bb6826bd81d3542a419d6',
    SHA1Hash: '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12',
    SHA256Hash: '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824',
    Position: 0,
    Length: 256,
    Chunks: [
      {
        GUID: 'chunk-001',
        Content: 'This is a sample chunk of text.',
        Embeddings: [0.2, 0.5, 0.8],
      },
      {
        GUID: 'chunk-002',
        Content: 'Another chunk of semantic data.',
        Embeddings: [0.1, 0.6, 0.3],
      },
    ],
    Children: [
      {
        GUID: 'child-001',
        cellType: 'Text',
        MD5Hash: '1d7f8c5f897b2bd52a9c3a905c8398e7',
        Position: 1,
        Length: 128,
        Chunks: [
          {
            GUID: 'chunk-003',
            Content: 'Child cell chunk content.',
            Embeddings: [0.7, 0.2, 0.9],
          },
        ],
        Children: [],
      },
    ],
  },
  {
    GUID: 'default',
    cellType: 'Text',
    MD5Hash: '9e107d9d372bb6826bd81d3542a419d6',
    SHA1Hash: '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12',
    SHA256Hash: '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824',
    Position: 0,
    Length: 256,
    Chunks: [
      {
        GUID: 'chunk-001',
        Content: 'This is a sample chunk of text.',
        Embeddings: [0.2, 0.5, 0.8],
      },
      {
        GUID: 'chunk-002',
        Content: 'Another chunk of semantic data.',
        Embeddings: [0.1, 0.6, 0.3],
      },
    ],
    Children: [
      {
        GUID: 'child-001',
        cellType: 'Text',
        MD5Hash: '1d7f8c5f897b2bd52a9c3a905c8398e7',
        Position: 1,
        Length: 128,
        Chunks: [
          {
            GUID: 'chunk-003',
            Content: 'Child cell chunk content.',
            Embeddings: [0.7, 0.2, 0.9],
          },
        ],
        Children: [],
      },
    ],
  },
];
