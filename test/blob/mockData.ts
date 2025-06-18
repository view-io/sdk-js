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
};

export const mockBlobData = {
  ContentType: 'text/plain',
  Name: 'helloworld.txt',
  Description: "A text file containing 'Hello, world!'",
  RefObjType: '[usermanaged]',
  RefObjGUID: '[usermanaged]',
  Data: 'SGVsbG8sIHdvcmxkIQ==',
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
