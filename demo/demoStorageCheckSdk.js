const { ViewStorageSdk } = require('view-sdk');

const api = new ViewStorageSdk(
    'default', //tenant Id
    'default', //access token
    'http://view.homedns.org:8000/' //endpoint
);

const retrieveAllBuckets = async () => {
    try {
        const data = await api.retrieveAllBuckets();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const retrieveBucketByGuid = async () => {
    try {
        const data = await api.retrieveBucketByGuid('example-data-bucket');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const writeBucket = async () => {
    try {
        const data = await api.writeBucket({
            PoolGUID: "default",
            Name: "testbucket1",
            RegionString: "us-west-1",
            Versioning: true
        });
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const updateBucket = async () => {
    try {
        const data = await api.updateBucket({

            GUID: "919b8c15-62e8-4574-8698-d537c1a38383",
            TenantGUID: "default",
            PoolGUID: "default",
            OwnerGUID: "default",
            Name: "testbucket23",
            RegionString: "us-west-1",
            Versioning: true,
            RetentionMinutes: 1,
            LastAccessUtc: "2023-08-07T22:00:55.328617",
            CreatedUtc: "2023-08-07T22:00:55.328617"
        });
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const deleteBucket = async () => {
    try {
        const data = await api.deleteBucket('919b8c15-62e8-4574-8698-d537c1a38383');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const retrieveTagByBucket = async () => {
    try {
        const data = await api.retrieveTagByBucket('example-data-bucket');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const deleteTag = async () => {
    try {
        const data = await api.deleteTag('example-data-bucket');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const writeTagForBucket = async () => {
    try {
        const data = await api.writeTagForBucket('example-data-bucket', [{
            Key: "foo",
            Value: "bar"
        }]);
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const retrieveBucketByACL = async () => {
    try {
        const data = await api.retrieveBucketByACL('example-data-bucket');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const deleteAcl = async () => {
    try {
        const data = await api.deleteAcl('example-data-bucket');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const writeAclForBucket = async () => {
    try {
        const data = await api.writeAclForBucket('example-data-bucket', {
            Owner: {
                GUID: "default",
                TenantGUID: "default",
                FirstName: "Default",
                LastName: "User",
                FullName: "Default User",
                Notes: "Default password is password",
                Email: "default@user.com",
                Active: true,
                CreatedUtc: "2024-08-06T16:30:09.495213Z"
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
                    Active: true,
                    CreatedUtc: "2024-08-06T16:30:09.495213Z"
                }
            ],
            Entries: [
                {
                    GUID: "default",
                    TenantGUID: "default",
                    BucketGUID: guid,
                    OwnerGUID: "default",
                    UserGUID: "default",
                    CanonicalUser: "",
                    EnableRead: true,
                    EnableReadAcp: true,
                    EnableWrite: true,
                    EnableWriteAcp: true,
                    FullControl: true,
                    CreatedUtc: "2024-08-06T16:30:09.643691Z"
                }
            ]
        });
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const existsObject = async () => {
    try {
        const data = await api.existsObject('example-data-bucket', 'hello.temp');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const writeObject = async () => {
    try {
        const data = await api.writeObject('example-data-bucket', 'hello.temp', 'D;chunk-signature=c47420eedec1c2370bb5a16b80d282244790d3ae3369fb1a401c5cb49412f619;Hello, world!0;chunk-signature=b338f2fd4775cd936fa244a1ba27470a2c58581c9882b471620ed802889a176e');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const writeExpiration = async () => {
    try {
        const data = await api.writeExpiration('example-data-bucket', 'hello.temp', {
            ExpirationUtc: "2023-09-15T00:00:00.000001Z"
        });
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const retrieveObjectMetadata = async () => {
    try {
        const data = await api.retrieveObjectMetadata('example-data-bucket', '34.pdf');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};


const deleteObject = async () => {
    try {
        const data = await api.deleteObject('example-data-bucket', 'hello.temp');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const createMultipartUpload = async () => {
    try {
        const data = await api.createMultipartUpload('example-data-bucket', {
            Key: "for.txt"
        });
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const retrieveAllMultipartUpload = async () => {
    try {
        const data = await api.retrieveAllMultipartUpload('example-data-bucket');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const retrieveMultipartUpload = async () => {
    try {
        const data = await api.retrieveMultipartUpload('example-data-bucket', 'for.txt');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const retrievePartMultipartUpload = async () => {
    try {
        const data = await api.retrievePartMultipartUpload('example-data-bucket', 'for.txt', 1);
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const deletePart = async () => {
    try {
        const data = await api.deletePart('example-data-bucket', 'for.txt', 1);
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const deleteMultipartUpload = async () => {
    try {
        const data = await api.deleteMultipartUpload('example-data-bucket', 'for.txt');
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const useSDK = () => {
    // retrieveAllBuckets();
    // retrieveBucketByGuid();
    //writeBucket();
    // updateBucket();
    //deleteBucket();
    //retrieveTagByBucket();
    //deleteTag();
    //writeTagForBucket();
    //retrieveBucketByACL();
    //deleteAcl();
    //writeAclForBucket();
    // existsObject();
    //writeObject();
    //writeExpiration();
    //deleteObject();
    //createMultipartUpload();
    //retrieveAllMultipartUpload();
    // retrieveMultipartUpload();
    // retrievePartMultipartUpload();
    //deletePart();
    //deleteMultipartUpload();
    retrieveObjectMetadata();
};

useSDK();
