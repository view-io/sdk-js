import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { ApiErrorResponse, Blob, EnumerationResult } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export default class BlobsSdk extends ViewSdkBase {
  /**
   * Constructs a new BlobsSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region BLOBs

  /**
   * Enumerate BLOBs.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EnumerationResult>} A promise resolving to the created Trigger object or null if creation fails.
   * @throws {MethodError} If the trigger is null or invalid.
   */
  enumerate = async (cancelToken: AbortController) => {
    const url = `${this.config.endpoint}/v2.0/tenants/${this.config.tenantGuid}/blobs`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve a list of blobs.
   *
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Array<Blob>>} A promise resolving to an array of Blob objects.
   */
  readAll = async (cancelToken: AbortController): Promise<Array<Blob>> => {
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/blobs';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve a blob by its GUID.
   *
   * @param {string} guid - The GUID of the blob to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Blob>} A promise resolving to the Blob object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  read = async (guid: string, cancelToken: AbortController): Promise<Blob> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/blobs/' + guid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieve a blob with data by its GUID.
   *
   * @param {string} guid - The GUID of the blob to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Blob>} A promise resolving to the Blob object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  readIncludeData = async (guid: string, cancelToken: AbortController): Promise<Blob> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/blobs/' + guid + '?incldata';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Write BLOB data.
   * @param {Blob} blob Information about the blob.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Node>} A promise resolving to the created Node object or null if the creation fails.
   * @throws {MethodError} If the node is null or empty.
   */
  create = async (blob: Blob, cancelToken: AbortController): Promise<Node> => {
    if (!blob) {
      GenericExceptionHandlers.ArgumentNullException('blob');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/blobs';
    return await this.updateResource(url, blob, cancelToken);
  };

  /**
   * Update a BLOB.
   *
   * @param {Blob} blob - Information about the blob to update.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Blob>} A promise resolving to the updated Blob object or null if update fails.
   * @throws {MethodError} If the blob is null or empty.
   */
  update = async (blob: Blob, cancelToken: AbortController): Promise<Blob> => {
    if (!blob) {
      GenericExceptionHandlers.ArgumentNullException('blob');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/blobs/' + blob.GUID;
    return await this.updateResource(url, blob, cancelToken);
  };

  /**
   * Delete a BLOB.
   *
   * @param {string} guid - The GUID of the BLOB to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Blob>} A promise resolving to the Blob object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  delete = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/blobs/' + guid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Check if a BLOB exists by its GUID.
   *
   * @param {string} guid - The GUID of the BLOB to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Blob>} A promise resolving to the Blob object or null if not found.
   * @throws {MethodError} If the guid is null or empty.
   */
  exists = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = this.config.endpoint + '/v1.0/tenants/' + this.config.tenantGuid + '/blobs/' + guid;
    return await this.existsResource(url, cancelToken);
  };
}
