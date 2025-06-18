import { VectorSearchTypeEnum } from '../../../src/enums/VectorSearchTypeEnum';
// import EmbeddingsDocument from '../../../src/models/EmbeddingDocument';
// import VectorDeleteRequest from '../../../src/models/VectorDeleteRequest';
// import VectorQueryRequest from '../../../src/models/VectorQueryRequest';
// import VectorSearchRequest from '../../../src/models/VectorSearchRequest';

export const mockCancelToken = {
  abort: jest.fn(),
};

export const VectorRepositoryGUID = 'example-vector-repository';
export const mockDocumentGUID = 'document-guid-12345';

export const mockDocument = {
  Success: true,
  Exception: null,
  GUID: 'doc-guid-12345',
  TenantGUID: 'tenant-guid-abcde',
  CollectionGUID: 'collection-guid-98765',
  SourceDocumentGUID: 'source-doc-guid-54321',
  BucketGUID: 'bucket-guid-22222',
  DocumentGUID: mockDocumentGUID,
  VectorRepositoryGUID: VectorRepositoryGUID,
  GraphRepositoryGUID: 'graph-repo-guid-44444',
  GraphNodeIdentifier: 'graph-node-identifier',
  ObjectGUID: 'object-guid-55555',
  ObjectKey: 'object-key-66666',
  ObjectVersion: 'v1.0',
  Model: 'model-identifier',
  EmbeddingsRule: null, // Assuming this can be null for mock data
  Content: 'This is a sample content for the embeddings document.',
  Score: 95.5,
  Distance: 0.25,
  SemanticCells: [],
  CreatedUtc: new Date().toISOString(),
};

export const mockDeleteRequest = {
  TenantGUID: 'default',
  GUID: 'guid-67890',
  CollectionGUID: 'collection-54321',
  SourceDocumentGUID: 'doc-98765',
  BucketGUID: 'bucket-11111',
  ObjectGUID: 'object-22222',
  VectorRepositoryGUID: 'repo-33333',
  Key: 'key-44444',
  Version: 'v1.0',
};

export const mockQuery = {
  timestamp: 1609459200,
  tenant: { tenantGuid: 'tenantGuid' },
  maxResults: 100,
};

export const mockSearchRequest = {
  SearchType: VectorSearchTypeEnum.InnerProduct, // Assuming it's an enum with a valid value
  VectorRepositoryGUID: VectorRepositoryGUID,
  StartIndex: 0,
  MaxResults: 5,
  Embeddings: [], // Example vector for testing
};

export const mockQueryRequest = {
  Query: 'SELECT * FROM documents',
  VectorRepositoryGUID: 'repo-33333',
};

export const mockSearchResult = [
  {
    DocumentGUID: '29d4523c-f7d0-4368-8abf-befca460ddc4',
    TenantGUID: 'default',
    CollectionGUID: 'default',
    SourceDocumentGUID: 'c9685f15-eddc-43a9-9359-faf40f7be6f0',
    BucketGUID: 'example-data-bucket',
    VectorRepositoryGUID: 'example-vector-repository',
    GraphRepositoryGUID: '',
    GraphNodeIdentifier: '',
    ObjectGUID: 'c5443472-0a74-42d4-a948-dd2bab5e6d12',
    ObjectKey: '40.pdf',
    ObjectVersion: '1',
    Model: 'all-MiniLM-L6-v2',
    CellGUID: 'aa63458e-5fb8-4df0-a2b2-8051dd829716',
    CellType: 'Text',
    CellMD5Hash: '8E16E922405C5EF2FD70CF9C5D1C1606',
    CellSHA1Hash: '1ADE6830ADC92630F43BE86AC18EFAE5174F7A98',
    CellSHA256Hash: 'B90CD65FE835E98A58C3CBC5DDBBE3660BDCF800E8BD6A006F8096CF0936F669',
    CellPosition: 15200,
    ChunkGUID: '9d4c12be-3d5e-4ce0-9757-9dc959f8f646',
    ChunkMD5Hash: '8E16E922405C5EF2FD70CF9C5D1C1606',
    ChunkSHA1Hash: '1ADE6830ADC92630F43BE86AC18EFAE5174F7A98',
    ChunkSHA256Hash: 'B90CD65FE835E98A58C3CBC5DDBBE3660BDCF800E8BD6A006F8096CF0936F669',
    ChunkPosition: 0,
    ChunkLength: 13,
    Content: '�^А ������ߥǮ',
    Score: 1.56338167190552,
    Distance: 0,
    CreatedUtc: '2025-01-03T09:00:43.000000Z',
    Embeddings: [
      0.01774299, 0.020243663, -0.0012246077, 0.06305125, -0.045699906, 0.02733736, 0.11671808, -0.059834626,
      0.08833939, 0.055985864,
    ],
  },
  {
    DocumentGUID: '29d4523c-f7d0-4368-8abf-befca460ddc4',
    TenantGUID: 'default',
    CollectionGUID: 'default',
    SourceDocumentGUID: 'c9685f15-eddc-43a9-9359-faf40f7be6f0',
    BucketGUID: 'example-data-bucket',
    VectorRepositoryGUID: 'example-vector-repository',
    GraphRepositoryGUID: '',
    GraphNodeIdentifier: '',
    ObjectGUID: 'c5443472-0a74-42d4-a948-dd2bab5e6f12',
    ObjectKey: '40.pdf',
    ObjectVersion: '1',
    Model: 'all-MiniLM-L6-v2',
    CellGUID: '4dc73ddc-e8f3-4036-bd9f-148736901d77',
    CellType: 'Text',
    CellMD5Hash: '4409D717D0617231B6952CF48BB6F7D7',
    CellSHA1Hash: 'C52C91B774588DB2273E93B0A39DE33A934274DB',
    CellSHA256Hash: 'D2F97C05536503007D1CC76F54B41C4190CCDD13F96D5B6B98C969579E83D511',
    CellPosition: 3725,
    ChunkGUID: 'f3538a04-3b4c-4ce8-8744-f29f85626466',
    ChunkMD5Hash: '4409D717D0617231B6952CF48BB6F7D7',
    ChunkSHA1Hash: 'C52C91B774588DB2273E93B0A39DE33A934274DB',
    ChunkSHA256Hash: 'D2F97C05536503007D1CC76F54B41C4190CCDD13F96D5B6B98C969579E83D511',
    ChunkPosition: 0,
    ChunkLength: 23,
    Content: '���oH��՛��f��w$|�)�:���',
    Score: 1.51723563671112,
    Distance: 0,
    CreatedUtc: '2025-01-03T09:00:43.000000Z',
    Embeddings: [
      0.0047076177, 0.047227483, 0.02788675, 0.010650151, 0.04194941, 0.011791862, 0.05669627, -0.025949923,
      0.017292585, 0.03346906,
    ],
  },
];

