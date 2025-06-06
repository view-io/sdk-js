import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import {
  EnumerationQuery,
  EnumerationResult,
  SourceDocument,
  SourceDocumentRequest,
  SourceDocumentStatistics,
} from '../../types';

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
   * @returns {Promise<SourceDocument[]>} A promise resolving to a list of source documents or an error response.
   * @throws {MethodError} If the collectionGuid is null or empty.
   */
  readAll = async (collectionGuid: string, cancelToken: AbortController): Promise<SourceDocument[]> => {
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
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Enumerate a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection to enumerate.
   * @param {EnumerationQuery} query - The query to use for enumeration.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<SourceDocument>>} The enumeration result or null if the request fails.
   * @throws {MethodError} If the collectionGuid or query is null or empty.
   */
  enumerate = async (
    collectionGuid: string,
    query: EnumerationQuery,
    cancelToken: AbortController
  ): Promise<EnumerationResult<SourceDocument>> => {
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
    return await this.postCreateResource(url, query, cancelToken);
  };

  /**
   * Retrieve a specific document from a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve the document from.
   * @param {string} documentGuid - The GUID of the document to retrieve.
   * @param {boolean} [includeData=false] - Flag to indicate whether or not to include document data.
   * @param {AbortController} [cancelToken] - Optional object with an abort method to cancel the request.
   * @returns {Promise<SourceDocument>} A promise resolving to the source document or an error response.
   * @throws {MethodError} If the collectionGuid or documentGuid is null or empty.
   */
  read = async (
    collectionGuid: string,
    documentGuid: string,
    includeData = false,
    cancelToken: AbortController
  ): Promise<SourceDocument> => {
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

    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve statistics for a specific document in a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection.
   * @param {string} documentGuid - The GUID of the document.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<SourceDocumentStatistics>} A promise resolving to source document statistics or an error response.
   * @throws {MethodError} If the collectionGuid or documentGuid is null or empty.
   */
  readStatistics = async (
    collectionGuid: string,
    documentGuid: string,
    cancelToken: AbortController
  ): Promise<SourceDocumentStatistics> => {
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

    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve top terms for a specific document in a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection.
   * @param {string} documentGuid - The GUID of the document.
   * @param {number} [maxKeys] - The maximum number of keys to retrieve.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<SourceDocumentStatistics>} A promise resolving to source document statistics or an error response.
   * @throws {MethodError} If the collectionGuid or documentGuid is null or empty.
   */
  readTopTerms = async (
    collectionGuid: string,
    documentGuid: string,
    maxKeys = 10,
    cancelToken: AbortController
  ): Promise<SourceDocumentStatistics> => {
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

    return await this.retrieveResource(url, undefined, cancelToken);
  };

  /**
   * Upload a source document to a collection.
   *
   * @param {SourceDocumentRequest} document - Information about the source document.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<SourceDocument>} A promise resolving to the uploaded document or an error response.
   * @throws {MethodError} If the document is null.
   */
  upload = async (document: SourceDocumentRequest, cancelToken: AbortController): Promise<SourceDocument> => {
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

    return await this.createResource(url, document, cancelToken);
  };

  /**
   * Deletes a document from a collection.
   *
   * @param {string} collectionGuid - The collection GUID.
   * @param {string} documentGuid - The document GUID.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<boolean>} A promise that resolves when the document is deleted.
   * @throws {MethodError} If either `collectionGuid` or `documentGuid` is empty or null.
   */
  delete = async (collectionGuid: string, documentGuid: string, cancelToken: AbortController): Promise<boolean> => {
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

    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Deletes a document from a collection using its key and version.
   *
   * @param {string} collectionGuid - The collection GUID.
   * @param {string} key - The document key.
   * @param {string} version - The document version.
   * @param {AbortController} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<boolean>} A promise that resolves when the document is deleted.
   * @throws {MethodError} If any of the parameters (`collectionGuid`, `key`, `version`) are empty or null.
   */
  deleteFromKey = async (
    collectionGuid: string,
    key: string,
    version: string,
    cancelToken: AbortController
  ): Promise<boolean> => {
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

    return await this.deleteResource(url, cancelToken);
  };
  /**
   * Check if a source documents exists.
   * @param {string} collectionGuid - The collection GUID.
   * @param {string} documentGuid - The document GUID.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the collection exists, `false` if it does not, or an error response if the check fails.
   * @throws {MethodError} If the collectionGuid argument is null or undefined or If the documentGuid argument is null or undefined.
   */
  exists = async (collectionGuid: string, documentGuid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!collectionGuid) {
      throw new Error('Collection GUID cannot be null or undefined.');
    }
    if (!documentGuid) {
      throw new Error('document GUID cannot be null or undefined.');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/collections/${collectionGuid}/documents/${documentGuid}`;
    return await this.existsResource(url, cancelToken);
  };

  // endregion
}
