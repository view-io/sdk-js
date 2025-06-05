import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

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
   * @throws {ApiErrorResponse} If the documentGuid is null or empty.
   */
  retrieveSemanticCells = async (vectorRepositoryGuid: string, documentGuid: string, cancelToken: AbortController) => {
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
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Get a semantic cell.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<SemanticCell>} A promise resolving to the SemanticCell.
   */
  retrieveSemanticCell = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    semanticCellGuid: string,
    cancelToken: AbortController
  ) => {
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
    return await this.retrieve(url, cancelToken);
  };

  /**
   * Semantic cell exists.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {string} semanticCellGuid - GUID for the semantic cell.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<void>} A promise resolving to a void indicating whether the semantic cell exists.
   * @throws {ApiErrorResponse} If the semanticCellGuid is null or empty.
   */
  semanticCellExists = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    semanticCellGuid: string,
    cancelToken: AbortController
  ) => {
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
    return await this.exists(url, cancelToken);
  };
  //endregion
}
