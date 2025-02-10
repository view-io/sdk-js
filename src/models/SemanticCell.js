import { v4 as uuidV4 } from 'uuid';

export default class SemanticCell {
  /**
   * @param {Object} params - Parameters to initialize the semantic cell.
   * @param {string} [params.GUID] - Unique identifier for the semantic cell (automatically generated if not provided).
   * @param {string} [params.MD5Hash] - MD5 hash of the content.
   * @param {string} [params.SHA1Hash] - SHA1 hash of the content.
   * @param {string} [params.SHA256Hash] - SHA256 hash of the content.
   * @param {number} [params.Position] - Position of the semantic cell.
   * @param {number} [params.Length] - Length of the semantic cell.
   * @param {Array[]} [params.Chunks] - List of chunks contained in the semantic cell.
   * @param {Array[]} [params.Children] - List of child semantic cells.
   */
  constructor({
    GUID = uuidV4(),
    CellType = 'Text', // Default to SemanticCellTypeEnum.Text
    MD5Hash = '',
    SHA1Hash = null,
    SHA256Hash = null,
    Position = 0,
    Length = 0,
    Chunks = [],
    Children = [],
  } = {}) {
    this.GUID = GUID;
    this.cellType = CellType;
    this.MD5Hash = MD5Hash;
    this.SHA1Hash = SHA1Hash;
    this.SHA256Hash = SHA256Hash;
    this._Position = Position;
    this._Length = Length;
    this._Chunks = Chunks;
    this._Children = Children;
  }

  /**
   * Gets or sets the position of the semantic cell.
   * @returns {number} The position of the semantic cell.
   */
  get Position() {
    return this._Position;
  }

  set Position(value) {
    if (value < 0) throw new RangeError('Position cannot be negative');
    this._Position = value;
  }

  /**
   * Gets or sets the length of the semantic cell.
   * @returns {number} The length of the semantic cell.
   */
  get Length() {
    return this._Length;
  }

  set Length(value) {
    if (value < 0) throw new RangeError('Length cannot be negative');
    this._Length = value;
  }

  /**
   * Gets or sets the chunks contained within the semantic cell.
   * @returns {Array[]} List of chunks.
   */
  get Chunks() {
    return this._Chunks;
  }

  set Chunks(value) {
    this._Chunks = value || [];
  }

  /**
   * Gets or sets the children of the semantic cell.
   * @returns {Array[]} List of child semantic cells.
   */
  get Children() {
    return this._Children;
  }

  set Children(value) {
    this._Children = value || [];
  }

  /**
   * Count the number of embeddings in a list of semantic cells.
   * @param {Array[]} cells - List of semantic cells.
   * @returns {number} The number of embeddings.
   */
  static CountEmbeddings(cells) {
    let ret = 0;

    if (cells && cells.length > 0) {
      cells.forEach((cell) => {
        ret += cell.CountEmbeddings();
      });
    }

    return ret;
  }

  /**
   * Count the number of semantic cells in a list of semantic cells.
   * @param {Array[]} cells - List of semantic cells.
   * @returns {number} The number of semantic cells.
   */
  static CountSemanticCells(cells) {
    let ret = 0;

    if (cells && cells.length > 0) {
      cells.forEach((cell) => {
        ret += 1;
        if (cell.Children) {
          ret += SemanticCell.CountSemanticCells(cell.Children);
        }
      });
    }

    return ret;
  }

  /**
   * Count the number of semantic chunks in a list of semantic cells.
   * @param {Array[]} cells - List of semantic cells.
   * @returns {number} The number of chunks.
   */
  static CountSemanticChunks(cells) {
    let ret = 0;

    if (cells && cells.length > 0) {
      cells.forEach((cell) => {
        if (cell.Chunks) ret += cell.Chunks.length;
        if (cell.Children) {
          ret += SemanticCell.CountSemanticChunks(cell.Children);
        }
      });
    }

    return ret;
  }

  /**
   * Count the number of bytes in chunks within a list of semantic cells.
   * @param {Array[]} cells - List of semantic cells.
   * @returns {number} The number of bytes.
   */
  static CountBytes(cells) {
    let ret = 0;

    if (cells && cells.length > 0) {
      cells.forEach((cell) => {
        ret += cell.CountBytes();
      });
    }

    return ret;
  }

  /**
   * Count the number of semantic cells in this semantic cell.
   * @returns {number} The number of semantic cells.
   */
  CountSemanticCells() {
    let ret = 1;

    if (this.Children && this.Children.length > 0) {
      this.Children.forEach((child) => {
        ret += child.CountSemanticCells();
      });
    }

    return ret;
  }

  /**
   * Count the number of embeddings contained within the semantic cell.
   * @returns {number} The number of embeddings.
   */
  CountEmbeddings() {
    let ret = 0;

    if (this.Chunks && this.Chunks.length > 0) {
      this.Chunks.forEach((chunk) => {
        ret += chunk.Embeddings.length;
      });
    }

    if (this.Children && this.Children.length > 0) {
      this.Children.forEach((childCell) => {
        ret += childCell.CountEmbeddings();
      });
    }

    return ret;
  }

  /**
   * Count the number of bytes contained within chunks within the semantic cell.
   * @returns {number} The number of bytes.
   */
  CountBytes() {
    let ret = 0;

    if (this.Chunks && this.Chunks.length > 0) {
      this.Chunks.forEach((chunk) => {
        if (chunk.Content) ret += chunk.Content.length;
      });
    }

    if (this.Children && this.Children.length > 0) {
      this.Children.forEach((child) => {
        ret += child.CountBytes();
      });
    }

    return ret;
  }
}
