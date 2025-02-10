export const mockViewEndpointGuid = 'default';
export const viewEndpointsData = {
    [mockViewEndpointGuid]: {
        id: 1,
        GUID: 'default',
        TenantGUID: 'default',
        OwnerGUID: 'default',
        Name: 'My View endpoint',
        UseSsl: false,
        S3Url: 'http://localhost:8002/',
        S3BaseUrl: 'http://localhost:8002/{bucket}/{key}',
        RestUrl: 'http://localhost:8001/',
        BucketName: 'data',
        Region: 'us-west-1',
        AccessKey: null,
        SecretKey: null,
        ApiKey: null,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
    a7sd89as7d7s8979da79da8: {
        id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        OwnerGUID: 'default',
        Name: 'My View endpoint',
        UseSsl: false,
        S3Url: 'http://localhost:8002/',
        S3BaseUrl: 'http://localhost:8002/{bucket}/{key}',
        RestUrl: 'http://localhost:8001/',
        BucketName: 'data',
        Region: 'us-west-1',
        AccessKey: null,
        SecretKey: null,
        ApiKey: null,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
};
export const viewEndpointsMockApiResponse = Object.values(viewEndpointsData);
