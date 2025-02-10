import { v4 as uuidV4 } from 'uuid';
import { mockTenantId } from '../setupTest';

export const mockXToken = 'default';

export const mockTenantList = [{
  "GUID": mockTenantId,
  "AccountGUID": "default",
  "Name": "Default Tenant",
  "Region": "us-west-1",
  "S3BaseDomain": "localhost",
  "RestBaseDomain": "localhost",
  "DefaultPoolGUID": "default",
  "Active": true,
  "IsProtected": true,
  "CreatedUtc": "2024-07-10T05:09:31.000000Z"
},
{
  "GUID": mockTenantId,
  "AccountGUID": "default",
  "Name": "My tenant",
  "Region": "us-west",
  "S3BaseDomain": "localhost",
  "RestBaseDomain": "localhost",
  "DefaultPoolGUID": "default",
  "Active": true,
  "IsProtected": true,
  "CreatedUtc": "2024-07-10T05:09:31.000000Z"
}];


export const updateTenantMockData = {
  "Name": "My tenant",
  "Region": "us-west",
  "S3BaseDomain": "localhost",
  "RestBaseDomain": "localhost",
  "DefaultPoolGUID": "default"
}

export const createTenantMockData = {
  "AccountGUID": "default",
  "Name": "My tenant",
  "DefaultPoolGUID": "default",
  "S3BaseDomain": "localhost",
  "RestBaseDomain": "localhost"
}


export const mockEmbeddingResult = {
  "Success": true,
  "Timestamp": {
    "Start": "2025-01-06T12:40:01.544029Z",
    "TotalMs": 3.44,
    "Messages": {}
  },
  "MaxResults": 1000,
  "IterationsRequired": 1,
  "EndOfResults": true,
  "TotalRecords": 0,
  "RecordsRemaining": 0,
  "Objects": []
}

export const mockBlobGuid = 'default-mock-blob-guid';
export const mockBlobResult = [
  {
    "GUID": mockBlobGuid,
    "TenantGUID": "default",
    "ContentType": "text/plain",
    "Name": "helloworld.txt",
    "Description": "A text file containing 'Hello, world!'",
    "Url": "./blobs/default-mock-blob-guid",
    "Length": 13,
    "RefObjType": "[usermanaged]",
    "RefObjGUID": "[usermanaged]",
    "MD5Hash": "6CD3556DEB0DA54BCA060B4C39479839",
    "SHA1Hash": "943A702D06F34599AEE1F8DA8EF9F7296031D699",
    "SHA256Hash": "315F5BDB76D078C43B8AC0064E4A0164612B1FCE77C869345BFC94C75894EDD3",
    "CreatedUtc": "2025-01-06T13:06:21.391219Z"
  }
]

export const mockBlobResultData = {
  "GUID": mockBlobGuid,
  "TenantGUID": "default",
  "ContentType": "text/plain",
  "Name": "helloworld.txt",
  "Description": "A text file containing 'Hello, world!'",
  "Url": "./blobs/default-mock-blob-guid",
  "Length": 13,
  "RefObjType": "[usermanaged]",
  "RefObjGUID": "[usermanaged]",
  "MD5Hash": "6CD3556DEB0DA54BCA060B4C39479839",
  "SHA1Hash": "943A702D06F34599AEE1F8DA8EF9F7296031D699",
  "SHA256Hash": "315F5BDB76D078C43B8AC0064E4A0164612B1FCE77C869345BFC94C75894EDD3",
  "CreatedUtc": "2025-01-06T13:06:21.391219Z",
  "Data": "SGVsbG8sIHdvcmxkIQ=="
}


export const mockBlobData = {
  "ContentType": "text/plain",
  "Name": "helloworld.txt",
  "Description": "A text file containing 'Hello, world!'",
  "RefObjType": "[usermanaged]",
  "RefObjGUID": "[usermanaged]",
  "Data": "SGVsbG8sIHdvcmxkIQ=="
}

export const mockDataRepositoryGuid = 'default-mock-data-repository-guid';
export const mockDataRepositoryResult = [
  {
    "GUID": mockDataRepositoryGuid,
    "TenantGUID": "default",
    "OwnerGUID": "d377c02a-f30f-4395-aea1-1366c825fdfe",
    "Name": "My file repository",
    "RepositoryType": "File",
    "IncludeSubdirectories": true,
    "DiskDirectory": "./files/",
    "CreatedUtc": "2025-01-06T09:25:25.372253Z"
  },
  {
    "GUID": "1a3c2556-9984-4380-99ce-9c3387b15f58",
    "TenantGUID": "default",
    "OwnerGUID": "480f3887-20ef-451e-8359-4664bd45bd68",
    "Name": "My file repository",
    "RepositoryType": "File",
    "IncludeSubdirectories": true,
    "DiskDirectory": "./files/",
    "CreatedUtc": "2025-01-06T10:05:26.932194Z"
  }
]

