import { v4 as uuidV4 } from 'uuid';
import { mockTenantId } from '../setupTest';

export const mockXToken = 'default';

export const mockTenantList = [
  {
    GUID: mockTenantId,
    AccountGUID: 'default',
    Name: 'Default Tenant',
    Region: 'us-west-1',
    S3BaseDomain: 'localhost',
    RestBaseDomain: 'localhost',
    DefaultPoolGUID: 'default',
    Active: true,
    IsProtected: true,
    CreatedUtc: '2024-07-10T05:09:31.000000Z',
  },
  {
    GUID: mockTenantId,
    AccountGUID: 'default',
    Name: 'My tenant',
    Region: 'us-west',
    S3BaseDomain: 'localhost',
    RestBaseDomain: 'localhost',
    DefaultPoolGUID: 'default',
    Active: true,
    IsProtected: true,
    CreatedUtc: '2024-07-10T05:09:31.000000Z',
  },
];

export const updateTenantMockData = {
  Name: 'My tenant',
  Region: 'us-west',
  S3BaseDomain: 'localhost',
  RestBaseDomain: 'localhost',
  DefaultPoolGUID: 'default',
};

export const createTenantMockData = {
  AccountGUID: 'default',
  Name: 'My tenant',
  DefaultPoolGUID: 'default',
  S3BaseDomain: 'localhost',
  RestBaseDomain: 'localhost',
};

export const mockEmbeddingResult = {
  Success: true,
  Timestamp: {
    Start: '2025-01-06T12:40:01.544029Z',
    TotalMs: 3.44,
    Messages: {},
  },
  MaxResults: 1000,
  IterationsRequired: 1,
  EndOfResults: true,
  TotalRecords: 0,
  RecordsRemaining: 0,
  Objects: [],
};

export const mockBlobGuid = 'default-mock-blob-guid';
export const mockBlobResult = [
  {
    GUID: mockBlobGuid,
    TenantGUID: 'default',
    ContentType: 'text/plain',
    Name: 'helloworld.txt',
    Description: "A text file containing 'Hello, world!'",
    Url: './blobs/default-mock-blob-guid',
    Length: 13,
    RefObjType: '[usermanaged]',
    RefObjGUID: '[usermanaged]',
    MD5Hash: '6CD3556DEB0DA54BCA060B4C39479839',
    SHA1Hash: '943A702D06F34599AEE1F8DA8EF9F7296031D699',
    SHA256Hash: '315F5BDB76D078C43B8AC0064E4A0164612B1FCE77C869345BFC94C75894EDD3',
    CreatedUtc: '2025-01-06T13:06:21.391219Z',
  },
];

export const mockBlobResultData = {
  GUID: mockBlobGuid,
  TenantGUID: 'default',
  ContentType: 'text/plain',
  Name: 'helloworld.txt',
  Description: "A text file containing 'Hello, world!'",
  Url: './blobs/default-mock-blob-guid',
  Length: 13,
  RefObjType: '[usermanaged]',
  RefObjGUID: '[usermanaged]',
  MD5Hash: '6CD3556DEB0DA54BCA060B4C39479839',
  SHA1Hash: '943A702D06F34599AEE1F8DA8EF9F7296031D699',
  SHA256Hash: '315F5BDB76D078C43B8AC0064E4A0164612B1FCE77C869345BFC94C75894EDD3',
  CreatedUtc: '2025-01-06T13:06:21.391219Z',
  Data: 'SGVsbG8sIHdvcmxkIQ==',
};

export const mockBlobData = {
  ContentType: 'text/plain',
  Name: 'helloworld.txt',
  Description: "A text file containing 'Hello, world!'",
  RefObjType: '[usermanaged]',
  RefObjGUID: '[usermanaged]',
  Data: 'SGVsbG8sIHdvcmxkIQ==',
};

// authentication
// export const mockXToken = 'default';
export const mockemail = 'default@user.com';
export const mockpassword = 'password';
export const mockpasswordSHA256 = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8';
// export const mockXToken = 'default';
// export const mockXToken = 'default';
export const authTentents = [
  {
    GUID: 'default',
    AccountGUID: 'default',
    Name: 'Updated Tenant',
    Region: 'us-west',
    S3BaseDomain: 'localhost',
    RestBaseDomain: 'localhost',
    DefaultPoolGUID: 'default',
    Active: true,
    IsProtected: true,
    CreatedUtc: '2024-07-10T05:09:31.000000Z',
  },
];
export const mockTokenResponse = {
  TimestampUtc: '2025-01-09T08:30:55.859903Z',
  ExpirationUtc: '2025-01-10T08:30:55.859883Z',
  IsExpired: false,
  Token:
    'mXCNtMWDsW0/pr+IwRFUjQPd83UDOG0qv2q0D47pAoMtdFblkwIe5aEmBrwXzBHTNXylGXAQ3afkmzUZjtpuXLq1GVQQve8ksARIHQ/sqSv7z+ipHRCHHi3g3BDauEHO0pIVg2zUDkmMPsbilyG12zMyQoTrWc15mnrnAgBWRe4l263cLuTcnQ+I3Decb57NsCq3uPq9WzFdpCDivnzeFt0Y9jSEi1ciLqudWkbrKTKJTN1LKci1SPoBePyhF6PAS1afVjs8bXo1HmTqs3VoTmk0SxhY6J2cLyfJ/Oxvev2HZY/x66X5q0rSmqK9wDAU',
  Valid: true,
};
export const token =
  'mXCNtMWDsW0/pr+IwRFUjeDO2cbVr5o4WlPplku8dbpYzqXbeV0c5ofMbX/YiOhMzPSr1DRg/PyE25KpaGzto0+uchyYY2jGJvlj7I/nSFmqlMEsXYy73LsvYjG4tSlimGN60Hj51mmvdaieE8BOVStYfehip+tEXiELfP7tXX6N6EIFAyCQZRWtRoKkXK+DZoY265roa6TwGehPTz4n4vrKb3XwrWzAWOl/pb6G+t3+P/oa52JqKojKT1wB+sLJ8sjzJpalYuQzLEOcK5Nwyw==';
