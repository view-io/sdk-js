import { getServer } from '../server';
import { handlers } from './handlers';
import {
  mockCollectionGuid,
  mockDocumentGuid,
  mockSourceDocument,
  collectionStatisticsMockResponse,
  collectionsData,
  mockEnumerateCollection,
  mockDocVersionId,
  mockDocumentKey,
  mockCollectStatisticsGuid,
  mockSearchCollection,
  mockEnumerationResult,
  MaxKeys,
  mockSearchenumeratedata,
} from './mockData';
import { apiViewLexiSdk } from '../setupTest';
import Collection from '../../src/models/Collection';
import CollectionStatistics from '../../src/models/CollectionStatistics';
import EnumerationResult from '../../src/models/EnumerationResult';
import SourceDocument from '../../src/models/SourceDocument';
import SearchResult from '../../src/models/SearchResult';
import IngestQueue from '../../src/models/IngestQueue';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('Collection', () => {
    it('retrieves a Collection', async () => {
      const data = await apiViewLexiSdk.retrieveCollection(mockCollectionGuid);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new Collection(collectionsData[mockCollectionGuid])));
    });

    it('throws error when missing guid while retrieving a Collection', async () => {
      try {
        await apiViewLexiSdk.retrieveCollection();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Parameter "collectionGuid" is required and cannot be empty.');
      }
    });

    it('retrieves all Collection', async () => {
      const data = await apiViewLexiSdk.retrieveCollections();
      data.forEach((collection, index) => {
        const expected = new Collection(Object.values(collectionsData)[index]);
        expect(JSON.stringify(collection)).toBe(JSON.stringify(expected));
      });
    });

    it('creates a CollectionMetadata', async () => {
      const data = await apiViewLexiSdk.createCollection({
        TenantGUID: 'default',
        Name: 'My first collection',
        AdditionalData: 'Created by setup',
      });
      expect(true).toBe(data instanceof Collection);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new Collection(collectionsData[mockCollectionGuid])));
    });

    it('throws error when creating a Collection with missing parameters', async () => {
      try {
        await apiViewLexiSdk.createCollection();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collection is null or empty');
      }
    });

    it('deletes a CollectionMetadata', async () => {
      const data = await apiViewLexiSdk.deleteCollection(mockCollectionGuid);
      expect(data).toBe(true);
    });
    // issue: max-keys
    //retrieveTopTerms
    // it('returns top terms', async () => {
    //   const data = await apiViewLexiSdk.retrieveTopTerms(mockCollectionGuid, MaxKeys);
    //   // expect(data).toBe("true"); // Adjust based on the expected output of the method
    // });
    it('throws error when checking if a Collection exists', async () => {
      await expect(apiViewLexiSdk.retrieveCollectionTopTerms()).rejects.toThrow(Error);
    });
    //collectionExists
    it('returns true if the collection exists', async () => {
      const data = await apiViewLexiSdk.collectionExists(mockCollectionGuid);
      expect(data).toBe('true'); // Adjust based on the expected output of the method
    });
    it('throws error when checking if a Collection exists', async () => {
      await expect(apiViewLexiSdk.collectionExists()).rejects.toThrow(Error);
    });
    //sourceDocumentsExists
    it('returns true if the source document exists', async () => {
      const data = await apiViewLexiSdk.sourceDocumentsExists(mockCollectionGuid, mockDocumentGuid);
      expect(data).toBe('true'); // Adjust based on the expected output of the method
    });
    it('throws error when checking if a Source Document exists', async () => {
      await expect(apiViewLexiSdk.sourceDocumentsExists()).rejects.toThrow(Error);
    });

    it('throws error when missing guid while deleting a Collection', async () => {
      try {
        await apiViewLexiSdk.deleteCollection();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('retrieve Collection Statistics', async () => {
      const data = await apiViewLexiSdk.retrieveCollectionStatistics(mockCollectStatisticsGuid);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new CollectionStatistics(collectionStatisticsMockResponse)));
    });
  });

  describe('SourceDocument', () => {
    it('retrieves a SourceDocument', async () => {
      const data = await apiViewLexiSdk.retrieveSourceDocument(mockCollectionGuid, mockDocumentGuid);
      expect(data instanceof SourceDocument).toBe(true);

      // Compare the received data with the mock data
      const expectedData = new SourceDocument(mockSourceDocument[mockDocumentGuid]);
      expect(JSON.stringify(data)).toBe(JSON.stringify(expectedData));
    });

    it('throws error when missing guid while retrieving a SourceDocument', async () => {
      try {
        await apiViewLexiSdk.retrieveSourceDocument(mockCollectionGuid);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('retrieves all Documents for a Collection', async () => {
      const data = await apiViewLexiSdk.retrieveSourceDocuments(mockCollectionGuid);
      data.forEach((document, index) => {
        const expected = new SourceDocument(Object.values(mockSourceDocument)[index]);
        expect(JSON.stringify(document)).toBe(JSON.stringify(expected));
      });
    });

    it('upload a SourceDocument', async () => {
      const newDocument = {
        TenantGUID: 'default',
        CollectionGUID: 'default',
        ObjectKey: 'blake.json',
        ObjectVersion: '1',
        ObjectGUID: 'default',
        ContentType: 'application/json',
        DocumentType: 'JSON',
        SourceUrl: 'http://localhost:9000/tenants/default/buckets/data/objects/sample.json',
        UdrDocument: {
          Success: true,
          AdditionalData: 'My additional data',
          Metadata: {
            Foo: 'Bar',
          },
          Key: 'sample.json',
          TypeResult: {
            MimeType: 'application/json',
            Extension: 'json',
            Type: 'Json',
          },
          Terms: ['message', 'node', 'operational'],
          TopTerms: {
            message: 1,
            node: 1,
            operational: 1,
          },
          Postings: [
            {
              Term: 'your',
              Count: 2,
              AbsolutePositions: [0],
              RelativePositions: [0],
            },
            {
              Term: 'node',
              Count: 2,
              AbsolutePositions: [1],
              RelativePositions: [1],
            },
            {
              Term: 'operational',
              Count: 2,
              AbsolutePositions: [2],
              RelativePositions: [2],
            },
          ],
          Schema: {
            Type: 'Json',
            MaxDepth: 1,
            NumObjects: 1,
            NumArrays: 0,
            NumKeyValues: 1,
            Schema: {
              root: 'Object',
              'root.Message': 'String',
            },
            Metadata: {
              Foo: 'Bar',
            },
            Flattened: [
              {
                Key: 'root',
                Type: 'Object',
              },
              {
                Key: 'root.Message',
                Type: 'String',
                Data: 'Your node is operational!',
              },
            ],
          },
        },
      };
      const data = await apiViewLexiSdk.uploadSourceDocument(newDocument);
      expect(true).toBe(data instanceof SourceDocument);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new SourceDocument(mockSourceDocument[mockDocumentGuid])));
    });

    it('throws error when creating a SourceDocument with missing parameters', async () => {
      try {
        await apiViewLexiSdk.uploadSourceDocument();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: document is null or empty');
      }
    });

    it('deletes a document from a collection', async () => {
      const result = await apiViewLexiSdk.deleteSourceDocument(mockCollectionGuid, mockDocumentGuid);
      expect(result).toBe(true);
    });

    it('throws an error when missing collectionGuid while deleting a document', async () => {
      try {
        await apiViewLexiSdk.deleteSourceDocument(null, mockDocumentGuid);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('throws an error when missing documentGuid while deleting a document', async () => {
      try {
        await apiViewLexiSdk.deleteSourceDocument(mockCollectionGuid, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('deletes a document using key and version', async () => {
      const result = await apiViewLexiSdk.deleteSourceDocumentFromKey(
        mockCollectionGuid,
        mockDocumentKey,
        mockDocVersionId
      );
      expect(result).toBe(true);
    });

    it('throws an error when missing collectionGuid while deleting document with key', async () => {
      try {
        await apiViewLexiSdk.deleteSourceDocumentFromKey(null, mockDocumentKey, mockDocVersionId);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('throws an error when missing key while deleting document with key', async () => {
      try {
        await apiViewLexiSdk.deleteSourceDocumentFromKey(mockCollectionGuid, null, mockDocVersionId);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: key is null or empty');
      }
    });

    it('throws an error when missing version while deleting document with key', async () => {
      try {
        await apiViewLexiSdk.deleteSourceDocumentFromKey(mockCollectionGuid, mockDocumentKey, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: version is null or empty');
      }
    });

    // it('enumerates a collection', async () => {
    //   const result = await apiViewLexiSdk.enumerate(mockCollectionGuid, mockEnumerateCollection);
    //   expect(result).toBeInstanceOf(EnumerationResult);
    //   expect(JSON.stringify(result)).toBe(JSON.stringify(new EnumerationResult(mockEnumerationResult)));
    // });

    it('throws an error when missing collectionGuid while enumerating', async () => {
      try {
        await apiViewLexiSdk.enumerateCollectionDocument(null, mockEnumerateCollection);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('throws an error when missing query while enumerating', async () => {
      try {
        await apiViewLexiSdk.enumerateCollectionDocument(mockCollectionGuid, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: query is null or empty');
      }
    });

    // it.only('searches a collection', async () => {
    //   const result = await apiViewLexiSdk.search(mockCollectionGuid, mockSearchCollection);
    //   expect(result).toBeInstanceOf(SearchResult);
    //   expect(JSON.stringify(result)).toBe(JSON.stringify(new SearchResult(mockSearchCollection)));
    // });

    it('throws an error when missing collectionGuid while searching', async () => {
      try {
        await apiViewLexiSdk.searchCollectionDocuments(null, mockSearchCollection);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('throws an error when missing query while searching', async () => {
      try {
        await apiViewLexiSdk.searchCollectionDocuments(mockCollectionGuid, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: query is null or empty');
      }
    });
  });
  describe('search And Enumerate', () => {
    const collectionGuid = 'default2';
    it('should successfully enumerate documents with valid parameters', async () => {
      const data = await apiViewLexiSdk.searchAndEnumerate(
        collectionGuid,
        { enumerate: true },
        mockSearchenumeratedata
      );
      expect(data).toBeInstanceOf(EnumerationResult);
    });
    it('should successfully enumerate documents with valid parameters', async () => {
      const data = await apiViewLexiSdk.searchAndEnumerate(
        collectionGuid,
        { enumerate: true },
        mockSearchenumeratedata
      );
      expect(data).toBeInstanceOf(EnumerationResult);
    });
    it('should successfully search documents with valid parameters', async () => {
      const data = await apiViewLexiSdk.searchAndEnumerate(collectionGuid, { search: true }, mockSearchenumeratedata);
      expect(data).toBeInstanceOf(EnumerationResult);
    });
    it('should successfully sync documents with valid parameters', async () => {
      const data = await apiViewLexiSdk.searchAndEnumerate(collectionGuid, { sync: true }, mockSearchenumeratedata);
      expect(data).toBeInstanceOf(EnumerationResult);
    });
    it('should successfully incldata documents with valid parameters', async () => {
      const data = await apiViewLexiSdk.searchAndEnumerate(collectionGuid, { incldata: true }, mockSearchenumeratedata);
      expect(data).toBeInstanceOf(EnumerationResult);
    });
    it('should successfully async documents with valid parameters', async () => {
      const data = await apiViewLexiSdk.searchAndEnumerate(collectionGuid, { async: true }, mockSearchenumeratedata);
      expect(data).toBeInstanceOf(EnumerationResult);
    });
    it('throws an error when missing collectionGuid while searching', async () => {
      try {
        await apiViewLexiSdk.searchAndEnumerate(null, { async: true }, mockSearchenumeratedata);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });
  });
  describe('Ingest Queue', () => {
    it('successfully retrieve all Ingest Queue', async () => {
      const data = await apiViewLexiSdk.retrieveAllIngestQueue();
      expect(data[0]).toBeInstanceOf(IngestQueue);
    });
    it('successfully retrieve Ingest Queue by guid', async () => {
      const data = await apiViewLexiSdk.retrieveIngestQueue('default');
      expect(data).toBeInstanceOf(IngestQueue);
    });
  });
});
