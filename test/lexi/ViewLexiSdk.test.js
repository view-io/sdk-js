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
  mockSearchenumeratedata,
  mockSeachEnumerationResult,
  ingestqueueResponse,
  ingestqueueID,
} from './mockData';
import { apiViewLexiSdk as api } from '../setupTest';

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
      const data = await api.collections.read(mockCollectionGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(collectionsData[mockCollectionGuid]);
    });

    it('throws error when missing guid while retrieving a Collection', async () => {
      try {
        await api.collections.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('retrieves all Collection', async () => {
      const data = await api.collections.readAll();
      expect(data).toBeDefined();
      data.map((collection) => {
        expect(collection).toBeDefined();
        expect(collection).toEqual(collectionsData[collection.GUID]);
      });
    });

    it('creates a CollectionMetadata', async () => {
      const data = await api.collections.create({
        TenantGUID: 'default',
        Name: 'My first collection',
        AdditionalData: 'Created by setup',
      });
      expect(data).toBeDefined();
      expect(data).toEqual(collectionsData[mockCollectionGuid]);
    });

    it('throws error when creating a Collection with missing parameters', async () => {
      try {
        await api.collections.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collection is null or empty');
      }
    });

    it('deletes a CollectionMetadata', async () => {
      const data = await api.collections.delete(mockCollectionGuid);
      expect(data).toBe(true);
    });
    // issue: max-keys
    //retrieveTopTerms
    // it('returns top terms', async () => {
    //   const data = await api.retrieveTopTerms(mockCollectionGuid, MaxKeys);
    //   // expect(data).toBe("true"); // Adjust based on the expected output of the method
    // });
    it('throws error when checking if a Collection exists', async () => {
      await expect(api.collections.readTopTerms()).rejects.toThrow(Error);
    });
    //collectionExists
    it('returns true if the collection exists', async () => {
      const data = await api.collections.exists(mockCollectionGuid);
      expect(data).toBe(true); // Adjust based on the expected output of the method
    });
    it('throws error when checking if a Collection exists', async () => {
      await expect(api.collections.exists()).rejects.toThrow(Error);
    });
    //sourceDocumentsExists
    it('returns true if the source document exists', async () => {
      const data = await api.sourceDocument.exists(mockCollectionGuid, mockDocumentGuid);
      expect(data).toBe(true); // Adjust based on the expected output of the method
    });
    it('throws error when checking if a Source Document exists', async () => {
      await expect(api.sourceDocument.exists()).rejects.toThrow(Error);
    });

    it('throws error when missing guid while deleting a Collection', async () => {
      try {
        await api.collections.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('retrieve Collection Statistics', async () => {
      const data = await api.collections.readStatistics(mockCollectStatisticsGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(collectionStatisticsMockResponse);
    });
  });

  describe('SourceDocument', () => {
    it('retrieves a SourceDocument', async () => {
      const data = await api.sourceDocument.read(mockCollectionGuid, mockDocumentGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(mockSourceDocument[mockDocumentGuid]);
    });

    it('throws error when missing guid while retrieving a SourceDocument', async () => {
      try {
        await api.sourceDocument.read(mockCollectionGuid);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('retrieves all Documents for a Collection', async () => {
      const data = await api.sourceDocument.readAll(mockCollectionGuid);
      data.map((document) => {
        expect(document).toBeDefined();
        expect(document).toEqual(mockSourceDocument[document.GUID]);
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
      const data = await api.sourceDocument.upload(newDocument);
      expect(data).toBeDefined();
      expect(data).toEqual(mockSourceDocument[mockDocumentGuid]);
    });

    it('throws error when creating a SourceDocument with missing parameters', async () => {
      try {
        await api.sourceDocument.upload();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: document is null or empty');
      }
    });

    it('deletes a document from a collection', async () => {
      const result = await api.sourceDocument.delete(mockCollectionGuid, mockDocumentGuid);
      expect(result).toBe(true);
    });

    it('throws an error when missing collectionGuid while deleting a document', async () => {
      try {
        await api.sourceDocument.delete(null, mockDocumentGuid);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('throws an error when missing documentGuid while deleting a document', async () => {
      try {
        await api.sourceDocument.delete(mockCollectionGuid, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: documentGuid is null or empty');
      }
    });

    it('deletes a document using key and version', async () => {
      const result = await api.sourceDocument.deleteFromKey(mockCollectionGuid, mockDocumentKey, mockDocVersionId);
      expect(result).toBe(true);
    });

    it('throws an error when missing collectionGuid while deleting document with key', async () => {
      try {
        await api.sourceDocument.deleteFromKey(null, mockDocumentKey, mockDocVersionId);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('throws an error when missing key while deleting document with key', async () => {
      try {
        await api.sourceDocument.deleteFromKey(mockCollectionGuid, null, mockDocVersionId);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: key is null or empty');
      }
    });

    it('throws an error when missing version while deleting document with key', async () => {
      try {
        await api.sourceDocument.deleteFromKey(mockCollectionGuid, mockDocumentKey, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: version is null or empty');
      }
    });

    // it('enumerates a collection', async () => {
    //   const result = await api.enumerate(mockCollectionGuid, mockEnumerateCollection);
    //   expect(result).toBeInstanceOf(EnumerationResult);
    //   expect(JSON.stringify(result)).toBe(JSON.stringify(new EnumerationResult(mockEnumerationResult)));
    // });

    it('throws an error when missing collectionGuid while enumerating', async () => {
      try {
        await api.sourceDocument.enumerate(null, mockEnumerateCollection);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('throws an error when missing query while enumerating', async () => {
      try {
        await api.sourceDocument.enumerate(mockCollectionGuid, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: query is null or empty');
      }
    });

    // it.only('searches a collection', async () => {
    //   const result = await api.searchCollectionDocuments(mockCollectionGuid, mockSearchCollection);
    //   expect(result).toBeInstanceOf(SearchResult);
    //   expect(JSON.stringify(result)).toBe(JSON.stringify(new SearchResult(mockSearchCollection)));
    // });

    it('throws an error when missing collectionGuid while searching', async () => {
      try {
        await api.searchCollection.searchDocuments(null, mockSearchCollection);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('throws an error when missing query while searching', async () => {
      try {
        await api.searchCollection.searchDocuments(mockCollectionGuid, null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: query is null or empty');
      }
    });
  });
  describe('search And Enumerate', () => {
    const collectionGuid = 'default2';
    it('should successfully enumerate documents with valid parameters', async () => {
      const data = await api.searchEnumrate.searchAndEnumerate(
        collectionGuid,
        { enumerate: true },
        mockSearchenumeratedata
      );
      expect(data).toBeDefined();
    });
    it('should successfully enumerate documents with valid parameters', async () => {
      const data = await api.searchEnumrate.searchAndEnumerate(
        collectionGuid,
        { enumerate: true },
        mockSearchenumeratedata
      );
      expect(data).toBeDefined();
    });
    it('should successfully search documents with valid parameters', async () => {
      const data = await api.searchEnumrate.searchAndEnumerate(
        collectionGuid,
        { search: true },
        mockSearchenumeratedata
      );
      expect(data).toBeDefined();
      expect(data).toEqual(mockSeachEnumerationResult);
    });
    it('should successfully sync documents with valid parameters', async () => {
      const data = await api.searchEnumrate.searchAndEnumerate(collectionGuid, { sync: true }, mockSearchenumeratedata);
      expect(data).toBeDefined();
      expect(data).toEqual(mockSeachEnumerationResult);
    });
    it('should successfully incldata documents with valid parameters', async () => {
      const data = await api.searchEnumrate.searchAndEnumerate(
        collectionGuid,
        { incldata: true },
        mockSearchenumeratedata
      );
      expect(data).toBeDefined();
      expect(data).toEqual(mockSeachEnumerationResult);
    });
    it('should successfully async documents with valid parameters', async () => {
      const data = await api.searchEnumrate.searchAndEnumerate(
        collectionGuid,
        { async: true },
        mockSearchenumeratedata
      );
      expect(data).toBeDefined();
      expect(data).toEqual(mockSeachEnumerationResult);
    });
    it('throws an error when missing collectionGuid while searching', async () => {
      try {
        await api.searchEnumrate.searchAndEnumerate(null, { async: true }, mockSearchenumeratedata);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });
  });
  describe('Ingest Queue', () => {
    it('successfully retrieve all Ingest Queue', async () => {
      const data = await api.ingestQueue.readAll();
      expect(data).toBeDefined();
      expect(data).toEqual(ingestqueueResponse);
    });
    it('successfully retrieve Ingest Queue by guid', async () => {
      const data = await api.ingestQueue.read(ingestqueueID);
      expect(data).toBeDefined();
      expect(data).toEqual(ingestqueueResponse[0]);
    });
  });
});
