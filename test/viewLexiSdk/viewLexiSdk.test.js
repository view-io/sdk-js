import { ViewLexiSdk } from '../../src/index';
import Collection from '../../src/models/Collection';
import { getServer } from '../server';
import { mockAccessToken, mockEndpoint, mockTenantId } from '../setupTest';
import { handlers } from './handlers';
import { mockCollectionsData } from './mockData';

const api = new ViewLexiSdk(mockTenantId, mockAccessToken, mockEndpoint);

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('ViewLexiSdk', () => {
    it('should retrieve collections', async () => {
      const data = await api.retrieveCollections();
      data.map((collections) => {
        expect(JSON.stringify(collections)).toBe(JSON.stringify(new Collection(mockCollectionsData[collections.GUID])));
      });
    });
  });
});
