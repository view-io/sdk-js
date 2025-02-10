import EmbeddingsDocument from '../../../src/models/EmbeddingsDocument';
import { apiViewVectorProxySdk } from '../../setupTest';
import { mockDocument, mockQuery, mockDeleteRequest, mockSearchRequest, mockQueryRequest, mockEnumerateRequest, VectorRepositoryGUID, mockDocumentGUID, mockSemanticCellGuid, mockSemanticChunkGuid } from './mockData';
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
        expect(error.message).toBe('ArgumentNullException: document is null or empty');
      }
    });

    it('should successfully write the document', async () => {
      console.log('mockDocument:', JSON.stringify(mockDocument, null, 2));
      console.log('mockDocument.VectorRepositoryGUID:', mockDocument.VectorRepositoryGUID);
      const result = await apiViewVectorProxySdk.writeDoc(mockDocument);
      expect(result).toEqual(expect.arrayContaining([expect.any(EmbeddingsDocument)]));
    });

    it('should throw an error if the get request is null', async () => {
      try {
        await apiViewVectorProxySdk.readDoc(null, VectorRepositoryGUID);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('should successfully read a document', async () => {
      const result = await apiViewVectorProxySdk.readDoc(mockDocumentGUID, VectorRepositoryGUID);
      expect(result).toBeInstanceOf(EmbeddingsDocument);
    });

    it('should throw an error if the delete request is null', async () => {
      try {
        await apiViewVectorProxySdk.deleteDocument(null, VectorRepositoryGUID);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: delReq is null or empty');
      }
    });

    it('should successfully delete a document', async () => {
      const result = await apiViewVectorProxySdk.deleteDoc(mockDocumentGUID, VectorRepositoryGUID);
      expect(result).toBe('true');
    });

    it('should throw an error if the exist request is null', async () => {
      try {
        await apiViewVectorProxySdk.documentExists(null, VectorRepositoryGUID);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('should successfully check if a document exists', async () => {
      const result = await apiViewVectorProxySdk.documentExists(mockDocumentGUID, VectorRepositoryGUID);
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
      const result = await apiViewVectorProxySdk.vectorSearch(mockSearchRequest);
      expect(result).toEqual(expect.arrayContaining([expect.any(EmbeddingsDocument)]));
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
      expect(result).toBe('true');
    });
  });
  ``
  describe('semanticCell', () => {
    it('read Semantic Cells', async () => {
      const result = await apiViewVectorProxySdk.getSemanticCells(mockDocumentGUID, VectorRepositoryGUID);
      result.forEach((cell) => {
        expect(cell instanceof SemanticCell).toBe(true);
      });
    });

    it('get Semantic Cell', async () => {
      const result = await apiViewVectorProxySdk.getSemanticCell(mockSemanticCellGuid, mockDocumentGUID, VectorRepositoryGUID);
      expect(result instanceof SemanticCell).toBe(true);
    });

    it('exists Semantic Cell', async () => {
      const result = await apiViewVectorProxySdk.semanticCellExists(mockSemanticCellGuid, mockDocumentGUID, VectorRepositoryGUID);
      expect(result).toBe('true');
    });
  });


  describe('semanticChunks', () => {
    it('read Semantic Chunks', async () => {
      const result = await apiViewVectorProxySdk.getSemanticChunks(mockSemanticCellGuid, mockDocumentGUID, VectorRepositoryGUID);
      result.forEach((chunk) => {
        expect(chunk instanceof SemanticChunk).toBe(true);
      });
    });

    it('get Semantic Chunk', async () => {
      const result = await apiViewVectorProxySdk.getSemanticChunk(mockSemanticChunkGuid, mockSemanticCellGuid, mockDocumentGUID, VectorRepositoryGUID);
      expect(result instanceof SemanticChunk).toBe(true);
    });

    it('exists Semantic Chunk', async () => {
      const result = await apiViewVectorProxySdk.semanticChunkExists(mockSemanticChunkGuid, mockSemanticCellGuid, mockDocumentGUID, VectorRepositoryGUID);
      expect(result).toBe('true');
    });

  });

});