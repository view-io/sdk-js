import EmbeddingsSdkBase from './EmbeddingsSdkBase';
import { EmbeddingsGeneratorEnum } from '../../enums/EmbeddingsGeneratorEnum';
import { SeverityEnum } from '../../enums/SeverityEnum';
import LcproxyEmbeddingsResult from '../../models/LcproxyEmbeddingsResult';
import EmbeddingsResult from '../../models/EmbeddingsResult';
import Serializer from '../../utils/Serializer';
import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';
import Semaphore from '../../utils/Semaphore';
import { LoggerInstance } from '../../utils/Logger';
/**
 * View Ollama SDK.
 * @class
 * @extends EmbeddingsSdkBase
 * @version 0.1.0
 * @module base/ViewLcproxySdk
 */
export default class ViewLcproxySdk extends EmbeddingsSdkBase {
  /**
   * Constructs a new instance of ViewLcproxySdk.
   * @param {string} [endpoint='http://localhost:8301'] - The base URL of the LCProxy service.
   * @param {string|null} [apiKey=null] - API key for authentication.
   * @param {number} [batchSize=8] - Number of chunks per batch.
   * @param {number} [maxParallelTasks=16] - Maximum number of parallel tasks.
   * @param {number} [maxRetries=3] - Maximum retries for failed requests.
   * @param {number} [maxFailures=3] - Maximum allowable consecutive failures.
   * @param {function|null} [logger=null] - Optional logging function.
   */
  constructor(
    endpoint = 'http://localhost:8301',
    apiKey = null,
    batchSize = 8,
    maxParallelTasks = 16,
    maxRetries = 3,
    maxFailures = 3,
    logger = null
  ) {
    super(
      EmbeddingsGeneratorEnum.LCProxy,
      endpoint,
      apiKey,
      batchSize,
      maxParallelTasks,
      maxRetries,
      maxFailures,
      logger
    );

    /**
     * The default model used for embeddings.
     * @type {string}
     */
    this.defaultModel = 'all-MiniLM-L6-v2';
  }

  /**
   * Validates the connectivity to the LCProxy service.
   * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
   * @returns {Promise<boolean>} Resolves to true if connectivity is successful, otherwise false.
   */
  async validateConnectivity(token = null) {
    try {
      const response = await this.exists(this.Endpoint, token);
      return response;
    } catch (error) {
      return false;
    }
  }

  /**
   * Preloads models on the LCProxy service.
   * @param {string[]} models - List of model names to preload.
   * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
   * @returns {Promise<boolean>} Resolves to true if successful, otherwise false.
   * @throws {Error} If the models list is invalid or not provided.
   */
  async preloadModels(models, token = null) {
    if (!models || models.length < 1) {
      GenExceptionHandlersInstance.ArgumentNullException('Models list is required.');
    }

    const url = `${this.Endpoint}v1.0/preload/`;

    try {
      const response = await this.post(url, models, token);
      return response;
    } catch (error) {
      return false;
    }
  }

  /**
   * Processes semantic cells by generating embeddings.
   * @param {Array} cells - List of cells to process.
   * @param {string} [model] - Model to use for embeddings. Defaults to `defaultModel`.
   * @param {number} [timeoutMs=300000] - Request timeout in milliseconds.
   * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
   * @returns {Promise<Array>} Resolves to the processed cells with embeddings.
   */
  async processSemanticCells(cells, model, timeoutMs = 300000, token = null) {
    if (!Array.isArray(cells) || cells.length === 0) return cells;
    if (!model) model = this.defaultModel;

    const chunks = this.buildSemanticChunkList(cells);
    LoggerInstance.log(chunks);
    if (chunks && chunks.length > 0) {
      await this.processSemanticChunks(model, chunks, timeoutMs, token);
    }

    return cells;
  }

