import { getServer } from '../server';
import { handlers } from './handlers';
import { mockDataRepositoryGuid, dataRepositorysData, dataRepositorysMockApiResponse } from './mockData';
import { api } from '../setupTest';
import DataRepository from '../../src/models/DataRepository';

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
      const data = await api.retrieveDataRepository(mockDataRepositoryGuid);
      expect(data instanceof DataRepository).toBe(true);
      expect(JSON.stringify(data)).toBe(
        JSON.stringify(new DataRepository(dataRepositorysData[mockDataRepositoryGuid]))
      );
    });

    it('throws error when if missed repositoryGuid while retrieving a DataRepository', async () => {
      try {
        await api.retrieveDataRepository();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: repositoryGuid is null or empty');
      }
    });

    it('retrieves a DataRepository with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveDataRepository(mockDataRepositoryGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all DataRepository', async () => {
      const data = await api.retrieveDataRepositories();
      data.map((repository) => {
        expect(JSON.stringify(repository)).toBe(
          JSON.stringify(new DataRepository(dataRepositorysData[repository.GUID]))
        );
      });
    });

    it('creates a DataRepository', async () => {
      const data = await api.createDataRepository({
        TenantGUID: 'default',
        OwnerGUID: 'default',
        FirstName: 'Updated',
        LastName: 'dataRepository',
        FullName: 'Updated dataRepository',
        Notes: 'Default password is password',
        Email: 'default@dataRepository.com',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.810482Z',
      });
      expect(true).toBe(data instanceof DataRepository);
      expect(JSON.stringify(data)).toBe(
        JSON.stringify(new DataRepository(dataRepositorysData[mockDataRepositoryGuid]))
      );
    });

    it('throws error when creating a DataRepository with repository parameter', async () => {
      try {
        await api.createDataRepository();
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
      const data = await api.deleteDataRepository(mockDataRepositoryGuid);
      expect(data).toBe('true');
    });

    it('throws error when if missed repositoryGuid while deleting a DataRepository', async () => {
      try {
        await api.deleteDataRepository();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: repositoryGuid is null or empty');
      }
    });

    // it('Check if a DataRepository exist', async () => {
    //     const data = await api.existsDataRepository(mockDataRepositoryGuid);
    //     expect(data).toBe('true');
    // });

    // it('Check if a DataRepository does not exist', async () => {
    //     const data = await api.existsDataRepository('wrongID');
    //     expect(data).toBe('false');
    // });

    // it('throws error when if missed repositoryGuid while checking a DataRepository existance', async () => {
    //     try {
    //         await api.existsDataRepository();
    //     } catch (err) {
    //         expect(err instanceof Error).toBe(true);
    //         expect(err.toString()).toBe('Error: ArgumentNullException: repositoryGuid is null or empty');
    //     }
    // });
  });
});
