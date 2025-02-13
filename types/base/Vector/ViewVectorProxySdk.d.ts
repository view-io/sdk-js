/**
 * View Vector Proxy SDK.
 * @module base/ViewVectorProxySdk
 * @version 0.1.0
 */
export default class ViewVectorProxySdk extends ViewSdkBase {
    /**
     * Constructs a new ViewVectorProxySdk.
     * @alias module:base/ViewVectorProxySdk
     * @class
     * @param {string} tenantGuid - Tenant GUID.
     * @param {string} accessKey - Access key.
     * @param {string} endpoint - Endpoint URL (default is "http://localhost:8311/").
     */
    constructor(tenantGuid: string, accessKey: string, endpoint?: string);
    Header: string;
    /**
     * Write a document.
     * @param {EmbeddingsDocument} document - The embeddings document to write.
     * @param {boolean} document.success - Indicates if the parser was successful.
     * @param {Error} document.exception - Exception, if any.
     * @param {string} document.guid - Unique identifier (auto-generated if not provided).
     * @param {string} document.tenantGUID - Tenant's unique identifier.
     * @param {string} document.collectionGUID - Collection's unique identifier.
     * @param {string} document.sourceDocumentGUID - Source document's unique identifier.
     * @param {string} document.bucketGUID - Bucket's unique identifier.
     * @param {string} document.vectorRepositoryGUID - Vector repository's unique identifier.
     * @param {string} document.graphRepositoryGUID - Graph repository's unique identifier.
     * @param {string} document.graphNodeIdentifier - Graph node identifier.
     * @param {string} document.objectGUID - Object's unique identifier.
     * @param {string} document.objectKey - Object key.
     * @param {string} document.objectVersion - Object version.
     * @param {string} document.model - Model identifier.
     * @param {EmbeddingsRule} document.embeddingsRule - Embeddings rule configuration.
     * @param {string} document.content - Content of the document.
     * @param {number} document.score - Score of the embedding.
     * @param {number} document.distance - Distance of the embedding.
     * @param {Array<SemanticCell>} document.semanticCells - List of semantic cells.
     * @param {Date} document.createdUtc - Creation timestamp in UTC (default: current time).
     * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
     * @returns {Promise<Array<EmbeddingsDocument>|null|ApiErrorResponse>} A promise resolving to a list of EmbeddingsDocuments or null.
     * @throws {Error} If the document is null.
     */
    writeDocument: (document: EmbeddingsDocument, cancelToken?: any) => Promise<Array<EmbeddingsDocument> | null | ApiErrorResponse>;
    /**
     * Delete a document.
     * @param {VectorDeleteRequest} delReq - Delete request parameters.
     * @param {string} delReq.TenantGUID - Tenant's unique identifier.
     * @param {string} delReq.GUID - Document's unique identifier.
     * @param {string} delReq.CollectionGUID - Collection's unique identifier.
     * @param {string} delReq.SourceDocumentGUID - Source document's unique identifier.
     * @param {string} delReq.BucketGUID - Bucket's unique identifier.
     * @param {string} delReq.ObjectGUID - Object's unique identifier.
     * @param {string} delReq.VectorRepositoryGUID - Vector repository's unique identifier.
     * @param {string} delReq.Key - Key identifier.
     * @param {string} delReq.Version - Version identifier.
     * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
     * @returns {Promise<boolean>} A promise resolving to true if successful, false otherwise.
     * @throws {Error} If the delete request is null.
     */
    deleteDocument: (delReq: VectorDeleteRequest, cancelToken?: any) => Promise<boolean>;
    /**
     * Truncate table.
     * @param {VectorDeleteRequest} delReq - Delete request parameters.
     * @param {string} delReq.TenantGUID - Tenant's unique identifier.
     * @param {string} delReq.GUID - Document's unique identifier.
     * @param {string} delReq.CollectionGUID - Collection's unique identifier.
     * @param {string} delReq.SourceDocumentGUID - Source document's unique identifier.
     * @param {string} delReq.BucketGUID - Bucket's unique identifier.
     * @param {string} delReq.ObjectGUID - Object's unique identifier.
     * @param {string} delReq.VectorRepositoryGUID - Vector repository's unique identifier.
     * @param {string} delReq.Key - Key identifier.
     * @param {string} delReq.Version - Version identifier.
     * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
     * @returns {Promise<boolean>} A promise resolving to true if successful, false otherwise.
     * @throws {Error} If the delete request is null.
     */
    truncateTable: (delReq: VectorDeleteRequest, cancelToken?: any) => Promise<boolean>;
    /**
     * Enumerate a table.
     * @param {EnumerationQuery} query - Enumeration query parameters.
     * @param {number} query.timestamp - Query timestamp.
     * @param {TenantMetadata} query.tenant - Tenant metadata.
     * @param {string} query.tenantGuid - Tenant's unique identifier.
     * @param {BucketMetadata} query.bucket - Bucket metadata.
     * @param {string} query.bucketGuid - Bucket's unique identifier.
     * @param {Collection} query.collection - Collection information.
     * @param {string} query.collectionGuid - Collection's unique identifier.
     * @param {SourceDocument} query.sourceDocument - Source document information.
     * @param {string} query.sourceDocumentGuid - Source document's unique identifier.
     * @param {VectorRepository} query.vectorRepository - Vector repository information.
     * @param {string} query.vectorRepositoryGuid - Vector repository's unique identifier.
     * @param {GraphRepository} query.graphRepository - Graph repository information.
     * @param {string} query.graphRepositoryGuid - Graph repository's unique identifier.
     * @param {string} query.graphNodeIdentifier - Graph node identifier.
     * @param {number} query.maxResults - Maximum number of results to retrieve (1-1000, default: 1000).
     * @param {string} query.continuationToken - Token for pagination.
     * @param {string} query.prefix - Prefix filter for results.
     * @param {string} query.suffix - Suffix filter for results.
     * @param {string} query.marker - Marker for result set.
     * @param {string} query.delimiter - Delimiter for grouping results.
     * @param {string} query.token - Authorization token.
     * @param {boolean} query.includeData - Whether to include subordinate data.
     * @param {boolean} query.includeOwners - Whether to include owner information (default: true).
     * @param {Array<SearchFilter>} query.filters - Search filters to apply.
     * @param {EnumerationOrderEnum} query.ordering - Ordering for the enumeration results (default: CreatedDescending).
     * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
     * @returns {Promise<EnumerationResult<EmbeddingsDocument>|null>} A promise resolving to the enumeration result or null.
     * @throws {Error} If the query is null.
     */
    enumerateTable: (query: EnumerationQuery, cancelToken?: any) => Promise<EnumerationResult<EmbeddingsDocument> | null>;
    /**
     * Similarity search.
     * @param {VectorSearchRequest} searchReq - Search request parameters.
     * @param {VectorSearchTypeEnum} searchReq.SearchType - Search type (default: InnerProduct).
     * @param {string} searchReq.VectorRepositoryGUID - Vector repository's unique identifier.
     * @param {number} searchReq.StartIndex - Starting index for results.
     * @param {number} searchReq.MaxResults - Maximum number of results.
     * @param {Array<number>} searchReq.Embeddings - Vector embeddings to search against.
     * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
     * @returns {Promise<EmbeddingsDocument[]|null>} A promise resolving to a list of EmbeddingsDocuments or null.
     * @throws {Error} If the search request is null.
     */
    similaritySearch: (searchReq: VectorSearchRequest, cancelToken?: any) => Promise<EmbeddingsDocument[] | null>;
    /**
     * Raw query.
     * @param {VectorQueryRequest} queryReq - Query request parameters.
     * @param {string} queryReq.Query - Raw query string.
     * @param {string} queryReq.VectorRepositoryGUID - Vector repository's unique identifier.
     * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
     * @returns {Promise<string|null>} A promise resolving to the query result as a string or null.
     * @throws {Error} If the query request is null.
     */
    rawQuery: (queryReq: VectorQueryRequest, cancelToken?: any) => Promise<string | null>;
    /**
     *  search.
     * @param {VectorSearchRequest} searchReq - Search request parameters.
     * @param {VectorSearchTypeEnum} searchReq.SearchType - Search type (default: InnerProduct).
     * @param {string} searchReq.VectorRepositoryGUID - Vector repository's unique identifier.
     * @param {number} searchReq.MaxResults - Maximum number of results.
     * @param {Array<number>} searchReq.Embeddings - Vector embeddings to search against.
     * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
     * @returns {Promise<EmbeddingsDocument[]|null>} A promise resolving to a list of EmbeddingsDocuments or null.
     * @throws {Error} If the search request is null.
     */
    vectorSearch: (searchReq: VectorSearchRequest, cancelToken?: any) => Promise<EmbeddingsDocument[] | null>;
    /**
     * Find embeddings.
     * @param {string} vector_repository_guid - Vector repository's unique identifier.
     * @param {VectorSearchRequest} searchReq - Search request parameters.
     * @param {Array<Object>} searchReq.Criteria - Search criteria.
     * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
     * @returns {Promise<EmbeddingResponse|null>} A promise resolving to the EmbeddingResponse object or null.
     * @throws {Error} If the search request is null.
     */
    findEmbeddings: (vector_repository_guid: string, searchReq: VectorSearchRequest, cancelToken?: any) => Promise<EmbeddingResponse | null>;
    /**
     * Enumerate all repositories.
     * @param {Object} enumerationQuery - Enumeration query parameters.
     * @property {number} enumerationQuery.maxResults - Maximum number of results to retrieve.
     *@property {string} enumerationQuery.continuationToken - Token for continuation in results
     * @property {string} enumerationQuery.tenantGuid - GUID for the tenant.
     * @property {string} enumerationQuery.bucketGuid - GUID for the bucket.
     *@property {string} enumerationQuery.collectionGuid - GUID for the collection.
     * @property {string} enumerationQuery.VectorRepositoryGUID - GUID for the vector repository.
     * @property {EnumerationOrderEnum} enumerationQuery.ordering - Ordering for the enumeration results.
     * @property {boolean} enumerationQuery.includeData - Flag to include subordinate data.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise[]} A promise resolving to a list of VectorRepository objects.
     */
    enumerateVectorRepositories: (enumerationQuery: any, cancelToken?: object) => Promise<any>[];
    /**
     * Repository statistics.
     * @param {string} VectorRepositoryGUID - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<CollectionStatistics>} A promise resolving to the CollectionStatistics object.
     * @throws {Error} If the vectorRepositoryGuid is null or empty.
     */
    retrieveVectorRepositoryStatistics: (VectorRepositoryGUID: string, cancelToken?: object) => Promise<CollectionStatistics>;
    /**
     * Empty repository.
     * @param {string} VectorRepositoryGUID - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise that resolves when the repository is deleted.
     * @throws {Error} If the VectorRepositoryGUID is null or empty.
     */
    deleteVectorRepository: (VectorRepositoryGUID: string, cancelToken?: object) => Promise<void>;
    /**
     * Write a document.
     * @param {EmbeddingsDocument} doc - Document to write.
     * @param {string} doc.TenantGuid - GUID for the  tenant.
     * @param {string} doc.BucketGuid - GUID for the bucket.
     * @param {string} doc.CollectionGuid - GUID for the collection.
     * @param {string} doc.VectorRepositoryGuid - GUID for the vector repository.
     * @param {string} doc.ObjectGuid - GUID for the object.
     * @param {string} doc.SourceDocumentGuid - GUID for the source document.
     * @param {string} doc.ObjectKey - Object key.
     * @param {string} doc.ObjectVersion - Object version.
     * @param {Array<SemanticCell>} options.semanticCells - List of semantic cells.
     * @param {Date} options.createdUtc - Date and time the document was created (default: current time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EmbeddingsDocument>} A promise resolving to the EmbeddingsDocument object.
     * @throws {Error} If the document is null.
     */
    writeDoc: (doc: EmbeddingsDocument, cancelToken?: object) => Promise<EmbeddingsDocument>;
    /**
     * Read a document.
     * @param {string} documentGuid - GUID for the Document.
     * @param {string} VectorRepositoryGUID - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EmbeddingsDocument>} A promise resolving to the EmbeddingsDocument object.
     * @throws {Error} If the documentGuid is null or empty.
     */
    readDoc: (documentGuid: string, vectorRepositoryGuid: any, cancelToken?: object) => Promise<EmbeddingsDocument>;
    /**
     * Delete a document.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the document is deleted.
     * @throws {Error} If the documentGuid is null or empty.
     */
    deleteDoc: (documentGuid: string, vectorRepositoryGuid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Document exists.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise resolving to a void indicating whether the document exists.
     * @throws {Error} If the documentGuid is null or empty.
     */
    documentExists: (documentGuid: string, vectorRepositoryGuid: string, cancelToken?: object) => Promise<void>;
    /**
     * Get semantic cells.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SemanticCell[]>} A promise resolving to the SemanticCell array.
     * @throws {Error} If the documentGuid is null or empty.
     */
    getSemanticCells: (documentGuid: string, vectorRepositoryGuid: string, cancelToken?: object) => Promise<SemanticCell[]>;
    /**
     * Get a semantic cell.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SemanticCell>} A promise resolving to the SemanticCell.
     */
    getSemanticCell: (semanticCellGuid: string, documentGuid: string, vectorRepositoryGuid: string, cancelToken?: object) => Promise<SemanticCell>;
    /**
     * Semantic cell exists.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise resolving to a void indicating whether the semantic cell exists.
     * @throws {Error} If the semanticCellGuid is null or empty.
     */
    semanticCellExists: (semanticCellGuid: string, documentGuid: string, vectorRepositoryGuid: string, cancelToken?: object) => Promise<void>;
    /**
     * Get semantic chunks.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SemanticChunk[]>} A promise resolving to the SemanticChunk array.
     */
    getSemanticChunks: (semanticCellGuid: string, documentGuid: string, vectorRepositoryGuid: string, cancelToken?: object) => Promise<SemanticChunk[]>;
    /**
     * Get a semantic chunk.
     * @param {string} semanticChunkGuid - GUID for the semantic chunk.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SemanticChunk>} A promise resolving to the SemanticChunk.
     */
    getSemanticChunk: (semanticChunkGuid: string, semanticCellGuid: string, documentGuid: string, vectorRepositoryGuid: string, cancelToken?: object) => Promise<SemanticChunk>;
    /**
     * Semantic chunk exists.
     * @param {string} semanticChunkGuid - GUID for the semantic chunk.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise resolving to a void indicating whether the semantic chunk exists.
     * @throws {Error} If the semanticChunkGuid is null or empty.
     */
    semanticChunkExists: (semanticChunkGuid: string, semanticCellGuid: string, documentGuid: string, vectorRepositoryGuid: string, cancelToken?: object) => Promise<void>;
}
import ViewSdkBase from '../ViewSDKBase';
import EmbeddingsDocument from '../../models/EmbeddingsDocument';
import ApiErrorResponse from '../../models/ApiErrorResponse';
import EnumerationResult from '../../models/EnumerationResult';
import EmbeddingResponse from '../../models/EmbeddingResponse';
import CollectionStatistics from '../../models/CollectionStatistics';
import SemanticCell from '../../models/SemanticCell';
import SemanticChunk from '../../models/SemanticChunk';
