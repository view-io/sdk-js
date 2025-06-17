import { getServer } from '../server';
import { handlers } from './handlers';
import { mockDataRepositoryGuid, dataRepositorysData, dataRepositorysMockApiResponse } from './mockData';
import { apiCrowalerSDK as api } from '../setupTest';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('DataRepository', () => {
    it('retrieves a DataRepository', async () => {
      const data = await api.DataRepository.read(mockDataRepositoryGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(dataRepositorysData[mockDataRepositoryGuid]);
    });

    it('throws error when if missed repositoryGuid while retrieving a DataRepository', async () => {
      try {
        await api.DataRepository.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: repositoryGuid is null or empty');
      }
    });

    it('retrieves a DataRepository with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.DataRepository.read(mockDataRepositoryGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all DataRepository', async () => {
      const data = await api.DataRepository.readAll();
      data.map((repository) => {
        expect(repository).toEqual(dataRepositorysData[repository.GUID]);
      });
    });

    it('creates a DataRepository', async () => {
      const newDataRepository = {
        TenantGUID: 'default',
        OwnerGUID: 'default',
        FirstName: 'Updated',
        LastName: 'dataRepository',
        FullName: 'Updated dataRepository',
        Notes: 'Default password is password',
        Email: 'default@dataRepository.com',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.810482Z',
      };
      const data = await api.DataRepository.create(newDataRepository);
      expect(data).toBeDefined();
      expect(data).toEqual(dataRepositorysData[mockDataRepositoryGuid]);
    });

    it('throws error when creating a DataRepository with repository parameter', async () => {
      try {
        await api.DataRepository.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: repository is null or empty');
      }
    });

    // it('Update a DataRepository', async () => {
    //     const data = await api.updateDataRepository({
    //         GUID: mockDataRepositoryGuid,
    //         TenantGUID: 'default',
    //         FirstName: 'Updated',
    //         LastName: 'DataRepository',
    //         FullName: 'Updated DataRepository',
    //         Notes: 'Default password is password',
    //         Email: 'default@repository.com',
    //         Active: true,
    //         CreatedUtc: '2024-09-13T13:40:18.810482Z'
    //     });

    //     expect(true).toBe(data instanceof DataRepository);
    //     expect(JSON.stringify(data)).toBe(JSON.stringify(new DataRepository(dataRepositorysData[mockDataRepositoryGuid])));
    // });

    // it('throws error when if missed repositoryGuid while updating a DataRepository', async () => {
    //     try {
    //         await api.updateDataRepository();
    //     } catch (err) {
    //         expect(err instanceof Error).toBe(true);
    //         expect(err.toString()).toBe('Error: ArgumentNullException: repository is null or empty');
    //     }
    // });

    it('delete a DataRepository', async () => {
      const data = await api.DataRepository.delete(mockDataRepositoryGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed repositoryGuid while deleting a DataRepository', async () => {
      try {
        await api.DataRepository.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: repositoryGuid is null or empty');
      }
    });

    it('Check if a DataRepository exist', async () => {
      const data = await api.DataRepository.exists(mockDataRepositoryGuid);
      expect(data).toBe(true);
    });

    it('Check if a DataRepository does not exist', async () => {
      try {
        await api.DataRepository.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed repositoryGuid while checking a DataRepository existance', async () => {
      try {
        await api.DataRepository.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
