import { GenExceptionHandlersInstance } from '../exception/GenericExcerptionHandelrs';
import Credential from '../models/Credential';
import NodeModal from '../models/NodeModal';
import TenantMetadata from '../models/TenantMetadata';
import UserMaster from '../models/UserMaster';
import EncryptionKey from '../models/EncryptionKey';
import GraphRepository from '../models/GraphRepository';
import VectorRepository from '../models/VectorRepository';
import StoragePool from '../models/StoragePool';
import BucketMetadata from '../models/BucketMetadata';
import Collection from '../models/Collection';
import ObjectLock from '../models/ObjectLock';
import MetadataRule from '../models/MetadataRule';
import EmbeddingsRule from '../models/EmbeddingsRule';
import DataRepository from '../models/DataRepository';
import WebhookEvent from '../models/WebhookEvent';
import WebhookRule from '../models/WebhookRule';
import WebhookTarget from '../models/WebhookTarget';
import ViewEndpoint from '../models/ViewEndpoint';
import ViewSdkBase from './ViewSDKBase';
import EnumerationResult from '../models/EnumerationResult';
import Blob from '../models/Blob';
import EmbeddingsResult from '../models/EmbeddingsResult';
import CollectionStatistics from '../models/CollectionStatistics';
/**
 * Configuration service.
 * @module base/ViewConfigurationSdk
 * @version 0.1.0
 */
export default class ViewConfigurationSdk extends ViewSdkBase {
  /**
   * Constructs a new ConfigurationApi.
   * @alias module:base/ConfigurationApi
   * @class
   * @param {string} tenantGuid
   * @param {string} accessKey
   * @param {string} endpoint
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
  }
  /**
   * @constructor
   * @param {string} guid
   * @param {CancellationToken} token
   * @param {string} endpoint
   */

