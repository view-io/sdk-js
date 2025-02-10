export const DataRepositoryGUID = '214a3dec-879d-4e63-9394-c16db070d51b';
export const data1 = [
    {
        "GUID": DataRepositoryGUID,
        "TenantGUID": "default",
        "OwnerGUID": "ad5e22b1-64c0-49d1-b7ca-70a2998fcd3f",
        "Name": "My file repository",
        "RepositoryType": "File",
        "IncludeSubdirectories": true,
        "DiskDirectory": "./files/",
        "CreatedUtc": "2025-01-06T08:28:16.978397Z",
        "S3AccessKey": "accesskey",
        "S3SecretKey": "secretkey",
        "S3BucketName": "bucket",
        "S3Region": "us-west-1",
        "CreatedUtc": "2025-01-06T10:19:50.544369Z"
    }
];
export const WriteDiskDataRepository = {
    "Name": "My file repository",
    "RepositoryType": "File",
    "DiskDirectory": "./files/",
    "DiskIncludeSubdirectories": true
}
export const WriteS3DataRepository = {
    "TenantGUID": "default",
    "OwnerGUID": "default",
    "Name": "My S3 repository",
    "RepositoryType": "AmazonS3",
    "S3EndpointUrl": null,
    "S3BaseUrl": "https://{bucket}.us-west-1.s3.amazonaws.com/{key}",
    "S3AccessKey": "accesskey",
    "S3SecretKey": "secretkey",
    "S3BucketName": "bucket",
    "S3Region": "us-west-1"
}
export const WriteS3CompatibleDataRepository = {
    "TenantGUID": "default",
    "OwnerGUID": "default",
    "Name": "My S3 compatible storage repository",
    "RepositoryType": "AmazonS3",
    "S3EndpointUrl": "http://localhost:8002/",
    "S3BaseUrl": "http://localhost:8002/{bucket}/{key}",
    "S3AccessKey": "accesskey",
    "S3SecretKey": "secretkey",
    "S3BucketName": "bucket",
    "S3Region": "us-west-1"
}
export const WriteAzureBLOBDataRepository = {
    "TenantGUID": "default",
    "OwnerGUID": "default",
    "Name": "My Azure BLOB repository",
    "RepositoryType": "AzureBlob",
    "AzureEndpointUrl": "https://accountname.blob.core.windows.net",
    "AzureAccountName": "accountname",
    "AzureContainerName": "containername",
    "AzureAccessKey": "accesskey"
}
export const WriteCIFSDataRepository = {
    "TenantGUID": "default",
    "OwnerGUID": "default",
    "Name": "My CIFS repository",
    "RepositoryType": "CIFS",
    "CifsHostname": "localhost",
    "CifsUsername": "domain\\username",
    "CifsPassword": "password",
    "CifsShareName": "share",
    "CifsIncludeSubdirectories": true
}
export const WriteNFSDataRepository = {
    "TenantGUID": "default",
    "OwnerGUID": "default",
    "Name": "My NFS repository",
    "RepositoryType": "NFS",
    "NfsHostname": "localhost",
    "NfsUserId": 0,
    "NfsGroupId": 0,
    "NfsShareName": "share",
    "NfsIncludeSubdirectories": true
}
export const enumerateResponse = {
    "Success": true,
    "Timestamp": {
        "Start": "2025-01-06T08:45:42.741236Z",
        "TotalMs": 17.19,
        "Messages": {}
    },
    "MaxResults": 1000,
    "IterationsRequired": 1,
    "EndOfResults": true,
    "TotalRecords": 1,
    "RecordsRemaining": 0,
    "Objects": data1
}
export const CrawlSchedulesGUID = 'default';
export const WriteCrawlSchedulesGUID = {
    "Name": "My schedule update",
    "Schedule": "DaysInterval",
    "Interval": 1
}
export const CrawlSchedulesResponse = [{
    "GUID": "oneminute",
    "TenantGUID": "default",
    "Name": "Every minute",
    "Schedule": "MinutesInterval",
    "Interval": 1,
    "CreatedUtc": "2024-07-10T05:21:00.000000Z"
}]
export const enumerateCrawlSchedulesResponse = {
    "Success": true,
    "Timestamp": {
        "Start": "2025-01-06T08:45:42.741236Z",
        "TotalMs": 17.19,
        "Messages": {}
    },
    "MaxResults": 1000,
    "IterationsRequired": 1,
    "EndOfResults": true,
    "TotalRecords": 1,
    "RecordsRemaining": 0,
    "Objects": CrawlSchedulesResponse
}

// for filter 
export const CrawlFilterGUID = 'default';
export const WriteFilterGUID = {
    "Name": "My schedule update",
    "Schedule": "DaysInterval",
    "Interval": 1
}
export const CrawlFilterResponse = [
    {
        "GUID": "default",
        "TenantGUID": "default",
        "Name": "My filter",
        "MinimumSize": 1,
        "MaximumSize": 134217728,
        "IncludeSubdirectories": true,
        "ContentType": "*",
        "CreatedUtc": "2024-07-10T05:21:00.000000Z"
    }
]
export const writeFilterData = {
    "Name": "My filter",
    "MinimumSize": 1,
    "MaximumSize": 134217728,
    "IncludeSubdirectories": true,
    "ContentType": "*"
}
export const enumerateFilterResponse = {
    "Success": true,
    "Timestamp": {
        "Start": "2025-01-06T08:45:42.741236Z",
        "TotalMs": 17.19,
        "Messages": {}
    },
    "MaxResults": 1000,
    "IterationsRequired": 1,
    "EndOfResults": true,
    "TotalRecords": 1,
    "RecordsRemaining": 0,
    "Objects": CrawlFilterResponse
}

