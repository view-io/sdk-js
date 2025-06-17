import { ViewProcessorSdk } from 'view-sdk';

const api = new ViewProcessorSdk(
  'http://view.homedns.org:8000', //endpoint
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default' //access token
);

api.config.accessToken =
  'mXCNtMWDsW0/pr+IwRFUjb15G7CPCCH7RW0c4Mmj+qzQf0yTiW0yBKRsvEDV/IEtIBLbL7XqYAjvwF2u6+ykonqdBUgaWg8z5MeerCUs+BJAU8QltaBgfPsXwdZ7hZQW4AKh6ZDRM03N6EbYflYnr4miAyZLq1V/MiA4HenvkuH8uWa8LKiW8JFbC95jVee7QByq8smCLwrWtZ2TJCXNGOB6R2xE5zTuhnxOc3f75IoBjo6STwcwUFABtdTZ1TKxFvKoR5fRJKP+RhjTNStXrQvaTAlANtc+NPG7dm0HrTQ0y4Jpf2PTdoa+MbPbWfnZ';

//region type detection

const typeDetection = async () => {
  try {
    const result = await api.process.typeDetection({
      menu: {
        id: 'file',
        value: 'File',
        popup: {
          menuitem: [
            { value: 'New', onclick: 'CreateNewDoc()' },
            { value: 'Open', onclick: 'OpenDoc()' },
            { value: 'Close', onclick: 'CloseDoc()' },
          ],
        },
      },
    });
    console.log(result, 'Type detection result');
  } catch (error) {
    console.log(error, 'Error type detection');
  }
};

// typeDetection();

//endregion

// region processing pipeline

const processingPipelineStorage = async () => {
  try {
    const result = await api.process.processingPipeline({
      Async: true,
      Tenant: {
        GUID: '00000000-0000-0000-0000-000000000000',
        Name: 'Default Tenant',
        Region: 'us-west-1',
        S3BaseDomain: 'localhost',
        DefaultPoolGUID: '00000000-0000-0000-0000-000000000000',
        Active: true,
      },
      Collection: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My first collection',
        AllowOverwrites: true,
        AdditionalData: 'Created by setup',
      },
      Bucket: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        PoolGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Category: 'Data',
        Name: 'example-data-bucket',
        RegionString: 'us-west-1',
        Versioning: true,
        MaxMultipartUploadSeconds: 604800,
      },
      Pool: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'default',
        Provider: 'Disk',
        WriteMode: 'GUID',
        UseSsl: false,
        DiskDirectory: './disk/',
        Compress: 'None',
        EnableReadCaching: false,
      },
      Object: {
        GUID: '00000000-0000-0000-0000-000000000000',
        ParentGUID: null,
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        TenantName: 'My default tenant',
        PoolGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        BucketName: 'data',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Key: 'hello1.txt',
        Version: '1',
        ContentType: 'text/plain',
        DocumentType: 'Text',
        ContentLength: 13,
      },
      MetadataRule: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'example-metadata-rule',
        ContentType: '*',
        MaxContentLength: 16777216,
        DataFlowEndpoint: 'http://localhost:8501/processor',
        TypeDetectorEndpoint: 'http://localhost:8501/processor/typedetector',
        SemanticCellEndpoint: 'http://localhost:8341/',
        MaxChunkContentLength: 512,
        ShiftSize: 448,
        UdrEndpoint: 'http://localhost:8321/',
        TopTerms: 25,
        CaseInsensitive: true,
        IncludeFlattened: true,
        DataCatalogEndpoint: 'http://localhost:8201/',
        DataCatalogType: 'Lexi',
        DataCatalogCollection: 'default',
        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
        TargetBucketGUID: '00000000-0000-0000-0000-000000000000',
      },
      EmbeddingsRule: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My storage server embeddings rule',
        ContentType: '*',
        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
        VectorRepositoryGUID: '00000000-0000-0000-0000-000000000000',
        DataFlowEndpoint: 'http://localhost:8501/processor',
        EmbeddingsGenerator: 'LCProxy',
        GeneratorUrl: 'http://localhost:8301/',
        GeneratorApiKey: '',
        VectorStoreUrl: 'http://localhost:8311/',
        MaxContentLength: 16777216,
      },
      VectorRepository: {
        GUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My vector repository',
        RepositoryType: 'Pgvector',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        DatabaseHostname: 'localhost',
        DatabaseName: 'vectordb',
        DatabaseTable: 'minilm',
        DatabasePort: 5432,
        DatabaseUser: 'postgres',
        DatabasePassword: 'password',
      },
      GraphRepository: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        ApiKey: 'default',
        GraphIdentifier: '00000000-0000-0000-0000-000000000000',
      },
    });
  } catch (error) {
    console.log(error, 'Error processing pipeline');
  }
};

