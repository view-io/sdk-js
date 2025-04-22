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
    constructor({ Success, GUID, DocumentGUID, TenantGUID, CollectionGUID, SourceDocumentGUID, BucketGUID, VectorRepositoryGUID, GraphNodeIdentifier, ObjectGUID, ObjectKey, ObjectVersion, Model, SemanticCells, CreatedUtc, }: {
        Success: boolean;
        GUID: string;
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
        SemanticCells: any[];
        CreatedUtc: string;
    });
    Success: boolean;
    GUID: string;
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
    SemanticCells: any[];
    CreatedUtc: string;
}
