/**
 * Embeddings document.
 */
export default class VectorSearch {
  /**
   * @param {Object} options Embeddings document data.
   * @param {string} options.DocumentGUID
   * @param {string} options.TenantGUID
   * @param {string} options.CollectionGUID
   * @param {string} options.SourceDocumentGUID
   * @param {string} options.BucketGUID
   * @param {string} options.VectorRepositoryGUID
   * @param {string} options.GraphNodeIdentifier
   * @param {string} options.ObjectGUID
   * @param {string} options.ObjectKey
   * @param {string} options.ObjectVersion
   * @param {string} options.Model
   * @param {string} options.CellGUID
   * @param {string} options.CellType
   * @param {string} options.CellMD5Hash
   * @param {string} options.CellSHA1Hash
   * @param {string} options.CellSHA256Hash
   * @param {number} options.CellPosition
   * @param {string} options.ChunkGUID
   * @param {string} options.ChunkMD5Hash
   * @param {string} options.ChunkSHA1Hash
   * @param {string} options.ChunkSHA256Hash
   * @param {number} options.ChunkPosition
   * @param {number} options.ChunkLength
   * @param {string} options.Content
   * @param {number} options.Score
   * @param {number} options.Distance
   * @param {string} options.CreatedUtc
   * @param {Array<number>} options.Embeddings
   */
  constructor(options) {
    const {
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
      CellGUID,
      CellType,
      CellMD5Hash,
      CellSHA1Hash,
      CellSHA256Hash,
      CellPosition,
      ChunkGUID,
      ChunkMD5Hash,
      ChunkSHA1Hash,
      ChunkSHA256Hash,
      ChunkPosition,
      ChunkLength,
      Content,
      Score,
      Distance,
      CreatedUtc,
      Embeddings,
    } = options;

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
    this.CellGUID = CellGUID;
    this.CellType = CellType;
    this.CellMD5Hash = CellMD5Hash;
    this.CellSHA1Hash = CellSHA1Hash;
    this.CellSHA256Hash = CellSHA256Hash;
    this.CellPosition = CellPosition;
    this.ChunkGUID = ChunkGUID;
    this.ChunkMD5Hash = ChunkMD5Hash;
    this.ChunkSHA1Hash = ChunkSHA1Hash;
    this.ChunkSHA256Hash = ChunkSHA256Hash;
    this.ChunkPosition = ChunkPosition;
    this.ChunkLength = ChunkLength;
    this.Content = Content;
    this.Score = Score;
    this.Distance = Distance;
    this.CreatedUtc = CreatedUtc;
    this.Embeddings = Embeddings;
  }
}
