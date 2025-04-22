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
    constructor(options: {
        DocumentGUID: string;
        TenantGUID: string;
        CollectionGUID: string;
        SourceDocumentGUID: string;
        BucketGUID: string;
        VectorRepositoryGUID: string;
        GraphNodeIdentifier: string;
        ObjectGUID: string;
        ObjectKey: string;
        ObjectVersion: string;
        Model: string;
        CellGUID: string;
        CellType: string;
        CellMD5Hash: string;
        CellSHA1Hash: string;
        CellSHA256Hash: string;
        CellPosition: number;
        ChunkGUID: string;
        ChunkMD5Hash: string;
        ChunkSHA1Hash: string;
        ChunkSHA256Hash: string;
        ChunkPosition: number;
        ChunkLength: number;
        Content: string;
        Score: number;
        Distance: number;
        CreatedUtc: string;
        Embeddings: Array<number>;
    });
    DocumentGUID: string;
    TenantGUID: string;
    CollectionGUID: string;
    SourceDocumentGUID: string;
    BucketGUID: string;
    VectorRepositoryGUID: string;
    GraphNodeIdentifier: string;
    ObjectGUID: string;
    ObjectKey: string;
    ObjectVersion: string;
    Model: string;
    CellGUID: string;
    CellType: string;
    CellMD5Hash: string;
    CellSHA1Hash: string;
    CellSHA256Hash: string;
    CellPosition: number;
    ChunkGUID: string;
    ChunkMD5Hash: string;
    ChunkSHA1Hash: string;
    ChunkSHA256Hash: string;
    ChunkPosition: number;
    ChunkLength: number;
    Content: string;
    Score: number;
    Distance: number;
    CreatedUtc: string;
    Embeddings: number[];
}
