import { ViewAssistantSdk } from 'view-sdk';

const api = new ViewAssistantSdk(
  'http://view.homedns.org:8000', //endpoint
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default' //access token
);

api.config.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ';

// region chat

const chatWithModel = async () => {
  try {
    const result = await api.Chat.chatRagQuestion_LEGACY(
      {
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
        Stream: false,
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
      },
      (token) => {
        console.log(token, 'Token');
      }
    );
    console.log(result, 'Chat with model');
  } catch (error) {
    console.log(error, 'Error chatting with model');
  }
};

// chatWithModel();

const chatRagMessages = async () => {
  try {
    const result = await api.Chat.chatRagMessages(
      {
        Messages: [
          { role: 'user', content: 'Do you have Q3 luxetech financials?' },
          {
            role: 'assistant',
            content: 'Unfortunately I do not have context on any documents related to Q3 luxetech financials.',
          },
          { role: 'user', content: 'Are you sure you dont have them?' },
        ],
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
        MaxTokens: 75,
        Stream: true,
        OllamaHostname: 'ollama',
        OllamaPort: 11434,
        PromptPrefix: '',
        ContextSort: true,
        SortByMaxSimilarity: true,
        ContextScope: 0,
        Rerank: false,
        RerankModel: 'cross-encoder/ms-marco-MiniLM-L-6-v2',
        RerankTopK: 5,
      } as any,
      (token) => {
        console.log(token, 'Token');
      }
    );
    console.log(result, 'Chat with model');
  } catch (error) {
    console.log(error, 'Error chatting with model');
  }
};

// chatRagMessages();

const assistantConfig = async () => {
  try {
    const result = await api.Chat.assistantConfigChat(
      '00000000-0000-0000-0000-000000000000',
      {
        messages: [
          { role: 'user', content: 'Do you have Q3 luxetech financials?' },
          {
            role: 'assistant',
            content: 'Unfortunately I do not have context on any documents related to Q3 luxetech financials.',
          },
          { role: 'user', content: 'Are you sure you dont have them?' },
        ],
        stream: false,
      } as any,
      (token) => {
        console.log(token, 'Token');
      }
    );
    console.log(result, 'Assistant config');
  } catch (error) {
    console.log(error, 'Error assistant config');
  }
};

// assistantConfig();

const chatOnlyQuestion = async () => {
  try {
    const result = await api.Chat.chatOnly(
      {
        Question: 'Tell a very short joke?',
        ModelName: 'llama3.1:latest',
        Temperature: 0.1,
        TopP: 0.95,
        MaxTokens: 75,
        GenerationProvider: 'ollama',
        GenerationApiKey: '',
        OllamaHostname: '192.168.86.250',
        OllamaPort: 11434,
        Stream: false,
      } as any,
      (token) => {
        console.log(token, 'Token');
      }
    );
    console.log(result, 'Chat only question');
  } catch (error) {
    console.log(error, 'Error chatting with model');
  }
};

// chatOnlyQuestion();

const chatOnlyMessages = async () => {
  try {
    const result = await api.Chat.chatOnly(
      {
        Messages: [
          { role: 'user', content: 'Do you have Q3 luxetech financials?' },
          {
            role: 'assistant',
            content: 'Unfortunately I do not have context on any documents related to Q3 luxetech financials.',
          },
          { role: 'user', content: 'Are you sure you dont have them?' },
        ],
        ModelName: 'llama3.1:latest',
        Temperature: 0.1,
        TopP: 0.95,
        MaxTokens: 75,
        GenerationProvider: 'ollama',
        GenerationApiKey: '',
        OllamaHostname: '192.168.86.250',
        OllamaPort: 11434,
        Stream: false,
      } as any,
      (token) => {
        console.log(token, 'Token');
      }
    );
    console.log(result, 'Chat only messages');
  } catch (error) {
    console.log(error, 'Error chatting with model');
  }
};

// chatOnlyMessages();

const chatOnlyMessageOpenAi = async () => {
  try {
    const result = await api.Chat.chatOnly(
      {
        Messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Are you happy?' },
          {
            role: 'assistant',
            content:
              "While I can understand your curiosity, I don't experience emotions or feelings because I'm a machine designed to process information and assist with tasks. However, I'm here to help you to the best of my ability! If you have any questions or need assistance, feel free to ask!",
          },
          { role: 'user', content: 'Are you sure?' },
        ],
        ModelName: 'gpt-4o-mini',
        Temperature: 0.1,
        TopP: 0.95,
        MaxTokens: 75,
        GenerationProvider: 'openai',
        GenerationApiKey: 'API_KEY',
        Stream: false,
      } as any,
      (token) => {
        console.log(token, 'Token');
      }
    );
    console.log(result, 'Chat only messages');
  } catch (error) {
    console.log(error, 'Error chatting with model');
  }
};

// chatOnlyMessageOpenAi();

//endregion

//region Configs

const createRagConfig = async () => {
  try {
    const result = await api.AssistantConfig.create({
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
    } as any);
    console.log(result, 'Rag config created');
  } catch (error) {
    console.log(error, 'Error creating rag config');
  }
};

// createRagConfig();