  // region Nodes
  /**
   * Retrieve a Node by its GUID.
   * @param {string} guid - The GUID of the node to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveNode = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/nodes/' + guid;
    return await this.retrieve(url, NodeModal, cancelToken);
  };

  /**
   * Retrieve All Nodes.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveNodes = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/nodes';
    return await this.retrieveMany(url, NodeModal, cancelToken);
  };

  /**
   * Create a Node.
   *
   * @param {Object} node Information about the credential.
   * @param {number} node.id - Node ID.
   * @param {string} node.GUID - Node GUID (automatically generated if not provided).
   * @param {string} node.name - Name of the node.
   * @param {string} node.hostname - Hostname of the node (default is 'localhost').
   * @param {string} node.InstanceType - Software instance type.
   * @param {Date} node.LastStartUtc - Last start timestamp in UTC.
   * @param {Date} node.CreatedUtc - Creation timestamp in UTC.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  createNode = async (node, cancelToken) => {
    if (!node) {
      GenExceptionHandlersInstance.ArgumentNullException('node');
    } else {
      // if (!(node instanceof ViewNode)) {
      //   throw new Error("Invalid object: Expected an instance of Node.");
      // }
    }
    const url = this.endpoint + '/v1.0/nodes';
    return await this.create(url, node, NodeModal, cancelToken);
  };

  /**
   * Update a Node.
   *
   * @param {Object} node Information about the credential.
   * @param {number} node.id - Node ID.
   * @param {string} node.GUID - Node GUID (automatically generated if not provided).
   * @param {string} node.name - Name of the node.
   * @param {string} node.hostname - Hostname of the node (default is 'localhost').
   * @param {string} node.InstanceType - Software instance type.
   * @param {Date} node.LastStartUtc - Last start timestamp in UTC.
   * @param {Date} node.CreatedUtc - Creation timestamp in UTC.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  updateNode = async (node, cancelToken) => {
    if (!node) {
      GenExceptionHandlersInstance.ArgumentNullException('node');
    }
    const url = this.endpoint + '/v1.0/nodes/' + node.GUID;
    return await this.update(url, node, NodeModal, cancelToken);
  };

  /**
   * Delete a Node.
   *
   * @param {string} guid - The GUID of the node to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  deleteNode = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/nodes/' + guid;
    return await this.delete(url, NodeModal, cancelToken);
  };

  /**
   * Check if a Node exists by its GUID.
   *
   * @param {string} guid - The GUID of the node to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the Node object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  existsNode = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/nodes/' + guid;
    return await this.exists(url, cancelToken);
  };

  //region Tenants

  /**
   * Retrieve tenant metadata.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the TenantMetadata object or null if not found.
   */
  retrieveTenant = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + guid;
    // Use the `retrieve` method to get the tenant metadata
    return await this.retrieve(url, TenantMetadata, cancelToken);
  };

  /**
   * Retrieve all tenants.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the TenantMetadata object or null if not found.
   */
  retrieveTenants = async (cancelToken, xtoken) => {
    if (!xtoken) {
      GenExceptionHandlersInstance.ArgumentNullException('xtoken');
    }
    const url = this.endpoint + '/v1.0/tenants/';
    // Use the `retrieveMany` method for fetching the list of tenants
    return await this.retrieveMany(url, TenantMetadata, cancelToken, { 'x-token': xtoken });
  };

  /**
   * Delete tenant metadata.
   * @param {string} guid - The GUID of the tenant to delete.
   * @param {string} [xtoken] - X-Token header
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the TenantMetadata object or null if not found.
   * @throws {Error} If the GUID is null or empty.
   */
  deleteTenant = async (guid, xtoken, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    if (!xtoken) {
      GenExceptionHandlersInstance.ArgumentNullException('xtoken');
    }
    const url = this.endpoint + '/v1.0/tenants/' + guid;
    // Use the `retrieveMany` method for fetching the list of tenants
    return await this.deleteRaw(url, cancelToken, { 'x-token': xtoken });
  };

  /**
   * Check if a tenant exists by its GUID.
   *
   * @param {string} guid - The GUID of the tenant.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the tenant exists, false otherwise.
   * @throws {Error} If the GUID is null or empty.
   */
  existsTenant = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + guid;
    // Use the `exists` method to check for the tenant
    return await this.exists(url, cancelToken);
  };

  /**
   * Write tenant metadata.
   *
   * @param {Object} tenant Information about the tenants.
   * @param {string|null} tenant.AccountGUID - Account GUID (optional).
   * @param {string} tenant.Name - Tenant's name (default is an empty string).
   * @param {string} tenant.S3BaseDomain - S3 base domain for the tenant.
   * @param {string} tenant.RestBaseDomain - REST base domain for the tenant.
   * @param {string} tenant.DefaultPoolGUID - Default pool's unique identifier for the tenant.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @param {string} [xtoken] - X-Token header
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the updated TenantMetadata object or null.
   * @throws {Error} If the tenant object is null.
   */
  writeTenant = async (tenant, cancelToken, xtoken) => {
    if (!tenant) {
      GenExceptionHandlersInstance.ArgumentNullException('tenant');
    }
    if (!xtoken) {
      GenExceptionHandlersInstance.ArgumentNullException('xtoken');
    }
    const url = this.endpoint + '/v1.0/tenants';
    // Use the `update` method to write the tenant metadata
    return await this.update(url, tenant, TenantMetadata, cancelToken, { 'x-token': xtoken });
  };

  /**
   * Update tenant metadata.
   *
   * @param {Object} tenant Information about the tenants.
   * @param {number} tenant.id - Tenant ID (defaults to 0, throws error if set to less than 1).
   * @param {string} tenant.GUID - Tenant's unique identifier (automatically generated if not provided).
   * @param {string|null} tenant.ParentGUID - Parent tenant's GUID (optional).
   * @param {string} tenant.Name - Tenant's name (default is an empty string).
   * @param {string} tenant.Region - Region for the tenant (default: 'us-west-1').
   * @param {string} tenant.S3BaseDomain - S3 base domain for the tenant.
   * @param {string} tenant.RestBaseDomain - REST base domain for the tenant.
   * @param {string} tenant.DefaultPoolGUID - Default pool's unique identifier for the tenant.
   * @param {boolean} tenant.Active - Whether the tenant is active (default: true).
   * @param {Date} tenant.CreatedUtc - Creation timestamp in UTC (default: current time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata|null|ApiErrorResponse>} A promise resolving to the updated TenantMetadata object or null.
   * @throws {Error} If the tenant object is null.
   */
  updateTenant = async (guid, tenant, cancelToken) => {
    if (!tenant) {
      GenExceptionHandlersInstance.ArgumentNullException('tenant');
    }
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + guid;
    // Use the `update` method to update the tenant metadata
    return await this.update(url, tenant, TenantMetadata, cancelToken);
  };

  /**
   * Enumerate Tenants.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateTenants = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  //region Credentials

  /**
   * Retrieve a credential by its GUID.
   *
   * @param {string} guid - The GUID of the credential to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Credential|null|ApiErrorResponse>} A promise resolving to the Credential object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveCredential = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/credentials/' + guid;
    return await this.retrieve(url, Credential, cancelToken);
  };

  /**
   * Retrieve all credentials.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Credential>|null|ApiErrorResponse>} A promise resolving to the list of Credentials or null if not found.
   */
  retrieveCredentials = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/credentials';

    // Use the `retrieveMany` method for fetching the list of credentials
    return await this.retrieveMany(url, Credential, cancelToken);
  };

  /**
   * Create a credential.
   *
   * @param {Object} cred Information about the credential.
   * @param {string} cred.GUID - Unique identifier for the credential (automatically generated if not provided).
   * @param {string} cred.tenantGuid - Unique identifier for the tenant.
   * @param {string} cred.UserGUID - Unique identifier for the user.
   * @param {string} cred.AccessKey - Access key for the credential.
   * @param {string} cred.SecretKey - Secret key for the credential.
   * @param {boolean} cred.Active - Whether the credential is active.
   * @param {Date} cred.CreatedUtc - The date and time when the credential was created in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Credential|null|ApiErrorResponse>} A promise resolving to the created Credential object or null.
   * @throws {Error} If the credential is null.
   */
  createCredential = async (cred, cancelToken) => {
    if (!cred) {
      GenExceptionHandlersInstance.ArgumentNullException('cred');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/credentials';
    // Use the `create` method for posting the credential
    return await this.create(url, cred, Credential, cancelToken);
  };

  /**
   * Update a credential.
   *
   * @param {Object} cred Information about the credential.
   * @param {string} cred.GUID - Unique identifier for the credential (automatically generated if not provided).
   * @param {string} cred.tenantGuid - Unique identifier for the tenant.
   * @param {string} cred.UserGUID - Unique identifier for the user.
   * @param {string} cred.AccessKey - Access key for the credential.
   * @param {string} cred.SecretKey - Secret key for the credential.
   * @param {boolean} cred.Active - Whether the credential is active.
   * @param {Date} cred.CreatedUtc - The date and time when the credential was created in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Credential|null|ApiErrorResponse>} A promise resolving to the updated Credential object or null.
   * @throws {Error} If the credential is null.
   */
  updateCredential = async (cred, cancelToken) => {
    if (!cred) {
      GenExceptionHandlersInstance.ArgumentNullException('cred');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/credentials/' + cred.GUID;
    // Use the `update` method to update the credential
    return await this.update(url, cred, Credential, cancelToken);
  };

  /**
   * Check if a credential exists by its GUID.
   *
   * @param {string} guid - The GUID of the credential.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the credential exists, false otherwise.
   * @throws {Error} If the GUID is null or empty.
   */
  existsCredential = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/credentials/' + guid;
    // Use the `exists` method to check for the credential
    return await this.exists(url, cancelToken);
  };

  /**
   * Delete a credential by its GUID.
   *
   * @param {string} guid - The GUID of the credential to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the credential is deleted.
   * @throws {Error} If the GUID is null or empty.
   */
  deleteCredential = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/credentials/' + guid;
    // Use the `delete` method to remove the credential
    return await this.delete(url, Credential, cancelToken);
  };

  /**
   * Enumerate Credentials.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateCredentials = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/credentials/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  // region Users

  /**
   * Create a user.
   *
   * @param {Object} user Information about the credential.
   * @param {string} user.GUID - User's unique identifier (automatically generated if not provided).
   * @param {string} user.tenantGuid - Tenant's unique identifier (automatically generated if not provided).
   * @param {string} user.FirstName - User's first name.
   * @param {string} user.LastName - User's last name.
   * @param {string} user.Notes - Any additional notes for the user.
   * @param {string} user.Email - User's email address.
   * @param {string} user.PasswordSha256 - SHA-256 hashed password (not serialized).
   * @param {boolean} user.Active - Whether the user is active (default: true).
   * @param {Date} user.CreatedUtc - Date and time the user was created (in UTC, default: current time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the created UserMaster object or null.
   * @throws {Error} If the user object is null.
   */
  createUser = async (user, cancelToken) => {
    if (!user) {
      GenExceptionHandlersInstance.ArgumentNullException('user');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/users';
    // Use the `create` method for posting the user
    return await this.create(url, user, UserMaster, cancelToken);
  };

  /**
   * Check if a user exists by its GUID.
   *
   * @param {string} guid - The GUID of the user.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the user exists, false otherwise.
   * @throws {Error} If the GUID is null or empty.
   */
  existsUser = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/users/' + guid;
    // Use the `exists` method to check for the user
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a user by its GUID.
   *
   * @param {string} guid - The GUID of the user to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the UserMaster object or null if not found.
   * @throws {Error} If the GUID is null or empty.
   */
  retrieveUser = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/users/' + guid;
    // Use the `retrieve` method to get the user
    return await this.retrieve(url, UserMaster, cancelToken);
  };

  /**
   * Retrieve all users.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<UserMaster>|null|ApiErrorResponse>} A promise resolving to the list of Users or null if not found.
   */
  retrieveUsers = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/users';
    // Use the `retrieveMany` method for fetching the list of users
    return await this.retrieveMany(url, UserMaster, cancelToken);
  };

  /**
   * Update a user.
   *
   * @param {Object} user Information about the credential.
   * @param {string} user.GUID - User's unique identifier (automatically generated if not provided).
   * @param {string} user.tenantGuid - Tenant's unique identifier (automatically generated if not provided).
   * @param {string} user.FirstName - User's first name.
   * @param {string} user.LastName - User's last name.
   * @param {string} user.Notes - Any additional notes for the user.
   * @param {string} user.Email - User's email address.
   * @param {string} user.PasswordSha256 - SHA-256 hashed password (not serialized).
   * @param {boolean} user.Active - Whether the user is active (default: true).
   * @param {Date} user.CreatedUtc - Date and time the user was created (in UTC, default: current time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<UserMaster|null|ApiErrorResponse>} A promise resolving to the updated UserMaster object or null.
   * @throws {Error} If the user object is null.
   */
  updateUser = async (user, cancelToken) => {
    if (!user) {
      GenExceptionHandlersInstance.ArgumentNullException('user');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/users/' + user.GUID;
    // Use the `update` method to update the user
    return await this.update(url, user, UserMaster, cancelToken);
  };

  /**
   * Delete a user by its GUID.
   *
   * @param {string} guid - The GUID of the user to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the user is deleted.
   * @throws {Error} If the GUID is null or empty.
   */
  deleteUser = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/users/' + guid;
    // Use the `delete` method to remove the user
    return await this.delete(url, UserMaster, cancelToken);
  };

  /**
   * Enumerate Users.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateUsers = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/users`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  // region Encription-Key

  /**
   * Create an encryption key.
   *
   * @param {Object} key Information about the encryption key.
   * @param {string} key.GUID - GUID of the encryption key (automatically generated if not provided).
   * @param {string} key.tenantGuid - Tenant GUID (automatically generated if not provided).
   * @param {string} key.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} key.KeyBase64 - Key in base64 form.
   * @param {string} key.KeyHex - Key in hexadecimal form.
   * @param {string} key.IvBase64 - Initialization vector in base64 form.
   * @param {string} key.IvHex - Initialization vector in hexadecimal form.
   * @param {string} key.SaltBase64 - Salt in base64 form.
   * @param {string} key.SaltHex - Salt in hexadecimal form.
   * @param {string} key.Name - Name of the encryption key.
   * @param {string} key.Description - Description of the encryption key.
   * @param {Date} key.CreatedUtc - Creation timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EncryptionKey|null|ApiErrorResponse>} A promise resolving to the created EncryptionKey object.
   * @throws {Error} If the key is null.
   */
  createEncryptionKey = async (key, cancelToken) => {
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('key');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/encryptionkeys';
    return await this.create(url, key, EncryptionKey, cancelToken);
  };

  /**
   * Check if an encryption key exists.
   *
   * @param {string} guid - The GUID of the encryption key to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the encryption key exists, false otherwise.
   * @throws {Error} If the guid is null or empty.
   */
  existsEncryptionKey = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/encryptionkeys/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve an encryption key by its GUID.
   *
   * @param {string} guid - The GUID of the encryption key to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EncryptionKey|null|ApiErrorResponse>} A promise resolving to the EncryptionKey object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveEncryptionKey = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/encryptionkeys/' + guid;
    return await this.retrieve(url, EncryptionKey, cancelToken);
  };

  /**
   * Retrieve all encryption keys.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<EncryptionKey>|ApiErrorResponse>} A promise resolving to an array of EncryptionKey objects.
   */
  retrieveEncryptionKeys = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/encryptionkeys';
    return await this.retrieveMany(url, EncryptionKey, cancelToken);
  };

  /**
   * Update an encryption key.
   *
   * @param {Object} key Information about the encryption key.
   * @param {string} key.GUID - GUID of the encryption key (automatically generated if not provided).
   * @param {string} key.tenantGuid - Tenant GUID (automatically generated if not provided).
   * @param {string} key.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} key.KeyBase64 - Key in base64 form.
   * @param {string} key.KeyHex - Key in hexadecimal form.
   * @param {string} key.IvBase64 - Initialization vector in base64 form.
   * @param {string} key.IvHex - Initialization vector in hexadecimal form.
   * @param {string} key.SaltBase64 - Salt in base64 form.
   * @param {string} key.SaltHex - Salt in hexadecimal form.
   * @param {string} key.Name - Name of the encryption key.
   * @param {string} key.Description - Description of the encryption key.
   * @param {Date} key.CreatedUtc - Creation timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EncryptionKey|null|ApiErrorResponse>} A promise resolving to the updated EncryptionKey object.
   * @throws {Error} If the key is null.
   */
  updateEncryptionKey = async (key, cancelToken) => {
    if (!key) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/encryptionkeys/' + key.GUID;
    return await this.update(url, key, EncryptionKey, cancelToken);
  };

  /**
   * Delete an encryption key by its GUID.
   *
   * @param {string} guid - The GUID of the encryption key to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the deletion is complete.
   * @throws {Error} If the guid is null or empty.
   */
  deleteEncryptionKey = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/encryptionkeys/' + guid;
    return await this.delete(url, EncryptionKey, cancelToken);
  };

  /**
   * Enumerate Encryption-Keys.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateEncryptionKeys = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/encryptionkeys/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  // region Vector-Repositories

  /**
   * Create a vector repository.
   *
   * @param {Object} vector Information about the vector repository.
   * @param {string} vector.GUID - Repository GUID (automatically generated if not provided).
   * @param {string} vector.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} vector.name - Name of the repository (default is 'My vector repository').
   * @param {string} vector.repositoryType - Type of vector repository.
   * @param {string} vector.endpointUrl - Endpoint URL for the repository.
   * @param {string} vector.apiKey - API key for authentication.
   * @param {string} vector.model - Embedding model to be used (default is 'all-MiniLM-L6-v2').
   * @param {number} vector.dimensionality - Dimensionality of embeddings.
   * @param {string} vector.databaseHostname - Hostname of the database.
   * @param {string} vector.databaseName - Name of the database.
   * @param {string} vector.databaseTable - Table name in the database.
   * @param {number} vector.databasePort - Database port.
   * @param {string} vector.databaseUser - Database username.
   * @param {string} vector.databasePassword - Database password.
   * @param {string} vector.promptPrefix - Prefix to prepend to prompts.
   * @param {string} vector.promptSuffix - Suffix to append to prompts.
   * @param {Date} vector.createdUtc - Creation timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<VectorRepository>} A promise resolving to the created VectorRepository object.
   * @throws {Error} If the repo is null.
   */
  async createVectorRepository(vector, cancelToken) {
    if (!vector) {
      GenExceptionHandlersInstance.ArgumentNullException('repo');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories';
    return await this.create(url, vector, VectorRepository, cancelToken);
  }

  /**
   * Check if a vector repository exists.
   *
   * @param {string} guid - The GUID of the vector repository to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the vector repository exists, false otherwise.
   * @throws {Error} If the guid is null or empty.
   */
  async existsVectorRepository(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories/' + guid;
    return await this.exists(url, cancelToken);
  }

  /**
   * Retrieve a vector repository.
   *
   * @param {string} guid - The GUID of the vector repository to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<VectorRepository>} A promise resolving to the VectorRepository object.
   * @throws {Error} If the guid is null or empty.
   */
  async retrieveVectorRepository(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories/' + guid;
    return await this.retrieve(url, VectorRepository, cancelToken);
  }

  /**
   * Retrieve all vector repositories.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<VectorRepository>>} A promise resolving to a list of VectorRepository objects.
   */
  async retrieveVectorRepositories(cancelToken) {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories';
    return await this.retrieveMany(url, VectorRepository, cancelToken);
  }

  /**
   * Update a vector repository.
   *
   * @param {Object} vector Information about the vector repository.
   * @param {string} vector.GUID - Repository GUID (automatically generated if not provided).
   * @param {string} vector.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} vector.name - Name of the repository (default is 'My vector repository').
   * @param {string} vector.repositoryType - Type of vector repository.
   * @param {string} vector.endpointUrl - Endpoint URL for the repository.
   * @param {string} vector.apiKey - API key for authentication.
   * @param {string} vector.model - Embedding model to be used (default is 'all-MiniLM-L6-v2').
   * @param {number} vector.dimensionality - Dimensionality of embeddings.
   * @param {string} vector.databaseHostname - Hostname of the database.
   * @param {string} vector.databaseName - Name of the database.
   * @param {string} vector.databaseTable - Table name in the database.
   * @param {number} vector.databasePort - Database port.
   * @param {string} vector.databaseUser - Database username.
   * @param {string} vector.databasePassword - Database password.
   * @param {string} vector.promptPrefix - Prefix to prepend to prompts.
   * @param {string} vector.promptSuffix - Suffix to append to prompts.
   * @param {Date} vector.createdUtc - Creation timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<VectorRepository>} A promise resolving to the updated VectorRepository object.
   * @throws {Error} If the vector is null.
   */
  async updateVectorRepository(vector, cancelToken) {
    if (!vector) {
      GenExceptionHandlersInstance.ArgumentNullException('vector');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories/' + vector.GUID;
    return await this.update(url, vector, VectorRepository, cancelToken);
  }

  /**
   * Delete a vector repository.
   *
   * @param {string} guid - The GUID of the vector repository to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the vector repository is deleted.
   * @throws {Error} If the guid is null or empty.
   */
  async deleteVectorRepository(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/vectorrepositories/' + guid;
    return await this.delete(url, VectorRepository, cancelToken);
  }

  /**
   * Enumerate Vector-Repositories.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateVectorRepositories = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/vectorrepositories/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  // region Graph-Repository

  /**
   * Create a graph repository.
   *
   * @param {Object} graph - Information about the graph repository.
   * @param {string} [graph.GUID] - GUID of the graph repository (auto-generated if not provided).
   * @param {string} [graph.tenantGuid] - Tenant GUID (auto-generated if not provided).
   * @param {string} [graph.Name] - Name of the graph.
   * @param {string} [graph.RepositoryType] - Type of graph graph.
   * @param {string} [graph.EndpointUrl] - Endpoint URL.
   * @param {string} [graph.ApiKey] - API key for the graph.
   * @param {string} [graph.Username] - Username for authentication.
   * @param {string} [graph.Password] - Password for authentication.
   * @param {string} [graph.Hostname] - Hostname for the graph.
   * @param {number} [graph.Port] - Port number for the graph (default is 0).
   * @param {string} [graph.GraphIdentifier] - Identifier of the graph.
   * @param {Date} [graph.CreatedUtc] - Creation timestamp in UTC (defaults to current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphRepository>} A promise resolving to the created GraphRepository object.
   * @throws {Error} If the repo is null.
   */
  async createGraphRepository(graph, cancelToken) {
    if (!graph) {
      GenExceptionHandlersInstance.ArgumentNullException('graph');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/graphrepositories';
    return await this.create(url, graph, GraphRepository, cancelToken);
  }

  /**
   * Check if a graph repository exists.
   *
   * @param {string} guid - The GUID of the graph repository to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to true if the graph repository exists, false otherwise.
   * @throws {Error} If the guid is null or empty.
   */
  async existsGraphRepository(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/graphrepositories/' + guid;
    return await this.exists(url, cancelToken);
  }

  /**
   * Retrieve a graph repository.
   *
   * @param {string} guid - The GUID of the graph repository to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphRepository>} A promise resolving to the GraphRepository object.
   * @throws {Error} If the guid is null or empty.
   */
  async retrieveGraphRepository(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/graphrepositories/' + guid;
    return await this.retrieve(url, GraphRepository, cancelToken);
  }

  /**
   * Retrieve all graph repositories.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<GraphRepository>>} A promise resolving to a list of GraphRepository objects.
   */
  async retrieveGraphRepositories(cancelToken) {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/graphrepositories';
    return await this.retrieveMany(url, GraphRepository, cancelToken);
  }

  /**
   * Update a graph repository.
   *
   * @param {Object} graph - Information about the graph repository.
   * @param {string} [graph.GUID] - GUID of the graph repository (auto-generated if not provided).
   * @param {string} [graph.tenantGuid] - Tenant GUID (auto-generated if not provided).
   * @param {string} [graph.Name] - Name of the graph.
   * @param {string} [graph.RepositoryType] - Type of graph graph.
   * @param {string} [graph.EndpointUrl] - Endpoint URL.
   * @param {string} [graph.ApiKey] - API key for the graph.
   * @param {string} [graph.Username] - Username for authentication.
   * @param {string} [graph.Password] - Password for authentication.
   * @param {string} [graph.Hostname] - Hostname for the graph.
   * @param {number} [graph.Port] - Port number for the graph (default is 0).
   * @param {string} [graph.GraphIdentifier] - Identifier of the graph.
   * @param {Date} [graph.CreatedUtc] - Creation timestamp in UTC (defaults to current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphRepository>} A promise resolving to the updated GraphRepository object.
   * @throws {Error} If the graph is null.
   */
  async updateGraphRepository(graph, cancelToken) {
    if (!graph) {
      GenExceptionHandlersInstance.ArgumentNullException('graph');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/graphrepositories/' + graph.GUID;
    return await this.update(url, graph, GraphRepository, cancelToken);
  }

  /**
   * Delete a graph repository.
   *
   * @param {string} guid - The GUID of the graph repository to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise that resolves when the graph repository is deleted.
   * @throws {Error} If the guid is null or empty.
   */
  async deleteGraphRepository(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/graphrepositories/' + guid;
    return await this.delete(url, GraphRepository, cancelToken);
  }

  /**
   * Enumerate Graph-Repositories.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateGraphRepositories = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/graphrepositories/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  // region Pool

  /**
   * Create a pool.
   *
   * @param {Object} pool Information about the storage pool.
   * @param {number} pool.id - Database row ID.
   * @param {string} pool.GUID - Storage pool GUID (automatically generated if not provided).
   * @param {string} pool.TenantGUID - Tenant GUID.
   * @param {string} pool.EncryptionKeyGUID - Encryption key GUID.
   * @param {string} pool.Name - Name of the storage pool.
   * @param {string} pool.Provider - Provider of the storage pool (default is 'Disk').
   * @param {string} pool.WriteMode - Object key write mode.
   * @param {boolean} pool.UseSsl - Enable or disable SSL.
   * @param {string} pool.Endpoint - Endpoint URL for the storage pool provider.
   * @param {string} pool.AccessKey - Access key.
   * @param {string} pool.SecretKey - Secret key.
   * @param {string} pool.AwsRegion - AWS region.
   * @param {string} pool.AwsBucket - AWS bucket.
   * @param {string} pool.AwsBaseDomain - Base URL for AWS S3 compatible storage platforms.
   * @param {string} pool.AwsBaseUrl - Base URL to use for objects.
   * @param {string} pool.DiskDirectory - Disk directory.
   * @param {string} pool.AzureAccount - Azure account.
   * @param {string} pool.AzureContainer - Azure container.
   * @param {string} pool.Compress - Compression type.
   * @param {boolean} pool.EnableReadCaching - Flag to enable or disable read caching.
   * @param {Date} pool.CreatedUtc - Creation timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the created StoragePool object or null.
   * @throws {Error} If the pool is null.
   */
  createPool = async (pool, cancelToken) => {
    if (!pool) {
      GenExceptionHandlersInstance.ArgumentNullException('pool');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools';
    return await this.create(url, pool, StoragePool, cancelToken);
  };

  /**
   * Check if a pool exists.
   *
   * @param {string} guid - The GUID of the pool to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the pool exists, or false if not.
   * @throws {Error} If the guid is null or empty.
   */
  existsPool = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a pool by its GUID.
   *
   * @param {string} guid - The GUID of the pool to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the StoragePool object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrievePool = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools/' + guid;
    return await this.retrieve(url, StoragePool, cancelToken);
  };

  /**
   * Retrieve all pools.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<StoragePool>|ApiErrorResponse>} A promise resolving to an array of StoragePool objects.
   */
  retrievePools = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools';
    return await this.retrieveMany(url, StoragePool, cancelToken);
  };

  /**
   * Update a pool.
   *
   * @param {Object} pool Information about the storage pool.
   * @param {number} pool.id - Database row ID.
   * @param {string} pool.GUID - Storage pool GUID (automatically generated if not provided).
   * @param {string} pool.TenantGUID - Tenant GUID.
   * @param {string} pool.EncryptionKeyGUID - Encryption key GUID.
   * @param {string} pool.Name - Name of the storage pool.
   * @param {string} pool.Provider - Provider of the storage pool (default is 'Disk').
   * @param {string} pool.WriteMode - Object key write mode.
   * @param {boolean} pool.UseSsl - Enable or disable SSL.
   * @param {string} pool.Endpoint - Endpoint URL for the storage pool provider.
   * @param {string} pool.AccessKey - Access key.
   * @param {string} pool.SecretKey - Secret key.
   * @param {string} pool.AwsRegion - AWS region.
   * @param {string} pool.AwsBucket - AWS bucket.
   * @param {string} pool.AwsBaseDomain - Base URL for AWS S3 compatible storage platforms.
   * @param {string} pool.AwsBaseUrl - Base URL to use for objects.
   * @param {string} pool.DiskDirectory - Disk directory.
   * @param {string} pool.AzureAccount - Azure account.
   * @param {string} pool.AzureContainer - Azure container.
   * @param {string} pool.Compress - Compression type.
   * @param {boolean} pool.EnableReadCaching - Flag to enable or disable read caching.
   * @param {Date} pool.CreatedUtc - Creation timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<StoragePool|null|ApiErrorResponse>} A promise resolving to the updated StoragePool object or null.
   * @throws {Error} If the pool is null.
   */
  updatePool = async (pool, cancelToken) => {
    if (!pool) {
      GenExceptionHandlersInstance.ArgumentNullException('pool');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools/' + pool.GUID;
    return await this.update(url, pool, StoragePool, cancelToken);
  };

  /**
   * Delete a pool by its GUID.
   *
   * @param {string} guid - The GUID of the pool to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
   * @throws {Error} If the guid is null or empty.
   */
  deletePool = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/pools/' + guid;
    return await this.delete(url, StoragePool, cancelToken);
  };

  // region Bucket

  /**
   * Create a bucket.
   *
   * @param {Object} bucket Information about the bucket metadata.
   * @param {number} bucket.id - Bucket ID.
   * @param {string} bucket.GUID - Bucket GUID (automatically generated if not provided).
   * @param {string} bucket.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} bucket.PoolGUID - Pool GUID (automatically generated if not provided).
   * @param {string} bucket.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} bucket.Category - Bucket category.
   * @param {string} bucket.Name - Name of the bucket.
   * @param {string} bucket.RegionString - Region string (default is 'us-west-1').
   * @param {boolean} bucket.Versioning - Enable or disable versioning (default is true).
   * @param {number|null} bucket.RetentionMinutes - Retention in minutes (optional).
   * @param {number|null} bucket.MaxUploadSize - Maximum upload size (optional).
   * @param {number} bucket.MaxMultipartUploadSeconds - Maximum multipart upload seconds (default is seven days).
   * @param {Date} bucket.LastAccessUtc - Last access timestamp in UTC.
   * @param {Date} bucket.CreatedUtc - Created timestamp in UTC.
   * @param {UserMaster|null} bucket.Owner - Owner of the bucket (optional).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the created BucketMetadata object or null.
   * @throws {Error} If the bucket is null.
   */
  createBucket = async (bucket, cancelToken) => {
    if (!bucket) {
      GenExceptionHandlersInstance.ArgumentNullException('bucket');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets';
    return await this.create(url, bucket, BucketMetadata, cancelToken);
  };

  /**
   * Check if a bucket exists.
   *
   * @param {string} guid - The GUID of the bucket to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the bucket exists, or false if not.
   * @throws {Error} If the guid is null or empty.
   */
  existsBucket = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a bucket by its GUID.
   *
   * @param {string} guid - The GUID of the bucket to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the BucketMetadata object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveBucket = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid;
    return await this.retrieve(url, BucketMetadata, cancelToken);
  };

  /**
   * Retrieve all buckets.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<BucketMetadata>|ApiErrorResponse>} A promise resolving to an array of BucketMetadata objects.
   */
  retrieveBuckets = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets';
    return await this.retrieveMany(url, BucketMetadata, cancelToken);
  };

  /**
   * Update a bucket.
   *
   * @param {Object} bucket Information about the bucket metadata.
   * @param {number} bucket.id - Bucket ID.
   * @param {string} bucket.GUID - Bucket GUID (automatically generated if not provided).
   * @param {string} bucket.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} bucket.PoolGUID - Pool GUID (automatically generated if not provided).
   * @param {string} bucket.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} bucket.Category - Bucket category.
   * @param {string} bucket.Name - Name of the bucket.
   * @param {string} bucket.RegionString - Region string (default is 'us-west-1').
   * @param {boolean} bucket.Versioning - Enable or disable versioning (default is true).
   * @param {number|null} bucket.RetentionMinutes - Retention in minutes (optional).
   * @param {number|null} bucket.MaxUploadSize - Maximum upload size (optional).
   * @param {number} bucket.MaxMultipartUploadSeconds - Maximum multipart upload seconds (default is seven days).
   * @param {Date} bucket.LastAccessUtc - Last access timestamp in UTC.
   * @param {Date} bucket.CreatedUtc - Created timestamp in UTC.
   * @param {UserMaster|null} bucket.Owner - Owner of the bucket (optional).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<BucketMetadata|null|ApiErrorResponse>} A promise resolving to the updated BucketMetadata object or null.
   * @throws {Error} If the bucket is null.
   */
  updateBucket = async (bucket, cancelToken) => {
    if (!bucket) {
      GenExceptionHandlersInstance.ArgumentNullException('bucket');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + bucket.GUID;
    return await this.update(url, bucket, BucketMetadata, cancelToken);
  };

  /**
   * Delete a bucket by its GUID.
   *
   * @param {string} guid - The GUID of the bucket to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
   * @throws {Error} If the guid is null or empty.
   */
  deleteBucket = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/buckets/' + guid;
    return await this.delete(url, BucketMetadata, cancelToken);
  };

  //region Collections

  /**
   * Retrieve all collections.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Collection>|ApiErrorResponse>} A promise resolving to an array of Collection objects.
   */
  retrieveCollections = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/collections';
    return await this.retrieveMany(url, Collection, cancelToken);
  };

  /**
   * Retrieve a collection by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Collection|null|ApiErrorResponse>} A promise resolving to the Collection object or null if not found.
   * @throws {Error} If the collectionGuid is null or empty.
   */
  retrieveCollection = async (collectionGuid, cancelToken) => {
    if (!collectionGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('collectionGuid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/collections/' + collectionGuid;
    return await this.retrieve(url, Collection, cancelToken);
  };

  /**
   * Retrieve statistics for a collection by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to retrieve statistics for.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<CollectionStatistics|null|ApiErrorResponse>} A promise resolving to the CollectionStatistics object or null.
   * @throws {Error} If the collectionGuid is null or empty.
   */
  retrieveCollectionStatistics = async (collectionGuid, cancelToken) => {
    if (!collectionGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('collectionGuid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/collections/' + collectionGuid + '?stats';
    return await this.retrieve(url, CollectionStatistics, cancelToken);
  };

  /**
   * Create a new collection.
   *
   * @param {Object} collection Information about the collection.
   * @param {number} collection.id - Collection ID.
   * @param {string} collection.GUID - Collection GUID (automatically generated if not provided).
   * @param {string} collection.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} collection.Name - Name of the collection.
   * @param {boolean} collection.AllowOverwrites - Indicates whether source documents can be overwritten (default is true).
   * @param {string} collection.AdditionalData - Additional data (optional).
   * @param {Date} collection.CreatedUtc - Creation timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Collection|null|ApiErrorResponse>} A promise resolving to the created Collection object or null.
   * @throws {Error} If the collection is null.
   */
  createCollection = async (collection, cancelToken) => {
    if (!collection) {
      GenExceptionHandlersInstance.ArgumentNullException('collection');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/collections';
    return await this.create(url, collection, Collection, cancelToken);
  };

  /**
   * Delete a collection by its GUID.
   *
   * @param {string} collectionGuid - The GUID of the collection to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if successful.
   * @throws {Error} If the collectionGuid is null or empty.
   */
  deleteCollection = async (collectionGuid, cancelToken) => {
    if (!collectionGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('collectionGuid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/collections/' + collectionGuid;
    return await this.delete(url, Collection, cancelToken);
  };

  /**
   * Enumerate Collections.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateCollections = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/collections`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  //region Object-Locks

  /**
   * Create a new object lock.
   *
   * @param {Object} objectLock Information about the object lock.
   * @param {string} objectLock.GUID - Object lock GUID (automatically generated if not provided).
   * @param {string} objectLock.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} objectLock.NodeGUID - Node GUID (automatically generated if not provided).
   * @param {string} objectLock.BucketGUID - Bucket GUID (automatically generated if not provided).
   * @param {string} objectLock.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} objectLock.ObjectGUID - Object GUID (automatically generated if not provided).
   * @param {string} objectLock.Key - Key for the object (default is empty string).
   * @param {string} objectLock.Version - Version of the object (default is empty string).
   * @param {boolean} objectLock.IsReadLock - Indicates if this is a read lock (default is false).
   * @param {boolean} objectLock.IsWriteLock - Indicates if this is a write lock (default is false).
   * @param {Date} objectLock.CreatedUtc - Creation timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectLock|null|ApiErrorResponse>} A promise resolving to the created ObjectLock object or null.
   * @throws {Error} If the objectLock is null.
   */
  createObjectLock = async (objectLock, cancelToken) => {
    if (!objectLock) {
      GenExceptionHandlersInstance.ArgumentNullException('objectLock');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/objectlocks';
    return await this.create(url, objectLock, ObjectLock, cancelToken);
  };

  /**
   * Check if an object lock exists by its GUID.
   *
   * @param {string} guid - The GUID of the object lock to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the object lock exists, otherwise false.
   * @throws {Error} If the guid is null or empty.
   */
  existsObjectLock = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/objectlocks/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve an object lock by its GUID.
   *
   * @param {string} guid - The GUID of the object lock to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectLock|null|ApiErrorResponse>} A promise resolving to the ObjectLock object or null.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveObjectLock = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/objectlocks/' + guid;
    return await this.retrieve(url, ObjectLock, cancelToken);
  };

  /**
   * Retrieve all object locks.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<ObjectLock>|ApiErrorResponse>} A promise resolving to an array of ObjectLock objects.
   */
  retrieveObjectLocks = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/objectlocks';
    return await this.retrieveMany(url, ObjectLock, cancelToken);
  };

  /**
   * Update an existing object lock.
   *
   * @param {Object} objectLock Information about the object lock.
   * @param {string} objectLock.GUID - Object lock GUID (automatically generated if not provided).
   * @param {string} objectLock.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} objectLock.NodeGUID - Node GUID (automatically generated if not provided).
   * @param {string} objectLock.BucketGUID - Bucket GUID (automatically generated if not provided).
   * @param {string} objectLock.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} objectLock.ObjectGUID - Object GUID (automatically generated if not provided).
   * @param {string} objectLock.Key - Key for the object (default is empty string).
   * @param {string} objectLock.Version - Version of the object (default is empty string).
   * @param {boolean} objectLock.IsReadLock - Indicates if this is a read lock (default is false).
   * @param {boolean} objectLock.IsWriteLock - Indicates if this is a write lock (default is false).
   * @param {Date} objectLock.CreatedUtc - Creation timestamp in UTC.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ObjectLock|null|ApiErrorResponse>} A promise resolving to the updated ObjectLock object or null.
   * @throws {Error} If the objectLock is null.
   */
  updateObjectLock = async (objectLock, cancelToken) => {
    if (!objectLock) {
      GenExceptionHandlersInstance.ArgumentNullException('objectLock');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/objectlocks/' + objectLock.GUID;
    return await this.update(url, objectLock, ObjectLock, cancelToken);
  };

  /**
   * Delete an object lock by its GUID.
   *
   * @param {string} guid - The GUID of the object lock to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
   * @throws {Error} If the guid is null or empty.
   */
  deleteObjectLock = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/objectlocks/' + guid;
    return await this.delete(url, ObjectLock, cancelToken);
  };

  //region Metadata-Rules

  /**
   * Create a new metadata rule.
   *
   * @param {Object} metadataRule Information about the metadata rule.
   * @param {string} metadataRule.GUID - Metadata rule GUID (automatically generated if not provided).
   * @param {string} metadataRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} metadataRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} metadataRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} metadataRule.Name - Name of the rule (default is null).
   * @param {string} metadataRule.ContentType - Content type (default is "text/plain").
   * @param {string} metadataRule.Prefix - Prefix (default is null).
   * @param {string} metadataRule.Suffix - Suffix (default is null).
   * @param {string} metadataRule.ProcessingEndpoint - Processing endpoint (default is localhost).
   * @param {string} metadataRule.CleanupEndpoint - Cleanup endpoint (default is localhost).
   * @param {string} metadataRule.TypeDetectorEndpoint - Type detector endpoint (default is localhost).
   * @param {string} metadataRule.SemanticCellEndpoint - Semantic cell endpoint (default is localhost).
   * @param {number} metadataRule.MaxChunkContentLength - Maximum chunk content length (default is 512).
   * @param {number} metadataRule.ShiftSize - Shift size (default is 512).
   * @param {string} metadataRule.UdrEndpoint - UDR endpoint (default is localhost).
   * @param {string} metadataRule.DataCatalogType - Data catalog type (default is DataCatalogTypeEnum.Lexi).
   * @param {string} metadataRule.DataCatalogEndpoint - Data catalog endpoint (default is localhost).
   * @param {string} metadataRule.DataCatalogCollection - Data catalog collection identifier (default is null).
   * @param {string} metadataRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {number} metadataRule.TopTerms - Number of top terms to request (default is 25).
   * @param {boolean} metadataRule.CaseInsensitive - Enable case insensitive processing (default is true).
   * @param {boolean} metadataRule.IncludeFlattened - Enable inclusion of flattened representation (default is true).
   * @param {string} metadataRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {number} metadataRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} metadataRule.RetentionMinutes - Minutes to retain generated document (default is null).
   * @param {Date} metadataRule.CreatedUtc - Creation timestamp (default is current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MetadataRule|null|ApiErrorResponse>} A promise resolving to the created MetadataRule object or null.
   * @throws {Error} If the rule is null.
   */
  createMetadataRule = async (metadataRule, cancelToken) => {
    if (!metadataRule) {
      GenExceptionHandlersInstance.ArgumentNullException('rule');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/metadatarules';
    return await this.create(url, metadataRule, MetadataRule, cancelToken);
  };

  /**
   * Check if a metadata rule exists by its GUID.
   *
   * @param {string} guid - The GUID of the metadata rule to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the metadata rule exists, otherwise false.
   * @throws {Error} If the guid is null or empty.
   */
  existsMetadataRule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/metadatarules/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a metadata rule by its GUID.
   *
   * @param {string} guid - The GUID of the metadata rule to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MetadataRule|null|ApiErrorResponse>} A promise resolving to the MetadataRule object or null.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveMetadataRule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/metadatarules/' + guid;
    return await this.retrieve(url, MetadataRule, cancelToken);
  };

  /**
   * Retrieve all metadata rules.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<MetadataRule>|ApiErrorResponse>} A promise resolving to an array of MetadataRule objects.
   */
  retrieveMetadataRules = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/metadatarules';
    return await this.retrieveMany(url, MetadataRule, cancelToken);
  };

  /**
   * Update an existing metadata rule.
   *
   * @param {Object} metadataRule Information about the metadata rule.
   * @param {string} metadataRule.GUID - Metadata rule GUID (automatically generated if not provided).
   * @param {string} metadataRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} metadataRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} metadataRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} metadataRule.Name - Name of the rule (default is null).
   * @param {string} metadataRule.ContentType - Content type (default is "text/plain").
   * @param {string} metadataRule.Prefix - Prefix (default is null).
   * @param {string} metadataRule.Suffix - Suffix (default is null).
   * @param {string} metadataRule.ProcessingEndpoint - Processing endpoint (default is localhost).
   * @param {string} metadataRule.CleanupEndpoint - Cleanup endpoint (default is localhost).
   * @param {string} metadataRule.TypeDetectorEndpoint - Type detector endpoint (default is localhost).
   * @param {string} metadataRule.SemanticCellEndpoint - Semantic cell endpoint (default is localhost).
   * @param {number} metadataRule.MaxChunkContentLength - Maximum chunk content length (default is 512).
   * @param {number} metadataRule.ShiftSize - Shift size (default is 512).
   * @param {string} metadataRule.UdrEndpoint - UDR endpoint (default is localhost).
   * @param {string} metadataRule.DataCatalogType - Data catalog type (default is DataCatalogTypeEnum.Lexi).
   * @param {string} metadataRule.DataCatalogEndpoint - Data catalog endpoint (default is localhost).
   * @param {string} metadataRule.DataCatalogCollection - Data catalog collection identifier (default is null).
   * @param {string} metadataRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {number} metadataRule.TopTerms - Number of top terms to request (default is 25).
   * @param {boolean} metadataRule.CaseInsensitive - Enable case insensitive processing (default is true).
   * @param {boolean} metadataRule.IncludeFlattened - Enable inclusion of flattened representation (default is true).
   * @param {string} metadataRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {number} metadataRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} metadataRule.RetentionMinutes - Minutes to retain generated document (default is null).
   * @param {Date} metadataRule.CreatedUtc - Creation timestamp (default is current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<MetadataRule|null|ApiErrorResponse>} A promise resolving to the updated MetadataRule object or null.
   * @throws {Error} If the rule is null.
   */
  updateMetadataRule = async (metadataRule, cancelToken) => {
    if (!metadataRule) {
      GenExceptionHandlersInstance.ArgumentNullException('rule');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/metadatarules/' + metadataRule.GUID;
    return await this.update(url, metadataRule, MetadataRule, cancelToken);
  };

  /**
   * Delete a metadata rule by its GUID.
   *
   * @param {string} guid - The GUID of the metadata rule to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
   * @throws {Error} If the guid is null or empty.
   */
  deleteMetadataRule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/metadatarules/' + guid;
    return await this.delete(url, MetadataRule, cancelToken);
  };

  /**
   * Enumerate Metadata Rules.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Trigger|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateMetadataRules = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/metadatarules/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  // region Embeddings-Rules

  /**
   * Create a new embeddings rule.
   *
   * @param {Object} embeddingsRule Information about the embeddings rule.
   * @param {string} embeddingsRule.GUID - Embeddings rule GUID (automatically generated if not provided).
   * @param {string} embeddingsRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} embeddingsRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} embeddingsRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} embeddingsRule.Name - Name of the rule (default is null).
   * @param {string} embeddingsRule.ContentType - Content type (default is "text/plain").
   * @param {string} embeddingsRule.Prefix - Prefix (default is null).
   * @param {string} embeddingsRule.Suffix - Suffix (default is null).
   * @param {string} embeddingsRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {string} embeddingsRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {string} embeddingsRule.VectorRepositoryGUID - Vector repository GUID (default is null).
   * @param {string} embeddingsRule.DataFlowEndpoint - Data flow endpoint (default is localhost).
   * @param {string} embeddingsRule.EmbeddingsGenerator - Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy).
   * @param {string} embeddingsRule.GeneratorUrl - Embeddings generator URL (default is localhost).
   * @param {string} embeddingsRule.GeneratorApiKey - Embeddings provider API key (default is null).
   * @param {number} embeddingsRule.BatchSize - Maximum number of chunks to process per request (default is 16).
   * @param {number} embeddingsRule.MaxGeneratorTasks - Maximum number of parallel embeddings generation tasks (default is 16).
   * @param {number} embeddingsRule.MaxRetries - Maximum number of retries per task (default is 3).
   * @param {number} embeddingsRule.MaxFailures - Maximum number of failures before failing the operation (default is 3).
   * @param {string} embeddingsRule.VectorStoreUrl - Vector store URL (default is localhost).
   * @param {number} embeddingsRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} embeddingsRule.RetentionMinutes - Minutes to retain the generated document (default is null).
   * @param {Date} embeddingsRule.CreatedUtc - Creation timestamp (default is current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsRule|null|ApiErrorResponse>} A promise resolving to the created EmbeddingsRule object or null.
   * @throws {Error} If the rule is null.
   */
  createEmbeddingsRule = async (embeddingsRule, cancelToken) => {
    if (!embeddingsRule) {
      GenExceptionHandlersInstance.ArgumentNullException('rule');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/embeddingsrules';
    return await this.create(url, embeddingsRule, EmbeddingsRule, cancelToken);
  };

  /**
   * Check if an embeddings rule exists by its GUID.
   *
   * @param {string} guid - The GUID of the embeddings rule to check.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the embeddings rule exists, otherwise false.
   * @throws {Error} If the guid is null or empty.
   */
  existsEmbeddingsRule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/embeddingsrules/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve an embeddings rule by its GUID.
   *
   * @param {string} guid - The GUID of the embeddings rule to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsRule|null|ApiErrorResponse>} A promise resolving to the EmbeddingsRule object or null.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveEmbeddingsRule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/embeddingsrules/' + guid;
    return await this.retrieve(url, EmbeddingsRule, cancelToken);
  };

  /**
   * Retrieve all embeddings rules.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<EmbeddingsRule>|ApiErrorResponse>} A promise resolving to an array of EmbeddingsRule objects.
   */
  retrieveEmbeddingsRules = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/embeddingsrules';
    return await this.retrieveMany(url, EmbeddingsRule, cancelToken);
  };

  /**
   * Update an existing embeddings rule.
   *
   * @param {Object} embeddingsRule Information about the embeddings rule.
   * @param {string} embeddingsRule.GUID - Embeddings rule GUID (automatically generated if not provided).
   * @param {string} embeddingsRule.TenantGUID - Tenant GUID (default is null).
   * @param {string} embeddingsRule.BucketGUID - Bucket GUID (default is null).
   * @param {string} embeddingsRule.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} embeddingsRule.Name - Name of the rule (default is null).
   * @param {string} embeddingsRule.ContentType - Content type (default is "text/plain").
   * @param {string} embeddingsRule.Prefix - Prefix (default is null).
   * @param {string} embeddingsRule.Suffix - Suffix (default is null).
   * @param {string} embeddingsRule.TargetBucketGUID - Target bucket GUID (default is null).
   * @param {string} embeddingsRule.GraphRepositoryGUID - Graph repository GUID (default is null).
   * @param {string} embeddingsRule.VectorRepositoryGUID - Vector repository GUID (default is null).
   * @param {string} embeddingsRule.DataFlowEndpoint - Data flow endpoint (default is localhost).
   * @param {string} embeddingsRule.EmbeddingsGenerator - Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy).
   * @param {string} embeddingsRule.GeneratorUrl - Embeddings generator URL (default is localhost).
   * @param {string} embeddingsRule.GeneratorApiKey - Embeddings provider API key (default is null).
   * @param {number} embeddingsRule.BatchSize - Maximum number of chunks to process per request (default is 16).
   * @param {number} embeddingsRule.MaxGeneratorTasks - Maximum number of parallel embeddings generation tasks (default is 16).
   * @param {number} embeddingsRule.MaxRetries - Maximum number of retries per task (default is 3).
   * @param {number} embeddingsRule.MaxFailures - Maximum number of failures before failing the operation (default is 3).
   * @param {string} embeddingsRule.VectorStoreUrl - Vector store URL (default is localhost).
   * @param {number} embeddingsRule.MaxContentLength - Maximum content length (default is 16 * 1024 * 1024).
   * @param {number|null} embeddingsRule.RetentionMinutes - Minutes to retain the generated document (default is null).
   * @param {Date} embeddingsRule.CreatedUtc - Creation timestamp (default is current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsRule|null|ApiErrorResponse>} A promise resolving to the updated EmbeddingsRule object or null.
   * @throws {Error} If the rule is null.
   */
  updateEmbeddingsRule = async (embeddingsRule, cancelToken) => {
    if (!embeddingsRule) {
      GenExceptionHandlersInstance.ArgumentNullException('rule');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/embeddingsrules/' + embeddingsRule.GUID;
    return await this.update(url, embeddingsRule, EmbeddingsRule, cancelToken);
  };

  /**
   * Delete an embeddings rule by its GUID.
   *
   * @param {string} guid - The GUID of the embeddings rule to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
   * @throws {Error} If the guid is null or empty.
   */
  deleteEmbeddingsRule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/embeddingsrules/' + guid;
    return await this.delete(url, EmbeddingsRule, cancelToken);
  };

  /**
   * Enumerate Embeddings Rules.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingsResult|null|ApiErrorResponse>} A promise resolving to the created EmbeddingsResult object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateEmbeddingsRules = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/embeddingsrules/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  //region Data-Repositoty

  /**
   * Retrieve a list of data repositories.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<DataRepository>|ApiErrorResponse>} A promise resolving to an array of DataRepository objects.
   */
  retrieveDataRepositories = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories/';
    return await this.retrieveMany(url, DataRepository, cancelToken);
  };

  /**
   * Retrieve a specific data repository by its GUID.
   *
   * @param {string} repositoryGuid - The GUID of the data repository to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise resolving to the DataRepository object or null.
   * @throws {Error} If the repositoryGuid is null or empty.
   */
  retrieveDataRepository = async (repositoryGuid, cancelToken) => {
    if (!repositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('repositoryGuid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories/' + repositoryGuid;
    return await this.retrieve(url, DataRepository, cancelToken);
  };

  /**
   * Create a new data repository.
   *
   * @param {Object} dataRepository Information about the data repository.
   * @param {number} dataRepository.Id - ID (must be greater than 0).
   * @param {string} dataRepository.GUID - Data repository GUID (automatically generated if not provided).
   * @param {string} dataRepository.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} dataRepository.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} dataRepository.Name - Name of the repository (default is "My file repository").
   * @param {string} dataRepository.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {boolean} dataRepository.UseSsl - Boolean flag to enable SSL (default is false).
   * @param {boolean} dataRepository.IncludeSubdirectories - Include subdirectories (default is true).
   * @param {string} dataRepository.DiskDirectory - Disk directory (default is null).
   * @param {string} dataRepository.S3EndpointUrl - S3 endpoint URL (default is null).
   * @param {string} dataRepository.S3BaseUrl - S3 base URL (default is null).
   * @param {string} dataRepository.S3AccessKey - S3 access key (default is null).
   * @param {string} dataRepository.S3SecretKey - S3 secret key (default is null).
   * @param {string} dataRepository.S3BucketName - S3 bucket name (default is null).
   * @param {string} dataRepository.S3Region - S3 region (default is null).
   * @param {string} dataRepository.AzureEndpointUrl - Azure endpoint URL (default is null).
   * @param {string} dataRepository.AzureAccountName - Azure account name (default is null).
   * @param {string} dataRepository.AzureContainerName - Azure container name (default is null).
   * @param {string} dataRepository.AzureAccessKey - Azure access key (default is null).
   * @param {string} dataRepository.CifsHostname - CIFS hostname (default is null).
   * @param {string} dataRepository.CifsUsername - CIFS username (default is null).
   * @param {string} dataRepository.CifsPassword - CIFS password (default is null).
   * @param {string} dataRepository.CifsShareName - CIFS share name (default is null).
   * @param {string} dataRepository.NfsHostname - NFS hostname (default is null).
   * @param {number} dataRepository.NfsUserId - NFS user ID (must be non-negative).
   * @param {number} dataRepository.NfsGroupId - NFS group ID (must be non-negative).
   * @param {string} dataRepository.NfsShareName - NFS share name (default is null).
   * @param {string} dataRepository.NfsVersion - NFS version (default is null).
   * @param {Date} dataRepository.CreatedUtc - Created timestamp (default is current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<DataRepository|null|ApiErrorResponse>} A promise resolving to the created DataRepository object or null.
   * @throws {Error} If the repository is null.
   */
  createDataRepository = async (dataRepository, cancelToken) => {
    if (!dataRepository) {
      GenExceptionHandlersInstance.ArgumentNullException('repository');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories';
    return await this.create(url, dataRepository, DataRepository, cancelToken);
  };

  /**
   * Delete a data repository by its GUID.
   *
   * @param {string} repositoryGuid - The GUID of the data repository to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving to void if the deletion is successful.
   * @throws {Error} If the repositoryGuid is null or empty.
   */
  deleteDataRepository = async (repositoryGuid, cancelToken) => {
    if (!repositoryGuid) {
      GenExceptionHandlersInstance.ArgumentNullException('repositoryGuid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories/' + repositoryGuid;
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Enumerate Data Repositories.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateDataRepositories = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/datarepositories/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  /**
   * Check if a data repository exists by its GUID.
   *
   * @param {string} guid - The GUID of the data repository.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the data repository exists, false otherwise.
   * @throws {Error} If the GUID is null or empty.
   */
  existsDataRepository = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories/' + guid;
    // Use the `exists` method to check for the data repository
    return await this.exists(url, DataRepository, cancelToken);
  };

  /**
   * Write S3 Data Repository.
   * @param {Object} dataRepository Information about the data repository.
   * @param {string} dataRepository.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} dataRepository.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} dataRepository.Name - Name of the repository (default is "My file repository").
   * @param {string} dataRepository.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {string} dataRepository.S3EndpointUrl - S3 endpoint URL (default is null).
   * @param {string} dataRepository.S3BaseUrl - S3 base URL (default is null).
   * @param {string} dataRepository.S3AccessKey - S3 access key (default is null).
   * @param {string} dataRepository.S3SecretKey - S3 secret key (default is null).
   * @param {string} dataRepository.S3BucketName - S3 bucket name (default is null).
   * @param {string} dataRepository.S3Region - S3 region (default is null).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  writeS3DataRepository = async (dataRepository, cancelToken) => {
    if (!dataRepository) {
      GenExceptionHandlersInstance.ArgumentNullException('dataRepository');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories';
    return await this.update(url, dataRepository, DataRepository, cancelToken);
  };

  /**
   * Write Disk Data Repository.
   * @param {Object} dataRepository Information about the data repository.
   * @param {string} dataRepository.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {string} dataRepository.DiskDirectory - Disk directory (default is null).
   * @param {boolean} dataRepository.DiskIncludeSubdirectories - Include subdirectories on disk (default is true).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  writeDiskDataRepository = async (dataRepository, cancelToken) => {
    if (!dataRepository) {
      GenExceptionHandlersInstance.ArgumentNullException('dataRepository');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories';
    return await this.update(url, dataRepository, DataRepository, cancelToken);
  };

  /**
   * Write Azure BLOB Data Repository.
   * @param {Object} dataRepository Information about the data repository.
   * @param {string} dataRepository.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} dataRepository.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} dataRepository.Name - Name of the repository (default is "My file repository).
   * @param {string} dataRepository.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {string} dataRepository.AzureEndpointUrl - Azure endpoint URL (default is null).
   * @param {string} dataRepository.AzureAccountName - Azure account name (default is null).
   * @param {string} dataRepository.AzureContainerName - Azure container name (default is null).
   * @param {string} dataRepository.AzureAccessKey - Azure access key (default is null).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  writeAzureBlobDataRepository = async (dataRepository, cancelToken) => {
    if (!dataRepository) {
      GenExceptionHandlersInstance.ArgumentNullException('dataRepository');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories';
    return await this.update(url, dataRepository, DataRepository, cancelToken);
  };

  /**
   * Write NFS Data Repository.
   * @param {Object} dataRepository Information about the data repository.
   * @param {string} dataRepository.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} dataRepository.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} dataRepository.Name - Name of the repository (default is "My file repository).
   * @param {string} dataRepository.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {string} dataRepository.NfsHostname - NFS hostname (default is null).
   * @param {number} dataRepository.NfsUserId - NFS user ID (must be non-negative).
   * @param {number} dataRepository.NfsGroupId - NFS group ID (must be non-negative).
   * @param {string} dataRepository.NfsShareName - NFS share name (default is null).
   * @param {boolean} dataRepository.NfsIncludeSubdirectories - Include subdirectories on NFS (default is true).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  writeNfsDataRepository = async (dataRepository, cancelToken) => {
    if (!dataRepository) {
      GenExceptionHandlersInstance.ArgumentNullException('dataRepository');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories';
    return await this.update(url, dataRepository, DataRepository, cancelToken);
  };

  /**
   * Write CIFS Data Repository.
   * @param {Object} dataRepository Information about the data repository.
   * @param {string} dataRepository.TenantGUID - Tenant GUID (automatically generated if not provided).
   * @param {string} dataRepository.OwnerGUID - Owner GUID (automatically generated if not provided).
   * @param {string} dataRepository.Name - Name of the repository (default is "My file repository).
   * @param {string} dataRepository.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {string} dataRepository.CifsHostname - CIFS hostname (default is null).
   * @param {string} dataRepository.CifsUsername - CIFS username (default is null).
   * @param {string} dataRepository.CifsPassword - CIFS password (default is null).
   * @param {string} dataRepository.CifsShareName - CIFS share name (default is null).
   * @param {boolean} dataRepository.CifsIncludeSubdirectories - Include subdirectories on CIFS (default is true).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  writeCifsDataRepository = async (dataRepository, cancelToken) => {
    if (!dataRepository) {
      GenExceptionHandlersInstance.ArgumentNullException('dataRepository');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories';
    return await this.update(url, dataRepository, DataRepository, cancelToken);
  };

  /**
   * Update Data Repository.
   * @param {Object} dataRepository Information about the data repository.
   * @param {string} dataRepository.Name - Name of the repository (default is "My file repository).
   * @param {string} dataRepository.RepositoryType - Repository type (default is DataRepositoryTypeEnum.File).
   * @param {boolean} dataRepository.IncludeSubdirectories - Include subdirectories (default is true).
   * @param {string} dataRepository.DiskDirectory - Disk directory (default is null).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  updateDataRepository = async (guid, dataRepository, cancelToken) => {
    if (!dataRepository) {
      GenExceptionHandlersInstance.ArgumentNullException('dataRepository');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/datarepositories/' + guid;
    return await this.update(url, dataRepository, DataRepository, cancelToken);
  };

  // region Webhook-Events
  /**
   * Check if a webhook event exists.
   *
   * @param {string} guid - The GUID of the webhook event.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the webhook event exists.
   * @throws {Error} If the guid is null or empty.
   */
  existsWebhookEvent = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhookevents/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a webhook event by its GUID.
   *
   * @param {string} guid - The GUID of the webhook event to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookEvent|null|ApiErrorResponse>} A promise resolving to the WebhookEvent object or null.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveWebhookEvent = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhookevents/' + guid;
    return await this.retrieve(url, WebhookEvent, cancelToken);
  };

  /**
   * Retrieve a list of webhook events.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<WebhookEvent>|ApiErrorResponse>} A promise resolving to an array of WebhookEvent objects.
   */
  retrieveWebhookEvents = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhookevents';
    return await this.retrieveMany(url, WebhookEvent, cancelToken);
  };

  /**
   * Enumerate Webhook events.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
   * @throws {Error} If the EnumerationResult is null or invalid.
   */
  enumerateWebhookEvents = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/webhookevents/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  //region webhook-Rules

  /**
   * Create a webhook rule.
   *
   * @param {Object} [rule] - Optional parameters.
   * @param {string} [rule.GUID] - GUID (automatically generated if not provided).
   * @param {string} [rule.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [rule.TargetGUID] - Target GUID (automatically generated if not provided).
   * @param {string} [rule.Name] - Name of the webhook rule.
   * @param {WebhookEventTypeEnum} [rule.EventType] - Event type (defaults to WebhookEventTypeEnum.Unknown).
   * @param {number} [rule.MaxAttempts] - Maximum number of attempts (defaults to 10).
   * @param {number} [rule.RetryIntervalMs] - Retry interval in milliseconds (defaults to 30 seconds).
   * @param {number} [rule.TimeoutMs] - Timeout in milliseconds (defaults to 1 minute).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookRule|ApiErrorResponse>} A promise resolving to the created WebhookRule.
   * @throws {Error} If the rule is null.
   */
  createWebhookRule = async (rule, cancelToken) => {
    if (!rule) {
      GenExceptionHandlersInstance.ArgumentNullException('rule');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhookrules';
    return await this.create(url, rule, WebhookRule, cancelToken);
  };

  /**
   * Check if a webhook rule exists.
   *
   * @param {string} guid - The GUID of the webhook rule.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean|ApiErrorResponse>} A promise resolving to true if the webhook rule exists.
   * @throws {Error} If the guid is null or empty.
   */
  existsWebhookRule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhookrules/' + guid;
    return await this.exists(url, cancelToken);
  };

  /**
   * Retrieve a webhook rule by its GUID.
   *
   * @param {string} guid - The GUID of the webhook rule to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookRule|null|ApiErrorResponse>} A promise resolving to the WebhookRule object or null.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveWebhookRule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhookrules/' + guid;
    return await this.retrieve(url, WebhookRule, cancelToken);
  };

  /**
   * Retrieve a list of webhook rules.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<WebhookRule>|ApiErrorResponse>} A promise resolving to an array of WebhookRule objects.
   */
  retrieveWebhookRules = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhookrules';
    return await this.retrieveMany(url, WebhookRule, cancelToken);
  };

  /**
   * Update a webhook rule.
   *
   * @param {Object} [rule] - Optional parameters.
   * @param {string} [rule.GUID] - GUID (automatically generated if not provided).
   * @param {string} [rule.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [rule.TargetGUID] - Target GUID (automatically generated if not provided).
   * @param {string} [rule.Name] - Name of the webhook rule.
   * @param {WebhookEventTypeEnum} [rule.EventType] - Event type (defaults to WebhookEventTypeEnum.Unknown).
   * @param {number} [rule.MaxAttempts] - Maximum number of attempts (defaults to 10).
   * @param {number} [rule.RetryIntervalMs] - Retry interval in milliseconds (defaults to 30 seconds).
   * @param {number} [rule.TimeoutMs] - Timeout in milliseconds (defaults to 1 minute).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookRule|ApiErrorResponse>} A promise resolving to the updated WebhookRule.
   * @throws {Error} If the rule is null.
   */
  updateWebhookRule = async (rule, cancelToken) => {
    if (!rule) {
      GenExceptionHandlersInstance.ArgumentNullException('rule');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhookrules/' + rule.GUID;
    return await this.update(url, rule, WebhookRule, cancelToken);
  };

  /**
   * Delete a webhook rule.
   *
   * @param {string} guid - The GUID of the webhook rule to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void|ApiErrorResponse>} A promise resolving when the delete operation is complete.
   * @throws {Error} If the guid is null or empty.
   */
  deleteWebhookRule = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhookrules/' + guid;
    return await this.delete(url, WebhookRule, cancelToken);
  };

  /**
   * Enumerate Webhook rules.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
   * @throws {Error} If the EnumerationResult is null or invalid.
   */
  enumerateWebhookRules = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/webhookrules`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  // region webhook-Targets

  /**
   * Create a webhook target.
   * @param {Object} [target] - Optional parameters.
   * @param {string} [target.GUID] - GUID (automatically generated if not provided).
   * @param {string} [target.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [target.Name] - Name of the webhook target (defaults to "My webhook target").
   * @param {string} [target.Url] - URL of the webhook target.
   * @param {string} [target.ContentType] - Content type (defaults to "application/json").
   * @param {number} [target.ExpectStatus] - Expected HTTP status (defaults to 200).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget>} - Webhook target.
   */
  async createWebhookTarget(target, cancelToken) {
    if (!target) {
      GenExceptionHandlersInstance.ArgumentNullException('target');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhooktargets';
    return await this.create(url, target, WebhookTarget, cancelToken);
  }

  /**
   * Check if a webhook target exists.
   * @param {string} guid - GUID.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} - True if exists.
   */
  async existsWebhookTarget(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhooktargets/' + guid;
    return await this.exists(url, cancelToken);
  }

  /**
   * Read a webhook target.
   * @param {string} guid - GUID.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget>} - Webhook target.
   */
  async retrieveWebhookTarget(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhooktargets/' + guid;
    return await this.retrieve(url, WebhookTarget, cancelToken);
  }

  /**
   * Read webhook targets.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget[]>} - Webhook targets.
   */
  async retrieveWebhookTargets(cancelToken) {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhooktargets';
    return await this.retrieveMany(url, WebhookTarget, cancelToken);
  }

  /**
   * Update a webhook target.
   * @param {Object} [target] - Optional parameters.
   * @param {string} [target.GUID] - GUID (automatically generated if not provided).
   * @param {string} [target.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [target.Name] - Name of the webhook target (defaults to "My webhook target").
   * @param {string} [target.Url] - URL of the webhook target.
   * @param {string} [target.ContentType] - Content type (defaults to "application/json").
   * @param {number} [target.ExpectStatus] - Expected HTTP status (defaults to 200).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<WebhookTarget>} - Webhook target.
   */
  async updateWebhookTarget(target, cancelToken) {
    if (!target) {
      GenExceptionHandlersInstance.ArgumentNullException('target');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhooktargets/' + target.GUID;
    return await this.update(url, target, WebhookTarget, cancelToken);
  }

  /**
   * Delete a webhook target.
   * @param {string} guid - GUID.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>}
   */
  async deleteWebhookTarget(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/webhooktargets/' + guid;
    return await this.delete(url, WebhookTarget, cancelToken);
  }

  /**
   * Enumerate Webhook target.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created EnumerationResult object or null if creation fails.
   * @throws {Error} If the EnumerationResult is null or invalid.
   */
  enumerateWebhookTargets = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/webhooktargets/`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  //region View-Endpoints

  /**
   * Create a View endpoint.
   * @param {Object} [endpoint] - Optional parameters.
   * @param {string} [endpoint.GUID] - GUID (automatically generated if not provided).
   * @param {string} [endpoint.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [endpoint.OwnerGUID] - Owner GUID (automatically generated if not provided).
   * @param {string} [endpoint.Name] - Name of the view endpoint (defaults to "My View endpoint").
   * @param {boolean} [endpoint.UseSsl] - Boolean flag to enable or disable SSL (defaults to false).
   * @param {string} [endpoint.S3Url] - S3 URL (defaults to "http://localhost:8002/").
   * @param {string} [endpoint.S3BaseUrl] - S3 base URL (defaults to "http://localhost:8002/{bucket}/{key}").
   * @param {string} [endpoint.RestUrl] - REST URL (defaults to "http://localhost:8001/").
   * @param {string} [endpoint.BucketName] - Bucket name (defaults to "data").
   * @param {string} [endpoint.Region] - Region (defaults to "us-west-1").
   * @param {string} [endpoint.AccessKey] - Access key.
   * @param {string} [endpoint.SecretKey] - Secret key.
   * @param {string} [endpoint.ApiKey] - API key.
   * @param {Date} [endpoint.CreatedUtc] - Created date (defaults to current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint>} - View endpoint.
   */
  async createViewEndpoint(endpoint, cancelToken) {
    if (!endpoint) {
      GenExceptionHandlersInstance.ArgumentNullException('endpoint');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/viewendpoints';
    return await this.create(url, endpoint, ViewEndpoint, cancelToken);
  }

  /**
   * Check if a View endpoint exists.
   * @param {string} guid - GUID.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} - True if exists.
   */
  async existsViewEndpoint(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/viewendpoints/' + guid;
    return await this.exists(url, cancelToken);
  }

  /**
   * Read a View endpoint.
   * @param {string} guid - GUID.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint>} - View endpoint.
   */
  async retrieveViewEndpoint(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/viewendpoints/' + guid;
    return await this.retrieve(url, ViewEndpoint, cancelToken);
  }

  /**
   * Read View endpoints.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint[]>} - View endpoints.
   */
  async retrieveViewEndpoints(cancelToken) {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/viewendpoints';
    return await this.retrieveMany(url, ViewEndpoint, cancelToken);
  }

  /**
   * Update a View endpoint.
   * @param {Object} [endpoint] - Optional parameters.
   * @param {string} [endpoint.GUID] - GUID (automatically generated if not provided).
   * @param {string} [endpoint.TenantGUID] - Tenant GUID (automatically generated if not provided).
   * @param {string} [endpoint.OwnerGUID] - Owner GUID (automatically generated if not provided).
   * @param {string} [endpoint.Name] - Name of the view endpoint (defaults to "My View endpoint").
   * @param {boolean} [endpoint.UseSsl] - Boolean flag to enable or disable SSL (defaults to false).
   * @param {string} [endpoint.S3Url] - S3 URL (defaults to "http://localhost:8002/").
   * @param {string} [endpoint.S3BaseUrl] - S3 base URL (defaults to "http://localhost:8002/{bucket}/{key}").
   * @param {string} [endpoint.RestUrl] - REST URL (defaults to "http://localhost:8001/").
   * @param {string} [endpoint.BucketName] - Bucket name (defaults to "data").
   * @param {string} [endpoint.Region] - Region (defaults to "us-west-1").
   * @param {string} [endpoint.AccessKey] - Access key.
   * @param {string} [endpoint.SecretKey] - Secret key.
   * @param {string} [endpoint.ApiKey] - API key.
   * @param {Date} [endpoint.CreatedUtc] - Created date (defaults to current UTC time).
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<ViewEndpoint>} - View endpoint.
   */
  async updateViewEndpoint(endpoint, cancelToken) {
    if (!endpoint) {
      GenExceptionHandlersInstance.ArgumentNullException('endpoint');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/viewendpoints/' + endpoint.GUID;
    return await this.update(url, endpoint, ViewEndpoint, cancelToken);
  }

  /**
   * Delete a View endpoint.
   * @param {string} guid - GUID.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>}
   */
  async deleteViewEndpoint(guid, cancelToken) {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/viewendpoints/' + guid;
    return await this.delete(url, ViewEndpoint, cancelToken);
  }

  //region BLOBs

  /**
   * Enumerate BLOBs.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {Error} If the trigger is null or invalid.
   */
  enumerateBlobs = async (cancelToken) => {
    const url = `${this.endpoint}/v2.0/tenants/${this.tenantGuid}/blobs`;
    return await this.retrieve(url, EnumerationResult, cancelToken);
  };

  /**
   * Retrieve a list of blobs.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Blob>|ApiErrorResponse>} A promise resolving to an array of Blob objects.
   */
  retrieveBlobs = async (cancelToken) => {
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/blobs';
    return await this.retrieveMany(url, Blob, cancelToken);
  };

  /**
   * Retrieve a blob by its GUID.
   *
   * @param {string} guid - The GUID of the blob to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Blob|null|ApiErrorResponse>} A promise resolving to the Blob object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveBlob = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/blobs/' + guid;
    return await this.retrieve(url, Blob, cancelToken);
  };

  /**
   * Retrieve a blob with data by its GUID.
   *
   * @param {string} guid - The GUID of the blob to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Blob|null|ApiErrorResponse>} A promise resolving to the Blob object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  retrieveBlobIncludeData = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/blobs/' + guid + '?incldata';
    return await this.retrieve(url, Blob, cancelToken);
  };

  /**
   * Write BLOB data.
   * @param {Object} blob Information about the blob.
   * @param {string} blob.ContentType - Content type of the BLOB.
   * @param {string} blob.Name - Name of the BLOB.
   * @param {string} blob.Description - Description of the BLOB.
   * @param {string} blob.RefObjType - Object type to which this BLOB refers.
   * @param {string} blob.RefObjGUID - Globally-unique identifier of the object to which this BLOB refers.
   * @param {Uint8Array} blob.Data - BLOB data.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node|null|ApiErrorResponse>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {Error} If the node is null or empty.
   */
  writeBlob = async (blob, cancelToken) => {
    if (!blob) {
      GenExceptionHandlersInstance.ArgumentNullException('blob');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/blobs';
    return await this.update(url, blob, Blob, cancelToken);
  };

  /**
   * Delete a BLOB.
   *
   * @param {string} guid - The GUID of the BLOB to delete.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Blob|null|ApiErrorResponse>} A promise resolving to the Blob object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  deleteBlob = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/blobs/' + guid;
    return await this.deleteRaw(url, cancelToken);
  };

  /**
   * Check if a BLOB exists by its GUID.
   *
   * @param {string} guid - The GUID of the BLOB to retrieve.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Blob|null|ApiErrorResponse>} A promise resolving to the Blob object or null if not found.
   * @throws {Error} If the guid is null or empty.
   */
  existsBlob = async (guid, cancelToken) => {
    if (!guid) {
      GenExceptionHandlersInstance.ArgumentNullException('guid');
    }
    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/blobs/' + guid;
    return await this.exists(url, cancelToken);
  };

  //region Authentication
  /**
   * Retrieve tenants for email.
   *
   * @param {object} hedars - Headers for custom authentication.
   * @param {object} hedars.email - email to get tenants
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<TenantMetadata[]|ApiErrorResponse>} A promise resolving to an array of TenantMetadata objects or an error response if not found.
   * @throws {Error} If the email is null or empty.
   */
  retrieveTenantsForEmail = async (email, cancelToken) => {
    if (!email) {
      GenExceptionHandlersInstance.ArgumentNullException('email');
    }
    const url = this.endpoint + '/v1.0/token/tenants';
    return await this.retrieve(url, TenantMetadata, cancelToken, { 'x-email': email });
  };
  /**
   * Generate authentication token (using password)
   *
   * @param {Object} headers - Headers for custom authentication.
   * @param {string} headers.email - The email address used to authenticate the tenant.
   * @param {string} headers.password - The password for the tenant's account.
   * @param {string} headers.tenantGUID - The GUID of the tenant for which the token is being generated.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {Error} If the email is null or empty or if the password is null or empty or if the tenantGUID is null or empty.
   */
  generateAuthenticationTokenByPassword = async ({ email, password, tenantGUID }, cancelToken) => {
    if (!email) {
      GenExceptionHandlersInstance.ArgumentNullException('email');
    }
    if (!password) {
      GenExceptionHandlersInstance.ArgumentNullException('password');
    }
    if (!tenantGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('tenantGUID');
    }
    const url = this.endpoint + '/v1.0/token';
    return await this.retrieve(url, null, cancelToken, {
      'x-email': email,
      'x-password': password,
      'x-tenant-guid': tenantGUID,
    });
  };
  /**
   * Generate authentication token (using password SHA-256)
   *
   * @param {Object} headers - Headers for custom authentication.
   * @param {string} headers.email - The email address used to authenticate the tenant.
   * @param {string} headers.passwordSHA256 - The passwordSHA256 for the tenant's account.
   * @param {string} headers.tenantGUID - The GUID of the tenant for which the token is being generated.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {Error} If the email is null or empty.
   */
  generateAuthenticationTokenBySHA256 = async ({ email, passwordSHA256, tenantGUID }, cancelToken) => {
    if (!email) {
      GenExceptionHandlersInstance.ArgumentNullException('email');
    }
    if (!passwordSHA256) {
      GenExceptionHandlersInstance.ArgumentNullException('passwordSHA256');
    }
    if (!tenantGUID) {
      GenExceptionHandlersInstance.ArgumentNullException('tenantGUID');
    }
    const url = this.endpoint + '/v1.0/token';
    return await this.retrieve(url, null, cancelToken, {
      'x-email': email,
      'x-password-sha256': passwordSHA256,
      'x-tenant-guid': tenantGUID,
    });
  };
  /**
   * Generate administrator token (using password)
   *
   * @param {Object} headers - Headers for custom authentication.
   * @param {string} headers.email - The email address used to authenticate the administrator.
   * @param {string} headers.password - The password for the administrator account.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
    @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {Error} If the email is null or empty or if the password is null or empty.
   */
  generateAdministratorToken = async ({ email, password }, cancelToken) => {
    if (!email) {
      GenExceptionHandlersInstance.ArgumentNullException('email');
    }
    if (!password) {
      GenExceptionHandlersInstance.ArgumentNullException('password');
    }
    const url = this.endpoint + '/v1.0/token';
    return await this.retrieve(url, null, cancelToken, { 'x-email': email, 'x-password': password });
  };
  /**
   * Generate administrator token (using password SHA-256)
   *
   * @param {Object} headers - Headers for custom authentication.
   * @param {string} headers.email - The admin email address used to authenticate the administrator.
   * @param {string} headers.passwordSHA256 - The admin passwordSHA256 for the administrator account.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {Error} If the email is null or empty or if the passwordSHA256 is null or empty.
   */
  generateAdministratorTokenBySHA256 = async ({ email, passwordSHA256 }, cancelToken) => {
    if (!email) {
      GenExceptionHandlersInstance.ArgumentNullException('email');
    }
    if (!passwordSHA256) {
      GenExceptionHandlersInstance.ArgumentNullException('passwordSHA256');
    }
    const url = this.endpoint + '/v1.0/token';
    return await this.retrieve(url, null, cancelToken, { 'x-email': email, 'x-password-sha256': passwordSHA256 });
  };
  /**
   * Validate authentication token
   *
   * @param {Object} headers - Headers for custom authentication.
   * @param {string} headers.token - The token to get validate the token.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {Error} If the token is null or empty.
   */
  validateAuthenticationToken = async ({ token }, cancelToken) => {
    if (!token) {
      GenExceptionHandlersInstance.ArgumentNullException('token');
    }
    const url = this.endpoint + '/v1.0/token/validate';
    return await this.retrieve(url, null, cancelToken, { 'x-token': token });
  };
  /**
   * Retrieve token details
   *
   * @param {Object} headers - Headers for custom authentication.
   * @param {string} headers.token - The token to get validate the token.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<{ TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean }|ApiErrorResponse>} A promise resolving to an object containing token details or an error response if not found.
   * @throws {Error} If the token is null or empty.
   */
  retrieveTokenDetails = async ({ token }, cancelToken) => {
    if (!token) {
      GenExceptionHandlersInstance.ArgumentNullException('token');
    }
    const url = this.endpoint + '/v1.0/token/details';
    return await this.retrieve(url, null, cancelToken, { 'x-token': token });
  };
}
