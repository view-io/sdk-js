export default class SemanticChunk {
  /**
   * @param {Object} params Parameters for the SemanticChunk.
   * @param {string} [params.GUID] - The GUID of the semantic chunk.
   * @param {string} [params.MD5Hash] - The MD5 hash of the semantic chunk.
   * @param {string} [params.SHA1Hash] - The SHA1 hash of the semantic chunk.
   * @param {string} [params.SHA256Hash] - The SHA256 hash of the semantic chunk.
   * @param {number} [params.Position] - The position of the chunk.
   * @param {number} [params.Start] - The start position of the chunk.
   * @param {number} [params.End] - The end position of the chunk.
   * @param {string} [params.Content] - The content of the chunk.
   * @param {number} [params.Length] - The length of the chunk.
   * @param {Array<number>} [params.Embeddings=[]] - List of float values representing embeddings.
   */
  constructor({ GUID, MD5Hash, SHA1Hash, SHA256Hash, Position, Start, End, Content, Length, Embeddings }) {
    this.GUID = GUID;
    this.MD5Hash = MD5Hash;
    this.SHA1Hash = SHA1Hash;
    this.SHA256Hash = SHA256Hash;
    this.Position = Position;
    this.Start = Start;
    this.End = End;
    this.Length = Length;
    this.Content = Content;
    this.Embeddings = Embeddings || [];
  }
}
