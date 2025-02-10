export const mockUserGuid = 'default';
export const usersData = {
    [mockUserGuid]: {
        id: 1,
        GUID: 'default',
        TenantGUID: 'default',
        FirstName: 'Updated',
        LastName: 'User',
        FullName: 'Updated User',
        Notes: 'Default password is password',
        Email: 'default@user.com',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.810482Z'
    },
    a7sd89as7d7s8979da79da8: {
        id: 2,
        GUID: 'a7sd89as7d7s8979da79da8',
        TenantGUID: 'default',
        FirstName: 'Updated',
        LastName: 'User',
        FullName: 'Updated User',
        Notes: 'Default password is password',
        Email: 'default@user.com',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.810482Z'
    },
};
export const usersMockApiResponse = Object.values(usersData);
