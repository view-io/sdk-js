import { mockTenantId } from '../setupTest';

export const tenantData = {
  [mockTenantId]: {
    GUID: mockTenantId,
    Name: 'Default Tenant',
    Region: 'us-west-1',
    S3BaseDomain: 'localhost',
    RestBaseDomain: '',
    DefaultPoolGUID: 'default',
    Active: true,
    CreatedUtc: '2024-09-13T13:40:18.751202Z',
  },
};
