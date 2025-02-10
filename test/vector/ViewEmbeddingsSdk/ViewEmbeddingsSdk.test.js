import ViewEmbeddingsSdk from '../../../src/base/Vector/ViewEmbeddingsSdk';
import { EmbeddingsGeneratorEnum } from '../../../src/enums/EmbeddingsGeneratorEnum';
import { mockSemanticCell, mockSemanticCells, mockModel } from './mockData';
import { handlers } from './handler';
import { getServer } from '../../server';
import {
  apiViewEmbeddingsSdk as sdk,
  apiViewEmbeddingsOllamaSdk as Ollama,
  apiViewEmbeddingsOpenAISdk as OpenAI,
  apiViewEmbeddingsVoyageAISdk as VoyageAI,
} from '../../setupTest';

const server = getServer(handlers);

describe('ViewEmbeddingsSdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('constructor', () => {
    it('should create instance with default values', () => {
      const localSdk = new ViewEmbeddingsSdk();
      expect(localSdk.generator).toBe(EmbeddingsGeneratorEnum.LCProxy);
      expect(localSdk.endpoint).toBe('http://localhost:8301/');
      expect(localSdk.batchSize).toBe(16);
      expect(localSdk.maxParallelTasks).toBe(16);
    });

    it('should create instance with custom values', () => {
      const mockConfig = {
        generator: EmbeddingsGeneratorEnum.LCProxy,
        endpoint: 'http://localhost:8301/',
        apiKey: 'mock-api-key',
        batchSize: 16,
        maxParallelTasks: 16,
        maxRetries: 3,
        maxFailures: 3,
        timeoutMs: 30000,
      };
      const localSdk = new ViewEmbeddingsSdk(
        mockConfig.generator,
        mockConfig.endpoint,
        mockConfig.apiKey,
        mockConfig.batchSize,
        mockConfig.maxParallelTasks,
        mockConfig.maxRetries,
        mockConfig.maxFailures,
        mockConfig.timeoutMs
      );
      expect(localSdk.generator).toBe(mockConfig.generator);
      expect(localSdk.endpoint).toBe(mockConfig.endpoint);
      expect(localSdk.apiKey).toBe(mockConfig.apiKey);
      expect(localSdk.batchSize).toBe(mockConfig.batchSize);
    });
  });

  describe('validateConnectivity', () => {
    it('should validate connectivity successfully for LCProxy', async () => {
      const result = await sdk.validateConnectivity();
      expect(result).toBe('true');
    });
    it('should validate connectivity successfully for Ollama', async () => {
      const result = await Ollama.validateConnectivity();
      expect(result).toBe('true');
    });
    it('should validate connectivity successfully for OpenAI', async () => {
      const result = await OpenAI.validateConnectivity();
      expect(result).toBe(true);
    });
    it('should validate connectivity successfully for VoyageAI', async () => {
      const result = await VoyageAI.validateConnectivity();
      expect(result).toBe(true);
    });
  });

  describe('processSemanticCells for LCProxy', () => {
    it('should return empty array for empty input', async () => {
      const result = await sdk.processSemanticCells([], mockModel);
      expect(result).toEqual([]);
    });

    it('should throw error for invalid model', async () => {
      await expect(sdk.processSemanticCells(mockSemanticCells, null)).rejects.toThrow(
        'Model is required and must be a string.' // Expect an error when model is null
      );
      await expect(sdk.processSemanticCells(mockSemanticCells, '')).rejects.toThrow(
        'Model is required and must be a string.' // Expect an error when model is an empty string
      );
    });

    it('should throw error for invalid timeout', async () => {
      await expect(sdk.processSemanticCells(mockSemanticCells, mockModel, -1)).rejects.toThrow(
        'Timeout must be a positive number.' // Expect an error when timeout is a negative number
      );
      await expect(sdk.processSemanticCells(mockSemanticCells, mockModel, 'invalid')).rejects.toThrow(
        'Timeout must be a positive number.' // Expect an error when timeout is not a number
      );
    });

    it('should process semantic cells successfully', async () => {
      const result = await sdk.processSemanticCells(mockSemanticCells, mockModel);
      console.log('result 😀: ', result);
      expect(result).toHaveLength(mockSemanticCells.length); // Expect result to have same length as input cells
      // Remove check for Embeddings since it's no longer part of the SemanticCell
      expect(result[0].Children).toBeDefined(); // Expect that the children property (or other relevant properties) is defined
    });

    it('should handle single semantic cell', async () => {
      const result = await sdk.processSemanticCells([mockSemanticCell], mockModel);
      expect(result).toHaveLength(1); // Expect result to have a length of 1 since only one cell is provided
      // Remove check for Embeddings since it's no longer part of the SemanticCell
      expect(result[0].Children).toBeDefined(); // Check for other properties like Children or Chunks instead
    });

    it('should throw error for unknown embeddings generator', async () => {
      sdk.generator = 'InvalidGenerator'; // Set an invalid generator
      await expect(sdk.processSemanticCells(mockSemanticCells, mockModel)).rejects.toThrow(
        "Unknown embeddings generator 'InvalidGenerator'" // Expect an error for an unknown generator
      );
    });

    it('should process cells with LCProxy generator', async () => {
      sdk.generator = 'LCProxy'; // Set the generator to LCProxy
      const result = await sdk.processSemanticCells(mockSemanticCells, mockModel);
      expect(result).toHaveLength(mockSemanticCells.length); // Expect correct processing based on LCProxy
    });
  });

  describe('processSemanticCells for Ollama', () => {
    it('should return empty array for empty input', async () => {
      const result = await Ollama.processSemanticCells([], mockModel);
      expect(result).toEqual([]);
    });

    it('should throw error for invalid model', async () => {
      await expect(Ollama.processSemanticCells(mockSemanticCells, null)).rejects.toThrow(
        'Model is required and must be a string.' // Expect an error when model is null
      );
      await expect(Ollama.processSemanticCells(mockSemanticCells, '')).rejects.toThrow(
        'Model is required and must be a string.' // Expect an error when model is an empty string
      );
    });

    it('should throw error for invalid timeout', async () => {
      await expect(Ollama.processSemanticCells(mockSemanticCells, mockModel, -1)).rejects.toThrow(
        'Timeout must be a positive number.' // Expect an error when timeout is a negative number
      );
      await expect(Ollama.processSemanticCells(mockSemanticCells, mockModel, 'invalid')).rejects.toThrow(
        'Timeout must be a positive number.' // Expect an error when timeout is not a number
      );
    });

    it('should process semantic cells successfully', async () => {
      const result = await Ollama.processSemanticCells(mockSemanticCells, mockModel);
      console.log('result 😀: ', result);
      expect(result).toHaveLength(mockSemanticCells.length); // Expect result to have same length as input cells
      // Remove check for Embeddings since it's no longer part of the SemanticCell
      expect(result[0].Children).toBeDefined(); // Expect that the children property (or other relevant properties) is defined
    });

    it('should handle single semantic cell', async () => {
      const result = await Ollama.processSemanticCells([mockSemanticCell], mockModel);
      expect(result).toHaveLength(1); // Expect result to have a length of 1 since only one cell is provided
      // Remove check for Embeddings since it's no longer part of the SemanticCell
      expect(result[0].Children).toBeDefined(); // Check for other properties like Children or Chunks instead
    });

    it('should throw error for unknown embeddings generator', async () => {
      Ollama.generator = 'InvalidGenerator'; // Set an invalid generator
      await expect(Ollama.processSemanticCells(mockSemanticCells, mockModel)).rejects.toThrow(
        "Unknown embeddings generator 'InvalidGenerator'" // Expect an error for an unknown generator
      );
    });

    it('should process cells with Ollama generator', async () => {
      Ollama.generator = 'Ollama'; // Set the generator to Ollama
      const result = await Ollama.processSemanticCells(mockSemanticCells, mockModel);
      expect(result).toHaveLength(mockSemanticCells.length); // Expect correct processing based on LCProxy
    });
  });

  describe('processSemanticCells for OpenAI', () => {
    it('should return empty array for empty input', async () => {
      const result = await OpenAI.processSemanticCells([], mockModel);
      expect(result).toEqual([]);
    });

    it('should throw error for invalid model', async () => {
      await expect(OpenAI.processSemanticCells(mockSemanticCells, null)).rejects.toThrow(
        'Model is required and must be a string.' // Expect an error when model is null
      );
      await expect(OpenAI.processSemanticCells(mockSemanticCells, '')).rejects.toThrow(
        'Model is required and must be a string.' // Expect an error when model is an empty string
      );
    });

    it('should throw error for invalid timeout', async () => {
      await expect(OpenAI.processSemanticCells(mockSemanticCells, mockModel, -1)).rejects.toThrow(
        'Timeout must be a positive number.' // Expect an error when timeout is a negative number
      );
      await expect(OpenAI.processSemanticCells(mockSemanticCells, mockModel, 'invalid')).rejects.toThrow(
        'Timeout must be a positive number.' // Expect an error when timeout is not a number
      );
    });

    it('should process semantic cells successfully', async () => {
      const result = await OpenAI.processSemanticCells(mockSemanticCells, mockModel);
      console.log('result 😀: ', result);
      expect(result).toHaveLength(mockSemanticCells.length); // Expect result to have same length as input cells
      // Remove check for Embeddings since it's no longer part of the SemanticCell
      expect(result[0].Children).toBeDefined(); // Expect that the children property (or other relevant properties) is defined
    });

    it('should handle single semantic cell', async () => {
      const result = await OpenAI.processSemanticCells([mockSemanticCell], mockModel);
      expect(result).toHaveLength(1); // Expect result to have a length of 1 since only one cell is provided
      // Remove check for Embeddings since it's no longer part of the SemanticCell
      expect(result[0].Children).toBeDefined(); // Check for other properties like Children or Chunks instead
    });

    it('should throw error for unknown embeddings generator', async () => {
      OpenAI.generator = 'InvalidGenerator'; // Set an invalid generator
      await expect(OpenAI.processSemanticCells(mockSemanticCells, mockModel)).rejects.toThrow(
        "Unknown embeddings generator 'InvalidGenerator'" // Expect an error for an unknown generator
      );
    });

    it('should process cells with OpenAI generator', async () => {
      OpenAI.generator = 'OpenAI'; // Set the generator to OpenAI
      const result = await OpenAI.processSemanticCells(mockSemanticCells, mockModel);
      expect(result).toHaveLength(mockSemanticCells.length); // Expect correct processing based on LCProxy
    });
  });

  describe('processSemanticCells for VoyageAI', () => {
    it('should return empty array for empty input', async () => {
      const result = await VoyageAI.processSemanticCells([], mockModel);
      expect(result).toEqual([]);
    });

    it('should throw error for invalid model', async () => {
      await expect(VoyageAI.processSemanticCells(mockSemanticCells, null)).rejects.toThrow(
        'Model is required and must be a string.' // Expect an error when model is null
      );
      await expect(VoyageAI.processSemanticCells(mockSemanticCells, '')).rejects.toThrow(
        'Model is required and must be a string.' // Expect an error when model is an empty string
      );
    });

    it('should throw error for invalid timeout', async () => {
      await expect(VoyageAI.processSemanticCells(mockSemanticCells, mockModel, -1)).rejects.toThrow(
        'Timeout must be a positive number.' // Expect an error when timeout is a negative number
      );
      await expect(VoyageAI.processSemanticCells(mockSemanticCells, mockModel, 'invalid')).rejects.toThrow(
        'Timeout must be a positive number.' // Expect an error when timeout is not a number
      );
    });

    it('should process semantic cells successfully', async () => {
      const result = await VoyageAI.processSemanticCells(mockSemanticCells, mockModel);
      console.log('result 😀: ', result);
      expect(result).toHaveLength(mockSemanticCells.length); // Expect result to have same length as input cells
      // Remove check for Embeddings since it's no longer part of the SemanticCell
      expect(result[0].Children).toBeDefined(); // Expect that the children property (or other relevant properties) is defined
    });

    it('should handle single semantic cell', async () => {
      const result = await VoyageAI.processSemanticCells([mockSemanticCell], mockModel);
      expect(result).toHaveLength(1); // Expect result to have a length of 1 since only one cell is provided
      // Remove check for Embeddings since it's no longer part of the SemanticCell
      expect(result[0].Children).toBeDefined(); // Check for other properties like Children or Chunks instead
    });

    it('should throw error for unknown embeddings generator', async () => {
      VoyageAI.generator = 'InvalidGenerator'; // Set an invalid generator
      await expect(VoyageAI.processSemanticCells(mockSemanticCells, mockModel)).rejects.toThrow(
        "Unknown embeddings generator 'InvalidGenerator'" // Expect an error for an unknown generator
      );
    });

    it('should process cells with VoyageAI generator', async () => {
      VoyageAI.generator = 'VoyageAI'; // Set the generator to VoyageAI
      const result = await VoyageAI.processSemanticCells(mockSemanticCells, mockModel);
      expect(result).toHaveLength(mockSemanticCells.length); // Expect correct processing based on LCProxy
    });
  });
});
