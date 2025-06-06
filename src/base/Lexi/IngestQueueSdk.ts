import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { IngestQueue } from '../../types';
export class IngestQueueSdk extends ViewSdkBase {
  /**
   * Constructs a new IngestQueueSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // region Ingest Queue

  /**
   * Retrieves all ingest queue.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<IngestQueue[]>} A promise that resolves to an array of items in the ingest queue or an error response if the retrieval fails.
   * @throws {MethodError} If the retrieval fails.
   */
  readAll = async (cancelToken: AbortController): Promise<IngestQueue[]> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/ingestqueue`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Retrieves a specific item from the ingest queue.
   * @param {string} ingestQueueGuid - The GUID of the item to retrieve.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<IngestQueue>} A promise that resolves to the requested item or an error response if the retrieval fails.
   * @throws {MethodError} If the retrieval fails.
   */
  read = async (ingestQueueGuid: string, cancelToken: AbortController): Promise<IngestQueue> => {
    if (!ingestQueueGuid) {
      throw new Error('Item GUID cannot be null or undefined.');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/ingestQueue/${ingestQueueGuid}`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Checks if a specific item exists in the ingest queue.
   * @param {string} ingestQueueGuid - The GUID of the item to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the item exists, `false` if it does not, or an error response if the check fails.
   * @throws {MethodError} If the ingestQueueGuid argument is null or undefined.
   */
  exists = async (ingestQueueGuid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!ingestQueueGuid) {
      GenericExceptionHandlers.ArgumentNullException('ingestQueueGuid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/ingestQueue/${ingestQueueGuid}`;
    return await this.existsResource(url, cancelToken);
  };

  /**
   * Retrieves statistics for the ingest queue.
   * @param {string} ingestQueueGuid - The GUID of the item to check.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<IngestQueue>} A promise that resolves to the statistics of the ingest queue or an error response if the retrieval fails.
   * @throws {MethodError} If the ingestQueueGuid argument is null or undefined.
   */
  readStatistics = async (ingestQueueGuid: string, cancelToken: AbortController): Promise<IngestQueue> => {
    if (!ingestQueueGuid) {
      GenericExceptionHandlers.ArgumentNullException('ingestQueueGuid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/ingestQueue/${ingestQueueGuid}?stats`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Deletes a specific item from the ingest queue.
   * @param {string} ingestQueueGuid - The GUID of the item to delete.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the deletion was successful, or an error response if it failed.
   * @throws {MethodError} If the ingestQueueGuid argument is null or undefined.
   */
  delete = async (ingestQueueGuid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!ingestQueueGuid) {
      GenericExceptionHandlers.ArgumentNullException('ingestQueueGuid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/ingestQueue/${ingestQueueGuid}`;
    return await this.deleteResource(url, cancelToken);
  };

  // endregion
}
