import { v4 as uuidV4 } from 'uuid';
import SemanticCell from './SemanticCell';
import SemanticChunk from './SemanticChunk';
import { SemanticCellTypeEnum } from '../enums/SemanticCellTypeEnum';

/**
 * Embeddings document.
 */
export default class EmbeddingsDocument {
  /**
   * @param {Object} options Information about the embeddings document.
   * @param {boolean} options.Success - Indicates if the parser was successful.
   * @param {Error} options.Exception - Exception, if any.
   * @param {string} options.GUID - Unique identifier for the embeddings document (automatically generated if not provided).
   * @param {string} options.TenantGUID - Tenant's unique identifier.
   * @param {string} options.CollectionGUID - Collection's unique identifier.
   * @param {string} options.SourceDocumentGUID - Source document's unique identifier.
   * @param {string} options.BucketGUID - Bucket's unique identifier.
   * @param {string} options.VectorRepositoryGUID - Vector repository's unique identifier.
   * @param {string} options.GraphRepositoryGUID - Graph repository's unique identifier.
   * @param {string} options.GraphNodeIdentifier - Graph node identifier.
   * @param {string} options.ObjectGUID - Object's unique identifier.
   * @param {string} options.ObjectKey - Object key.
   * @param {string} options.ObjectVersion - Object version.
   * @param {string} options.Model - Model identifier.
   * @param {Object} options.EmbeddingsRule - Embeddings rule.
   * @param {string} options.Content - Content of the document.
   * @param {number} options.Score - Score of the embedding.
   * @param {number} options.Distance - Distance of the embedding.
   * @param {Array<SemanticCell>} options.SemanticCells - List of semantic cells.
   * @param {Date} options.CreatedUtc - Date and time the document was created (default: current time).
   */
  constructor(options = {}) {
    const {
      Success = true,
      Exception = null,
      GUID = uuidV4(),
      TenantGUID = null,
      CollectionGUID = null,
      SourceDocumentGUID = null,
      BucketGUID = null,
      VectorRepositoryGUID = null,
      GraphRepositoryGUID = null,
      GraphNodeIdentifier = null,
      ObjectGUID = null,
      ObjectKey = null,
      ObjectVersion = null,
      Model = null,
      EmbeddingsRule = null,
      Content = null,
      Score = null,
      Distance = null,
      SemanticCells = [],
      CreatedUtc = new Date().toISOString(),
    } = options;

    this.success = Success;
    this.exception = Exception;
    this.guid = GUID;
    this.tenantGUID = TenantGUID;
    this.collectionGUID = CollectionGUID;
    this.sourceDocumentGUID = SourceDocumentGUID;
    this.bucketGUID = BucketGUID;
    this.vectorRepositoryGUID = VectorRepositoryGUID;
    this.graphRepositoryGUID = GraphRepositoryGUID;
    this.graphNodeIdentifier = GraphNodeIdentifier;
    this.objectGUID = ObjectGUID;
    this.objectKey = ObjectKey;
    this.objectVersion = ObjectVersion;
    this.model = Model;
    this.embeddingsRule = EmbeddingsRule;
    this.content = Content;
    this.score = Score;
    this.distance = Distance;
    this.semanticCells = SemanticCells;
    this.createdUtc = CreatedUtc;
  }

  /**
   * Instantiate from a data row.
   * @param {Object} row Data row to extract information from.
   * @param {Serializer} serializer Serializer for processing data.
   * @returns {EmbeddingsDocument} New embeddings document instance.
   */
  static fromDataRow(row, serializer) {
    if (!row || !serializer) return null;

    const doc = new EmbeddingsDocument({
      id: row.id,
      tenantGUID: row.tenant_guid || null,
      collectionGUID: row.collection_guid || null,
      sourceDocumentGUID: row.source_document_guid || null,
      vectorRepositoryGUID: row.vector_repository_guid || null,
      graphRepositoryGUID: row.graph_repository_guid || null,
      graphNodeIdentifier: row.graph_node_identifier || null,
      bucketGUID: row.bucket_guid || null,
      objectGUID: row.object_guid || null,
      objectKey: row.object_key || null,
      objectVersion: row.object_version || null,
      model: row.model || null,
      createdUtc: row.created_utc ? new Date(row.created_utc).toISOString() : new Date().toISOString(),
    });

    if (row.score) doc.score = parseFloat(row.score);
    if (row.distance) doc.distance = parseFloat(row.distance);

    // Create SemanticCell instances
    const cell = new SemanticCell({
      guid: row.cell_guid,
      cellType: row.cell_type ? serializer.parseEnum(SemanticCellTypeEnum, row.cell_type) : SemanticCellTypeEnum.Text,
      md5Hash: row.cell_md5,
      sha1Hash: row.cell_sha1,
      sha256Hash: row.cell_sha256,
      position: row.cell_position || 0,
    });

    const chunk = new SemanticChunk({
      guid: row.chunk_guid,
      md5Hash: row.chunk_md5,
      sha1Hash: row.chunk_sha1,
      sha256Hash: row.chunk_sha256,
      position: row.chunk_position || 0,
      content: row.content || null,
      embeddings: row.embedding ? serializer.deserializeJson(row.embedding) : [],
    });

    cell.chunks.push(chunk);
    doc.semanticCells.push(cell);

    return doc;
  }

  /**
   * Instantiate from a data table.
   * @param {Array<Object>} dt Data table to extract information from.
   * @param {Serializer} serializer Serializer for processing data.
   * @returns {Array<EmbeddingsDocument>} List of embeddings document instances.
   */
  static fromDataTable(dt, serializer) {
    if (!dt || !serializer) return [];

    const raw = dt.map((row) => EmbeddingsDocument.fromDataRow(row, serializer));

    const merged = [];

    raw.forEach((doc) => {
      const existingDoc = merged.find((d) => d.id === doc.id);
      if (existingDoc) {
        doc.semanticCells.forEach((currCell) => {
          const existingCell = existingDoc.semanticCells.find((c) => c.guid === currCell.guid);
          if (existingCell) {
            currCell.chunks.forEach((currChunk) => {
              if (!existingCell.chunks.some((c) => c.guid === currChunk.guid)) {
                existingCell.chunks.push(currChunk);
              }
            });
          } else {
            existingDoc.semanticCells.push(currCell);
          }
        });
      } else {
        merged.push(doc);
      }
    });

    return merged;
  }
}