// processingPipelineStorage();

const processingPipelineCrawler = async () => {
  try {
    const result = await api.process.processingPipeline({
      Async: true,
      Tenant: {
        GUID: '00000000-0000-0000-0000-000000000000',
        Name: 'Default Tenant',
        Region: 'us-west-1',
        S3BaseDomain: 'localhost',
        DefaultPoolGUID: '00000000-0000-0000-0000-000000000000',
        Active: true,
      },
      Collection: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My first collection',
        AllowOverwrites: true,
        AdditionalData: 'Created by setup',
      },
      Object: {
        GUID: '00000000-0000-0000-0000-000000000001',
        ParentGUID: null,
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        TenantName: 'My default tenant',
        PoolGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        BucketName: 'data',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Key: 'hello2.txt',
        Version: '1',
        ContentType: 'text/plain',
        DocumentType: 'Text',
        ContentLength: 13,
      },
      MetadataRule: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'example-metadata-rule',
        ContentType: '*',
        MaxContentLength: 16777216,
        DataFlowEndpoint: 'http://localhost:8501/processor',
        TypeDetectorEndpoint: 'http://localhost:8501/processor/typedetector',
        SemanticCellEndpoint: 'http://localhost:8341/',
        MaxChunkContentLength: 512,
        ShiftSize: 448,
        UdrEndpoint: 'http://localhost:8321/',
        TopTerms: 25,
        CaseInsensitive: true,
        IncludeFlattened: true,
        DataCatalogEndpoint: 'http://localhost:8201/',
        DataCatalogType: 'Lexi',
        DataCatalogCollection: '00000000-0000-0000-0000-000000000000',
        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
      } as any,
      EmbeddingsRule: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My storage server embeddings rule',
        ContentType: '*',
        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
        VectorRepositoryGUID: '00000000-0000-0000-0000-000000000000',
        DataFlowEndpoint: 'http://localhost:8501/processor',
        EmbeddingsGenerator: 'LCProxy',
        GeneratorUrl: 'http://localhost:8301/',
        GeneratorApiKey: '',
        VectorStoreUrl: 'http://localhost:8311/',
        MaxContentLength: 16777216,
      },
      VectorRepository: {
        GUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My vector repository',
        RepositoryType: 'Pgvector',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        DatabaseHostname: 'localhost',
        DatabaseName: 'vectordb',
        DatabaseTable: 'minilm',
        DatabasePort: 5432,
        DatabaseUser: 'postgres',
        DatabasePassword: 'password',
      },
      GraphRepository: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        ApiKey: 'default',
        GraphIdentifier: '00000000-0000-0000-0000-000000000000',
      },
    } as any);
  } catch (error) {
    console.log(error, 'Error processing pipeline');
  }
};

// processingPipelineCrawler();

//endregion

// region cleanup pipeline

