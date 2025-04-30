/**
 * Director service.
 * @module base/ViewDirectorSdk
 * @version 0.1.0
 */
export default class ViewDirectorSdk extends ViewSdkBase {
    Header: string;
    /**
     * Generate Embedding Director.
     * @param {object} [params] - parameters.
     * @param {string} [params.Model] - Embedding model.
     * @param {string} [params.ApiKey] - API key.
     * @param {string[]} [params.Contents] - List of text Contents.
     * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
     * @returns {Promise<DirectorEmbeddingResponse|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    generateEmbedding: (params?: {
        Model?: string;
        ApiKey?: string;
        Contents?: string[];
    }, cancelToken?: object) => Promise<DirectorEmbeddingResponse | null | ApiErrorResponse>;
    /**
     * Retrieve Connections.
     * @returns {Promise<Array<Connection>|null|ApiErrorResponse>} A promise resolving to the created Trigger object or null if creation fails.
     * @throws {Error} If the trigger is null or invalid.
     */
    retrieveConnections: (cancelToken: any) => Promise<Array<Connection> | null | ApiErrorResponse>;
}
import ViewSdkBase from '../ViewSDKBase';
import DirectorEmbeddingResponse from '../../models/DirectorEmbeddingResponse';
