export default class GraphResult {
    /**
     * @param {Object} graphResult Information about the graph result.
     * @param {boolean} graphResult.Success - Indicates success or failure (default is true).
     * @param {Date} graphResult.Timestamp - Timestamp object (default is a new Timestamp).
     * @param {Graph} graphResult.Graph - The graph object (optional).
     * @param {Object} graphResult.Tenant - Tenant node object (optional).
     * @param {Object} graphResult.StoragePool - Storage pool node object (optional).
     * @param {Object} graphResult.Bucket - Bucket node object (optional).
     * @param {Object} graphResult.Object - Object node object (optional).
     * @param {Object} graphResult.Collection - Collection node object (optional).
     * @param {Object} graphResult.SourceDocument - Source document node object (optional).
     * @param {Object} graphResult.DataRepository - Data repository node object (optional).
     * @param {Array} graphResult.SemanticCells - List of semantic cells (optional).
     * @param {Array} graphResult.SemanticChunks - List of semantic chunks (optional).
     * @param {Array} graphResult.Edges - List of graph edges (optional).
     */
    constructor(graphResult?: {
        Success: boolean;
        Timestamp: Date;
        Graph: any;
        Tenant: any;
        StoragePool: any;
        Bucket: any;
        Object: any;
        Collection: any;
        SourceDocument: any;
        DataRepository: any;
        SemanticCells: any[];
        SemanticChunks: any[];
        Edges: any[];
    });
    Success: boolean;
    Timestamp: Date | TimeStamp;
    Graph: any;
    Tenant: any;
    StoragePool: any;
    Bucket: any;
    Object: any;
    Collection: any;
    SourceDocument: any;
    DataRepository: any;
    SemanticCells: any[];
    SemanticChunks: any[];
    Edges: any[];
}
import TimeStamp from '../utils/TimeStamp';
