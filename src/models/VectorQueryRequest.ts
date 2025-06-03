export default class VectorQueryRequest {
  /**
   * @param {Object} vectorQueryRequest Information about the vector query request.
   * @param {string} vectorQueryRequest.Query - Query (default is null).
   * @param {string} vectorQueryRequest.VectorRepositoryGUID - Vector repository GUID (default is null).
   */
  constructor(vectorQueryRequest = {}) {
    const { Query = null, VectorRepositoryGUID = null } = vectorQueryRequest;

    this.Query = Query;
    this.VectorRepositoryGUID = VectorRepositoryGUID;
  }
}
