import ViewSemanticCellSdk from '../../src/base/Semantic/ViewSemanticCellSdk';
import { handlers } from './handler';
import { mockSemanticCellRequest, mockMetadataRule, mockSemanticCellResponse, mockData } from './mockData';
import { setupServer } from 'msw/node';
import { apiViewSemanticCellSdk } from '../setupTest';

const server = setupServer(...handlers);

describe('ViewSemanticCellSdk', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe('processRaw', () => {
    it.skip('processes semantic cells with valid data', async () => {
      jest.setTimeout(10000);
      const response = await apiViewSemanticCellSdk.processRaw(mockSemanticCellRequest);
      response.Data = new Uint8Array(Object.values(response.Data));
      expect(response).toEqual(mockSemanticCellResponse);
    });

    it('throws error if data is missing', async () => {
      const invalidRequest = { ...mockSemanticCellRequest, Data: null };
      await expect(apiViewSemanticCellSdk.processRaw(invalidRequest)).rejects.toThrow(
        'No data supplied for semantic cell extraction.'
      );
    });

    it('throws error if MetadataRule is missing', async () => {
      const invalidRequest = { ...mockSemanticCellRequest, MetadataRule: null };
      await expect(apiViewSemanticCellSdk.processRaw(invalidRequest)).rejects.toThrow(
        'ArgumentNullException: scReq.MetadataRule is null or empty'
      );
    });

    it('throws error if SemanticCellEndpoint is missing', async () => {
      const invalidRule = { ...mockMetadataRule, SemanticCellEndpoint: null };
      const invalidRequest = { ...mockSemanticCellRequest, MetadataRule: invalidRule };
      await expect(apiViewSemanticCellSdk.processRaw(invalidRequest)).rejects.toThrow(
        'ArgumentNullException: scReq.MetadataRule.SemanticCellEndpoint is null or empty'
      );
    });
  });

  describe('process', () => {
    it.skip('processes semantic cells with valid parameters', async () => {
      const response = await apiViewSemanticCellSdk.process('Unknown', mockMetadataRule, mockData, 512, 512, null);
      response.Data = new Uint8Array(Object.values(response.Data));
      expect(response).toEqual(mockSemanticCellResponse);
    });

    it('throws error if data is missing', async () => {
      await expect(apiViewSemanticCellSdk.process('Unknown', mockMetadataRule, null)).rejects.toThrow(
        'No data supplied for semantic cell extraction.'
      );
    });

    it('throws error if MetadataRule is missing', async () => {
      await expect(apiViewSemanticCellSdk.process('Unknown', null, mockData)).rejects.toThrow(
        'ArgumentNullException: mdRule is null or empty'
      );
    });
  });
});