const cleanupPipelineStorage = async () => {
  try {
    const result = await api.process.cleanupPipeline({
      Async: true,
      Tenant: {
        GUID: '00000000-0000-0000-0000-000000000000',
        Name: 'Default Tenant',
        Region: 'us-west-1',
        S3BaseDomain: 'localhost',
        DefaultPoolGUID: 'd00000000-0000-0000-0000-000000000000fault',
        Active: true,
      },
      Collection: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My first collection',
        AllowOverwrites: true,
        AdditionalData: 'Created by setup',
      },
      Bucket: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        PoolGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'example-data-bucket',
        RegionString: 'us-west-1',
        Versioning: true,
        MaxMultipartUploadSeconds: 604800,
      },
      Pool: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'default',
        Provider: 'Disk',
        WriteMode: 'GUID',
        UseSsl: false,
        DiskDirectory: './disk/',
        Compress: 'None',
        EnableReadCaching: false,
      },
      Object: {
        GUID: '00000000-0000-0000-0000-000000000000',
        ParentGUID: null,
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        TenantName: 'My default tenant',
        NodeGUID: null,
        PoolGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        BucketName: 'data',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Key: 'hello1.txt',
        Version: '1',
        ContentType: 'text/plain',
        DocumentType: 'Text',
        ContentLength: 13,
        Data: 'VGhpcyBpcyBhIHNhbXBsZSBkb2N1bWVudCB3aXRoIGp1c3QgYSBoYW5kZnVsIG9mIHdvcmRzIHRoYXQgd2lsbCBiZSBwcm9jZXNzZWQgYnkgVmlldw==',
      },
      MetadataRule: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'example-metadata-rule',
        ContentType: '*',
        MaxContentLength: 16777216,
        DataFlowEndpoint: 'http://localhost:8501/processor',
        TypeDetectorEndpoint: 'http://localhost:8501/processor/typedetector',
        SemanticCellEndpoint: 'http://localhost:8341/',
        MaxChunkContentLength: 512,
        ShiftSize: 448,
        UdrEndpoint: 'http://localhost:8321/',
        TopTerms: 25,
        CaseInsensitive: true,
        IncludeFlattened: true,
        DataCatalogEndpoint: 'http://localhost:8201/',
        DataCatalogType: 'Lexi',
        DataCatalogCollection: 'default',
        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
      },
      EmbeddingsRule: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My storage server embeddings rule',
        ContentType: '*',
        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
        VectorRepositoryGUID: '00000000-0000-0000-0000-000000000000',
        DataFlowEndpoint: 'http://localhost:8501/processor',
        EmbeddingsGenerator: 'LCProxy',
        GeneratorUrl: 'http://localhost:8301/',
        GeneratorApiKey: '',
        VectorStoreUrl: 'http://localhost:8311/',
        MaxContentLength: 16777216,
      },
      VectorRepository: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My vector repository',
        RepositoryType: 'Pgvector',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        DatabaseHostname: 'localhost',
        DatabaseName: 'vectordb',
        DatabaseTable: 'minilm',
        DatabasePort: 5432,
        DatabaseUser: 'postgres',
        DatabasePassword: 'password',
      },
      GraphRepository: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        ApiKey: 'default',
        GraphIdentifier: '00000000-0000-0000-0000-000000000000',
      },
    } as any);
  } catch (error) {
    console.log(error, 'Error cleanup pipeline');
  }
};

// cleanupPipelineStorage();

