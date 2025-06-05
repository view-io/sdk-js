import superagent from 'superagent';
import { SeverityEnum } from '../../enums/SeverityEnum';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import { RagRequest, ChatRequest } from '../../types';
import { Writable } from 'stream';

export type OnToken = (token: string) => void;

export class ChatSdk extends ViewSdkBase {
  /**
   * Constructs a new ChatSdk.
   * @param {SdkConfiguration} config
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Chat
  /**
   * AssistantRagRequest request.
   * @param {RagRequest} ragRequest - Configuration object for query and generation.
   * @param {OnToken} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortController} cancelToken - Optional. The cancellation token to cancel the request if needed.
   * @returns {Promise<any>} - A promise resolving to an array of tokens.
   * @throws {MethodError}
   */
  chatRagQuestion_LEGACY = async (
    ragRequest: RagRequest,
    onToken: OnToken,
    cancelToken?: AbortController
  ): Promise<any> => {
    if (ragRequest == null) {
      GenericExceptionHandlers.ArgumentNullException('ragRequest');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/rag`;
    const json = JSON.stringify(ragRequest);

    this.log(SeverityEnum.Debug, `${this.config.header} request body: \n${json}`);

    try {
      const request = superagent
        .post(url)
        .send(ragRequest)
        .set('Content-Type', 'application/json')
        .on('error', (error) => {
          this.log(SeverityEnum.Warn, `${this.config.header}Error processing RAG request:`);
        })
        .pipe(this._createStreamParser(onToken));

      if (cancelToken) {
        cancelToken.abort = () => {
          request.destroy();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
    } catch (error) {
      this.log(SeverityEnum.Error, `${this.config.header} Error processing RAG request:`);
      return []; // Return an empty array in case of error
    }
  };

  /**
   * AssistantRagRequest request.
   * @param {RagRequest} ragRequest - Configuration for the retrieval and generation process.
   * @param {OnToken} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional. The cancellation token to cancel the request if needed.
   * @returns {Promise<any>} - A promise resolving to an array of tokens.
   * @throws {MethodError}
   */
  chatRagMessages = async (ragRequest: RagRequest, onToken: OnToken, cancelToken: any): Promise<any> => {
    if (ragRequest == null) {
      GenericExceptionHandlers.ArgumentNullException('ragRequest');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/rag/chat`;
    const json = JSON.stringify(ragRequest);

    this.log(SeverityEnum.Debug, `${this.config.header} request body: \n${json}`);

    try {
      const request = superagent
        .post(url)
        .send(ragRequest)
        .set('Content-Type', 'application/json')
        .on('error', (error) => {
          this.log(SeverityEnum.Warn, `${this.config.header}Error processing RAG request:`);
        })
        .pipe(this._createStreamParser(onToken));

      if (cancelToken) {
        cancelToken.abort = () => {
          request.destroy();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
    } catch (error) {
      this.log(SeverityEnum.Error, `${this.config.header} Error processing RAG request:`);
      return []; // Return an empty array in case of error
    }
  };

  /**
   * Process a chat request.
   *@param {string} assistantConfigGuid - The GUID of the assistant configuration to use for the chat.
   * @param {ChatRequest} chatRequest - Configuration for a simple chat interaction.
   * @param {OnToken} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortController} [cancelToken] - Optional. The cancellation token to cancel the request if needed.
   * @returns {Promise<any>} - A promise resolving to an array of tokens.
   * @throws {MethodError}
   */
  assistantConfigChat = async (
    assistantConfigGuid: string,
    chatRequest: ChatRequest,
    onToken: OnToken,
    cancelToken: AbortController
  ): Promise<any> => {
    if (!assistantConfigGuid) {
      GenericExceptionHandlers.ArgumentNullException('assistantConfigGuid');
    }
    if (!chatRequest) {
      GenericExceptionHandlers.ArgumentNullException('chatRequest');
    }
    if (typeof chatRequest.Stream !== 'boolean') {
      GenericExceptionHandlers.ArgumentNullException('chatRequest.stream');
    }

    this.log(SeverityEnum.Debug, `${this.config.header} request body: \n${JSON.stringify(chatRequest)}`);

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/chat/${assistantConfigGuid}`;
    if (chatRequest.Stream) {
      try {
        const request = superagent
          .post(url)
          .send(chatRequest)
          .set('Content-Type', 'application/json')
          .on('error', (error) => {
            this.log(SeverityEnum.Warn, `${this.config.header}Error processing RAG request:`);
          })
          .pipe(this._createStreamParser(onToken));

        if (cancelToken) {
          cancelToken.abort = () => {
            request.destroy();
            this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
          };
        }
      } catch (error) {
        this.log(SeverityEnum.Error, `${this.config.header} Error processing RAG request:`);
        return []; // Return an empty array in case of error
      }
    } else {
      return this.create(url, chatRequest, cancelToken);
    }
  };

  /**
   * Process a chat request.
   * @param {ChatRequest} chatRequest - Configuration for generating a response to a single question.
   * @param {OnToken} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortSignal} cancelToken - Optional cancellation token to cancel the request if needed.
   * @returns {Promise<any>} - A promise resolving to an array of tokens.
   * @throws {MethodError}
   */
  chatOnly = async (chatRequest: ChatRequest, onToken: OnToken, cancelToken: AbortController): Promise<any> => {
    if (!chatRequest) GenericExceptionHandlers.ArgumentNullException('question');

    this.log(SeverityEnum.Debug, `${this.config.header} request body: \n${JSON.stringify(chatRequest)}`);

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/chat/completions`;
    if (chatRequest.Stream) {
      try {
        const request = superagent
          .post(url)
          .send(chatRequest)
          .set('Content-Type', 'application/json')
          .on('error', (error) => {
            this.log(SeverityEnum.Warn, `${this.config.header}Error processing RAG request:`);
          })
          .pipe(this._createStreamParser(onToken));

        if (cancelToken) {
          cancelToken.abort = () => {
            request.destroy();
            this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
          };
        }
      } catch (error) {
        this.log(SeverityEnum.Error, `${this.config.header} Error processing RAG request:`);
        return []; // Return an empty array in case of error
      }
    } else {
      return this.postCreate(url, chatRequest, cancelToken);
    }
  };

  //endregion Chat

  /**
   * Create a writable stream to parse SSE data.
   * @private
   * @param {OnToken} onToken - Callback to handle tokens as they are emitted.
   * @returns {Writable} - A writable stream for parsing.
   */
  private _createStreamParser(onToken: OnToken) {
    return new Writable({
      write: (chunk: any, encoding: any, callback: any) => {
        const dataString = chunk.toString();
        const lines = dataString.split('\n');
        lines.forEach((line: any) => {
          if (line.startsWith('data:')) {
            const jsonString = line.substring(5).trim();
            const token = this._extractToken(jsonString);
            if (token) {
              onToken(token);
            }
          }
        });
        callback();
      },
      final(callback: any) {
        callback(); // Ensure stream is finalized properly
      },
    });
  }

  /**
   * Extract a token from JSON string.
   * @private
   * @param {string} json - The JSON string.
   * @returns {string|null} - The extracted token or null if not found.
   */
  _extractToken(json: any) {
    try {
      const obj = JSON.parse(json);
      return obj.token || null;
    } catch (error) {
      return null;
    }
  }
}
