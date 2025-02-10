import { getServer } from '../../server';
import { handlers } from './handler';
import { apiViewLcproxySdk as sdk } from '../../setupTest';
import { mockModels, mockCells, mockModel, mockSemanticChunks, mockEmbeddingsResponse } from './mockData';
import { SeverityEnum } from '../../../src/enums/SeverityEnum';

const server = getServer(handlers);

describe('ViewLcproxySdk', () => {
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

  describe('preloadModels', () => {
    it('should throw error for invalid models list', async () => {
      await expect(sdk.preloadModels(null)).rejects.toThrow('Models list is required.');
    });

    it('should return true for valid models list', async () => {
      const result = await sdk.preloadModels(mockModels);
      expect(result).toBe('true');
    });
  });

  describe('processSemanticCells', () => {
    it('should return empty array for empty input', async () => {
      const result = await sdk.processSemanticCells([]);
      expect(result).toEqual([]);
    });

    it('should process non-empty cells', async () => {
      const result = await sdk.processSemanticCells(mockCells);
      expect(result).toEqual(mockCells);
    });
  });

  describe('listModels', () => {
    it('should throw error as API is not implemented', async () => {
      await expect(sdk.listModels()).rejects.toThrow('This API is not implemented for this embeddings generator.');
    });
  });

  describe('loadModels', () => {
    it('should throw error as API is not implemented', async () => {
      await expect(sdk.loadModels(['model1'])).rejects.toThrow(
        'This API is not implemented for this embeddings generator.'
      );
    });
  });

  describe('loadModel', () => {
    it('should throw an error as API is not implemented', async () => {
      await expect(sdk.loadModel('model1')).rejects.toThrow(
        'This API is not implemented for this embeddings generator.'
      );
    });
  });

  describe('deleteModel', () => {
    it('should throw an error as API is not implemented', async () => {
      await expect(sdk.deleteModel('model1')).rejects.toThrow(
        'This API is not implemented for this embeddings generator.'
      );
    });
  });

  describe('processBatch', () => {
    it('processes a batch successfully and adds embeddings to chunks', async () => {
      // Prepare mock data that matches the method's implementation
      const payload = {
        Model: mockModel,
        ApiKey: sdk.apiKey,
        Contents: mockSemanticChunks.map((chunk) => chunk.Content).filter(Boolean),
      };

      // Create a response structure that matches the method's processing
      const mockLcproxyResult = {
        Contents: mockEmbeddingsResponse.map((item) => item.Content),
        Embeddings: mockEmbeddingsResponse.map((item) => item.Embeddings),
      };

      // Mock the postJson method to simulate a successful response
      jest.spyOn(sdk, 'postJson').mockResolvedValueOnce({
        status: 200,
        text: JSON.stringify(mockLcproxyResult),
      });

      // Call processBatch to populate embeddings
      await sdk.processBatch(mockModel, mockSemanticChunks);

      // Assert that embeddings have been added to each chunk after processBatch
      expect(mockSemanticChunks[0].Embeddings).toEqual(mockEmbeddingsResponse[0].Embeddings);
      expect(mockSemanticChunks[1].Embeddings).toEqual(mockEmbeddingsResponse[1].Embeddings);
    });

    it('handles non-successful status codes gracefully', async () => {
      // Create chunks with null embeddings
      const testChunks = mockSemanticChunks.map((chunk) => ({
        ...chunk,
        Embeddings: null,
      }));

      // Simulate a non-successful status code
      jest.spyOn(sdk, 'postJson').mockResolvedValueOnce({
        status: 500,
        text: JSON.stringify({}),
      });

      await sdk.processBatch(mockModel, testChunks);

      // Assert that embeddings remain null after non-successful status
      expect(testChunks[0].Embeddings).toBeNull();
      expect(testChunks[1].Embeddings).toBeNull();
    });
  });
});
