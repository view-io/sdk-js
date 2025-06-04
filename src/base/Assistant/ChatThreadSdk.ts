import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { AppendChatThreadRequest, ChatThread, ChatThreadList, CreateChatThreadRequest } from '../../types';
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
   * @throws {ApiErrorResponse}
   */
  createChatThread = async (config: CreateChatThreadRequest, cancelToken: AbortController) => {
    if (!config) {
      GenericExceptionHandlers.ArgumentNullException('config');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads`;
    return await this.postCreate(url, config, cancelToken);
  };

  /**
   * Retrieve a chat thread by GUID.
   *
   * @param {string} guid - The GUID of the chat thread to retrieve
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<ChatThread>} A promise resolving to the retrieved ChatThread object, or an error response
   * @throws {ApiErrorResponse}
   */
  retrieveChatThread = async (guid: string, cancelToken: AbortController): Promise<ChatThread> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads/${guid}`;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Update a chat thread.
   *
   * @param {string} guid - The GUID of the chat thread to update
   * @param {AppendChatThreadRequest} response - The assistant's response with metadata.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<ChatThread>} A promise resolving to the updated ChatThread object, or an error response
   * @throws {ApiErrorResponse}
   */
  appendChatThread = async (guid: string, config: AppendChatThreadRequest, cancelToken: AbortController) => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!config) {
      GenericExceptionHandlers.ArgumentNullException('config');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads/${guid}/messages`;
    return await this.postCreate(url, config, cancelToken);
  };

  /**
   * Delete a chat thread.
   *
   * @param {string} guid - The GUID of the chat thread to delete
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} A promise resolving to an error response
   * @throws {ApiErrorResponse}
   */
  deleteChatThread = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads/${guid}`;
    return await this.delete(url, cancelToken);
  };

  /**
   * Retrieve all chat threads.
   *
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<Array<ChatThreadList>>} A promise resolving to an array of ChatThread objects
   */
  retrieveAllChatThreads = async (cancelToken: AbortController): Promise<ChatThreadList> => {
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads`;
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Check if a chat thread exists.
   *
   * @param {string} guid - The GUID of the chat thread to check
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request
   * @returns {Promise<boolean>} A promise resolving to `true` if the chat thread exists, otherwise `false`
   */
  existsChatThread = async (guid: string, cancelToken: AbortController): Promise<boolean> => {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/threads/${guid}`;
    return await this.exists(url, cancelToken);
  };
}
