import { ViewLexiSdk } from 'view-sdk';

const api = new ViewLexiSdk(
  'http://view.homedns.org:8000', //endpoint
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default' //access token
);

api.config.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ';

//region collections

const createCollection = async () => {
  try {
    const collection = await api.collections.create({
      Name: 'My second collection',
      AdditionalData: 'Yet another collection',
      AllowOverwrites: true,
    });
    console.log(collection, 'Collection created successfully');
  } catch (error) {
    console.log(error, 'Error creating collection');
  }
};

// createCollection();

const retrieveCollections = async () => {
  try {
    const collections = await api.collections.readAll();
    console.log(collections, 'Collections retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving collections');
  }
};

// retrieveCollections();

const retrieveCollection = async () => {
  try {
    const collection = await api.collections.read('00000000-0000-0000-0000-000000000000');
    console.log(collection, 'Collection retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving collection');
  }
};

// retrieveCollection();

const enumerateCollectionDocuments = async () => {
  try {
    const collection = await api.sourceDocument.enumerate('00000000-0000-0000-0000-000000000000', {
      maxResults: 100,
      continuationToken: '',
      ordering: 'CreatedAscending' as any,
      filters: [
        {
          field: 'ObjectKey',
          condition: 'IsNotNull',
          value: '',
        },
      ],
    } as any);
    console.log(collection, 'Collection enumerated successfully');
  } catch (error) {
    console.log(error, 'Error enumerating collection');
  }
};

// enumerateCollectionDocuments();

const readTopTerms = async () => {
  try {
    const topTerms = await api.collections.readTopTerms('00000000-0000-0000-0000-000000000000');
    console.log(topTerms, 'Top terms retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving top terms');
  }
};

// readTopTerms();

const readCollectionStatistics = async () => {
  try {
    const statistics = await api.collections.readStatistics('00000000-0000-0000-0000-000000000000');
    console.log(statistics, 'Collection statistics retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving collection statistics');
  }
};

// readCollectionStatistics();

const existsCollection = async () => {
  try {
    const exists = await api.collections.exists('00000000-0000-0000-0000-000000000000');
    console.log(exists, 'Collection exists successfully');
  } catch (error) {
    console.log(error, 'Error checking collection existence');
  }
};

// existsCollection();

const searchCollectionDocuments = async () => {
  try {
    const search = await api.searchCollection.searchDocuments('00000000-0000-0000-0000-000000000000', {
      maxResults: 100,
      continuationToken: '',
      ordering: 'CreatedAscending' as any,
      filter: {
        createdAfter: new Date('2025-01-01 00:00:00.000000'),
        createdBefore: new Date('2026-01-01 00:00:00.000000'),
        terms: ['view'],
        mimeTypes: [],
        prefixes: [],
        suffixes: [],
        schemaFilters: [],
      },
    } as any);
    console.log(search, 'Search completed successfully');
  } catch (error) {
    console.log(error, 'Error searching collection documents');
  }
};

// searchCollectionDocuments();

const searchCollectionAndIncludeData = async () => {
  try {
    const search = await api.searchCollection.searchDocuments(
      '00000000-0000-0000-0000-000000000000',
      {
        maxResults: 100,
        continuationToken: '',
        ordering: 'CreatedAscending' as any,
        filter: {
          createdAfter: new Date('2025-01-01 00:00:00.000000'),
          createdBefore: new Date('2026-01-01 00:00:00.000000'),
          terms: ['view'],
          mimeTypes: [],
          prefixes: [],
          suffixes: [],
          schemaFilters: [],
        },
      } as any,
      true
    );
    console.log(search, 'Search completed successfully');
  } catch (error) {
    console.log(error, 'Error searching collection documents');
  }
};

// searchCollectionAndIncludeData();

const searchCollectionAndIncludeTopTerms = async () => {
  try {
    const search = await api.searchCollection.searchDocuments(
      '00000000-0000-0000-0000-000000000000',
      {
        maxResults: 100,
        continuationToken: '',
        ordering: 'CreatedAscending' as any,
        filter: {
          createdAfter: new Date('2025-01-01 00:00:00.000000'),
          createdBefore: new Date('2026-01-01 00:00:00.000000'),
          terms: ['view'],
          mimeTypes: [],
          prefixes: [],
          suffixes: [],
          schemaFilters: [],
        },
      } as any,
      true,
      true
    );
    console.log(search, 'Search completed successfully');
  } catch (error) {
    console.log(error, 'Error searching collection documents');
  }
};

// searchCollectionAndIncludeTopTerms();

const searchCollectionAndEmitResult = async () => {
  try {
    const search = await api.searchCollection.searchDocuments(
      '00000000-0000-0000-0000-000000000000',
      {
        maxResults: 100,
        continuationToken: '',
        ordering: 'CreatedAscending' as any,
      } as any,
      true,
      true,
      true
    );
    console.log(search, 'Search completed successfully');
  } catch (error) {
    console.log(error, 'Error searching collection documents');
  }
};

// searchCollectionAndEmitResult();

const deleteCollection = async () => {
  try {
    const deleted = await api.collections.delete('48d470c7-c926-456e-80b1-6ecbadc1040b');
    console.log(deleted, 'Collection deleted successfully');
  } catch (error) {
    console.log(error, 'Error deleting collection');
  }
};

// deleteCollection();

//endregion

// region source documents

const readSourceDocument = async () => {
  try {
    const sourceDocument = await api.sourceDocument.read(
      '00000000-0000-0000-0000-000000000000',
      '769879de-6282-41b2-a62b-d13795804b03'
    );
    console.log(sourceDocument, 'Source document retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving source document');
  }
};

