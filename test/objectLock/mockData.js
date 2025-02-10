export const mockObjectLockGuid = 'default';
export const objectLocksData = {
    [mockObjectLockGuid]: {
        GUID: 'default',
        TenantGUID: 'default',
        NodeGUID: 'default',
        BucketGUID: 'default',
        OwnerGUID: 'default',
        ObjectGUID: 'default',
        Key: 'my-object-key',
        Version: 'v1.0.0',
        IsReadLock: true,
        IsWriteLock: false,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
    a7sd89as7d7s8979da79da8: {
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        NodeGUID: 'default',
        BucketGUID: 'default',
        OwnerGUID: 'default',
        ObjectGUID: 'default',
        Key: 'my-object-key',
        Version: 'v1.0.0',
        IsReadLock: true,
        IsWriteLock: false,
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
};
export const objectLocksMockApiResponse = Object.values(objectLocksData);
