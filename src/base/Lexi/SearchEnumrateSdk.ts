import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { EnumerateRequest } from '../../types';

export class SearchEnumrateSdk extends ViewSdkBase {
  /**
   * Constructs a new SearchEnumrateSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // Region Search and Enumerate
  /**
   * Enumerate collection.
   *
   * @param {string} collectionGuid - The GUID of the collection to enumerate.
   * @param {EnumerateRequest['query']} query - The query parameters for enumeration.
   * @param {EnumerateRequest['searchData']} searchData - The body of the request containing search and enumeration parameters.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult<SourceDocument>|null|ApiErrorResponse>} The enumeration result or null if the request fails.
   * @throws {Error} If the collectionGuid or query is null or empty.
   */
  searchAndEnumerate = async (
    collectionGuid: string,
    { search = false, incldata = false, async = false, enumerate = false }: EnumerateRequest['query'] = {},
    searchData: EnumerateRequest['searchData'],
    cancelToken: AbortController
  ) => {
    if (!collectionGuid) {
      GenericExceptionHandlers.ArgumentNullException('collectionGuid');
    }
    let url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/collections/${collectionGuid}/documents`;
    const queryParams = [];

    if (search) {
      queryParams.push('search');
    }
    if (enumerate) {
      queryParams.push('enumerate');
    }
    if (incldata) {
      queryParams.push('incldata');
    }
    if (async) {
      queryParams.push('async');
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }

    return await this.postCreate(url, searchData, cancelToken);
  };
}
