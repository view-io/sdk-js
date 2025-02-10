
export const mockServiceData = {
    '1c2c05ea-a283-4bbd-af6f-218af1036745': {
        GUID: "1c2c05ea-a283-4bbd-af6f-218af1036745",
        TenantGUID: "default",
        PoolGUID: "default",
        OwnerGUID: "default",
        Category: "Data",
        Name: "Sales Reports",
        RegionString: "us-west-1",
        Versioning: true,
        MaxMultipartUploadSeconds: 604800,
        LastAccessUtc: "2025-01-04T04:02:22.345525Z",
        CreatedUtc: "2025-01-04T04:02:22.345525Z"
    },
    'example-data-bucket': {
        GUID: "example-data-bucket",
        TenantGUID: "default",
        PoolGUID: "default",
        OwnerGUID: "default",
        Category: "Data",
        Name: "example-data-bucket",
        RegionString: "us-west-1",
        Versioning: true,
        MaxMultipartUploadSeconds: 604800,
        LastAccessUtc: "2024-07-10T05:09:32.000000Z",
        CreatedUtc: "2024-07-10T05:09:32.000000Z"
    },
};

export const mockServicesList = [
    {
        GUID: 'example-data-bucket',
        TenantGUID: 'default',
        PoolGUID: 'default',
        OwnerGUID: 'default',
        Category: 'Data',
        Name: 'example-data-bucket',
        RegionString: 'us-west-1',
        Versioning: true,
        MaxMultipartUploadSeconds: 604800,
        LastAccessUtc: '2024-07-10T05:09:32.000000Z',
        CreatedUtc: '2024-07-10T05:09:32.000000Z'
    },
    {
        GUID: '1c2c05ea-a283-4bbd-af6f-218af1036745',
        TenantGUID: 'default',
        PoolGUID: 'default',
        OwnerGUID: 'default',
        Category: 'Data',
        Name: 'Sales Reports',
        RegionString: 'us-west-1',
        Versioning: true,
        MaxMultipartUploadSeconds: 604800,
        LastAccessUtc: '2025-01-04T04:02:22.345525Z',
        CreatedUtc: '2025-01-04T04:02:22.345525Z'
    }
];

export const mockBucketGUID = 'example-data-bucket';

export const mockBucketData = {
    GUID: 'example-data-bucket',
    TenantGUID: 'default',
    PoolGUID: 'default',
    OwnerGUID: 'default',
    Category: 'Data',
    Name: 'example-data-bucket',
    RegionString: 'us-west-1',
    Versioning: true,
    MaxMultipartUploadSeconds: 604800,
    LastAccessUtc: '2024-07-10T05:09:32.000000Z',
    CreatedUtc: '2024-07-10T05:09:32.000000Z'
};

export const createBucketRequest = {
    PoolGUID: "default",
    Name: "testbucket",
    RegionString: "us-west-1",
    Versioning: true
}

export const updateBucketMetadata = {
    GUID: mockBucketGUID,
    TenantGUID: 'default',
    PoolGUID: 'default',
    OwnerGUID: 'default',
    Category: 'Data',
    Name: 'example-data-bucket',
    RegionString: 'us-west-1',
    Versioning: false,
    MaxMultipartUploadSeconds: 582000,
    LastAccessUtc: '2024-07-10T05:09:32.000000Z',
    CreatedUtc: '2024-07-10T05:09:32.000000Z'
};

export const mockTags = [{
    GUID: "default",
    TenantGUID: "default",
    BucketGUID: "example-data-bucket",
    OwnerGUID: "default",
    Key: "hello",
    Value: "My first key!",
    CreatedUtc: "2024-07-10T05:10:35.000000Z"
}
];

export const writeMockTags = [
    {
        Key: "hello",
        Value: "My first key!"
    }
];

