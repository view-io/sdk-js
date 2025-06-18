import { getServer } from '../server';
import { handlers } from './handlers';
import { api, mockTenantId } from '../setupTest';
import { authTentents, mockemail, mockpassword, mockpasswordSHA256, token } from './mockData';

const server = getServer(handlers);

describe('ViewConfigurationSdk', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('Authentication', () => {
    it('Check if a Tenant exist', async () => {
      const data = await api.Authentication.retrieveTenantsForEmail(mockemail);
      expect(data).toBeDefined();
      expect(data).toEqual(authTentents);
    });
    it('throws error for invalid email', async () => {
      await expect(api.Authentication.retrieveTenantsForEmail('')).rejects.toThrow();
    });
    // generateAuthenticationTokenByPassword
    it('generateAuthenticationTokenByPassword', async () => {
      const data = await api.Authentication.generateAuthenticationTokenByPassword({
        email: mockemail,
        password: mockpassword,
        tenantGUID: mockTenantId,
      });
      expect(data).toHaveProperty('Valid');
    });
    it('throws error for invalid password', async () => {
      await expect(
        api.Authentication.generateAuthenticationTokenByPassword({ email: '', password: '', tenantGUID: '' })
      ).rejects.toThrow();
      await expect(
        api.Authentication.generateAuthenticationTokenByPassword({ email: mockemail, password: '', tenantGUID: '' })
      ).rejects.toThrow();
      await expect(
        api.Authentication.generateAuthenticationTokenByPassword({ email: mockemail, password: mockpassword, tenantGUID: '' })
      ).rejects.toThrow();
    });
    //generateAuthenticationTokenBySHA256
    it('generateAuthenticationTokenBySHA256', async () => {
      const data = await api.Authentication.generateAuthenticationTokenBySHA256({
        email: mockemail,
        passwordSHA256: mockpasswordSHA256,
        tenantGUID: mockTenantId,
      });
      expect(data).toHaveProperty('Valid');
    });
    it('throws error for invalid password', async () => {
      await expect(
        api.Authentication.generateAuthenticationTokenBySHA256({ email: '', password: '', tenantGUID: '' })
      ).rejects.toThrow();
      await expect(
        api.Authentication.generateAuthenticationTokenBySHA256({ email: mockemail, password: '', tenantGUID: '' })
      ).rejects.toThrow();
      await expect(
        api.Authentication.generateAuthenticationTokenBySHA256({ email: mockemail, password: mockpassword, tenantGUID: '' })
      ).rejects.toThrow();
    });
    //generateAdministratorToken
    it('generateAdministratorToken', async () => {
      const data = await api.Authentication.generateAdministratorToken({ email: mockemail, password: mockpassword });
      expect(data).toHaveProperty('Valid');
    });
    it('throws error for invalid password', async () => {
      await expect(api.Authentication.generateAdministratorToken({ email: '', password: '' })).rejects.toThrow();
    });
    //validateAuthenticationToken
    it('validateAuthenticationToken', async () => {
      const data = await api.Authentication.validateAuthenticationToken({ token: token });
      expect(data).toHaveProperty('Valid');
    });
    it('throws error for invalid token', async () => {
      await expect(api.Authentication.validateAuthenticationToken({ token: '' })).rejects.toThrow();
    });
    //retrieveTokenDetails
    it('retrieveTokenDetails', async () => {
      const data = await api.Authentication.retrieveTokenDetails({ token: token });
      expect(data).toHaveProperty('Valid');
    });
    it('throws error for invalid token', async () => {
      await expect(api.Authentication.retrieveTokenDetails({ token: '' })).rejects.toThrow();
    });
  });
});
