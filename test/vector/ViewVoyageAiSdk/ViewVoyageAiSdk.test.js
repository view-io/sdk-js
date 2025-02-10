import { getServer } from '../../server';
import { handlers } from './handler';
import { apiViewVoyageAiSdk as sdk } from '../../setupTest';
import { mockSemanticCells, mockSemanticChunks, mockEmbeddingsResponse, mockModel } from './mockData';
import { SeverityEnum } from '../../../src/enums/SeverityEnum';
import { http, HttpResponse } from 'msw';
import SemanticChunk from '../../../src/models/SemanticChunk';

const server = getServer(handlers);

describe('ViewVoyageAiSdk', () => {
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
      expect(result).toBe(true);
    });

    it('should return false for unsuccessful connectivity', async () => {
      server.use(
        http.get(`${sdk.Endpoint}healthz`, () => {
          return new HttpResponse(null, { status: 500 });
        })
      );
      const result = await sdk.validateConnectivity();
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
    it('should throw error as API is not implemented', async () => {
      await expect(sdk.loadModel('model1')).rejects.toThrow(
        'This API is not implemented for this embeddings generator.'
      );
    });
  });

  describe('deleteModel', () => {
    it('should throw error as API is not implemented', async () => {
      await expect(sdk.deleteModel('model1')).rejects.toThrow(
        'This API is not implemented for this embeddings generator.'
      );
    });
  });

  describe('_processBatch', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should process batch successfully', async () => {
      const chunks = [...mockSemanticChunks];
      console.log('chunks: ', chunks);
      await sdk._processBatch(mockModel, chunks);

      // Verify that embeddings were added to chunks
      chunks.forEach((chunk) => {
        expect(chunk.Embeddings).toBeDefined();
        expect(Array.isArray(chunk.Embeddings)).toBe(true);
        expect(chunk.Embeddings.length).toBeGreaterThan(0); // Verify embeddings exist without specifying exact length
      });
    });

    it('should handle API errors gracefully', async () => {
      const chunks = mockSemanticChunks.slice(0, 2);

      server.use(
        http.post(`${sdk.Endpoint}embeddings`, () => {
          return new HttpResponse(null, { status: 500 });
        })
      );

      const testChunks = mockSemanticChunks.map((chunk) => ({
        ...chunk,
        Embeddings: null,
      }));

      await sdk._processBatch(mockModel, testChunks);

      // Assert that embeddings remain null after non-successful status
      expect(testChunks[0].Embeddings).toBeNull();
      expect(testChunks[1].Embeddings).toBeNull();
    });

    it('should handle empty content in chunks', async () => {
      const emptyChunks = [
        new SemanticChunk({ Content: '', Position: 0, Start: 0, End: 0 }),
        new SemanticChunk({ Content: 'valid content', Position: 1, Start: 1, End: 10 }),
      ];

      await sdk._processBatch(mockModel, emptyChunks);
      expect(emptyChunks[1].Embeddings).toBeDefined();
    });

    it('should retry on failure up to MaxRetries', async () => {
      const chunks = [...mockSemanticChunks];
      let requestCount = 0;

      server.use(
        http.post(`${sdk.Endpoint}embeddings`, () => {
          requestCount++;
          if (requestCount < sdk.MaxRetries) {
            return new HttpResponse(null, { status: 500 });
          }
          return HttpResponse.json(mockEmbeddingsResponse);
        })
      );

      await sdk._processBatch(mockModel, chunks);
      expect(requestCount).toBe(sdk.MaxRetries);
      chunks.forEach((chunk) => {
        expect(chunk.Embeddings).toBeDefined();
      });
    });
  });
});
