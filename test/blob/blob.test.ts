import { handlers } from './handlers';
import { api } from '../setupTest';

import { getServer } from '../server';
import { mockBlobGuid, mockBlobData, mockEmbeddingResult, mockBlobResult, mockBlobResultData } from './mockData';

const server = getServer(handlers);

describe('ViewConfigurationSdk', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());
  describe('Blob Methods', () => {
    it('enumerates blobs', async () => {
      const data = await api.Blob.enumerate();
      expect(data).toBeDefined();
      expect(data).toEqual(mockEmbeddingResult);
    });

    it('retrieves List of blob', async () => {
      const data = await api.Blob.readAll();
      expect(
        data.forEach((blob) => {
          expect(blob).toEqual(mockBlobResult[0]);
        })
      );
    });

    it('retrieves a blob', async () => {
      const data = await api.Blob.read(mockBlobGuid);
      expect(data).toEqual(mockBlobResult[0]);
    });

    it('retrieve a blob with data', async () => {
      const data = await api.Blob.readIncludeData(mockBlobGuid);
      expect(data).toEqual(mockBlobResultData);
    });

    it('create a blob', async () => {
      const data = await api.Blob.create(mockBlobData);
      expect(data).toEqual(mockBlobResult[0]);
    });

    it('delete a blob', async () => {
      const data = await api.Blob.delete(mockBlobGuid);
      expect(data).toBe(true);
    });

    it('Check if a blob exist', async () => {
      const data = await api.Blob.exists(mockBlobGuid);
      expect(data).toBe(true);
    });
  });
});
