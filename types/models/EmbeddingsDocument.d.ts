/**
 * Embeddings document.
 */
export default class EmbeddingsDocument {
    /**
     * Instantiate from a data row.
     * @param {Object} row Data row to extract information from.
     * @param {Serializer} serializer Serializer for processing data.
     * @returns {EmbeddingsDocument} New embeddings document instance.
     */
    static fromDataRow(row: any, serializer: Serializer): EmbeddingsDocument;
    /**
     * Instantiate from a data table.
     * @param {Array<Object>} dt Data table to extract information from.
     * @param {Serializer} serializer Serializer for processing data.
     * @returns {Array<EmbeddingsDocument>} List of embeddings document instances.
     */
    static fromDataTable(dt: Array<any>, serializer: Serializer): Array<EmbeddingsDocument>;
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
    constructor(options?: {
        Success: boolean;
        Exception: Error;
        GUID: string;
        TenantGUID: string;
        CollectionGUID: string;
        SourceDocumentGUID: string;
        BucketGUID: string;
        VectorRepositoryGUID: string;
        GraphRepositoryGUID: string;
        GraphNodeIdentifier: string;
        ObjectGUID: string;
        ObjectKey: string;
        ObjectVersion: string;
        Model: string;
        EmbeddingsRule: any;
        Content: string;
        Score: number;
        Distance: number;
        SemanticCells: Array<SemanticCell>;
        CreatedUtc: Date;
    });
    success: boolean;
    exception: Error;
    guid: any;
    tenantGUID: string;
    collectionGUID: string;
    sourceDocumentGUID: string;
    bucketGUID: string;
    vectorRepositoryGUID: string;
    graphRepositoryGUID: string;
    graphNodeIdentifier: string;
    objectGUID: string;
    objectKey: string;
    objectVersion: string;
    model: string;
    embeddingsRule: any;
    content: string;
    score: number;
    distance: number;
    semanticCells: SemanticCell[];
    createdUtc: string | Date;
}
import SemanticCell from './SemanticCell';
