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
  constructor({
    GUID,
    Name,
    Description,
    SystemPrompt,
    EmbeddingModel,
    MaxResults,
    VectorDatabaseName,
    VectorDatabaseTable,
    VectorDatabaseHostname,
    VectorDatabasePort,
    VectorDatabaseUser,
    VectorDatabasePassword,
    GenerationProvider,
    GenerationModel,
    GenerationApiKey,
    Temperature,
    TopP,
    MaxTokens,
    OllamaHostname,
    OllamaPort,
    OllamaContextLength,
    ContextSort,
    SortBySimilarity,
    ContextScope,
    Rerank,
    RerankModel,
    RerankTopK,
    RerankLevel,
    TimestampEnabled,
    TimestampFormat,
    TimestampTimezone,
    UseCitations,
    CreatedUTC,
    LastModifiedUTC,
    ChatOnly,
  }) {
    this.GUID = GUID;
    this.Name = Name;
    this.Description = Description;
    this.SystemPrompt = SystemPrompt;
    this.EmbeddingModel = EmbeddingModel;
    this.MaxResults = MaxResults;
    this.VectorDatabaseName = VectorDatabaseName;
    this.VectorDatabaseTable = VectorDatabaseTable;
    this.VectorDatabaseHostname = VectorDatabaseHostname;
    this.VectorDatabasePort = VectorDatabasePort;
    this.VectorDatabaseUser = VectorDatabaseUser;
    this.VectorDatabasePassword = VectorDatabasePassword;
    this.GenerationProvider = GenerationProvider;
    this.GenerationModel = GenerationModel;
    this.GenerationApiKey = GenerationApiKey;
    this.Temperature = Temperature;
    this.TopP = TopP;
    this.MaxTokens = MaxTokens;
    this.OllamaHostname = OllamaHostname;
    this.OllamaPort = OllamaPort;
    this.OllamaContextLength = OllamaContextLength;
    this.ContextSort = ContextSort;
    this.SortBySimilarity = SortBySimilarity;
    this.ContextScope = ContextScope;
    this.Rerank = Rerank;
    this.RerankModel = RerankModel;
    this.RerankTopK = RerankTopK;
    this.RerankLevel = RerankLevel;
    this.TimestampEnabled = TimestampEnabled;
    this.TimestampFormat = TimestampFormat;
    this.TimestampTimezone = TimestampTimezone;
    this.UseCitations = UseCitations;
    this.CreatedUTC = CreatedUTC;
    this.LastModifiedUTC = LastModifiedUTC;
    this.ChatOnly = ChatOnly;
  }
}
