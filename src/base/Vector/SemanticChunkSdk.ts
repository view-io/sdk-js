import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { SemanticChunk } from '../../types';

export default class SemanticChunkSdk extends ViewSdkBase {
  /**
   * Constructs a new SemanticChunkSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  //region Semantic Chunks

  /**
   * Get semantic chunks.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SemanticChunk[]>} A promise resolving to the SemanticChunk array.
   */
  readAll = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    semanticCellGuid: string,
    cancelToken: AbortController
  ): Promise<SemanticChunk[]> => {
    if (!semanticCellGuid) {
      GenericExceptionHandlers.ArgumentNullException('semanticCellGuid');
    }
    if (!documentGuid) {
      GenericExceptionHandlers.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenericExceptionHandlers.ArgumentNullException('vectorRepositoryGuid');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid +
      '/cells/' +
      semanticCellGuid +
      '/chunks';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Get a semantic chunk.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {string} semanticChunkGuid - GUID for the semantic chunk.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SemanticChunk>} A promise resolving to the SemanticChunk.
   */
  read = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    semanticCellGuid: string,
    semanticChunkGuid: string,
    cancelToken: AbortController
  ): Promise<SemanticChunk> => {
    if (!documentGuid) {
      GenericExceptionHandlers.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenericExceptionHandlers.ArgumentNullException('vectorRepositoryGuid');
    }
    if (!semanticCellGuid) {
      GenericExceptionHandlers.ArgumentNullException('semanticCellGuid');
    }
    if (!semanticChunkGuid) {
      GenericExceptionHandlers.ArgumentNullException('semanticChunkGuid');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid +
      '/cells/' +
      semanticCellGuid +
      '/chunks/' +
      semanticChunkGuid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Semantic chunk exists.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {string} semanticChunkGuid - GUID for the semantic chunk.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise resolving to a void indicating whether the semantic chunk exists.
   * @throws {MethodError} If the semanticChunkGuid is null or empty.
   */
  exists = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    semanticCellGuid: string,
    semanticChunkGuid: string,
    cancelToken: AbortController
  ): Promise<boolean> => {
    if (!documentGuid) {
      GenericExceptionHandlers.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenericExceptionHandlers.ArgumentNullException('vectorRepositoryGuid');
    }
    if (!semanticCellGuid) {
      GenericExceptionHandlers.ArgumentNullException('semanticCellGuid');
    }
    if (!semanticChunkGuid) {
      GenericExceptionHandlers.ArgumentNullException('semanticChunkGuid');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGuid +
      '/documents/' +
      documentGuid +
      '/cells/' +
      semanticCellGuid +
      '/chunks/' +
      semanticChunkGuid;
    return await this.existsResource(url, cancelToken);
  };
  //endregion
}
