import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EnumerationQuery, SourceDocumentRequest } from '../../types';

export class SourceDocumentSdk extends ViewSdkBase {
  /**
   * Constructs a new SourceDocumentSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */

  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Source-Documents
  /**
   * Retrieve documents from a specified collection.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve documents from.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<SourceDocument[]|ApiErrorResponse>} A promise resolving to a list of source documents or an error response.
   * @throws {ApiErrorResponse} If the collectionGuid is null or empty.
   */
  retrieveSourceDocuments = async (collectionGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/collections/' +
      collectionGuid +
      '/documents';
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Enumerate a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection to enumerate.
   * @param {EnumerationQuery} query - The query to use for enumeration.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<SourceDocument>|null|ApiErrorResponse>} The enumeration result or null if the request fails.
   * @throws {Error} If the collectionGuid or query is null or empty.
   */
  enumerateCollectionDocument = async (
    collectionGuid: string,
    query: EnumerationQuery,
    cancelToken: AbortController
  ) => {
    if (!query) {
      GenericExceptionHandlers.ArgumentNullException('query');
    }
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }

    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/collections/' +
      collectionGuid +
      '/documents?enumerate'; //endpomt update
    return await this.postCreate(url, query, cancelToken);
  };

  /**
   * Retrieve a specific document from a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve the document from.
   * @param {string} documentGuid - The GUID of the document to retrieve.
   * @param {boolean} [includeData=false] - Flag to indicate whether or not to include document data.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<SourceDocument|ApiErrorResponse>} A promise resolving to the source document or an error response.
   * @throws {Error} If the collectionGuid or documentGuid is null or empty.
   */
  retrieveSourceDocument = async (
    collectionGuid: string,
    documentGuid: string,
    includeData = false,
    cancelToken: AbortController
  ) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    if (!documentGuid) {
      GenericExceptionHandlers.ArgumentNullException('documentGuid');
    }

    let url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/collections/' +
      collectionGuid +
      '/documents/' +
      documentGuid;
    if (includeData) {
      url += '?incldata';
    }

    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve statistics for a specific document in a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection.
   * @param {string} documentGuid - The GUID of the document.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<SourceDocumentStatistics|ApiErrorResponse>} A promise resolving to source document statistics or an error response.
   * @throws {Error} If the collectionGuid or documentGuid is null or empty.
   */
  retrieveSourceDocumentStatistics = async (
    collectionGuid: string,
    documentGuid: string,
    cancelToken: AbortController
  ) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    if (!documentGuid) {
      GenericExceptionHandlers.ArgumentNullException('documentGuid');
    }

    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/collections/' +
      collectionGuid +
      '/documents/' +
      documentGuid +
      '?stats';

    return await this.retrieve(url, cancelToken);
  };

  /**
   * Retrieve top terms for a specific document in a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection.
   * @param {string} documentGuid - The GUID of the document.
   * @param {number} [maxKeys] - The maximum number of keys to retrieve.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<SourceDocumentStatistics|ApiErrorResponse>} A promise resolving to source document statistics or an error response.
   * @throws {Error} If the collectionGuid or documentGuid is null or empty.
   */
  retrieveSourceDocumentTopTerms = async (
    collectionGuid: string,
    documentGuid: string,
    maxKeys = 10,
    cancelToken: AbortController
  ) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    if (!documentGuid) {
      GenericExceptionHandlers.ArgumentNullException('documentGuid');
    }

    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/collections/' +
      collectionGuid +
      '/documents/' +
      documentGuid +
      '/topterms?max-keys=' +
      maxKeys;

    return await this.retrieve(url, undefined, cancelToken);
  };

  /**
   * Upload a source document to a collection.
   *
   * @param {SourceDocumentRequest} document - Information about the source document.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<SourceDocument|ApiErrorResponse>} A promise resolving to the uploaded document or an error response.
   * @throws {Error} If the document is null.
   */
  uploadSourceDocument = async (document: SourceDocumentRequest, cancelToken: AbortController) => {
    if (!document) {
      GenericExceptionHandlers.ArgumentNullException('document');
    }

    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/collections/' +
      document.CollectionGUID +
      '/documents';

    return await this.create(url, document, cancelToken);
  };

  /**
   * Deletes a document from a collection.
   *
   * @param {string} collectionGuid - The collection GUID.
   * @param {string} documentGuid - The document GUID.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the document is deleted.
   * @throws {Error} If either `collectionGuid` or `documentGuid` is empty or null.
   */
  deleteSourceDocument = async (collectionGuid: string, documentGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    if (!documentGuid) {
      GenericExceptionHandlers.ArgumentNullException('documentGuid');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/collections/' +
      collectionGuid +
      '/documents/' +
      documentGuid;

    return await this.delete(url, cancelToken);
  };

  /**
   * Deletes a document from a collection using its key and version.
   *
   * @param {string} collectionGuid - The collection GUID.
   * @param {string} key - The document key.
   * @param {string} version - The document version.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the document is deleted.
   * @throws {Error} If any of the parameters (`collectionGuid`, `key`, `version`) are empty or null.
   */
  deleteSourceDocumentFromKey = async (
    collectionGuid: string,
    key: string,
    version: string,
    cancelToken: AbortController
  ) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    if (!key) {
      GenericExceptionHandlers.ArgumentNullException('key');
    }
    if (!version) {
      GenericExceptionHandlers.ArgumentNullException('version');
    }

    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/collections/' +
      collectionGuid +
      '/documents?key=' +
      key +
      '&versionId=' +
      version;

    return await this.delete(url, cancelToken);
  };
  /**
   * Check if a source documents exists.
   * @param {string} collectionGuid - The collection GUID.
   * @param {string} documentGuid - The document GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise that resolves to `true` if the collection exists, `false` if it does not, or an error response if the check fails.
   * @throws {Error} If the collectionGuid argument is null or undefined or If the documentGuid argument is null or undefined.
   */
  sourceDocumentsExists = async (collectionGuid: string, documentGuid: string, cancelToken: AbortController) => {
    if (!collectionGuid) {
      throw new Error('Collection GUID cannot be null or undefined.');
    }
    if (!documentGuid) {
      throw new Error('document GUID cannot be null or undefined.');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/collections/${collectionGuid}/documents/${documentGuid}`;
    return await this.exists(url, cancelToken);
  };

  // endregion
}
