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
    constructor({ GUID, CellType, MD5Hash, SHA1Hash, SHA256Hash, Position, Length, Chunks, Children }: {
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
    Position: number;
    Length: number;
    Chunks: any[][];
    Children: any[][];
}
