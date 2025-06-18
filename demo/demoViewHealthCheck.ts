import { ViewHealthcheckSdk } from 'view-sdk';

const api = new ViewHealthcheckSdk(
  'http://view.homedns.org:8000', //endpoint
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default' //access token
);

api.config.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ';

// health check
const serverHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkSwitchboard();
    console.log(result, 'Health check');
  } catch (error) {
    console.log(error, 'Error health check');
  }
};

// serverHealthCheck();

const configHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkConfig();
    console.log(result, 'Config health check');
  } catch (error) {
    console.log(error, 'Error config health check');
  }
};

// configHealthCheck();

const storageHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkStorage();
    console.log(result, 'Storage health check');
  } catch (error) {
    console.log(error, 'Error storage health check');
  }
};

// storageHealthCheck();

const vectorHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkVector();
    console.log(result, 'Vector health check');
  } catch (error) {
    console.log(error, 'Error vector health check');
  }
};

// vectorHealthCheck();

const processorHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkProcessor();
    console.log(result, 'Processor health check');
  } catch (error) {
    console.log(error, 'Error processor health check');
  }
};

// processorHealthCheck();

const assistantHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkAssistant();
    console.log(result, 'Assistant health check');
  } catch (error) {
    console.log(error, 'Error assistant health check');
  }
};

// assistantHealthCheck();

const orchestratorHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkOrchestrator();
    console.log(result, 'Orchestrator health check');
  } catch (error) {
    console.log(error, 'Error orchestrator health check');
  }
};

// orchestratorHealthCheck();

const crawlerHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkCrawler();
    console.log(result, 'Crawler health check');
  } catch (error) {
    console.log(error, 'Error crawler health check');
  }
};

// crawlerHealthCheck();

const lexiHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkLexi();
    console.log(result, 'Lexica health check');
  } catch (error) {
    console.log(error, 'Error lexica health check');
  }
};

// lexiHealthCheck();

const embeddingHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkEmbeddings();
    console.log(result, 'Embeddings health check');
  } catch (error) {
    console.log(error, 'Error embeddings health check');
  }
};

// embeddingHealthCheck();

const directorHealthCheck = async () => {
  try {
    const result = await api.healthCheck.checkDirector();
    console.log(result, 'Director health check');
  } catch (error) {
    console.log(error, 'Error director health check');
  }
};

// directorHealthCheck();
