export default class SemanticChunk {
    /**
     * @param {Object} params Parameters for the SemanticChunk.
     * @param {number} params.Position - The position of the chunk.
     * @param {number} params.Start - The start position of the chunk.
     * @param {number} params.End - The end position of the chunk.
     * @param {string} params.Content - The content of the chunk.
     * @param {Array<number>} [params.Embeddings=[]] - List of float values representing embeddings.
     */
    constructor({ Position, Start, End, Content, Embeddings }: {
        Position: number;
        Start: number;
        End: number;
        Content: string;
        Embeddings?: Array<number>;
    });
    GUID: any;
    MD5Hash: string;
    SHA1Hash: string;
    SHA256Hash: string;
    set Position(value: number);
    /**
     * Get the position of the chunk.
     * @returns {number} Position of the chunk.
     */
    get Position(): number;
    set Start(value: number);
    /**
     * Get the start position of the chunk.
     * @returns {number} Start position of the chunk.
     */
    get Start(): number;
    set End(value: number);
    /**
     * Get the end position of the chunk.
     * @returns {number} End position of the chunk.
     */
    get End(): number;
    set Length(value: number);
    /**
     * Get the length of the content.
     * @returns {number} Length of the content.
     */
    get Length(): number;
    Content: string;
    set Embeddings(value: Array<number>);
    /**
     * Get the embeddings associated with the chunk.
     * @returns {Array<number>} Embeddings of the chunk.
     */
    get Embeddings(): Array<number>;
    _Position: number;
    _Start: number;
    _End: number;
    _Length: number;
    _Embeddings: number[];
}
