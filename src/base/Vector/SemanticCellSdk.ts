import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';
import { SemanticCell } from '../../types';

export default class SemanticCellSdk extends ViewSdkBase {
  /**
   * Constructs a new SemanticCellSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  //region Semantic Cells

  /**
   * Get semantic cells.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SemanticCell[]>} A promise resolving to the SemanticCell array.
   * @throws {MethodError} If the documentGuid is null or empty.
   */
  readAll = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    cancelToken?: AbortController
  ): Promise<SemanticCell[]> => {
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
      '/cells';
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Get a semantic cell.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SemanticCell>} A promise resolving to the SemanticCell.
   */
  read = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    semanticCellGuid: string,
    cancelToken?: AbortController
  ): Promise<SemanticCell> => {
    if (!documentGuid) {
      GenericExceptionHandlers.ArgumentNullException('documentGuid');
    }
    if (!vectorRepositoryGuid) {
      GenericExceptionHandlers.ArgumentNullException('vectorRepositoryGuid');
    }
    if (!semanticCellGuid) {
      GenericExceptionHandlers.ArgumentNullException('semanticCellGuid');
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
      semanticCellGuid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Semantic cell exists.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise resolving to a void indicating whether the semantic cell exists.
   * @throws {MethodError} If the semanticCellGuid is null or empty.
   */
  exists = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    semanticCellGuid: string,
    cancelToken?: AbortController
  ): Promise<boolean> => {
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
      semanticCellGuid;
    return await this.existsResource(url, cancelToken);
  };
  //endregion
}
