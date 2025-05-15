import { ViewAssistantSdk } from '../../src';
import { getServer } from '../server';
import { mockAccessToken, mockEndpoint, mockTenantId } from '../setupTest';
import { assistantHandlers } from './handlers';
import { mockRagRequest, mockChatRequest, mockTokenStreamResponse } from './mockData';

const server = getServer(assistantHandlers);
const sdk = new ViewAssistantSdk(mockTenantId, mockAccessToken, mockEndpoint);

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

  it.skip('processes RAG request successfully', async () => {
    const onToken = jest.fn();

    await sdk.processRag(mockRagRequest, onToken);
    expect(onToken).toHaveBeenCalledTimes(mockTokenStreamResponse.length);
    mockTokenStreamResponse.forEach((token, index) => {
      expect(onToken).toHaveBeenNthCalledWith(index + 1, token.token);
    });
  });

  it('fails RAG request with invalid payload', async () => {
    const onToken = jest.fn();

    await await expect(sdk.chatRagQuestion_LEGACY(null, onToken)).rejects.toThrow('ragRequest');
  });

  it.skip('processes Chat request successfully', async () => {
    const onToken = jest.fn();

    await sdk.processChat(mockChatRequest, onToken);

    expect(onToken).toHaveBeenCalledTimes(mockTokenStreamResponse.length);
    mockTokenStreamResponse.forEach((token, index) => {
      expect(onToken).toHaveBeenNthCalledWith(index + 1, token.token);
    });
  });
});
