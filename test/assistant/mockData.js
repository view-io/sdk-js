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

export const mockRagRequestLegacy = {
  Question: 'What information do you have?',
  EmbeddingModel: 'sentence-transformers/all-MiniLM-L6-v2',
  MaxResults: 10,
  VectorDatabaseName: 'vectordb',
  VectorDatabaseTable: 'minilm',
  VectorDatabaseHostname: 'pgvector',
  VectorDatabasePort: 5432,
  VectorDatabaseUser: 'postgres',
  VectorDatabasePassword: 'password',
  GenerationProvider: 'ollama',
  GenerationApiKey: '',
  GenerationModel: 'qwen2.5:7b',
  HuggingFaceApiKey: '',
  Temperature: 0.1,
  MaxTokens: 75,
  Stream: true,
  OllamaHostname: 'ollama',
  OllamaPort: 11434,
  TopP: 0.95,
  PromptPrefix: 'talk like a pirate',
  ContextSort: true,
  SortByMaxSimilarity: true,
  ContextScope: 0,
  Rerank: false,
  RerankModel: 'cross-encoder/ms-marco-MiniLM-L-6-v2',
  RerankTopK: 5,
};

export const mockAssistantConfigGuid = '4fef86e6-a12b-41ac-9c56-8e5528bf9004';
export const mockAssistantConfigGuid2 = '123e4567-e89b-12d3-a456-426614174000';

export const mockCreateRagConfigRequest = {
  Name: 'Basic RAG Assistant',
  Description: 'uses qwen2.5:7b - ollama',
  SystemPrompt: 'Use the provided context to answer questions.',
  EmbeddingModel: 'sentence-transformers/all-MiniLM-L6-v2',
  MaxResults: 10,
  VectorDatabaseName: 'vectordb',
  VectorDatabaseTable: 'minilm',
  VectorDatabaseHostname: 'pgvector',
  VectorDatabasePort: 5432,
  VectorDatabaseUser: 'postgres',
  VectorDatabasePassword: 'password',
  GenerationProvider: 'ollama',
  GenerationApiKey: '',
  GenerationModel: 'qwen2.5:7b',
  HuggingFaceApiKey: '',
  Temperature: 0.1,
  TopP: 0.95,
  MaxTokens: 500,
  OllamaHostname: 'ollama',
  OllamaPort: 11434,
  ContextSort: true,
  SortByMaxSimilarity: true,
  ContextScope: 0,
  Rerank: true,
  RerankModel: 'cross-encoder/ms-marco-MiniLM-L-6-v2',
  RerankTopK: 3,
};

export const mockCreateRagConfigResponse = {
  GUID: mockAssistantConfigGuid,
  Name: 'Basic RAG Assistant',
  Description: 'uses qwen2.5:7b - ollama',
  CreatedUTC: '2025-06-17T06:45:18.717939',
};

export const mockListRagConfigResponse = [
  {
    GUID: mockAssistantConfigGuid,
    Name: 'Basic RAG Assistant',
    Description: 'uses qwen2.5:7b - ollama',
    CreatedUTC: '2025-06-17T06:45:18.717939',
  },
];

export const mockCreateChatOnlyConfigResponse = {
  GUID: mockAssistantConfigGuid2,
  Name: 'Chat Only Blackbeard Assistant',
  Description: 'uses qwen2.5:7b - ollama',
  CreatedUTC: '2025-06-17T06:45:18.717939',
};

export const mockUpdateRagConfigRequest = {
  GUID: mockAssistantConfigGuid,
  Name: 'Updated RAG Assistant',
  Description: 'uses qwen2.5:7b - ollama',
  SystemPrompt: 'Use the provided context to answer questions.',
  EmbeddingModel: 'sentence-transformers/all-MiniLM-L6-v2',
  MaxResults: 10,
  VectorDatabaseName: 'vectordb',
  VectorDatabaseTable: 'minilm',
  VectorDatabaseHostname: 'pgvector',
  VectorDatabasePort: 5432,
  VectorDatabaseUser: 'postgres',
  VectorDatabasePassword: 'password',
  GenerationProvider: 'ollama',
  GenerationApiKey: '',
  GenerationModel: 'qwen2.5:7b',
  HuggingFaceApiKey: '',
  Temperature: 0.1,
  TopP: 0.95,
  MaxTokens: 500,
  OllamaHostname: 'ollama',
  OllamaPort: 11434,
  ContextSort: true,
  SortByMaxSimilarity: true,
  ContextScope: 0,
  Rerank: true,
  RerankModel: 'cross-encoder/ms-marco-MiniLM-L-6-v2',
  RerankTopK: 3,
};

export const mockUpdateRagConfigResponse = {
  GUID: mockAssistantConfigGuid,
  Name: 'Updated RAG Assistant',
  Description: 'uses qwen2.5:7b - ollama',
  CreatedUTC: '2025-06-17T06:45:18.717939',
};

