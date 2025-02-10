import { EnumerationOrderEnum } from '../enums/EnumerationOrderEnum';
import QueryFilter from './QueryFilter';

/**
 * Represents a request to search a collection.
 *
 * @property {string} guid - The GUID of the search operation.
 * @property {string} tenantGuid - The tenant GUID.
 * @property {string} collectionGuid - The collection GUID.
 * @property {number} maxResults - Maximum number of results to retrieve.
 * @property {string} continuationToken - Token for continuation in results.
 * @property {EnumerationOrderEnum} ordering - Ordering for the search results.
 * @property {QueryFilter} filter - Required terms and search filters for including a document in the results.
 * @property {EmbeddingsRule} embeddingsRule - Rule for embeddings.
 */
export default class CollectionSearchRequest {
  constructor() {
    /** @type {string} */
    this.guid = this._generateGuid();

    /** @type {string} */
    this.tenantGuid = this._generateGuid();

    /** @type {string} */
    this.collectionGuid = this._generateGuid();

    /** @type {number} */
    this._maxResults = 10;

    /** @type {string} */
    this.continuationToken = null;

    /** @type {EnumerationOrderEnum} */
    this.ordering = EnumerationOrderEnum.CreatedDescending;

    /** @type {QueryFilter} */
    this._filter = new QueryFilter();

    /** @type {EmbeddingsRule} */
    this.embeddingsRule = null;
  }

  /**
   * Generates a new GUID string.
   * @private
   * @return {string} - A new GUID.
   */
  _generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * Gets the maximum number of results to retrieve.
   * @return {number}
   */
  get maxResults() {
    return this._maxResults;
  }

  /**
   * Sets the maximum number of results to retrieve.
   * @param {number} value
   * @throws {RangeError} If the value is less than 1 or greater than 100.
   */
  set maxResults(value) {
    if (value < 1) {
      throw new RangeError('MaxResults must be greater than zero.');
    }
    if (value > 100) {
      throw new RangeError('MaxResults must be one hundred or less.');
    }
    this._maxResults = value;
  }

  /**
   * Gets the search filter.
   * @return {QueryFilter}
   */
  get filter() {
    return this._filter;
  }

  /**
   * Sets the search filter.
   * @param {QueryFilter} value
   */
  set filter(value) {
    this._filter = value || new QueryFilter();
  }
}
