import { apiViewAssistantSdk as sdk } from '../setupTest';
import { getServer } from '../server';
import { assistantHandlers } from './handlers';
import {
  mockRagRequest,
  mockChatRequest,
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
      const onToken = jest.fn();
      await sdk.Chat.chatRagQuestion_LEGACY(mockRagRequestLegacy, onToken);
    });

    it('Rag Messages', async () => {
      const onToken = jest.fn();
      await sdk.Chat.chatRagMessages(mockRagRequest, onToken);
    });

    it('Assistant config chat', async () => {
      const onToken = jest.fn();
      await sdk.Chat.assistantConfigChat(mockAssistantConfigGuid, mockRagRequest, onToken);
    });

    it('Chat only question', async () => {
      const onToken = jest.fn();
      await sdk.Chat.chatOnly(mockChatRequest, onToken);
    });

    it('Chat only messages', async () => {
      const onToken = jest.fn();
      await sdk.Chat.chatOnly(mockChatRequest, onToken);
    });

    it('Chat only message - openai', async () => {
      const onToken = jest.fn();
      await sdk.Chat.chatOnly(mockChatRequest, onToken);
    });
  });

  describe('config', () => {
    it('Create Rag config', async () => {
      const result = await sdk.AssistantConfig.create(mockCreateRagConfigRequest);
      expect(result).toEqual(mockCreateRagConfigResponse);
    });

    it('create chat only config', async () => {
      const result = await sdk.AssistantConfig.create(mockCreateChatOnlyConfigRequest);
      expect(result).toEqual(mockCreateChatOnlyConfigResponse);
    });

    it('read config', async () => {
      const result = await sdk.AssistantConfig.read(mockAssistantConfigGuid);
      expect(result).toEqual(mockListRagConfigResponse[0]);
    });

    it('read all configs', async () => {
      const result = await sdk.AssistantConfig.readAll();
      expect(result).toEqual(mockListRagConfigResponse);
    });

    it('update config', async () => {
      const result = await sdk.AssistantConfig.update(mockUpdateRagConfigRequest);
      expect(result).toEqual(mockUpdateRagConfigResponse);
    });

    it('exists config', async () => {
      const result = await sdk.AssistantConfig.exists(mockAssistantConfigGuid);
      expect(result).toEqual(true);
    });

    it('delete config', async () => {
      const result = await sdk.AssistantConfig.delete(mockAssistantConfigGuid);
      expect(result).toEqual(true);
    });
  });

  describe('chat threads', () => {
    it('create chat thread', async () => {
      const result = await sdk.ChatThread.create(mockChatThreadRequest);
      expect(result).toEqual(mockCreateChatThreadResponse);
    });

    it('append chat thread', async () => {
      const result = await sdk.ChatThread.append(mockChatThreadGuid, mockChatThreadAppendRequest);
      expect(result).toEqual(mockChatThreadAppendResponse);
    });

    it('read chat thread', async () => {
      const result = await sdk.ChatThread.read(mockChatThreadGuid);
      expect(result).toEqual(mockChatThreadListResponse[0]);
    });

    it('read all chat threads', async () => {
      const result = await sdk.ChatThread.readAll();
      expect(result).toEqual(mockChatThreadListResponse);
    });

    it('exists chat thread', async () => {
      const result = await sdk.ChatThread.exists(mockChatThreadGuid);
      expect(result).toEqual(true);
    });

    it('delete chat thread', async () => {
      const result = await sdk.ChatThread.delete(mockChatThreadGuid);
      expect(result).toEqual(true);
    });
  });

  describe('models', () => {
    it('list local models', async () => {
      const result = await sdk.Model.retrieveLocalModels(mockLocalModelRequest);
      expect(result).toEqual(mockLocalModelListResponse);
    });

    it('retrieve model', async () => {
      const onToken = jest.fn();
      await sdk.Model.retrieve(mockRetrieveModelRequest, onToken);
    });

    it('preload model', async () => {
      const result = await sdk.Model.loadUnload(mockPreloadModelRequest);
      expect(result).toEqual(true);
    });

    it('unload model', async () => {
      const result = await sdk.Model.loadUnload(mockUnloadModelRequest);
      expect(result).toEqual(true);
    });
  });
});
