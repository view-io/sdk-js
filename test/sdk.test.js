import { getServer } from './server';
import { handlers } from './nodes/handlers';
import { api, mockAccessToken, mockTenantId, sdk } from './setupTest';
const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('test Base SDK methods', () => {
    it('throws error if missed parameter while initializing sdk without proper parameter', async () => {
      try {
        new sdk.ViewConfigurationSdk(mockTenantId, mockAccessToken);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: endpoint is null or empty');
      }
    });

    it('calls retrieve methods without url param', async () => {
      try {
        await api.retrieve();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: url is null or empty');
      }
    });

    it('calls retrieve methods without url param', async () => {
      try {
        await api.retrieve();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: url is null or empty');
      }
    });
  });
});