export const mockCreateChatOnlyConfigRequest = {
  Name: 'Chat Only Blackbeard Assistant',
  Description: 'uses qwen2.5:7b - ollama',
  SystemPrompt:
    'You are Edward Teach (c. 1680 – 22 November 1718), better known as the pirate Blackbeard. Talk like a pirate and only answer questions with period correct answers.',
  GenerationProvider: 'ollama',
  GenerationApiKey: '',
  GenerationModel: 'qwen2.5:7b',
  Temperature: 0.1,
  TopP: 0.95,
  MaxTokens: 500,
  OllamaHostname: 'ollama',
  OllamaPort: 11434,
  ChatOnly: true,
};

export const mockChatThreadRequest = {
  Title: 'Test Chat Thread',
  Description: 'A test chat thread for development',
  Messages: [
    {
      role: 'user',
      content: 'What is the capital of France?',
      metadata: {
        source: 'web interface',
        client_timestamp: '2024-02-17T10:30:00Z',
      },
    },
  ],
  AssistantConfigGUID: '12345678-1234-5678-1234-567812345678',
  Metadata: {
    tags: ['test', 'development'],
    category: 'testing',
  },
};

export const mockChatThreadGuid = 'ab7188e1-6fae-4285-8d14-d131f8d7b45c';

export const mockCreateChatThreadResponse = {
  GUID: mockChatThreadGuid,
  Title: 'Test Chat Thread',
  Description: 'A test chat thread for development',
  MessageCount: 1,
  CreatedUTC: '2025-06-17T07:17:56.000657',
  LastModifiedUTC: '2025-06-17T07:17:56.000657',
  AssistantConfigGUID: '12345678-1234-5678-1234-567812345678',
};

export const mockChatThreadAppendRequest = {
  role: 'assistant',
  content: 'The capital of France is Paris.',
  metadata: {
    source_documents: [
      {
        content: 'Paris is the capital and largest city of France.',
        similarity: 0.89,
      },
    ],
    generation_metrics: {
      tokens: 8,
      generation_time: 0.5,
    },
  },
};

export const mockChatThreadAppendResponse = {
  GUID: mockChatThreadGuid,
  Title: 'Test Chat Thread',
  Description: 'A test chat thread for development',
  MessageCount: 2,
  CreatedUTC: '2025-06-17T07:17:56.000657',
  LastModifiedUTC: '2025-06-17T08:06:16.606798',
  AssistantConfigGUID: '12345678-1234-5678-1234-567812345678',
};

export const mockChatThreadListResponse = [
  {
    GUID: mockChatThreadGuid,
    Title: 'Test Chat Thread',
    Description: 'A test chat thread for development',
    MessageCount: 2,
    CreatedUTC: '2025-06-17T07:17:56.000657',
    LastModifiedUTC: '2025-06-17T08:06:16.606798',
    AssistantConfigGUID: '12345678-1234-5678-1234-567812345678',
  },
];

export const mockLocalModelRequest = {
  OllamaHostname: 'astra',
  OllamaPort: 11400,
};

export const mockRetrieveModelRequest = {
  ModelName: 'llama3.1:latest',
  OllamaHostname: 'ollama',
  OllamaPort: 11434,
};

export const mockDeleteModelRequest = {
  ModelName: 'llama3.1:latest',
  OllamaHostname: 'localhost',
  OllamaPort: 11434,
};

export const mockPreloadModelRequest = {
  ModelName: 'llama3.1:latest',
  OllamaHostname: 'localhost',
  OllamaPort: 11434,
};

export const mockUnloadModelRequest = {
  ModelName: 'llama3.1:latest',
  OllamaHostname: 'localhost',
  OllamaPort: 11434,
  Unload: true,
};

export const mockLocalModelListResponse = [
  {
    ModelName: 'llama3.1:latest',
    OllamaHostname: 'localhost',
    OllamaPort: 11434,
  },
  {
    ModelName: 'llama3.1:latest',
    OllamaHostname: 'ollama',
    OllamaPort: 11434,
  },
];

export const mockRetrieveModelResponse = [
  { status: 'pulling manifest' },
  {
    status: 'pulling 667b0c1932bc',
    digest: 'sha256:667b0c1932bc6ffc593ed1d03f895bf2dc8dc6df21db3042284a6f4416b06a29',
    total: 4920738944,
    completed: 4920738944,
  },
  {
    status: 'pulling 948af2743fc7',
    digest: 'sha256:948af2743fc78a328dcb3b0f5a31b3d75f415840fdb699e8b1235978392ecf85',
    total: 1481,
    completed: 1481,
  },
  { status: 'verifying sha256 digest' },
  { status: 'writing manifest' },
  { status: 'removing any unused layers' },
  { status: 'success' },
];