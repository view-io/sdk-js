import superagent from 'superagent';
import { LoggerInstance } from '../../utils/Logger';
import Serializer from '../../utils/Serializer';
import { EmbeddingsGeneratorEnum } from '../../enums/EmbeddingsGeneratorEnum';
import { SeverityEnum } from '../../enums/SeverityEnum';
import EmbeddingsSdkBase from './EmbeddingsSdkBase';
import Semaphore from '../../utils/Semaphore';
import OpenAiEmbeddingsResult from '../../models/OpenAiEmbeddingsResult';

/**
 * OpenAI embeddings generator.
 * @module vector/ViewOpenAiSdk
 * @extends EmbeddingsSdkBase
 */
export default class ViewOpenAiSdk extends EmbeddingsSdkBase {
  /** @private */
  _defaultModel = 'text-embedding-ada-002';

  /**
   * Instantiate.
   * @param {string} endpoint - Base URL. Default is https://api.openai.com/v1/
   * @param {string} [apiKey=null] - API key
   * @param {number} [batchSize=8] - Maximum number of chunks to submit in an individual processing request
   * @param {number} [maxParallelTasks=16] - Maximum number of parallel tasks
   * @param {number} [maxRetries=3] - Maximum number of retries to perform on any given task
   * @param {number} [maxFailures=3] - Maximum number of failures to support before failing the operation
   * @param {Function} [logger=null] - Logger function accepting severity and message parameters
   */
  constructor(
    endpoint,
    apiKey = null,
    batchSize = 8,
    maxParallelTasks = 16,
    maxRetries = 3,
    maxFailures = 3,
    logger = null
  ) {
    super(
      EmbeddingsGeneratorEnum.OpenAI,
      endpoint,
      apiKey,
      batchSize,
      maxParallelTasks,
      maxRetries,
      maxFailures,
      logger
    );
  }

  /**
   * Validate connectivity to the service.
   * @param {object} [cancelToken] - Cancellation token
   * @returns {Promise<boolean>} True if connection is valid
   */
  async validateConnectivity(cancelToken) {
    const url = this.Endpoint + 'models';

    return new Promise((resolve) => {
      const request = superagent('HEAD', url).set('Authorization', `Bearer ${this.apiKey}`);

      if (cancelToken) {
        cancelToken.abort = () => {
          request.abort();
          LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      request
        .then((response) => {
          resolve(response.status >= 200 && response.status <= 299);
        })
        .catch(() => {
          resolve(false);
        });
    });
  }

  /**
   * Process semantic cells to generate embeddings.
   * @param {Array<SemanticCell>} cells - List of semantic cells to process
   * @param {string} model - Model to use for processing
   * @param {number} [timeoutMs=300000] - Timeout in milliseconds
   * @param {object} [cancelToken] - Cancellation token
   * @returns {Promise<Array<SemanticCell>>} Processed semantic cells
   */
  async processSemanticCells(cells, model, timeoutMs = 300000, cancelToken) {
    if (!cells?.length) return cells;
    if (!model) model = this._defaultModel;

    const chunks = this.buildSemanticChunkList(cells);
    if (chunks?.length) {
      await this._processSemanticChunks(model, chunks, timeoutMs, cancelToken);
    }

    return cells;
  }

  /**
   * Process semantic chunks in batches.
   * @private
   * @param {string} model - Model to use
   * @param {Array<SemanticChunk>} chunks - Chunks to process
   * @param {number} timeoutMs - Timeout in milliseconds
   * @param {object} cancelToken - Cancellation token
   */
  async _processSemanticChunks(model, chunks, timeoutMs = 300000, cancelToken) {
    const batches = chunks
      .map((chunk, index) => ({ chunk, index }))
      .reduce((acc, curr) => {
        const batchIndex = Math.floor(curr.index / this.BatchSize);
        if (!acc[batchIndex]) acc[batchIndex] = [];
        acc[batchIndex].push(curr.chunk);
        return acc;
      }, []);

    const semaphore = new Semaphore(this.MaxParallelTasks);
    const tasks = batches.map(async (batch) => {
      await semaphore.acquire();
      try {
        await this._processBatch(model, batch, timeoutMs, cancelToken);
      } finally {
        semaphore.release();
      }
    });

    await Promise.all(tasks);
  }

  /**
   * Process a batch of semantic chunks.
   * @private
   * @param {string} model - Model to use
   * @param {Array<SemanticChunk>} chunks - Chunks to process
   * @param {number} timeoutMs - Timeout in milliseconds
   * @param {object} cancelToken - Cancellation token
   */
  async _processBatch(model, chunks, timeoutMs = 300000, cancelToken) {
    const url = this.Endpoint + 'embeddings';
    let failureCount = 0;

    const content = chunks.map((chunk) => chunk.content).filter((content) => content);

    let result = {
      success: false,
    };

    while (failureCount < this.MaxRetries) {
      try {
        const payload = {
          model,
          input: content,
        };

        const request = superagent('POST', url)
          .set('Authorization', `Bearer ${this.ApiKey}`)
          .set('Content-Type', 'application/json')
          .timeout(timeoutMs)
          .send(JSON.stringify(payload));

        if (cancelToken) {
          cancelToken.abort = () => {
            request.abort();
            LoggerInstance.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
          };
        }

        const response = await request;

        if (!response) {
          LoggerInstance.log(SeverityEnum.Warn, `No response from ${url}`);
          failureCount++;
          continue;
        }

        if (response.ok) {
          if (response.text) {
            const openAiResult = Serializer.deserializeJson(response.text, OpenAiEmbeddingsResult);
            result = {
              success: true,
              model,
              url,
              statusCode: response.status,
              result: OpenAiEmbeddingsResult.toEmbeddingsMaps(content, openAiResult),
            };

            this.mergeEmbeddingsMaps(chunks, result.result);
            break;
          } else {
            LoggerInstance.log(SeverityEnum.Warn, `No data received from ${url}`);
            result = {
              success: false,
              model,
              url,
              statusCode: response.status,
            };
            break;
          }
        } else {
          LoggerInstance.log(SeverityEnum.Warn, `Status ${response.status} received from ${url}:\n${response.text}`);
          failureCount++;
        }
      } catch (error) {
        LoggerInstance.log(SeverityEnum.Warn, `Exception while generating embeddings:\n${error.toString()}`);
        failureCount++;
      }
    }

    if (result.success) {
      for (const map of result.result) {
        for (const chunk of chunks) {
          if (map.content === chunk.content) {
            chunk.embeddings = map.embeddings;
          }
        }
      }
    }
  }
}
