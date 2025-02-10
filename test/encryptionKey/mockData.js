export const mockEncryptionKeyGuid = 'default';
export const encryptionKeysData = {
    [mockEncryptionKeyGuid]: {
        id: 1,
        GUID: 'default',
        TenantGUID: 'default',
        OwnerGUID: 'default',
        KeyBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
        KeyHex: '0000000000000000000000000000000000000000000000000000000000000000',
        vBase64: 'AAAAAAAAAAAAAAAAAAAAAA==',
        IvHex: '00000000000000000000000000000000',
        SaltBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
        SaltHex: '0000000000000000000000000000000000000000000000000000000000000000',
        Name: 'Default key',
        Description: 'Default key',
        CreatedUtc: '2024-09-13T13:40:18.851081Z'
    },
    a7sd89as7d7s8979da79da8: {
        id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        OwnerGUID: 'default',
        KeyBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
        KeyHex: '0000000000000000000000000000000000000000000000000000000000000000',
        vBase64: 'AAAAAAAAAAAAAAAAAAAAAA==',
        IvHex: '00000000000000000000000000000000',
        SaltBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
        SaltHex: '0000000000000000000000000000000000000000000000000000000000000000',
        Name: 'Default key',
        Description: 'Default key',
        CreatedUtc: '2024-09-13T13:40:18.851081Z'
    },
};
export const encryptionKeysMockApiResponse = Object.values(encryptionKeysData);
