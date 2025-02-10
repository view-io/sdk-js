import { getServer } from '../server';
import { handlers } from './handlers';
import { mockMetaDataRuleGuid, metaDataRulesData, metaDataRulesMockApiResponse } from './mockData';
import { api } from '../setupTest';
import MetadataRule from '../../src/models/MetadataRule';

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
      const data = await api.retrieveMetadataRule(mockMetaDataRuleGuid);
      expect(data instanceof MetadataRule).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new MetadataRule(metaDataRulesData[mockMetaDataRuleGuid])));
    });

    it('throws error when if missed guid while retrieving a MetadataRule', async () => {
      try {
        await api.retrieveMetadataRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a MetadataRule with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveMetadataRule(mockMetaDataRuleGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all MetadataRule', async () => {
      const data = await api.retrieveMetadataRules();
      data.map((rule) => {
        expect(JSON.stringify(rule)).toBe(JSON.stringify(new MetadataRule(metaDataRulesData[rule.GUID])));
      });
    });

    it('creates a MetadataRule', async () => {
      const data = await api.createMetadataRule({
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
      expect(true).toBe(data instanceof MetadataRule);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new MetadataRule(metaDataRulesData[mockMetaDataRuleGuid])));
    });

    it('throws error when creating a MetadataRule with rule parameter', async () => {
      try {
        await api.createMetadataRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('Update a MetadataRule', async () => {
      const data = await api.updateMetadataRule({
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

      expect(true).toBe(data instanceof MetadataRule);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new MetadataRule(metaDataRulesData[mockMetaDataRuleGuid])));
    });

    it('throws error when if missed guid while updating a MetadataRule', async () => {
      try {
        await api.updateMetadataRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: rule is null or empty');
      }
    });

    it('delete a MetadataRule', async () => {
      const data = await api.deleteMetadataRule(mockMetaDataRuleGuid);
      console.log('data: ', data);
      expect(data instanceof MetadataRule).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new MetadataRule(metaDataRulesData[mockMetaDataRuleGuid])));
    });

    it('throws error when if missed guid while deleting a MetadataRule', async () => {
      try {
        await api.deleteMetadataRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a MetadataRule exist', async () => {
      const data = await api.existsMetadataRule(mockMetaDataRuleGuid);
      expect(data).toBe('true');
    });

    it('Check if a MetadataRule does not exist', async () => {
      const data = await api.existsMetadataRule('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a MetadataRule existance', async () => {
      try {
        await api.existsMetadataRule();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
