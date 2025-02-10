import { getServer } from '../server';
import { handlers } from './handlers';
import { mockDirectorEmbeddingRequest, xtoken } from './mockData';
import { apiDirectorSdk } from '../setupTest';
import DirectorEmbeddingResponse from '../../src/models/DirectorEmbeddingResponse';

const server = getServer(handlers);

describe('ViewDirectorSdk', () => {
    beforeAll(() => {
        server.listen();
    });
    afterEach(() => {
        server.resetHandlers();
    });
    afterAll(() => server.close());

    describe('Embedding', () => {
        it('generate embedding', async () => {
            const data = await apiDirectorSdk.generateEmbedding(mockDirectorEmbeddingRequest);
            expect(data instanceof DirectorEmbeddingResponse).toBe(true);
        });

        it('retrieve connection', async () => {
            const data = await apiDirectorSdk.retrieveConnections(xtoken);
            expect(typeof data).toBe('object');
        });


    });
});