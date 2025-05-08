import { ViewStorageSdk } from 'view-sdk';

const storage = new ViewStorageSdk(
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default', //access token
  'http://view.homedns.org:8001/' //endpoint
);

storage.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjbcKaGXxIDHLMkRBC6uiU5EKuJ1vZhr0WCtKx2AUy9mb1Fl67jAdKXTPhS35FWmC0QdR50vS6UcuJdRliZt0a1oudQvMM76q1EIrNwqcNkv7YiNROy3+A8Y6Gkyq2knUlKjgQdp1vkjMuuU1bwyA4HDHRDSDetFjMSxoGcbTZdmb1LWZNZ9vXepBPknDYa+bdIOVeoXKUzOTMO3akkdPT+Jy5JV7f6HEm5Xm8HnZ+62TcSNM24ZaR3U0Kwm9yESI3fjLmMuA26MbP0DD+DRT8uPirP4aA7m1ODeS8NCkzCPU';

// storage.logResponses = true;

const completeMultipartUpload = async () => {
  try {
    const response = await storage.completeMultipartUpload('00000000-0000-0000-0000-000000000000', 'hello.txt');

    console.log(response, 'multipart upload completed successfully');
  } catch (err) {
    console.log('Error completing multipart upload:', err);
  }
};
// completeMultipartUpload();

const deleteMultipartUpload = async () => {
  try {
    const response = await storage.deleteMultipartUpload('00000000-0000-0000-0000-000000000000', 'hello.txt');

    console.log(response, 'part deleted successfully');
  } catch (err) {
    console.log('Error deleting multipart upload:', err);
  }
};
// deleteMultipartUpload();

const deletePartOfMultipartUpload = async () => {
  try {
    const response = await storage.deletePartOfMultipartUpload('00000000-0000-0000-0000-000000000000', 'hello.txt', 1);

    console.log(response, 'part deleted successfully');
  } catch (err) {
    console.log('Error deleting part:', err);
  }
};
// deletePartOfMultipartUpload();

const retrievePartOfMultipartUpload = async () => {
  try {
    const response = await storage.retrievePartOfMultipartUpload(
      '00000000-0000-0000-0000-000000000000',
      'hello.txt',
      1
    );

    console.log(response, 'part retrieved successfully');
  } catch (err) {
    console.log('Error retrieving part:', err);
  }
};
// retrievePartOfMultipartUpload();

const uploadPartOfMultipartUpload = async () => {
  try {
    const response = await storage.uploadPartOfMultipartUpload(
      '00000000-0000-0000-0000-000000000000',
      'hello.txt',
      1,
      'Hey There'
    );

    console.log(response, 'part uploaded successfully');
  } catch (err) {
    console.log('Error uploading part:', err);
  }
};
// uploadPartOfMultipartUpload();

const retrieveMultipartUploads = async () => {
  try {
    const response = await storage.retrieveMultipartUploads('00000000-0000-0000-0000-000000000000');

    console.log(response, 'Multipart uploads retrieved successfully');
  } catch (err) {
    console.log('Error retrieving multipart uploads:', err);
  }
};
// retrieveMultipartUploads();

const retrieveMultipartUpload = async () => {
  try {
    const response = await storage.retrieveMultipartUpload('00000000-0000-0000-0000-000000000000', 'hello.txt');
    console.log(response, 'Multipart upload retrieved successfully');
  } catch (err) {
    console.log('Error retrieving multipart upload:', err);
  }
};
// retrieveMultipartUpload();

const createMultipartUpload = async () => {
  try {
    const response = await storage.createMultipartUpload('00000000-0000-0000-0000-000000000000', {
      Key: 'hello1.txt',
    });
    console.log(response, 'Multipart upload created successfully');
  } catch (err) {
    console.log('Error creating multipart upload:', err);
  }
};

// createMultipartUpload();

const deleteObjectACL = async () => {
  try {
    const response = await storage.deleteObjectACL('00000000-0000-0000-0000-000000000000', 'testsdk.temp');
    console.log(response, 'Object ACL deleted successfully');
  } catch (err) {
    console.log('Error deleting object ACL:', err);
  }
};

// deleteObjectACL();

const readObjectACL = async () => {
  try {
    const response = await storage.retrieveObjectACL('00000000-0000-0000-0000-000000000000', 'testsdk.temp');
    console.log(response, 'Object ACL fetched successfully');
  } catch (err) {
    console.log('Error fetching object ACL:', err);
  }
};

// readObjectACL();

const createObjectACL = async () => {
  try {
    const response = await storage.createObjectACL('00000000-0000-0000-0000-000000000000', 'testsdk.temp', {
      Owner: {},
      Users: [],
      Entries: [],
    });
    console.log(response, 'Object ACL created successfully');
  } catch (err) {
    console.log('Error creating object ACL:', err);
  }
};

// createObjectACL();

const deleteObjectTags = async () => {
  try {
    const response = await storage.deleteObjectTags('00000000-0000-0000-0000-000000000000', 'testsdk.temp');
    console.log(response, 'Object tags deleted successfully');
  } catch (err) {
    console.log('Error deleting object tags:', err);
  }
};

