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
  mockDataRepo,
  mockCleanupResponse,
} from './mockData';
import { apiViewCleanupSdk } from '../../setupTest';
import CleanupResponse from '../../../src/models/CleanupResponse';

const server = getServer(handlers);

describe('View.IO Cleanup SDK', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('Storage Server Processing', () => {
    it('successfully cleanup storage server request', async () => {
      const response = await apiViewCleanupSdk.cleanupStorageServer(
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

      expect(JSON.stringify(response)).toBe(JSON.stringify(new CleanupResponse(mockCleanupResponse)));
    });

    it('throws error when object metadata is missing', async () => {
      try {
        await apiViewCleanupSdk.cleanupStorageServer(
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
        expect(err.toString()).toBe('Error: Object metadata is required.');
      }
    });

    it('throws error when metadata rule is missing', async () => {
      try {
        await apiViewCleanupSdk.cleanupStorageServer(
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
        expect(err.toString()).toBe('Error: Metadata rule is required.');
      }
    });
  });

  describe('Data Crawler Processing', () => {
    it('successfully processes data crawler request', async () => {
      const response = await apiViewCleanupSdk.cleanupDataCrawler(
        mockTenant,
        mockCollection,
        mockDataRepo,
        mockObject,
        mockMetadataRule,
        mockEmbeddingsRule,
        mockVectorRepo,
        mockGraphRepo
      );
      expect(JSON.stringify(response)).toBe(JSON.stringify(new CleanupResponse(mockCleanupResponse)));
    });

    it('throws error when object metadata is missing', async () => {
      try {
        await apiViewCleanupSdk.cleanupDataCrawler(
          mockTenant,
          mockCollection,
          mockDataRepo,
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

    it('throws error when metadata rule is missing', async () => {
      try {
        await apiViewCleanupSdk.cleanupDataCrawler(
          mockTenant,
          mockCollection,
          mockDataRepo,
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
