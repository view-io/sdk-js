/**
 * Enum for GraphNodeTypeEnum.
 */
export type GraphNodeTypeEnum = string;
/**
 * Enum for GraphNodeTypeEnum.
 * @enum {string}
 */
export const GraphNodeTypeEnum: Readonly<{
    Unknown: "Unknown";
    Tenant: "Tenant";
    StoragePool: "StoragePool";
    Bucket: "Bucket";
    Object: "Object";
    Collection: "Collection";
    SourceDocument: "SourceDocument";
    VectorRepository: "VectorRepository";
    SemanticCell: "SemanticCell";
    SemanticChunk: "SemanticChunk";
    DataRepository: "DataRepository";
}>;
