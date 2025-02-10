export default class AssistantChatRequest {
  /**
   * AssistantChatRequest constructor.
   *
   * @param {Object} request - Information about the assistant chat request.
   * @param {string} request.Question - The question being asked.
   * @param {number} request.Temperature - The temperature value between 0 and 1.
   * @param {number} request.MaxTokens - The maximum number of tokens to generate (between 1 and 16384).
   * @param {string} request.GenerationModel - The model tag for generation (default: 'llama3.1:latest').
   * @param {string} request.GenerationProvider - The provider for generation (default: 'ollama').
   * @param {string} request.OllamaHostname - The hostname for Ollama (default: 'localhost').
   * @param {number} request.OllamaPort - The port for Ollama (default: 11434).
   * @param {boolean} request.Stream - Whether streaming is enabled (default: true).
   */
  constructor(request) {
    const {
      Question = 'What information do you have?',
      Temperature = 0.1,
      MaxTokens = 2048,
      GenerationModel = 'llama3.1:latest',
      GenerationProvider = 'ollama',
      OllamaHostname = 'localhost',
      OllamaPort = 11434,
      Stream = true,
    } = request;

    this._Question = '';
    this._Temperature = 0;
    this._MaxTokens = 0;
    this._GenerationModel = '';
    this._GenerationProvider = '';
    this._OllamaHostname = '';
    this._OllamaPort = 0;
    this._Stream = Stream;

    this.Question = Question;
    this.Temperature = Temperature;
    this.MaxTokens = MaxTokens;
    this.GenerationModel = GenerationModel;
    this.GenerationProvider = GenerationProvider;
    this.OllamaHostname = OllamaHostname;
    this.OllamaPort = OllamaPort;
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

  // Streaming flag (Always true in this case)
  get Stream() {
    return this._Stream;
  }
}
