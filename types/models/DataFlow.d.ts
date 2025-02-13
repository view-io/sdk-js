/**
 * Data flow, i.e. a collection of steps and paths.
 */
export default class DataFlow {
    /**
     * Constructs a new DataFlow.
     * @param {Object} dataFlow - Information about the data flow.
     * @param {string} dataFlow.GUID - The GUID of the data flow (automatically generated if not provided).
     * @param {string} dataFlow.TenantGUID - The Tenant GUID (automatically generated if not provided).
     * @param {string} dataFlow.TriggerGUID - The trigger GUID (automatically generated if not provided).
     * @param {string} dataFlow.StepGUID - The step GUID (automatically generated if not provided).
     * @param {string} dataFlow.Name - The name of the data flow (default is 'My data flow').
     * @param {string} [dataFlow.Notes] - Optional notes for the data flow.
     * @param {Date} [dataFlow.CreatedUtc] - Optional creation timestamp in UTC (default is current UTC time).
     * @param {number} [dataFlow.LogRetentionDays] - The number of days to retain log entries and files (default is 7).
     * @param {StepMetadata} [dataFlow.Step] - The entry step of the data flow.
     */
    constructor(dataFlow?: {
        GUID: string;
        TenantGUID: string;
        TriggerGUID: string;
        StepGUID: string;
        Name: string;
        Notes?: string;
        CreatedUtc?: Date;
        LogRetentionDays?: number;
        Step?: StepMetadata;
    });
    _LogRetentionDays: number;
    GUID: any;
    TenantGUID: any;
    TriggerGUID: any;
    StepGUID: any;
    Name: string;
    Notes: string;
    CreatedUtc: Date;
    Step: any;
    /**
     * LogRetentionDays setter with validation.
     * @param {number} value - The number of days for log retention.
     * @throws {Error} If the value is less than 0.
     */
    set LogRetentionDays(value: number);
    /**
     * LogRetentionDays getter.
     */
    get LogRetentionDays(): number;
}
