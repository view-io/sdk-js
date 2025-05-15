import { getServer } from '../server';
import { handlers } from './handler';
import {
  mockTenant,
  mockPool,
  mockBucket,
  mockObject,
  mockCollection,
  mockSourceDocument,
  mockGraphNode,
  mockId,
  mockNodeRequest,
  mockDataRepository,
  mockGraph,
  mockSemanticCell,
  mockGraphId,
  mockGraphResponses,
  mockNodeId,
} from './mockData';
import { GraphNodeTypeEnum } from '../../src/enums/GraphNodeTypeEnum';
import { apiGraphSdk, mockEndpoint3, apiGraphNullSdk } from '../setupTest';

const server = getServer(handlers);
const token = new AbortController();
describe.skip('GraphSdk', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => server.close());

  describe('properties', () => {
    it('should access endpoint', async () => {
      expect(apiGraphSdk._GraphDriver.Endpoint).toBe(mockEndpoint3);
    });

    it('should return timeout', async () => {
      expect(apiGraphSdk._GraphDriver.TimeoutMs).toBe(apiGraphSdk._GraphDriver._TimeoutMs);
    });

    it('should set timeout value when valid', () => {
      apiGraphSdk._GraphDriver.TimeoutMs = 5000;
      expect(apiGraphSdk._GraphDriver._TimeoutMs).toBe(5000);
    });

    it('should throw error when timeout is less than 1', () => {
      expect(() => {
        apiGraphSdk._GraphDriver.TimeoutMs = 0; // Use the setter
      }).toThrow('Timeout must be greater than 0');

      expect(() => {
        apiGraphSdk._GraphDriver.TimeoutMs = -1; // Use the setter
      }).toThrow('Timeout must be greater than 0');
    });
  });

  describe('Connectivity', () => {
    it('should validate connectivity successfully', async () => {
      const result = await apiGraphSdk.validateConnectivity(token);
      expect(result).toBe(true);
    });
  });

  describe('Check ', () => {
    it('should check graph exists', async () => {
      const result = await apiGraphSdk._GraphDriver.graphExists(mockGraphId, token);
      expect(result).toBe(true);
    });
    it('should check node exists', async () => {
      const result = await apiGraphSdk._GraphDriver.nodeExists(mockGraphId, mockNodeId, token);
      expect(result).toBe(true);
    });
    it('should chec edge exist', async () => {
      const result = await apiGraphSdk._GraphDriver.edgeExists(mockGraphId, mockNodeId, token);
      expect(result).toBe(true);
    });
  });

  describe('Object Metadata Operations', () => {
    it('should insert object metadata successfully', async () => {
      const result = await apiGraphSdk.insertObjectMetadata(mockTenant, mockPool, mockBucket, mockObject);
      expect(result.Success).toBe(true);
    });

    it('should throw error when tenant is null', async () => {
      await expect(apiGraphSdk.insertObjectMetadata(null, mockPool, mockBucket, mockObject)).rejects.toThrow();
    });

    it('should throw error when storage pool is null', async () => {
      await expect(apiGraphSdk.insertObjectMetadata(mockTenant, null, mockBucket, mockObject)).rejects.toThrow();
    });
    it('should throw error when storage bucket is null', async () => {
      await expect(apiGraphSdk.insertObjectMetadata(mockTenant, mockPool, null, mockObject)).rejects.toThrow();
    });
    it('should throw error when storage obj is null', async () => {
      await expect(apiGraphSdk.insertObjectMetadata(mockTenant, mockPool, mockBucket, null)).rejects.toThrow();
    });
  });

  describe('GraphSdk insertObjectMetadataForCrawler', () => {
    it('should insert object metadata and associated objects successfully', async () => {
      const result = await apiGraphSdk.insertObjectMetadataForCrawler(
        mockTenant,
        mockDataRepository,
        mockObject,
        token
      );
      expect(result.Success).toBe(true);
    });

    it('should throw an error if tenant is null', async () => {
      await expect(
        apiGraphSdk.insertObjectMetadataForCrawler(null, mockDataRepository, mockObject, token)
      ).rejects.toThrow('ArgumentNullException: tenant');
    });

    it('should throw an error if repo is null', async () => {
      await expect(apiGraphSdk.insertObjectMetadataForCrawler(mockTenant, null, mockObject, token)).rejects.toThrow(
        'ArgumentNullException: repo'
      );
    });

    it('should throw an error if obj is null', async () => {
      await expect(
        apiGraphSdk.insertObjectMetadataForCrawler(mockTenant, mockDataRepository, null, token)
      ).rejects.toThrow('ArgumentNullException: obj');
    });
  });

  describe('GraphSdk removeObjectMetadata', () => {
    it('should remove object metadata and its associated objects successfully', async () => {
      const result = await apiGraphSdk.removeObjectMetadata(mockObject, token);
      expect(result.Success).toBe(false);
    });

    it('should throw an error if object is null', async () => {
      await expect(apiGraphSdk.removeObjectMetadata(null, token)).rejects.toThrow('ArgumentNullException: obj');
    });
  });

  describe('Source Document Operations', () => {
    it('should insert source document successfully', async () => {
      const result = await apiGraphSdk.insertSourceDocument(mockTenant, mockCollection, mockSourceDocument);
      expect(result.Success).toBe(true);
    });

    it('should throw error when tenant is null', async () => {
      await expect(apiGraphSdk.insertSourceDocument(null, mockCollection, mockSourceDocument)).rejects.toThrow();
    });
    it('should throw error when collection is null', async () => {
      await expect(apiGraphSdk.insertSourceDocument(mockTenant, null, mockSourceDocument)).rejects.toThrow();
    });
    it('should throw error when document is null', async () => {
      await expect(apiGraphSdk.insertSourceDocument(mockTenant, mockCollection, null)).rejects.toThrow();
    });
  });

  describe('Node Existence Checks', () => {
    it('should check tenant existence', async () => {
      const exists = await apiGraphSdk.tenantExists(mockTenant);
      expect(exists).toBe(true);
    });

    it('should check storage pool existence', async () => {
      const exists = await apiGraphSdk.storagePoolExists(mockPool);
      expect(exists).toBe(true);
    });
  });

  describe('Node Read Operations', () => {
    it('should read tenant successfully', async () => {
      const tenant = await apiGraphSdk.readTenant(mockTenant);
      expect(tenant).toBeTruthy();
    });

    it('should read storage pool successfully', async () => {
      const pool = await apiGraphSdk.readStoragePool(mockPool);
      expect(pool).toBeTruthy();
    });
  });

  describe('Node Delete Operations', () => {
    it('should delete tenant successfully', async () => {
      await expect(apiGraphSdk.deleteTenant(mockTenant)).resolves.not.toThrow();
    });

    it('should delete storage pool successfully', async () => {
      await expect(apiGraphSdk.deleteStoragePool(mockPool)).resolves.not.toThrow();
    });

    it('should throw error when deleting null tenant', async () => {
      await expect(apiGraphSdk.deleteTenant(null)).rejects.toThrow();
    });
  });

  describe('Data Repository Operations', () => {
    it('should create data repository successfully', async () => {
      const result = await apiGraphSdk.createDataRepository(mockDataRepository);
      expect(result).toBeTruthy();
    });

    it('should throw error when creating repository with null input', async () => {
      await expect(apiGraphSdk.createDataRepository(null)).rejects.toThrow('Data repository object cannot be null.');
    });
  });

  describe('Source Document Management', () => {
    it('should remove source document successfully', async () => {
      await expect(apiGraphSdk.removeSemanticCell(mockGraphNode)).resolves.not.toThrow();
    });

    it('should handle null source document gracefully', async () => {
      await expect(apiGraphSdk.removeSourceDocumentObj(null)).resolves.not.toThrow();
    });
  });

  describe('Semantic Cell Operations', () => {
    it('should remove semantic cell successfully', async () => {
      await expect(apiGraphSdk.removeSemanticCell(mockGraphNode)).resolves.not.toThrow();
    });

    it('should handle null semantic cell gracefully', async () => {
      await expect(apiGraphSdk.removeSemanticCell(null)).resolves.not.toThrow();
    });
  });

  describe('Edge Operations', () => {
    it('should get edges to node successfully', async () => {
      const edges = await apiGraphSdk.getEdgesTo(mockNodeRequest);
      expect(edges).toBeTruthy();
      expect(Array.isArray(edges)).toBe(true);
    });

    it('should throw error when getting edges to invalid node', async () => {
      await expect(apiGraphSdk.getEdgesTo(null)).rejects.toThrow('Invalid node provided.');
    });

    it('should get edges from node successfully', async () => {
      const edges = await apiGraphSdk.getEdgesFrom(mockNodeRequest);
      expect(edges).toBeTruthy();
      expect(Array.isArray(edges)).toBe(true);
    });

    it('should throw error when getting edges from invalid node', async () => {
      await expect(apiGraphSdk.getEdgesFrom(null)).rejects.toThrow('Invalid node provided.');
    });
  });

  describe('Internal Operations', () => {
    it('should perform exists internal check successfully', async () => {
      const exists = await apiGraphSdk.existsInternal('TestType', 'TestKey', 'TestValue');
      expect(typeof exists).toBe('boolean');
    });

    it('should perform exists internal dict check successfully', async () => {
      const exists = await apiGraphSdk.existsInternalDict('TestType', { key: 'value' });
      expect(typeof exists).toBe('boolean');
    });

    it('should build expression correctly', () => {
      const expr = apiGraphSdk.buildExpression('TestType', 'TestKey', 'TestValue');
      expect(expr).toHaveProperty('field');
      expect(expr).toHaveProperty('operator');
      expect(expr).toHaveProperty('value');
    });
  });

  describe('Semantic Cell Internal Operations', () => {
    it('should insert semantic cells internally', async () => {
      const result = await apiGraphSdk.insertSemanticCellsInternal(
        mockGraph,
        mockNodeRequest,
        mockNodeRequest,
        mockSemanticCell
      );

      expect(result.success).toBe(true);
      expect(result.semanticCells).toBeDefined();
      expect(result.semanticChunks).toBeDefined();
    });

    it('should throw error when source document is null', async () => {
      await expect(apiGraphSdk.insertSemanticCellsInternal(mockGraph, null, null, [])).rejects.toThrow(
        'Source document node cannot be null.'
      );
    });
  });

  describe('Getter for TimestampFormat', () => {
    it('should return the default timestamp format', () => {
      const defaultFormat = 'yyyy-MM-dd HH:mm:ss.ffffffz';
      expect(apiGraphSdk.TimestampFormat).toBe(defaultFormat);
    });
  });

  describe('Setter for TimestampFormat', () => {
    it('should set a valid timestamp format', () => {
      const newFormat = 'MM/dd/yyyy HH:mm:ss';
      apiGraphSdk.TimestampFormat = newFormat;
      expect(apiGraphSdk.TimestampFormat).toBe(newFormat);
    });

    it('should throw an error when setting null or empty timestamp format', () => {
      expect(() => {
        apiGraphSdk.TimestampFormat = null;
      }).toThrow('TimestampFormat cannot be null or empty.');

      expect(() => {
        apiGraphSdk.TimestampFormat = '';
      }).toThrow('TimestampFormat cannot be null or empty.');

      expect(() => {
        apiGraphSdk.TimestampFormat = '   ';
      }).toThrow('TimestampFormat cannot be null or empty.');
    });

    it('should throw an error when setting an invalid timestamp format', () => {
      jest.spyOn(Date.prototype, 'toISOString').mockImplementationOnce(() => null);

      expect(() => {
        apiGraphSdk.TimestampFormat = 'invalid format';
      }).toThrow('Invalid TimestampFormat.');

      jest.restoreAllMocks();
    });
  });

  describe('GraphSdk removeSourceDocument', () => {
    it('should throw an error if the document is null', async () => {
      await expect(apiGraphSdk.removeSourceDocument(null, token)).rejects.toThrow('ArgumentNullException: doc');
    });
  });

  describe('tenantExists', () => {
    it('should check if a tenant exists and return true', async () => {
      const result = await apiGraphSdk.tenantExists(mockTenant, token);
      expect(result).toBe(true);
    });

    it('should throw an error if tenant is null', async () => {
      await expect(apiGraphSdk.tenantExists(null, token)).rejects.toThrow('Tenant cannot be null or undefined.');
    });
  });

  describe('storagePoolExists', () => {
    it('should check if a storage pool exists and return true', async () => {
      const result = await apiGraphSdk.storagePoolExists(mockPool, token);
      expect(result).toBe(true);
    });

    it('should throw an error if pool is null', async () => {
      await expect(apiGraphSdk.storagePoolExists(null, token)).rejects.toThrow('Pool cannot be null or undefined.');
    });
  });

  describe('bucketExists', () => {
    it('should check if a bucket exists and return true', async () => {
      const result = await apiGraphSdk.bucketExists(mockBucket, token);
      expect(result).toBe(true);
    });

    it('should throw an error if bucket is null', async () => {
      await expect(apiGraphSdk.bucketExists(null, token)).rejects.toThrow('Bucket cannot be null or undefined.');
    });
  });

  describe('objectMetadataExists', () => {
    it('should check if an object exists and return true', async () => {
      const result = await apiGraphSdk.objectMetadataExists(mockObject, token);
      expect(result).toBe(true);
    });

    it('should throw an error if object is null', async () => {
      await expect(apiGraphSdk.objectMetadataExists(null, token)).rejects.toThrow(
        'Object cannot be null or undefined.'
      );
    });
  });

  describe('collectionExists', () => {
    it('should check if a collection exists and return true', async () => {
      const result = await apiGraphSdk.collectionExists(mockCollection, token);
      expect(result).toBe(true);
    });

    it('should throw an error if collection is null', async () => {
      await expect(apiGraphSdk.collectionExists(null, token)).rejects.toThrow(
        'Collection cannot be null or undefined.'
      );
    });
  });

  describe('sourceDocumentExists', () => {
    it('should check if a source document exists and return true', async () => {
      const result = await apiGraphSdk.sourceDocumentExists(mockSourceDocument, token);
      expect(result).toBe(true);
    });

    it('should throw an error if document is null', async () => {
      await expect(apiGraphSdk.sourceDocumentExists(null, token)).rejects.toThrow(
        'Source document cannot be null or undefined.'
      );
    });
  });

  describe('semanticCellExists', () => {
    it('should check if a semantic cell exists and return true', async () => {
      const result = await apiGraphSdk.semanticCellExists(mockSemanticCell, token);
      expect(result).toBe(true);
    });

    it('should throw an error if cell is null', async () => {
      await expect(apiGraphSdk.semanticCellExists(null, token)).rejects.toThrow(
        'Semantic cell cannot be null or undefined.'
      );
    });
  });

  describe('semanticChunkExists', () => {
    it('should check if a semantic chunk exists and return true', async () => {
      const result = await apiGraphSdk.semanticChunkExists(mockGraphId, token);
      expect(result).toBe(true);
    });

    it('should throw an error if chunk is null', async () => {
      await expect(apiGraphSdk.semanticChunkExists(null, token)).rejects.toThrow(
        'Semantic chunk cannot be null or undefined.'
      );
    });
  });

  describe('dataRepositoryExists', () => {
    it('should check if a data repository exists and return true', async () => {
      const result = await apiGraphSdk.dataRepositoryExists(mockDataRepository, token);
      expect(result).toBe(true);
    });

    it('should throw an error if repository is null', async () => {
      await expect(apiGraphSdk.dataRepositoryExists(null, token)).rejects.toThrow(
        'Data repository cannot be null or undefined.'
      );
    });
  });

  describe('Existence Check Methods by GUID', () => {
    it(`should check if a tenant exists by GUID and return true`, async () => {
      const result = await apiGraphSdk.tenantExistsByGUID(mockTenant, token);
      expect(result).toBe(true);
    });
    it('should throw an error if the tenant GUID is null or empty for all methods', async () => {
      await expect(apiGraphSdk.tenantExistsByGUID(null, token)).rejects.toThrow('GUID cannot be null or empty.');
    });

    it(`should check if a storage pool exists by GUID and return true`, async () => {
      const result = await apiGraphSdk.storagePoolExistsByGUID(mockId, token);
      expect(result).toBe(true);
    });
    it('should throw an error if the storage pool GUID is null or empty for all methods', async () => {
      await expect(apiGraphSdk.storagePoolExistsByGUID(null, token)).rejects.toThrow('GUID cannot be null or empty.');
    });

    it(`should check if a bucket exists by GUID and return true`, async () => {
      const result = await apiGraphSdk.bucketExistsByGUID(mockId, token);
      expect(result).toBe(true);
    });
    it('should throw an error if the bucket GUID is null or empty for all methods', async () => {
      await expect(apiGraphSdk.bucketExistsByGUID(null, token)).rejects.toThrow('GUID cannot be null or empty.');
    });

    it(`should check if a objectMetadata exists by GUID and return true`, async () => {
      const result = await apiGraphSdk.objectMetadataExistsByGUID(mockId, token);
      expect(result).toBe(true);
    });
    it('should throw an error if the objectMetadata GUID is null or empty for all methods', async () => {
      await expect(apiGraphSdk.objectMetadataExistsByGUID(null, token)).rejects.toThrow(
        'GUID cannot be null or empty.'
      );
    });

    it(`should check if a collectionExists exists by GUID and return true`, async () => {
      const result = await apiGraphSdk.collectionExistsByGUID(mockId, token);
      expect(result).toBe(true);
    });
    it('should throw an error if the collectionExists GUID is null or empty for all methods', async () => {
      await expect(apiGraphSdk.collectionExistsByGUID(null, token)).rejects.toThrow('GUID cannot be null or empty.');
    });

    it(`should check if a sourceDocumentExists exists by GUID and return true`, async () => {
      const result = await apiGraphSdk.sourceDocumentExistsByGUID(mockId, token);
      expect(result).toBe(true);
    });
    it('should throw an error if the sourceDocumentExists GUID is null or empty for all methods', async () => {
      await expect(apiGraphSdk.sourceDocumentExistsByGUID(null, token)).rejects.toThrow(
        'GUID cannot be null or empty.'
      );
    });

    it(`should check if a semanticCellExists exists by GUID and return true`, async () => {
      const result = await apiGraphSdk.semanticCellExistsByGUID(mockId, token);
      expect(result).toBe(true);
    });
    it('should throw an error if the semanticCellExists GUID is null or empty for all methods', async () => {
      await expect(apiGraphSdk.semanticCellExistsByGUID(null, token)).rejects.toThrow('GUID cannot be null or empty.');
    });

    it(`should check if a semanticChunkExists exists by GUID and return true`, async () => {
      const result = await apiGraphSdk.semanticChunkExistsByGUID(mockId, token);
      expect(result).toBe(true);
    });
    it('should throw an error if the semanticChunkExists GUID is null or empty for all methods', async () => {
      await expect(apiGraphSdk.semanticChunkExistsByGUID(null, token)).rejects.toThrow('GUID cannot be null or empty.');
    });

    it(`should check if a dataRepositoryExists  exists by GUID and return true`, async () => {
      const result = await apiGraphSdk.dataRepositoryExistsByGUID(mockId, token);
      expect(result).toBe(true);
    });
    it('should throw an error if the dataRepositoryExists  GUID is null or empty for all methods', async () => {
      await expect(apiGraphSdk.dataRepositoryExistsByGUID(null, token)).rejects.toThrow(
        'GUID cannot be null or empty.'
      );
    });
  });

  describe('createTenant', () => {
    it('should throw an error if the tenant object is null', async () => {
      await expect(apiGraphSdk.createTenant(null, token)).rejects.toThrowError('Tenant object cannot be null.');
    });
  });

  describe('createNodeInternal', () => {
    it('should create a Tenant node with correct data', async () => {
      const result = await apiGraphSdk.createNodeInternal(GraphNodeTypeEnum.Tenant, 'TenantName', mockGraphNode, token);
      expect(result.success).toBe(undefined);
    });

    it('should create a StoragePool node with correct data', async () => {
      const result = await apiGraphSdk.createNodeInternal(
        GraphNodeTypeEnum.StoragePool,
        'StoragePool1',
        mockGraphNode,
        token
      );

      expect(result.success).toBe(undefined);
    });
    it('should create a StoragePool node with correct data', async () => {
      const result = await apiGraphSdk.createNodeInternal(
        GraphNodeTypeEnum.StoragePool,
        'StoragePool1',
        mockGraphNode,
        token
      );

      expect(result.success).toBe(undefined);
    });
    it('should create a Bucket node with correct data', async () => {
      const result = await apiGraphSdk.createNodeInternal(GraphNodeTypeEnum.Bucket, 'Bucket', mockGraphNode, token);

      expect(result.success).toBe(undefined);
    });
    it('should create a Collection node with correct data', async () => {
      const result = await apiGraphSdk.createNodeInternal(
        GraphNodeTypeEnum.Collection,
        'Collection',
        mockGraphNode,
        token
      );

      expect(result.success).toBe(undefined);
    });

    it('should create a SourceDocument node with correct data', async () => {
      const result = await apiGraphSdk.createNodeInternal(
        GraphNodeTypeEnum.SourceDocument,
        'SourceDocument',
        mockGraphNode,
        token
      );

      expect(result.success).toBe(undefined);
    });

    it('should create a VectorRepository node with correct data', async () => {
      const result = await apiGraphSdk.createNodeInternal(
        GraphNodeTypeEnum.VectorRepository,
        'VectorRepository',
        mockGraphNode,
        token
      );

      expect(result.success).toBe(undefined);
    });

    it('should create a SemanticCell node with correct data', async () => {
      const result = await apiGraphSdk.createNodeInternal(
        GraphNodeTypeEnum.SemanticCell,
        'SemanticCell',
        mockGraphNode,
        token
      );

      expect(result.success).toBe(undefined);
    });

    it('should create a SemanticChunk node with correct data', async () => {
      const result = await apiGraphSdk.createNodeInternal(
        GraphNodeTypeEnum.SemanticChunk,
        'SemanticChunk',
        mockGraphNode,
        token
      );

      expect(result.success).toBe(undefined);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