const cleanupPipelineCrawler = async () => {
  try {
    const result = await api.process.cleanupPipeline({
      Async: true,
      Tenant: {
        GUID: '00000000-0000-0000-0000-000000000000',
        Name: 'Default Tenant',
        Region: 'us-west-1',
        S3BaseDomain: 'localhost',
        DefaultPoolGUID: '00000000-0000-0000-0000-000000000000',
        Active: true,
      },
      Collection: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My first collection',
        AllowOverwrites: true,
        AdditionalData: 'Created by setup',
      },
      DataRepository: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My disk data repository',
        RepositoryType: 'File',
        DiskDirectory: './disk/',
      },
      Object: {
        GUID: '00000000-0000-0000-0000-000000000001',
        ParentGUID: null,
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        TenantName: 'My default tenant',
        NodeGUID: null,
        PoolGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        BucketName: 'data',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Key: 'hello2.txt',
        Version: '1',
        ContentType: 'text/plain',
        DocumentType: 'Text',
        ContentLength: 13,
        Data: 'VGhpcyBpcyBhIHNhbXBsZSBkb2N1bWVudCB3aXRoIGp1c3QgYSBoYW5kZnVsIG9mIHdvcmRzIHRoYXQgd2lsbCBiZSBwcm9jZXNzZWQgYnkgVmlldw==',
      },
      MetadataRule: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'example-metadata-rule',
        ContentType: '*',
        MaxContentLength: 16777216,
        DataFlowEndpoint: 'http://localhost:8501/processor',
        TypeDetectorEndpoint: 'http://localhost:8501/processor/typedetector',
        SemanticCellEndpoint: 'http://localhost:8341/',
        MaxChunkContentLength: 512,
        ShiftSize: 448,
        UdrEndpoint: 'http://localhost:8321/',
        TopTerms: 25,
        CaseInsensitive: true,
        IncludeFlattened: true,
        DataCatalogEndpoint: 'http://localhost:8201/',
        DataCatalogType: 'Lexi',
        DataCatalogCollection: '00000000-0000-0000-0000-000000000000',
        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
      },
      EmbeddingsRule: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My storage server embeddings rule',
        ContentType: '*',
        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
        VectorRepositoryGUID: '00000000-0000-0000-0000-000000000000',
        DataFlowEndpoint: 'http://localhost:8501/processor',
        EmbeddingsGenerator: 'LCProxy',
        GeneratorUrl: 'http://localhost:8301/',
        GeneratorApiKey: '',
        VectorStoreUrl: 'http://localhost:8311/',
        MaxContentLength: 16777216,
      },
      VectorRepository: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My vector repository',
        RepositoryType: 'Pgvector',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        DatabaseHostname: 'localhost',
        DatabaseName: 'vectordb',
        DatabaseTable: 'minilm',
        DatabasePort: 5432,
        DatabaseUser: 'postgres',
        DatabasePassword: 'password',
      },
      GraphRepository: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My LiteGraph instance',
        RepositoryType: 'LiteGraph',
        EndpointUrl: 'http://localhost:8701/',
        ApiKey: 'default',
        GraphIdentifier: '00000000-0000-0000-0000-000000000000',
      },
    } as any);
  } catch (error) {
    console.log(error, 'Error cleanup pipeline');
  }
};

// cleanupPipelineCrawler();

//endregion

// region semantic cell extraction

