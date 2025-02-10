import ViewSdkBase from '../ViewSDKBase';
import { SeverityEnum } from '../../enums/SeverityEnum';
import TypeResult from '../../models/TypeResult';
import { DocumentTypeEnum } from '../../enums/DocumentTypeEnum';
import { LoggerInstance } from '../../utils/Logger';
import { GenExceptionHandlersInstance } from '../../exception/GenericExcerptionHandelrs';
/**
 * View Type Detector SDK.
 * @module base/ViewTypeDetectorSdk
 * @version 0.1.0
 */
export default class ViewTypeDetectorSdk extends ViewSdkBase {
  /**
   * Constructs a new ViewTypeDetectorSdk.
   * @alias module:base/ViewTypeDetectorSdk
   * @class
   * @param {string} tenantGuid
   * @param {string} accessKey
   * @param {string} endpoint
   */
  constructor(tenantGuid, accessKey, endpoint) {
    super(tenantGuid, accessKey, endpoint);
  }
  /**
   * @constructor
   * @param {string} guid
   * @param {CancellationToken} token
   * @param {string} endpoint
   */

  /**
   * Determine a document type.
   * @param {Uint8Array} data - The data to send in the request body.
   * @param {string} [contentType="application/octet-stream"] - The content type of the document.
   * @param {object} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<TypeResult|null>} The result of the document type detection.
   */
  async process(data, contentType = 'application/octet-stream', cancelToken = null) {
    if (!data || data.length < 1) {
      throw new Error('No data supplied for content type detection.');
    }

    const url = this.endpoint;

    // Log the request if required
    if (this.logRequests) {
      LoggerInstance.log(SeverityEnum.Debug + 'request: ' + this.arrayBufferToString(data));
    }

    try {
      const response = await this.postContentType(url, data, TypeResult, contentType, cancelToken);

      if (response) {
        if (this.logResponses) {
          LoggerInstance.log(SeverityEnum.Debug + 'response body: ' + JSON.stringify(response));
        }
        return response;
      } else {
        LoggerInstance.log(SeverityEnum.Warn + 'No response from ' + url);
        return null;
      }
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Warn + 'Exception while interacting with ' + url + ': ' + error);

      // Return a default TypeResult if an error occurs
      return {
        mimeType: 'application/octet-stream',
        extension: null,
        type: DocumentTypeEnum.Unknown,
      };
    }
  }

  /**
   * Determine a document type.
   * @param {object} data - The data to send in the request body.
   * @param
   * @param {object} [cancelToken] - Optional cancel token to abort the request.
   * @returns {Promise<TypeResult|null>} The result of the document type detection.
   */
  typeDetector = async (document, cancelToken) => {
    if (!document) {
      GenExceptionHandlersInstance.ArgumentNullException('document');
    }

    const url = this.endpoint + '/v1.0/tenants/' + this.tenantGuid + '/processing/typedetection';
    return await this.post(url, document, TypeResult, cancelToken);
  };
}
