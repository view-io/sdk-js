import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { AppendChatThreadRequest, ChatThread, ChatThreadList, CreateChatThreadRequest, MethodError } from '../../types';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';

export class ChatThreadSdk extends ViewSdkBase {
  /**
   * Constructs a new ChatThreadSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  //region Chat Thread

  /**
   * Create a new chat thread.
   *
   * @param {CreateChatThreadRequest} config - The chat thread configuration
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<ChatThread>} A promise resolving to the created ChatThread object, or an error response
   * @throws {MethodError}
   */
  create = async (config: CreateChatThreadRequest, cancelToken?: AbortController): Promise<ChatThread> => {
    if (!config) {
      GenericExceptionHandlers.ArgumentNullException('config');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads`;
    return await this.postCreateResource(url, config, cancelToken);
  };

  /**
   * Retrieve a chat thread by GUID.
   *
   * @param {string} guid - The GUID of the chat thread to retrieve
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<ChatThread>} A promise resolving to the retrieved ChatThread object, or an error response
   * @throws {MethodError}
   */
  read = async (guid: string, cancelToken?: AbortController): Promise<ChatThread> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads/${guid}`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Update a chat thread.
   *
   * @param {string} guid - The GUID of the chat thread to update
   * @param {AppendChatThreadRequest} response - The assistant's response with metadata.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<ChatThread>} A promise resolving to the updated ChatThread object, or an error response
   * @throws {MethodError}
   */
  append = async (
    guid: string,
    config: AppendChatThreadRequest,
    cancelToken?: AbortController
  ): Promise<ChatThread> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!config) {
      GenericExceptionHandlers.ArgumentNullException('config');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads/${guid}/messages`;
    return await this.postCreateResource(url, config, cancelToken);
  };

  /**
   * Delete a chat thread.
   *
   * @param {string} guid - The GUID of the chat thread to delete
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} A promise resolving to an error response
   * @throws {MethodError}
   */
  delete = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads/${guid}`;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Retrieve all chat threads.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<Array<ChatThreadList>>} A promise resolving to an array of ChatThread objects
   * @throws {MethodError}
   */
  readAll = async (cancelToken?: AbortController): Promise<ChatThreadList> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads`;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Check if a chat thread exists.
   *
   * @param {string} guid - The GUID of the chat thread to check
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} A promise resolving to `true` if the chat thread exists, otherwise `false`
   * @throws {MethodError}
   */
  exists = async (guid: string, cancelToken?: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads/${guid}`;
    return await this.existsResource(url, cancelToken);
  };
}
