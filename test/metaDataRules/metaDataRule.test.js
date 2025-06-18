import { getServer } from '../server';
import { handlers } from './handlers';
import { mockMetaDataRuleGuid, metaDataRulesData, metaDataRulesMockApiResponse } from './mockData';
import { api } from '../setupTest';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('MetadataRule', () => {
    it('retrieves a MetadataRule', async () => {
      const data = await api.MetadataRule.read(mockMetaDataRuleGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(metaDataRulesData[mockMetaDataRuleGuid]);
    });

    it('throws error when if missed guid while retrieving a MetadataRule', async () => {
      try {
        await api.MetadataRule.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a MetadataRule with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.MetadataRule.read(mockMetaDataRuleGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all MetadataRule', async () => {
      const data = await api.MetadataRule.readAll();
      data.map((rule) => {
        expect(rule).toEqual(metaDataRulesData[rule.GUID]);
      });
    });

    it('creates a MetadataRule', async () => {
      const newMetadataRule = {
        TenantGUID: 'default',
        BucketGUID: 'default',
        OwnerGUID: 'default',
        Name: 'Example Metadata Rule',
        ContentType: 'application/json',
        ProcessingEndpoint: 'http://localhost:8501/customProcessor',
        MaxChunkContentLength: 1024,
        TopTerms: 10,
        CaseInsensitive: false,
        CreatedUtc: '2024-09-24T12:00:00Z',
      };
      const data = await api.MetadataRule.create(newMetadataRule);
      expect(data).toBeDefined();
      expect(data).toEqual(metaDataRulesData[mockMetaDataRuleGuid]);
    });

    it('throws error when creating a MetadataRule with rule parameter', async () => {
      try {
        await api.MetadataRule.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('Update a MetadataRule', async () => {
      const data = await api.MetadataRule.update({
        GUID: mockMetaDataRuleGuid,
        TenantGUID: 'default',
        BucketGUID: 'default',
        OwnerGUID: 'default',
        Name: 'Example Metadata Rule',
        ContentType: 'application/json',
        ProcessingEndpoint: 'http://localhost:8501/customProcessor',
        MaxChunkContentLength: 1024,
        TopTerms: 10,
        CaseInsensitive: false,
        CreatedUtc: '2024-09-24T12:00:00Z',
      });

      expect(data).toBeDefined();
      expect(data).toEqual(metaDataRulesData[mockMetaDataRuleGuid]);
    });

    it('throws error when if missed guid while updating a MetadataRule', async () => {
      try {
        await api.MetadataRule.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('delete a MetadataRule', async () => {
      const data = await api.MetadataRule.delete(mockMetaDataRuleGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a MetadataRule', async () => {
      try {
        await api.MetadataRule.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a MetadataRule exist', async () => {
      const data = await api.MetadataRule.exists(mockMetaDataRuleGuid);
      expect(data).toBe(true);
    });

    it('Check if a MetadataRule does not exist', async () => {
      try {
        await api.MetadataRule.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a MetadataRule existance', async () => {
      try {
        await api.MetadataRule.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
