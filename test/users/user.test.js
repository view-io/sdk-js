import { getServer } from '../server';
import { handlers } from './handlers';
import { mockUserGuid, usersData, usersMockApiResponse } from './mockData';
import { api } from '../setupTest';

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
      const data = await api.User.read(mockUserGuid);
      expect(data).toBeDefined();
      expect(data).toEqual(usersData[mockUserGuid]);
    });

    it('throws error when if missed guid while retrieving a UserMaster', async () => {
      try {
        await api.User.read();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('retrieves a UserMaster with cancel token and log response', async () => {
      api.logResponses = true;
      const cancelToken = {};
      await api.User.read(mockUserGuid, cancelToken);
      cancelToken.abort();
    });

    it('retrieves all UserMaster', async () => {
      const data = await api.User.readAll();
      data.map((user) => {
        expect(user).toEqual(usersData[user.GUID]);
      });
    });

    it('creates a UserMaster', async () => {
      const newUser = {
        TenantGUID: 'default',
        FirstName: 'Updated',
        LastName: 'User',
        FullName: 'Updated User',
        Notes: 'Default password is password',
        Email: 'default@user.com',
        Active: true,
        CreatedUtc: '2024-09-13T13:40:18.810482Z',
      };
      const data = await api.User.create(newUser);
      expect(data).toBeDefined();
      expect(data).toEqual(usersData[mockUserGuid]);
    });

    it('throws error when creating a UserMaster with user parameter', async () => {
      try {
        await api.User.create();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: user is null or empty');
      }
    });

    it('Update a UserMaster', async () => {
      const data = await api.User.update({
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

      expect(data).toBeDefined();
      expect(data).toEqual(usersData[mockUserGuid]);
    });

    it('throws error when if missed guid while updating a UserMaster', async () => {
      try {
        await api.User.update();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: user is null or empty');
      }
    });

    it('delete a UserMaster', async () => {
      const data = await api.User.delete(mockUserGuid);
      expect(data).toBe(true);
    });

    it('throws error when if missed guid while deleting a UserMaster', async () => {
      try {
        await api.User.delete();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    it('Check if a UserMaster exist', async () => {
      const data = await api.User.exists(mockUserGuid);
      expect(data).toBe(true);
    });

    it('Check if a UserMaster does not exist', async () => {
      try {
        await api.User.exists('wrongID');
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.toString()).toBe('Not Found');
      }
    });

    it('throws error when if missed guid while checking a UserMaster existance', async () => {
      try {
        await api.User.exists();
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });
  });
});
