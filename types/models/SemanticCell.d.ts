export default class SemanticCell {
    /**
     * Count the number of embeddings in a list of semantic cells.
     * @param {Array[]} cells - List of semantic cells.
     * @returns {number} The number of embeddings.
     */
    static CountEmbeddings(cells: any[][]): number;
    /**
     * Count the number of semantic cells in a list of semantic cells.
     * @param {Array[]} cells - List of semantic cells.
     * @returns {number} The number of semantic cells.
     */
    static CountSemanticCells(cells: any[][]): number;
    /**
     * Count the number of semantic chunks in a list of semantic cells.
     * @param {Array[]} cells - List of semantic cells.
     * @returns {number} The number of chunks.
     */
    static CountSemanticChunks(cells: any[][]): number;
    /**
     * Count the number of bytes in chunks within a list of semantic cells.
     * @param {Array[]} cells - List of semantic cells.
     * @returns {number} The number of bytes.
     */
    static CountBytes(cells: any[][]): number;
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
    constructor({ GUID, CellType, MD5Hash, SHA1Hash, SHA256Hash, Position, Length, Chunks, Children, }?: {
        GUID?: string;
        MD5Hash?: string;
        SHA1Hash?: string;
        SHA256Hash?: string;
        Position?: number;
        Length?: number;
        Chunks?: any[][];
        Children?: any[][];
    });
    GUID: string;
    cellType: any;
    MD5Hash: string;
    SHA1Hash: string;
    SHA256Hash: string;
    _Position: number;
    _Length: number;
    _Chunks: any[][];
    _Children: any[][];
    set Position(value: number);
    /**
     * Gets or sets the position of the semantic cell.
     * @returns {number} The position of the semantic cell.
     */
    get Position(): number;
    set Length(value: number);
    /**
     * Gets or sets the length of the semantic cell.
     * @returns {number} The length of the semantic cell.
     */
    get Length(): number;
    set Chunks(value: any[][]);
    /**
     * Gets or sets the chunks contained within the semantic cell.
     * @returns {Array[]} List of chunks.
     */
    get Chunks(): any[][];
    set Children(value: any[][]);
    /**
     * Gets or sets the children of the semantic cell.
     * @returns {Array[]} List of child semantic cells.
     */
    get Children(): any[][];
    /**
     * Count the number of semantic cells in this semantic cell.
     * @returns {number} The number of semantic cells.
     */
    CountSemanticCells(): number;
    /**
     * Count the number of embeddings contained within the semantic cell.
     * @returns {number} The number of embeddings.
     */
    CountEmbeddings(): number;
    /**
     * Count the number of bytes contained within chunks within the semantic cell.
     * @returns {number} The number of bytes.
     */
    CountBytes(): number;
}
