export const mockRagRequest = {
  PromptPrefix: 'Search for:',
  Question: 'What is the capital of France?',
  MaxResults: 5,
  Temperature: 0.7,
  TopP: 0.9,
  MaxTokens: 500,
  GenerationModel: 'llama3.1:latest',
  GenerationProvider: 'ollama',
  OllamaHostname: 'localhost',
  OllamaPort: 11434,
  VectorDatabaseHostname: 'localhost',
  VectorDatabasePort: 5432,
  VectorDatabaseName: 'vectors',
  VectorDatabaseUser: 'postgres',
  VectorDatabasePassword: 'password',
  Stream: true,
  ContextSort: true,
  ContextScope: 3,
  Rerank: true,
  RerankTopK: 3,
};

export const mockChatRequest = {
  Question: 'What is the weather today?',
  Temperature: 0.8,
  MaxTokens: 150,
  GenerationModel: 'llama3.1:latest',
  GenerationProvider: 'ollama',
  OllamaHostname: 'localhost',
  OllamaPort: 11434,
  Stream: true,
};

export const mockTokenStreamResponse = [
  { token: 'The' },
  { token: ' capital' },
  { token: ' of' },
  { token: ' France' },
  { token: ' is' },
  { token: ' Paris.' },
];
