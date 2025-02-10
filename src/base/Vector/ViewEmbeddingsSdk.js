import Semaphore from '../../utils/Semaphore';
import { EmbeddingsGeneratorEnum } from '../../enums/EmbeddingsGeneratorEnum';
import ViewLcproxySdk from './ViewLcproxySdk';
import ViewOpenAiSdk from './ViewOpenAiSdk';
import ViewOllamaSdk from './ViewOllamaSdk';
import ViewVoyageAiSdk from './ViewVoyageAiSdk';

export default class ViewEmbeddingsSdk {
  /**
   * Constructor to instantiate the ViewEmbeddingsSdk.
   * @param {string} generator - The embeddings generator. Default is 'LCProxy'.
   * @param {string} endpoint - Endpoint URL. Default is 'http://localhost:8301/'.
   * @param {string} apiKey - API key.
   * @param {number} batchSize - Maximum number of chunks per task. Default is 16.
   * @param {number} maxParallelTasks - Maximum number of parallel tasks. Default is 16.
   * @param {number} maxRetries - Maximum retries per task. Default is 3.
   * @param {number} maxFailures - Maximum failures before operation stops. Default is 3.
   * @param {number} timeoutMs - Timeout in milliseconds. Default is 300000.
   * @param {function} logger - Logger function.
   */
  constructor(
    generator = EmbeddingsGeneratorEnum.LCProxy,
    endpoint = 'http://localhost:8301/',
    apiKey = null,
    batchSize = 16,
    maxParallelTasks = 16,
    maxRetries = 3,
    maxFailures = 3,
    timeoutMs = 300000,
    logger = null
  ) {
    this.generator = generator;
    this.apiKey = apiKey;
    this.endpoint = endpoint;
    this.batchSize = batchSize;
    this.maxParallelTasks = maxParallelTasks;
    this.maxRetries = maxRetries;
    this.maxFailures = maxFailures;
    this.timeoutMs = timeoutMs;
    this.logger = logger;

    this._semaphore = new Semaphore(maxParallelTasks); // Simulated semaphore
    this._initializeGenerator();
  }

  /**
   * Validate connectivity with the current embeddings generator.
   * @returns {Promise<boolean>} - True if connected successfully.
   */
  async validateConnectivity() {
    switch (this.generator) {
      case EmbeddingsGeneratorEnum.LCProxy:
        return await this._lcProxy.validateConnectivity();
      case EmbeddingsGeneratorEnum.Ollama:
        return await this._ollama.validateConnectivity();
      case EmbeddingsGeneratorEnum.OpenAI:
        return await this._openAI.validateConnectivity();
      case EmbeddingsGeneratorEnum.VoyageAI:
        return await this._voyageAI.validateConnectivity();
      default:
        throw new Error(`Unknown embeddings generator '${this.generator}'`);
    }
  }

  /**
   * Process semantic cells and generate embeddings.
   * @param {Array[]} cells - List of semantic cells.
   * @param {string} [cells.GUID] - Unique identifier for the semantic cell (automatically generated if not provided).
   * @param {string} [cells.MD5Hash] - MD5 hash of the content.
   * @param {string} [cells.SHA1Hash] - SHA1 hash of the content.
   * @param {string} [cells.SHA256Hash] - SHA256 hash of the content.
   * @param {number} [cells.Position] - Position of the semantic cell.
   * @param {number} [cells.Length] - Length of the semantic cell.
   * @param {Array<Object>} [cells.Chunks] - List of chunks contained in the semantic cell.
   * @param {Array<Object>} [cells.Children] - List of child semantic cells.
   * @param {string} model - Model name.
   * @param {number} [timeoutMs=300000] - Timeout in milliseconds. Default is 300,000 (5 minutes).
   * @returns {Promise<Array[]>} - A promise resolving to a list of processed semantic cells with embeddings.
   */
  async processSemanticCells(cells, model, timeoutMs = 300000) {
    // Validate cells array
    if (!Array.isArray(cells) || cells.length === 0) {
      return []; // Return an empty array if no valid cells are provided
    }

    // Validate model
    if (!model || typeof model !== 'string') {
      throw new Error('Model is required and must be a string.');
    }

    // Validate timeout
    if (typeof timeoutMs !== 'number' || timeoutMs < 1) {
      throw new Error('Timeout must be a positive number.');
    }

    // Process cells based on the generator type
    switch (this.generator) {
      case EmbeddingsGeneratorEnum.LCProxy:
        return await this._lcProxy.processSemanticCells(cells, model, timeoutMs);
      case EmbeddingsGeneratorEnum.Ollama:
        return await this._ollama.processSemanticCells(cells, model, timeoutMs);
      case EmbeddingsGeneratorEnum.OpenAI:
        return await this._openAI.processSemanticCells(cells, model, timeoutMs);
      case EmbeddingsGeneratorEnum.VoyageAI:
        return await this._voyageAI.processSemanticCells(cells, model, timeoutMs);
      default:
        throw new Error(`Unknown embeddings generator '${this.generator}'`);
    }
  }

  /**
   * Initialize the specific generator based on the provided type.
   * @private
   */
  _initializeGenerator() {
    switch (this.generator) {
      case EmbeddingsGeneratorEnum.LCProxy:
        this._lcProxy = new ViewLcproxySdk(
          this.endpoint,
          this.apiKey,
          this.batchSize,
          this.maxParallelTasks,
          this.maxRetries,
          this.maxFailures,
          this.logger
        );
        break;
      case EmbeddingsGeneratorEnum.Ollama:
        this._ollama = new ViewOllamaSdk(
          this.endpoint,
          this.apiKey,
          this.batchSize,
          this.maxParallelTasks,
          this.maxRetries,
          this.maxFailures,
          this.logger
        );
        break;
      case EmbeddingsGeneratorEnum.OpenAI:
        this._openAI = new ViewOpenAiSdk(
          this.endpoint,
          this.apiKey,
          this.batchSize,
          this.maxParallelTasks,
          this.maxRetries,
          this.maxFailures,
          this.logger
        );
        break;
      case EmbeddingsGeneratorEnum.VoyageAI:
        this._voyageAI = new ViewVoyageAiSdk(
          this.endpoint,
          this.apiKey,
          this.batchSize,
          this.maxParallelTasks,
          this.maxRetries,
          this.maxFailures,
          this.logger
        );
        break;
      default:
        throw new Error(`Unknown embeddings generator '${this.generator}'`);
    }
  }
}
