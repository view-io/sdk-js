/**
 * Class representing an Embeddings Rule configuration.
 */
export default class EmbeddingsRule {
    /**
     * Create a new EmbeddingsRule instance.
     *
     * @param {Object} embeddingsRule - Embeddings rule configuration.
     * @param {string} [embeddingsRule.GUID] - Unique identifier for the embeddings rule.
     * @param {string} [embeddingsRule.TenantGUID] - Tenant identifier.
     * @param {string} [embeddingsRule.BucketGUID] - Bucket identifier.
     * @param {string} [embeddingsRule.OwnerGUID] - Owner identifier.
     * @param {string} [embeddingsRule.Name] - Name of the rule.
     * @param {string} [embeddingsRule.ContentType] - Content type (e.g., '*').
     * @param {string} [embeddingsRule.GraphRepositoryGUID] - Identifier for the graph repository.
     * @param {string} [embeddingsRule.VectorRepositoryGUID] - Identifier for the vector repository.
     * @param {string} [embeddingsRule.ProcessingEndpoint] - URL to processing endpoint.
     * @param {string} [embeddingsRule.ProcessingAccessKey] - Access key for processing endpoint.
     * @param {string} [embeddingsRule.EmbeddingsServerUrl] - URL to embeddings server.
     * @param {string} [embeddingsRule.EmbeddingsServerApiKey] - API key for embeddings server.
     * @param {string} [embeddingsRule.EmbeddingsGenerator] - Generator type (e.g., 'LCProxy').
     * @param {string} [embeddingsRule.EmbeddingsGeneratorUrl] - URL of the embeddings generator.
     * @param {string} [embeddingsRule.EmbeddingsGeneratorApiKey] - API key for the embeddings generator.
     * @param {number} [embeddingsRule.BatchSize] - Maximum number of chunks per request.
     * @param {number} [embeddingsRule.MaxGeneratorTasks] - Maximum parallel generation tasks.
     * @param {number} [embeddingsRule.MaxRetries] - Maximum retries per task.
     * @param {number} [embeddingsRule.MaxFailures] - Maximum failures before stopping operation.
     * @param {string} [embeddingsRule.VectorStoreUrl] - URL of the vector store.
     * @param {string} [embeddingsRule.VectorStoreAccessKey] - Access key for vector store.
     * @param {number} [embeddingsRule.MaxContentLength] - Maximum size (in bytes) of content.
     * @param {string|Date} [embeddingsRule.CreatedUtc] - UTC timestamp when rule was created.
     */
    constructor(embeddingsRule: {
        GUID?: string;
        TenantGUID?: string;
        BucketGUID?: string;
        OwnerGUID?: string;
        Name?: string;
        ContentType?: string;
        GraphRepositoryGUID?: string;
        VectorRepositoryGUID?: string;
        ProcessingEndpoint?: string;
        ProcessingAccessKey?: string;
        EmbeddingsServerUrl?: string;
        EmbeddingsServerApiKey?: string;
        EmbeddingsGenerator?: string;
        EmbeddingsGeneratorUrl?: string;
        EmbeddingsGeneratorApiKey?: string;
        BatchSize?: number;
        MaxGeneratorTasks?: number;
        MaxRetries?: number;
        MaxFailures?: number;
        VectorStoreUrl?: string;
        VectorStoreAccessKey?: string;
        MaxContentLength?: number;
        CreatedUtc?: string | Date;
    });
    GUID: string;
    TenantGUID: string;
    BucketGUID: string;
    OwnerGUID: string;
    Name: string;
    ContentType: string;
    GraphRepositoryGUID: string;
    VectorRepositoryGUID: string;
    ProcessingEndpoint: string;
    ProcessingAccessKey: string;
    EmbeddingsServerUrl: string;
    EmbeddingsServerApiKey: string;
    EmbeddingsGenerator: string;
    EmbeddingsGeneratorUrl: string;
    EmbeddingsGeneratorApiKey: string;
    BatchSize: any;
    MaxGeneratorTasks: any;
    MaxRetries: any;
    MaxFailures: any;
    VectorStoreUrl: string;
    VectorStoreAccessKey: string;
    MaxContentLength: any;
    CreatedUtc: string | Date;
    validateBatchSize(value: any): any;
    validateMaxGeneratorTasks(value: any): any;
    validateMaxRetries(value: any): any;
    validateMaxFailures(value: any): any;
    validateMaxContentLength(value: any): any;
}
