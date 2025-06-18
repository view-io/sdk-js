import { getServer } from '../../server';
import { handlers } from './handler';
import {
  mockTenant,
  mockCollection,
  mockPool,
  mockBucket,
  mockObject,
  mockMetadataRule,
  mockEmbeddingsRule,
  mockVectorRepo,
  mockGraphRepo,
  mockProcessorResponse,
  mockTypeResult,
  mockSemanticCellResponse,
  mockUdrDocument,
} from './mockData';
import { apiViewProcessorSdk } from '../../setupTest';
// import TypeResult from '../../../src/models/TypeResult';
// import SemanticCellResponse from '../../../src/models/SemanticCellResponse';
// import { UdrDocument } from '../../../src/models/UdrDocument';

const server = getServer(handlers);

describe('ViewProcessorSdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('Storage Server Processing', () => {
    it('successfully processes storage server request', async () => {
      const response = await apiViewProcessorSdk.process.processingPipeline({
        Tenant: mockTenant,
        Collection: mockCollection,
        Pool: mockPool,
        Bucket: mockBucket,
        Object: mockObject,
        MetadataRule: mockMetadataRule,
        EmbeddingsRule: mockEmbeddingsRule,
        VectorRepository: mockVectorRepo,
        GraphRepository: mockGraphRepo,
      });

      expect(response).toBeDefined();
      expect(response).toEqual(mockProcessorResponse);
    });
  });

  describe('Crawler Processing', () => {
    it('successfully processes crawler request', async () => {
      const response = await apiViewProcessorSdk.process.processingPipeline({
        Tenant: mockTenant,
        Collection: mockCollection,
        Pool: mockPool,
        Object: mockObject,
        MetadataRule: null,
        EmbeddingsRule: mockEmbeddingsRule,
        VectorRepository: mockVectorRepo,
        GraphRepository: mockGraphRepo,
      });

      expect(response).toBeDefined();
      expect(response).toEqual(mockProcessorResponse);
    });
  });

  describe('Cleanup Pipeline', () => {
    it('successfully cleans up the pipeline', async () => {
      const response = await apiViewProcessorSdk.process.cleanupPipeline({
        Tenant: mockTenant,
        Collection: mockCollection,
        Pool: mockPool,
        Bucket: mockBucket,
        Object: mockObject,
      });
      expect(response).toBeDefined();
      expect(response).toEqual(mockProcessorResponse);
    });
  });

  describe('Type Detection', () => {
    it('successfully detects the type of the object', async () => {
      const response = await apiViewProcessorSdk.process.typeDetection(mockObject);
      expect(response).toBeDefined();
      expect(response).toEqual(mockTypeResult);
    });
  });

  describe('Extract Semantic Cells', () => {
    it('successfully extracts the semantic cells of the object', async () => {
      const response = await apiViewProcessorSdk.process.extractSemanticCells(mockObject);
      expect(response).toBeDefined();
      expect(response).toEqual(mockSemanticCellResponse);
    });
  });

  describe('Generate UDR', () => {
    it('successfully generates the UDR of the object', async () => {
      const response = await apiViewProcessorSdk.process.generateUdr(mockObject);
      expect(response).toBeDefined();
      expect(response).toEqual(mockUdrDocument);
    });
  });
});
