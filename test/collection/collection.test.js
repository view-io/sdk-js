import { getServer } from '../server';
import { handlers } from './handlers';
import { mockCollectionGuid, collectionsData, collectionsMockApiResponse } from './mockData';
import { api } from '../setupTest';
import Collection from '../../src/models/Collection';

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
      const data = await api.retrieveCollection(mockCollectionGuid);
      expect(data instanceof Collection).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new Collection(collectionsData[mockCollectionGuid])));
    });

    it('throws error when if missed guid while retrieving a Collection', async () => {
      try {
        await api.retrieveCollection();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    it('retrieves a Collection with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveCollection(mockCollectionGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all Collection', async () => {
      const data = await api.retrieveCollections();
      data.map((collection) => {
        expect(JSON.stringify(collection)).toBe(JSON.stringify(new Collection(collectionsData[collection.GUID])));
      });
    });

    it('creates a Collection', async () => {
      const data = await api.createCollection({
        TenantGUID: 'default',
        Name: 'Sample Document Collection',
        AllowOverwrites: true,
        AdditionalData: "{'type: 'document', 'category: 'legal'}",
        CreatedUtc: '2024-09-24T12:00:00Z',
      });
      expect(true).toBe(data instanceof Collection);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new Collection(collectionsData[mockCollectionGuid])));
    });

    it('throws error when creating a Collection with collection parameter', async () => {
      try {
        await api.createCollection();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collection is null or empty');
      }
    });

    // it('Update a Collection', async () => {
    //     const data = await api.updateCollection({
    //         GUID: mockCollectionGuid,
    //         TenantGUID: 'default',
    //         FirstName: 'Updated',
    //         LastName: 'Collection',
    //         FullName: 'Updated Collection',
    //         Notes: 'Default password is password',
    //         Email: 'default@collection.com',
    //         Active: true,
    //         CreatedUtc: '2024-09-13T13:40:18.810482Z'
    //     });

    //     expect(true).toBe(data instanceof Collection);
    //     expect(JSON.stringify(data)).toBe(JSON.stringify(new Collection(collectionsData[mockCollectionGuid])));
    // });

    // it('throws error when if missed guid while updating a Collection', async () => {
    //     try {
    //         await api.updateCollection();
    //     } catch (err) {
    //         expect(err instanceof Error).toBe(true);
    //         expect(err.toString()).toBe('Error: ArgumentNullException: collection is null or empty');
    //     }
    // });

    it('delete a Collection', async () => {
      const data = await api.deleteCollection(mockCollectionGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a Collection', async () => {
      try {
        await api.deleteCollection();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: collectionGuid is null or empty');
      }
    });

    // it('Check if a Collection exist', async () => {
    //     const data = await api.existsCollection(mockCollectionGuid);
    //     expect(data).toBe('true');
    // });

    // it('Check if a Collection does not exist', async () => {
    //     const data = await api.existsCollection('wrongID');
    //     expect(data).toBe('false');
    // });

    // it('throws error when if missed guid while checking a Collection existance', async () => {
    //     try {
    //         await api.existsCollection();
    //     } catch (err) {
    //         expect(err instanceof Error).toBe(true);
    //         expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
    //     }
    // });
  });
});
