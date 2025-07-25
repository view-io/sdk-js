import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import { SearchCollectionDocumentsQuery, SearchResult } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
export class SearchCollectionSdk extends ViewSdkBase {
  /**
   * Constructs a new SearchCollectionSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */

  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Search

  /**
   * Search a collection.
   *
   * @param {string} collectionGuid - The GUID of the collection to search.
   * @param {SearchCollectionDocumentsQuery} query - The query to use for searching.
   * @param {boolean} includeData - include data
   * @param {boolean} includeTopTerms - include  top terms
   * @param {boolean} emitResult - Search and emit result
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SearchResult>} The search result or null if the request fails.
   * @throws {MethodError} If the collectionGuid or query is null or empty.
   */
  searchDocuments = async (
    collectionGuid: string,
    query: SearchCollectionDocumentsQuery,
    includeData?: boolean,
    includeTopTerms?: boolean,
    emitResult?: boolean,
    cancelToken?: AbortController
  ): Promise<SearchResult> => {
    if (!query) {
      GenericExceptionHandlers.ArgumentNullException('query');
    }
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }

    let url =
      this.config.endpoint +
      'v1.0/tenants/' +
      this.config.tenantGuid +
      '/collections/' +
      collectionGuid +
      '/documents?search'; //endpomt update
    if (includeData) {
      url += '&incldata';
    }
    if (includeTopTerms) {
      url += '&incltopterms';
    }
    if (emitResult) {
      url += '&async';
    }
    return await this.postCreateResource(url, query, cancelToken);
  };

  // endregion
}