const createChatConfig = async () => {
  try {
    const result = await api.AssistantConfig.create({
      Name: 'Basic Chat Assistant',
      Description: 'uses gpt-4o-mini - openai',
    } as any);
    console.log(result, 'Chat config created');
  } catch (error) {
    console.log(error, 'Error creating chat config');
  }
};

// createChatConfig();

const readAllConfigs = async () => {
  try {
    const result = await api.AssistantConfig.readAll();
    console.log(result, 'All configs');
  } catch (error) {
    console.log(error, 'Error reading all configs');
  }
};

// readAllConfigs();

const readConfig = async () => {
  try {
    const result = await api.AssistantConfig.read('d64ae6a9-c3c9-4f23-a0be-aa866ca13863');
    console.log(result, 'Config read');
  } catch (error) {
    console.log(error, 'Error reading config');
  }
};

// readConfig();

const updateConfig = async () => {
  try {
    const result = await api.AssistantConfig.update({
      GUID: 'd64ae6a9-c3c9-4f23-a0be-aa866ca13863',
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
    } as any);
    console.log(result, 'Config updated');
  } catch (error) {
    console.log(error, 'Error updating config');
  }
};

// updateConfig();

const deleteConfig = async () => {
  try {
    const result = await api.AssistantConfig.delete('d64ae6a9-c3c9-4f23-a0be-aa866ca13863');
    console.log(result, 'Config deleted');
  } catch (error) {
    console.log(error, 'Error deleting config');
  }
};

// deleteConfig();

const existsConfig = async () => {
  try {
    const result = await api.AssistantConfig.exists('d64ae6a9-c3c9-4f23-a0be-aa866ca13863');
    console.log(result, 'Config exists');
  } catch (error) {
    console.log(error, 'Error checking if config exists');
  }
};

// existsConfig();

//endregion

// region Chat Threads

const createChatThread = async () => {
  try {
    const result = await api.ChatThread.create({
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
    } as any);
    console.log(result, 'Chat thread created');
  } catch (error) {
    console.log(error, 'Error creating chat thread');
  }
};

// createChatThread();

const readChatThread = async () => {
  try {
    const result = await api.ChatThread.read('8e8d865d-11c8-45a6-b3e9-972346aac05f');
    console.log(result, 'Chat thread read');
  } catch (error) {
    console.log(error, 'Error reading chat thread');
  }
};

// readChatThread();

const readAllChatThreads = async () => {
  try {
    const result = await api.ChatThread.readAll();
    console.log(result, 'All chat threads');
  } catch (error) {
    console.log(error, 'Error reading all chat threads');
  }
};

// readAllChatThreads();

const appendChatThread = async () => {
  try {
    const result = await api.ChatThread.append('8e8d865d-11c8-45a6-b3e9-972346aac05f', {
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
    } as any);
    console.log(result, 'Chat thread appended');
  } catch (error) {
    console.log(error, 'Error appending chat thread');
  }
};

// appendChatThread();

const deleteChatThread = async () => {
  try {
    const result = await api.ChatThread.delete('8e8d865d-11c8-45a6-b3e9-972346aac05f');
    console.log(result, 'Chat thread deleted');
  } catch (error) {
    console.log(error, 'Error deleting chat thread');
  }
};

// deleteChatThread();

const existsChatThread = async () => {
  try {
    const result = await api.ChatThread.exists('8e8d865d-11c8-45a6-b3e9-972346aac05f');
    console.log(result, 'Chat thread exists');
  } catch (error) {
    console.log(error, 'Error checking if chat thread exists');
  }
};

// existsChatThread();

//endregion

// region Models

const listModels = async () => {
  try {
    const result = await api.Model.retrieveLocalModels({
      OllamaHostname: 'astra',
      OllamaPort: 11400,
    });
    console.log(result, 'Models list');
  } catch (error) {
    console.log(error, 'Error listing models');
  }
};

// listModels();

const readModel = async () => {
  try {
    const result = await api.Model.retrieve(
      {
        Ordering: 'CreatedDescending',
        Labels: [],
        Tags: {},
        Expr: {},
      } as any,
      (token) => {
        console.log(token, 'Token');
      }
    );
    console.log(result, 'Model read');
  } catch (error) {
    console.log(error, 'Error reading model');
  }
};

// readModel();

const deleteModel = async () => {
  try {
    const result = await api.Model.delete({
      ModelName: 'llama3.1:latest',
      OllamaHostname: 'localhost',
      OllamaPort: 11434,
    } as any);
    console.log(result, 'Model deleted');
  } catch (error) {
    console.log(error, 'Error deleting model');
  }
};

// deleteModel();

const preloadModel = async () => {
  try {
    const result = await api.Model.loadUnload({
      ModelName: 'qwen2.5:7b',
      OllamaHostname: 'localhost',
      OllamaPort: 11434,
    } as any);
    console.log(result, 'Model preloaded');
  } catch (error) {
    console.log(error, 'Error preloading model');
  }
};

// preloadModel();

const unloadModel = async () => {
  try {
    const result = await api.Model.loadUnload({
      ModelName: 'qwen2.5:7b',
      OllamaHostname: 'localhost',
      OllamaPort: 11434,
      Unload: true,
    } as any);
    console.log(result, 'Model unloaded');
  } catch (error) {
    console.log(error, 'Error unloading model');
  }
};

// unloadModel();
