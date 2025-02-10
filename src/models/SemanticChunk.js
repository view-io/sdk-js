import { v4 as uuidV4 } from 'uuid';
import HashHelper from '../utils/HashHelper';

export default class SemanticChunk {
  /**
   * @param {Object} params Parameters for the SemanticChunk.
   * @param {number} params.Position - The position of the chunk.
   * @param {number} params.Start - The start position of the chunk.
   * @param {number} params.End - The end position of the chunk.
   * @param {string} params.Content - The content of the chunk.
   * @param {Array<number>} [params.Embeddings=[]] - List of float values representing embeddings.
   */
  constructor({ Position = 0, Start = 0, End = 0, Content = '', Embeddings = [] }) {
    this.GUID = uuidV4();
    this.MD5Hash = null;
    this.SHA1Hash = null;
    this.SHA256Hash = null;
    this.Position = Position;
    this.Start = Start;
    this.End = End;
    this.Length = 0;
    this.Content = Content;
    this.Embeddings = Embeddings || [];

    if (Content) {
      this.Length = Content.length;
      this.MD5Hash = HashHelper.MD5Hash(Content);
      this.SHA1Hash = HashHelper.SHA1Hash(Content);
      this.SHA256Hash = HashHelper.SHA256Hash(Content);
    }
  }

  /**
   * Get the position of the chunk.
   * @returns {number} Position of the chunk.
   */
  get Position() {
    return this._Position;
  }

  set Position(value) {
    if (value < 0) throw new RangeError('Position must be zero or greater.');
    this._Position = value;
  }

  /**
   * Get the start position of the chunk.
   * @returns {number} Start position of the chunk.
   */
  get Start() {
    return this._Start;
  }

  set Start(value) {
    if (value < 0) throw new RangeError('Start must be zero or greater.');
    this._Start = value;
  }

  /**
   * Get the end position of the chunk.
   * @returns {number} End position of the chunk.
   */
  get End() {
    return this._End;
  }

  set End(value) {
    if (value < 0) throw new RangeError('End must be zero or greater.');
    this._End = value;
  }

  /**
   * Get the length of the content.
   * @returns {number} Length of the content.
   */
  get Length() {
    return this._Length;
  }

  set Length(value) {
    if (value < 0) throw new RangeError('Length must be zero or greater.');
    this._Length = value;
  }

  /**
   * Get the embeddings associated with the chunk.
   * @returns {Array<number>} Embeddings of the chunk.
   */
  get Embeddings() {
    return this._Embeddings;
  }

  set Embeddings(value) {
    if (value === null) {
      value = [];
    }
    this._Embeddings = value;
  }
}