// deleteObjectTags();
const retrieveObjectTags = async () => {
  try {
    const response = await storage.retrieveObjectTags('00000000-0000-0000-0000-000000000000', 'testsdk.temp');
    console.log(response, 'Object tags fetched successfully');
  } catch (err) {
    console.log('Error fetching object tags:', err);
  }
};

// retrieveObjectTags();

const writeTagForObject = async () => {
  try {
    const response = await storage.createObjectTags('00000000-0000-0000-0000-000000000000', 'testsdk.temp', [
      {
        Key: 'hello',
        Value: 'My first key!',
      },
    ]);
    console.log(response, 'Tag written for object successfully');
  } catch (err) {
    console.log('Error writing tag for object:', err);
  }
};

// writeTagForObject();

const deleteObject = async () => {
  try {
    const response = await storage.deleteObject('00000000-0000-0000-0000-000000000000', 'testsdk.temp');
    console.log(response, 'Object deleted successfully');
  } catch (err) {
    console.log('Error deleting object:', err);
  }
};

// deleteObject();

const retrieveMetadata = async () => {
  try {
    const response = await storage.retrieveObjectMetadata('00000000-0000-0000-0000-000000000000', 'testsdk.temp');
    console.log(response, 'Metadata fetched successfully');
  } catch (err) {
    console.log('Error fetching metadata:', err);
  }
};

// retrieveMetadata();

const writeObjectExpiration = async () => {
  try {
    const response = await storage.writeObjectExpiration('00000000-0000-0000-0000-000000000000', 'testsdk.temp', {
      ExpirationUtc: '2025-08-08T10:00:00Z',
    });
    console.log(response, 'Object expiration written successfully');
  } catch (err) {
    console.log('Error writing object expiration:', err);
  }
};

// writeObjectExpiration();

const retrieveObjectDataInRange = async () => {
  try {
    const response = await storage.retrieveObjectDataInRange(
      '00000000-0000-0000-0000-000000000000',
      'testsdk.temp',
      'bytes=1-3'
    );
    console.log(response, 'Object data in range read successfully');
  } catch (err) {
    console.log('Error reading object data in range:', err);
  }
};

// retrieveObjectDataInRange();

const readObjectData = async () => {
  try {
    const response = await storage.retrieveObjectData('00000000-0000-0000-0000-000000000000', 'testsdk.temp');
    console.log(response, 'Object data read successfully');
  } catch (err) {
    console.log('Error reading object data:', err);
  }
};

// readObjectData();

const writeObject = async () => {
  try {
    const response = await storage.writeObject('00000000-0000-0000-0000-000000000000', 'testsdk.temp', 'testobject');
    console.log(response, 'Object written successfully');
  } catch (err) {
    console.log('Error writing object:', err);
  }
};

// writeObject();
const deleteBucketACL = async () => {
  try {
    const response = await storage.deleteBucketACL('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Bucket ACL deleted successfully');
  } catch (err) {
    console.log('Error deleting bucket ACL:', err);
  }
};

// deleteBucketACL();

const retrieveBucketACL = async () => {
  try {
    const response = await storage.retrieveBucketACL('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Bucket ACL fetched successfully');
  } catch (err) {
    console.log('Error fetching bucket ACL:', err);
  }
};

// retrieveBucketACL();

const createBucketACL = async () => {
  try {
    const response = await storage.createBucketACL('00000000-0000-0000-0000-000000000000', {
      Owner: {
        GUID: 'default',
        TenantGUID: 'default',
        FirstName: 'Default',
        LastName: 'User',
        FullName: 'Default User',
        Notes: 'Default password is password',
        Email: 'default@user.com',
        Active: true,
        CreatedUtc: '2024-08-06T16:30:09.495213Z',
      },
      Users: [
        {
          GUID: 'default',
          TenantGUID: 'default',
          FirstName: 'Default',
          LastName: 'User',
          FullName: 'Default User',
          Notes: 'Default password is password',
          Email: 'default@user.com',
          Active: true,
          CreatedUtc: '2024-08-06T16:30:09.495213Z',
        },
      ],
      Entries: [
        {
          GUID: 'default',
          TenantGUID: 'default',
          BucketGUID: 'example-data-bucket',
          OwnerGUID: 'default',
          UserGUID: 'default',
          CanonicalUser: '',
          EnableRead: true,
          EnableReadAcp: true,
          EnableWrite: true,
          EnableWriteAcp: true,
          FullControl: true,
          CreatedUtc: '2024-08-06T16:30:09.643691Z',
        },
      ],
    });
    console.log(response, 'Bucket ACL created successfully');
  } catch (err) {
    console.log('Error creating bucket ACL:', err);
  }
};

// createBucketACL();
const deleteBucketTags = async () => {
  try {
    const response = await storage.deleteBucketTags('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Bucket tags deleted successfully');
  } catch (err) {
    console.log('Error deleting bucket tags:', err);
  }
};

