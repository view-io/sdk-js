import { mockTenantId } from '../setupTest';

export const mockCollectionId = 'default';

export const mockCollectionsData = {
  [mockCollectionId]: {
    GUID: mockCollectionId,
    TenantGUID: mockTenantId,
    Name: 'My first collection',
    AllowOverwrites: true,
    AdditionalData: 'Created by setup',
    CreatedUtc: '2024-07-10T05:11:51.000000Z',
  },
  a87sd6s877ad6dadd: {
    GUID: 'a87sd6s877ad6dadd',
    TenantGUID: mockTenantId,
    Name: 'My first collection',
    AllowOverwrites: true,
    AdditionalData: 'Created by setup',
    CreatedUtc: '2024-07-10T05:11:51.000000Z',
  },
};
