declare class OllamaModelResult {
    /**
     * @param {Object} resultData - Parameters for the OllamaModelResult instance.
     * @param {Array<OllamaModelResult.OllamaModelDetail>} resultData.Models - List of model details.
     */
    constructor(resultData?: {
        Models: Array<{
            Name: string;
            Model: string;
            LastModifiedUtc: Date;
            Size: number;
            Digest: string;
            Details: any;
        }>;
    });
    Models: {
        Name: string;
        Model: string;
        LastModifiedUtc: Date;
        Size: number;
        Digest: string;
        Details: any;
    }[];
}
declare namespace OllamaModelResult {
    export { OllamaModelDetail };
}
export default OllamaModelResult;
declare class OllamaModelDetail {
    /**
     * @param {Object} detailData - Parameters for the OllamaModelDetail instance.
     * @param {string|null} detailData.Name - The name of the model (default is null).
     * @param {string|null} detailData.Model - The specific model identifier (default is null).
     * @param {Date|null} detailData.LastModifiedUtc - The last modified timestamp in UTC (default is null).
     * @param {number} detailData.Size - The size of the model in bytes (default is 0).
     * @param {string|null} detailData.Digest - The model's digest (default is null).
     * @param {Object|null} detailData.Details - Additional details (default is null).
     */
    constructor(detailData?: {
        Name: string | null;
        Model: string | null;
        LastModifiedUtc: Date | null;
        Size: number;
        Digest: string | null;
        Details: any | null;
    });
    Name: string;
    Model: string;
    LastModifiedUtc: Date;
    Size: number;
    Digest: string;
    Details: any;
}
