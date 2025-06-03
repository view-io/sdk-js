import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';
import ViewSdkBase from '../ViewSDKBase';
import VectorSearch from '../../models/VectorSearch';
import EnumerationResult from '../../models/EnumerationResult';
import SemanticCell from '../../models/SemanticCell';
import SemanticChunk from '../../models/SemanticChunk';
import CollectionStatistics from '../../models/CollectionStatistics';
import VectorRepository from '../../models/VectorRepository';
import ApiErrorResponse from '../../models/ApiErrorResponse';
import EmbeddingResponse from '../../models/EmbeddingResponse';
import EmbeddingDocument from '../../models/EmbeddingDocument';
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
  constructor(tenantGuid, accessKey, endpoint = 'http://localhost:8311/') {
    super(tenantGuid, accessKey, endpoint);
    this.Header = '[ViewVectorProxySdk] ';
  }

  //region Search
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
  vectorSearch = async (vectorRepositoryGUID, searchReq, cancelToken) => {
    if (!vectorRepositoryGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGUID');
    }
    if (!searchReq) {
      GenExceptionHandlersInstance.ArgumentNullException('searchReq');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories/' + vectorRepositoryGUID + '/search';

    return await this.post(url, searchReq, VectorSearch, cancelToken);
  };
  /**
   * Find embeddings.
   * @param {string} vector_repository_guid - Vector repository's unique identifier.
   * @param {VectorSearchRequest} searchReq - Search request parameters.
   * @param {Array<Object>} searchReq.Criteria - Search criteria.
   * @param {Object} [cancelToken] - Optional cancellation token with an `abort` method.
   * @returns {Promise<EmbeddingResponse|null>} A promise resolving to the EmbeddingResponse object or null.
   * @throws {Error} If the search request is null.
   */

  findEmbeddings = async (vector_repository_guid, searchReq, cancelToken) => {
    if (!searchReq) {
      GenExceptionHandlersInstance.ArgumentNullException('searchReq');
    }
    if (!vector_repository_guid) {
      GenExceptionHandlersInstance.ArgumentNullException('vector_repository_guid');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories/' + vector_repository_guid + '/find';

    return await this.post(url, searchReq, EmbeddingResponse, cancelToken);
  };
  //region Repositories
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
  enumerateVectorRepositories = async (enumerationQuery, cancelToken) => {
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      enumerationQuery.VectorRepositoryGUID +
      '/enumerate';
    return await this.post(url, enumerationQuery, EnumerationResult, cancelToken);
  };

  /**
   * Repository statistics.
   * @param {string} VectorRepositoryGUID - GUID for the vector repository.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CollectionStatistics>} A promise resolving to the CollectionStatistics object.
   * @throws {Error} If the vectorRepositoryGuid is null or empty.
   */
  retrieveVectorRepositoryStatistics = async (VectorRepositoryGUID, cancelToken) => {
    if (!VectorRepositoryGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories/' + VectorRepositoryGUID + '/stats';
    return await this.retrieve(url, CollectionStatistics, cancelToken);
  };

  /**
   * Empty repository.
   * @param {string} VectorRepositoryGUID - GUID for the vector repository.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the repository is deleted.
   * @throws {Error} If the VectorRepositoryGUID is null or empty.
   */
  deleteVectorRepository = async (VectorRepositoryGUID, cancelToken) => {
    if (!VectorRepositoryGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('VectorRepositoryGUID');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories/' + VectorRepositoryGUID;
    return await this.deleteRaw(url, cancelToken);
  };

  //endregion

  //region Documents

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
  writeDocument = async (doc, cancelToken) => {
    if (!doc) {
      GenExceptionHandlersInstance.ArgumentNullException('doc');
    }
    const vectorRepositoryGUID = doc.VectorRepositoryGUID;
    if (!vectorRepositoryGUID) {
      throw new Error('VectorRepositoryGUID is not set or is undefined.');
    }
    const url =
      this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories/' + vectorRepositoryGUID + '/documents';
    return await this.post(url, doc, EmbeddingDocument, cancelToken);
  };

  /**
   * Read a document.
   * @param {string} VectorRepositoryGUID - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the Document.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingDocument>} A promise resolving to the EmbeddingDocument object.
   * @throws {Error} If the documentGuid is null or empty.
   */
  readDocument = async (vectorRepositoryGuid, documentGuid, cancelToken) => {
    if (!documentGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid;
    return await this.retrieve(url, EmbeddingDocument, cancelToken);
  };

  /**
   * Delete a document.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Boolean|ApiErrorResponse>} A promise that resolves when the document is deleted.
   * @throws {Error} If the documentGuid is null or empty.
   */
  deleteDocument = async (vectorRepositoryGuid, documentGuid, cancelToken) => {
    if (!documentGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid;
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Document exists.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise resolving to a void indicating whether the document exists.
   * @throws {Error} If the documentGuid is null or empty.
   */
  documentExists = async (vectorRepositoryGuid, documentGuid, cancelToken) => {
    if (!documentGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid;
    return await this.exists(url, cancelToken);
  };

  //endregion

  //region Semantic Cells

  /**
   * Get semantic cells.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SemanticCell[]>} A promise resolving to the SemanticCell array.
   * @throws {Error} If the documentGuid is null or empty.
   */
  retrieveSemanticCells = async (vectorRepositoryGuid, documentGuid, cancelToken) => {
    if (!documentGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid +
      '/cells';
    return await this.retrieveMany(url, SemanticCell, cancelToken);
  };

  /**
   * Get a semantic cell.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SemanticCell>} A promise resolving to the SemanticCell.
   */
  retrieveSemanticCell = async (vectorRepositoryGuid, documentGuid, semanticCellGuid, cancelToken) => {
    if (!documentGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    if (!semanticCellGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('semanticCellGuid');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid +
      '/cells/' +
      semanticCellGuid;
    return await this.retrieve(url, SemanticCell, cancelToken);
  };

  /**
   * Semantic cell exists.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise resolving to a void indicating whether the semantic cell exists.
   * @throws {Error} If the semanticCellGuid is null or empty.
   */
  semanticCellExists = async (vectorRepositoryGuid, documentGuid, semanticCellGuid, cancelToken) => {
    if (!semanticCellGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('semanticCellGuid');
    }
    if (!documentGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid +
      '/cells/' +
      semanticCellGuid;
    return await this.exists(url, cancelToken);
  };
  //endregion

  //region Semantic Chunks

  /**
   * Get semantic chunks.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SemanticChunk[]>} A promise resolving to the SemanticChunk array.
   */
  retrieveSemanticChunks = async (vectorRepositoryGuid, documentGuid, semanticCellGuid, cancelToken) => {
    if (!semanticCellGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('semanticCellGuid');
    }
    if (!documentGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid +
      '/cells/' +
      semanticCellGuid +
      '/chunks';
    return await this.retrieveMany(url, SemanticChunk, cancelToken);
  };

  /**
   * Get a semantic chunk.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {string} semanticChunkGuid - GUID for the semantic chunk.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SemanticChunk>} A promise resolving to the SemanticChunk.
   */
  retrieveSemanticChunk = async (
    vectorRepositoryGuid,
    documentGuid,
    semanticCellGuid,
    semanticChunkGuid,
    cancelToken
  ) => {
    if (!documentGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    if (!semanticCellGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('semanticCellGuid');
    }
    if (!semanticChunkGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('semanticChunkGuid');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid +
      '/cells/' +
      semanticCellGuid +
      '/chunks/' +
      semanticChunkGuid;
    return await this.retrieve(url, SemanticChunk, cancelToken);
  };

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
  semanticChunkExists = async (
    vectorRepositoryGuid,
    documentGuid,
    semanticCellGuid,
    semanticChunkGuid,
    cancelToken
  ) => {
    if (!documentGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('vectorRepositoryGuid');
    }
    if (!semanticCellGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('semanticCellGuid');
    }
    if (!semanticChunkGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('semanticChunkGuid');
    }
    const url =
      this.endpoint +
      '/v1.0/tenants/' +
      this.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid +
      '/cells/' +
      semanticCellGuid +
      '/chunks/' +
      semanticChunkGuid;
    return await this.exists(url, cancelToken);
  };
  //endregion
}
