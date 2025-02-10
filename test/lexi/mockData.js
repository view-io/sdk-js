// Constants for mock data
export const mockTenantId = 'default';
export const mockCollectionGuid = 'default'; // Same as collection GUID
export const mockDocumentGuid = 'default'; // Same as collection GUID
export const mockCollectStatisticsGuid = 'default1';
export const mockDocumentKey = 'key123';
export const mockDocVersionId = 'v1';
export const MaxKeys = 10;
// Mock collections data
export const collectionsData = {
  [mockCollectionGuid]: {
    id: 1,
    GUID: 'default', // Same GUID for collection and document
    TenantGUID: 'default',
    Name: 'My first collection',
    AllowOverwrites: true,
    AdditionalData: 'Created by setup',
    CreatedUtc: '2024-07-10T05:11:51.000000Z',
  },
  '88a50aca-8a30-4d0e-8bc1-df1aac247e86': {
    id: 2,
    GUID: '88a50aca-8a30-4d0e-8bc1-df1aac247e86',
    TenantGUID: '86bdb35e-03d9-4ed8-9b25-51479bc8ba15',
    Name: 'Test Collection',
    AllowOverwrites: false,
    AdditionalData: null,
    CreatedUtc: '2024-11-21T10:11:35.270Z',
  },
};

// Mock collection statistics
export const collectionStatistics = {
  Collection: {
    GUID: 'default', // Same GUID for collection and document
    TenantGUID: 'default',
    Name: 'My first collection',
    AllowOverwrites: true,
    AdditionalData: 'Created by setup',
    CreatedUtc: '2024-07-10T05:11:51.000000Z',
  },
  DocumentCount: 52,
  TotalBytes: 19633776,
  TermCount: 56916,
  KeyValueCount: 2,
};

export const collectionsMockApiResponse = Object.values(collectionsData);
export const collectionStatisticsMockResponse = collectionStatistics;

// Mock UdrDocument
const mockUdrDocument = {
  Terms: ['term1', 'term2', 'term3', 'term1'], // Example terms, with duplicates
  Schema: {
    Flattened: [
      { Key: 'field1', Value: 'value1' },
      { Key: 'field2', Value: 'value2' },
    ],
  },
  SemanticCells: [
    {
      Length: 5,
      Children: [
        { Length: 10, Children: [] },
        { Length: 8, Children: [] },
      ],
      Chunks: [{ Length: 4 }, { Length: 6 }],
    },
    {
      Length: 7,
      Children: [{ Length: 12, Children: [] }],
      Chunks: [{ Length: 3 }],
    },
  ],
};

// Mock SourceDocument with same GUID as Collection
export const mockSourceDocument = {
  [mockDocumentGuid]: {
    GUID: 'default', // Same GUID as collection GUID
    TenantGUID: 'default',
    CollectionGUID: 'default',
    ObjectGUID: 'default',
    DataFlowRequestGUID: 'default',
    GraphRepositoryGUID: 'default',
    GraphNodeIdentifier: 'node-82f02b84-e9b3-4d8a-a99b-d70854855784',
    DataRepositoryGUID: 'default',
    ObjectKey: 'object-key-3966581d-ef62-4758-b204-1b6b2065f34f',
    ObjectVersion: '1.0.0',
    ContentType: 'application/json',
    DocumentType: 'Pdf',
    SourceUrl: 'https://example.com/source.pdf',
    ContentLength: 2048,
    MD5Hash: 'd41d8cd98f00b204e9800998ecf8427e',
    SHA1Hash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
    SHA256Hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    CreatedUtc: '2024-11-21T00:00:00.000Z',
    ExpirationUtc: '2024-11-22T00:00:00.000Z',
    Score: { value: 85, description: 'High relevance' },
    UdrDocument: mockUdrDocument,
  },
};

// Mock SourceDocumentStatistics
export const documentMockApiResponse = Object.values(mockSourceDocument);
export const mockSourceDocumentStatistics = mockSourceDocument;

