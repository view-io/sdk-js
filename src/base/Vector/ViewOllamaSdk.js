import EmbeddingsSdkBase from './EmbeddingsSdkBase';
import Serializer from '../../utils/Serializer';
import { SeverityEnum } from '../../enums/SeverityEnum';
import EmbeddingsResult from '../../models/EmbeddingsResult';
import SemaphoreSlim from '../../utils/Semaphore';
import ModelInformation from '../../models/ModelInformation';
import { OllamaEmbeddingsResult } from '../../models/OllamaModelResult';

/**
 * View Ollama SDK.
 * @class
 * @extends EmbeddingsSdkBase
 * @version 0.1.0
 * @module base/ViewOllamaSdk
 */
export default class ViewOllamaSdk extends EmbeddingsSdkBase {
  /**
   * Constructs a new ViewOllamaSdk.
   * @param {string} [endpoint="http://localhost:7869"] - The endpoint URL.
   * @param {string} [apiKey=null] - The API key.
   * @param {number} [batchSize=8] - The maximum number of chunks to submit in a processing request.
   * @param {number} [maxParallelTasks=16] - The maximum number of parallel tasks.
   * @param {number} [maxRetries=3] - The maximum number of retries.
   * @param {number} [maxFailures=3] - The maximum number of failures before aborting.
   * @param {function} [logger=null] - The logger function.
   */
  constructor(
    endpoint = 'http://localhost:7869',
    apiKey = null,
    batchSize = 8,
    maxParallelTasks = 16,
    maxRetries = 3,
    maxFailures = 3,
    logger = null
  ) {
    super(
      'Ollama', // Embeddings generator type
      endpoint,
      apiKey,
      batchSize,
      maxParallelTasks,
      maxRetries,
      maxFailures,
      logger
    );
    this._Serializer = new Serializer();
    this._DefaultModel = 'llama3';
  }

  /**
   * Validate connectivity to the endpoint.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<boolean>} - Resolves to a boolean indicating connectivity status.
   */
  async validateConnectivity(token = null) {
    try {
      //   const req = new RestRequest(this.Endpoint, 'HEAD');
      const req = await this.exists(this.Endpoint, token);
      return req;
    } catch (error) {
      return false;
    }
  }

  /**
   * Load multiple models.
   * @param {Array<string>} models - List of model names.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<boolean>} - Always throws an error as this API is not implemented.
   * @throws {Error} - Always throws an error.
   */
  async loadModels(models, token = null) {
    throw new Error('This API is not implemented for this embeddings generator.');
  }

  /**
   * Load a single model.
   * @param {string} model - The model name.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<boolean>} - Resolves to a boolean indicating success or failure.
   */
  async loadModel(model, token = null) {
    if (!model) return false;
    const url = `${this.Endpoint}api/pull`;

    try {
      const res = await this.post(url, model, token);
      return res;
    } catch (error) {
      return false;
    }
  }

  /**
   * Process a list of semantic cells and generate embeddings.
   * @param {string[]} cells - The semantic cells to process.
   * @param {string} model - The model to use.
   * @param {number} [timeoutMs=300000] - The timeout in milliseconds.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise[]} - Resolves to a list of semantic cells with embeddings.
   */
  async processSemanticCells(cells, model, timeoutMs = 300000, token = null) {
    if (!cells || cells.length < 1) return cells;
    if (!model) model = this._DefaultModel;

    const chunks = this.buildSemanticChunkList(cells);
    if (chunks && chunks.length > 0) {
      await this.processSemanticChunks(model, chunks, timeoutMs, token);
    }

    return cells;
  }

  /**
   * List available models from the endpoint.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<Array[]>} - Resolves to a list of model information.
   */
  async listModels(token = null) {
    const url = `${this.Endpoint}api/tags`;

    try {
      const req = await this.retrieve(url, ModelInformation, token);
      return req;
    } catch (error) {
      this.Logger?.(SeverityEnum.Warn, `exception while retrieving models: ${error}`);
      return null;
    }
  }

  /**
   * Delete a model by name.
   * @param {string} name - The model name.
   * @param {CancellationToken} [token] - The cancellation token.
   * @returns {Promise<boolean>} - Resolves to a boolean indicating success or failure.
   */
  async deleteModel(name, token = null) {
    const url = `${this.Endpoint}api/delete`;

    try {
      const dict = { name };
      const resp = await this.delete(url, dict, token);
      return resp;
    } catch (error) {
      this.Logger?.(SeverityEnum.Warn, `exception while deleting model: ${error}`);
      return false;
    }
  }

  // Private methods

  /**
   * Process semantic chunks in batches.
   * @param {string} model - The model to use.
   * @param {Array[]} chunks - The chunks to process.
   * @param {number} [timeoutMs=300000] - The timeout in milliseconds.
   * @param {CancellationToken} [token] - The cancellation token.
   * @private
   */
  async processSemanticChunks(model, chunks, timeoutMs = 300000, token = null) {
    const batches = chunks.reduce((batches, chunk, index) => {
      const batchIndex = Math.floor(index / this.BatchSize);
      if (!batches[batchIndex]) batches[batchIndex] = [];
      batches[batchIndex].push(chunk);
      return batches;
    }, []);

    const semaphore = new SemaphoreSlim(this.MaxParallelTasks);
    const tasks = batches.map(async (batch) => {
      await semaphore.waitAsync();
      try {
        await this.processBatch(model, batch, timeoutMs, token);
      } finally {
        semaphore.release();
      }
    });

    await Promise.all(tasks);
  }

  /**
   * Process a single batch of semantic chunks.
   * @param {string} model - The model to use.
   * @param {Array[]} chunks - The chunks to process.
   * @param {number} [timeoutMs=300000] - The timeout in milliseconds.
   * @param {CancellationToken} [token] - The cancellation token.
   * @private
   */
  async processBatch(model, chunks, timeoutMs = 300000, token = null) {
    const url = `${this.Endpoint}api/embed`;
    let failureCount = 0;
    const content = chunks.filter((chunk) => chunk.Content).map((chunk) => chunk.Content);
    var result = new EmbeddingsResult();
    result.Success = false;

    while (failureCount < this.MaxRetries) {
      try {
        // req.timeoutMilliseconds = timeoutMs;

        const dict = { model, input: content };

        const resp = await this.postJson(url, dict, token);
        if (resp && resp.StatusCode >= 200 && resp.StatusCode <= 299) {
          var ollamaResult = Serializer.deserializeJson(resp.text, OllamaEmbeddingsResult);
          result.Success = true;
          result.Model = model;
          result.Url = url;
          result.StatusCode = resp.status;
          result.Result = OllamaEmbeddingsResult.ToEmbeddingsMaps(content, ollamaResult);
          this.mergeEmbeddingsMaps(chunks, resp.body.result);
          break;
        } else {
          failureCount++;
        }
      } catch (error) {
        failureCount++;
      }
      if (result.Success) {
        result.Result.forEach((map) => {
          chunks.forEach((chunk) => {
            if (map.Content === chunk.Content) {
              chunk.Embeddings = map.Embeddings;
            }
          });
        });
      }
    }
  }
}
