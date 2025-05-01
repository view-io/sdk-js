import { ViewEmbeddingsSdk } from 'view-sdk';

const embeddings = new ViewEmbeddingsSdk(
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default', //access token
  'http://localhost:8000/' //endpoint
);

const preloadModels = async () => {
  try {
    const response = await embeddings.preloadModels({
      Model: 'all-MiniLM-L6-v2',
    });
    console.log(response, 'Preload model response');
  } catch (err) {
    console.log('Error', err);
  }
};

preloadModels();
const generateEmbeddings = async () => {
  try {
    const response = await embeddings.generateEmbeddings({
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
      Contents: ['This is a sample chunk of text, hello!'],
    });
    console.log(response, 'Generate embeddings response');
  } catch (err) {
    console.log('Error', err);
  }
};

// generateEmbeddings();
