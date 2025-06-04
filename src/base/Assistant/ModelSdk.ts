import { SeverityEnum } from '../../enums/SeverityEnum';
import { SdkConfiguration } from '../SdkConfiguration';
import ViewSdkBase from '../ViewSDKBase';
import LoggerInstance from '../../utils/Logger';
import superagent from 'superagent';
import { ApiErrorResponse, ModelInformation, ModelRequest } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { Writable } from 'stream';

export class ModelSdk extends ViewSdkBase {
  /**
   * Constructs a new ModelSdk instance.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Model
  /**
   *Retrieve a model.
   *
   * @param {ModelRequest} model - Information about the assistant chat request.
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @param {AbortController} [cancelToken] - Optional. The cancellation token to cancel the request if needed.
   */
  retrieveModel(model: any, onToken: Function = (token: string) => {}, cancelToken: AbortController) {
    if (!model) {
      GenericExceptionHandlers.ArgumentNullException('model');
    }

    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/models/pull`;
    const json = JSON.stringify(model);

    this.log(SeverityEnum.Debug, `${this.config.header} request body: \n${json}`);

    try {
      const request = superagent
        .post(url)
        .send(model)
        .set('Content-Type', 'application/json')
        .on('error', (error) => {
          this.log(SeverityEnum.Warn, `${this.config.header} Error processing chat request: ${error}`);
        })
        .pipe(this._createStreamParser(onToken));

      if (cancelToken) {
        cancelToken.abort = () => {
          request.destroy();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
    } catch (error) {
      this.log(SeverityEnum.Error, `${this.config.header} Error processing RAG request: ${error}`);
      return []; // Return an empty array in case of error
    }
  }

  /**
   *Delete a model.
   *
   * @param {ModelRequest} model - Information about the assistant chat request.
   * @param {AbortController} [cancelToken] - Optional. The cancellation token to cancel the request if needed.
   * @returns {Promise<boolean>} A promise resolving to a boolean value.
   * @throws {ApiErrorResponse} If the `model` is null or empty.
   */
  deleteModel = async (model: ModelRequest, cancelToken?: AbortController) => {
    if (!model) {
      GenericExceptionHandlers.ArgumentNullException('model');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/models/delete`;
    return await this.delete(url, cancelToken);
  };

  /**
   *Retrieve model list.
   *
   * @param {ModelRequest} model - The model configuration.
   * @param {AbortController} [cancelToken] - Optional. The cancellation token to cancel the request if needed.
   * @returns {Promise<Array<{ModelName: string,  ModelFamily: string, ParameterSize: string}>>} A promise resolving to an array of model names
   * @throws {ApiErrorResponse} If the `model` is null or empty.
   */
  retrieveLocalModels = async (model: ModelRequest, cancelToken: AbortController) => {
    if (!model) {
      GenericExceptionHandlers.ArgumentNullException('model');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/models`;
    return await this.postCreate(url, model, cancelToken);
  };

  /**
   *Preload Model.
   *
   * @param {ModelRequest} model - The model configuration.
   * @param {AbortController} cancelToken - Optional. The cancellation token to cancel the request if needed.
   * @returns {Promise<ModelRequest>} A promise resolving to a model load response
   * @throws {ApiErrorResponse} If the `model` is null or empty.
   */
  loadUnloadModel = async (model: ModelRequest, cancelToken: AbortController) => {
    if (!model) {
      GenericExceptionHandlers.ArgumentNullException('model');
    }
    const url = `${this.config.endpoint}/v1.0/tenants/${this.config.tenantGuid}/assistant/models/load`;
    return await this.postCreate(url, model, cancelToken);
  };

  //endregion Model

  /**
   * Create a writable stream to parse SSE data.
   * @private
   * @param {function} onToken - Callback to handle tokens as they are emitted.
   * @returns {Writable} - A writable stream for parsing.
   */
  private _createStreamParser(onToken: Function) {
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
