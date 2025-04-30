export default class ProcessorResponse {
    /**
     * Constructs a new instance of ProcessorResponse.
     * @param {object} params - The parameters for the ProcessorResponse.
     * @param {string} params.GUID - The GUID of the processor response.
     * @param {boolean} params.Success - Whether the processing was successful.
     * @param {boolean} params.Async - Whether the processing was asynchronous.
     * @param {object} params.Timestamp - Timing information about the processing.
     * @param {string} params.Timestamp.Start - The UTC start time of processing.
     * @param {number} params.Timestamp.TotalMs - Total processing time in milliseconds.
     * @param {object} params.Timestamp.Messages - Any timing-related messages.
     */
    constructor({ GUID, Success, Async, Timestamp }: {
        GUID: string;
        Success: boolean;
        Async: boolean;
        Timestamp: {
            Start: string;
            TotalMs: number;
            Messages: object;
        };
    });
    GUID: string;
    Success: boolean;
    Async: boolean;
    Timestamp: {
        Start: string;
        TotalMs: number;
        Messages: any;
    };
}
