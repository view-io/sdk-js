import { getServer } from '../server';
import { apiEmbeddingsSdk } from '../setupTest';
import { handlers } from './handlers';

const server = getServer(handlers);

describe('Crawler SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('embeddings', () => {
    // issue: api take boday method is head

    it('Check if a embeddings exist', async () => {
      const data = await apiEmbeddingsSdk.checkEmbeddingsExistence();
      expect(data).toBe('true');
    });
    it('throws error when if missed guid while checking a embedding existance', async () => {
      try {
        await apiEmbeddingsSdk.checkEmbeddingsExistence();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
    it('Check if a preload Models', async () => {
      const payload = {
        Models: ["all-MiniLM-L6-v2"],
        ApiKey: "", // Use a valid key as per your mock setup
      };
      const data = await apiEmbeddingsSdk.preloadModels(payload);
      expect(data.Success).toBe(true); // Adjust based on your actual response structure
    });
    // generateEmbeddings
    it('should generate embeddings successfully', async () => {
      const result = await apiEmbeddingsSdk.generateEmbeddings({
        Models: ["all-MiniLM-L6-v2"],
        ApiKey: "", // Use a valid key as per your mock setup
        "Contents": [
          "This is a sample chunk of text, hello!",
          "Oh wow, here's another chunk of text",
          "And yet again, a third chunk of text"
        ]
      });
      expect(result.Success).toBe(true);
    });
  });
});
