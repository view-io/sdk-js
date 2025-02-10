import { DocumentTypeEnum } from '../../src/enums/DocumentTypeEnum';
import { PdfModeEnum } from '../../src/enums/PdfModeEnum';
import MetadataRule from '../../src/models/MetadataRule';
import PdfOptions from '../../src/models/PdfOptions';
import SemanticCell from '../../src/models/SemanticCell';
import { v4 as uuidV4 } from 'uuid';
import SemanticCellResponse from '../../src/models/SemanticCellResponse';

// Mock MetadataRule instance
export const mockMetadataRule = new MetadataRule({
  GUID: '12345-abcde-67890-fghij',
  TenantGUID: 'tenant-guid-123',
  BucketGUID: 'bucket-guid-456',
  OwnerGUID: 'owner-guid-789',
  Name: 'Sample Metadata Rule',
  ContentType: 'text/plain',
  Prefix: 'doc_',
  Suffix: '_processed',
  ProcessingEndpoint: 'http://localhost:8080/process',
  CleanupEndpoint: 'http://localhost:8080/cleanup',
  TypeDetectorEndpoint: 'http://localhost:8080/type-detector',
  SemanticCellEndpoint: 'http://localhost:8080/semantic-cell',
  MaxChunkContentLength: 1024,
  ShiftSize: 512,
  UdrEndpoint: 'http://localhost:8080/udr',
  DataCatalogType: 'Lexi',
  DataCatalogEndpoint: 'http://localhost:8080/catalog',
  DataCatalogCollection: 'catalog-collection-123',
  GraphRepositoryGUID: 'graph-repo-guid-456',
  TopTerms: 25,
  CaseInsensitive: true,
  IncludeFlattened: true,
  TargetBucketGUID: 'target-bucket-guid-789',
  MaxContentLength: 16 * 1024 * 1024,
  RetentionMinutes: 30,
  CreatedUtc: new Date().toISOString(),
});

export const mockData = new Uint8Array([1, 2, 3, 4, 5]);

// Mock data for semantic cell extraction
export const mockSemanticCellRequest = {
  DocumentType: DocumentTypeEnum.Text,
  MinChunkContentLength: 10,
  MaxChunkContentLength: 1024,
  ShiftSize: 512,
  Pdf: mockPdfOptions,
  MetadataRule: mockMetadataRule,
  Data: new Uint8Array([65, 66, 67, 68, 69]), // Example binary data (ASCII codes for 'ABCDE')
};

// Mock Data for SemanticCell
export const mockSemanticCell = new SemanticCell({
  GUID: uuidV4(),
  CellType: 'Text',
  MD5Hash: 'd41d8cd98f00b204e9800998ecf8427e', // Mock MD5 hash
  SHA1Hash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', // Mock SHA1 hash
  SHA256Hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', // Mock SHA256 hash
  Position: 0,
  Length: 100,
  Chunks: [],
  Children: [],
});

// Mock Data for PdfOptions
export const mockPdfOptions = new PdfOptions({
  Mode: PdfModeEnum.BoundingBoxExtraction, // Default mode
  ReturnMarkup: false, // Default is false
  RetainArtifact: false, // Default is false
});

// Mock SemanticCellResponse data
export const mockSemanticCellResponse = new SemanticCellResponse({
  DataFlowRequestGUID: '12345-abcde-67890-fghij',
  Success: true,
  Timestamp: new Date().toISOString(),
  Error: null, // or mockApiErrorResponse if you want to simulate an error
  SemanticCells: [], // Array of semantic cells
  Data: new Uint8Array([65, 66, 67, 68, 69]), // Example binary data (ASCII codes for 'ABCDE')
});
