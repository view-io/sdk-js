import { ViewEmbeddingsSdk } from 'view-sdk';

const api = new ViewEmbeddingsSdk(
  'http://view.homedns.org:8000', //endpoint
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default' //access token
);

api.config.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ';

const generateEmbeddings = async () => {
  try {
    const result = await api.generateEmbeddings({
      EmbeddingsRule: {
        EmbeddingsGenerator: 'LCProxy',
        EmbeddingsGeneratorUrl: 'http://nginx-lcproxy:8000/',
        EmbeddingsGeneratorApiKey: 'default',
        BatchSize: 16,
        MaxGeneratorTasks: 16,
        MaxRetries: 3,
        MaxFailures: 3,
      },
      Model: 'all-MiniLM-L6-v2',
      ApiKey: '',
      Contents: ['This is a sample chunk of text, hello!', "Oh wow, here's another chunk of text"],
    });
    console.log(result, 'Embeddings generated');
  } catch (error) {
    console.log(error, 'Error generating embeddings');
  }
};

generateEmbeddings();
