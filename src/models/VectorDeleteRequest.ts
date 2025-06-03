export default class VectorDeleteRequest {
  /**
   * @param {Object} vectorDeleteRequest Information about the vector delete request.
   * @param {string} vectorDeleteRequest.TenantGUID - Tenant GUID (default is null).
   * @param {string} vectorDeleteRequest.GUID - GUID (default is null).
   * @param {string} vectorDeleteRequest.CollectionGUID - Collection GUID (default is null).
   * @param {string} vectorDeleteRequest.SourceDocumentGUID - Source document GUID (default is null).
   * @param {string} vectorDeleteRequest.BucketGUID - Bucket GUID (default is null).
   * @param {string} vectorDeleteRequest.ObjectGUID - Object GUID (default is null).
   * @param {string} vectorDeleteRequest.VectorRepositoryGUID - Vector repository GUID (default is null).
   * @param {string} vectorDeleteRequest.Key - Key (default is null).
   * @param {string} vectorDeleteRequest.Version - Version (default is null).
   */
  constructor(vectorDeleteRequest = {}) {
    const {
      TenantGUID = null,
      GUID = null,
      CollectionGUID = null,
      SourceDocumentGUID = null,
      BucketGUID = null,
      ObjectGUID = null,
      VectorRepositoryGUID = null,
      Key = null,
      Version = null,
    } = vectorDeleteRequest;

    this.TenantGUID = TenantGUID;
    this.GUID = GUID;
    this.CollectionGUID = CollectionGUID;
    this.SourceDocumentGUID = SourceDocumentGUID;
    this.BucketGUID = BucketGUID;
    this.ObjectGUID = ObjectGUID;
    this.VectorRepositoryGUID = VectorRepositoryGUID;
    this.Key = Key;
    this.Version = Version;
  }
}