// for Crawler plans

export const CrawlPlansGUID = 'f0f4f579-e471-46bf-a28d-2d2ab872f10e';
export const WritePlansData = {
    "DataRepositoryGUID": "8db00b8a-17dd-4dc4-bdd8-2eee3b7581fe",
    "CrawlScheduleGUID": "tenminutes",
    "CrawlFilterGUID": "default",
    "Name": "My crawl plan",
    "EnumerationDirectory": "./enumerations/",
    "EnumerationsToRetain": 30,
    "MetadataRuleGUID": "example-metadata-rule",
    "ProcessingEndpoint": "http://localhost:8501/processor",
    "ProcessingAccessKey": "default",
    "CleanupEndpoint": "http://localhost:8501/processor/cleanup",
    "CleanupAccessKey": "default"
}
export const CrawlPlansResponse = [
    {
        "GUID": "cc05c601-16f0-4356-83eb-15f04a6d3303",
        "TenantGUID": "default",
        "DataRepositoryGUID": "8db00b8a-17dd-4dc4-bdd8-2eee3b7581fe",
        "CrawlScheduleGUID": "tenminutes",
        "CrawlFilterGUID": "default",
        "MetadataRuleGUID": "example-metadata-rule",
        "Name": "My crawl plan",
        "EnumerationDirectory": "./enumerations/",
        "EnumerationsToRetain": 30,
        "MaxDrainTasks": 4,
        "ProcessAdditions": true,
        "ProcessDeletions": false,
        "ProcessUpdates": true,
        "CreatedUtc": "2025-01-07T06:21:15.520686Z"
    }
]
export const writePlansData = {
    "Name": "My filter",
    "MinimumSize": 1,
    "MaximumSize": 134217728,
    "IncludeSubdirectories": true,
    "ContentType": "*"
}
export const enumeratePlansResponse = {
    "Success": true,
    "Timestamp": {
        "Start": "2025-01-06T08:45:42.741236Z",
        "TotalMs": 17.19,
        "Messages": {}
    },
    "MaxResults": 1000,
    "IterationsRequired": 1,
    "EndOfResults": true,
    "TotalRecords": 1,
    "RecordsRemaining": 0,
    "Objects": CrawlPlansResponse
}

// for Crawler Operations
export const CrawlOperationGUID = 'f0f4f579-e471-46bf-a28d-2d2ab872f10e';
export const CrawlOperationResponse = [
    {
        "GUID": "cb550798-15fe-4887-b8f3-160cefeaa9da",
        "TenantGUID": "default",
        "CrawlPlanGUID": "cc05c601-16f0-4356-83eb-15f04a6d3303",
        "CrawlScheduleGUID": "tenminutes",
        "CrawlFilterGUID": "default",
        "DataRepositoryGUID": "8db00b8a-17dd-4dc4-bdd8-2eee3b7581fe",
        "MetadataRuleGUID": "example-metadata-rule",
        "ProcessingEndpoint": "http://nginx-processor:8000/v1.0/tenants/default/processing",
        "CleanupEndpoint": "http://nginx-processor:8000/v1.0/tenants/default/cleanup",
        "Name": "My crawl plan (started 2025-01-07T06:21:20 UTC)",
        "ObjectsEnumerated": 0,
        "BytesEnumerated": 0,
        "ObjectsAdded": 0,
        "BytesAdded": 0,
        "ObjectsUpdated": 0,
        "BytesUpdated": 0,
        "ObjectsDeleted": 0,
        "BytesDeleted": 0,
        "ObjectsSuccess": 0,
        "BytesSuccess": 0,
        "ObjectsFailed": 0,
        "BytesFailed": 0,
        "State": "Success",
        "CreatedUtc": "2025-01-07T06:21:20.307300Z",
        "StartUtc": "2025-01-07T06:21:20.307133Z",
        "StartEnumerationUtc": "2025-01-07T06:21:20.343399Z",
        "FinishEnumerationUtc": "2025-01-07T06:21:20.364087Z",
        "FinishUtc": "2025-01-07T06:21:20.379487Z",
        "AdditionalData": "No objects detected during enumeration"
    }]
export const enumerateCrawlOperationResponse = {
    "Success": true,
    "Timestamp": {
        "Start": "2025-01-06T08:45:42.741236Z",
        "TotalMs": 17.19,
        "Messages": {}
    },
    "MaxResults": 1000,
    "IterationsRequired": 1,
    "EndOfResults": true,
    "TotalRecords": 1,
    "RecordsRemaining": 0,
    "Objects": CrawlOperationResponse
}