import ChatThread from './ChatThread';

/**
 * Represents a list of chat threads tied to assistant configurations.
 */
export default class ChatThreadList {
  /**
   * Creates a new instance of ChatThreadList.
   *
   * @param {Object} data - The raw input data.
   * @param {Array<Object>} data.ChatThreads - An array of chat thread objects.
   *
   * Each object should have the following structure:
   * @param {string} data.ChatThreads[].GUID - Unique identifier for the chat thread.
   * @param {string} data.ChatThreads[].Title - Title of the chat thread.
   * @param {string} data.ChatThreads[].Description - Description of the chat thread.
   * @param {number} data.ChatThreads[].MessageCount - Number of messages in the thread.
   * @param {string} data.ChatThreads[].CreatedUTC - ISO string representing when the thread was created.
   * @param {string} data.ChatThreads[].LastModifiedUTC - ISO string representing when the thread was last modified.
   * @param {string} data.ChatThreads[].AssistantConfigGUID - Identifier of the linked assistant config.
   */
  constructor({ ChatThreads }) {
    /**
     * @type {Array<ChatThread>}
     */
    this.ChatThreads = ChatThreads.map(
      ({ GUID, Title, Description, MessageCount, CreatedUTC, LastModifiedUTC, AssistantConfigGUID }) =>
        new ChatThread({
          GUID,
          Title,
          Description,
          MessageCount,
          CreatedUTC,
          LastModifiedUTC,
          AssistantConfigGUID,
        })
    );
  }
}
