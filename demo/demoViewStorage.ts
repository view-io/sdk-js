import { ViewStorageSdk } from 'view-sdk';

const api = new ViewStorageSdk(
  'http://view.homedns.org:8000', //endpoint
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default' //access token
);

api.config.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ';

//region storage pool

const createStoragePool = async () => {
  try {
    const response = await api.storagePool.create({
      Name: 'My disk storage pool',
      Provider: 'Disk',
      WriteMode: 'GUID',
      UseSsl: false,
      DiskDirectory: './disk/',
      Compress: 'None',
      EnableReadCaching: false,
    } as any);
    console.log(response, 'Storage pool created successfully');
  } catch (error) {
    console.error('Error creating storage pool:', error);
  }
};

// createStoragePool();

const readStoragePool = async () => {
  try {
    const response = await api.storagePool.read('f5f2d1c4-6c0d-4e41-b6da-8620660b8d24');
    console.log(response, 'Storage pool read successfully');
  } catch (error) {
    console.error('Error reading storage pool:', error);
  }
};

// readStoragePool();

const readAllStoragePools = async () => {
  try {
    const response = await api.storagePool.readAll();
    console.log(response, 'Storage pools read successfully');
  } catch (error) {
    console.error('Error reading all storage pools:', error);
  }
};

// readAllStoragePools();

const updateStoragePool = async () => {
  try {
    const response = await api.storagePool.update({
      GUID: 'f5f2d1c4-6c0d-4e41-b6da-8620660b8d24',
      Name: 'My updated storage pool',
      Provider: 'Disk',
      WriteMode: 'GUID',
      UseSsl: false,
      DiskDirectory: './disk/',
      Compress: 'None',
      EnableReadCaching: false,
    } as any);
    console.log(response, 'Storage pool updated successfully');
  } catch (error) {
    console.error('Error updating storage pool:', error);
  }
};

// updateStoragePool();

const deleteStoragePool = async () => {
  try {
    const response = await api.storagePool.delete('f5f2d1c4-6c0d-4e41-b6da-8620660b8d24');
    console.log(response, 'Storage pool deleted successfully');
  } catch (error) {
    console.error('Error deleting storage pool:', error);
  }
};

// deleteStoragePool();

const existsStoragePool = async () => {
  try {
    const response = await api.storagePool.exists('f5f2d1c4-6c0d-4e41-b6da-8620660b8d24');
    console.log(response, 'Storage pool exists successfully');
  } catch (error) {
    console.error('Error checking if storage pool exists:', error);
  }
};

// existsStoragePool();

//endregion

//region bucket

const createBucket = async () => {
  try {
    const response = await api.bucket.create({
      PoolGUID: '00000000-0000-0000-0000-000000000000',
      Name: 'testbucket',
      RegionString: 'us-west-1',
      Versioning: true,
    } as any);
    console.log(response, 'Bucket created successfully');
  } catch (error) {
    console.error('Error creating bucket:', error);
  }
};

// createBucket();

const readBucketObject = async () => {
  try {
    const response = await api.bucket.readObject('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Bucket read successfully');
  } catch (error) {
    console.error('Error reading bucket:', error);
  }
};

// readBucketObject();

const readBuckets = async () => {
  try {
    const response = await api.bucket.readAll();
    console.log(response, 'Buckets read successfully');
  } catch (error) {
    console.error('Error reading buckets:', error);
  }
};

// readBuckets();

const readMetadata = async () => {
  try {
    const response = await api.bucket.readMetadata('077f2c27-ac76-49b6-94c7-8d934510bb21');
    console.log(response, 'Bucket metadata read successfully');
  } catch (error) {
    console.error('Error reading bucket metadata:', error);
  }
};

// readMetadata();

const updateBucket = async () => {
  try {
    const response = await api.bucket.update({
      GUID: '077f2c27-ac76-49b6-94c7-8d934510bb21',
      Name: 'testbucket',
      RegionString: 'us-west-1',
      Versioning: true,
    } as any);
    console.log(response, 'Bucket updated successfully');
  } catch (error) {
    console.error('Error updating bucket:', error);
  }
};

// updateBucket();

const deleteBucket = async () => {
  try {
    const response = await api.bucket.delete('077f2c27-ac76-49b6-94c7-8d934510bb21');
    console.log(response, 'Bucket deleted successfully');
  } catch (error) {
    console.error('Error deleting bucket:', error);
  }
};

