const { ViewAssistantSdk } = require('view-sdk');

const api = new ViewAssistantSdk('default', //tenant Id
  'default', //access token
  'http://view.homedns.org:8000/');

const processRag = async () => {
  try {
    await api.processRag(
      {
        "Question": "What information do you have?",
        "EmbeddingModel": "sentence-transformers/all-MiniLM-L6-v2",
        "MaxResults": 10,
        "VectorDatabaseName": "vectordb",
        "VectorDatabaseTable": "minilm",
        "VectorDatabaseHostname": "pgvector",
        "VectorDatabasePort": 5432,
        "VectorDatabaseUser": "postgres",
        "VectorDatabasePassword": "password",
        "GenerationProvider": "ollama",
        "GenerationApiKey": "",
        "GenerationModel": "llama3.1:8b",
        "HuggingFaceApiKey": "",
        "Temperature": 0.1,
        "MaxTokens": 75,
        "Stream": "True",
        "OllamaHostname": "ollama",
        "OllamaPort": 11434,
        "TopP": 0.95,
        "PromptPrefix": "Use the following pieces of context to answer the question at the end; if the context is not enough for you to answer the question, please politely explain that you don't have relevant context, don't try to make up an answer.",
        "ContextSort": "True",
        "SortByMaxSimilarity": "True",
        "ContextScope": 0,
        "Rerank": "False",
        "RerankModel": "cross-encoder/ms-marco-MiniLM-L-6-v2",
        "RerankTopK": 5
      },
      (token) => console.log(token)
    );
    console.log('hello');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const processChat = async () => {
  try {
    console.log('hello');
    await api.processChat(
      {
        "Question": "Tell a very short joke?",
        "ModelName": "gemma2:2b",
        "Stream": "True",
        "OllamaHostname": "localhost",
        "OllamaPort": 11434
      },
      (token) => console.log(token)
    );
    console.log('hello2');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveModel = async () => {
  try {
    console.log('hello');
    await api.retrieveModel(
      {
        "ModelName": "llama3.1:latest",
        "OllamaHostname": "localhost",
        "OllamaPort": 11434
      },
      (token) => console.log(token)
    );
    console.log('hello2');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteModel = async () => {
  try {
    console.log('hello');
    await api.deleteModel(
      {
        "ModelName": "llama3.1:latest",
        "OllamaHostname": "localhost",
        "OllamaPort": 11434
      },
      (token) => console.log(token)
    );
    console.log('hello2');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const useSDK = () => {
  processRag();
  //processChat();
  //retrieveModel();
  //deleteModel();
};

useSDK();