  /**
   * Processes semantic chunks by dividing them into batches and processing each batch.
   * @param {string} model - Model to use for embeddings.
   * @param {Array} chunks - List of chunks to process.
   * @param {number} [timeoutMs=300000] - Request timeout in milliseconds.
   * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
   * @returns {Promise<void>} Resolves when all chunks are processed.
   */
  async processSemanticChunks(model, chunks, timeoutMs = 300000, token = null) {
    const batches = [];
    for (let i = 0; i < chunks.length; i += this.batchSize) {
      batches.push(chunks.slice(i, i + this.batchSize));
    }

    const semaphore = new Semaphore(this.maxParallelTasks);
    const tasks = batches.map(async (batch) => {
      await semaphore.acquire();
      try {
        await this.processBatch(model, batch, timeoutMs, token);
      } finally {
        semaphore.release();
      }
    });

    await Promise.all(tasks);
  }

  /**
   * Lists models.
   * @param {AbortSignal|null} [token=null] - Optional abort signal for request cancellation.
   * @throws {Error} Always throws as this API is not implemented.
   * @returns {Promise<never>}
   */
  async listModels(token = null) {
    throw new Error('This API is not implemented for this embeddings generator.');
  }

  /**
   * Loads multiple models.
   * @param {string[]} models - List of models to load.
   * @param {AbortSignal|null} [token=null] - Optional abort signal for request cancellation.
   * @throws {Error} Always throws as this API is not implemented.
   * @returns {Promise<never>}
   */
  async loadModels(models, token = null) {
    throw new Error('This API is not implemented for this embeddings generator.');
  }

  /**
   * Deletes a specific model.
   * @param {string} name - The name of the model to delete.
   * @param {AbortSignal|null} [token=null] - Optional abort signal for request cancellation.
   * @throws {Error} Always throws as this API is not implemented.
   * @returns {Promise<never>}
   */
  async deleteModel(name, token = null) {
    throw new Error('This API is not implemented for this embeddings generator.');
  }

  /**
   * Loads a single model.
   * @param {string} model - The model to load.
   * @param {AbortSignal|null} [token=null] - Optional abort signal for request cancellation.
   * @throws {Error} Always throws as this API is not implemented.
   * @returns {Promise<never>}
   */
  async loadModel(model, token = null) {
    throw new Error('This API is not implemented for this embeddings generator.');
  }

  /**
   * Processes a single batch of semantic chunks to generate embeddings.
   * @param {string} model - Model to use for embeddings.
   * @param {Array} chunks - List of chunks to process.
   * @param {number} [timeoutMs] - Request timeout in milliseconds.
   * @param {AbortSignal|null} [token=null] - Optional abort token for request cancellation.
   * @returns {Promise<void>} Resolves when the batch is processed successfully.
   */
  async processBatch(model, chunks, timeoutMs, token = null) {
    const url = `${this.Endpoint}v1.0/embeddings/`;
    const content = chunks.map((chunk) => chunk.content).filter(Boolean);

    let result = new EmbeddingsResult();
    result.Success = false;
    let failureCount = 0;

    while (failureCount < this.maxRetries) {
      try {
        const payload = {
          Model: model,
          ApiKey: this.apiKey,
          Contents: content,
        };

        const response = await this.postJson(url, payload, token);

        if (response.status >= 200 && response.status <= 299) {
          const lcProxyResult = Serializer.deserializeJson(response.text, LcproxyEmbeddingsResult);
          result.Success = true;
          result.Model = model;
          result.Url = url;
          result.StatusCode = response.status;
          result.Result = LcproxyEmbeddingsResult.ToEmbeddingsMaps(content, lcProxyResult);

          this.mergeEmbeddingsMaps(chunks, result.Result);
          break;
        } else {
          failureCount++;
        }
      } catch (error) {
        this.logger?.(SeverityEnum.Warn, `Error processing batch: ${error.message}`);
        failureCount++;
      }
    }

    if (result.Success && result.Result) {
      for (const map of result.Result) {
        for (const chunk of chunks) {
          if (map.Content === chunk.content) {
            chunk.embeddings = map.Embeddings;
          }
        }
      }
    }
  }
}
