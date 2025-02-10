import { getServer } from '../server';
import { handlers } from './handlers';
import { mockUserGuid, usersData, usersMockApiResponse } from './mockData';
import { api } from '../setupTest';
import { UserMaster } from '../../src';

const server = getServer(handlers);

describe('View.IO SDK', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('UserMaster', () => {
    it('retrieves a UserMaster', async () => {
      const data = await api.retrieveUser(mockUserGuid);
      expect(data instanceof UserMaster).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new UserMaster(usersData[mockUserGuid])));
    });

    it('throws error when if missed guid while retrieving a UserMaster', async () => {
      try {
        await api.retrieveUser();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a UserMaster with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.retrieveUser(mockUserGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all UserMaster', async () => {
      const data = await api.retrieveUsers();
      data.map((user) => {
        expect(JSON.stringify(user)).toBe(JSON.stringify(new UserMaster(usersData[user.GUID])));
      });
    });

    it('creates a UserMaster', async () => {
      const data = await api.createUser({
        TenantGUID: 'default',
        FirstName: 'Updated',
        LastName: 'User',
        FullName: 'Updated User',
        Notes: 'Default password is password',
        Email: 'default@user.com',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.810482Z',
      });
      expect(true).toBe(data instanceof UserMaster);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new UserMaster(usersData[mockUserGuid])));
    });

    it('throws error when creating a UserMaster with user parameter', async () => {
      try {
        await api.createUser();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: user is null or empty');
      }
    });

    it('Update a UserMaster', async () => {
      const data = await api.updateUser({
        GUID: mockUserGuid,
        TenantGUID: 'default',
        FirstName: 'Updated',
        LastName: 'User',
        FullName: 'Updated User',
        Notes: 'Default password is password',
        Email: 'default@user.com',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.810482Z',
      });

      expect(true).toBe(data instanceof UserMaster);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new UserMaster(usersData[mockUserGuid])));
    });

    it('throws error when if missed guid while updating a UserMaster', async () => {
      try {
        await api.updateUser();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: user is null or empty');
      }
    });

    it('delete a UserMaster', async () => {
      const data = await api.deleteUser(mockUserGuid);
      console.log('data: ', data);
      expect(data instanceof UserMaster).toBe(true);
      expect(JSON.stringify(data)).toBe(JSON.stringify(new UserMaster(usersData[mockUserGuid])));
    });

    it('throws error when if missed guid while deleting a UserMaster', async () => {
      try {
        await api.deleteUser();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a UserMaster exist', async () => {
      const data = await api.existsUser(mockUserGuid);
      expect(data).toBe('true');
    });

    it('Check if a UserMaster does not exist', async () => {
      const data = await api.existsUser('wrongID');
      expect(data).toBe('false');
    });

    it('throws error when if missed guid while checking a UserMaster existance', async () => {
      try {
        await api.existsUser();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