export const mockAcl = {
    Owner: {
        GUID: "default",
        TenantGUID: "default",
        FirstName: "Default",
        LastName: "User",
        FullName: "Default User",
        Notes: "Default password is password",
        Email: "default@user.com",
        PasswordSha256: "************************************************************42d8",
        Active: true,
        IsProtected: true,
        CreatedUtc: "2024-07-10T05:09:31.000000Z"
    },
    Users: [
        {
            GUID: "default",
            TenantGUID: "default",
            FirstName: "Default",
            LastName: "User",
            FullName: "Default User",
            Notes: "Default password is password",
            Email: "default@user.com",
            PasswordSha256: "************************************************************42d8",
            Active: true,
            IsProtected: true,
            CreatedUtc: "2024-07-10T05:09:31.000000Z"
        }
    ],
    Entries: [
        {
            GUID: "default",
            TenantGUID: "default",
            BucketGUID: "example-data-bucket",
            OwnerGUID: "default",
            UserGUID: "default",
            CanonicalUser: "",
            EnableRead: true,
            EnableReadAcp: true,
            EnableWrite: true,
            EnableWriteAcp: true,
            FullControl: true,
            CreatedUtc: "2024-07-10T05:10:35.000000Z"
        }
    ]
};

export const mockObjectKey = 'hello.temp';

export const mockObjectData = {
    GUID: "dd019d59-d837-430f-88d0-2905d3f1779c",
    TenantGUID: "default",
    NodeGUID: "796dabcb-03e3-4c75-b41a-da1c53382695",
    PoolGUID: "default",
    BucketGUID: "example-data-bucket",
    OwnerGUID: "default",
    Key: "hello.temp",
    Version: "1",
    IsLatest: true,
    IsDeleteMarker: false,
    IsLocal: true,
    ContentType: "text/plain",
    DocumentType: "Unknown",
    SourceUrl: "http://2f05aedcb507:8001/v1.0/tenants/default/buckets/example-data-bucket/objects/hello.temp",
    MD5Hash: "6CD3556DEB0DA54BCA060B4C39479839",
    SHA1Hash: "943A702D06F34599AEE1F8DA8EF9F7296031D699",
    SHA256Hash: "315F5BDB76D078C43B8AC0064E4A0164612B1FCE77C869345BFC94C75894EDD3",
    IsEncrypted: false,
    WriteMode: "GUID",
    CompressionType: "None",
    ContentLength: 13,
    CompressedLength: 0,
    EncryptedLength: 0,
    CompressionRatioPercent: 0,
    CompressionRatioX: 0,
    ExpirationUtc: "2025-01-05T12:17:37.812307Z",
    LastAccessUtc: "2025-01-05T12:16:37.810793Z",
    LastModifiedUtc: "2025-01-05T12:16:37.810793Z",
    CreatedUtc: "2025-01-05T12:16:37.810793Z"
}

export const expirationMockData = {
    ExpirationUtc: "2025-01-05T12:17:37.812307Z"
}

export const mockUploadRequest = {
    Key: "foo.txt"
}

export const mockUploadData = {
    GUID: "461b8fca-d2fa-45bf-9378-fcda8863836b",
    TenantGUID: "default",
    BucketGUID: "example-data-bucket",
    PoolGUID: "default",
    NodeGUID: "796dabcb-03e3-4c75-b41a-da1c53382695",
    OwnerGUID: "default",
    UploadGUID: "2351c255-3750-4a54-9e53-1b2adfc397d8",
    Key: "foo.txt",
    StartedUtc: "2025-01-05T12:51:04.566177Z",
    LastAccessUtc: "2025-01-05T12:51:04.566177Z",
    CreatedUtc: "2025-01-05T12:51:04.566177Z",
    ExpirationUtc: "2025-01-12T12:51:04.572129Z",
    Parts: []
}

export const mockUploadKey = 'foo.txt';

export const mockUploadPart = 1;

