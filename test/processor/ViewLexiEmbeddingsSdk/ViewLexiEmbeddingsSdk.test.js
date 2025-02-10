import { getServer } from '../../server';
import { handlers } from './handler';
import {
  mockTenant,
  mockCollection,
  mockSearchResult,
  mockEmbeddingsRule,
  mockVectorRepo,
  mockGraphRepo,
  mockLexiEmbeddingsResponse,
} from './mockData';
import { apiViewLexiEmbeddingsSdk } from '../../setupTest';
import LexiEmbeddingsResponse from '../../../src/models/LexiEmbeddingsResponse';

const server = getServer(handlers);

describe('ViewLexiEmbeddingsSdk', () => {
  jest.setTimeout(30000);
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('Embeddings Processing', () => {
    it('successfully processes embeddings request', async () => {
      const response = await apiViewLexiEmbeddingsSdk.processLexiEmbeddings(
        mockTenant,
        mockCollection,
        mockSearchResult,
        mockEmbeddingsRule,
        mockVectorRepo,
        mockGraphRepo
      );

      expect(JSON.stringify(response)).toBe(JSON.stringify(new LexiEmbeddingsResponse(mockLexiEmbeddingsResponse)));
    });

    it('throws error when search results are missing', async () => {
      try {
        await apiViewLexiEmbeddingsSdk.processLexiEmbeddings(
          mockTenant,
          mockCollection,
          null,
          mockEmbeddingsRule,
          mockVectorRepo,
          mockGraphRepo
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Search results are required.');
      }
    });

    it('throws error when embeddings rule is missing', async () => {
      try {
        await apiViewLexiEmbeddingsSdk.processLexiEmbeddings(
          mockTenant,
          mockCollection,
          mockSearchResult,
          null,
          mockVectorRepo,
          mockGraphRepo
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Embeddings rule is required.');
      }
    });

    it('throws error when vector repository is missing', async () => {
      try {
        await apiViewLexiEmbeddingsSdk.processLexiEmbeddings(
          mockTenant,
          mockCollection,
          mockSearchResult,
          mockEmbeddingsRule,
          null,
          mockGraphRepo
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Vector repository is required.');
      }
    });

    it('throws error when graph repository is missing', async () => {
      try {
        await apiViewLexiEmbeddingsSdk.processLexiEmbeddings(
          mockTenant,
          mockCollection,
          mockSearchResult,
          mockEmbeddingsRule,
          mockVectorRepo,
          null
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Graph repository is required.');
      }
    });

    it('throws error when tenant is missing', async () => {
      try {
        await apiViewLexiEmbeddingsSdk.processLexiEmbeddings(
          null,
          mockCollection,
          mockSearchResult,
          mockEmbeddingsRule,
          mockVectorRepo,
          mockGraphRepo
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Tenant is required.');
      }
    });

    it('throws error when collection is missing', async () => {
      jest.setTimeout(30000);
      try {
        await apiViewLexiEmbeddingsSdk.processLexiEmbeddings(
          mockTenant,
          null,
          mockSearchResult,
          mockEmbeddingsRule,
          mockVectorRepo,
          mockGraphRepo
        );
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Collection is required.');
      }
    });
  });
});
