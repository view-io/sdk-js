import SemanticCell from '../../../src/models/SemanticCell';
import { EmbeddingsGeneratorEnum } from '../../../src/enums/EmbeddingsGeneratorEnum';
import { mockEndpoint2 } from '../../setupTest';

export const mockApiKey = 'test-api-key';
export const mockModel = 'test-model';

export const mockSemanticCell = new SemanticCell({
  GUID: 'cell-guid-12345',
  MD5Hash: 'md5-hash-value',
  SHA1Hash: 'sha1-hash-value',
  SHA256Hash: 'sha256-hash-value',
  Position: 0,
  Length: 100,
  Chunks: [],
  Children: [],
});

export const mockSemanticCells = [
  mockSemanticCell,
  new SemanticCell({
    GUID: 'cell-guid-67890',
    MD5Hash: 'md5-hash-value-2',
    SHA1Hash: 'sha1-hash-value-2',
    SHA256Hash: 'sha256-hash-value-2',
    Position: 100,
    Length: 150,
    Chunks: [],
    Children: [],
  }),
];

export const mockConfig = {
  generator: EmbeddingsGeneratorEnum.LCProxy,
  endpoint: mockEndpoint2,
  apiKey: mockApiKey,
  batchSize: 16,
  maxParallelTasks: 16,
  maxRetries: 3,
  maxFailures: 3,
  timeoutMs: 300000,
};

export const mockEmbeddings = {
  Success: true,
  StatusCode: 200,
  BatchCount: 1,
  SemanticCells: mockSemanticCells,
  ContentEmbeddings: mockSemanticCells,
};
