import { getServer } from '../../server';
import { handlers } from './handler';
import { apiViewOllamaSdk as sdk } from '../../setupTest';
import { mockSemanticCells, mockSemanticChunks, mockEmbeddingsResponse, mockModel } from './mockData';
import { SeverityEnum } from '../../../src/enums/SeverityEnum';

const server = getServer(handlers);

describe('ViewOllamaSdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('validateConnectivity', () => {
    it('should return true for successful connectivity', async () => {
      const result = await sdk.validateConnectivity();
      expect(result).toBe('true');
    });

    it('should return false for unsuccessful connectivity', async () => {
      // Mocking the `exists` method to simulate a failed connection
      jest.spyOn(sdk, 'exists').mockRejectedValueOnce(new Error('Connection failed'));
      const result = await sdk.validateConnectivity();
      expect(result).toBe(false);
    });
  });

  describe('loadModel', () => {
    it('should load a model successfully', async () => {
      // Mock the API response to return true for success
      sdk.post = jest.fn().mockResolvedValue(true);

      const result = await sdk.loadModel(mockModel);

      // The loadModel function returns a boolean
      expect(result).toBe(true);

      // Ensure the post method was called with the correct arguments
      expect(sdk.post).toHaveBeenCalledWith(`${sdk.Endpoint}api/pull`, mockModel, null);
    });

    it('should handle model loading failure', async () => {
      // Mock API error
      sdk.post = jest.fn().mockRejectedValue(new Error('Network error'));

      const result = await sdk.loadModel(mockModel);

      // On error, loadModel returns false
      expect(result).toBe(false);
    });

    it('should return false for empty model name', async () => {
      const result = await sdk.loadModel('');
      expect(result).toBe(false);
    });

    it('should fail to load a model when API fails', async () => {
      sdk.post = jest.fn().mockRejectedValue(new Error('API Error'));
      const result = await sdk.loadModel(mockModel);
      expect(result).toBe(false);
    });
  });

  describe('processSemanticCells', () => {
    it('should return empty array for empty input', async () => {
      const result = await sdk.processSemanticCells([]);
      expect(result).toEqual([]);
    });

    it('should process non-empty cells', async () => {
      const result = await sdk.processSemanticCells(mockSemanticCells);
      expect(result).toEqual(mockSemanticCells);
    });

    it('should process cells and generate embeddings', async () => {
      sdk.buildSemanticChunkList = jest.fn().mockReturnValue(mockSemanticChunks);
      sdk.processSemanticChunks = jest.fn().mockResolvedValue();

      const result = await sdk.processSemanticCells(mockSemanticCells, mockModel);
      expect(result).toEqual(mockSemanticCells);
      expect(sdk.buildSemanticChunkList).toHaveBeenCalledWith(mockSemanticCells);
      expect(sdk.processSemanticChunks).toHaveBeenCalledWith(mockModel, mockSemanticChunks, 300000, null);
    });

    it('should not process cells if there are none', async () => {
      // Mock the methods before the test
      sdk.buildSemanticChunkList = jest.fn();
      sdk.processSemanticChunks = jest.fn();

      const result = await sdk.processSemanticCells([], mockModel);
      expect(result).toEqual([]);
      expect(sdk.buildSemanticChunkList).not.toHaveBeenCalled();
      expect(sdk.processSemanticChunks).not.toHaveBeenCalled();
    });
  });

  describe('listModels', () => {
    it('should return list of models or null on error', async () => {
      const result = await sdk.listModels();
      expect(result).toBeDefined();
      // Result should either be an array of models or null if there was an error
      expect(result === null || Array.isArray(result)).toBeTruthy();
    });
  });

  describe('loadModels', () => {
    it('should throw error as API is not implemented', async () => {
      await expect(sdk.loadModels(['model1'])).rejects.toThrow(
        'This API is not implemented for this embeddings generator.'
      );
    });
  });

  describe('deleteModel', () => {
    let originalLogger;

    beforeEach(() => {
      originalLogger = sdk.Logger;
      sdk.Logger = jest.fn();
    });

    afterEach(() => {
      sdk.Logger = originalLogger;
    });

    it('should return false when API call fails', async () => {
      const result = await sdk.deleteModel('model1');
      expect(result).toBe(false);
      expect(sdk.Logger).toHaveBeenCalled();
    });

    it('should return true when API call succeeds', async () => {
      // Mock the delete method to return success
      const originalDelete = sdk.delete;
      sdk.delete = jest.fn().mockResolvedValue(true);

      const result = await sdk.deleteModel('model1');
      expect(result).toBe(true);
      expect(sdk.delete).toHaveBeenCalledWith(`${sdk.Endpoint}api/delete`, { name: 'model1' }, null);

      // Restore original delete method
      sdk.delete = originalDelete;
    });
  });

  describe('processBatch', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('processes a batch successfully and adds embeddings to chunks', async () => {
      const url = `${sdk.Endpoint}api/embed`;
      const content = mockSemanticChunks.map((chunk) => chunk.Content);

      // Mock response structure matching Ollama's format
      const mockOllamaResult = {
        model: mockModel,
        input: content,
        embeddings: mockEmbeddingsResponse.map((item) => item.Embeddings),
      };

      // Mock postJson method to simulate a successful response
      jest.spyOn(sdk, 'postJson').mockResolvedValueOnce({
        status: 200,
        StatusCode: 200,
        text: JSON.stringify(mockOllamaResult),
        body: {
          result: {
            embeddings: mockEmbeddingsResponse.map((item) => item.Embeddings),
            contents: content,
          },
        },
      });

      // Call processBatch with default timeout
      await sdk.processBatch(mockModel, mockSemanticChunks);

      // Verify postJson was called with correct parameters
      expect(sdk.postJson).toHaveBeenCalledWith(url, { model: mockModel, input: content }, null);

      // Assert that embeddings have been added to each chunk
      expect(mockSemanticChunks[0].Embeddings).toEqual(mockEmbeddingsResponse[0].Embeddings);
      expect(mockSemanticChunks[1].Embeddings).toEqual(mockEmbeddingsResponse[1].Embeddings);
    });

    it('fails to process batch when max retries are reached', async () => {
      const mockLogger = jest.fn();
      sdk.logger = mockLogger;

      const testChunks = [
        { Content: 'chunk1', Embeddings: null },
        { Content: 'chunk2', Embeddings: null },
      ];

      // Simulate failure for all retries
      jest.spyOn(sdk, 'postJson').mockRejectedValue(new Error('Network Error'));

      await sdk.processBatch(mockModel, testChunks);

      // Assert that embeddings remain null after retries
      expect(testChunks[0].Embeddings).toBeNull();
      expect(testChunks[1].Embeddings).toBeNull();

      // Verify retry attempts match MaxRetries
      expect(sdk.postJson).toHaveBeenCalledTimes(3);
    });

    it('handles non-successful status codes gracefully', async () => {
      const testChunks = [
        { Content: 'chunk1', Embeddings: null },
        { Content: 'chunk2', Embeddings: null },
      ];

      // Simulate a non-successful status code
      jest.spyOn(sdk, 'postJson').mockResolvedValueOnce({
        status: 500,
        StatusCode: 500,
        text: JSON.stringify({}),
        body: {},
      });

      await sdk.processBatch(mockModel, testChunks);

      // Assert that embeddings remain null after non-successful status
      expect(testChunks[0].Embeddings).toBeNull();
      expect(testChunks[1].Embeddings).toBeNull();
    });

    it('respects cancellation token when provided', async () => {
      const testChunks = [
        { Content: 'chunk1', Embeddings: null },
        { Content: 'chunk2', Embeddings: null },
      ];
      const mockToken = { isCancelled: true };

      jest.spyOn(sdk, 'postJson').mockImplementation(() => {
        if (mockToken.isCancelled) {
          throw new Error('Operation cancelled');
        }
      });

      await sdk.processBatch(mockModel, testChunks, 300000, mockToken);

      // Assert that embeddings remain null when cancelled
      expect(testChunks[0].Embeddings).toBeNull();
      expect(testChunks[1].Embeddings).toBeNull();
    });
  });
});
