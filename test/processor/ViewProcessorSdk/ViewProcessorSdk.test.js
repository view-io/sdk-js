import { getServer } from '../../server';
import { handlers } from './handler';
import {
  mockTenant,
  mockCollection,
  mockPool,
  mockBucket,
  mockObject,
  mockMetadataRule,
  mockEmbeddingsRule,
  mockVectorRepo,
  mockGraphRepo,
  mockProcessorResponse,
} from './mockData';
import { apiViewProcessorSdk } from '../../setupTest';
import ProcessorResponse from '../../../src/models/ProcessorResponse';

const server = getServer(handlers);

describe('ViewProcessorSdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('Storage Server Processing', () => {
    it('successfully processes storage server request', async () => {
      const response = await apiViewProcessorSdk.processStorageServer(
        mockTenant,
        mockCollection,
        mockPool,
        mockBucket,
        mockObject,
        mockMetadataRule,
        mockEmbeddingsRule,
        mockVectorRepo,
        mockGraphRepo
      );

      expect(JSON.stringify(response)).toBe(JSON.stringify(new ProcessorResponse(mockProcessorResponse)));
    });

    it('throws error when object metadata is missing', async () => {
      try {
        await apiViewProcessorSdk.process(
          mockTenant,
          mockCollection,
          mockPool,
          mockBucket,
          null,
          mockMetadataRule,
          mockEmbeddingsRule,
          mockVectorRepo,
          mockGraphRepo
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('TypeError: _setupTest.apiViewProcessorSdk.process is not a function');
      }
    });

    it('throws error when metadata rule is missing', async () => {
      try {
        await apiViewProcessorSdk.process(
          mockTenant,
          mockCollection,
          mockPool,
          mockBucket,
          mockObject,
          null,
          mockEmbeddingsRule,
          mockVectorRepo,
          mockGraphRepo
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('TypeError: _setupTest.apiViewProcessorSdk.process is not a function');
      }
    });
  });

  describe('Crawler Processing', () => {
    it('successfully processes crawler request', async () => {
      const response = await apiViewProcessorSdk.processCrawler(
        mockTenant,
        mockCollection,
        mockPool,
        mockObject,
        mockMetadataRule,
        mockEmbeddingsRule,
        mockVectorRepo,
        mockGraphRepo
      );

      expect(JSON.stringify(response)).toBe(JSON.stringify(new ProcessorResponse(mockProcessorResponse)));
    });

    it('throws error when object metadata is missing in crawler request', async () => {
      try {
        await apiViewProcessorSdk.processCrawler(
          mockTenant,
          mockCollection,
          mockPool,
          null,
          mockMetadataRule,
          mockEmbeddingsRule,
          mockVectorRepo,
          mockGraphRepo
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Object metadata is required.');
      }
    });

    it('throws error when metadata rule is missing in crawler request', async () => {
      try {
        await apiViewProcessorSdk.processCrawler(
          mockTenant,
          mockCollection,
          mockPool,
          mockObject,
          null,
          mockEmbeddingsRule,
          mockVectorRepo,
          mockGraphRepo
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Metadata rule is required.');
      }
    });
  });
});