// deleteBucket();

const readTags = async () => {
  try {
    const response = await api.bucket.readTags('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Tags read successfully');
  } catch (error) {
    console.error('Error reading tags:', error);
  }
};

// readTags();

const createTags = async () => {
  try {
    const response = await api.bucket.createTags('00000000-0000-0000-0000-000000000000', [
      {
        Key: 'foo',
        Value: 'bar',
      },
    ] as any);
    console.log(response, 'Tags created successfully');
  } catch (error) {
    console.error('Error creating tags:', error);
  }
};

// createTags();

const deleteTags = async () => {
  try {
    const response = await api.bucket.deleteTags('e582882e-3cf0-4a0f-8989-df3a4ad47190');
    console.log(response, 'Tags deleted successfully');
  } catch (error) {
    console.error('Error deleting tags:', error);
  }
};

// deleteTags();

const createACL = async () => {
  try {
    const response = await api.bucket.createACL('00000000-0000-0000-0000-000000000000', {
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
    } as any);
    console.log(response, 'ACL created successfully');
  } catch (error) {
    console.error('Error creating ACL:', error);
  }
};

// createACL();

const readACL = async () => {
  try {
    const response = await api.bucket.readACL('00000000-0000-0000-0000-000000000000');
    console.log(response, 'ACL read successfully');
  } catch (error) {
    console.error('Error reading ACL:', error);
  }
};

// readACL();

const deleteACL = async () => {
  try {
    const response = await api.bucket.deleteACL('077f2c27-ac76-49b6-94c7-8d934510bb21');
    console.log(response, 'ACL deleted successfully');
  } catch (error) {
    console.error('Error deleting ACL:', error);
  }
};

// deleteACL();

//endregion

//region object

const createObject = async () => {
  try {
    const response = await api.object.create(
      '00000000-0000-0000-0000-000000000000',
      'testsdk.temp',
      'testobject' as any
    );
    console.log(response, 'Object created successfully');
  } catch (error) {
    console.error('Error creating object:', error);
  }
};

// createObject();

const readObjectData = async () => {
  try {
    const response = await api.object.readData('00000000-0000-0000-0000-000000000000', 'hello.temp');
    console.log(response, 'Object read successfully');
  } catch (error) {
    console.error('Error reading object:', error);
  }
};

// readObjectData();

const readObjectDataInRange = async () => {
  try {
    const response = await api.object.readDataInRange(
      '00000000-0000-0000-0000-000000000000',
      'hello.temp' as any,
      'bytes=1-3' as any
    );
    console.log(response, 'Object read successfully');
  } catch (error) {
    console.error('Error reading object:', error);
  }
};

// readObjectDataInRange();

const readObjectMetadata = async () => {
  try {
    const response = await api.object.readMetadata('00000000-0000-0000-0000-000000000000', 'hello.temp');
    console.log(response, 'Object metadata read successfully');
  } catch (error) {
    console.error('Error reading object metadata:', error);
  }
};

// readObjectMetadata();

const writeObjectExpiration = async () => {
  try {
    const response = await api.object.writeExpiration('00000000-0000-0000-0000-000000000000', 'hello.temp', {
      ExpirationUtc: '2023-09-18T00:00:00.000001Z',
    } as any);
    console.log(response, 'Object expiration created successfully');
  } catch (error) {
    console.error('Error creating object expiration:', error);
  }
};

// writeObjectExpiration();

const deleteObject = async () => {
  try {
    const response = await api.object.delete('00000000-0000-0000-0000-000000000000', 'hello.temp');
    console.log(response, 'Object deleted successfully');
  } catch (error) {
    console.error('Error deleting object:', error);
  }
};

// deleteObject();

const createObjectTags = async () => {
  try {
    const response = await api.object.createTags('00000000-0000-0000-0000-000000000000', 'hello.temp', [
      {
        Key: 'hello',
        Value: 'My first key!',
      },
    ] as any);
    console.log(response, 'Object tags created successfully');
  } catch (error) {
    console.error('Error creating object tags:', error);
  }
};

// createObjectTags();

const readObjectTags = async () => {
  try {
    const response = await api.object.readTags('00000000-0000-0000-0000-000000000000', 'hello.temp');
    console.log(response, 'Object tags read successfully');
  } catch (error) {
    console.error('Error reading object tags:', error);
  }
};

