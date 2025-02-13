export default class EmbeddingsRule {
    /**
     * @param {Object} embeddingsRule Information about the embeddings rule.
     * @param {string} embeddingsRule.GUID - Embeddings rule GUID (automatically generated if not provided).
     * @param {string} embeddingsRule.TenantGUID - Tenant GUID (default is null).
     * @param {string} embeddingsRule.BucketGUID - Bucket GUID (default is null).
     * @param {string} embeddingsRule.OwnerGUID - Owner GUID (automatically generated if not provided).
     * @param {string} embeddingsRule.Name - Name of the rule (default is null).
     * @param {string} embeddingsRule.ContentType - Content type (default is "text/plain").
     * @param {string} embeddingsRule.Prefix - Prefix (default is null).
     * @param {string} embeddingsRule.Suffix - Suffix (default is null).
     * @param {string} embeddingsRule.TargetBucketGUID - Target bucket GUID (default is null).
     * @param {string} embeddingsRule.GraphRepositoryGUID - Graph repository GUID (default is null).
     * @param {string} embeddingsRule.VectorRepositoryGUID - Vector repository GUID (default is null).
     * @param {string} embeddingsRule.DataFlowEndpoint - Data flow endpoint (default is localhost).
     * @param {string} embeddingsRule.EmbeddingsGenerator - Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy).
     * @param {string} embeddingsRule.GeneratorUrl - Embeddings generator URL (default is localhost).
     * @param {string} embeddingsRule.GeneratorApiKey - Embeddings provider API key (default is null).
     * @param {number} embeddingsRule.BatchSize - Maximum number of chunks to process per request (default is 16).
     * @param {number} embeddingsRule.MaxGeneratorTasks - Maximum number of parallel embeddings generation tasks (default is 16).
     * @param {number} embeddingsRule.MaxRetries - Maximum number of retries per task (default is 3).
     * @param {number} embeddingsRule.MaxFailures - Maximum number of failures before failing the operation (default is 3).
     * @param {string} embeddingsRule.VectorStoreUrl - Vector store URL (default is localhost).
     * @param {number} embeddingsRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
     * @param {number|null} embeddingsRule.RetentionMinutes - Minutes to retain the generated document (default is null).
     * @param {Date} embeddingsRule.CreatedUtc - Creation timestamp (default is current UTC time).
     */
    constructor(embeddingsRule: {
        GUID: string;
        TenantGUID: string;
        BucketGUID: string;
        OwnerGUID: string;
        Name: string;
        ContentType: string;
        Prefix: string;
        Suffix: string;
        TargetBucketGUID: string;
        GraphRepositoryGUID: string;
        VectorRepositoryGUID: string;
        DataFlowEndpoint: string;
        EmbeddingsGenerator: string;
        GeneratorUrl: string;
        GeneratorApiKey: string;
        BatchSize: number;
        MaxGeneratorTasks: number;
        MaxRetries: number;
        MaxFailures: number;
        VectorStoreUrl: string;
        MaxContentLength: number;
        RetentionMinutes: number | null;
        CreatedUtc: Date;
    });
    GUID: any;
    TenantGUID: string;
    BucketGUID: string;
    OwnerGUID: any;
    Name: string;
    ContentType: string;
    Prefix: string;
    Suffix: string;
    TargetBucketGUID: string;
    GraphRepositoryGUID: string;
    VectorRepositoryGUID: string;
    DataFlowEndpoint: string;
    EmbeddingsGenerator: string;
    GeneratorUrl: string;
    GeneratorApiKey: string;
    BatchSize: any;
    MaxGeneratorTasks: any;
    MaxRetries: any;
    MaxFailures: any;
    VectorStoreUrl: string;
    MaxContentLength: any;
    RetentionMinutes: any;
    CreatedUtc: Date;
    validateBatchSize(value: any): any;
    validateMaxGeneratorTasks(value: any): any;
    validateMaxRetries(value: any): any;
    validateMaxFailures(value: any): any;
    validateMaxContentLength(value: any): any;
    validateRetentionMinutes(value: any): any;
}
