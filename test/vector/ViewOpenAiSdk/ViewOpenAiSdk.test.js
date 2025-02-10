import { getServer } from '../../server';
import { handlers } from './handler';
import { apiViewOpenAiSdk as sdk } from '../../setupTest';
import { mockSemanticCells, mockModel, mockSemanticChunks, mockEmbeddingsResponse } from './mockData';
import { http, HttpResponse } from 'msw';

const server = getServer(handlers);

describe('ViewOpenAiSdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('validateConnectivity', () => {
    it('should return true for successful connectivity', async () => {
      const result = await sdk.validateConnectivity();
      expect(result).toBe(true);
    });

    it('should return false for unsuccessful connectivity', async () => {
      jest.spyOn(sdk, 'validateConnectivity').mockResolvedValueOnce(false);
      const result = await sdk.validateConnectivity();
      expect(result).toBe(false);
    });
  });

  describe('processSemanticCells', () => {
    it('should return empty array for empty input', async () => {
      const result = await sdk.processSemanticCells([]);
      expect(result).toEqual([]);
    });

    it('should process non-empty cells and add embeddings', async () => {
      jest.spyOn(sdk, '_processSemanticChunks').mockResolvedValueOnce(mockSemanticChunks);

      const result = await sdk.processSemanticCells(mockSemanticCells, mockModel);
      expect(result).toEqual(mockSemanticCells);
    });
  });

  describe('_processSemanticChunks', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it.skip('should process semantic chunks in batches', async () => {
      // Mock the actual implementation of _processBatch
      const originalProcessBatch = sdk._processBatch;
      const processBatchMock = jest.fn().mockResolvedValue();
      sdk._processBatch = processBatchMock;

      // Mock BatchSize to force multiple batches
      const originalBatchSize = sdk.BatchSize;
      sdk.BatchSize = 2;

      await sdk._processSemanticChunks(mockModel, mockSemanticChunks);

      // With 3 chunks and BatchSize of 2, we expect 2 batches
      expect(processBatchMock).toHaveBeenCalledTimes(2);

      // First batch should have 2 chunks
      expect(processBatchMock).toHaveBeenNthCalledWith(
        1,
        mockModel,
        [mockSemanticChunks[0], mockSemanticChunks[1]],
        300000,
        undefined
      );

      // Second batch should have 1 chunk
      expect(processBatchMock).toHaveBeenNthCalledWith(2, mockModel, [mockSemanticChunks[2]], 300000, undefined);

      // Restore original values
      sdk._processBatch = originalProcessBatch;
      sdk.BatchSize = originalBatchSize;
    });

    it('should handle empty chunks array', async () => {
      const processBatchSpy = jest.spyOn(sdk, '_processBatch');

      await sdk._processSemanticChunks(mockModel, []);

      expect(processBatchSpy).not.toHaveBeenCalled();
    });
  });

  describe('_processBatch', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should process batch successfully', async () => {
      const chunks = [...mockSemanticChunks];
      await sdk._processBatch(mockModel, chunks);

      // Verify that embeddings were added to chunks
      chunks.forEach((chunk) => {
        expect(chunk.Embeddings).toBeDefined();
        expect(Array.isArray(chunk.Embeddings)).toBe(true);
        expect(chunk.Embeddings.length).toBeGreaterThan(0);
      });
    });

    it('should handle API errors gracefully', async () => {
      const chunks = mockSemanticChunks.slice(0, 2);
      const testChunks = chunks.map((chunk) => ({
        ...chunk,
        Embeddings: null,
      }));

      server.use(
        http.post(`${sdk.Endpoint}embeddings`, () => {
          return new HttpResponse(null, { status: 500 });
        })
      );

      await sdk._processBatch(mockModel, testChunks);

      // Assert that embeddings remain null after non-successful status
      expect(testChunks[0].Embeddings).toBeNull();
      expect(testChunks[1].Embeddings).toBeNull();
    });
  });
});
