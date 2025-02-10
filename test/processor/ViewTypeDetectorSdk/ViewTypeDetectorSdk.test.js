import { getServer } from '../../server';
import { handlers } from './handler';
import { mockData, mockTypeDetectorResponse, mockTypeRequest } from './mockData';
import { apiViewTypeDetectorSdk } from '../../setupTest';
import { DocumentTypeEnum } from '../../../src/enums/DocumentTypeEnum';
import TypeResult from '../../../src/models/TypeResult';

const server = getServer(handlers);

describe('ViewTypeDetectorSdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('Type Detection Processing', () => {
    it('successfully processes type detection request', async () => {
      const response = await apiViewTypeDetectorSdk.process(mockData, 'application/octet-stream');
      expect(JSON.stringify(response)).toBe(JSON.stringify(new TypeResult(mockTypeDetectorResponse)));
    });

    it('throws error when data is missing', async () => {
      try {
        await apiViewTypeDetectorSdk.process(null, 'application/octet-stream');
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: No data supplied for content type detection.');
      }
    });

    it('throws error when data is empty', async () => {
      try {
        await apiViewTypeDetectorSdk.process(new Uint8Array(0), 'application/octet-stream');
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: No data supplied for content type detection.');
      }
    });

    it('returns null when server returns null response', async () => {
      server.use(
        handlers[1] // Using error handler
      );

      const response = await apiViewTypeDetectorSdk.process(mockData, 'application/octet-stream');
      expect(response).toEqual({
        mimeType: 'application/octet-stream',
        extension: null,
        type: DocumentTypeEnum.Unknown,
      });
    });

    it.only('successfully processes type detection request', async () => {
      const response = await apiViewTypeDetectorSdk.typeDetector(mockTypeRequest);
      expect(response).toBeInstanceOf(TypeResult);
    });
  });
});
