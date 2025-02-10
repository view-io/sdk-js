export default class GraphData {
  /**
   * @param {Object} graphData Information about the graph data.
   * @param {GraphNodeTypeEnum} graphData.Type - Type of the node (defaults to Unknown).
   * @param {TenantMetadata} graphData.Tenant - Tenant metadata (optional).
   * @param {StoragePool} graphData.StoragePool - Storage pool (optional).
   * @param {BucketMetadata} graphData.Bucket - Bucket metadata (optional).
   * @param {ObjectMetadata} graphData.Object - Object metadata (optional).
   * @param {Collection} graphData.Collection - Collection (optional).
   * @param {SourceDocument} graphData.SourceDocument - Source document (optional).
   * @param {VectorRepository} graphData.VectorRepository - Vector repository (optional).
   * @param {SemanticCell} graphData.SemanticCell - Semantic cell (optional).
   * @param {SemanticChunk} graphData.SemanticChunk - Semantic chunk (optional).
   * @param {DataRepository} graphData.DataRepository - Data repository (optional).
   */
  constructor(graphData) {
    const {
      Type = 'Unknown', // Assuming GraphNodeTypeEnum.Unknown corresponds to 'Unknown' in JS
      Tenant = null,
      StoragePool = null,
      Bucket = null,
      Object = null,
      Collection = null,
      SourceDocument = null,
      VectorRepository = null,
      SemanticCell = null,
      SemanticChunk = null,
      DataRepository = null,
    } = graphData;

    this.Type = Type;
    this.Tenant = Tenant;
    this.StoragePool = StoragePool;
    this.Bucket = Bucket;
    this.Object = Object;
    this.Collection = Collection;
    this.SourceDocument = SourceDocument;
    this.VectorRepository = VectorRepository;
    this.SemanticCell = SemanticCell;
    this.SemanticChunk = SemanticChunk;
    this.DataRepository = DataRepository;
  }
}
