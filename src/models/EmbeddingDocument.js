/**
 * Represents a single embedding document.
 */
export default class EmbeddingDocument {
  /**
   * @param {Object} data - The input data for the embedding document.
   * @param {boolean} data.Success
   * @param {string} data.GUID
   * @param {string} data.DocumentGUID
   * @param {string} data.TenantGUID
   * @param {string} data.CollectionGUID
   * @param {string} data.SourceDocumentGUID
   * @param {string} data.BucketGUID
   * @param {string} data.VectorRepositoryGUID
   * @param {string} data.GraphNodeIdentifier
   * @param {string} data.ObjectGUID
   * @param {string} data.ObjectKey
   * @param {string} data.ObjectVersion
   * @param {string} data.Model
   * @param {Array} data.SemanticCells
   * @param {string} data.CreatedUtc
   */
  constructor({
    Success,
    GUID,
    DocumentGUID,
    TenantGUID,
    CollectionGUID,
    SourceDocumentGUID,
    BucketGUID,
    VectorRepositoryGUID,
    GraphNodeIdentifier,
    ObjectGUID,
    ObjectKey,
    ObjectVersion,
    Model,
    SemanticCells,
    CreatedUtc,
  }) {
    this.Success = Success;
    this.GUID = GUID;
    this.DocumentGUID = DocumentGUID;
    this.TenantGUID = TenantGUID;
    this.CollectionGUID = CollectionGUID;
    this.SourceDocumentGUID = SourceDocumentGUID;
    this.BucketGUID = BucketGUID;
    this.VectorRepositoryGUID = VectorRepositoryGUID;
    this.GraphNodeIdentifier = GraphNodeIdentifier;
    this.ObjectGUID = ObjectGUID;
    this.ObjectKey = ObjectKey;
    this.ObjectVersion = ObjectVersion;
    this.Model = Model;
    this.SemanticCells = SemanticCells;
    this.CreatedUtc = CreatedUtc;
  }
}
