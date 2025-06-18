import { apiViewVectorProxySdk } from '../../setupTest';
import {
  mockDocument,
  mockSearchRequest,
  mockEnumerateRequest,
  VectorRepositoryGUID,
  mockDocumentGUID,
  mockSemanticCellGuid,
  mockSemanticChunkGuid,
  mockSearchResult,
  mockStatisticsResponse,
  mockSemanticCell,
  mockSemanticChunk,
  mockEnumerateResult,
} from './mockData';
import { handlers } from './handler';
import { getServer } from '../../server';

const server = getServer(handlers);

describe('ViewVectorProxySdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('document', () => {
    it('should throw an error if the document is null', async () => {
      try {
        await apiViewVectorProxySdk.Document.write(null);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: doc is null or empty');
      }
    });

    it('should successfully write the document', async () => {
      const result = await apiViewVectorProxySdk.Document.write(mockDocument);
      expect(result).toBeDefined();
      expect(result).toEqual([mockDocument]);
    });

    it('should throw an error if the get request is null', async () => {
      try {
        await apiViewVectorProxySdk.Document.read(VectorRepositoryGUID, null);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('should successfully read a document', async () => {
      const result = await apiViewVectorProxySdk.Document.read(VectorRepositoryGUID, mockDocumentGUID);
      expect(result).toBeDefined();
      expect(result).toEqual(mockDocument);
    });

    it('should throw an error if the delete request is null', async () => {
      try {
        await apiViewVectorProxySdk.Document.delete(VectorRepositoryGUID, null);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('should successfully delete a document', async () => {
      const result = await apiViewVectorProxySdk.Document.delete(VectorRepositoryGUID, mockDocumentGUID);
      expect(result).toBe(true);
    });

    it('should throw an error if the exist request is null', async () => {
      try {
        await apiViewVectorProxySdk.Document.exists(VectorRepositoryGUID, null);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('should successfully check if a document exists', async () => {
      const result = await apiViewVectorProxySdk.Document.exists(VectorRepositoryGUID, mockDocumentGUID);
      expect(result).toBe(true);
    });
  });

  describe('search', () => {
    it('should successfully perform search', async () => {
      const result = await apiViewVectorProxySdk.VectorSearch.vectorSearch(VectorRepositoryGUID, mockSearchRequest);
      expect(result).not.toBeNull();
    });
  });

  describe('dataRepository', () => {
    it('should  perform enumerate Repository', async () => {
      const result = await apiViewVectorProxySdk.VectorRepositories.enumerate(mockEnumerateRequest);
      expect(result).toBeDefined();
      expect(result).toEqual(mockEnumerateResult);
    });

    it('should  perform statistics', async () => {
      const result = await apiViewVectorProxySdk.VectorRepositories.readStatistics(VectorRepositoryGUID);
      expect(result).toBeDefined();
      expect(result).toEqual(mockStatisticsResponse);
    });

    it('should  perform delete Repository', async () => {
      const result = await apiViewVectorProxySdk.VectorRepositories.delete(VectorRepositoryGUID);
      expect(result).toBe(true);
    });
  });

  describe('semanticCell', () => {
    it('read Semantic Cells', async () => {
      const result = await apiViewVectorProxySdk.SemanticCell.readAll(VectorRepositoryGUID, mockDocumentGUID);
      expect(result).toBeDefined();
      expect(result).toEqual(mockSemanticCell);
    });

    it('get Semantic Cell', async () => {
      const result = await apiViewVectorProxySdk.SemanticCell.read(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid
      );
      expect(result).toBeDefined();
      expect(result).toEqual(mockSemanticCell[0]);
    });

    it('exists Semantic Cell', async () => {
      const result = await apiViewVectorProxySdk.SemanticCell.exists(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid
      );
      expect(result).toBe(true);
    });
  });

  describe('semanticChunks', () => {
    it('read Semantic Chunks', async () => {
      const result = await apiViewVectorProxySdk.SemanticChunk.readAll(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid
      );
      expect(result).toBeDefined();
      expect(result).toEqual(mockSemanticChunk);
    });

    it('get Semantic Chunk', async () => {
      const result = await apiViewVectorProxySdk.SemanticChunk.read(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid,
        mockSemanticChunkGuid
      );
      expect(result).toBeDefined();
      expect(result).toEqual(mockSemanticChunk[0]);
    });

    it('exists Semantic Chunk', async () => {
      const result = await apiViewVectorProxySdk.SemanticChunk.exists(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid,
        mockSemanticChunkGuid
      );
      expect(result).toBe(true);
    });
  });
});
