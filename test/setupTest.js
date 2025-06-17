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
  mockEndpoint, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);

export const apiViewAssistantSdk = new sdk.ViewAssistantSdk(
  mockEndpoint2, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);

export const apiViewLexiSdk = new sdk.ViewLexiSdk(
  mockEndpoint3, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);

export const apiViewProcessorSdk = new sdk.ViewProcessorSdk(
  mockEndpoint2, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);

export const apiViewVectorProxySdk = new sdk.ViewVectorProxySdk(
  mockEndpoint2, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);
export const apiCrowalerSDK = new sdk.ViewCrawlerSdk(
  mockEndpoint, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);

export const apiViewEmbeddingsSdk = new sdk.ViewEmbeddingsSdk(
  mockEndpoint, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);

// export const apiGraphSdk = new sdk.GraphSdk({
//   GUID: 'default',
//   TenantGUID: mockTenantId,
//   Name: 'Sample Graph Repository',
//   RepositoryType: GraphRepositoryTypeEnum.LiteGraph,
//   EndpointUrl: mockEndpoint3,
//   ApiKey: 'graph-api-key',
//   GraphIdentifier: 'default',
//   CreatedUtc: new Date().toISOString,
// });

export const apiViewHealthCheckSdk = new sdk.ViewHealthcheckSdk(
  mockEndpoint, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);

export const apiViewStorageSdk = new sdk.ViewStorageSdk(
  mockEndpoint, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);

export const apiDirectorSdk = new sdk.ViewDirectorSdk(
  mockEndpoint, //endpoint
  mockTenantId, //tenant Id
  mockAccessToken //access token
);

export { sdk };
