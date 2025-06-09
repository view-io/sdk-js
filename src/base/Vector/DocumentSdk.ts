import ViewSdkBase from '../ViewSDKBase';
import { SdkConfiguration } from '../SdkConfiguration';
import { EmbeddingDocument } from '../../types';
import GenericExceptionHandlers from '../../exception/GenericExceptionHandlers';

export default class DocumentSdk extends ViewSdkBase {
  /**
   * Constructs a new DocumentSdk.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  //region Documents

  /**
   * Write a document.
   * @param {EmbeddingDocument} doc - Document to write.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingDocument>} A promise resolving to the EmbeddingDocument object.
   * @throws {MethodError} If the document is null.
   */
  write = async (doc: EmbeddingDocument, cancelToken?: AbortController): Promise<EmbeddingDocument> => {
    if (!doc) {
      GenericExceptionHandlers.ArgumentNullException('doc');
    }
    const vectorRepositoryGUID = doc.VectorRepositoryGUID;
    if (!vectorRepositoryGUID) {
      throw new Error('VectorRepositoryGUID is not set or is undefined.');
    }
    const url =
      this.config.endpoint +
      '/v1.0/tenants/' +
      this.config.tenantGuid +
      '/vectorrepositories/' +
      vectorRepositoryGUID +
      '/documents';
    return await this.createResource(url, doc, cancelToken);
  };

  /**
   * Read a document.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the Document.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<EmbeddingDocument>} A promise resolving to the EmbeddingDocument object.
   * @throws {MethodError} If the documentGuid is null or empty.
   */
  read = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    cancelToken?: AbortController
  ): Promise<EmbeddingDocument> => {
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
      documentGuid;
    return await this.retrieveResource(url, cancelToken);
  };

  /**
   * Delete a document.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise that resolves when the document is deleted.
   * @throws {MethodError} If the documentGuid is null or empty.
   */
  delete = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    cancelToken?: AbortController
  ): Promise<boolean> => {
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
      documentGuid;
    return await this.deleteResource(url, cancelToken);
  };

  /**
   * Document exists.
   * @param {string} vectorRepositoryGuid - GUID for the vector repository.
   * @param {string} documentGuid - GUID for the document.
   * @param {AbortController} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to a void indicating whether the document exists.
   * @throws {MethodError} If the documentGuid is null or empty.
   */
  exists = async (
    vectorRepositoryGuid: string,
    documentGuid: string,
    cancelToken?: AbortController
  ): Promise<boolean> => {
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
      documentGuid;
    return await this.existsResource(url, cancelToken);
  };

  //endregion
}