// readSourceDocument();

const readSourceDocumentWithData = async () => {
  try {
    const sourceDocument = await api.sourceDocument.read(
      '00000000-0000-0000-0000-000000000000',
      '769879de-6282-41b2-a62b-d13795804b03',
      true
    );
    console.log(sourceDocument, 'Source document retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving source document');
  }
};

// readSourceDocumentWithData();

const readSourceDocumentTopTerms = async () => {
  try {
    const topTerms = await api.sourceDocument.readTopTerms(
      '00000000-0000-0000-0000-000000000000',
      '769879de-6282-41b2-a62b-d13795804b03'
    );
    console.log(topTerms, 'Top terms retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving top terms');
  }
};

// readSourceDocumentTopTerms();

const readSourceDocumentStatistics = async () => {
  try {
    const sourceDocumentStatistics = await api.sourceDocument.readStatistics(
      '00000000-0000-0000-0000-000000000000',
      '769879de-6282-41b2-a62b-d13795804b03'
    );
    console.log(sourceDocumentStatistics, 'Source document statistics retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving source document statistics');
  }
};

// readSourceDocumentStatistics();

const readAllSourceDocuments = async () => {
  try {
    const sourceDocuments = await api.sourceDocument.readAll('00000000-0000-0000-0000-000000000000');
    console.log(sourceDocuments, 'Source documents retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving source documents');
  }
};

// readAllSourceDocuments();

const uploadSourceDocument = async () => {
  try {
    const sourceDocument = await api.sourceDocument.upload({
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      CollectionGUID: '00000000-0000-0000-0000-000000000000',
      ObjectKey: 'blake.json',
      ObjectVersion: '1',
      ObjectGUID: '00000000-0000-0000-0000-000000000000',
      ContentType: 'application/json',
      DocumentType: 'Json' as any,
      SourceUrl: 'http://localhost:9000/tenants/default/buckets/data/objects/sample.json',
      UdrDocument: {
        GUID: '00000000-0000-0000-0000-000000000000',
        Timestamp: {
          Start: '2025-01-01 00:00:00.000000',
          End: '2025-01-01 00:00:00.000000',
          TotalMs: 0,
          Messages: {},
        },
        Type: 'Json' as any,
        SemanticCells: [],
        Success: true,
        AdditionalData: 'My additional data',
        Metadata: {
          Foo: 'Bar',
        },
        Key: 'sample.json',
        Terms: ['foo', 'bar', 'baz'],
        TopTerms: 1,
        Postings: [
          {
            Term: 'baz',
            Count: 2,
            AbsolutePositions: [0],
            RelativePositions: [0],
          },
          {
            Term: 'foo',
            Count: 2,
            AbsolutePositions: [1],
            RelativePositions: [1],
          },
          {
            Term: 'bar',
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
              Data: 'Your foo is bar baz!',
            },
          ],
        },
      },
    } as any);
    console.log(sourceDocument, 'Source document uploaded successfully');
  } catch (error) {
    console.log(error, 'Error uploading source document');
  }
};

// uploadSourceDocument();

const deleteSourceDocument = async () => {
  try {
    const deleted = await api.sourceDocument.delete(
      '00000000-0000-0000-0000-000000000000',
      '5264bf16-37df-4411-bb8c-61841181e4c2'
    );
    console.log(deleted, 'Source document deleted successfully');
  } catch (error) {
    console.log(error, 'Error deleting source document');
  }
};

// deleteSourceDocument();

const deleteSourceDocumentFromKey = async () => {
  try {
    const deleted = await api.sourceDocument.deleteFromKey(
      '00000000-0000-0000-0000-000000000000',
      'https://www.traegerforum.com/forums/traeger-recipes.27/',
      '1'
    );
    console.log(deleted, 'Source document deleted successfully');
  } catch (error) {
    console.log(error, 'Error deleting source document');
  }
};

// deleteSourceDocumentFromKey();

//endregion

//region ingest queue

const readIngestQueue = async () => {
  try {
    const ingestQueue = await api.ingestQueue.read('a373f91e-ac68-44b8-8a01-d4eaa1e8424c');
    console.log(ingestQueue, 'Ingest queue retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving ingest queue');
  }
};

// readIngestQueue();

const readIngetQueueStatistics = async () => {
  try {
    const ingestQueueStatistics = await api.ingestQueue.readStatistics('a373f91e-ac68-44b8-8a01-d4eaa1e8424c');
    console.log(ingestQueueStatistics, 'Ingest queue statistics retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving ingest queue statistics');
  }
};

// readIngetQueueStatistics();

const readIngestQueues = async () => {
  try {
    const ingestQueues = await api.ingestQueue.readAll();
    console.log(ingestQueues, 'Ingest queues retrieved successfully');
  } catch (error) {
    console.log(error, 'Error retrieving ingest queues');
  }
};

// readIngestQueues();

const existIngestQueue = async () => {
  try {
    const exists = await api.ingestQueue.exists('a373f91e-ac68-44b8-8a01-d4eaa1e8424c');
    console.log(exists, 'Ingest queue exists successfully');
  } catch (error) {
    console.log(error, 'Error checking ingest queue existence');
  }
};

// existIngestQueue();

const deleteIngestQueue = async () => {
  try {
    const deleted = await api.ingestQueue.delete('a373f91e-ac68-44b8-8a01-d4eaa1e8424e');
    console.log(deleted, 'Ingest queue deleted successfully');
  } catch (error) {
    console.log(error, 'Error deleting ingest queue');
  }
};

// deleteIngestQueue();

//endregion
