import { ViewCrawlerSdk } from "view-sdk";

const crawler = new ViewCrawlerSdk(
  "00000000-0000-0000-0000-000000000000", //tenant Id
  "default", //access token
  "http://view.homedns.org:8000/" //endpoint
);

const deleteCrawlOperation = async () => {
  try {
    const response = await crawler.deleteCrawlOperation(
      "143fc146-dc60-4264-99b8-49bb816d356f"
    );
    console.log(response, "Crawl operation deleted successfully");
  } catch (err) {
    console.log("Error deleting Crawl operation:", err);
  }
};

deleteCrawlOperation();
const existsCrawlOperation = async () => {
  try {
    const response = await crawler.existsCrawlOperation(
      "143fc146-dc60-4264-99b8-49bb816d356f"
    );
    console.log(response, "Crawl operation exists");
  } catch (err) {
    console.log("Error checking Crawl operation:", err);
  }
};

// existsCrawlOperation();
const stopCrawlOperation = async () => {
  try {
    const response = await crawler.stopCrawlOperation(
      "143fc146-dc60-4264-99b8-49bb816d356f",
      {
        Name: "My crawl operation [ASH]",
      }
    );
    console.log(response, "Crawl operation stopped successfully");
  } catch (err) {
    console.log("Error stopping Crawl operation:", err);
  }
};
// stopCrawlOperation();

const startCrawlOperation = async () => {
  try {
    const response = await crawler.startCrawlOperation(
      "143fc146-dc60-4264-99b8-49bb816d356f",
      {
        Name: "My crawl operation [ASH]",
      }
    );
    console.log(response, "Crawl operation started successfully");
  } catch (err) {
    console.log("Error starting Crawl operation:", err);
  }
};

// startCrawlOperation();

const retrieveEnumerationCrawlOperations = async () => {
  try {
    const response = await crawler.retrieveEnumerationCrawlOperations(
      "143fc146-dc60-4264-99b8-49bb816d356f"
    );
    console.log(response, "Crawl operation enumeration fetched successfully");
  } catch (err) {
    console.log("Error fetching Crawl operation enumeration:", err);
  }
};

// retrieveEnumerationCrawlOperations();

const readAllCrawlOperations = async () => {
  try {
    const response = await crawler.retrieveCrawlOperations();
    console.log(response, "All crawl operations fetched successfully");
  } catch (err) {
    console.log("Error fetching All crawl operations:", err);
  }
};

// readAllCrawlOperations();

const readCrawlOperation = async () => {
  try {
    const response = await crawler.retrieveCrawlOperation(
      "143fc146-dc60-4264-99b8-49bb816d356f"
    );
    console.log(response, "Crawl operation fetched successfully");
  } catch (err) {
    console.log("Error fetching Crawl operation:", err);
  }
};

// readCrawlOperation();

const enumerateCrawlOperations = async () => {
  try {
    const response = await crawler.enumerateCrawlOperations();
    console.log(response, "Crawl operations fetched successfully");
  } catch (err) {
    console.log("Error fetching Crawl operations:", err);
  }
};

// enumerateCrawlOperations();

const existsCrawlPlan = async () => {
  try {
    const response = await crawler.existsCrawlPlan(
      "418cd284-4a30-4a9b-9e2a-b36645cbc6d7"
    );
    console.log(response, "Crawl plan exists");
  } catch (err) {
    console.log("Error checking Crawl plan:", err);
  }
};

// existsCrawlPlan();

const deleteCrawlPlan = async () => {
  try {
    const response = await crawler.deleteCrawlPlan(
      "418cd284-4a30-4a9b-9e2a-b36645cbc6d7"
    );
    console.log(response, "Crawl plan deleted successfully");
  } catch (err) {
    console.log("Error deleting Crawl plan:", err);
  }
};
// deleteCrawlPlan();

const readAllCrawlPlans = async () => {
  try {
    const response = await crawler.retrieveCrawlPlans();
    console.log(response, "All crawl plans fetched successfully");
  } catch (err) {
    console.log("Error fetching All crawl plans:", err);
  }
};

// readAllCrawlPlans();
const updateCrawlPlan = async () => {
  try {
    const response = await crawler.updateCrawlPlan({
      GUID: "6c00eb8e-8c05-48dc-82d9-1e1f7b2d0bc0",
      TenantGUID: "00000000-0000-0000-0000-000000000000",
      DataRepositoryGUID: "7c3eb087-f9ef-4ca4-9b50-359b9840298e",
      CrawlScheduleGUID: "00000000-0000-0000-0000-000000000000",
      CrawlFilterGUID: "00000000-0000-0000-0000-000000000000",
      MetadataRuleGUID: "00000000-0000-0000-0000-000000000000",
      EmbeddingsRuleGUID: undefined,
      Name: "My crawl plan [ASH] [UPDATED]",
      EnumerationDirectory: "./enumerations/",
      EnumerationsToRetain: 30,
      MaxDrainTasks: 8,
      ProcessAdditions: true,
      ProcessDeletions: false,
      ProcessUpdates: true,
      CreatedUtc: "2025-04-01T12:52:07.995597Z",
    });
    console.log(response, "Crawl plan updated successfully");
  } catch (err) {
    console.log("Error updating Crawl plan:", err);
  }
};

