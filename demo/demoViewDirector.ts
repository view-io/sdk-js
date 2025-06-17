import { ViewDirectorSdk } from 'view-sdk';

const api = new ViewDirectorSdk(
  'http://view.homedns.org:8000', //endpoint
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default' //access token
);

api.config.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ';

const listConnections = async () => {
  try {
    const result = await api.Embedding.retrieveConnections();
    console.log(result, 'Connections listed');
  } catch (error) {
    console.log(error, 'Error listing connections');
  }
};

// listConnections();

const generateEmbedding = async () => {
  try {
    const result = await api.Embedding.generateEmbedding({
      Model: 'all-MiniLM-L6-v2',
      ApiKey: '',
      Contents: [
        'This is a sample chunk of text, hello!',
        "Oh wow, here's another chunk of text",
        'And yet again, a third chunk of text',
      ],
      EmbeddingsRule: {
        EmbeddingsGenerator: 'openai',
        EmbeddingsGeneratorUrl: 'https://api.openai.com/v1/embeddings',
        EmbeddingsGeneratorApiKey: 'sk-proj-1234567890',
      },
    });
    console.log(result, 'Embedding generated');
  } catch (error) {
    console.log(error, 'Error generating embedding');
  }
};

// generateEmbedding();
