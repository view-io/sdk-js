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
            const data = await apiViewHealthCheckSdk.checkSwitchboardHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Config', async () => {
            const data = await apiViewHealthCheckSdk.checkConfigHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Storage', async () => {
            const data = await apiViewHealthCheckSdk.checkStorageHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Vector', async () => {
            const data = await apiViewHealthCheckSdk.checkVectorHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Processor', async () => {
            const data = await apiViewHealthCheckSdk.checkProcessorHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Assistant', async () => {
            const data = await apiViewHealthCheckSdk.checkAssistantHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Orchestrator', async () => {
            const data = await apiViewHealthCheckSdk.checkOrchestratorHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Crawler', async () => {
            const data = await apiViewHealthCheckSdk.checkCrawlerHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Lexi', async () => {
            const data = await apiViewHealthCheckSdk.checkLexiHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Embeddings', async () => {
            const data = await apiViewHealthCheckSdk.checkEmbeddingsHealth();
            expect(data).toBe('true');
        });

        it('Check health of a Director', async () => {
            const data = await apiViewHealthCheckSdk.checkDirectorHealth();
            expect(data).toBe('true');
        });
    });
});