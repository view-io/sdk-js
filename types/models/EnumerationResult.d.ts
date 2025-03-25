export default class EnumerationResult {
    /**
     * @param {Object} data - The data to be used to create the EnumerationResult object.
     * @param {boolean} data.Success - Indicates if the statistics operation was successful.
     * @param {Object} data.Timestamp - Start and end timestamps for the enumeration.
     * @param {number} data.MaxResults - Maximum number of results retrieved.
     * @param {number} data.IterationsRequired - Iterations required for the enumeration.
     * @param {boolean} data.EndOfResults - Indicates if the end of results has been reached.
     * @param {number} data.TotalRecords - Total number of records in the enumeration.
     * @param {number} data.RecordsRemaining - Number of candidate records remaining in the enumeration.
     * @param {Array<any>} data.Objects - Metadata for the retrieved objects.
     * @param {Array<any>} data.SharedPrefixes - Shared prefixes for the enumeration.
     * @param {Object} data.Statistics - Statistics for the enumeration.
     */
    constructor(data?: {
        Success: boolean;
        Timestamp: any;
        MaxResults: number;
        IterationsRequired: number;
        EndOfResults: boolean;
        TotalRecords: number;
        RecordsRemaining: number;
        Objects: Array<any>;
        SharedPrefixes: Array<any>;
        Statistics: any;
    });
    success: boolean;
    timestamp: {
        start: any;
        totalMs: any;
        messages: any;
    };
    maxResults: number;
    iterationsRequired: number;
    objects: any[];
    endOfResults: boolean;
    recordsRemaining: number;
    totalRecords: number;
    sharedPrefixes: any[];
    statistics: any;
}
