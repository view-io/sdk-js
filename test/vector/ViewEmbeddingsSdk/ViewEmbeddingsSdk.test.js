import { handlers } from './handler';
import { getServer } from '../../server';
import { apiViewEmbeddingsSdk as sdk } from '../../setupTest';
import { mockEmbeddings } from './mockData';

const server = getServer(handlers);

describe('ViewEmbeddingsSdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  it('should generate embeddings', async () => {
    const embeddings = await sdk.generateEmbeddings({ text: 'Hello, world!' });
    expect(embeddings).toEqual(mockEmbeddings);
  });

  it('should preload models', async () => {
    const models = ['text-embedding-3-small', 'text-embedding-3-large'];
    const result = await sdk.preloadModels(models);
    expect(result).toEqual('ok');
  });
});
