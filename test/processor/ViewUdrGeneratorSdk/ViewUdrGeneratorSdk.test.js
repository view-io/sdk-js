import { getServer } from '../../server';
import { handlers } from './handler';
import { mockDocument, mockDataTable, mockUdrResponse, mockFilename } from './mockData';
import { apiViewUdrGeneratorSdk } from '../../setupTest';
import UdrDocument from '../../../src/models/UdrDocument';

const server = getServer(handlers);

describe('ViewUdrGeneratorSdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('Document Processing', () => {
    it('successfully processes document request', async () => {
      const response = await apiViewUdrGeneratorSdk.processDocument(mockDocument);
      expect(JSON.stringify(response)).toBe(JSON.stringify(new UdrDocument(mockUdrResponse)));
    });

    it('throws error when document request is missing', async () => {
      try {
        await apiViewUdrGeneratorSdk.processDocument(null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Document request is required.');
      }
    });

    it('returns null when file reading fails', async () => {
      const response = await apiViewUdrGeneratorSdk.processDocument(mockDocument, 'invalid-file.txt');
      expect(response).toBeNull();
    });
  });

  describe('Data Table Processing', () => {
    // it.only('successfully processes data table request', async () => {
    //   const response = await apiViewUdrGeneratorSdk.processDataTable(mockDataTable, mockFilename);
    //   expect(JSON.stringify(response)).toBe(JSON.stringify(new UdrDocument(mockUdrResponse)));
    // });
    it('throws error when data table request is missing', async () => {
      try {
        await apiViewUdrGeneratorSdk.processDataTable(null);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Data table request is required.');
      }
    });
    it('throws error when DatabaseType is missing', async () => {
      try {
        await apiViewUdrGeneratorSdk.processDataTable({ mockDataTable, DatabaseType: null });
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: DatabaseType is required.');
      }
    });
    it('throws error when filename is missing for Sqlite', async () => {
      try {
        await apiViewUdrGeneratorSdk.processDataTable({
          mockDataTable,
          DatabaseType: 'Sqlite',
        });
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: A filename must be supplied when using Sqlite.');
      }
    });
    it('throws error when filename is provided for non-Sqlite', async () => {
      try {
        await apiViewUdrGeneratorSdk.processDataTable({ mockDataTable, DatabaseType: 'MySQL' }, mockFilename);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe(
          'Error: A filename should not be supplied when using a database type other than Sqlite.'
        );
      }
    });
  });
});
