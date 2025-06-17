import { getServer } from '../server';
import { handlers } from './handlers';
import { apiCrowalerSDK as api } from '../setupTest';
import {
  CrawlFilterGUID,
  CrawlFilterResponse,
  CrawlOperationGUID,
  CrawlPlansGUID,
  CrawlSchedulesGUID,
  CrawlSchedulesResponse,
  data1,
  DataRepositoryGUID,
  enumerateCrawlSchedulesResponse,
  enumerateFilterResponse,
  enumerateCrawlOperationResponse,
  enumeratePlansResponse,
  WriteAzureBLOBDataRepository,
  WriteCIFSDataRepository,
  WriteCrawlSchedulesGUID,
  WriteDiskDataRepository,
  writeFilterData,
  WriteNFSDataRepository,
  WritePlansData,
  WriteS3CompatibleDataRepository,
  WriteS3DataRepository,
  CrawlOperationResponse,
  CrawlPlansResponse,
} from './mockData';
import { dataRepositorysData } from '../dataRepository/mockData';
import { crawlFiltersData, crawlOperationsData, crawlPlansData, crawlSchedulesData } from './mockData';

const server = getServer(handlers);

describe('Crawler SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('DataRepository', () => {
    // issue: need to check this enumate
    // it('Check enumerate Data Repositories ', async () => {
    //   jest.setTimeout(30000);

    //   const data = await apiCrowalerSDK.enumerateDataRepositories();
    //   data.forEach((bucket) => {
    //     expect(bucket instanceof EnumerationResult).toBe(true);
    //   });
    // });

    it('retrieves all DataRepository', async () => {
      jest.setTimeout(30000);
      const data = await api.DataRepository.readAll();
      data.map((repository) => {
        expect(repository).toEqual(dataRepositorysData[repository.GUID]);
        console.log('repository: ', repository);
      });
    });
    it('retrieves a DataRepository by GUID', async () => {
      jest.setTimeout(30000);
      const data = await api.DataRepository.read(DataRepositoryGUID);
      expect(data).toEqual(data1[0]);
    });

    it('successfully writes to Disk Data Repository', async () => {
      jest.setTimeout(30000);
      const data = await api.DataRepository.create(WriteDiskDataRepository);
      expect(data).toEqual(data1[0]);
    });
    it('successfully Write S3 Data Repository', async () => {
      const data = await api.DataRepository.create(WriteS3DataRepository);
      expect(data).toEqual(data1[0]);
    });
    it('successfully Write S3 Compatible Storage Data Repository', async () => {
      const data = await api.DataRepository.create(WriteS3CompatibleDataRepository);
      expect(data).toEqual(data1[0]);
    });
    it('successfully Write Azure BLOB Data Repository', async () => {
      const data = await api.DataRepository.create(WriteAzureBLOBDataRepository);
      expect(data).toEqual(data1[0]);
    });
    it('successfully Write CIFS Data Repository', async () => {
      const data = await api.DataRepository.create(WriteCIFSDataRepository);
      expect(data).toEqual(data1[0]);
    });
    it('successfully Write NFS Data Repository', async () => {
      const data = await api.DataRepository.create(WriteNFSDataRepository);
      expect(data).toEqual(data1[0]);
    });
    it('successfully Update Data Repository', async () => {
      const data = await api.DataRepository.update({ ...WriteDiskDataRepository, GUID: DataRepositoryGUID });
      expect(data).toEqual(data1[0]);
    });
    it('successfully Delete Repository', async () => {
      const data = await api.DataRepository.delete(DataRepositoryGUID);
      expect(data).toBe(true);
    });
    it('throws error when if missed repositoryGuid while deleting a DataRepository', async () => {
      try {
        await api.DataRepository.delete();
        expect(api.DataRepository.delete()).rejects.toThrow(Error);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: repositoryGuid is null or empty');
      }
    });

    it('Check if a Check Existence', async () => {
      const data = await api.DataRepository.exists(DataRepositoryGUID);
      expect(data).toBe(true);
    });

    it('Check if a Check Existence does not exist', async () => {
      try {
        const data = await api.DataRepository.exists('wrongID');
        expect(data).toBe(false);
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
  });

  describe('Crawl Schedules', () => {
    it('Check Enumerate Crawl Schedules ', async () => {
      jest.setTimeout(30000);

      const data = await api.CrawlSchedule.enumerate();
      expect(data).toEqual(enumerateCrawlSchedulesResponse);
    });
    it('Retrieve All Crawl Schedules', async () => {
      jest.setTimeout(30000);
      const data = await api.CrawlSchedule.readAll();
      data.map((schedule) => {
        expect(schedule).toEqual(CrawlSchedulesResponse[0]);
      });
    });
    it('get Retrieve By ID Crawl Schedules', async () => {
      // jest.setTimeout(30000);
      const data = await api.CrawlSchedule.read(CrawlSchedulesGUID);
      expect(data).toEqual(CrawlSchedulesResponse[0]);
    });
    it('throws an error when retrieving a Crawl Schedule with an invalid GUID', async () => {
      await expect(api.CrawlSchedule.read()).rejects.toThrow(Error);
    });
    it('Create Crawl Schedules', async () => {
      const data = await api.CrawlSchedule.create(WriteCrawlSchedulesGUID);
      expect(data).toEqual(CrawlSchedulesResponse[0]);
    });
    it('throws an error when creating a Crawl Schedule with invalid data', async () => {
      expect(api.CrawlSchedule.create()).rejects.toThrow(Error);
    });
    it('Update Crawl Schedules', async () => {
      const data = await api.CrawlSchedule.update({ ...WriteCrawlSchedulesGUID, GUID: CrawlSchedulesGUID });
      expect(data).toEqual(CrawlSchedulesResponse[0]);
    });
    it('Delete Crawl Schedules', async () => {
      const data = await api.CrawlSchedule.delete(CrawlSchedulesGUID);
      expect(data).toBe(true);
    });
    it('throws an error when deleting a Crawl Schedule with invalid data', async () => {
      expect(api.CrawlSchedule.delete()).rejects.toThrow(Error);
    });
    it('Check if a Crawl Schedule exist', async () => {
      const data = await api.CrawlSchedule.exists(CrawlSchedulesGUID);
      expect(data).toBe(true);
    });
    it('Check if a Crawl Schedule does not exist', async () => {
      try {
        const data = await api.CrawlSchedule.exists('wrongID');
        expect(data).toBe(false);
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
    it('throws error when if missed guid while checking a Crawl Schedule existance', async () => {
      try {
        await api.CrawlSchedule.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });

  describe('Crawl Filters', () => {
    it('Check Enumerate Crawl Filters ', async () => {
      // jest.setTimeout(30000);
      const data = await api.CrawlFilter.enumerate();
      expect(data).toEqual(enumerateFilterResponse);
    });
    it('Retrieve All Crawl Filters', async () => {
      const data = await api.CrawlFilter.readAll();
      data.map((filter) => {
        expect(filter).toEqual(CrawlFilterResponse[0]);
      });
    });
    it('Retrieve By ID Crawl Filters', async () => {
      const data = await api.CrawlFilter.read(CrawlFilterGUID);
      expect(data).toEqual(CrawlFilterResponse[0]);
    });
    it('throws an error when retrieving a Crawl Filter with an invalid GUID', async () => {
      expect(api.CrawlFilter.read()).rejects.toThrow(Error);
    });
    it('Create Crawl Filters', async () => {
      const data = await api.CrawlFilter.create(writeFilterData);
      expect(data).toEqual(CrawlFilterResponse[0]);
    });
    it('throws an error when creating a Crawl Filter with invalid data', async () => {
      expect(api.CrawlFilter.create()).rejects.toThrow(Error);
    });
    it('Update Crawl Filters', async () => {
      const data = await api.CrawlFilter.update({ ...writeFilterData, GUID: CrawlFilterGUID });

      expect(data).toEqual(CrawlFilterResponse[0]);
    });
    it('throws an error when updating a Crawl Filter with invalid data', async () => {
      expect(api.CrawlFilter.update()).rejects.toThrow(Error);
    });
    it('Delete Crawl Filters', async () => {
      const data = await api.CrawlFilter.delete(CrawlFilterGUID);
      expect(data).toBe(true);
    });
    it('throws an error when deleting a Crawl Filter with invalid data', async () => {
      expect(api.CrawlFilter.delete()).rejects.toThrow(Error);
    });
    it('Check if a Crawl Filter does not exist', async () => {
      try {
        const data = await api.CrawlFilter.exists('wrongID');
        expect(data).toBe(false);
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
    it('throws error when if missed guid while checking a Crawl Filter existance', async () => {
      try {
        await api.CrawlFilter.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });

  //for plans

  describe('Crawl Plans', () => {
    it('Check Enumerate Crawl Plans ', async () => {
      // jest.setTimeout(30000);
      const data = await api.CrawlPlan.enumerate();
      expect(data).toEqual(enumeratePlansResponse);
    });
    it('Retrieve All Crawl Plans', async () => {
      const data = await api.CrawlPlan.readAll();
      data.map((plan) => {
        expect(plan).toEqual(CrawlPlansResponse[0]);
      });
    });
    it('Retrieve By ID Crawl Plans', async () => {
      const data = await api.CrawlPlan.read(CrawlPlansGUID);
      expect(data).toEqual(CrawlPlansResponse[0]);
    });
    it('throws an error when retrieving a Crawl Plan with an invalid GUID', async () => {
      expect(api.CrawlPlan.read()).rejects.toThrow(Error);
    });
    it('Create Crawl Plans', async () => {
      const data = await api.CrawlPlan.create(WritePlansData);
      expect(data).toEqual(CrawlPlansResponse[0]);
    });
    it('throws an error when creating a Crawl Plan with invalid data', async () => {
      expect(api.CrawlPlan.create()).rejects.toThrow(Error);
    });
    it('Update Crawl Plans', async () => {
      const data = await api.CrawlPlan.update({ ...WritePlansData, GUID: CrawlPlansGUID });
      expect(data).toEqual(CrawlPlansResponse[0]);
    });
    it('throws an error when updating a Crawl Plan with invalid data', async () => {
      expect(api.CrawlPlan.update()).rejects.toThrow(Error);
    });
    it('Delete Crawl Plans', async () => {
      const data = await api.CrawlPlan.delete(CrawlPlansGUID);
      expect(data).toBe(true);
    });
    it('throws an error when deleting a Crawl Plan with invalid data', async () => {
      expect(api.CrawlPlan.delete()).rejects.toThrow(Error);
    });
    it('Check if a Crawl Plan exist', async () => {
      const data = await api.CrawlPlan.exists(CrawlPlansGUID);
      expect(data).toBe(true);
    });
    it('Check if a Crawl Plan does not exist', async () => {
      try {
        const data = await api.CrawlPlan.exists('wrongID');
        expect(data).toBe(false);
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
    it('throws error when if missed guid while checking a Crawl Plan existance', async () => {
      try {
        await api.CrawlPlan.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });

  // for Crawl Operations

  describe('Crawl Operations', () => {
    it('Check Enumerate Crawl Operations ', async () => {
      // jest.setTimeout(30000);
      const data = await api.CrawlOperation.enumerate();
      expect(data).toEqual(enumerateCrawlOperationResponse);
    });
    it('Retrieve All Crawl Operations', async () => {
      const data = await api.CrawlOperation.readAll();
      data.map((operation) => {
        expect(operation).toEqual(CrawlOperationResponse[0]);
      });
    });
    it('Retrieve By ID Crawl Operations', async () => {
      const data = await api.CrawlOperation.read(CrawlOperationGUID);
      expect(data).toEqual(CrawlOperationResponse[0]);
    });
    it('throws an error when retrieving a Crawl Operation with an invalid GUID', async () => {
      expect(api.CrawlOperation.read()).rejects.toThrow(Error);
    });
    //issue 404 retrieveEnumerationCrawlOperations
    // it('Retrieve Enumeration Crawl Operations', async () => {
    //   const data = await apiCrowalerSDK.retrieveEnumerationCrawlOperations(CrawlOperationGUID);
    //   expect(data instanceof CrawlOperation).toBe(true);
    // });
    // it('throws an error when retrieving an Enumeration Crawl Operation', async () => {
    //   expect(api.CrawlOperation.readEnumeration()).rejects.toThrow(Error);
    // });
    //issue 404
    it('Start Crawl Operations', async () => {
      const data = await api.CrawlOperation.start(CrawlOperationGUID, {
        Name: 'My tenant',
      });
      expect(data).toEqual(CrawlOperationResponse[0]);
    });
    it('throws an error when starting a Crawl Operation', async () => {
      expect(api.CrawlOperation.start()).rejects.toThrow(Error);
    });
    //issue 404
    it('Stop Crawl Operations', async () => {
      const data = await api.CrawlOperation.stop(CrawlOperationGUID, {
        Name: 'My tenant',
      });
      expect(data).toEqual(CrawlOperationResponse[0]);
    });
    it('throws an error when stopping a Crawl Operation', async () => {
      expect(api.CrawlOperation.stop()).rejects.toThrow(Error);
    });
    it('Delete Crawl Operations', async () => {
      const data = await api.CrawlOperation.delete(CrawlOperationGUID);
      expect(data).toBe(true);
    });
    it('throws an error when deleting a Crawl Operation', async () => {
      expect(api.CrawlOperation.delete()).rejects.toThrow(Error);
    });
    it('Check if a Crawl Operation exist', async () => {
      const data = await api.CrawlOperation.exists(CrawlOperationGUID);
      expect(data).toBe(true);
    });
    it('Check if a Crawl Operation does not exist', async () => {
      try {
        const data = await api.CrawlOperation.exists('wrongID');
        expect(data).toBe(false);
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
    it('throws error when if missed guid while checking a Crawl Operation existance', async () => {
      try {
        await api.CrawlOperation.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
