import { getServer } from '../server';
import { handlers } from './handlers';
import { apiCrowalerSDK } from '../setupTest';
import DataRepository from '../../src/models/DataRepository';
import EnumerationResult from '../../src/models/EnumerationResult';
import {
  CrawlFilterGUID,
  CrawlOperationGUID,
  CrawlPlansGUID,
  CrawlSchedulesGUID,
  CrawlSchedulesResponse,
  DataRepositoryGUID,
  WriteAzureBLOBDataRepository,
  WriteCIFSDataRepository,
  WriteCrawlSchedulesGUID,
  WriteDiskDataRepository,
  writeFilterData,
  WriteNFSDataRepository,
  WritePlansData,
  WriteS3CompatibleDataRepository,
  WriteS3DataRepository,
} from './mockData';
import CrawlSchedule from '../../src/models/CrawlSchedule';
import CrawlFilter from '../../src/models/CrawlFilter';
import CrawlPlan from '../../src/models/CrawlPlan';
import CrawlOperation from '../../src/models/CrawlOperation';

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

      const data = await apiCrowalerSDK.retrieveDataRepositories();
      data.forEach((bucket) => {
        expect(bucket instanceof DataRepository).toBe(true);
      });
    });
    it('retrieves a DataRepository by GUID', async () => {
      jest.setTimeout(30000); // Set timeout for this test
      const data = await apiCrowalerSDK.retrieveDataRepository(DataRepositoryGUID);
      expect(data instanceof DataRepository).toBe(true); // Check if the returned data is an instance of DataRepository
      expect(data.GUID).toBe(DataRepositoryGUID); // Ensure the GUID matches
    });

    it('successfully writes to Disk Data Repository', async () => {
      const data = await apiCrowalerSDK.createDataRepository(WriteDiskDataRepository);
      expect(data instanceof DataRepository).toBe(true); // Check if the returned data is an instance of DataRepository
      expect(data.GUID).toBe(DataRepositoryGUID); // Ensure the GUID matches
    });
    it('successfully Write S3 Data Repository', async () => {
      const data = await apiCrowalerSDK.createDataRepository(WriteS3DataRepository);
      expect(data instanceof DataRepository).toBe(true);
      expect(data.GUID).toBe(DataRepositoryGUID);
    });
    it('successfully Write S3 Compatible Storage Data Repository', async () => {
      const data = await apiCrowalerSDK.createDataRepository(WriteS3CompatibleDataRepository);
      expect(data instanceof DataRepository).toBe(true);
      expect(data.GUID).toBe(DataRepositoryGUID);
    });
    it('successfully Write Azure BLOB Data Repository', async () => {
      const data = await apiCrowalerSDK.createDataRepository(WriteAzureBLOBDataRepository);
      expect(data instanceof DataRepository).toBe(true);
      expect(data.GUID).toBe(DataRepositoryGUID);
    });
    it('successfully Write CIFS Data Repository', async () => {
      const data = await apiCrowalerSDK.createDataRepository(WriteCIFSDataRepository);
      expect(data instanceof DataRepository).toBe(true);
      expect(data.GUID).toBe(DataRepositoryGUID);
    });
    it('successfully Write NFS Data Repository', async () => {
      const data = await apiCrowalerSDK.createDataRepository(WriteNFSDataRepository);
      expect(data instanceof DataRepository).toBe(true);
      expect(data.GUID).toBe(DataRepositoryGUID);
    });
    it('successfully Update Data Repository', async () => {
      const data = await apiCrowalerSDK.updateDataRepository({ ...WriteDiskDataRepository, GUID: DataRepositoryGUID });
      expect(data instanceof DataRepository).toBe(true);
      expect(data.GUID).toBe(DataRepositoryGUID);
    });
    it('successfully Delete Repository', async () => {
      const data = await apiCrowalerSDK.deleteDataRepository(DataRepositoryGUID);
      expect(data instanceof DataRepository).toBe(false);
    });
    it('throws error when if missed repositoryGuid while deleting a DataRepository', async () => {
      try {
        await apiCrowalerSDK.deleteDataRepository();
        expect(apiCrowalerSDK.deleteDataRepository()).rejects.toThrow(Error);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: repositoryGuid is null or empty');
      }
    });

    it('Check if a Check Existence', async () => {
      const data = await apiCrowalerSDK.existsDataRepository(DataRepositoryGUID);
      expect(data).toBe('true');
    });

    it('Check if a Check Existence does not exist', async () => {
      try {
        const data = await apiCrowalerSDK.existsDataRepository('wrongID');
        expect(data).toBe('false');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
  });

  describe('Crawl Schedules', () => {
    it('Check Enumerate Crawl Schedules ', async () => {
      jest.setTimeout(30000);

      const data = await apiCrowalerSDK.enumerateCrawlSchedules();
      expect(data instanceof EnumerationResult).toBe(true);
    });
    it('Retrieve All Crawl Schedules', async () => {
      jest.setTimeout(30000);
      const data = await apiCrowalerSDK.retrieveAllCrawlSchedules();
      data.forEach((bucket) => {
        expect(bucket instanceof CrawlSchedule).toBe(true);
      });
    });
    it('get Retrieve By ID Crawl Schedules', async () => {
      // jest.setTimeout(30000);
      const data = await apiCrowalerSDK.retrieveCrawlSchedule(CrawlSchedulesGUID);
      expect(data instanceof CrawlSchedule).toBe(true);
    });
    it('throws an error when retrieving a Crawl Schedule with an invalid GUID', async () => {
      await expect(apiCrowalerSDK.retrieveCrawlSchedule()).rejects.toThrow(Error);
    });
    it('Create Crawl Schedules', async () => {
      const data = await apiCrowalerSDK.createCrawlSchedules(WriteCrawlSchedulesGUID);
      expect(data instanceof CrawlSchedule).toBe(true);
    });
    it('throws an error when creating a Crawl Schedule with invalid data', async () => {
      expect(apiCrowalerSDK.createCrawlSchedules()).rejects.toThrow(Error);
    });
    it('Update Crawl Schedules', async () => {
      const data = await apiCrowalerSDK.updateCrawlSchedules({ ...WriteCrawlSchedulesGUID, GUID: CrawlSchedulesGUID });
      expect(data instanceof CrawlSchedule).toBe(true);
    });
    it('throws an error when updating a Crawl Schedule with invalid data', async () => {
      expect(apiCrowalerSDK.updateCrawlSchedules()).rejects.toThrow(Error);
    });
    it('Delete Crawl Schedules', async () => {
      const data = await apiCrowalerSDK.deleteCrawlSchedule(CrawlSchedulesGUID);
      expect(data instanceof CrawlSchedule).toBe(false);
    });
    it('throws an error when deleting a Crawl Schedule with invalid data', async () => {
      expect(apiCrowalerSDK.deleteCrawlSchedule()).rejects.toThrow(Error);
    });
    it('Check if a Crawl Schedule exist', async () => {
      const data = await apiCrowalerSDK.existsCrawlSchedule(CrawlSchedulesGUID);
      expect(data).toBe('true');
    });
    it('Check if a Crawl Schedule does not exist', async () => {
      try {
        const data = await apiCrowalerSDK.existsCrawlSchedule('wrongID');
        expect(data).toBe('false');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
    it('throws error when if missed guid while checking a Crawl Schedule existance', async () => {
      try {
        await apiCrowalerSDK.existsCrawlSchedule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });

  describe('Crawl Filters', () => {
    it('Check Enumerate Crawl Filters ', async () => {
      // jest.setTimeout(30000);
      const data = await apiCrowalerSDK.enumerateCrawlFilters();
      expect(data instanceof EnumerationResult).toBe(true);
    });
    it('Retrieve All Crawl Filters', async () => {
      const data = await apiCrowalerSDK.retrieveCrawlFilters();
      console.log(data);
      data.forEach((bucket) => {
        expect(bucket instanceof CrawlFilter).toBe(true);
      });
    });
    it('Retrieve By ID Crawl Filters', async () => {
      const data = await apiCrowalerSDK.retrieveCrawlFilter(CrawlFilterGUID);
      expect(data instanceof CrawlFilter).toBe(true);
    });
    it('throws an error when retrieving a Crawl Filter with an invalid GUID', async () => {
      expect(apiCrowalerSDK.retrieveCrawlFilter()).rejects.toThrow(Error);
    });
    it('Create Crawl Filters', async () => {
      const data = await apiCrowalerSDK.createCrawlFilter(writeFilterData);
      expect(data instanceof CrawlFilter).toBe(true);
    });
    it('throws an error when creating a Crawl Filter with invalid data', async () => {
      expect(apiCrowalerSDK.createCrawlFilter()).rejects.toThrow(Error);
    });
    it('Update Crawl Filters', async () => {
      const data = await apiCrowalerSDK.updateCrawlFilter({ ...writeFilterData, GUID: CrawlFilterGUID });

      expect(data instanceof CrawlFilter).toBe(true);
      expect(data.MinimumSize).toBe(writeFilterData.MinimumSize);
      expect(data.MaximumSize).toBe(writeFilterData.MaximumSize);
    });
    it('throws an error when updating a Crawl Filter with invalid data', async () => {
      expect(apiCrowalerSDK.updateCrawlFilter()).rejects.toThrow(Error);
    });
    it('Delete Crawl Filters', async () => {
      const data = await apiCrowalerSDK.deleteCrawlFilter(CrawlFilterGUID);
      expect(data).toBe(true);
    });
    it('throws an error when deleting a Crawl Filter with invalid data', async () => {
      expect(apiCrowalerSDK.deleteCrawlFilter()).rejects.toThrow(Error);
    });
    it('Check if a Crawl Filter exist', async () => {
      const data = await apiCrowalerSDK.existsCrawlFilter(CrawlFilterGUID);
      expect(data).toBe('true');
    });
    it('Check if a Crawl Filter does not exist', async () => {
      try {
        const data = await apiCrowalerSDK.existsCrawlFilter('wrongID');
        expect(data).toBe('false');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
    it('throws error when if missed guid while checking a Crawl Filter existance', async () => {
      try {
        await apiCrowalerSDK.existsCrawlFilter();
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
      const data = await apiCrowalerSDK.enumerateCrawlPlans();
      expect(data instanceof EnumerationResult).toBe(true);
    });
    it('Retrieve All Crawl Plans', async () => {
      const data = await apiCrowalerSDK.retrieveCrawlPlans();
      data.forEach((bucket) => {
        expect(bucket instanceof CrawlPlan).toBe(true);
      });
    });
    it('Retrieve By ID Crawl Plans', async () => {
      const data = await apiCrowalerSDK.retrieveCrawlPlan(CrawlPlansGUID);
      expect(data instanceof CrawlPlan).toBe(true);
    });
    it('throws an error when retrieving a Crawl Plan with an invalid GUID', async () => {
      expect(apiCrowalerSDK.retrieveCrawlPlan()).rejects.toThrow(Error);
    });
    it('Create Crawl Plans', async () => {
      const data = await apiCrowalerSDK.createCrawlPlan(WritePlansData);
      expect(data instanceof CrawlPlan).toBe(true);
    });
    it('throws an error when creating a Crawl Plan with invalid data', async () => {
      expect(apiCrowalerSDK.createCrawlPlan()).rejects.toThrow(Error);
    });
    it('Update Crawl Plans', async () => {
      const data = await apiCrowalerSDK.updateCrawlPlan({ ...WritePlansData, GUID: CrawlPlansGUID });
      expect(data instanceof CrawlPlan).toBe(true);
    });
    it('throws an error when updating a Crawl Plan with invalid data', async () => {
      expect(apiCrowalerSDK.updateCrawlPlan()).rejects.toThrow(Error);
    });
    it('Delete Crawl Plans', async () => {
      const data = await apiCrowalerSDK.deleteCrawlPlan(CrawlPlansGUID);
      expect(data).toBe(true);
    });
    it('throws an error when deleting a Crawl Plan with invalid data', async () => {
      expect(apiCrowalerSDK.deleteCrawlPlan()).rejects.toThrow(Error);
    });
    it('Check if a Crawl Plan exist', async () => {
      const data = await apiCrowalerSDK.existsCrawlPlan(CrawlPlansGUID);
      expect(data).toBe('true');
    });
    it('Check if a Crawl Plan does not exist', async () => {
      try {
        const data = await apiCrowalerSDK.existsCrawlPlan('wrongID');
        expect(data).toBe('false');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
    it('throws error when if missed guid while checking a Crawl Plan existance', async () => {
      try {
        await apiCrowalerSDK.existsCrawlPlan();
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
      const data = await apiCrowalerSDK.enumerateCrawlOperations();
      expect(data instanceof EnumerationResult).toBe(true);
    });
    it('Retrieve All Crawl Operations', async () => {
      const data = await apiCrowalerSDK.retrieveCrawlOperations();
      data.forEach((bucket) => {
        expect(bucket instanceof CrawlOperation).toBe(true);
      });
    });
    it('Retrieve By ID Crawl Operations', async () => {
      const data = await apiCrowalerSDK.retrieveCrawlOperation(CrawlOperationGUID);
      expect(data instanceof CrawlOperation).toBe(true);
    });
    it('throws an error when retrieving a Crawl Operation with an invalid GUID', async () => {
      expect(apiCrowalerSDK.retrieveCrawlOperation()).rejects.toThrow(Error);
    });
    //issue 404 retrieveEnumerationCrawlOperations
    // it('Retrieve Enumeration Crawl Operations', async () => {
    //   const data = await apiCrowalerSDK.retrieveEnumerationCrawlOperations(CrawlOperationGUID);
    //   expect(data instanceof CrawlOperation).toBe(true);
    // });
    it('throws an error when retrieving an Enumeration Crawl Operation', async () => {
      expect(apiCrowalerSDK.retrieveEnumerationCrawlOperations()).rejects.toThrow(Error);
    });
    //issue 404
    it('Start Crawl Operations', async () => {
      const data = await apiCrowalerSDK.startCrawlOperation(CrawlOperationGUID, {
        Name: 'My tenant',
      });
      expect(data instanceof CrawlOperation).toBe(true);
    });
    it('throws an error when starting a Crawl Operation', async () => {
      expect(apiCrowalerSDK.startCrawlOperation()).rejects.toThrow(Error);
    });
    //issue 404
    it('Stop Crawl Operations', async () => {
      const data = await apiCrowalerSDK.stopCrawlOperation(CrawlOperationGUID, {
        Name: 'My tenant',
      });
      expect(data instanceof CrawlOperation).toBe(true);
    });
    it('throws an error when stopping a Crawl Operation', async () => {
      expect(apiCrowalerSDK.stopCrawlOperation()).rejects.toThrow(Error);
    });
    it('Delete Crawl Operations', async () => {
      const data = await apiCrowalerSDK.deleteCrawlOperation(CrawlOperationGUID);
      expect(data).toBe(true);
    });
    it('throws an error when deleting a Crawl Operation', async () => {
      expect(apiCrowalerSDK.deleteCrawlOperation()).rejects.toThrow(Error);
    });
    it('Check if a Crawl Operation exist', async () => {
      const data = await apiCrowalerSDK.existsCrawlOperation(CrawlOperationGUID);
      expect(data).toBe('true');
    });
    it('Check if a Crawl Operation does not exist', async () => {
      try {
        const data = await apiCrowalerSDK.existsCrawlOperation('wrongID');
        expect(data).toBe('false');
      } catch (err) {
        expect(err).toBe('Not Found');
      }
    });
    it('throws error when if missed guid while checking a Crawl Operation existance', async () => {
      try {
        await apiCrowalerSDK.existsCrawlOperation();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
