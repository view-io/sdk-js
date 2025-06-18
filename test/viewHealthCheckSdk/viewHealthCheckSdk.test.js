import { getServer } from '../server';
import { handlers } from './handlers';
import { apiViewHealthCheckSdk } from '../setupTest';

const server = getServer(handlers);

describe('ViewHealthCheckSdk', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('ViewHealthCheckSdk', () => {
    it('Check health of a Switchboard', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkSwitchboard();
      expect(data).toBe(true);
    });

    it('Check health of a Config', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkConfig();
      expect(data).toBe(true);
    });

    it('Check health of a Storage', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkStorage();
      expect(data).toBe(true);
    });

    it('Check health of a Vector', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkVector();
      expect(data).toBe(true);
    });

    it('Check health of a Processor', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkProcessor();
      expect(data).toBe(true);
    });

    it('Check health of a Assistant', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkAssistant();
      expect(data).toBe(true);
    });

    it('Check health of a Orchestrator', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkOrchestrator();
      expect(data).toBe(true);
    });

    it('Check health of a Crawler', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkCrawler();
      expect(data).toBe(true);
    });

    it('Check health of a Lexi', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkLexi();
      expect(data).toBe(true);
    });

    it('Check health of a Embeddings', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkEmbeddings();
      expect(data).toBe(true);
    });

    it('Check health of a Director', async () => {
      const data = await apiViewHealthCheckSdk.healthCheck.checkDirector();
      expect(data).toBe(true);
    });
  });
});