// updateCrawlPlan();

const readCrawlPlan = async () => {
  try {
    const response = await crawler.retrieveCrawlPlan(
      "418cd284-4a30-4a9b-9e2a-b36645cbc6d7"
    );
    console.log(response, "Crawl plan fetched successfully");
  } catch (err) {
    console.log("Error fetching Crawl plan:", err);
  }
};

// readCrawlPlan();

const enumerateCrawlPlans = async () => {
  try {
    const response = await crawler.enumerateCrawlPlans();
    console.log(response, "Crawl plans fetched successfully");
  } catch (err) {
    console.log("Error fetching Crawl plans:", err);
  }
};

// enumerateCrawlPlans();
const createCrawlPlan = async () => {
  try {
    const response = await crawler.createCrawlPlan({
      DataRepositoryGUID: "7c3eb087-f9ef-4ca4-9b50-359b9840298e",
      CrawlScheduleGUID: "00000000-0000-0000-0000-000000000000",
      CrawlFilterGUID: "00000000-0000-0000-0000-000000000000",
      Name: "My crawl plan [ASH]",
      EnumerationDirectory: "./enumerations/",
      EnumerationsToRetain: 30,
      MetadataRuleGUID: "00000000-0000-0000-0000-000000000000",
      ProcessingEndpoint:
        "http://nginx-processor:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing",
      ProcessingAccessKey: "default",
      CleanupEndpoint:
        "http://nginx-processor:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing/cleanup",
      CleanupAccessKey: "default",
    });
    console.log(response, "Crawl plan created successfully");
  } catch (err) {
    console.log("Error creating Crawl plan:", err);
  }
};

// createCrawlPlan();

const deleteCrawlFilter = async () => {
  try {
    const response = await crawler.deleteCrawlFilter(
      "d3490b1a-3219-4691-9587-61e6380a9551"
    );
    console.log(response, "Crawl filter deleted successfully");
  } catch (err) {
    console.log("Error deleting Crawl filter:", err);
  }
};

// deleteCrawlFilter();

const existsCrawlFilter = async () => {
  try {
    const response = await crawler.existsCrawlFilter(
      "d3490b1a-3219-4691-9587-61e6380a9551"
    );
    console.log(response, "Crawl filter exists");
  } catch (err) {
    console.log("Error checking Crawl filter:", err);
  }
};

// existsCrawlFilter();

const updateCrawlFilter = async () => {
  try {
    const response = await crawler.updateCrawlFilter({
      GUID: "d3490b1a-3219-4691-9587-61e6380a9551",
      TenantGUID: "00000000-0000-0000-0000-000000000000",
      Name: "My filter [ASH] [UPDATED]",
      MinimumSize: 1,
      MaximumSize: 134217728,
      IncludeSubdirectories: true,
      ContentType: "*",
      CreatedUtc: "2025-04-01T10:47:14.382138Z",
    });
    console.log(response, "Crawl filter updated successfully");
  } catch (err) {
    console.log("Error updating Crawl filter:", err);
  }
};

// updateCrawlFilter();

const readAllCrawlFilters = async () => {
  try {
    const response = await crawler.retrieveCrawlFilters();
    console.log(response, "All crawl filters fetched successfully");
  } catch (err) {
    console.log("Error fetching All crawl filters:", err);
  }
};

// readAllCrawlFilters();

const readCrawlFilter = async () => {
  try {
    const response = await crawler.retrieveCrawlFilter(
      "d3490b1a-3219-4691-9587-61e6380a9551"
    );
    console.log(response, "Crawl filter fetched successfully");
  } catch (err) {
    console.log("Error fetching Crawl filter:", err);
  }
};

// readCrawlFilter();
const enumerateCrawlFilters = async () => {
  try {
    const response = await crawler.enumerateCrawlFilters();
    console.log(response, "Crawl filters fetched successfully");
  } catch (err) {
    console.log("Error fetching Crawl filters:", err);
  }
};

// enumerateCrawlFilters();

const createCrawlFilter = async () => {
  try {
    const response = await crawler.createCrawlFilter({
      Name: "My filter [ASH]",
      MinimumSize: 1,
      MaximumSize: 134217728,
      IncludeSubdirectories: true,
      ContentType: "*",
    });
    console.log(response, "Crawl filter created successfully");
  } catch (err) {
    console.log("Error creating Crawl filter:", err);
  }
};