// readObjectTags();

const deleteObjectTags = async () => {
  try {
    const response = await api.object.deleteTags('00000000-0000-0000-0000-000000000000', 'hello.temp');
    console.log(response, 'Object tags deleted successfully');
  } catch (error) {
    console.error('Error deleting object tags:', error);
  }
};

// deleteObjectTags();

const createObjectACL = async () => {
  try {
    const response = await api.object.createACL('00000000-0000-0000-0000-000000000000', 'hello.temp', {
      Owner: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        FirstName: 'Default',
        LastName: 'User',
        FullName: 'Default User',
        Notes: 'Default password is password',
        Email: 'default@user.com',
        Active: true,
        CreatedUtc: '2024-08-06T16:40:20.223290Z',
      },
      Entries: [],
    } as any);
    console.log(response, 'Object ACL created successfully');
  } catch (error) {
    console.error('Error creating object ACL:', error);
  }
};

// createObjectACL();

const readObjectACL = async () => {
  try {
    const response = await api.object.readACL('00000000-0000-0000-0000-000000000000', 'hello.temp');
    console.log(response, 'Object ACL read successfully');
  } catch (error) {
    console.error('Error reading object ACL:', error);
  }
};

// readObjectACL();

const deleteObjectACL = async () => {
  try {
    const response = await api.object.deleteACL('00000000-0000-0000-0000-000000000000', 'testobject');
    console.log(response, 'Object ACL deleted successfully');
  } catch (error) {
    console.error('Error deleting object ACL:', error);
  }
};

// deleteObjectACL();

//endregion

//region Multipart upload

const createMultipartUpload = async () => {
  try {
    const response = await api.multipartUpload.create('00000000-0000-0000-0000-000000000000', {
      Key: 'foo.txt',
    } as any);
    console.log(response, 'Multipart upload created successfully');
  } catch (error) {
    console.error('Error creating multipart upload:', error);
  }
};

// createMultipartUpload();

const readMultipartUpload = async () => {
  try {
    const response = await api.multipartUpload.read('00000000-0000-0000-0000-000000000000', 'foo.txt');
    console.log(response, 'Multipart upload read successfully');
  } catch (error) {
    console.error('Error reading multipart upload:', error);
  }
};

// readMultipartUpload();

const readAllMultipartUploads = async () => {
  try {
    const response = await api.multipartUpload.readAll('00000000-0000-0000-0000-000000000000');
    console.log(response, 'Multipart uploads read successfully');
  } catch (error) {
    console.error('Error reading all multipart uploads:', error);
  }
};

// readAllMultipartUploads();

const uploadPart = async () => {
  try {
    const response = await api.multipartUpload.uploadPart(
      '00000000-0000-0000-0000-000000000000',
      'hello.txt',
      1,
      'Hey There'
    );
    console.log(response, 'Part uploaded successfully');
  } catch (error) {
    console.error('Error uploading part:', error);
  }
};

// uploadPart();

const readPart = async () => {
  try {
    const response = await api.multipartUpload.readPart('00000000-0000-0000-0000-000000000000', 'hello.txt', 1);
    console.log(response, 'Part read successfully');
  } catch (error) {
    console.error('Error reading part:', error);
  }
};

// readPart();

const deletePart = async () => {
  try {
    const response = await api.multipartUpload.deletePart('00000000-0000-0000-0000-000000000000', 'hello.txt', 1);
    console.log(response, 'Part deleted successfully');
  } catch (error) {
    console.error('Error deleting part:', error);
  }
};

// deletePart();

const deleteMultipartUpload = async () => {
  try {
    const response = await api.multipartUpload.delete('00000000-0000-0000-0000-000000000000', 'hello.txt');
    console.log(response, 'Multipart upload deleted successfully');
  } catch (error) {
    console.error('Error deleting multipart upload:', error);
  }
};

// deleteMultipartUpload();

const completeMultipartUpload = async () => {
  try {
    const response = await api.multipartUpload.complete('00000000-0000-0000-0000-000000000000', 'foo.txt');
    console.log(response, 'Multipart upload completed successfully');
  } catch (error) {
    console.error('Error completing multipart upload:', error);
  }
};

completeMultipartUpload();
