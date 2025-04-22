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
     *  search.
     * @param {string} vectorRepositoryGUID - Vector repository's unique identifier.
     * @param {VectorSearchRequest} searchReq - Search request parameters.
     * @param {VectorSearchTypeEnum} searchReq.SearchType - Search type (default: InnerProduct).
     * @param {number} searchReq.MaxResults - Maximum number of results.
     * @param {Array<number>} searchReq.Embeddings - Vector embeddings to search against.
     * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
     * @returns {Promise<VectorSearch[]|null>} A promise resolving to a list of VectorSearchs or null.
     * @throws {Error} If the search request is null.
     */
    vectorSearch: (vectorRepositoryGUID: string, searchReq: VectorSearchRequest, cancelToken?: any) => Promise<VectorSearch[] | null>;
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
     * @param {EmbeddingDocument} doc - Document to write.
     * @param {string} doc.TenantGuid - GUID for the  tenant.
     * @param {string} doc.BucketGuid - GUID for the bucket.
     * @param {string} doc.CollectionGuid - GUID for the collection.
     * @param {string} doc.VectorRepositoryGUID - GUID for the vector repository.
     * @param {string} doc.ObjectGuid - GUID for the object.
     * @param {string} doc.SourceDocumentGuid - GUID for the source document.
     * @param {string} doc.ObjectKey - Object key.
     * @param {string} doc.ObjectVersion - Object version.
     * @param {Array<SemanticCell>} options.semanticCells - List of semantic cells.
     * @param {Date} options.createdUtc - Date and time the document was created (default: current time).
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EmbeddingDocument>} A promise resolving to the EmbeddingDocument object.
     * @throws {Error} If the document is null.
     */
    writeDocument: (doc: EmbeddingDocument, cancelToken?: object) => Promise<EmbeddingDocument>;
    /**
     * Read a document.
     * @param {string} VectorRepositoryGUID - GUID for the vector repository.
     * @param {string} documentGuid - GUID for the Document.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EmbeddingDocument>} A promise resolving to the EmbeddingDocument object.
     * @throws {Error} If the documentGuid is null or empty.
     */
    readDocument: (vectorRepositoryGuid: any, documentGuid: string, cancelToken?: object) => Promise<EmbeddingDocument>;
    /**
     * Delete a document.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {string} documentGuid - GUID for the document.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the document is deleted.
     * @throws {Error} If the documentGuid is null or empty.
     */
    deleteDocument: (vectorRepositoryGuid: string, documentGuid: string, cancelToken?: object) => Promise<boolean | ApiErrorResponse>;
    /**
     * Document exists.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {string} documentGuid - GUID for the document.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise resolving to a void indicating whether the document exists.
     * @throws {Error} If the documentGuid is null or empty.
     */
    documentExists: (vectorRepositoryGuid: string, documentGuid: string, cancelToken?: object) => Promise<void>;
    /**
     * Get semantic cells.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {string} documentGuid - GUID for the document.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SemanticCell[]>} A promise resolving to the SemanticCell array.
     * @throws {Error} If the documentGuid is null or empty.
     */
    retrieveSemanticCells: (vectorRepositoryGuid: string, documentGuid: string, cancelToken?: object) => Promise<SemanticCell[]>;
    /**
     * Get a semantic cell.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SemanticCell>} A promise resolving to the SemanticCell.
     */
    retrieveSemanticCell: (vectorRepositoryGuid: string, documentGuid: string, semanticCellGuid: string, cancelToken?: object) => Promise<SemanticCell>;
    /**
     * Semantic cell exists.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise resolving to a void indicating whether the semantic cell exists.
     * @throws {Error} If the semanticCellGuid is null or empty.
     */
    semanticCellExists: (vectorRepositoryGuid: string, documentGuid: string, semanticCellGuid: string, cancelToken?: object) => Promise<void>;
    /**
     * Get semantic chunks.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SemanticChunk[]>} A promise resolving to the SemanticChunk array.
     */
    retrieveSemanticChunks: (vectorRepositoryGuid: string, documentGuid: string, semanticCellGuid: string, cancelToken?: object) => Promise<SemanticChunk[]>;
    /**
     * Get a semantic chunk.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {string} semanticChunkGuid - GUID for the semantic chunk.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SemanticChunk>} A promise resolving to the SemanticChunk.
     */
    retrieveSemanticChunk: (vectorRepositoryGuid: string, documentGuid: string, semanticCellGuid: string, semanticChunkGuid: string, cancelToken?: object) => Promise<SemanticChunk>;
    /**
     * Semantic chunk exists.
     * @param {string} vectorRepositoryGuid - GUID for the vector repository.
     * @param {string} documentGuid - GUID for the document.
     * @param {string} semanticCellGuid - GUID for the semantic cell.
     * @param {string} semanticChunkGuid - GUID for the semantic chunk.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<void>} A promise resolving to a void indicating whether the semantic chunk exists.
     * @throws {Error} If the semanticChunkGuid is null or empty.
     */
    semanticChunkExists: (vectorRepositoryGuid: string, documentGuid: string, semanticCellGuid: string, semanticChunkGuid: string, cancelToken?: object) => Promise<void>;
}
import ViewSdkBase from '../ViewSDKBase';
import VectorSearch from '../../models/VectorSearch';
import EmbeddingResponse from '../../models/EmbeddingResponse';
import CollectionStatistics from '../../models/CollectionStatistics';
import EmbeddingDocument from '../../models/EmbeddingDocument';
import ApiErrorResponse from '../../models/ApiErrorResponse';
import SemanticCell from '../../models/SemanticCell';
import SemanticChunk from '../../models/SemanticChunk';
