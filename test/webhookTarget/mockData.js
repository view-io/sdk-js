export const mockWebhookTargetGuid = 'default';
export const webhookTargetsData = {
    [mockWebhookTargetGuid]: {
        id: 1,
        GUID: 'default',
        TenantGUID: 'default',
        Name: 'My webhook target',
        Url: 'https://example.com/webhook/payment',
        ContentType: 'application/json',
        ExpectStatus: 200,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
    a7sd89as7d7s8979da79da8: {
        id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        Name: 'My webhook target',
        Url: 'https://example.com/webhook/payment',
        ContentType: 'application/json',
        ExpectStatus: 200,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
};
export const webhookTargetsMockApiResponse = Object.values(webhookTargetsData);
