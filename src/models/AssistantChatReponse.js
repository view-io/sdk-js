/**
 * Represents an answer with supporting source documents and context.
 */
export default class AssistantChatResponse {
  /**
   * @param {Object} data
   * @param {string} data.response - The assistant's answer or reply.
   * @param {Array<Object>} data.source_documents - List of source documents used for context.
   * @param {string} data.context - Rendered context block as a string.
   * @param {any} data.CitationMap - Optional citation map object (can be null).
   */
  constructor({ response, source_documents, context, CitationMap }) {
    this.response = response;
    this.source_documents = source_documents.map;
    this.context = context;
    this.CitationMap = CitationMap;
  }
}
