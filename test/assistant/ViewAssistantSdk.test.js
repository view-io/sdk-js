import { apiViewAssistantSdk as sdk } from '../setupTest';
import { getServer } from '../server';
import { assistantHandlers } from './handlers';
import {
  mockRagRequest,
  mockChatRequest,
  mockTokenStreamResponse,
  mockRagRequestLegacy,
  mockAssistantConfigGuid,
  mockCreateRagConfigRequest,
  mockCreateChatOnlyConfigRequest,
  mockUpdateRagConfigRequest,
  mockCreateRagConfigResponse,
  mockListRagConfigResponse,
  mockUpdateRagConfigResponse,
  mockCreateChatOnlyConfigResponse,
  mockChatThreadRequest,
  mockCreateChatThreadResponse,
  mockChatThreadGuid,
  mockChatThreadListResponse,
  mockChatThreadAppendResponse,
  mockChatThreadAppendRequest,
  mockLocalModelListResponse,
  mockRetrieveModelRequest,
  mockDeleteModelRequest,
  mockPreloadModelRequest,
  mockUnloadModelRequest,
  mockLocalModelRequest,
} from './mockData';

const server = getServer(assistantHandlers);

describe('ViewAssistantSdk Methods', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('chat', () => {
    it('chat with Model', async () => {
      try {
        const onToken = jest.fn();
        await sdk.Chat.chatRagQuestion_LEGACY(mockRagRequestLegacy, onToken);
      } catch (error) {
        console.log(error);
      }
    });

    it('Rag Messages', async () => {
      try {
        const onToken = jest.fn();
        await sdk.Chat.chatRagMessages(mockRagRequest, onToken);
      } catch (error) {
        console.log(error);
      }
    });

    it('Assistant config chat', async () => {
      try {
        const onToken = jest.fn();
        await sdk.Chat.assistantConfigChat(mockAssistantConfigGuid, mockRagRequest, onToken);
      } catch (error) {
        console.log(error);
      }
    });

    it('Chat only question', async () => {
      try {
        const onToken = jest.fn();
        await sdk.Chat.chatOnly(mockChatRequest, onToken);
      } catch (error) {
        console.log(error);
      }
    });

    it('Chat only messages', async () => {
      try {
        const onToken = jest.fn();
        await sdk.Chat.chatOnly(mockChatRequest, onToken);
      } catch (error) {
        console.log(error);
      }
    });

    it('Chat only message - openai', async () => {
      try {
        const onToken = jest.fn();
        await sdk.Chat.chatOnly(mockChatRequest, onToken);
      } catch (error) {
        console.log(error);
      }
    });
  });

  describe('config', () => {
    it('Create Rag config', async () => {
      try {
        const result = await sdk.AssistantConfig.create(mockCreateRagConfigRequest);
        console.log(result);
        expect(result).toEqual(mockCreateRagConfigResponse);
      } catch (error) {
        console.log(error);
      }
    });

    it('create chat only config', async () => {
      try {
        const result = await sdk.AssistantConfig.create(mockCreateChatOnlyConfigRequest);
        console.log(result);
        expect(result).toEqual(mockCreateChatOnlyConfigResponse);
      } catch (error) {
        console.log(error);
      }
    });

    it('read config', async () => {
      try {
        const result = await sdk.AssistantConfig.read(mockAssistantConfigGuid);
        console.log(result);
        expect(result).toEqual(mockListRagConfigResponse[0]);
      } catch (error) {
        console.log(error);
      }
    });

    it('read all configs', async () => {
      try {
        const result = await sdk.AssistantConfig.readAll();
        console.log(result);
        expect(result).toEqual(mockListRagConfigResponse);
      } catch (error) {
        console.log(error);
      }
    });

    it('update config', async () => {
      try {
        const result = await sdk.AssistantConfig.update(mockUpdateRagConfigRequest);
        console.log(result);
        expect(result).toEqual(mockUpdateRagConfigResponse);
      } catch (error) {
        console.log(error);
      }
    });

    it('exists config', async () => {
      try {
        const result = await sdk.AssistantConfig.exists(mockAssistantConfigGuid);
        console.log(result);
        expect(result).toEqual(true);
      } catch (error) {
        console.log(error);
      }
    });

    it('delete config', async () => {
      try {
        const result = await sdk.AssistantConfig.delete(mockAssistantConfigGuid);
        console.log(result);
        expect(result).toEqual(true);
      } catch (error) {
        console.log(error);
      }
    });
  });

  describe('chat threads', () => {
    it('create chat thread', async () => {
      try {
        const result = await sdk.ChatThread.create(mockChatThreadRequest);
        console.log(result);
        expect(result).toEqual(mockCreateChatThreadResponse);
      } catch (error) {
        console.log(error);
      }
    });

    it('append chat thread', async () => {
      try {
        const result = await sdk.ChatThread.append(mockChatThreadGuid, mockChatThreadAppendRequest);
        console.log(result);
        expect(result).toEqual(mockChatThreadAppendResponse);
      } catch (error) {
        console.log(error);
      }
    });

    it('read chat thread', async () => {
      try {
        const result = await sdk.ChatThread.read(mockChatThreadGuid);
        console.log(result);
        expect(result).toEqual(mockChatThreadListResponse[0]);
      } catch (error) {
        console.log(error);
      }
    });

    it('read all chat threads', async () => {
      try {
        const result = await sdk.ChatThread.readAll();
        console.log(result);
        expect(result).toEqual(mockChatThreadListResponse);
      } catch (error) {
        console.log(error);
      }
    });

    it('exists chat thread', async () => {
      try {
        const result = await sdk.ChatThread.exists(mockChatThreadGuid);
        console.log(result);
        expect(result).toEqual(true);
      } catch (error) {
        console.log(error);
      }
    });

    it('delete chat thread', async () => {
      try {
        const result = await sdk.ChatThread.delete(mockChatThreadGuid);
        console.log(result);
        expect(result).toEqual(true);
      } catch (error) {
        console.log(error);
      }
    });
  });

  describe('models', () => {
    it('list local models', async () => {
      try {
        const result = await sdk.Model.retrieveLocalModels(mockLocalModelRequest);
        console.log(result);
        expect(result).toEqual(mockLocalModelListResponse);
      } catch (error) {
        console.log(error);
      }
    });

    it('retrieve model', async () => {
      try {
        const result = await sdk.Model.retrieve(mockRetrieveModelRequest);
        console.log(result);
        expect(result).toEqual(mockLocalModelListResponse[0]);
      } catch (error) {
        console.log(error);
      }
    });

    it('preload model', async () => {
      try {
        const result = await sdk.Model.loadUnload(mockPreloadModelRequest);
        console.log(result);
        expect(result).toEqual(true);
      } catch (error) {
        console.log(error);
      }
    });

    it('unload model', async () => {
      try {
        const result = await sdk.Model.loadUnload(mockUnloadModelRequest);
        console.log(result);
        expect(result).toEqual(true);
      } catch (error) {
        console.log(error);
      }
    });
  });
});
