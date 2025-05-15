import EmbeddingsDocument from '../../../src/models/EmbeddingDocument';
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
} from './mockData';
import { handlers } from './handler';
import { getServer } from '../../server';
import EnumerationResult from '../../../src/models/EnumerationResult';
import CollectionStatistics from '../../../src/models/CollectionStatistics';
import SemanticCell from '../../../src/models/SemanticCell';
import SemanticChunk from '../../../src/models/SemanticChunk';

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
        await apiViewVectorProxySdk.writeDocument(null);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: doc is null or empty');
      }
    });

    it('should successfully write the document', async () => {
      console.log('mockDocument:', JSON.stringify(mockDocument, null, 2));
      console.log('mockDocument.VectorRepositoryGUID:', mockDocument.VectorRepositoryGUID);
      const result = await apiViewVectorProxySdk.writeDocument(mockDocument);
      expect(result).toEqual(expect.arrayContaining([expect.any(EmbeddingsDocument)]));
    });

    it('should throw an error if the get request is null', async () => {
      try {
        await apiViewVectorProxySdk.readDocument(VectorRepositoryGUID, null);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('should successfully read a document', async () => {
      const result = await apiViewVectorProxySdk.readDocument(VectorRepositoryGUID, mockDocumentGUID);
      expect(result).toBeInstanceOf(EmbeddingsDocument);
    });

    it('should throw an error if the delete request is null', async () => {
      try {
        await apiViewVectorProxySdk.deleteDocument(VectorRepositoryGUID, null);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('should successfully delete a document', async () => {
      const result = await apiViewVectorProxySdk.deleteDocument(VectorRepositoryGUID, mockDocumentGUID);
      expect(result).toBe(true);
    });

    it('should throw an error if the exist request is null', async () => {
      try {
        await apiViewVectorProxySdk.documentExists(VectorRepositoryGUID, null);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('should successfully check if a document exists', async () => {
      const result = await apiViewVectorProxySdk.documentExists(VectorRepositoryGUID, mockDocumentGUID);
      expect(result).toBe('true');
    });
  });
  // describe('truncateTable', () => {
  //   it('should throw an error if the delete request is null', async () => {
  //     try {
  //       await apiViewVectorProxySdk.truncateTable(null);
  //     } catch (error) {
  //       expect(error).toBeInstanceOf(Error);
  //       expect(error.message).toBe('ArgumentNullException: delReq is null or empty');
  //     }
  //   });

  //   it('should successfully truncate the table', async () => {
  //     const result = await apiViewVectorProxySdk.truncateTable(mockDeleteRequest);
  //     expect(result).toBe('true'); // assuming successful truncation returns true
  //   });
  // });

  // describe('enumerateTable', () => {
  //   it('should throw an error if the query is null', async () => {
  //     try {
  //       await apiViewVectorProxySdk.enumerateTable(null);
  //     } catch (error) {
  //       expect(error).toBeInstanceOf(Error);
  //       expect(error.message).toBe('ArgumentNullException: query is null or empty');
  //     }
  //   });

  //   it('should successfully enumerate the table', async () => {
  //     const result = await apiViewVectorProxySdk.enumerateTable(mockQuery);
  //     expect(result).toEqual(expect.any(Object)); // assuming result is of type EnumerationResult
  //   });
  // });

  // describe('similaritySearch', () => {
  //   it('should throw an error if the search request is null', async () => {
  //     try {
  //       await apiViewVectorProxySdk.similaritySearch(null);
  //     } catch (error) {
  //       expect(error).toBeInstanceOf(Error);
  //       expect(error.message).toBe('ArgumentNullException: searchReq is null or empty');
  //     }
  //   });

  //   it('should successfully perform similarity search', async () => {
  //     try {
  //       const result = await apiViewVectorProxySdk.similaritySearch(mockSearchRequest);
  //       console.log('Test result:', result); // Log the result for debugging
  //       expect(result).toEqual(expect.arrayContaining([expect.any(EmbeddingsDocument)]));
  //     } catch (error) {
  //       console.error('Test failed with error:', error); // Log any errors that occur
  //       throw error; // Re-throw the error to ensure Jest handles it
  //     }
  //   });
  // });

  // describe('rawQuery', () => {
  //   it('should throw an error if the query request is null', async () => {
  //     try {
  //       await apiViewVectorProxySdk.rawQuery(null);
  //     } catch (error) {
  //       expect(error).toBeInstanceOf(Error);
  //       expect(error.message).toBe('ArgumentNullException: queryReq is null or empty');
  //     }
  //   });

  //   it('should successfully perform raw query', async () => {
  //     const result = await apiViewVectorProxySdk.rawQuery(mockQueryRequest);
  //     expect(result).toBe(''); // assuming the query returns null or string
  //   });
  // });

  describe('search', () => {
    it('should successfully perform search', async () => {
      const result = await apiViewVectorProxySdk.vectorSearch(VectorRepositoryGUID, mockSearchRequest);
      expect(result).not.toBeNull();
    });
  });

  describe('dataRepository', () => {
    it('should  perform enumerate Repository', async () => {
      const result = await apiViewVectorProxySdk.enumerateVectorRepositories(mockEnumerateRequest);
      expect(result).toBeInstanceOf(EnumerationResult);
    });

    it('should  perform statistics', async () => {
      const result = await apiViewVectorProxySdk.retrieveVectorRepositoryStatistics(VectorRepositoryGUID);
      expect(result).toBeInstanceOf(CollectionStatistics);
    });

    it('should  perform delete Repository', async () => {
      const result = await apiViewVectorProxySdk.deleteVectorRepository(VectorRepositoryGUID);
      expect(result).toBe(true);
    });
  });
  ``;
  describe('semanticCell', () => {
    it('read Semantic Cells', async () => {
      const result = await apiViewVectorProxySdk.retrieveSemanticCells(VectorRepositoryGUID, mockDocumentGUID);
      result.forEach((cell) => {
        expect(cell instanceof SemanticCell).toBe(true);
      });
    });

    it('get Semantic Cell', async () => {
      const result = await apiViewVectorProxySdk.retrieveSemanticCell(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid
      );
      expect(result instanceof SemanticCell).toBe(true);
    });

    it('exists Semantic Cell', async () => {
      const result = await apiViewVectorProxySdk.semanticCellExists(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid
      );
      expect(result).toBe('true');
    });
  });

  describe('semanticChunks', () => {
    it('read Semantic Chunks', async () => {
      const result = await apiViewVectorProxySdk.retrieveSemanticChunks(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid
      );
      result.forEach((chunk) => {
        expect(chunk instanceof SemanticChunk).toBe(true);
      });
    });

    it('get Semantic Chunk', async () => {
      const result = await apiViewVectorProxySdk.retrieveSemanticChunk(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid,
        mockSemanticChunkGuid
      );
      expect(result instanceof SemanticChunk).toBe(true);
    });

    it('exists Semantic Chunk', async () => {
      const result = await apiViewVectorProxySdk.semanticChunkExists(
        VectorRepositoryGUID,
        mockDocumentGUID,
        mockSemanticCellGuid,
        mockSemanticChunkGuid
      );
      expect(result).toBe('true');
    });
  });
});
