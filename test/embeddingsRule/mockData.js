export const mockEmbeddingsRuleGuid = 'default';
export const embeddingsRulesData = {
    [mockEmbeddingsRuleGuid]: {
        id: 1,
        GUID: 'default',
        TenantGUID: 'default',
        OwnerGUID: 'default',
        Name: 'Example Embeddings Rule',
        ContentType: 'application/json',
        DataFlowEndpoint: 'http://localhost:8501/customDataFlow',
        EmbeddingsGenerator: 'CustomGenerator',
        BatchSize: 8,
        MaxGeneratorTasks: 10,
        MaxContentLength: 8 * 1024 * 1024,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
    a7sd89as7d7s8979da79da8: {
        id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        OwnerGUID: 'default',
        Name: 'Example Embeddings Rule',
        ContentType: 'application/json',
        DataFlowEndpoint: 'http://localhost:8501/customDataFlow',
        EmbeddingsGenerator: 'CustomGenerator',
        BatchSize: 8,
        MaxGeneratorTasks: 10,
        MaxContentLength: 8 * 1024 * 1024,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
};
export const embeddingsRulesMockApiResponse = Object.values(embeddingsRulesData);
