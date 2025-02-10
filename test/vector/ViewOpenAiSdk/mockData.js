import SemanticCell from '../../../src/models/SemanticCell';
import SemanticChunk from '../../../src/models/SemanticChunk';

export const mockModel = 'llama3';
export const mockSemanticChunk = new SemanticChunk({
  Position: 0,
  Start: 0,
  End: 100,
  Content: 'This is a chunk of content for testing the SemanticChunk class.',
  Embeddings: [0.1, 0.2, 0.3, 0.4, 0.5], // Example embeddings (as an array of numbers)
});

export const mockSemanticChunks = [
  mockSemanticChunk,
  new SemanticChunk({
    Position: 100,
    Start: 101,
    End: 200,
    Content: 'This is another chunk of content with different embeddings.',
    Embeddings: [0.6, 0.7, 0.8, 0.9, 1.0], // Example embeddings for another chunk
  }),
  new SemanticChunk({
    Position: 200,
    Start: 201,
    End: 300,
    Content: 'This is yet another chunk with its own content and embeddings.',
    Embeddings: [0.11, 0.12, 0.13, 0.14], // Embeddings for this chunk
  }),
];

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

export const mockEmbeddingsResponse = [
  { Content: 'This is a chunk of content for testing the SemanticChunk class.', Embeddings: [0.1, 0.2, 0.3, 0.4, 0.5] },
  { Content: 'This is another chunk of content with different embeddings.', Embeddings: [0.6, 0.7, 0.8, 0.9, 1.0] },
];
