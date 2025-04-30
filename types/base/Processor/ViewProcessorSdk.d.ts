export default class ViewProcessorSdk extends ViewSdkBase {
    /**
     * Process a document. This variant is used by the storage server.
     * @param {object} payload - The payload to be processed.
     * @param {AbortSignal} token - Cancellation token.
     */
    processingPipeline(payload: object, token?: AbortSignal): Promise<any>;
    /**
     * Cleanup a document.
     * @param {object} payload - The payload to be processed.
     * @param {AbortSignal} token - Cancellation token.
     */
    cleanupPipeline(payload: object, token?: AbortSignal): Promise<any>;
    /**
     * Determine a document type.
     * @param {object} data - The data to send in the request body.
     * @param {object} [cancelToken] - Optional cancel token to abort the request.
     * @returns {Promise<TypeResult|null>} The result of the document type detection.
     */
    typeDetection: (data: object, cancelToken?: object) => Promise<TypeResult | null>;
    /**
     * Extract semantic cells from a document.
     * @param {object} data - The data to send in the request body.
     * @param {object} [cancelToken] - Optional cancel token to abort the request.
     * @returns {Promise<SemanticCellResponse|null>} The result of the semantic cell extraction.
     */
    extractSemanticCells: (data: object, cancelToken?: object) => Promise<SemanticCellResponse | null>;
    /**
     * Generate a UDR from a document.
     * @param {object} data - The data to send in the request body.
     * @param {object} [cancelToken] - Optional cancel token to abort the request.
     * @returns {Promise<UdrResponse|null>} The result of the UDR generation.
     */
    generateUdr: (data: object, cancelToken?: object) => Promise<UdrResponse | null>;
    /**
     * Generate Lexi embeddings from a document.
     * @param {object} data - The data to send in the request body.
     * @param {object} [cancelToken] - Optional cancel token to abort the request.
     * @returns {Promise<LexiEmbeddingsResponse|null>} The result of the Lexi embeddings generation.
     */
    generateLexiEmbeddings: (data: object, cancelToken?: object) => Promise<LexiEmbeddingsResponse | null>;
}
import ViewSdkBase from '../ViewSDKBase';
import TypeResult from '../../models/TypeResult';
import SemanticCellResponse from '../../models/SemanticCellResponse';
import LexiEmbeddingsResponse from '../../models/LexiEmbeddingsResponse';
