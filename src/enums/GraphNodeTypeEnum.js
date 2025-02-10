/**
 * Enum for GraphNodeTypeEnum.
 * @enum {string}
 */

export const GraphNodeTypeEnum = Object.freeze({
  Unknown: 'Unknown',
  Tenant: 'Tenant',
  StoragePool: 'StoragePool',
  Bucket: 'Bucket',
  Object: 'Object',
  Collection: 'Collection',
  SourceDocument: 'SourceDocument',
  VectorRepository: 'VectorRepository',
  SemanticCell: 'SemanticCell',
  SemanticChunk: 'SemanticChunk',
  DataRepository: 'DataRepository',
});
