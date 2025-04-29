/**
 * Represents a chat thread linked to an assistant configuration.
 */
export default class ChatThread {
    /**
     * @param {Object} data
     * @param {string} data.GUID
     * @param {string} data.Title
     * @param {string} data.Description
     * @param {number} data.MessageCount
     * @param {string} data.CreatedUTC
     * @param {string} data.LastModifiedUTC
     * @param {string} data.AssistantConfigGUID
     */
    constructor({ GUID, Title, Description, MessageCount, CreatedUTC, LastModifiedUTC, AssistantConfigGUID }: {
        GUID: string;
        Title: string;
        Description: string;
        MessageCount: number;
        CreatedUTC: string;
        LastModifiedUTC: string;
        AssistantConfigGUID: string;
    });
    GUID: string;
    Title: string;
    Description: string;
    MessageCount: number;
    CreatedUTC: string;
    LastModifiedUTC: string;
    AssistantConfigGUID: string;
}
