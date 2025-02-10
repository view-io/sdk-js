export const mockGraphGuid = 'example-graph-repository';
export const graphsData = {
    [mockGraphGuid]: {
        id: 1,
        GUID: 'example-graph-repository',
        TenantGUID: 'default',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        Port: 0,
        GraphIdentifier: '11111111-1111-1111-1111-111111111111',
        CreatedUtc: '2024-09-13T13:40:19.017973Z'
    },
    a7sd89as7d7s8979da79da8: {
        id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        Port: 0,
        GraphIdentifier: '11111111-1111-1111-1111-111111111111',
        CreatedUtc: '2024-09-13T13:40:19.017973Z'
    },
};
export const graphsMockApiResponse = Object.values(graphsData);
