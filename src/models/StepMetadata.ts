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
   * @param {string} [stepMetadata.Exception] - The GUID of the step to invoke when an exception occurs.
   * @param {StepRuntimeEnum} [stepMetadata.Runtime=StepRuntimeEnum.Dotnet8] - The runtime environment for the step.
   * @param {string} [stepMetadata.StepArchiveFilename] - Archive filename (ZIP format) for the step.
   * @param {string} [stepMetadata.StepEntrypointFilename] - The filename to access the entry point of the step.
   * @param {string} [stepMetadata.StepEntrypointType] - The type (e.g., class) to access the entry point.
   * @param {string} [stepMetadata.MD5Hash] - MD5 hash for the step.
   * @param {string} [stepMetadata.SHA1Hash] - SHA1 hash for the step.
   * @param {string} [stepMetadata.SHA256Hash] - SHA256 hash for the step.
   * @param {boolean} [stepMetadata.DebugAssemblyLoad=false] - Whether to enable assembly load debugging.
   * @param {string} [stepMetadata.VirtualEnvironment] - The virtual environment name (used for Python steps).
   * @param {string} [stepMetadata.DependenciesFile] - The dependencies file (e.g., requirements.txt).
   * @param {Date} [stepMetadata.CreatedUtc=new Date()] - The creation timestamp in UTC.
   * @param {string} [stepMetadata.Package] - Package file (zip) contents.
   * @param {boolean} [stepMetadata.DebugWrapperScript=false] - Whether to enable debugging for wrapper scripts.
   * @param {boolean} [stepMetadata.DebugRequestData=false] - Whether to enable debugging for request data.
   * @param {boolean} [stepMetadata.DebugResponseData=false] - Whether to enable debugging for response data.
   * @param {boolean} [stepMetadata.ConsoleLogging=false] - Whether to enable console logging.
   * @param {number} [stepMetadata.ReferenceCount=0] - The reference count for the step.
   * @param {string} [stepMetadata.TimestampFormat='yyyy-MM-ddTHH:mm:ss.ffffffZ'] - The timestamp format.
   */
  constructor(stepMetadata = {}) {
    const {
      GUID,
      TenantGUID,
      Name,
      Exception,
      Runtime, // Default runtime
      StepArchiveFilename,
      StepEntrypointFilename,
      StepEntrypointType,
      MD5Hash,
      SHA1Hash,
      SHA256Hash,
      DebugAssemblyLoad,
      VirtualEnvironment,
      DependenciesFile,
      CreatedUtc,
      Package,
      DebugWrapperScript,
      DebugRequestData,
      DebugResponseData,
      ConsoleLogging,
      ReferenceCount,
      TimestampFormat,
    } = stepMetadata;

    // Assign default and provided values to properties
    this.GUID = GUID;
    this.TenantGUID = TenantGUID;
    this.Name = Name;
    this.Exception = Exception;
    this.Runtime = Runtime;
    this.MD5Hash = MD5Hash;
    this.SHA1Hash = SHA1Hash;
    this.SHA256Hash = SHA256Hash;
    this.DebugAssemblyLoad = DebugAssemblyLoad;
    this.VirtualEnvironment = VirtualEnvironment;
    this.DependenciesFile = DependenciesFile;
    this.CreatedUtc = CreatedUtc;
    this.Package = Package;
    this.StepArchiveFilename = StepArchiveFilename;
    this.StepEntrypointFilename = StepEntrypointFilename;
    this.StepEntrypointType = StepEntrypointType;
    this.DebugWrapperScript = DebugWrapperScript;
    this.DebugRequestData = DebugRequestData;
    this.DebugResponseData = DebugResponseData;
    this.ConsoleLogging = ConsoleLogging;
    this.ReferenceCount = ReferenceCount;
    this.TimestampFormat = TimestampFormat;
  }
}