export const mockDiskDataRepositoryRequest = {
  "Name": "My file repository",
  "RepositoryType": "File",
  "BaseUrl": "./files/",
  "DiskDirectory": "./files/",
  "DiskIncludeSubdirectories": true
}

export const mockDiskDataRepositoryGuid = 'default-mock-data-repository-guid';

export const mockDiskDataRepositoryResult = {
  "GUID": mockDiskDataRepositoryGuid,
  "TenantGUID": "default",
  "OwnerGUID": "aff46f63-310a-4254-b4d9-aa18181ab734",
  "Name": "My file repository",
  "RepositoryType": "File",
  "IncludeSubdirectories": true,
  "DiskDirectory": "./files/",
  "CreatedUtc": "2025-01-06T14:58:09.743763Z"
}

export const mockS3DataRepositoryRequest = {
  "TenantGUID": "default",
  "OwnerGUID": "default",
  "Name": "My S3 repository",
  "RepositoryType": "AmazonS3",
  "S3EndpointUrl": null,
  "S3BaseUrl": null,
  "S3AccessKey": "accesskey",
  "S3SecretKey": "secretkey",
  "S3BucketName": "bucket",
  "S3Region": "us-west-1"
}

export const mockS3DataRepositoryResult = {
  "GUID": "48ad329b-00b1-4639-8582-54c01b3d8157",
  "TenantGUID": "default",
  "OwnerGUID": "default",
  "Name": "My S3 repository",
  "RepositoryType": "AmazonS3",
  "IncludeSubdirectories": true,
  "S3AccessKey": "accesskey",
  "S3SecretKey": "secretkey",
  "S3BucketName": "bucket",
  "S3Region": "us-west-1",
  "CreatedUtc": "2025-01-06T15:04:13.842864Z"
}

export const mockAzureBlobDataRepositoryRequest = {
  "TenantGUID": "default",
  "OwnerGUID": "default",
  "Name": "My Azure BLOB repository",
  "RepositoryType": "AzureBlob",
  "AzureEndpointUrl": "https://accountname.blob.core.windows.net",
  "AzureAccountName": "accountname",
  "AzureContainerName": "containername",
  "AzureAccessKey": "accesskey"
}

export const mockCifsDataRepositoryRequest = {
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

export const mockNfsDataRepositoryRequest = {
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
// authentication
// export const mockXToken = 'default';
export const mockemail = 'default@user.com';
export const mockpassword = 'password';
export const mockpasswordSHA256 = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8';
// export const mockXToken = 'default';
// export const mockXToken = 'default';
export const authTentents = [
  {
    "GUID": "default",
    "AccountGUID": "default",
    "Name": "Updated Tenant",
    "Region": "us-west",
    "S3BaseDomain": "localhost",
    "RestBaseDomain": "localhost",
    "DefaultPoolGUID": "default",
    "Active": true,
    "IsProtected": true,
    "CreatedUtc": "2024-07-10T05:09:31.000000Z"
  }
];
export const mockTokenResponse = {
  "TimestampUtc": "2025-01-09T08:30:55.859903Z",
  "ExpirationUtc": "2025-01-10T08:30:55.859883Z",
  "IsExpired": false,
  "Token": "mXCNtMWDsW0/pr+IwRFUjQPd83UDOG0qv2q0D47pAoMtdFblkwIe5aEmBrwXzBHTNXylGXAQ3afkmzUZjtpuXLq1GVQQve8ksARIHQ/sqSv7z+ipHRCHHi3g3BDauEHO0pIVg2zUDkmMPsbilyG12zMyQoTrWc15mnrnAgBWRe4l263cLuTcnQ+I3Decb57NsCq3uPq9WzFdpCDivnzeFt0Y9jSEi1ciLqudWkbrKTKJTN1LKci1SPoBePyhF6PAS1afVjs8bXo1HmTqs3VoTmk0SxhY6J2cLyfJ/Oxvev2HZY/x66X5q0rSmqK9wDAU",
  "Valid": true
}
export const token = 'mXCNtMWDsW0/pr+IwRFUjeDO2cbVr5o4WlPplku8dbpYzqXbeV0c5ofMbX/YiOhMzPSr1DRg/PyE25KpaGzto0+uchyYY2jGJvlj7I/nSFmqlMEsXYy73LsvYjG4tSlimGN60Hj51mmvdaieE8BOVStYfehip+tEXiELfP7tXX6N6EIFAyCQZRWtRoKkXK+DZoY265roa6TwGehPTz4n4vrKb3XwrWzAWOl/pb6G+t3+P/oa52JqKojKT1wB+sLJ8sjzJpalYuQzLEOcK5Nwyw=='