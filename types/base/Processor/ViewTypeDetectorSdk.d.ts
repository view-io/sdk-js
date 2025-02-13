/**
 * View Type Detector SDK.
 * @module base/ViewTypeDetectorSdk
 * @version 0.1.0
 */
export default class ViewTypeDetectorSdk extends ViewSdkBase {
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
    process(data: Uint8Array, contentType?: string, cancelToken?: object): Promise<TypeResult | null>;
    /**
     * Determine a document type.
     * @param {object} data - The data to send in the request body.
     * @param
     * @param {object} [cancelToken] - Optional cancel token to abort the request.
     * @returns {Promise<TypeResult|null>} The result of the document type detection.
     */
    typeDetector: (document: any, cancelToken?: object) => Promise<TypeResult | null>;
}
import ViewSdkBase from '../ViewSDKBase';
import TypeResult from '../../models/TypeResult';