const semanticCellExtraction = async () => {
  try {
    const result = await api.process.extractSemanticCells({
      DocumentType: 'Pdf',
      MetadataRule: {
        SemanticCellEndpoint: 'http://viewdemo:8000/',
        MinChunkContentLength: 1,
        MaxChunkContentLength: 512,
        ShiftSize: 512,
      },
      Data: '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NTAwIC0yODIgMTE4MiA5MzldIC9Gb250RmlsZTIgNzYgMCBSPj4NCmVuZG9iag0KMTAgMCBvYmoNCjw8L1R5cGUvRXh0R1N0YXRlL0JNL05vcm1hbC9jYSAxPj4NCmVuZG9iag0KMTEgMCBvYmoNCjw8L1R5cGUvRXh0R1N0YXRlL0JNL05vcm1hbC9DQSAxPj4NCmVuZG9iag0KMTIgMCBvYmoNCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1RydWVUeXBlL05hbWUvRjIvQmFzZUZvbnQvQkNERkVFK0FwdG9zL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZy9Gb250RGVzY3JpcHRvciAxMyAwIFIvRmlyc3RDaGFyIDMyL0xhc3RDaGFyIDMyL1dpZHRocyA3OCAwIFI+Pg0KZW5kb2JqDQoxMyAwIG9iag0KPDwvVHlwZS9Gb250RGVzY3JpcHRvci9Gb250TmFtZS9CQ0RGRUUrQXB0b3MvRmxhZ3MgMzIvSXRhbGljQW5nbGUgMC9Bc2NlbnQgOTM5L0Rlc2NlbnQgLTI4Mi9DYXBIZWlnaHQgOTM5L0F2Z1dpZHRoIDU2MS9NYXhXaWR0aCAxNjgyL0ZvbnRXZWlnaHQgNDAwL1hIZWlnaHQgMjUwL1N0ZW1WIDU2L0ZvbnRCQm94WyAtNTAwIC0yODIgMTE4MiA5MzldIC9Gb250RmlsZTIgNzYgMCBSPj4NCmVuZG9iag0KMTQgMCBvYmoNCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1RydWVUeXBlL05hbWUvRjMvQmFzZUZvbnQvQXJpYWxNVC9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcvRm9udERlc2NyaXB0b3IgMTUgMCBSL0ZpcnN0Q2hhciAzMi9MYXN0Q2hhciAzMi9XaWR0aHMgNzkgMCBSPj4NCmVuZG9iag0KMTUgMCBvYmoNCjw8L1R5cGUvRm9udERlc2NyaXB0b3IvRm9udE5hbWUvQXJpYWxNVC9GbGFncyAzMi9JdGFsaWNBbmdsZSAwL0FzY2VudCA5MDUvRGVzY2VudCAtMjEwL0NhcEhlaWdodCA3MjgvQXZnV2lkdGggNDQxL01heFdpZHRoIDI2NjUvRm9udFdlaWdodCA0MDAvWEhlaWdodCAyNTAvTGVhZGluZyAzMy9T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Mjg2IDI4NiAyODZdICA5OTZbIDI5M10gIDEwMDlbIDM0MF0gIDEwMzdbIDI3MF0gXSANCmVuZG9iag0KNzggMCBvYmoNClsgMjAzXSANCmVuZG9iag0KNzkgMCBvYmoNClsgMjc4XSANCmVuZG9iag0KODAgMCBvYmoNCjw8L1R5cGUvTWV0YWRhdGEvU3VidHlwZS9YTUwvTGVuZ3RoIDMwOTA+Pg0Kc3RyZWFtDQo8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IjMuMS03MDEiPgo8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgo8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiAgeG1sbnM6cGRmPSJodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvIj4KPHBkZjpQcm9kdWNlcj5NaWNyb3NvZnTCriBXb3JkIGZvciBNaWNyb3NvZnQgMzY1PC9wZGY6UHJvZHVjZXI+PC9yZGY6RGVzY3JpcHRpb24+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPkpvZWwgQ2hyaXN0bmVyPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+Cjx4bXA6Q3JlYXRvclRvb2w+TWljcm9zb2Z0wq4gV29yZCBmb3IgTWljcm9zb2Z0IDM2NTwveG1wOkNyZWF0b3JUb29sPjx4bXA6Q3JlYXRlRGF0ZT4yMDI0LTEyLTMxVDIxOjE1OjEwLTA4OjAwPC94bXA6Q3JlYXRlRGF0ZT48eG1wOk1vZGlmeURhdGU+MjAyNC0xMi0zMVQyMToxNToxMC0wODowMDwveG1wOk1vZGlmeURhdGU+PC9yZGY6RGVzY3JpcHRpb24+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyI+Cjx4bXBNTTpEb2N1bWVudElEPnV1aWQ6QzAxNDk1Q0ItMUQyMi00MDc4LUFERTAtRUVCNThGRDQ5QjU4PC94bXBNTTpEb2N1bWVudElEPjx4bXBNTTpJbnN0YW5jZUlEPnV1aWQ6QzAxNDk1Q0ItMUQyMi00MDc4LUFERTAtRUVCNThGRDQ5QjU4PC94bXBNTTpJbnN0YW5jZUlEPjwvcmRmOkRlc2NyaXB0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPC9yZGY6UkRGPjwveDp4bXBtZXRhPjw/eHBhY2tldCBlbmQ9InciPz4NCmVuZHN0cmVhbQ0KZW5kb2JqDQo4MSAwIG9iag0KPDwvRGlzcGxheURvY1RpdGxlIHRydWU+Pg0KZW5kb2JqDQo4MiAwIG9iag0KPDwvVHlwZS9YUmVmL1NpemUgODIvV1sgMSA0IDJdIC9Sb290IDEgMCBSL0luZm8gMTcgMCBSL0lEWzxDQjk1MTRDMDIyMUQ3ODQwQURFMEVFQjU4RkQ0OUI1OD48Q0I5NTE0QzAyMjFENzg0MEFERTBFRUI1OEZENDlCNTg+XSAvRmlsdGVyL0ZsYXRlRGVjb2RlL0xlbmd0aCAyMTk+Pg0Kc3RyZWFtDQp4nDXROW5CMRSFYUOYHlN4zDNhCIGEGUJDgcQG6NNkBTQsIgUrIA2KxDZA9E9ItEh0adOxAWLuDy786frYvpKtlB6Xi03PplJX1nAS7HHBM4UD/AnGF7Do3cBZ8NWAzL8VAp9CcCIsLX29bpRSPejDAN6hC7edQ33u+/de2cAOfp2tRvfMCQ/gAA+4wA0+MMALAWhADKLwCEEwIQQRCMMbZCEBcUhBEjKQhjLkIQdPUIASFOEVnqECL1CFOtSgCS1oQ+f6gjP5nJ+5YC2EfQXG8CEcd0r9A6EgIxUNCmVuZHN0cmVhbQ0KZW5kb2JqDQp4cmVmDQowIDgzDQowMDAwMDAwMDE4IDY1NTM1IGYNCjAwMDAwMDAwMTcgMDAwMDAgbg0KMDAwMDAwMDE2MyAwMDAwMCBuDQowMDAwMDAwMjE5IDAwMDAwIG4NCjAwMDAwMDA1MzQgMDAwMDAgbg0KMDAwMDAwMjEyNyAwMDAwMCBuDQowMDAwMDAyMjU1IDAwMDAwIG4NCjAwMDAwMDIyODMgMDAwMDAgbg0KMDAwMDAwMjQzOCAwMDAwMCBuDQowMDAwMDAyNTExIDAwMDAwIG4NCjAwMDAwMDI3NDggMDAwMDAgbg0KMDAwMDAwMjgwMiAwMDAwMCBuDQowMDAwMDAyODU2IDAwMDAwIG4NCjAwMDAwMDMwMjMgMDAwMDAgbg0KMDAwMDAwMzI2MSAwMDAwMCBuDQowMDAwMDAzNDIzIDAwMDAwIG4NCjAwMDAwMDM2NTAgMDAwMDAgbg0KMDAwMDAzOTExNCAwMDAwMCBuDQowMDAwMDAwMDE5IDY1NTM1IGYNCjAwMDAwMDAwMjAgNjU1MzUgZg0KMDAwMDAwMDAyMSA2NTUzNSBmDQowMDAwMDAwMDIyIDY1NTM1IGYNCjAwMDAwMDAwMjMgNjU1MzUgZg0KMDAwMDAwMDAyNCA2NTUzNSBmDQowMDAwMDAwMDI1IDY1NTM1IGYNCjAwMDAwMDAwMjYgNjU1MzUgZg0KMDAwMDAwMDAyNyA2NTUzNSBmDQowMDAwMDAwMDI4IDY1NTM1IGYNCjAwMDAwMDAwMzAgNjU1MzUgZg0KMDAwMDA0MDUwNyAwMDAwMCBuDQowMDAwMDAwMDMxIDY1NTM1IGYNCjAwMDAwMDAwMzIgNjU1MzUgZg0KMDAwMDAwMDAzMyA2NTUzNSBmDQowMDAwMDAwMDM0IDY1NTM1IGYNCjAwMDAwMDAwMzUgNjU1MzUgZg0KMDAwMDAwMDAzNiA2NTUzNSBmDQowMDAwMDAwMDM3IDY1NTM1IGYNCjAwMDAwMDAwMzggNjU1MzUgZg0KMDAwMDAwMDAzOSA2NTUzNSBmDQowMDAwMDAwMDQwIDY1NTM1IGYNCjAwMDAwMDAwNDEgNjU1MzUgZg0KMDAwMDAwMDA0MiA2NTUzNSBmDQowMDAwMDAwMDQzIDY1NTM1IGYNCjAwMDAwMDAwNDQgNjU1MzUgZg0KMDAwMDAwMDA0NSA2NTUzNSBmDQowMDAwMDAwMDQ2IDY1NTM1IGYNCjAwMDAwMDAwNDcgNjU1MzUgZg0KMDAwMDAwMDA0OCA2NTUzNSBmDQowMDAwMDAwMDQ5IDY1NTM1IGYNCjAwMDAwMDAwNTAgNjU1MzUgZg0KMDAwMDAwMDA1MSA2NTUzNSBmDQowMDAwMDAwMDUyIDY1NTM1IGYNCjAwMDAwMDAwNTMgNjU1MzUgZg0KMDAwMDAwMDA1NCA2NTUzNSBmDQowMDAwMDAwMDU1IDY1NTM1IGYNCjAwMDAwMDAwNTYgNjU1MzUgZg0KMDAwMDAwMDA1NyA2NTUzNSBmDQowMDAwMDAwMDU4IDY1NTM1IGYNCjAwMDAwMDAwNTkgNjU1MzUgZg0KMDAwMDAwMDA2MCA2NTUzNSBmDQowMDAwMDAwMDYxIDY1NTM1IGYNCjAwMDAwMDAwNjIgNjU1MzUgZg0KMDAwMDAwMDA2MyA2NTUzNSBmDQowMDAwMDAwMDY0IDY1NTM1IGYNCjAwMDAwMDAwNjUgNjU1MzUgZg0KMDAwMDAwMDA2NiA2NTUzNSBmDQowMDAwMDAwMDY3IDY1NTM1IGYNCjAwMDAwMDAwNjggNjU1MzUgZg0KMDAwMDAwMDA2OSA2NTUzNSBmDQowMDAwMDAwMDcwIDY1NTM1IGYNCjAwMDAwMDAwNzEgNjU1MzUgZg0KMDAwMDAwMDA3MiA2NTUzNSBmDQowMDAwMDAwMDczIDY1NTM1IGYNCjAwMDAwMDAwNzQgNjU1MzUgZg0KMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDQwNTU3IDAwMDAwIG4NCjAwMDAwNDEwNzQgMDAwMDAgbg0KMDAwMDA1MTg1MCAwMDAwMCBuDQowMDAwMDUyMjYwIDAwMDAwIG4NCjAwMDAwNTIyODcgMDAwMDAgbg0KMDAwMDA1MjMxNCAwMDAwMCBuDQowMDAwMDU1NDg3IDAwMDAwIG4NCjAwMDAwNTU1MzIgMDAwMDAgbg0KdHJhaWxlcg0KPDwvU2l6ZSA4My9Sb290IDEgMCBSL0luZm8gMTcgMCBSL0lEWzxDQjk1MTRDMDIyMUQ3ODQwQURFMEVFQjU4RkQ0OUI1OD48Q0I5NTE0QzAyMjFENzg0MEFERTBFRUI1OEZENDlCNTg+XSA+Pg0Kc3RhcnR4cmVmDQo1NTk1Mg0KJSVFT0YNCnhyZWYNCjAgMA0KdHJhaWxlcg0KPDwvU2l6ZSA4My9Sb290IDEgMCBSL0luZm8gMTcgMCBSL0lEWzxDQjk1MTRDMDIyMUQ3ODQwQURFMEVFQjU4RkQ0OUI1OD48Q0I5NTE0QzAyMjFENzg0MEFERTBFRUI1OEZENDlCNTg+XSAvUHJldiA1NTk1Mi9YUmVmU3RtIDU1NTMyPj4NCnN0YXJ0eHJlZg0KNTc3NjkNCiUlRU9G',
    } as any);
    console.log(result, 'semantic cell extraction done successfully');
  } catch (error) {
    console.log(error, 'Error semantic cell extraction');
  }
};

