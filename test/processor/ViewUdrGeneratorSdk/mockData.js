export const mockFilename = 'test-file.txt';

export const mockDocument = {
  GUID: 'default',
  Type: 'PDF',
  Key: 'test-doc',
  ContentType: 'application/pdf',
  SemanticCellSplitCharacter: '\r\n',
  MaxChunkContentLength: 512,
  IncludeFlattened: true,
  CaseInsensitive: true,
  TopTerms: 10,
  AdditionalData: null,
  Metadata: {},
  Data: new Uint8Array([0x25, 0x50, 0x44, 0x46]), // Sample PDF magic numbers
  MetadataRule: null,
};

export const mockDataTable = {
  GUID: 'default',
  DatabaseType: 'Sqlite',
  Hostname: null,
  Port: 0,
  Username: null,
  Password: null,
  DatabaseName: null,
  Query: 'SELECT * FROM table',
  IncludeFlattened: true,
  CaseInsensitive: true,
  TopTerms: 10,
  AdditionalData: null,
  Metadata: {},
  SqliteFileData: new Uint8Array([0x53, 0x51, 0x4c, 0x69, 0x74, 0x65]), // SQLite magic numbers
};

export const mockUdrResponse = {
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
};