export const mockEnumerateCollection = {
  MaxResults: 50,
  ContinuationToken: '',
  Filters: [
    {
      Field: 'ObjectKey',
      Condition: 'IsNotNull',
      Value: '',
    },
  ],
  Ordering: 'CreatedAscending',
};

export const mockSearchCollection = {
  MaxResults: 10,
  ContinuationToken: '',
  Ordering: 'CreatedDescending',
  Filter: {
    CreatedAfter: '2024-01-01 00:00:00.000000',
    CreatedBefore: '2025-01-01 00:00:00.000000',
    Terms: ['file'],
    MimeTypes: ['application/json', 'application/xml'],
    Prefixes: [],
    Suffixes: ['json'],
    SchemaFilters: [],
  },
};

export const mockEnumerationResult = {
  success: true,
  timestamp: Date.now(),
  maxResults: 100,
  iterationsRequired: 3,
  statistics: {
    totalObjects: 250,
    totalSize: 1024000,
    averageSize: 4096,
  },
  continuationToken: 'eyJsYXN0RXZhbHVhdGVkS2V5Ijp7IklEIjp7IlMiOiJwcm9kdWN0XzEwMCJ9fX0=',
  sharedPrefixes: ['products/electronics/', 'products/clothing/', 'products/books/'],
  objects: [
    {
      key: 'products/electronics/laptop-x1.json',
      size: 2048,
      lastModified: '2024-03-15T10:30:00Z',
      etag: '"abc123def456"',
      metadata: {
        category: 'electronics',
        brand: 'TechCo',
      },
    },
    {
      key: 'products/clothing/shirt-blue.json',
      size: 1024,
      lastModified: '2024-03-14T15:45:00Z',
      etag: '"xyz789uvw321"',
      metadata: {
        category: 'clothing',
        size: 'M',
      },
    },
  ],
  deleteMarkers: [
    {
      key: 'products/discontinued/old-model.json',
      deleted: '2024-03-10T08:15:00Z',
      deleteMarkerVersionId: 'v123456',
    },
  ],
  sourceDocuments: [
    {
      id: 'doc123',
      content: 'Product description for laptop X1',
      metadata: {
        productId: 'laptop-x1',
        category: 'electronics',
      },
    },
  ],
  embeddingsDocuments: [
    {
      id: 'emb123',
      vector: [0.1, 0.2, 0.3, 0.4, 0.5],
      metadata: {
        sourceDocumentId: 'doc123',
        modelVersion: 'v1.0',
      },
    },
  ],
  endOfResults: false,
  recordsRemaining: 150,
};
export const mockSeachEnumerationResult = {
  Success: true,
  Timestamp: {
    Start: '2025-01-08T06:02:57.881911Z',
    TotalMs: 23.59,
    Messages: {
      '2025-01-08T06:02:57.8823992Z': '0.48ms normalizing tokens from required terms (0.49ms)',
      '2025-01-08T06:02:57.8901949Z': '8.28ms finished normalizing tokens from supplied terms (8.28ms)',
      '2025-01-08T06:02:57.8950484Z': '13.13ms retrieving batch of results (13.13ms)',
      '2025-01-08T06:02:57.8970238Z': '15.11ms end of results retrieved (15.11ms)',
    },
  },
  MaxResults: 2,
  EndOfResults: true,
  TotalRecords: 0,
  RecordsRemaining: 0,
  Documents: [],
};
export const mockSearchenumeratedata = {
  MaxResults: 100,
  Skip: 0,
  ContinuationToken: '',
  Ordering: 'CreatedAscending',
  Filters: [
    {
      Field: 'ObjectKey',
      Condition: 'IsNotNull',
      Value: '',
    },
  ],
};
export const ingestqueueID = 'default';
export const ingestqueueResponse = [{ GUID: 'default' }];
