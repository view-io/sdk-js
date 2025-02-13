/**
 * Data Flow, representing a collection of steps and paths.
 */
export default class DataFlow {
    /**
     * Creates a new DataFlow object.
     *
     * @param {Object} [dataFlow] - Information about the data flow.
     * @param {string} [dataFlow.GUID] - The GUID of the data flow (automatically generated if not provided).
     * @param {string} [dataFlow.TenantGUID] - The Tenant GUID (automatically generated if not provided).
     * @param {string} [dataFlow.TriggerGUID] - The Trigger GUID (automatically generated if not provided).
     * @param {string} [dataFlow.StepGUID] - The Step GUID (automatically generated if not provided).
     * @param {string} [dataFlow.Name='My data flow'] - The name of the data flow (default is 'My data flow').
     * @param {string} [dataFlow.Notes] - Optional notes for the data flow.
     * @param {Date} [dataFlow.CreatedUtc=new Date()] - Optional creation timestamp in UTC (defaults to current UTC time).
     * @param {number} [dataFlow.LogRetentionDays=7] - The number of days to retain log entries and files (default is 7).
     * @param {StepMetadata} [dataFlow.Step=null] - The entry step of the data flow.
     */
    constructor(dataFlow?: {
        GUID?: string;
        TenantGUID?: string;
        TriggerGUID?: string;
        StepGUID?: string;
        Name?: string;
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
     * Sets the LogRetentionDays with validation.
     *
     * @param {number} value - The number of days for log retention.
     * @throws {Error} If the value is less than 0.
     */
    set LogRetentionDays(value: number);
    /**
     * Retrieves the current value for LogRetentionDays.
     * @returns {number} The number of days to retain logs.
     */
    get LogRetentionDays(): number;
}
