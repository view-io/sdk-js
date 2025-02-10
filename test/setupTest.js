import * as sdk from '../src';
import { EmbeddingsGeneratorEnum } from '../src/enums/EmbeddingsGeneratorEnum';
import { GraphRepositoryTypeEnum } from '../src/enums/GraphRepositoryTypeEnum';
// var sdk = require('../dist');

export const mockTenantId = 'default'; //tenant Id
export const mockAccessToken = 'default'; //access token
export const mockEndpoint = 'http://18.216.184.150:8601/mock/'; //endpoint
export const mockEndpoint2 = 'http://18.216.184.150:8601/'; //endpoint
export const mockEndpoint3 = 'http://18.216.184.150:8601/mock'; //endpoint
export const mockApiKey = 'test-api-key'; //endpoint

export const api = new sdk.ViewConfigurationSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
);

export const apiViewAssistantSdk = new sdk.ViewAssistantSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint2 //endpoint
);

export const apiViewLexiSdk = new sdk.ViewLexiSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint3 //endpoint
);
export const apiViewCleanupSdk = new sdk.ViewCleanupSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint2 //endpoint
);

export const apiViewLexiEmbeddingsSdk = new sdk.ViewLexiEmbeddingsSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
);

export const apiViewProcessorSdk = new sdk.ViewProcessorSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint2 //endpoint
);

export const apiViewTypeDetectorSdk = new sdk.ViewTypeDetectorSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint2 //endpoint
);

export const apiViewUdrGeneratorSdk = new sdk.ViewUdrGeneratorSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
);

export const apiViewSemanticCellSdk = new sdk.ViewSemanticCellSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
);
export const apiViewVectorProxySdk = new sdk.ViewVectorProxySdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint2 //endpoint
);
export const apiCrowalerSDK = new sdk.ViewCrawlerSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
);
export const apiEmbeddingsSdk = new sdk.EmbeddingsSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
);

export const apiViewEmbeddingsSdk = new sdk.ViewEmbeddingsSdk(
  EmbeddingsGeneratorEnum.LCProxy, // generator
  mockEndpoint2, // endpoint
  'test-api-key', // apiKey
  16, // batchSize
  16, // maxParallelTasks
  3, // maxRetries
  3, // maxFailures
  300000 // timeoutMs
);
export const apiViewEmbeddingsOllamaSdk = new sdk.ViewEmbeddingsSdk(
  EmbeddingsGeneratorEnum.Ollama, // generator
  mockEndpoint2, // endpoint
  'test-api-key', // apiKey
  16, // batchSize
  16, // maxParallelTasks
  3, // maxRetries
  3, // maxFailures
  300000 // timeoutMs
);

export const apiViewEmbeddingsOpenAISdk = new sdk.ViewEmbeddingsSdk(
  EmbeddingsGeneratorEnum.OpenAI, // generator
  mockEndpoint2, // endpoint
  'test-api-key', // apiKey
  16, // batchSize
  16, // maxParallelTasks
  3, // maxRetries
  3, // maxFailures
  300000 // timeoutMs
);

export const apiViewEmbeddingsVoyageAISdk = new sdk.ViewEmbeddingsSdk(
  EmbeddingsGeneratorEnum.VoyageAI, // generator
  mockEndpoint2, // endpoint
  'test-api-key', // apiKey
  16, // batchSize
  16, // maxParallelTasks
  3, // maxRetries
  3, // maxFailures
  300000 // timeoutMs
);

export const apiViewLcproxySdk = new sdk.ViewLcproxySdk(
  mockEndpoint2, // endpoint
  mockApiKey, // apiKey
  16, // batchSize
  16, // maxParallelTasks
  3, // maxRetries
  3, // maxFailures
  300000 // timeoutMs
);

export const apiViewOllamaSdk = new sdk.ViewOllamaSdk(
  mockEndpoint2, // endpoint
  mockApiKey, // apiKey
  16, // batchSize
  16, // maxParallelTasks
  3, // maxRetries
  3, // maxFailures
  300000 // timeoutMs
);
export const apiGraphSdk = new sdk.GraphSdk({
  GUID: 'default',
  TenantGUID: mockTenantId,
  Name: 'Sample Graph Repository',
  RepositoryType: GraphRepositoryTypeEnum.LiteGraph,
  EndpointUrl: mockEndpoint3,
  ApiKey: 'graph-api-key',
  GraphIdentifier: 'default',
  CreatedUtc: new Date().toISOString,
});

export const apiViewOpenAiSdk = new sdk.ViewOpenAiSdk(
  mockEndpoint2, // endpoint
  mockApiKey, // apiKey
  16, // batchSize
  16, // maxParallelTasks
  3, // maxRetries
  3, // maxFailures
  300000 // timeoutMs
);

export const apiViewVoyageAiSdk = new sdk.ViewVoyageAiSdk(
  mockEndpoint2, // endpoint
  mockApiKey, // apiKey
  16, // batchSize
  16, // maxParallelTasks
  3, // maxRetries
  3, // maxFailures
  300000 // timeoutMs
);

export const apiViewHealthCheckSdk = new sdk.ViewHealthcheckSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
);

export const apiViewStorageSdk = new sdk.ViewStorageSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
);

export const apiDirectorSdk = new sdk.ViewDirectorSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
);

export { sdk };