// deleteBucketTags();
const retrieveBucketTags = async () => {
  try {
    const response = await storage.retrieveBucketTags('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Bucket tags fetched successfully');
  } catch (err) {
    console.log('Error fetching bucket tags:', err);
  }
};

// retrieveBucketTags();
const createBucketTags = async () => {
  try {
    const response = await storage.createBucketTags('00000000-0000-0000-0000-000000000000', [
      {
        Key: 'test',
        Value: 'test',
      },
    ]);
    console.log(response, 'Bucket tags created successfully');
  } catch (err) {
    console.log('Error creating bucket tags:', err);
  }
};
// createBucketTags();

const deleteBucket = async () => {
  try {
    const response = await storage.deleteBucket('ca432dea-6937-4ebe-a791-f09c16eacfdf');
    console.log(response, 'Bucket deleted successfully');
  } catch (err) {
    console.log('Error deleting bucket:', err);
  }
};

// deleteBucket();

const updateBucket = async () => {
  try {
    const response = await storage.updateBucket({
      GUID: 'ca432dea-6937-4ebe-a791-f09c16eacfdf',
      TenantGUID: '00000000-0000-0000-0000-000000000000',
      PoolGUID: '00000000-0000-0000-0000-000000000000',
      OwnerGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'testbucket [ASH1] [updated]',
      RegionString: 'us-west-1',
      Versioning: true,
      MaxMultipartUploadSeconds: 604800,
    });
    console.log(response, 'Bucket updated successfully');
  } catch (err) {
    console.log('Error updating bucket:', err);
  }
};

// updateBucket();

const retrieveBucketMetadata = async () => {
  try {
    const response = await storage.retrieveBucketMetadata('ca432dea-6937-4ebe-a791-f09c16eacfdf');
    console.log(response, 'Bucket fetched successfully');
  } catch (err) {
    console.log('Error fetching bucket:', err);
  }
};

// retrieveBucketMetadata();
const readAllBuckets = async () => {
  try {
    const response = await storage.retrieveBuckets();
    console.log(response, 'Buckets fetched successfully');
  } catch (err) {
    console.log('Error fetching buckets:', err);
  }
};

// readAllBuckets();

const enumerateBuckets = async () => {
  try {
    const response = await storage.retrieveBucketObjects('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Buckets fetched successfully');
  } catch (err) {
    console.log('Error fetching buckets:', err);
  }
};

// enumerateBuckets();

const createBucket = async () => {
  try {
    const response = await storage.createBucket({
      PoolGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'testbucket [ASH1]',
      RegionString: 'us-west-1',
      Versioning: true,
    });
    console.log(response, 'Bucket created successfully');
  } catch (err) {
    console.log('Error creating bucket:', err);
  }
};

// createBucket();

const deleteStoragePool = async () => {
  try {
    const response = await storage.deleteStoragePool('8d323640-eaf4-4fbf-a11a-84b89f74f776');
    console.log(response, 'Storage pool deleted successfully');
  } catch (err) {
    console.log('Error deleting Storage pool:', err);
  }
};

// deleteStoragePool();

const existsStoragePool = async () => {
  try {
    const response = await storage.existsStoragePool('4a931b31-a8a7-4b65-ab35-80e647a46ffd');
    console.log(response, 'Storage pool exists');
  } catch (err) {
    console.log('Error checking Storage pool:', err);
  }
};

// existsStoragePool();

const updateStoragePool = async () => {
  try {
    const response = await storage.updateStoragePool({
      GUID: '4a931b31-a8a7-4b65-ab35-80e647a46ffd',
      Name: 'My disk storage pool [updated]',
      Provider: 'Disk',
      WriteMode: 'GUID',
      UseSsl: false,
      DiskDirectory: './disk/',
      Compress: 'None',
      EnableReadCaching: false,
    });
    console.log(response, 'Storage pool updated successfully');
  } catch (err) {
    console.log('Error updating Storage pool:', err);
  }
};

// updateStoragePool();

const readStoragePool = async () => {
  try {
    const response = await storage.retrieveStoragePool('4a931b31-a8a7-4b65-ab35-80e647a46ffd');
    console.log(response, 'Storage pool fetched successfully');
  } catch (err) {
    console.log('Error fetching Storage pool:', err);
  }
};

// readStoragePool();
const readAllStoragePools = async () => {
  try {
    const response = await storage.retrieveStoragePools();
    console.log(response, 'Storage pools fetched successfully');
  } catch (err) {
    console.log('Error fetching Storage pools:', err);
  }
};

// readAllStoragePools();

const createStoragePool = async () => {
  try {
    const response = await storage.createStoragePool({
      Name: 'My disk storage pool',
      Provider: 'Disk',
      WriteMode: 'GUID',
      UseSsl: false,
      DiskDirectory: './disk/',
      Compress: 'None',
      EnableReadCaching: false,
    });
    console.log(response, 'Storage pool created successfully');
  } catch (err) {
    console.log('Error creating Storage pool:', err);
  }
};

// createStoragePool();
