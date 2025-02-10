import { v4 as uuidV4 } from 'uuid';
import { mockTenantId } from '../setupTest';
export const mockTriggerData = {
  trigger123: {
    GUID: 'trigger123',
    Name: 'Test Trigger',
    Type: 'EventType',
    Configuration: 'Configuration details',
  },
  trigger456: {
    GUID: 'trigger456',
    Name: 'Another Trigger',
    Type: 'EventType',
    Configuration: 'Configuration details for another trigger',
  },
};

export const mockTriggerId = 'trigger123';

export const updateTriggerMockData = {
  GUID: mockTriggerId,
  Type: 'EventType',
  Name: 'Updated Trigger Name',
  Configuration: 'Configuration details',
};
export const mockTriggersList = [mockTriggerData.trigger123, mockTriggerData.trigger456];
export const mockStepId = 'step123';
export const mockStepGUID = 'csharploopbackget';
export const mockStepData = {
  [mockStepId]: {
    GUID: mockStepId,
    TenantGUID: 'tenant-guid-123',
    Name: 'Test Step',
    Description: 'Step description',
    StepArchiveFilename: 'step1.zip',
    StepEntrypointFilename: 'main.cs',
    StepEntrypointType: 'Class',
    MD5Hash: 'abc123',
    SHA1Hash: 'def456',
    SHA256Hash: 'ghi789',
    Notes: 'This is step 1',
    DebugAssemblyLoad: true,
    VirtualEnvironment: 'env1',
    DependenciesFile: 'requirements1.txt',
    CreatedUtc: new Date('2024-11-01T10:00:00Z'),
    Package: 'Package content for step 1',
  },
  [mockStepGUID]: {
    "GUID": "csharploopbackget",
    "TenantGUID": "default",
    "Name": "Csharp Loopback GET step",
    "Runtime": "Dotnet8",
    "StepArchiveFilename": "./Steps/Csharp/LoopbackGetStep.zip",
    "StepEntrypointFilename": "LoopbackGetStep.dll",
    "StepEntrypointType": "LoopbackGetStep.LoopbackGetStep",
    "MD5Hash": "77E6323497127546179708DBC33082AB",
    "SHA1Hash": "724B75FF7919F86E8DCD3C9B85113A15F1B7D2BC",
    "SHA256Hash": "0CB1C301B64C547B0E5E027EABC6ADF618A538B2E1F033D84AC87998F0F01C38",
    "DebugAssemblyLoad": true,
    "DebugWrapperScript": false,
    "DebugRequestData": false,
    "DebugResponseData": false,
    "ConsoleLogging": true,
    "ReferenceCount": 0,
    "CreatedUtc": "2024-07-10T05:10:14.000000Z",
  }
};

export const mockFlowId = 'flow123';
export const mockFlowIdInclude = 'csharploopbackpost';
export const requestID = 'e30aa227-fc04-4b92-ae1a-e686aa12098f'
export const mockDataFlowData = {
  [mockFlowId]: {
    GUID: mockFlowId,
    TenantGUID: 'tenant-guid-123',
    Name: 'Test Data Flow',
    Description: 'Flow description',
    StepArchiveFilename: 'step1.zip',
    StepEntrypointFilename: 'main.cs',
    StepEntrypointType: 'Class',
    MD5Hash: 'abc123',
    SHA1Hash: 'def456',
    SHA256Hash: 'ghi789',
    Notes: 'This is step 1',
    DebugAssemblyLoad: true,
    VirtualEnvironment: 'env1',
    DependenciesFile: 'requirements1.txt',
    CreatedUtc: new Date('2024-11-01T10:00:00Z'),
    Package: 'Package content for step 1',
  },
  [mockFlowIdInclude]: {
    "GUID": "csharploopbackpost",
    "TenantGUID": "default",
    "TriggerGUID": "csharploopbackpost",
    "StepGUID": "csharploopbackpost",
    "Name": "My Csharp loopback POST data flow",
    "LogRetentionDays": 7,
    "CreatedUtc": "2024-07-10T05:10:14.000000Z"
  }
};
export const mockDataFlowIDResponse = {
  "GUID": "csharploopbackpost",
  "TenantGUID": "default",
  "TriggerGUID": "csharploopbackpost",
  "StepGUID": "csharploopbackpost",
  "Name": "My Csharp loopback POST data flow",
  "LogRetentionDays": 7,
  "CreatedUtc": "2024-07-10T05:10:14.000000Z"
}

export const mockStepCreatePayload = {
  GUID: 'step123',
  TenantGUID: 'tenant-guid-123',
  Name: 'Test Step',
  Description: 'Step description',
  StepArchiveFilename: 'step1.zip',
  StepEntrypointFilename: 'main.cs',
  StepEntrypointType: 'Class',
  MD5Hash: 'abc123',
  SHA1Hash: 'def456',
  SHA256Hash: 'ghi789',
  Notes: 'This is step 1',
  DebugAssemblyLoad: true,
  VirtualEnvironment: 'env1',
  DependenciesFile: 'requirements1.txt',
  CreatedUtc: new Date('2024-11-01T10:00:00Z'),
  Package: 'Package content for step 1',
};

export const mockStepsList = [mockStepData.step123];
export const mockDataFlowsList = [mockDataFlowData.flow123];
export const mockDataFlowLogs = {
  flow1: {
    request1: [
      {
        GUID: uuidV4(),
        TenantGUID: mockTenantId,
        TriggerGUID: mockTriggerId,
        StepGUID: mockStepId,
        Name: 'My data flow1',
        Notes: 'Helllo',
        CreatedUtc: new Date().toISOString(),
        LogRetentionDays: 5,
      },
      {
        GUID: uuidV4(),
        TenantGUID: mockTenantId,
        TriggerGUID: mockTriggerId,
        StepGUID: mockStepId,
        Name: 'My data flow2',
        Notes: 'Helllo2',
        CreatedUtc: new Date().toISOString(),
        LogRetentionDays: 1,
      },
    ],
    request2: [
      {
        logId: uuidV4(),
        dataFlowGuid: 'flow1',
        requestGuid: 'request2',
        timestamp: new Date('2024-11-02T12:00:00Z').toISOString(),
        level: 'INFO',
        message: 'Data flow completed successfully.',
        stepGuid: uuidV4(),
      },
    ],
  },
  flow2: {
    request1: [
      {
        logId: uuidV4(),
        dataFlowGuid: 'flow2',
        requestGuid: 'request1',
        timestamp: new Date('2024-11-03T09:00:00Z').toISOString(),
        level: 'INFO',
        message: 'Data flow triggered.',
        stepGuid: uuidV4(),
      },
      {
        logId: uuidV4(),
        dataFlowGuid: 'flow2',
        requestGuid: 'request1',
        timestamp: new Date('2024-11-03T09:15:00Z').toISOString(),
        level: 'INFO',
        message: 'Step 1 completed successfully.',
        stepGuid: uuidV4(),
      },
    ],
  },
};

/**
 * Mock data for DataFlow log files (raw content).
 */
export const mockDataFlowLogfileContent = {
  flow1: {
    request1: `INFO: 2024-11-01T10:00:00Z - Data flow started successfully.\nERROR: 2024-11-01T10:05:00Z - Step execution failed at step 2.`,
    request2: `INFO: 2024-11-02T12:00:00Z - Data flow completed successfully.`,
  },
  flow2: {
    request1: `INFO: 2024-11-03T09:00:00Z - Data flow triggered.\nINFO: 2024-11-03T09:15:00Z - Step 1 completed successfully.`,
  },
};
