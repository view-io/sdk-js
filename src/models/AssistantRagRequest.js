export default class AssistantRagRequest {
  /**
   * AssistantRagRequest constructor.
   *
   * @param {Object} request - Information about the RAG request.
   * @param {string} request.PromptPrefix - The prompt prefix for the assistant.
   * @param {string} request.Question - The question being asked.
   * @param {number} request.MaxResults - The maximum number of documents to retrieve (between 1 and 100).
   * @param {number} request.Temperature - The temperature value between 0 and 1.
   * @param {number} request.TopP - The top P value for sampling (between 0 and 1).
   * @param {number} request.MaxTokens - The maximum number of tokens to generate (between 1 and 16384).
   * @param {string} request.GenerationModel - The generation model and tag (default: 'llama3.1:latest').
   * @param {string} request.GenerationProvider - The generation provider (default: 'ollama').
   * @param {string} request.OllamaHostname - The hostname for the Ollama service (default: 'localhost').
   * @param {number} request.OllamaPort - The TCP port for the Ollama service (default: 11434).
   * @param {string} request.VectorDatabaseHostname - The hostname for the vector database (default: 'localhost').
   * @param {number} request.VectorDatabasePort - The port for the vector database (default: 5432).
   * @param {string} request.VectorDatabaseName - The name of the vector database (default: 'vectors').
   * @param {string} request.VectorDatabaseUser - The user for the vector database (default: 'postgres').
   * @param {string} request.VectorDatabasePassword - The password for the vector database.
   * @param {boolean} request.Stream - Whether streaming is enabled (default: true).
   * @param {boolean} request.ContextSort - Whether contextual sorting is enabled (default: true).
   * @param {number} request.ContextScope - The number of neighboring data elements to retrieve (between 1 and 16).
   * @param {boolean} request.Rerank - Whether re-ranking is enabled (default: true).
   * @param {number} request.RerankTopK - The number of top chunks or documents to re-rank (between 1 and 16).
   */
  constructor(request) {
    const {
      PromptPrefix = 'You are a helpful AI assistant. Please use the information that follows as context to answer the user question listed below. Do not make up an answer. If you do not know, say you do not know.',
      Question = 'What information do you have?',
      MaxResults = 10,
      Temperature = 0.1,
      TopP = 0.95,
      MaxTokens = 2048,
      GenerationModel = 'llama3.1:latest',
      GenerationProvider = 'ollama',
      OllamaHostname = 'localhost',
      OllamaPort = 11434,
      VectorDatabaseHostname = 'localhost',
      VectorDatabasePort = 5432,
      VectorDatabaseName = 'vectors',
      VectorDatabaseUser = 'postgres',
      VectorDatabasePassword = 'password',
      Stream = true,
      ContextSort = true,
      ContextScope = 2,
      Rerank = true,
      RerankTopK = 10,
    } = request;

    this._PromptPrefix = '';
    this._Question = '';
    this._MaxResults = 0;
    this._Temperature = 0;
    this._TopP = 0;
    this._MaxTokens = 0;
    this._GenerationModel = '';
    this._GenerationProvider = '';
    this._OllamaHostname = '';
    this._OllamaPort = 0;
    this._VectorDatabaseHostname = '';
    this._VectorDatabasePort = 0;
    this._VectorDatabaseName = '';
    this._VectorDatabaseUser = '';
    this._VectorDatabasePassword = '';
    this._Stream = Stream;
    this._ContextSort = ContextSort;
    this._ContextScope = 0;
    this._Rerank = Rerank;
    this._RerankTopK = 0;

    this.PromptPrefix = PromptPrefix;
    this.Question = Question;
    this.MaxResults = MaxResults;
    this.Temperature = Temperature;
    this.TopP = TopP;
    this.MaxTokens = MaxTokens;
    this.GenerationModel = GenerationModel;
    this.GenerationProvider = GenerationProvider;
    this.OllamaHostname = OllamaHostname;
    this.OllamaPort = OllamaPort;
    this.VectorDatabaseHostname = VectorDatabaseHostname;
    this.VectorDatabasePort = VectorDatabasePort;
    this.VectorDatabaseName = VectorDatabaseName;
    this.VectorDatabaseUser = VectorDatabaseUser;
    this.VectorDatabasePassword = VectorDatabasePassword;
    this.ContextScope = ContextScope;
    this.RerankTopK = RerankTopK;
  }

  // Getter and Setter for PromptPrefix with validation
  get PromptPrefix() {
    return this._PromptPrefix;
  }

  set PromptPrefix(value) {
    if (!value || value.trim() === '') {
      throw new Error('PromptPrefix cannot be null or empty');
    }
    this._PromptPrefix = value;
  }

  // Getter and Setter for Question with validation
  get Question() {
    return this._Question;
  }

  set Question(value) {
    if (!value || value.trim() === '') {
      throw new Error('Question cannot be null or empty');
    }
    this._Question = value;
  }

  // Getter and Setter for MaxResults with validation
  get MaxResults() {
    return this._MaxResults;
  }

  set MaxResults(value) {
    if (value < 1 || value > 100) {
      throw new Error('MaxResults must be between 1 and 100');
    }
    this._MaxResults = value;
  }

  // Getter and Setter for Temperature with validation
  get Temperature() {
    return this._Temperature;
  }

  set Temperature(value) {
    if (value <= 0 || value > 1) {
      throw new Error('Temperature must be between 0 and 1');
    }
    this._Temperature = value;
  }

  // Getter and Setter for TopP with validation
  get TopP() {
    return this._TopP;
  }

  set TopP(value) {
    if (value <= 0 || value > 1) {
      throw new Error('TopP must be between 0 and 1');
    }
    this._TopP = value;
  }

  // Getter and Setter for MaxTokens with validation
  get MaxTokens() {
    return this._MaxTokens;
  }

  set MaxTokens(value) {
    if (value < 1 || value > 16384) {
      throw new Error('MaxTokens must be between 1 and 16384');
    }
    this._MaxTokens = value;
  }

  // Getter and Setter for GenerationModel with validation
  get GenerationModel() {
    return this._GenerationModel;
  }

  set GenerationModel(value) {
    if (!value || value.trim() === '') {
      throw new Error('GenerationModel cannot be null or empty');
    }
    this._GenerationModel = value;
  }

  // Getter and Setter for GenerationProvider with validation
  get GenerationProvider() {
    return this._GenerationProvider;
  }

  set GenerationProvider(value) {
    const validProviders = ['ollama'];
    if (!value || value.trim() === '') {
      throw new Error('GenerationProvider cannot be null or empty');
    }
    if (!validProviders.includes(value)) {
      throw new Error(`The specified generation provider '${value}' is not valid.`);
    }
    this._GenerationProvider = value;
  }

  // Getter and Setter for OllamaHostname with validation
  get OllamaHostname() {
    return this._OllamaHostname;
  }

  set OllamaHostname(value) {
    if (!value || value.trim() === '') {
      throw new Error('OllamaHostname cannot be null or empty');
    }
    this._OllamaHostname = value;
  }

  // Getter and Setter for OllamaPort with validation
  get OllamaPort() {
    return this._OllamaPort;
  }

  set OllamaPort(value) {
    if (value < 0 || value > 65535) {
      throw new Error('OllamaPort must be between 0 and 65535');
    }
    this._OllamaPort = value;
  }

  // Getter and Setter for VectorDatabaseHostname with validation
  get VectorDatabaseHostname() {
    return this._VectorDatabaseHostname;
  }

  set VectorDatabaseHostname(value) {
    if (!value || value.trim() === '') {
      throw new Error('VectorDatabaseHostname cannot be null or empty');
    }
    this._VectorDatabaseHostname = value;
  }

  // Getter and Setter for VectorDatabasePort with validation
  get VectorDatabasePort() {
    return this._VectorDatabasePort;
  }

  set VectorDatabasePort(value) {
    if (value < 0 || value > 65535) {
      throw new Error('VectorDatabasePort must be between 0 and 65535');
    }
    this._VectorDatabasePort = value;
  }

  // Getter and Setter for VectorDatabaseName with validation
  get VectorDatabaseName() {
    return this._VectorDatabaseName;
  }

  set VectorDatabaseName(value) {
    if (!value || value.trim() === '') {
      throw new Error('VectorDatabaseName cannot be null or empty');
    }
    this._VectorDatabaseName = value;
  }

  // Getter and Setter for VectorDatabaseUser with validation
  get VectorDatabaseUser() {
    return this._VectorDatabaseUser;
  }

  set VectorDatabaseUser(value) {
    if (!value || value.trim() === '') {
      throw new Error('VectorDatabaseUser cannot be null or empty');
    }
    this._VectorDatabaseUser = value;
  }

  // Getter and Setter for VectorDatabasePassword with validation
  get VectorDatabasePassword() {
    return this._VectorDatabasePassword;
  }

  set VectorDatabasePassword(value) {
    if (!value || value.trim() === '') {
      throw new Error('VectorDatabasePassword cannot be null or empty');
    }
    this._VectorDatabasePassword = value;
  }

  // Getter for Stream (always true)
  get Stream() {
    return this._Stream;
  }

  // Getter and Setter for ContextSort
  get ContextSort() {
    return this._ContextSort;
  }

  set ContextSort(value) {
    this._ContextSort = value;
  }

  // Getter and Setter for ContextScope with validation
  get ContextScope() {
    return this._ContextScope;
  }

  set ContextScope(value) {
    if (value < 1 || value > 16) {
      throw new Error('ContextScope must be between 1 and 16');
    }
    this._ContextScope = value;
  }

  // Getter and Setter for Rerank
  get Rerank() {
    return this._Rerank;
  }

  set Rerank(value) {
    this._Rerank = value;
  }

  // Getter and Setter for RerankTopK with validation
  get RerankTopK() {
    return this._RerankTopK;
  }

  set RerankTopK(value) {
    if (value < 1 || value > 16) {
      throw new Error('RerankTopK must be between 1 and 16');
    }
    this._RerankTopK = value;
  }
}
