export const mockWebhookRuleGuid = 'default';
export const webhookRulesData = {
    [mockWebhookRuleGuid]: {
        // id: 1,
        GUID: 'default',
        TenantGUID: 'default',
        TargetGUID: 'default',
        Name: 'File Upload Rule',
        EventType: 'Unknown',
        MaxAttempts: 10,
        RetryIntervalMs: 30 * 1000,
        TimeoutMs: 60 * 1000,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
    a7sd89as7d7s8979da79da8: {
        // id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        TargetGUID: 'default',
        Name: 'File Upload Rule',
        EventType: 'Unknown',
        MaxAttempts: 10,
        RetryIntervalMs: 30 * 1000,
        TimeoutMs: 60 * 1000,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
};
export const webhookRulesMockApiResponse = Object.values(webhookRulesData);
