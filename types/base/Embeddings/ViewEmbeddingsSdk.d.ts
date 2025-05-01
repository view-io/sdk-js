export default class ViewEmbeddingsSdk extends ViewSdkBase {
    /**
     * Generate embeddings for text content using the specified model and configuration
     * @param {Object} request - The embedding generation request
     * @param {Object} request.EmbeddingsRule - Configuration for the embeddings generator
     * @param {string} request.EmbeddingsRule.EmbeddingsGenerator - The embeddings generator to use (e.g. "LCProxy")
     * @param {string} request.EmbeddingsRule.EmbeddingsGeneratorUrl - URL of the embeddings generator service
     * @param {string} request.EmbeddingsRule.EmbeddingsGeneratorApiKey - API key for the embeddings generator
     * @param {number} request.EmbeddingsRule.BatchSize - Maximum number of chunks to process in a batch
     * @param {number} request.EmbeddingsRule.MaxGeneratorTasks - Maximum number of concurrent generator tasks
     * @param {number} request.EmbeddingsRule.MaxRetries - Maximum number of retries on failure
     * @param {number} request.EmbeddingsRule.MaxFailures - Maximum number of failures before aborting
     * @param {string} request.Model - The embedding model to use
     * @param {string} request.ApiKey - API key for the model service
     * @param {string[]} request.Contents - Array of text chunks to generate embeddings for
     * @param {AbortSignal} cancelToken - Optional cancellation token
     * @returns {Promise<EmbeddingsResult>} The embeddings result
     * @throws {Error} If the request is null or empty
     */
    generateEmbeddings: (request: {
        EmbeddingsRule: {
            EmbeddingsGenerator: string;
            EmbeddingsGeneratorUrl: string;
            EmbeddingsGeneratorApiKey: string;
            BatchSize: number;
            MaxGeneratorTasks: number;
            MaxRetries: number;
            MaxFailures: number;
        };
        Model: string;
        ApiKey: string;
        Contents: string[];
    }, cancelToken: AbortSignal) => Promise<EmbeddingsResult>;
    /**
     * Preload Models
     *
     * @param {Object} models - The models configuration object
     * @param {string[]} models.Models - Array of model names to preload (e.g. ["all-MiniLM-L6-v2"])
     * @param {string} models.ApiKey - API key for the model service
     * @param {AbortSignal} cancelToken - Optional cancellation token
     * @returns {Promise<object>} A promise resolving to a void indicating the preloading is complete
     * @throws {Error} If the models configuration is null or empty
     */
    preloadModels: (models: {
        Models: string[];
        ApiKey: string;
    }, cancelToken: AbortSignal) => Promise<object>;
}
import ViewSdkBase from '../ViewSDKBase';
import EmbeddingsResult from '../../models/EmbeddingsResult';
