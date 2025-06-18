import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { ApiErrorResponse, HeaderRequest, TenantMetadata, Token } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class AuthenticationSdk extends ViewSdkBase {
  /**
   * Constructs a new AuthenticationSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Authentication
  /**
   * Retrieve tenants for email.
   *
   * @param {HeaderRequest} headers - Headers for custom authentication.
   * @param {string} headers.email - email to get tenants
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata[]>} A promise resolving to an array of TenantMetadata objects or an error response if not found.
   * @throws {MethodError} If the email is null or empty.
   */
  retrieveTenantsForEmail = async (email: string, cancelToken?: AbortController): Promise<TenantMetadata[]> => {
    if (!email) {
      GenericExceptionHandlers.ArgumentNullException('email');
    }
    const url = this.config.endpoint + 'v1.0/token/tenants';
    return await this.retrieveResource(url, cancelToken, { 'x-email': email });
  };
  /**
   * Generate authentication token (using password)
   *
   * @param {Object} headers - Headers for custom authentication.
   * @param {string} headers.email - The email address used to authenticate the tenant.
   * @param {string} headers.password - The password for the tenant's account.
   * @param {string} headers.tenantGUID - The GUID of the tenant for which the token is being generated.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {MethodError} If the email is null or empty or if the password is null or empty or if the tenantGUID is null or empty.
   */
  generateAuthenticationTokenByPassword = async (
    { email, password, tenantGUID }: HeaderRequest,
    cancelToken?: AbortController
  ) => {
    if (!email) {
      GenericExceptionHandlers.ArgumentNullException('email');
    }
    if (!password) {
      GenericExceptionHandlers.ArgumentNullException('password');
    }
    if (!tenantGUID) {
      GenericExceptionHandlers.ArgumentNullException('tenantGUID');
    }
    const url = this.config.endpoint + 'v1.0/token';
    return await this.retrieveResource(url, cancelToken, {
      'x-email': email,
      'x-password': password,
      'x-tenant-guid': tenantGUID,
    });
  };
  /**
   * Generate authentication token (using password SHA-256)
   *
   * @param {HeaderRequest} headers - Headers for custom authentication.
   * @param {string} headers.email - The email address used to authenticate the tenant.
   * @param {string} headers.passwordSHA256 - The passwordSHA256 for the tenant's account.
   * @param {string} headers.tenantGUID - The GUID of the tenant for which the token is being generated.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {ApiErrorResponse} If the email is null or empty.
   */
  generateAuthenticationTokenBySHA256 = async (
    { email, passwordSHA256, tenantGUID }: HeaderRequest,
    cancelToken?: AbortController
  ) => {
    if (!email) {
      GenericExceptionHandlers.ArgumentNullException('email');
    }
    if (!passwordSHA256) {
      GenericExceptionHandlers.ArgumentNullException('passwordSHA256');
    }
    if (!tenantGUID) {
      GenericExceptionHandlers.ArgumentNullException('tenantGUID');
    }
    const url = this.config.endpoint + 'v1.0/token';
    return await this.retrieveResource(url, cancelToken, {
      'x-email': email,
      'x-password-sha256': passwordSHA256,
      'x-tenant-guid': tenantGUID,
    });
  };
  /**
   * Generate administrator token (using password)
   *
   * @param {HeaderRequest} headers - Headers for custom authentication.
   * @param {string} headers.email - The email address used to authenticate the administrator.
   * @param {string} headers.password - The password for the administrator account.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Token>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {MethodError} If the email is null or empty or if the password is null or empty.
   */
  generateAdministratorToken = async (
    { email, password }: HeaderRequest,
    cancelToken?: AbortController
  ): Promise<Token> => {
    if (!email) {
      GenericExceptionHandlers.ArgumentNullException('email');
    }
    if (!password) {
      GenericExceptionHandlers.ArgumentNullException('password');
    }
    const url = this.config.endpoint + 'v1.0/token';
    return await this.retrieveResource(url, cancelToken, { 'x-email': email, 'x-password': password });
  };
  /**
   * Generate administrator token (using password SHA-256)
   *
   * @param {HeaderRequest} headers - Headers for custom authentication.
   * @param {string} headers.email - The admin email address used to authenticate the administrator.
   * @param {string} headers.passwordSHA256 - The admin passwordSHA256 for the administrator account.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Token>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {MethodError} If the email is null or empty or if the passwordSHA256 is null or empty.
   */
  generateAdministratorTokenBySHA256 = async (
    { email, passwordSHA256 }: HeaderRequest,
    cancelToken?: AbortController
  ): Promise<Token> => {
    if (!email) {
      GenericExceptionHandlers.ArgumentNullException('email');
    }
    if (!passwordSHA256) {
      GenericExceptionHandlers.ArgumentNullException('passwordSHA256');
    }
    const url = this.config.endpoint + 'v1.0/token';
    return await this.retrieveResource(url, cancelToken, { 'x-email': email, 'x-password-sha256': passwordSHA256 });
  };
  /**
   * Validate authentication token
   *
   * @param {Object} headers - Headers for custom authentication.
   * @param {string} headers.token - The token to get validate the token.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Token>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {MethodError} If the token is null or empty.
   */
  validateAuthenticationToken = async ({ token }: HeaderRequest, cancelToken?: AbortController): Promise<Token> => {
    if (!token) {
      GenericExceptionHandlers.ArgumentNullException('token');
    }
    const url = this.config.endpoint + 'v1.0/token/validate';
    return await this.retrieveResource(url, cancelToken, { 'x-token': token });
  };
  /**
   * Retrieve token details
   *
   * @param {Object} headers - Headers for custom authentication.
   * @param {string} headers.token - The token to get validate the token.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Token>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {MethodError} If the token is null or empty.
   */
  retrieveTokenDetails = async ({ token }: HeaderRequest, cancelToken?: AbortController): Promise<Token> => {
    if (!token) {
      GenericExceptionHandlers.ArgumentNullException('token');
    }
    const url = this.config.endpoint + 'v1.0/token/details';
    return await this.retrieveResource(url, cancelToken, { 'x-token': token });
  };
}
