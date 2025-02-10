const { ViewProcessorSdk } = require('view-sdk');

const api = new ViewProcessorSdk(
    'default', //tenant Id
    'default', //access token
    'http://view.homedns.org:8000/' //endpoint
);

const processStorageServer = async () => {
    try {
        const data = await api.processStorageServer({
            "Tenant": {
                "GUID": "default",
                "Name": "Default Tenant",
                "Region": "us-west-1",
                "S3BaseDomain": "localhost",
                "DefaultPoolGUID": "default",
                "Active": true,
                "CreatedUtc": "2024-07-10T05:09:31.000000Z"
            },
            "Collection": {
                "GUID": "default",
                "TenantGUID": "default",
                "Name": "My first collection",
                "AllowOverwrites": true,
                "AdditionalData": "Created by setup",
                "CreatedUtc": "2024-07-10T05:11:51.000000Z"
            },
            "Bucket": {
                "GUID": "example-data-bucket",
                "TenantGUID": "default",
                "PoolGUID": "default",
                "OwnerGUID": "default",
                "Category": "Data",
                "Name": "example-data-bucket",
                "RegionString": "us-west-1",
                "Versioning": true,
                "MaxMultipartUploadSeconds": 604800,
                "LastAccessUtc": "2024-07-10T05:09:32.000000Z",
                "CreatedUtc": "2024-07-10T05:09:32.000000Z"
            },
            "Pool": {
                "GUID": "default",
                "TenantGUID": "default",
                "Name": "default",
                "Provider": "Disk",
                "WriteMode": "GUID",
                "UseSsl": false,
                "DiskDirectory": "./disk/",
                "Compress": "None",
                "EnableReadCaching": false,
                "CreatedUtc": "2024-07-10T05:09:32.000000Z"
            },
            "Object": {
                "GUID": "00000000-0000-0000-0000-000000000000",
                "ParentGUID": null,
                "TenantGUID": "default",
                "TenantName": "My default tenant",
                "NodeGUID": null,
                "PoolGUID": "default",
                "BucketGUID": "data",
                "BucketName": "data",
                "OwnerGUID": "default",
                "Key": "hello1.txt",
                "Version": "1",
                "ContentType": "text/plain",
                "DocumentType": "Text",
                "ContentLength": 13,
                "Data": "VGhpcyBpcyBhIHNhbXBsZSBkb2N1bWVudCB3aXRoIGp1c3QgYSBoYW5kZnVsIG9mIHdvcmRzIHRoYXQgd2lsbCBiZSBwcm9jZXNzZWQgYnkgVmlldw=="
            },
            "MetadataRule": {
                "GUID": "example-metadata-rule",
                "TenantGUID": "default",
                "BucketGUID": "example-data-bucket",
                "OwnerGUID": "default",
                "Name": "example-metadata-rule",
                "ContentType": "*",
                "MaxContentLength": 16777216,
                "DataFlowEndpoint": "http://localhost:8501/processor",
                "TypeDetectorEndpoint": "http://localhost:8501/processor/typedetector",
                "SemanticCellEndpoint": "http://localhost:8341/",
                "MaxChunkContentLength": 512,
                "ShiftSize": 448,
                "UdrEndpoint": "http://localhost:8321/",
                "TopTerms": 25,
                "CaseInsensitive": true,
                "IncludeFlattened": true,
                "DataCatalogEndpoint": "http://localhost:8201/",
                "DataCatalogType": "Lexi",
                "DataCatalogCollection": "default",
                "GraphRepositoryGUID": "example-graph-repository",
                "TargetBucketGUID": "example-udr-bucket",
                "CreatedUtc": "2024-07-10T05:09:32.000000Z"
            },
            "EmbeddingsRule": {
                "GUID": "storage-embeddings-rule",
                "TenantGUID": "default",
                "BucketGUID": "example-data-bucket",
                "OwnerGUID": "default",
                "Name": "My storage server embeddings rule",
                "ContentType": "*",
                "TargetBucketGUID": "example-embeddings-bucket",
                "GraphRepositoryGUID": "example-graph-repository",
                "VectorRepositoryGUID": "example-vector-repository",
                "DataFlowEndpoint": "http://localhost:8501/processor",
                "EmbeddingsGenerator": "LCProxy",
                "GeneratorUrl": "http://localhost:8301/",
                "GeneratorApiKey": "",
                "VectorStoreUrl": "http://localhost:8311/",
                "MaxContentLength": 16777216,
                "CreatedUtc": "2024-07-10T05:09:32.000000Z"
            },
            "VectorRepository": {
                "GUID": "example-vector-repository",
                "TenantGUID": "default",
                "Name": "My vector repository",
                "RepositoryType": "Pgvector",
                "Model": "all-MiniLM-L6-v2",
                "Dimensionality": 384,
                "DatabaseHostname": "localhost",
                "DatabaseName": "vectordb",
                "DatabaseTable": "minilm",
                "DatabasePort": 5432,
                "DatabaseUser": "postgres",
                "DatabasePassword": "password",
                "PromptPrefix": "Use the following pieces of context to answer the question at the end. Documents are sorted by similarity to the question. If the context is not enough for you to answer the question, please politely explain that you do not have relevant context.  Do not try to make up an answer.",
                "CreatedUtc": "2024-07-10T05:09:32.000000Z"
            },
            "GraphRepository": {
                "GUID": "example-graph-repository",
                "TenantGUID": "default",
                "Name": "My LiteGraph instance",
                "RepositoryType": "LiteGraph",
                "EndpointUrl": "http://localhost:8701/",
                "Port": 0,
                "GraphIdentifier": "11111111-1111-1111-1111-111111111111",
                "CreatedUtc": "2024-07-10T05:09:32.000000Z"
            }
        }
        );
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};


const semanticCell = async () => {
    try {
        const data = await api.semanticCell({
            "DocumentType": "Text",
            "MetadataRule": {
                "SemanticCellEndpoint": "http://viewdemo:8000/",
                "MinChunkContentLength": 1,
                "MaxChunkContentLength": 512,
                "ShiftSize": 512
            },
            "Data": "VGl0bGUgb2YgQm9vawoKVGhlIGF1dGhvciBpcyBKb2VsIENocmlzdG5lcgoKQ2hhcHRlciAxCgpUaGlzIGlzIGEgc2FtcGxlIHNlbnRlbmNlIGZyb20gY2hhcHRlciAxLiAgSXQncyBub3QgbWVhbnQgdG8gYmUgdGVycmlibHkgbGFyZ2UuCgpDaGFwdGVyIDIKClRoaXMgY2hhcHRlciBpcyBicm9rZW4gaW50byB0d28gcGFydHMgLSB0aGlzIGludHJvZHVjdG9yeSBzZW50ZW5jZSBhcyBhIHNpbmdsZSBwYXJhZ3JhcGgsIGFuZCwgYSBzZWNvbmQgcGFyYWdyYXBoIHdoaWNoIGlzIHJlYWxseSBsb25nLiAgSG9wZWZ1bGx5IHRoZSBuZXh0IHBhcmFncmFwaCBpcyBicm9rZW4gaW50byBtdWx0aXBsZSBjaHVua3MuCgpBcnRpZmljaWFsIGludGVsbGlnZW5jZSAoQUkpIGlzIHJldm9sdXRpb25pemluZyB0aGUgd29ybGQgYXMgd2Uga25vdyBpdCwgYnJpbmdpbmcgdW5wcmVjZWRlbnRlZCBhZHZhbmNlbWVudHMgaW4gdmFyaW91cyBmaWVsZHMsIGZyb20gaGVhbHRoY2FyZSB0byB0cmFuc3BvcnRhdGlvbiwgZW50ZXJ0YWlubWVudCB0byBlZHVjYXRpb24sIGFuZCBiZXlvbmQ7IGl0cyBhYmlsaXR5IHRvIHByb2Nlc3MgdmFzdCBhbW91bnRzIG9mIGRhdGEgYXQgaW5jcmVkaWJsZSBzcGVlZHMgYWxsb3dzIGZvciBpbnNpZ2h0cyBhbmQgc29sdXRpb25zIHRoYXQgd2VyZSBvbmNlIHVuaW1hZ2luYWJsZSwgZW5hYmxpbmcgZWFybHkgZGlzZWFzZSBkZXRlY3Rpb24sIHBlcnNvbmFsaXplZCB0cmVhdG1lbnQgcGxhbnMsIGFuZCBldmVuIHByZWRpY3RpbmcgcGFuZGVtaWNzIGJlZm9yZSB0aGV5IHNwcmVhZDsgaW4gdGhlIHJlYWxtIG9mIHRyYW5zcG9ydGF0aW9uLCBBSS1wb3dlcmVkIHN5c3RlbXMgYXJlIG1ha2luZyBzZWxmLWRyaXZpbmcgY2FycyBhIHJlYWxpdHksIHJlZHVjaW5nIGFjY2lkZW50cyBhbmQgb3B0aW1pemluZyB0cmFmZmljIGZsb3csIHdoaWxlIGluIGVudGVydGFpbm1lbnQsIEFJIGlzIGVuaGFuY2luZyB1c2VyIGV4cGVyaWVuY2VzIHRocm91Z2ggcGVyc29uYWxpemVkIGNvbnRlbnQgcmVjb21tZW5kYXRpb25zIGFuZCBldmVuIGNyZWF0aW5nIG11c2ljLCBhcnQsIGFuZCBzdG9yaWVzIHRoYXQgcmVzb25hdGUgd2l0aCBpbmRpdmlkdWFscyBvbiBhIHBlcnNvbmFsIGxldmVsOyBlZHVjYXRpb24gaXMgYmVpbmcgdHJhbnNmb3JtZWQgYnkgQUkgdGhyb3VnaCBwZXJzb25hbGl6ZWQgbGVhcm5pbmcgZXhwZXJpZW5jZXMsIGludGVsbGlnZW50IHR1dG9yaW5nIHN5c3RlbXMsIGFuZCB0aGUgYXV0b21hdGlvbiBvZiBhZG1pbmlzdHJhdGl2ZSB0YXNrcywgZnJlZWluZyB1cCBlZHVjYXRvcnMgdG8gZm9jdXMgbW9yZSBvbiB0ZWFjaGluZyBhbmQgbGVzcyBvbiBwYXBlcndvcms7IEFJJ3MgaW1wYWN0IGV4dGVuZHMgdG8gaW5kdXN0cmllcyBzdWNoIGFzIGZpbmFuY2UsIHdoZXJlIGFsZ29yaXRobXMgYW5hbHl6ZSBtYXJrZXQgdHJlbmRzIHRvIG1ha2UgaW52ZXN0bWVudCBkZWNpc2lvbnMgd2l0aCByZW1hcmthYmxlIGFjY3VyYWN5LCBhbmQgYWdyaWN1bHR1cmUsIHdoZXJlIEFJIGhlbHBzIG9wdGltaXplIGNyb3AgeWllbGRzLCBtb25pdG9yIHNvaWwgaGVhbHRoLCBhbmQgbWFuYWdlIHJlc291cmNlcyBlZmZpY2llbnRseTsgc21hcnQgY2l0aWVzIGFyZSBlbWVyZ2luZywgcG93ZXJlZCBieSBBSSB0ZWNobm9sb2dpZXMgdGhhdCBpbXByb3ZlIGluZnJhc3RydWN0dXJlLCByZWR1Y2UgZW5lcmd5IGNvbnN1bXB0aW9uLCBhbmQgZW5oYW5jZSB0aGUgcXVhbGl0eSBvZiBsaWZlIGZvciByZXNpZGVudHM7IGZ1cnRoZXJtb3JlLCBBSSBpcyBwbGF5aW5nIGEgY3J1Y2lhbCByb2xlIGluIGNsaW1hdGUgY2hhbmdlIG1pdGlnYXRpb24sIGFuYWx5emluZyBjbGltYXRlIGRhdGEgdG8gcHJlZGljdCBmdXR1cmUgdHJlbmRzIGFuZCBzdWdnZXN0IHN1c3RhaW5hYmxlIHByYWN0aWNlczsgdGhlIGV0aGljYWwgY29uc2lkZXJhdGlvbnMgc3Vycm91bmRpbmcgQUkgYXJlIHNpZ25pZmljYW50LCB3aXRoIG9uZ29pbmcgZGViYXRlcyBhYm91dCBwcml2YWN5LCBiaWFzLCBhbmQgdGhlIGZ1dHVyZSBvZiB3b3JrLCBidXQgdGhlIHBvdGVudGlhbCBiZW5lZml0cyBhcmUgaW1tZW5zZTsgQUkgY2FuIGF1Z21lbnQgaHVtYW4gY2FwYWJpbGl0aWVzLCB0YWtpbmcgb3ZlciByZXBldGl0aXZlIHRhc2tzIGFuZCBhbGxvd2luZyBwZW9wbGUgdG8gZm9jdXMgb24gY3JlYXRpdmUgYW5kIHN0cmF0ZWdpYyBlbmRlYXZvcnM7IGNvbGxhYm9yYXRpdmUgcm9ib3RzLCBvciBjb2JvdHMsIGFyZSB3b3JraW5nIGFsb25nc2lkZSBodW1hbnMgaW4gZmFjdG9yaWVzLCBpbmNyZWFzaW5nIHByb2R1Y3Rpdml0eSBhbmQgc2FmZXR5OyBuYXR1cmFsIGxhbmd1YWdlIHByb2Nlc3NpbmcgYWR2YW5jZW1lbnRzIGVuYWJsZSBBSSB0byB1bmRlcnN0YW5kIGFuZCBnZW5lcmF0ZSBodW1hbiBsYW5ndWFnZSwgcG93ZXJpbmcgY2hhdGJvdHMgYW5kIHZpcnR1YWwgYXNzaXN0YW50cyB0aGF0IHByb3ZpZGUgY3VzdG9tZXIgc3VwcG9ydCwgYW5zd2VyIHF1ZXN0aW9ucywgYW5kIGV2ZW4gb2ZmZXIgY29tcGFuaW9uc2hpcDsgQUkncyBhYmlsaXR5IHRvIGxlYXJuIGFuZCBhZGFwdCBtZWFucyBpdCBjYW4gaW1wcm92ZSBvdmVyIHRpbWUsIGJlY29taW5nIG1vcmUgZWZmaWNpZW50IGFuZCBlZmZlY3RpdmUgaW4gc29sdmluZyBjb21wbGV4IHByb2JsZW1zOyBob3dldmVyLCByZXNwb25zaWJsZSBBSSBkZXZlbG9wbWVudCBpcyBjcnVjaWFsIHRvIGVuc3VyZSB0aGF0IHRoZXNlIHRlY2hub2xvZ2llcyBhcmUgdXNlZCBldGhpY2FsbHkgYW5kIGZvciB0aGUgZ3JlYXRlciBnb29kLCBuZWNlc3NpdGF0aW5nIHJvYnVzdCByZWd1bGF0aW9ucyBhbmQgZnJhbWV3b3JrcyB0byBndWlkZSB0aGVpciBkZXBsb3ltZW50OyBhcyBBSSBjb250aW51ZXMgdG8gZXZvbHZlLCBpdCBob2xkcyB0aGUgcHJvbWlzZSBvZiB1bmxvY2tpbmcgbmV3IGZyb250aWVycyBpbiBzY2llbmNlLCB0ZWNobm9sb2d5LCBhbmQgaHVtYW4gcG90ZW50aWFsLCBtYWtpbmcgaXQgb25lIG9mIHRoZSBtb3N0IGV4Y2l0aW5nIGFuZCB0cmFuc2Zvcm1hdGl2ZSBmb3JjZXMgb2Ygb3VyIHRpbWUuCg=="
        });
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const udrDocument = async () => {
    try {
        const data = await api.UdrDocument({
            "GUID": "00000000-0000-0000-0000-000000000000",
            "Key": "testfile.text",
            "ContentType": "text/plain",
            "Type": "Pdf",
            "IncludeFlattened": true,
            "CaseInsensitive": true,
            "TopTerms": 10,
            "AdditionalData": "The body below is simple sample text, base64 encoded, taken from https://en.wikipedia.org/wiki/Artificial_intelligence.",
            "Metadata": {
                "foo": "bar"
            },
            "MetadataRule": {
                "GUID": "00000000-0000-0000-0000-000000000000",
                "TenantGUID": "default",
                "BucketGUID": "data",
                "OwnerGUID": "default",
                "Name": "My metadata rule",
                "ContentType": "text/plain",
                "UdrEndpoint": "http://localhost:8000/",
                "DataCatalogType": "Lexi",
                "DataCatalogEndpoint": "http://localhost:8000/",
                "DataCatalogCollection": "default",
                "TopTerms": 10,
                "CaseInsensitive": true,
                "IncludeFlattened": true,
                "TargetBucketGUID": "metadata"
            },
            "Data": "QXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgKEFJKSwgaW4gaXRzIGJyb2FkZXN0IHNlbnNlLCBpcyBpbnRlbGxpZ2VuY2UgZXhoaWJpdGVkIGJ5IG1hY2hpbmVzLCBwYXJ0aWN1bGFybHkgY29tcHV0ZXIgc3lzdGVtcy4gSXQgaXMgYSBmaWVsZCBvZiByZXNlYXJjaCBpbiBjb21wdXRlciBzY2llbmNlIHRoYXQgZGV2ZWxvcHMgYW5kIHN0dWRpZXMgbWV0aG9kcyBhbmQgc29mdHdhcmUgdGhhdCBlbmFibGUgbWFjaGluZXMgdG8gcGVyY2VpdmUgdGhlaXIgZW52aXJvbm1lbnQgYW5kIHVzZSBsZWFybmluZyBhbmQgaW50ZWxsaWdlbmNlIHRvIHRha2UgYWN0aW9ucyB0aGF0IG1heGltaXplIHRoZWlyIGNoYW5jZXMgb2YgYWNoaWV2aW5nIGRlZmluZWQgZ29hbHMuWzFdIFN1Y2ggbWFjaGluZXMgbWF5IGJlIGNhbGxlZCBBSXMuCgpTb21lIGhpZ2gtcHJvZmlsZSBhcHBsaWNhdGlvbnMgb2YgQUkgaW5jbHVkZSBhZHZhbmNlZCB3ZWIgc2VhcmNoIGVuZ2luZXMgKGUuZy4sIEdvb2dsZSBTZWFyY2gpOyByZWNvbW1lbmRhdGlvbiBzeXN0ZW1zICh1c2VkIGJ5IFlvdVR1YmUsIEFtYXpvbiwgYW5kIE5ldGZsaXgpOyBpbnRlcmFjdGluZyB2aWEgaHVtYW4gc3BlZWNoIChlLmcuLCBHb29nbGUgQXNzaXN0YW50LCBTaXJpLCBhbmQgQWxleGEpOyBhdXRvbm9tb3VzIHZlaGljbGVzIChlLmcuLCBXYXltbyk7IGdlbmVyYXRpdmUgYW5kIGNyZWF0aXZlIHRvb2xzIChlLmcuLCBDaGF0R1BULCBBcHBsZSBJbnRlbGxpZ2VuY2UsIGFuZCBBSSBhcnQpOyBhbmQgc3VwZXJodW1hbiBwbGF5IGFuZCBhbmFseXNpcyBpbiBzdHJhdGVneSBnYW1lcyAoZS5nLiwgY2hlc3MgYW5kIEdvKS5bMl0gSG93ZXZlciwgbWFueSBBSSBhcHBsaWNhdGlvbnMgYXJlIG5vdCBwZXJjZWl2ZWQgYXMgQUk6ICJBIGxvdCBvZiBjdXR0aW5nIGVkZ2UgQUkgaGFzIGZpbHRlcmVkIGludG8gZ2VuZXJhbCBhcHBsaWNhdGlvbnMsIG9mdGVuIHdpdGhvdXQgYmVpbmcgY2FsbGVkIEFJIGJlY2F1c2Ugb25jZSBzb21ldGhpbmcgYmVjb21lcyB1c2VmdWwgZW5vdWdoIGFuZCBjb21tb24gZW5vdWdoIGl0J3Mgbm90IGxhYmVsZWQgQUkgYW55bW9yZS4iWzNdWzRd"
        });
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const useSDK = () => {
    //processStorageServer();
    //semanticCell();
    //udrDocument();
};

useSDK();