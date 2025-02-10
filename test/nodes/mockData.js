export const mockNodeGuid = 'default';
export const nodesData = {
  [mockNodeGuid]: {
    id: 1,
    GUID: 'default',
    name: 'node 1',
    hostname: 'localhost',
    InstanceType: 'StorageServer',
    LastStartUtc: '2024-09-23T11:55:18.607Z',
    CreatedUtc: '2024-09-23T11:55:18.607Z',
  },
  a7sd89as7d7s8979da79da8: {
    id: 2,
    GUID: 'a7sd89as7d7s8979da79da8',
    name: 'node 1',
    hostname: 'localhost',
    InstanceType: 'StorageServer',
    LastStartUtc: '2024-09-23T11:55:18.607Z',
    CreatedUtc: '2024-09-23T11:55:18.607Z',
  },
};
export const nodesMockApiResponse = Object.values(nodesData);
