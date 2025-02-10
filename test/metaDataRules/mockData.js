export const mockMetaDataRuleGuid = 'default';
export const metaDataRulesData = {
    [mockMetaDataRuleGuid]: {
        id: 1,
        GUID: 'default',
        TenantGUID: 'default',
        BucketGUID: 'default',
        OwnerGUID: 'default',
        Name: 'Example Metadata Rule',
        ContentType: 'application/json',
        ProcessingEndpoint: 'http://localhost:8501/customProcessor',
        MaxChunkContentLength: 1024,
        TopTerms: 10,
        CaseInsensitive: false,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
    a7sd89as7d7s8979da79da8: {
        id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        BucketGUID: 'default',
        OwnerGUID: 'default',
        Name: 'Example Metadata Rule',
        ContentType: 'application/json',
        ProcessingEndpoint: 'http://localhost:8501/customProcessor',
        MaxChunkContentLength: 1024,
        TopTerms: 10,
        CaseInsensitive: false,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
};
export const metaDataRulesMockApiResponse = Object.values(metaDataRulesData);
