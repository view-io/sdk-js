/**
 * View Lexi SDK.
 * @module base/Lexi/ViewLexiSdk
 * @version 0.1.0
 */
export default class ViewLexiSdk extends ViewSdkBase {
    /**
     * Retrieve collections.
     *
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Array<Collection>|null|ApiErrorResponse>} A promise resolving to an array of collections or null if not found.
     * @throws {Error} If an error occurs during retrieval.
     */
    retrieveCollections: (cancelToken?: object) => Promise<Array<Collection> | null | ApiErrorResponse>;
    /**
     * Retrieve a single collection by GUID.
     *
     * @param {string} collectionGuid - The GUID of the collection to retrieve.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<Collection|null|ApiErrorResponse>} A promise that resolves to the retrieved collection, or null if not found.
     * @throws {Error} If the collectionGuid is null or empty, or if an error occurs during retrieval.
     */
    retrieveCollection: (collectionGuid: string, cancelToken?: object) => Promise<Collection | null | ApiErrorResponse>;
    /**
     * Retrieve collection statistics.
     *
     * @param {string} collectionGuid - The collection GUID.
     * @param {object} [cancelToken] - Optional object with an abort method to cancel the request.
     * @returns {Promise<CollectionStatistics|ApiErrorResponse>} A promise resolving to collection statistics.
     */
    retrieveCollectionStatistics: (collectionGuid: string, cancelToken?: object) => Promise<CollectionStatistics | ApiErrorResponse>;
    /**
     * Create a new collection.
     *
     * @param {Object} collection - Information about the collection.
     * @param {number} collection.id - Collection ID.
     * @param {string} collection.GUID - Collection GUID (automatically generated if not provided).
     * @param {string} collection.TenantGUID - Tenant GUID (automatically generated if not provided).
     * @param {string} collection.Name - Name of the collection.
     * @param {boolean} collection.AllowOverwrites - Indicates whether source documents can be overwritten (default is true).
     * @param {string} [collection.AdditionalData] - Additional data (optional).
     * @param {Date} collection.CreatedUtc - Creation timestamp in UTC.
     * @param {object} [cancelToken] - Optional object with an abort method to cancel the request.
     * @returns {Promise<Collection|ApiErrorResponse>} A promise resolving to the created collection.
     */
    createCollection: (collection: {
        id: number;
        GUID: string;
        TenantGUID: string;
        Name: string;
        AllowOverwrites: boolean;
        AdditionalData?: string;
        CreatedUtc: Date;
    }, cancelToken?: object) => Promise<Collection | ApiErrorResponse>;
    /**
     * Delete a collection.
     *
     * @param {string} collectionGuid - The GUID of the collection to delete.
     * @param {object} [cancelToken] - Optional object with an abort method to cancel the request.
     * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the collection is deleted.
     */
    deleteCollection: (collectionGuid: string, cancelToken?: object) => Promise<void | ApiErrorResponse>;
    /**
     * Retrieve top terms.
     *
     * @param {string} collectionGuid - The collection GUID.
     * @param {number} maxKeys - The maximum number of keys to retrieve.
     * @param {object} [cancelToken] - Optional object with an abort method to cancel the request.
     * @returns {Promise<Object|ApiErrorResponse>} A promise resolving to collection statistics.
     * @throws {Error} If the collectionGuid is null or empty.
     */
    retrieveTopTerms: (collectionGuid: string, maxKeys?: number, cancelToken?: object) => Promise<any | ApiErrorResponse>;
    /**
     * Check if a collection exists.
     * @param {string} collectionGuid - The GUID of the collection to check for existence.
     * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to `true` if the collection exists, `false` if it does not, or an error response if the check fails.
     * @throws {Error} If the collectionGuid argument is null or undefined.
     */
    collectionExists: (collectionGuid: string, cancelToken?: any) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieve documents from a specified collection.
     *
     * @param {string} collectionGuid - The GUID of the collection to retrieve documents from.
     * @param {object} [cancelToken] - Optional object with an abort method to cancel the request.
     * @returns {Promise<SourceDocument[]|ApiErrorResponse>} A promise resolving to a list of source documents or an error response.
     * @throws {Error} If the collectionGuid is null or empty.
     */
    retrieveDocuments: (collectionGuid: string, cancelToken?: object) => Promise<SourceDocument[] | ApiErrorResponse>;
    /**
     * Retrieve a specific document from a collection.
     *
     * @param {string} collectionGuid - The GUID of the collection to retrieve the document from.
     * @param {string} documentGuid - The GUID of the document to retrieve.
     * @param {boolean} [includeData=false] - Flag to indicate whether or not to include document data.
     * @param {object} [cancelToken] - Optional object with an abort method to cancel the request.
     * @returns {Promise<SourceDocument|ApiErrorResponse>} A promise resolving to the source document or an error response.
     * @throws {Error} If the collectionGuid or documentGuid is null or empty.
     */
    retrieveDocument: (collectionGuid: string, documentGuid: string, includeData?: boolean, cancelToken?: object) => Promise<SourceDocument | ApiErrorResponse>;
    /**
     * Retrieve statistics for a specific document in a collection.
     *
     * @param {string} collectionGuid - The GUID of the collection.
     * @param {string} documentGuid - The GUID of the document.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<SourceDocumentStatistics|ApiErrorResponse>} A promise resolving to source document statistics or an error response.
     * @throws {Error} If the collectionGuid or documentGuid is null or empty.
     */
    retrieveDocumentStatistics: (collectionGuid: string, documentGuid: string, cancelToken?: object) => Promise<SourceDocumentStatistics | ApiErrorResponse>;
    /**
     * Upload a source document to a collection.
     *
     * @param {Object} document - Information about the source document.
     * @param {string} document.GUID - The unique identifier for the document.
     * @param {string} document.TenantGUID - The tenant's unique identifier.
     * @param {string|null} document.BucketGUID - The bucket's unique identifier.
     * @param {string} document.CollectionGUID - The collection's unique identifier.
     * @param {string} document.ObjectGUID - The object's unique identifier.
     * @param {string|null} document.DataFlowRequestGUID - The data flow request unique identifier.
     * @param {string|null} document.GraphRepositoryGUID - The graph repository unique identifier.
     * @param {string|null} document.GraphNodeIdentifier - The identifier for the graph node.
     * @param {string|null} document.DataRepositoryGUID - The data repository unique identifier.
     * @param {string|null} document.ObjectKey - The key for the object.
     * @param {string} document.ObjectVersion - The version of the object.
     * @param {string} document.ContentType - The content type of the document.
     * @param {DocumentTypeEnum} document.DocumentType - The type of the document.
     * @param {string|null} document.SourceUrl - The source URL of the document.
     * @param {number} document.ContentLength - The length of the content.
     * @param {string} document.MD5Hash - The MD5 hash of the document.
     * @param {string|null} document.SHA1Hash - The SHA1 hash of the document.
     * @param {string|null} document.SHA256Hash - The SHA256 hash of the document.
     * @param {Date} document.CreatedUtc - The creation timestamp in UTC.
     * @param {Date|null} document.ExpirationUtc - The expiration timestamp in UTC, if any.
     * @param {DocumentScore|null} document.Score - The score of the document.
     * @param {UdrDocument|null} document.UdrDocument - The UDR document associated with the source document.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<SourceDocument|ApiErrorResponse>} A promise resolving to the uploaded document or an error response.
     * @throws {Error} If the document is null.
     */
    uploadDocument: (document: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string | null;
        CollectionGUID: string;
        ObjectGUID: string;
        DataFlowRequestGUID: string | null;
        GraphRepositoryGUID: string | null;
        GraphNodeIdentifier: string | null;
        DataRepositoryGUID: string | null;
        ObjectKey: string | null;
        ObjectVersion: string;
        ContentType: string;
        DocumentType: DocumentTypeEnum;
        SourceUrl: string | null;
        ContentLength: number;
        MD5Hash: string;
        SHA1Hash: string | null;
        SHA256Hash: string | null;
        CreatedUtc: Date;
        ExpirationUtc: Date | null;
        Score: DocumentScore | null;
        UdrDocument: UdrDocument | null;
    }, cancelToken?: object) => Promise<SourceDocument | ApiErrorResponse>;
    /**
     * Deletes a document from a collection.
     *
     * @param {string} collectionGuid - The collection GUID.
     * @param {string} documentGuid - The document GUID.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the document is deleted.
     * @throws {Error} If either `collectionGuid` or `documentGuid` is empty or null.
     */
    deleteDocument: (collectionGuid: string, documentGuid: string, cancelToken?: object) => Promise<void>;
    /**
     * Deletes a document from a collection using its key and version.
     *
     * @param {string} collectionGuid - The collection GUID.
     * @param {string} key - The document key.
     * @param {string} version - The document version.
     * @param {object} [cancelToken] - Optional cancellation token to abort the request.
     * @returns {Promise<void>} A promise that resolves when the document is deleted.
     * @throws {Error} If any of the parameters (`collectionGuid`, `key`, `version`) are empty or null.
     */
    deleteDocumentFromKey: (collectionGuid: string, key: string, version: string, cancelToken?: object) => Promise<void>;
    /**
     * Check if a source documents exists.
     * @param {string} collectionGuid - The collection GUID.
     * @param {string} documentGuid - The document GUID.
     * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to `true` if the collection exists, `false` if it does not, or an error response if the check fails.
     * @throws {Error} If the collectionGuid argument is null or undefined or If the documentGuid argument is null or undefined.
     */
    sourceDocumentsExists: (collectionGuid: string, documentGuid: string, cancelToken?: any) => Promise<boolean | ApiErrorResponse>;
    /**
     * Enumerate a collection.
     *
     * @param {string} collectionGuid - The GUID of the collection to enumerate.
     * @param {Object} query - The query to use for enumeration.
     * @property {number} query.timestamp - The timestamp for the enumeration query.
     * @property {TenantMetadata|null} query.tenant - Metadata for the tenant.
     * @property {string} query.tenantGuid - GUID for the tenant.
     * @property {BucketMetadata|null} query.bucket - Metadata for the bucket.
     * @property {string} query.bucketGuid - GUID for the bucket.
     * @property {Collection|null} query.collection - Collection information.
     * @property {string} query.collectionGuid - GUID for the collection.
     * @property {SourceDocument|null} query.sourceDocument - Information about the source document.
     * @property {string} query.sourceDocumentGuid - GUID for the source document.
     * @property {VectorRepository|null} query.vectorRepository - Information about the vector repository.
     * @property {string} query.vectorRepositoryGuid - GUID for the vector repository.
     * @property {GraphRepository|null} query.graphRepository - Information about the graph repository.
     * @property {string} query.graphRepositoryGuid - GUID for the graph repository.
     * @property {string} query.graphNodeIdentifier - Identifier for the graph node.
     * @property {number} query.maxResults - Maximum number of results to retrieve.
     * @property {string|null} query.continuationToken - Token for continuation in results.
     * @property {string|null} query.prefix - Prefix to filter results.
     * @property {string|null} query.suffix - Suffix to filter results.
     * @property {string|null} query.marker - Marker for pagination.
     * @property {string} query.delimiter - Delimiter for separating values.
     * @property {string} query.token - Token for authorization.
     * @property {boolean} query.includeData - Flag to include subordinate data.
     * @property {boolean} query.includeOwners - Flag to include owners (default: true for S3 compatibility).
     * @property {Array<SearchFilter>} query.filters - Search filters to apply.
     * @property {EnumerationOrderEnum} query.ordering - Ordering for the enumeration results.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult<SourceDocument>|null|ApiErrorResponse>} The enumeration result or null if the request fails.
     * @throws {Error} If the collectionGuid or query is null or empty.
     */
    enumerateCollection: (collectionGuid: string, query: any, cancelToken?: object) => Promise<EnumerationResult<SourceDocument> | null | ApiErrorResponse>;
    /**
     * Search a collection.
     *
     * @param {string} collectionGuid - The GUID of the collection to search.
     * @param {Object} query - The query to use for searching.
     * @property {string} query.guid - The GUID of the search operation.
     * @property {string} query.tenantGuid - The tenant GUID.
     * @property {string} query.collectionGuid - The collection GUID.
     * @property {number} query.maxResults - Maximum number of results to retrieve.
     * @property {string} query.continuationToken - Token for continuation in results.
     * @property {EnumerationOrderEnum} query.ordering - Ordering for the search results.
     * @property {QueryFilter} query.filter - Required terms and search filters for including a document in the results.
     * @property {EmbeddingsRule} query.embeddingsRule - Rule for embeddings.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<SearchResult|null|ApiErrorResponse>} The search result or null if the request fails.
     * @throws {Error} If the collectionGuid or query is null or empty.
     */
    searchCollection: (collectionGuid: string, query: any, includedata: any, async: any, cancelToken?: object) => Promise<SearchResult | null | ApiErrorResponse>;
    /**
     * Retrieves all ingest queue.
     * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<IngestQueue[]|ApiErrorResponse>} A promise that resolves to an array of items in the ingest queue or an error response if the retrieval fails.
     */
    retrieveAllIngestQueue: (cancelToken?: any) => Promise<IngestQueue[] | ApiErrorResponse>;
    /**
     * Retrieves a specific item from the ingest queue.
     * @param {string} collectionGuid - The GUID of the item to retrieve.
     * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<IngestQueue|ApiErrorResponse>} A promise that resolves to the requested item or an error response if the retrieval fails.
     */
    retrieveIngestQueue: (collectionGuid: string, cancelToken?: any) => Promise<IngestQueue | ApiErrorResponse>;
    /**
     * Checks if a specific item exists in the ingest queue.
     * @param {string} collectionGuid - The GUID of the item to check.
     * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to `true` if the item exists, `false` if it does not, or an error response if the check fails.
     * @throws {Error} If the collectionGuid argument is null or undefined.
     */
    ingestQueueItemExists: (collectionGuid: string, cancelToken?: any) => Promise<boolean | ApiErrorResponse>;
    /**
     * Retrieves statistics for the ingest queue.
     * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<IngestQueue|ApiErrorResponse>} A promise that resolves to the statistics of the ingest queue or an error response if the retrieval fails.
     */
    retrieveIngestQueueStats: (cancelToken?: any) => Promise<IngestQueue | ApiErrorResponse>;
    /**
     * Deletes a specific item from the ingest queue.
     * @param {string} collectionGuid - The GUID of the item to delete.
     * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to `true` if the deletion was successful, or an error response if it failed.
     * @throws {Error} If the collectionGuid argument is null or undefined.
     */
    deleteIngestQueueItem: (collectionGuid: string, cancelToken?: any) => Promise<boolean | ApiErrorResponse>;
    /**
     * Enumerate collection.
     *
     * @param {string} collectionGuid - The GUID of the collection to enumerate.
     * @param {Object} query - The query parameters for enumeration.
     * @param {boolean} [query.search] - Flag to indicate if a search should be performed.
     * @param {boolean} [query.includeData] - Flag to include subordinate data.
     * @param {boolean} [query.async] - Flag to indicate if the request should be asynchronous.
     * @param {Object} searchData - The body of the request containing search and enumeration parameters.
     * @param {number} searchData.MaxResults - The maximum number of results to retrieve.
     * @param {number} searchData.Skip - The number of results to skip.
     * @param {string} searchData.ContinuationToken - Token for continuation in results.
     * @param {string} searchData.Ordering - Ordering for the search results.
     * @param {Object} searchData.EmbeddingsRule - The embeddings rule for processing.
     * @param {Array<Object>} searchData.Filters - Filters to apply for the search.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<EnumerationResult<SourceDocument>|null|ApiErrorResponse>} The enumeration result or null if the request fails.
     * @throws {Error} If the collectionGuid or query is null or empty.
     */
    searchAndEnumerate: (collectionGuid: string, { search, incldata, async, enumerate }: {
        search?: boolean;
        includeData?: boolean;
        async?: boolean;
    }, searchData: {
        MaxResults: number;
        Skip: number;
        ContinuationToken: string;
        Ordering: string;
        EmbeddingsRule: any;
        Filters: Array<any>;
    }, cancelToken?: object) => Promise<EnumerationResult<SourceDocument> | null | ApiErrorResponse>;
}
import ViewSdkBase from '../ViewSDKBase';
import Collection from '../../models/Collection';
import CollectionStatistics from '../../models/CollectionStatistics';
import SourceDocument from '../../models/SourceDocument';
import SourceDocumentStatistics from '../../models/SourceDocumentStatistics';
import EnumerationResult from '../../models/EnumerationResult';
import SearchResult from '../../models/SearchResult';
import IngestQueue from '../../models/IngestQueue';
