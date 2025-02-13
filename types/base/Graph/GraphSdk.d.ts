/**
 * Graph SDK service.
 * @module base/GraphSdk
 * @version 0.1.0
 */
export default class GraphSdk {
    /**
     * Constructs a new GraphSdk instance.
     * @alias module:base/GraphSdk
     * @class
     * @param {GraphRepository} repo - The Graph repository object.
     */
    constructor(repo: GraphRepository);
    _GraphRepository: GraphRepository;
    _TimestampFormat: string;
    TENANT_TYPE: string;
    TENANT_GUID: string;
    POOL_TYPE: string;
    POOL_GUID: string;
    BUCKET_TYPE: string;
    BUCKET_GUID: string;
    OBJECT_TYPE: string;
    OBJECT_GUID: string;
    OBJECT_TENANT_GUID: string;
    OBJECT_KEY: string;
    OBJECT_VERSION: string;
    COLLECTION_TYPE: string;
    COLLECTION_GUID: string;
    SOURCEDOC_TYPE: string;
    SOURCEDOC_GUID: string;
    SEMCELL_TYPE: string;
    SEMCELL_GUID: string;
    SEMCHUNK_TYPE: string;
    SEMCHUNK_GUID: string;
    DATAREPOSITORY_TYPE: string;
    DATAREPOSITORY_GUID: string;
    /**
     * Graph repository.
     * @returns {GraphRepository} The GraphRepository instance.
     */
    get GraphRepository(): GraphRepository;
    /**
     * Set the timestamp format.
     * @param {string} value - The new timestamp format.
     * @throws {Error} Throws an error if the timestamp format is invalid or null.
     */
    set TimestampFormat(value: string);
    /**
     * Timestamp format.
     * @returns {string} The timestamp format.
     */
    get TimestampFormat(): string;
    /**
     * Dispose of the Graph SDK.
     * @method
     */
    dispose(): void;
    /**
     * Validate connectivity to the graph repository.
     * @method
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if connected, otherwise `false`.
     */
    validateConnectivity(cancelToken?: object): Promise<boolean>;
    /**
     * Insert object metadata into the graph.
     * @param {Object} tenant - The tenant metadata.
     * @param {Object} pool - The storage pool metadata.
     * @param {Object} bucket - The bucket metadata.
     * @param {Object} obj - The object metadata.
     * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
     * @throws {Error} If any of the parameters are null.
     */
    insertObjectMetadata: (tenant: any, pool: any, bucket: any, obj: any, cancelToken?: any) => Promise<GraphResult>;
    /**
     * Insert object metadata and its associated objects from crawler.
     * @param {Object} tenant - The tenant metadata.
     * @param {Object} repo - The data repository metadata.
     * @param {Object} obj - The object metadata.
     * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
     * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
     * @throws {Error} If any of the parameters are null.
     */
    insertObjectMetadataForCrawler: (tenant: any, repo: any, obj: any, cancelToken?: any) => Promise<GraphResult>;
    /**
     * Insert source document and its associated objects.
     * @param {Object} tenant - The tenant metadata.
     * @param {Object} collection - The collection metadata.
     * @param {Object} sourceDoc - The source document metadata.
     * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
     * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
     * @throws {Error} If any of the parameters are null.
     */
    insertSourceDocument: (tenant: any, collection: any, sourceDoc: any, cancelToken?: any) => Promise<GraphResult>;
    /**
     * Remove object metadata and its associated objects.
     * @param {Object} obj - The object metadata.
     * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
     * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
     * @throws {Error} If the object is null.
     */
    removeObjectMetadata: (obj: any, cancelToken?: any) => Promise<GraphResult>;
    /**
     * Remove source document and its associated objects.
     * @param {Object} doc - The source document metadata.
     * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
     * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
     * @throws {Error} If the source document is null.
     */
    removeSourceDocument: (doc: any, cancelToken?: any) => Promise<GraphResult>;
    /**
     * Check if a tenant exists.
     * @param {Object} tenant - The tenant metadata object.
     * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
     * @returns {Promise<boolean>} A promise that resolves to `true` if the tenant exists, otherwise `false`.
     * @throws {Error} If the tenant argument is null.
     */
    tenantExists: (tenant: any, cancelToken?: any) => Promise<boolean>;
    /**
     * Check if a storage pool exists.
     *
     * @param {Object} pool - The storage pool metadata object.
     * @param {string} pool.GUID - The GUID of the storage pool.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the pool exists, otherwise `false`.
     * @throws {Error} If the pool is null or undefined.
     */
    storagePoolExists: (pool: {
        GUID: string;
    }, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a bucket exists.
     *
     * @param {Object} bucket - The bucket metadata object.
     * @param {string} bucket.GUID - The GUID of the bucket.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the bucket exists, otherwise `false`.
     * @throws {Error} If the bucket is null or undefined.
     */
    bucketExists: (bucket: {
        GUID: string;
    }, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if an object exists.
     *
     * @param {Object} obj - The object metadata.
     * @param {string} obj.GUID - The GUID of the object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the object exists, otherwise `false`.
     * @throws {Error} If the object is null or undefined.
     */
    objectMetadataExists: (obj: {
        GUID: string;
    }, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a collection exists.
     *
     * @param {Object} coll - The collection metadata.
     * @param {string} coll.GUID - The GUID of the collection.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the collection exists, otherwise `false`.
     * @throws {Error} If the collection is null or undefined.
     */
    collectionExists: (coll: {
        GUID: string;
    }, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a source document exists.
     *
     * @param {Object} doc - The source document metadata.
     * @param {string} doc.GUID - The GUID of the source document.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the source document exists, otherwise `false`.
     * @throws {Error} If the source document is null or undefined.
     */
    sourceDocumentExists: (doc: {
        GUID: string;
    }, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a semantic cell exists.
     *
     * @param {Object} cell - The semantic cell metadata.
     * @param {string} cell.GUID - The GUID of the semantic cell.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the semantic cell exists, otherwise `false`.
     * @throws {Error} If the semantic cell is null or undefined.
     */
    semanticCellExists: (cell: {
        GUID: string;
    }, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a semantic chunk exists.
     *
     * @param {Object} chunk - The semantic chunk metadata.
     * @param {string} chunk.GUID - The GUID of the semantic chunk.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the semantic chunk exists, otherwise `false`.
     * @throws {Error} If the semantic chunk is null or undefined.
     */
    semanticChunkExists: (chunk: {
        GUID: string;
    }, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a data repository exists.
     *
     * @param {Object} repo - The data repository metadata.
     * @param {string} repo.GUID - The GUID of the data repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the data repository exists, otherwise `false`.
     * @throws {Error} If the data repository is null or undefined.
     */
    dataRepositoryExists: (repo: {
        GUID: string;
    }, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a tenant exists by GUID.
     *
     * @param {string} guid - The GUID of the tenant.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the tenant exists, otherwise `false`.
     * @throws {Error} If the GUID is null or empty.
     */
    tenantExistsByGUID: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a storage pool exists by GUID.
     *
     * @param {string} guid - The GUID of the storage pool.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the storage pool exists, otherwise `false`.
     * @throws {Error} If the GUID is null or empty.
     */
    storagePoolExistsByGUID: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a bucket exists by GUID.
     *
     * @param {string} guid - The GUID of the bucket.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the bucket exists, otherwise `false`.
     * @throws {Error} If the GUID is null or empty.
     */
    bucketExistsByGUID: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if an object exists by GUID.
     *
     * @param {string} guid - The GUID of the object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the object exists, otherwise `false`.
     * @throws {Error} If the GUID is null or empty.
     */
    objectMetadataExistsByGUID: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a collection exists by GUID.
     *
     * @param {string} guid - The GUID of the collection.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the collection exists, otherwise `false`.
     * @throws {Error} If the GUID is null or empty.
     */
    collectionExistsByGUID: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a source document exists by GUID.
     *
     * @param {string} guid - The GUID of the source document.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the source document exists, otherwise `false`.
     * @throws {Error} If the GUID is null or empty.
     */
    sourceDocumentExistsByGUID: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a semantic cell exists by GUID.
     *
     * @param {string} guid - The GUID of the semantic cell.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the semantic cell exists, otherwise `false`.
     * @throws {Error} If the GUID is null or empty.
     */
    semanticCellExistsByGUID: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a semantic chunk exists by GUID.
     *
     * @param {string} guid - The GUID of the semantic chunk.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the semantic chunk exists, otherwise `false`.
     * @throws {Error} If the GUID is null or empty.
     */
    semanticChunkExistsByGUID: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Check if a data repository exists by GUID.
     *
     * @param {string} guid - The GUID of the data repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean>} A promise resolving to `true` if the data repository exists, otherwise `false`.
     * @throws {Error} If the GUID is null or empty.
     */
    dataRepositoryExistsByGUID: (guid: string, cancelToken?: object) => Promise<boolean>;
    /**
     * Create a graph.
     *
     * @param {string} guid - The GUID of the graph.
     * @param {string} name - The name of the graph.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Graph>} A promise resolving to the created Graph object.
     * @throws {Error} If the name is null or empty, it defaults to a timestamp-based name.
     */
    createGraph: (guid: string, name: string, cancelToken?: object) => Promise<Graph>;
    /**
     * Create a tenant.
     *
     * @param {TenantMetadata} tenant - The tenant metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
     * @throws {Error} If the tenant object is null.
     */
    createTenant: (tenant: TenantMetadata, cancelToken?: object) => Promise<GraphNode>;
    createNodeInternal(nodeType: any, name: any, data: any, token?: any): Promise<any>;
    /**
     * Create a storage pool.
     *
     * @param {StoragePool} pool - The storage pool metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
     * @throws {Error} If the pool object is null.
     */
    createStoragePool: (pool: StoragePool, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Create a bucket.
     *
     * @param {BucketMetadata} bucket - The bucket metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
     * @throws {Error} If the bucket object is null.
     */
    createBucket: (bucket: BucketMetadata, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Create an object.
     *
     * @param {ObjectMetadata} obj - The object metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
     * @throws {Error} If the object metadata is null.
     */
    createObjectMetadata: (obj: ObjectMetadata, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Create a collection.
     *
     * @param {Collection} coll - The collection metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
     * @throws {Error} If the collection object is null.
     */
    createCollection: (coll: Collection, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Create a source document.
     *
     * @param {SourceDocument} doc - The source document metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
     * @throws {Error} If the source document object is null.
     */
    createSourceDocument: (doc: SourceDocument, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Create a semantic cell.
     *
     * @param {SemanticCell} cell - The semantic cell metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
     * @throws {Error} If the semantic cell object is null.
     */
    createSemanticCell: (cell: SemanticCell, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Create a semantic chunk.
     *
     * @param {SemanticChunk} chunk - The semantic chunk metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
     * @throws {Error} If the semantic chunk object is null.
     */
    createSemanticChunk: (chunk: SemanticChunk, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Create a data repository.
     *
     * @param {DataRepository} repo - The data repository metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
     * @throws {Error} If the data repository object is null.
     */
    createDataRepository: (repo: DataRepository, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a tenant graph node.
     *
     * @param {TenantMetadata} tenant - The tenant metadata object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
     * @throws {Error} If the tenant object is null.
     */
    readTenant: (tenant: TenantMetadata, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a storage pool graph node.
     *
     * @param {StoragePool} pool - The storage pool metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
     * @throws {Error} If the pool object is null.
     */
    readStoragePool: (pool: StoragePool, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a bucket graph node.
     *
     * @param {BucketMetadata} bucket - The bucket metadata object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
     * @throws {Error} If the bucket object is null.
     */
    readBucket: (bucket: BucketMetadata, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read an object node.
     *
     * @param {ObjectMetadata} obj - The object metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
     * @throws {Error} If the object metadata is null or invalid.
     */
    readObjectMetadata: (obj: ObjectMetadata, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a collection node.
     *
     * @param {Collection} coll - The collection metadata object.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
     * @throws {Error} If the collection object is null.
     */
    readCollection: (coll: Collection, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a source document node.
     *
     * @param {SourceDocument} doc - The source document metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
     * @throws {Error} If the source document object is null.
     */
    readSourceDocument: (doc: SourceDocument, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a semantic cell node.
     *
     * @param {SemanticCell} cell - The semantic cell metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
     * @throws {Error} If the semantic cell object is null.
     */
    readSemanticCell: (cell: SemanticCell, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a semantic chunk node.
     *
     * @param {SemanticChunk} chunk - The semantic chunk metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
     * @throws {Error} If the semantic chunk object is null.
     */
    readSemanticChunk: (chunk: SemanticChunk, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a data repository node.
     *
     * @param {DataRepository} repo - The data repository metadata.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
     * @throws {Error} If the data repository object is null.
     */
    readDataRepository: (repo: DataRepository, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a tenant graph node.
     *
     * @param {string} guid - The GUID of the tenant.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
     */
    readTenantGuid: (guid: string, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a storage pool graph node.
     *
     * @param {string} guid - The GUID of the storage pool.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
     */
    readStoragePoolGuid: (guid: string, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a bucket graph node.
     *
     * @param {string} guid - The GUID of the bucket.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
     */
    readBucketGuid: (guid: string, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read an object metadata node.
     *
     * @param {string} guid - The GUID of the object.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
     */
    readObjectMetadataGuid: (guid: string, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a collection node.
     *
     * @param {string} guid - The GUID of the collection.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
     */
    readCollectionGuid: (guid: string, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a source document node.
     *
     * @param {string} guid - The GUID of the source document.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
     */
    readSourceDocumentGuid: (guid: string, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a semantic cell node.
     *
     * @param {string} guid - The GUID of the semantic cell.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
     */
    readSemanticCellGuid: (guid: string, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a semantic chunk node.
     *
     * @param {string} guid - The GUID of the semantic chunk.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
     */
    readSemanticChunkGuid: (guid: string, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read a data repository node.
     *
     * @param {string} guid - The GUID of the data repository.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
     */
    readDataRepositoryGuid: (guid: string, cancelToken?: object) => Promise<GraphNode>;
    /**
     * Read tenants.
     *
     * @param {object} [filter] - Optional filter for searching tenants.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
     */
    readTenants: (filter?: object, cancelToken?: object) => Promise<Array<GraphNode>>;
    /**
     * Read storage pools.
     *
     * @param {object} [filter] - Optional filter for searching storage pools.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
     */
    readStoragePools: (filter?: object, cancelToken?: object) => Promise<Array<GraphNode>>;
    /**
     * Read buckets.
     *
     * @param {object} [filter] - Optional filter for searching buckets.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
     */
    readBuckets: (filter?: object, cancelToken?: object) => Promise<Array<GraphNode>>;
    /**
     * Read objects.
     *
     * @param {object} [filter] - Optional filter for searching objects.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
     */
    readObjectMetadataFilter: (filter?: object, cancelToken?: object) => Promise<Array<GraphNode>>;
    /**
     * Read collections.
     *
     * @param {object} [filter] - Optional filter for searching collections.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
     */
    readCollections: (filter?: object, cancelToken?: object) => Promise<Array<GraphNode>>;
    /**
     * Read source documents.
     *
     * @param {object} [filter] - Optional filter for searching source documents.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
     */
    readSourceDocuments: (filter?: object, cancelToken?: object) => Promise<Array<GraphNode>>;
    /**
     * Read semantic cells.
     *
     * @param {object} [filter] - Optional filter for searching semantic cells.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
     */
    readSemanticCells: (filter?: object, cancelToken?: object) => Promise<Array<GraphNode>>;
    /**
     * Read semantic chunks.
     *
     * @param {object} [filter] - Optional filter for searching semantic chunks.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
     */
    readSemanticChunks: (filter?: object, cancelToken?: object) => Promise<Array<GraphNode>>;
    /**
     * Read data repositories.
     *
     * @param {object} [filter] - Optional filter for searching data repositories.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
     */
    readDataRepositories: (filter?: object, cancelToken?: object) => Promise<Array<GraphNode>>;
    /**
     * Delete a tenant.
     *
     * @param {TenantMetadata} tenant - The tenant to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteTenant: (tenant: TenantMetadata, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a storage pool.
     *
     * @param {StoragePool} pool - The storage pool to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteStoragePool: (pool: StoragePool, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a bucket.
     *
     * @param {BucketMetadata} bucket - The bucket to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteBucket: (bucket: BucketMetadata, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete an object.
     *
     * @param {ObjectMetadata} obj - The object to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteObjectMetadata: (obj: ObjectMetadata, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a collection.
     *
     * @param {Collection} coll - The collection to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteCollection: (coll: Collection, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a source document.
     *
     * @param {SourceDocument} doc - The source document to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteSourceDocument: (doc: SourceDocument, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a semantic cell.
     *
     * @param {SemanticCell} cell - The semantic cell to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteSemanticCell: (cell: SemanticCell, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a semantic chunk.
     *
     * @param {SemanticChunk} chunk - The semantic chunk to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteSemanticChunk: (chunk: SemanticChunk, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a data repository.
     *
     * @param {DataRepository} repo - The data repository to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteDataRepository: (repo: DataRepository, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a tenant by GUID.
     *
     * @param {string} guid - The GUID of the tenant to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteTenantGuid: (guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a storage pool by GUID.
     *
     * @param {string} guid - The GUID of the storage pool to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteStoragePoolGuid: (guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a bucket by GUID.
     *
     * @param {string} guid - The GUID of the bucket to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteBucketGuid: (guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete an object by GUID.
     *
     * @param {string} guid - The GUID of the object to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteObjectMetadataGuid: (guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a collection by GUID.
     *
     * @param {string} guid - The GUID of the collection to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteCollectionGuid: (guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a source document by GUID.
     *
     * @param {string} guid - The GUID of the source document to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteSourceDocumentGuid: (guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a semantic cell by GUID.
     *
     * @param {string} guid - The GUID of the semantic cell to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteSemanticCellGuid: (guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a semantic chunk by GUID.
     *
     * @param {string} guid - The GUID of the semantic chunk to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteSemanticChunkGuid: (guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete a data repository by GUID.
     *
     * @param {string} guid - The GUID of the data repository to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
     */
    deleteDataRepositoryGuid: (guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Get edges to a given graph node.
     *
     * @param {GraphNode} node - The graph node to retrieve edges for.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<GraphEdge[]>} A promise that resolves to a list of graph edges.
     */
    getEdgesTo: (node: GraphNode, cancelToken?: AbortSignal) => Promise<GraphEdge[]>;
    /**
     * Get edges from a given graph node.
     *
     * @param {GraphNode} node - The graph node to retrieve edges for.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token.
     * @returns {Promise<GraphEdge[]>} A promise that resolves to a list of graph edges.
     */
    getEdgesFrom: (node: GraphNode, cancelToken?: AbortSignal) => Promise<GraphEdge[]>;
    /**
     * Initialize the GraphDriver based on the repository type.
     */
    initializeGraphDriver: () => void;
    _GraphDriver: LiteGraphDriver;
    /**
     * Check if a node exists based on a given type, key, and value.
     *
     * @param {string} typeVal - The type of the graph node.
     * @param {string} dataKey - The key to search the node by.
     * @param {string} dataVal - The value to search for in the node.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<boolean>} A promise that resolves to a boolean indicating if the node exists.
     * @throws {Error} If there's an error during the search operation.
     */
    existsInternal: (typeVal: string, dataKey: string, dataVal: string, cancelToken?: AbortSignal) => Promise<boolean>;
    /**
     * Check if a node exists based on a given type and dictionary of search criteria.
     *
     * @param {string} typeVal - The type of the graph node.
     * @param {Object} dict - The dictionary containing the key-value pairs to search for.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<boolean>} A promise that resolves to a boolean indicating if the node exists.
     * @throws {Error} If there's an error during the search operation.
     */
    existsInternalDict: (typeVal: string, dict: any, cancelToken?: AbortSignal) => Promise<boolean>;
    buildExpression(typeVal: any, dataKey: any, dataVal: any): {
        field: string;
        operator: string;
        value: any;
    };
    /**
     * Perform a search for nodes based on a type, key, and value.
     *
     * @param {string} typeVal - The type of the graph node to search for.
     * @param {string} dataKey - The key to search the node by.
     * @param {any} dataVal - The value to search for in the node.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode[]>} A promise that resolves to a list of graph nodes.
     * @throws {Error} If there is an error during the search operation.
     */
    searchInternalDataKey: (typeVal: string, dataKey: string, dataVal: any, cancelToken?: AbortSignal) => Promise<GraphNode[]>;
    createExpression(key: any, operator: any, value: any): {
        key: any;
        operator: any;
        value: any;
        andConditions: any[];
    };
    prependAnd(expression: any, key: any, operator: any, value: any): any;
    /**
     * Perform a search for nodes based on a type and a dictionary of search criteria.
     *
     * @param {string} typeVal - The type of the graph node to search for.
     * @param {Object} dict - The dictionary containing key-value pairs to search by.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode[]>} A promise that resolves to a list of graph nodes.
     * @throws {Error} If there is an error during the search operation.
     */
    searchInternal: (typeVal: string, dict: any, cancelToken?: AbortSignal) => Promise<GraphNode[]>;
    /**
     * Delete an object of a specific type based on its GUID.
     *
     * @param {Object} obj - The object to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise indicating the deletion is complete.
     */
    deleteInternalObj: (obj: any, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Delete an object by its type and GUID.
     *
     * @param {string} objType - The type of the object (e.g., "Tenant", "Bucket").
     * @param {string} objGuidField - The field representing the GUID of the object.
     * @param {string} guid - The GUID of the object to delete.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise indicating the deletion is complete.
     */
    deleteInternal: (objType: string, objGuidField: string, guid: string, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Read an object based on its type and GUID.
     *
     * @param {Object} obj - The object to read.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode|null>} A promise that resolves to the graph node or null if not found.
     */
    readInternalObj: (obj: any, cancelToken?: AbortSignal) => Promise<GraphNode | null>;
    /**
     * Read a graph node by its type and GUID.
     *
     * @param {string} objType - The type of the object (e.g., "Tenant", "Bucket").
     * @param {string} objGuidField - The field representing the GUID of the object.
     * @param {string} guid - The GUID of the object to read.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphNode|null>} A promise that resolves to the graph node or null if not found.
     */
    readInternal: (objType: string, objGuidField: string, guid: string, cancelToken?: AbortSignal) => Promise<GraphNode | null>;
    /**
     * Insert semantic cells into the graph and establish relationships with parent cells or source documents.
     *
     * @param {Graph} graph - The graph in which to insert the semantic cells.
     * @param {GraphNode} sourceDocumentNode - The source document node.
     * @param {GraphNode} parentCellNode - The parent cell node.
     * @param {SemanticCell[]} cells - List of semantic cells to insert.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<GraphResult>} A promise that resolves to the result of the insertion.
     */
    insertSemanticCellsInternal: (graph: Graph, sourceDocumentNode: GraphNode, parentCellNode: GraphNode, cells: SemanticCell[], cancelToken?: AbortSignal) => Promise<GraphResult>;
    /**
     * Remove the source document from the graph, including its semantic cells and chunks.
     *
     * @param {GraphNode} sourceDoc - The source document node to remove.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>}
     */
    removeSourceDocumentObj: (sourceDoc: GraphNode, cancelToken?: AbortSignal) => Promise<void>;
    /**
     * Remove the semantic cell from the graph, including its associated semantic chunks.
     *
     * @param {GraphNode} cell - The semantic cell node to remove.
     * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>}
     */
    removeSemanticCell: (cell: GraphNode, cancelToken?: AbortSignal) => Promise<void>;
    guidRegex: RegExp;
    parseGuid(guid: any): any;
}
import GraphRepository from '../../models/GraphRepository';
import GraphResult from '../../models/GraphResult';
import TenantMetadata from '../../models/TenantMetadata';
import StoragePool from '../../models/StoragePool';
import BucketMetadata from '../../models/BucketMetadata';
import ObjectMetadata from '../../models/ObjectMetadata';
import Collection from '../../models/Collection';
import SourceDocument from '../../models/SourceDocument';
import SemanticCell from '../../models/SemanticCell';
import SemanticChunk from '../../models/SemanticChunk';
import DataRepository from '../../models/DataRepository';
import LiteGraphDriver from '../../Driver/LiteGraphDriver';
