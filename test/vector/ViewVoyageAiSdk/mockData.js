import SemanticChunk from '../../../src/models/SemanticChunk';

export const mockModel = 'voyage-large-2-instruct';

export const mockSemanticCells = [
  {
    content: 'This is a test content 1',
    embeddings: null,
  },
  {
    content: 'This is a test content 2',
    embeddings: null,
  },
];

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
export const mockEmbeddingsResponse = mockSemanticChunks.map((chunk, index) => ({
  object: 'embedding',
  embedding: Array.from({ length: 1024 }, () => Math.random() * 2 - 1),
  index: index,
  text: chunk.content,
}));