export const mockEnumerateRequest = {
  MaxResults: 2,
  IncludeData: false,
  ContinuationToken: null,
  TenantGUID: null,
  BucketGUID: null,
  CollectionGUID: null,
  vectorRepositoryGuid: VectorRepositoryGUID,
  Ordering: 'CreatedDescending',
};

export const mockEnumerateResult = {
  Success: true,
  Timestamp: {
    Start: '2025-01-05T15:57:33.623124Z',
    TotalMs: 64.82,
    Messages: {},
  },
  MaxResults: 1000,
  IterationsRequired: 1,
  EndOfResults: true,
  TotalRecords: 0,
  RecordsRemaining: 0,
  Objects: [
    {
      GUID: 'dc7be0aa-1ffe-4e70-b87a-8dae20218ed8',
      DocumentGUID: '01364202-7f2d-4336-bdf6-33ce0bfd8557',
      TenantGUID: 'default',
      CollectionGUID: 'default',
      SourceDocumentGUID: '04306d00-c23a-452f-8583-1bb0c3b1b3e2',
      DataRepositoryGUID: '',
      BucketGUID: 'example-data-bucket',
      VectorRepositoryGUID: 'example-vector-repository',
      GraphRepositoryGUID: '',
      GraphNodeIdentifier: '',
      ObjectGUID: '8bc1b405-61ae-400b-abe1-660e3e66dcd7',
      ObjectKey: '23.pdf',
      ObjectVersion: '1',
      Model: 'all-MiniLM-L6-v2',
      SemanticCells: [],
      CreatedUtc: '2025-01-03T08:59:37.000000Z',
    },
    {
      GUID: 'e648ad42-6b76-4312-aa6c-7e913efa46f0',
      DocumentGUID: '0283298d-520e-4183-bdc9-2e5533809f2d',
      TenantGUID: 'default',
      CollectionGUID: 'default',
      SourceDocumentGUID: 'b92fa716-f699-42fe-94bc-50653b7b592e',
      DataRepositoryGUID: '',
      BucketGUID: 'example-data-bucket',
      VectorRepositoryGUID: 'example-vector-repository',
      GraphRepositoryGUID: '',
      GraphNodeIdentifier: '',
      ObjectGUID: '9b5a09f8-77dc-4da2-b09b-417f375df5c9',
      ObjectKey: '37.pdf',
      ObjectVersion: '1',
      Model: 'all-MiniLM-L6-v2',
      SemanticCells: [],
      CreatedUtc: '2025-01-03T09:00:32.000000Z',
    },
  ],
};

export const mockStatisticsResponse = {
  DocumentCount: 44,
  TotalBytes: 9727897,
  CellCount: 22262,
  ChunkCount: 26548,
};

export const mockSemanticCellGuid = 'example-semantic-cell-1';

export const mockSemanticCell = [
  {
    GUID: mockSemanticCellGuid,
    CellType: 'Text',
    MD5Hash: '000',
    SHA1Hash: '111',
    SHA256Hash: '222',
    Position: 0,
    Length: 0,
    Chunks: [],
    Children: [],
  },
];

export const mockSemanticChunkGuid = 'example-semantic-chunk-1';

export const mockSemanticChunk = [
  {
    GUID: mockSemanticChunkGuid,
    MD5Hash: '000',
    SHA1Hash: '111',
    SHA256Hash: '222',
    Position: 0,
    Start: 0,
    End: 0,
    Length: 22,
    Content: 'This is a sample chunk',
    Embeddings: [0.1662, -0.0149, -0.9421, -0.9742, 0.1711, -0.7077, -0.5681, 0.1002, -0.5846, 0.3761],
  },
];
