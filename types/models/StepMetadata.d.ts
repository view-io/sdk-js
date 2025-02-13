/**
 * Data flow step, containing metadata about each step in the flow.
 */
export default class StepMetadata {
    /**
     * Constructs a new StepMetadata object.
     *
     * @param {Object} [stepMetadata] - Information about the step.
     * @param {string} [stepMetadata.GUID] - The GUID of the step (automatically generated if not provided).
     * @param {string} [stepMetadata.TenantGUID] - The Tenant GUID (automatically generated if not provided).
     * @param {string} [stepMetadata.Name='My data flow step'] - The name of the step (default is 'My data flow step').
     * @param {string} [stepMetadata.Success] - The GUID of the step to invoke when successful.
     * @param {string} [stepMetadata.Failure] - The GUID of the step to invoke when failed.
     * @param {string} [stepMetadata.Exception] - The GUID of the step to invoke when an exception occurs.
     * @param {StepRuntimeEnum} [stepMetadata.Runtime=StepRuntimeEnum.Dotnet8] - The runtime environment for the step.
     * @param {string} [stepMetadata.StepArchiveFilename] - Archive filename (ZIP format) for the step.
     * @param {string} [stepMetadata.StepEntrypointFilename] - The filename to access the entry point of the step.
     * @param {string} [stepMetadata.StepEntrypointType] - The type (e.g., class) to access the entry point.
     * @param {string} [stepMetadata.MD5Hash] - MD5 hash for the step.
     * @param {string} [stepMetadata.SHA1Hash] - SHA1 hash for the step.
     * @param {string} [stepMetadata.SHA256Hash] - SHA256 hash for the step.
     * @param {string} [stepMetadata.Notes] - Optional notes for the step.
     * @param {boolean} [stepMetadata.DebugAssemblyLoad=false] - Whether to enable assembly load debugging.
     * @param {string} [stepMetadata.VirtualEnvironment] - The virtual environment name (used for Python steps).
     * @param {string} [stepMetadata.DependenciesFile] - The dependencies file (e.g., requirements.txt).
     * @param {Date} [stepMetadata.CreatedUtc=new Date()] - The creation timestamp in UTC.
     * @param {string} [stepMetadata.Package] - Package file (zip) contents.
     * @param {StepMetadata} [stepMetadata.SuccessStep] - Step to execute upon success.
     * @param {StepMetadata} [stepMetadata.FailureStep] - Step to execute upon failure.
     * @param {StepMetadata} [stepMetadata.ExceptionStep] - Step to execute when an exception is encountered.
     * @param {boolean} [stepMetadata.DebugWrapperScript=false] - Whether to enable debugging for wrapper scripts.
     * @param {boolean} [stepMetadata.DebugRequestData=false] - Whether to enable debugging for request data.
     * @param {boolean} [stepMetadata.DebugResponseData=false] - Whether to enable debugging for response data.
     * @param {boolean} [stepMetadata.ConsoleLogging=false] - Whether to enable console logging.
     * @param {number} [stepMetadata.ReferenceCount=0] - The reference count for the step.
     * @param {string} [stepMetadata.TimestampFormat='yyyy-MM-ddTHH:mm:ss.ffffffZ'] - The timestamp format.
     */
    constructor(stepMetadata?: {
        GUID?: string;
        TenantGUID?: string;
        Name?: string;
        Success?: string;
        Failure?: string;
        Exception?: string;
        Runtime?: StepRuntimeEnum;
        StepArchiveFilename?: string;
        StepEntrypointFilename?: string;
        StepEntrypointType?: string;
        MD5Hash?: string;
        SHA1Hash?: string;
        SHA256Hash?: string;
        Notes?: string;
        DebugAssemblyLoad?: boolean;
        VirtualEnvironment?: string;
        DependenciesFile?: string;
        CreatedUtc?: Date;
        Package?: string;
        SuccessStep?: StepMetadata;
        FailureStep?: StepMetadata;
        ExceptionStep?: StepMetadata;
        DebugWrapperScript?: boolean;
        DebugRequestData?: boolean;
        DebugResponseData?: boolean;
        ConsoleLogging?: boolean;
        ReferenceCount?: number;
        TimestampFormat?: string;
    });
    GUID: any;
    TenantGUID: any;
    Name: string;
    Success: string;
    Failure: string;
    Exception: string;
    Runtime: any;
    MD5Hash: string;
    SHA1Hash: string;
    SHA256Hash: string;
    Notes: string;
    DebugAssemblyLoad: boolean;
    VirtualEnvironment: string;
    DependenciesFile: string;
    CreatedUtc: Date;
    Package: string;
    SuccessStep: StepMetadata;
    FailureStep: StepMetadata;
    ExceptionStep: StepMetadata;
    /**
     * Setter for the StepArchiveFilename with validation.
     *
     * @param {string} value - The archive filename.
     * @throws {Error} If the value is empty or null.
     */
    set StepArchiveFilename(value: string);
    /**
     * Getter for the StepArchiveFilename.
     *
     * @returns {string} The archive filename.
     */
    get StepArchiveFilename(): string;
    /**
     * Setter for the StepEntrypointFilename with validation.
     *
     * @param {string} value - The entrypoint filename.
     * @throws {Error} If the value is empty or null.
     */
    set StepEntrypointFilename(value: string);
    /**
     * Getter for the StepEntrypointFilename.
     *
     * @returns {string} The entrypoint filename.
     */
    get StepEntrypointFilename(): string;
    /**
     * Setter for the StepEntrypointType with validation.
     *
     * @param {string} value - The entrypoint type.
     * @throws {Error} If the value is empty or null.
     */
    set StepEntrypointType(value: string);
    /**
     * Getter for the StepEntrypointType.
     *
     * @returns {string} The entrypoint type.
     */
    get StepEntrypointType(): string;
    DebugWrapperScript: boolean;
    DebugRequestData: boolean;
    DebugResponseData: boolean;
    ConsoleLogging: boolean;
    ReferenceCount: number;
    TimestampFormat: string;
    _StepArchiveFilename: string;
    _StepEntrypointFilename: string;
    _StepEntrypointType: string;
}
