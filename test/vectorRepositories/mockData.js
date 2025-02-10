export const mockVectorGuid = 'example-vector-repository';
export const vectorsData = {
    [mockVectorGuid]: {
        id: 1,
        GUID: 'example-vector-repository',
        TenantGUID: 'default',
        Name: 'My vector repository',
        RepositoryType: 'Pgvector',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        DatabaseHostname: 'localhost',
        DatabaseName: 'vectordb',
        DatabaseTable: 'minilm',
        DatabasePort: 5432,
        DatabaseUser: 'postgres',
        DatabasePassword: 'password',
        PromptPrefix: 'Use the following pieces of context to answer the question at the end. Documents are sorted by similarity to the question. If the context is not enough for you to answer the question, please politely explain that you do not have relevant context. Do not try to make up an answer.',
        CreatedUtc: '2024-09-13T13:40:19.066552Z'
    },
    a7sd89as7d7s8979da79da8: {
        id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        Name: 'My vector repository',
        RepositoryType: 'Pgvector',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        DatabaseHostname: 'localhost',
        DatabaseName: 'vectordb',
        DatabaseTable: 'minilm',
        DatabasePort: 5432,
        DatabaseUser: 'postgres',
        DatabasePassword: 'password',
        PromptPrefix: 'Use the following pieces of context to answer the question at the end. Documents are sorted by similarity to the question. If the context is not enough for you to answer the question, please politely explain that you do not have relevant context. Do not try to make up an answer.',
        CreatedUtc: '2024-09-13T13:40:19.066552Z'
    },
};
export const vectorsMockApiResponse = Object.values(vectorsData);
