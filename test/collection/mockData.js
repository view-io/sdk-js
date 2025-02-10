export const mockCollectionGuid = 'default';
export const collectionsData = {
    [mockCollectionGuid]: {
        id: 1,
        GUID: 'default',
        TenantGUID: 'default',
        Name: 'Sample Document Collection',
        AllowOverwrites: true,
        AdditionalData: '{\'type\: \'document\', \'category\: \'legal\'}',
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
    a7sd89as7d7s8979da79da8: {
        id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        Name: 'Sample Document Collection',
        AllowOverwrites: true,
        AdditionalData: '{\'type\: \'document\', \'category\: \'legal\'}',
        CreatedUtc: '2024-09-24T12:00:00Z'
    },
};
export const collectionsMockApiResponse = Object.values(collectionsData);
