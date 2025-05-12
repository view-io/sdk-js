import * as sdk from '../src';
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

export const apiViewProcessorSdk = new sdk.ViewProcessorSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint2 //endpoint
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

export const apiViewEmbeddingsSdk = new sdk.ViewEmbeddingsSdk(
  mockTenantId, //tenant Id
  mockAccessToken, //access token
  mockEndpoint //endpoint
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
