/**
 * Represents the configuration settings for an assistant.
 */
export default class AssistantConfig {
    /**
     * @param {Object} config - Assistant configuration data.
     * @param {string} config.GUID
     * @param {string} config.Name
     * @param {string|null} config.Description
     * @param {string} config.SystemPrompt
     * @param {string} config.EmbeddingModel
     * @param {number} config.MaxResults
     * @param {string} config.VectorDatabaseName
     * @param {string} config.VectorDatabaseTable
     * @param {string} config.VectorDatabaseHostname
     * @param {number} config.VectorDatabasePort
     * @param {string} config.VectorDatabaseUser
     * @param {string} config.VectorDatabasePassword
     * @param {string} config.GenerationProvider
     * @param {string} config.GenerationModel
     * @param {string} config.GenerationApiKey
     * @param {number} config.Temperature
     * @param {number} config.TopP
     * @param {number} config.MaxTokens
     * @param {string} config.OllamaHostname
     * @param {number} config.OllamaPort
     * @param {number|null} config.OllamaContextLength
     * @param {boolean} config.ContextSort
     * @param {boolean} config.SortBySimilarity
     * @param {number} config.ContextScope
     * @param {boolean} config.Rerank
     * @param {string} config.RerankModel
     * @param {number} config.RerankTopK
     * @param {string} config.RerankLevel
     * @param {boolean} config.TimestampEnabled
     * @param {string} config.TimestampFormat
     * @param {string} config.TimestampTimezone
     * @param {boolean} config.UseCitations
     * @param {string} config.CreatedUTC
     * @param {string} config.LastModifiedUTC
     * @param {boolean} config.ChatOnly
     */
    constructor({ GUID, Name, Description, SystemPrompt, EmbeddingModel, MaxResults, VectorDatabaseName, VectorDatabaseTable, VectorDatabaseHostname, VectorDatabasePort, VectorDatabaseUser, VectorDatabasePassword, GenerationProvider, GenerationModel, GenerationApiKey, Temperature, TopP, MaxTokens, OllamaHostname, OllamaPort, OllamaContextLength, ContextSort, SortBySimilarity, ContextScope, Rerank, RerankModel, RerankTopK, RerankLevel, TimestampEnabled, TimestampFormat, TimestampTimezone, UseCitations, CreatedUTC, LastModifiedUTC, ChatOnly, }: {
        GUID: string;
        Name: string;
        Description: string | null;
        SystemPrompt: string;
        EmbeddingModel: string;
        MaxResults: number;
        VectorDatabaseName: string;
        VectorDatabaseTable: string;
        VectorDatabaseHostname: string;
        VectorDatabasePort: number;
        VectorDatabaseUser: string;
        VectorDatabasePassword: string;
        GenerationProvider: string;
        GenerationModel: string;
        GenerationApiKey: string;
        Temperature: number;
        TopP: number;
        MaxTokens: number;
        OllamaHostname: string;
        OllamaPort: number;
        OllamaContextLength: number | null;
        ContextSort: boolean;
        SortBySimilarity: boolean;
        ContextScope: number;
        Rerank: boolean;
        RerankModel: string;
        RerankTopK: number;
        RerankLevel: string;
        TimestampEnabled: boolean;
        TimestampFormat: string;
        TimestampTimezone: string;
        UseCitations: boolean;
        CreatedUTC: string;
        LastModifiedUTC: string;
        ChatOnly: boolean;
    });
    GUID: string;
    Name: string;
    Description: string;
    SystemPrompt: string;
    EmbeddingModel: string;
    MaxResults: number;
    VectorDatabaseName: string;
    VectorDatabaseTable: string;
    VectorDatabaseHostname: string;
    VectorDatabasePort: number;
    VectorDatabaseUser: string;
    VectorDatabasePassword: string;
    GenerationProvider: string;
    GenerationModel: string;
    GenerationApiKey: string;
    Temperature: number;
    TopP: number;
    MaxTokens: number;
    OllamaHostname: string;
    OllamaPort: number;
    OllamaContextLength: number;
    ContextSort: boolean;
    SortBySimilarity: boolean;
    ContextScope: number;
    Rerank: boolean;
    RerankModel: string;
    RerankTopK: number;
    RerankLevel: string;
    TimestampEnabled: boolean;
    TimestampFormat: string;
    TimestampTimezone: string;
    UseCitations: boolean;
    CreatedUTC: string;
    LastModifiedUTC: string;
    ChatOnly: boolean;
}