// semanticCellExtraction();

//endregion

// region Generating MetaData UDR

const generatingMetadataUdr = async () => {
  try {
    const result = await api.process.generateUdr({
      GUID: '00000000-0000-0000-0000-000000000000',
      Key: 'testfile.text',
      ContentType: 'text/plain',
      Type: 'Text',
      IncludeFlattened: true,
      CaseInsensitive: true,
      TopTerms: 10,
      AdditionalData:
        'The body below is simple sample text, base64 encoded, taken from https://en.wikipedia.org/wiki/Artificial_intelligence.',
      Metadata: {
        foo: 'bar',
      },
      MetadataRule: {
        GUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        BucketGUID: '00000000-0000-0000-0000-000000000000',
        OwnerGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'My metadata rule',
        ContentType: 'text/plain',
        UdrEndpoint: 'http://localhost:8000/',
        DataCatalogType: 'Lexi',
        DataCatalogEndpoint: 'http://localhost:8000/',
        DataCatalogCollection: '00000000-0000-0000-0000-000000000000',
        TopTerms: 10,
        CaseInsensitive: true,
        IncludeFlattened: true,
      },
      Data: 'QXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgKEFJKSwgaW4gaXRzIGJyb2FkZXN0IHNlbnNlLCBpcyBpbnRlbGxpZ2VuY2UgZXhoaWJpdGVkIGJ5IG1hY2hpbmVzLCBwYXJ0aWN1bGFybHkgY29tcHV0ZXIgc3lzdGVtcy4gSXQgaXMgYSBmaWVsZCBvZiByZXNlYXJjaCBpbiBjb21wdXRlciBzY2llbmNlIHRoYXQgZGV2ZWxvcHMgYW5kIHN0dWRpZXMgbWV0aG9kcyBhbmQgc29mdHdhcmUgdGhhdCBlbmFibGUgbWFjaGluZXMgdG8gcGVyY2VpdmUgdGhlaXIgZW52aXJvbm1lbnQgYW5kIHVzZSBsZWFybmluZyBhbmQgaW50ZWxsaWdlbmNlIHRvIHRha2UgYWN0aW9ucyB0aGF0IG1heGltaXplIHRoZWlyIGNoYW5jZXMgb2YgYWNoaWV2aW5nIGRlZmluZWQgZ29hbHMuWzFdIFN1Y2ggbWFjaGluZXMgbWF5IGJlIGNhbGxlZCBBSXMuCgpTb21lIGhpZ2gtcHJvZmlsZSBhcHBsaWNhdGlvbnMgb2YgQUkgaW5jbHVkZSBhZHZhbmNlZCB3ZWIgc2VhcmNoIGVuZ2luZXMgKGUuZy4sIEdvb2dsZSBTZWFyY2gpOyByZWNvbW1lbmRhdGlvbiBzeXN0ZW1zICh1c2VkIGJ5IFlvdVR1YmUsIEFtYXpvbiwgYW5kIE5ldGZsaXgpOyBpbnRlcmFjdGluZyB2aWEgaHVtYW4gc3BlZWNoIChlLmcuLCBHb29nbGUgQXNzaXN0YW50LCBTaXJpLCBhbmQgQWxleGEpOyBhdXRvbm9tb3VzIHZlaGljbGVzIChlLmcuLCBXYXltbyk7IGdlbmVyYXRpdmUgYW5kIGNyZWF0aXZlIHRvb2xzIChlLmcuLCBDaGF0R1BULCBBcHBsZSBJbnRlbGxpZ2VuY2UsIGFuZCBBSSBhcnQpOyBhbmQgc3VwZXJodW1hbiBwbGF5IGFuZCBhbmFseXNpcyBpbiBzdHJhdGVneSBnYW1lcyAoZS5nLiwgY2hlc3MgYW5kIEdvKS5bMl0gSG93ZXZlciwgbWFueSBBSSBhcHBsaWNhdGlvbnMgYXJlIG5vdCBwZXJjZWl2ZWQgYXMgQUk6ICJBIGxvdCBvZiBjdXR0aW5nIGVkZ2UgQUkgaGFzIGZpbHRlcmVkIGludG8gZ2VuZXJhbCBhcHBsaWNhdGlvbnMsIG9mdGVuIHdpdGhvdXQgYmVpbmcgY2FsbGVkIEFJIGJlY2F1c2Ugb25jZSBzb21ldGhpbmcgYmVjb21lcyB1c2VmdWwgZW5vdWdoIGFuZCBjb21tb24gZW5vdWdoIGl0J3Mgbm90IGxhYmVsZWQgQUkgYW55bW9yZS4iWzNdWzRd',
    } as any);
    console.log(result, 'Udr generation done successfully');
  } catch (error) {
    console.log(error, 'Error semantic cell extraction');
  }
};

generatingMetadataUdr();

//endregion