// createCrawlFilter();
const deleteCrawlSchedule = async () => {
  try {
    const response = await crawler.deleteCrawlSchedule(
      "d3110b6a-223c-4c0a-b084-3fc5d996fd07"
    );
    console.log(response, "Crawl schedule deleted successfully");
  } catch (err) {
    console.log("Error deleting Crawl schedule:", err);
  }
};

// deleteCrawlSchedule();

const existsCrawlSchedule = async () => {
  try {
    const response = await crawler.existsCrawlSchedule(
      "d3110b6a-223c-4c0a-b084-3fc5d996fd07"
    );
    console.log(response, "Crawl schedule exists");
  } catch (err) {
    console.log("Error checking Crawl schedule:", err);
  }
};

// existsCrawlSchedule();

const updateCrawlSchedule = async () => {
  try {
    const response = await crawler.updateCrawlSchedules({
      GUID: "d3110b6a-223c-4c0a-b084-3fc5d996fd07",
      TenantGUID: "00000000-0000-0000-0000-000000000000",
      Name: "My schedule [UPDATED]",
      Schedule: "DaysInterval",
      Interval: 1,
    });
    console.log(response, "Crawl schedule updated successfully");
  } catch (err) {
    console.log("Error updating Crawl schedule:", err);
  }
};

// updateCrawlSchedule();

const readAllCrawlSchedules = async () => {
  try {
    const response = await crawler.retrieveAllCrawlSchedules();
    console.log(response, "All crawl schedules fetched successfully");
  } catch (err) {
    console.log("Error fetching All crawl schedules:", err);
  }
};

// readAllCrawlSchedules();

const readCrawlSchedule = async () => {
  try {
    const response = await crawler.retrieveCrawlSchedule(
      "d3110b6a-223c-4c0a-b084-3fc5d996fd07"
    );
    console.log(response, "Crawl schedule fetched successfully");
  } catch (err) {
    console.log("Error fetching Crawl schedule:", err);
  }
};

// readCrawlSchedule();
const enumerateCrawlSchedules = async () => {
  try {
    const response = await crawler.enumerateCrawlSchedules();
    console.log(response, "Crawl schedules fetched successfully");
  } catch (err) {
    console.log("Error fetching Crawl schedules:", err);
  }
};

// enumerateCrawlSchedules();
const createCrawlSchedules = async () => {
  try {
    const response = await crawler.createCrawlSchedules({
      Name: "My schedule",
      Schedule: "DaysInterval",
      Interval: 1,
    });
    console.log(response, "Data crawler created successfully");
  } catch (err) {
    console.log("Error creating Data crawler:", err);
  }
};

// createCrawlSchedules();

const deleteDataRepository = async () => {
  try {
    const response = await crawler.deleteDataRepository(
      "cd455417-d261-48e3-817f-98f15ba3d6b8"
    );
    console.log(response, "Data repository deleted successfully");
  } catch (err) {
    console.log("Error deleting Data repository:", err);
  }
};

// deleteDataRepository();

const existsDataRepository = async () => {
  try {
    const response = await crawler.existsDataRepository(
      "cd455417-d261-48e3-817f-98f15ba3d6b8"
    );
    console.log(response, "Data repository exists");
  } catch (err) {
    console.log("Error checking Data repository:", err);
  }
};

// existsDataRepository();

const readAllDataRepositories = async () => {
  try {
    const response = await crawler.retrieveDataRepositories();
    console.log(response, "All data repositories fetched successfully");
  } catch (err) {
    console.log("Error fetching All data repositories:", err);
  }
};

// readAllDataRepositories();
const readDataRepository = async () => {
  try {
    const response = await crawler.retrieveDataRepository(
      "cd455417-d261-48e3-817f-98f15ba3d6b8"
    );
    console.log(response, "Data repository fetched successfully");
  } catch (err) {
    console.log("Error fetching Data repository:", err);
  }
};

// readDataRepository();

const enumerateDataRepositories = async () => {
  try {
    const response = await crawler.enumerateDataRepositories();
    console.log(response, "Data repositories fetched successfully");
  } catch (err) {
    console.log("Error fetching Data repositories:", err);
  }
};

// enumerateDataRepositories();
const createDataRepository = async () => {
  try {
    const response = await crawler.createDataRepository({
      Name: "My file repository [ASH]",
      RepositoryType: "File",
      BaseUrl: "./files/",
      DiskDirectory: "./files/",
      DiskIncludeSubdirectories: true,
    });
    console.log(response, "Data repository created successfully");
  } catch (err) {
    console.log("Error creating Data repository:", err);
  }
};

// createDataRepository();