export const mockUploadList = [
    {
        GUID: "461b8fca-d2fa-45bf-9378-fcda8863836b",
        TenantGUID: "default",
        BucketGUID: "example-data-bucket",
        PoolGUID: "default",
        NodeGUID: "796dabcb-03e3-4c75-b41a-da1c53382695",
        OwnerGUID: "default",
        UploadGUID: "2351c255-3750-4a54-9e53-1b2adfc397d8",
        Key: "foo.txt",
        StartedUtc: "2025-01-05T12:51:04.566177Z",
        LastAccessUtc: "2025-01-05T12:51:04.566177Z",
        CreatedUtc: "2025-01-05T12:51:04.566177Z",
        ExpirationUtc: "2025-01-12T12:51:04.572129Z",
        Owner: {
            GUID: "default",
            TenantGUID: "default",
            FirstName: "Default",
            LastName: "User",
            FullName: "Default User",
            Notes: "Default password is password",
            Email: "default@user.com",
            PasswordSha256: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            Active: true,
            IsProtected: true,
            CreatedUtc: "2024-07-10T05:09:31.000000Z"
        },
        Parts: []
    },
    {
        GUID: "0510a545-74d1-44de-8627-845bc7f140c5",
        TenantGUID: "default",
        BucketGUID: "example-data-bucket",
        PoolGUID: "default",
        NodeGUID: "796dabcb-03e3-4c75-b41a-da1c53382695",
        OwnerGUID: "default",
        UploadGUID: "483d70d5-0fc1-4b35-b7d1-c3d11f818d5d",
        Key: "fool.txt",
        StartedUtc: "2025-01-05T13:12:47.991469Z",
        LastAccessUtc: "2025-01-05T13:12:47.991469Z",
        CreatedUtc: "2025-01-05T13:12:47.991469Z",
        ExpirationUtc: "2025-01-12T13:12:47.996084Z",
        Owner: {
            GUID: "default",
            TenantGUID: "default",
            FirstName: "Default",
            LastName: "User",
            FullName: "Default User",
            Notes: "Default password is password",
            Email: "default@user.com",
            PasswordSha256: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
            Active: true,
            IsProtected: true,
            CreatedUtc: "2024-07-10T05:09:31.000000Z"
        },
        Parts: []
    }
]


export const mockEmbeddingResult = {
    "Success": true,
    "Timestamp": {
        "Start": "2025-01-08T07:01:08.494329Z",
        "End": "2025-01-08T07:01:08.561307Z",
        "TotalMs": 66.98,
        "Messages": {}
    },
    "MaxResults": 1000,
    "IterationsRequired": 1,
    "EndOfResults": true,
    "TotalRecords": 41,
    "RecordsRemaining": 0,
    "Statistics": {
        "Objects": 41,
        "Bytes": 52493155
    },
    "SharedPrefixes": [],
    "Objects": [
        {
            "GUID": "f69621c8-932d-44c4-8b52-f06c4d4e0b96",
            "TenantGUID": "default",
            "NodeGUID": "796dabcb-03e3-4c75-b41a-da1c53382695",
            "PoolGUID": "default",
            "BucketGUID": "example-data-bucket",
            "OwnerGUID": "default",
            "DataFlowRequestGUID": "e355f12c-4ee0-4f06-93f7-d13137b9885e",
            "DataFlowSuccess": true,
            "Key": "34.pdf",
            "Version": "1",
            "IsLatest": true,
            "IsDeleteMarker": false,
            "IsLocal": true,
            "ContentType": "application/pdf",
            "DocumentType": "Unknown",
            "SourceUrl": "http://05df76984f71:8001/v1.0/tenants/default/buckets/example-data-bucket/objects/34.pdf",
            "MD5Hash": "359222DAB1D008157BD3650130503240",
            "SHA1Hash": "4EFF5CFCA38B9DB31BCD5C9A2DED3F03F82D9B91",
            "SHA256Hash": "2A4AF568D7831C7568496069F64814CC1D825D1B9AB8AA0D55641259D8B48D38",
            "IsEncrypted": false,
            "WriteMode": "GUID",
            "CompressionType": "None",
            "ContentLength": 112959,
            "CompressedLength": 0,
            "EncryptedLength": 0,
            "CompressionRatioPercent": 0,
            "CompressionRatioX": 0,
            "LastAccessUtc": "2025-01-03T21:00:47.914970Z",
            "LastModifiedUtc": "2025-01-03T21:00:47.914970Z",
            "CreatedUtc": "2025-01-03T21:00:47.914970Z",
            "Owner": {
                "GUID": "default",
                "TenantGUID": "default",
                "FirstName": "Default",
                "LastName": "User",
                "FullName": "Default User",
                "Notes": "Default password is password",
                "Email": "default@user.com",
                "PasswordSha256": "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
                "Active": true,
                "IsProtected": true,
                "CreatedUtc": "2024-07-10T05:09:31.000000Z"
            }
        }]
};


