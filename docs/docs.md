## Modules

<dl>
<dt><a href="#module_base/ViewCrawlerSdk">base/ViewCrawlerSdk</a></dt>
<dd><p>Crawler service.</p>
</dd>
<dt><a href="#module_base/ViewDirectorSdk">base/ViewDirectorSdk</a></dt>
<dd><p>Director service.</p>
</dd>
<dt><a href="#module_base/GraphSdk">base/GraphSdk</a></dt>
<dd><p>Graph SDK service.</p>
</dd>
<dt><a href="#module_base/ViewHealthcheckSdk">base/ViewHealthcheckSdk</a></dt>
<dd><p>Healthcheck service.</p>
</dd>
<dt><a href="#module_base/Lexi/ViewLexiSdk">base/Lexi/ViewLexiSdk</a></dt>
<dd><p>View Lexi SDK.</p>
</dd>
<dt><a href="#module_base/ViewOrchestratorSdk">base/ViewOrchestratorSdk</a></dt>
<dd><p>Orchestrator service.</p>
</dd>
<dt><a href="#module_base/ViewStorageSdk">base/ViewStorageSdk</a></dt>
<dd><p>Storage service.</p>
</dd>
<dt><a href="#module_base/ViewVectorProxySdk">base/ViewVectorProxySdk</a></dt>
<dd><p>View Vector Proxy SDK.</p>
</dd>
<dt><a href="#module_base/ViewConfigurationSdk">base/ViewConfigurationSdk</a></dt>
<dd><p>Configuration service.</p>
</dd>
<dt><a href="#module_base/ViewSdkBase">base/ViewSdkBase</a></dt>
<dd><p>ViewSdk Base service.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#exp_module_base/ViewAssistantSdk--module.exports">module.exports</a> ⏏</dt>
<dd></dd>
<dt><a href="#exp_module_base/ViewOrchestratorSdk--module.exports">module.exports</a> ⏏</dt>
<dd></dd>
<dt><a href="#exp_module_base/ViewProcessorSdk--module.exports">module.exports</a> ⏏</dt>
<dd></dd>
<dt><a href="#exp_module_base/ViewLexiSdk--module.exports">module.exports</a> ⏏</dt>
<dd></dd>
<dt><a href="#exp_module_base/ViewProcessorSdk--module.exports">module.exports</a> ⏏</dt>
<dd></dd>
<dt><a href="#exp_module_base/StorageApi--module.exports">module.exports</a> ⏏</dt>
<dd></dd>
<dt><a href="#exp_module_base/ConfigurationApi--module.exports">module.exports</a> ⏏</dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#chatRagQuestion_LEGACY">chatRagQuestion_LEGACY(ragRequest, onToken, cancelToken)</a></dt>
<dd><p>AssistantRagRequest request.</p>
</dd>
<dt><a href="#chatRagMessages">chatRagMessages(ragRequest, onToken, cancelToken)</a></dt>
<dd><p>AssistantRagRequest request.</p>
</dd>
<dt><a href="#assistantConfigChat">assistantConfigChat(assistantConfigGuid, chatRequest, onToken, cancelToken)</a></dt>
<dd><p>Process a chat request.</p>
</dd>
<dt><a href="#chatOnly">chatOnly(chatRequest, onToken, cancelToken)</a></dt>
<dd><p>Process a chat request.</p>
</dd>
<dt><a href="#retrieveModel">retrieveModel(guid, [cancelToken], model, onToken, cancelToken)</a></dt>
<dd><p>Retrieve a chat thread by GUID.</p>
</dd>
<dt><a href="#processingPipeline">processingPipeline(payload, token)</a></dt>
<dd><p>Process a document. This variant is used by the storage server.</p>
</dd>
<dt><a href="#cleanupPipeline">cleanupPipeline(payload, token)</a></dt>
<dd><p>Cleanup a document.</p>
</dd>
</dl>

<a name="module_base/ViewCrawlerSdk"></a>

## base/ViewCrawlerSdk
Crawler service.

**Version**: 0.1.0  

* [base/ViewCrawlerSdk](#module_base/ViewCrawlerSdk)
    * [.retrieveDataRepositories](#module_base/ViewCrawlerSdk+retrieveDataRepositories) ⇒ <code>Promise.&lt;(Array.&lt;DataRepository&gt;\|ApiErrorResponse)&gt;</code>
    * [.retrieveDataRepository](#module_base/ViewCrawlerSdk+retrieveDataRepository) ⇒ <code>Promise.&lt;(DataRepository\|null\|ApiErrorResponse)&gt;</code>
    * [.createDataRepository](#module_base/ViewCrawlerSdk+createDataRepository) ⇒ <code>Promise.&lt;(DataRepository\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteDataRepository](#module_base/ViewCrawlerSdk+deleteDataRepository) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.enumerateDataRepositories](#module_base/ViewCrawlerSdk+enumerateDataRepositories) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.existsDataRepository](#module_base/ViewCrawlerSdk+existsDataRepository) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.updateDataRepository](#module_base/ViewCrawlerSdk+updateDataRepository) ⇒ <code>Promise.&lt;(DataRepository\|null\|ApiErrorResponse)&gt;</code>
    * [.enumerateCrawlSchedules](#module_base/ViewCrawlerSdk+enumerateCrawlSchedules) ⇒ <code>Promise.&lt;(EnumerationResult.&lt;CrawlSchedule&gt;\|null)&gt;</code>
    * [.retrieveAllCrawlSchedules](#module_base/ViewCrawlerSdk+retrieveAllCrawlSchedules) ⇒ <code>Promise.&lt;Array.&lt;CrawlSchedule&gt;&gt;</code>
    * [.retrieveCrawlSchedule](#module_base/ViewCrawlerSdk+retrieveCrawlSchedule) ⇒ <code>Promise.&lt;(CrawlSchedule\|null\|ApiErrorResponse)&gt;</code>
    * [.createCrawlSchedules](#module_base/ViewCrawlerSdk+createCrawlSchedules) ⇒ <code>Promise.&lt;(CrawlSchedule\|null\|ApiErrorResponse)&gt;</code>
    * [.updateCrawlSchedules](#module_base/ViewCrawlerSdk+updateCrawlSchedules) ⇒ <code>Promise.&lt;(CrawlSchedule\|ApiErrorResponse)&gt;</code>
    * [.deleteCrawlSchedule](#module_base/ViewCrawlerSdk+deleteCrawlSchedule) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.existsCrawlSchedule](#module_base/ViewCrawlerSdk+existsCrawlSchedule) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.enumerateCrawlFilters](#module_base/ViewCrawlerSdk+enumerateCrawlFilters) ⇒ <code>Promise.&lt;(EnumerationResult.&lt;CrawlFilter&gt;\|null)&gt;</code>
    * [.retrieveCrawlFilters](#module_base/ViewCrawlerSdk+retrieveCrawlFilters) ⇒ <code>Promise.&lt;Array.&lt;CrawlFilter&gt;&gt;</code>
    * [.retrieveCrawlFilter](#module_base/ViewCrawlerSdk+retrieveCrawlFilter) ⇒ <code>Promise.&lt;(CrawlFilter\|null\|ApiErrorResponse)&gt;</code>
    * [.createCrawlFilter](#module_base/ViewCrawlerSdk+createCrawlFilter) ⇒ <code>Promise.&lt;(CrawlFilter\|null\|ApiErrorResponse)&gt;</code>
    * [.updateCrawlFilter](#module_base/ViewCrawlerSdk+updateCrawlFilter) ⇒ <code>Promise.&lt;(CrawlFilter\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteCrawlFilter](#module_base/ViewCrawlerSdk+deleteCrawlFilter) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.existsCrawlFilter](#module_base/ViewCrawlerSdk+existsCrawlFilter) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.enumerateCrawlPlans](#module_base/ViewCrawlerSdk+enumerateCrawlPlans) ⇒ <code>Promise.&lt;(EnumerationResult.&lt;CrawlPlan&gt;\|null)&gt;</code>
    * [.retrieveCrawlPlans](#module_base/ViewCrawlerSdk+retrieveCrawlPlans) ⇒ <code>Promise.&lt;Array.&lt;CrawlPlan&gt;&gt;</code>
    * [.retrieveCrawlPlan](#module_base/ViewCrawlerSdk+retrieveCrawlPlan) ⇒ <code>Promise.&lt;Array.&lt;CrawlPlan&gt;&gt;</code>
    * [.createCrawlPlan](#module_base/ViewCrawlerSdk+createCrawlPlan) ⇒ <code>Promise.&lt;Array.&lt;CrawlPlan&gt;&gt;</code>
    * [.updateCrawlPlan](#module_base/ViewCrawlerSdk+updateCrawlPlan) ⇒ <code>Promise.&lt;(CrawlPlan\|null)&gt;</code>
    * [.deleteCrawlPlan](#module_base/ViewCrawlerSdk+deleteCrawlPlan) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.existsCrawlPlan](#module_base/ViewCrawlerSdk+existsCrawlPlan) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.enumerateCrawlOperations](#module_base/ViewCrawlerSdk+enumerateCrawlOperations) ⇒ <code>Promise.&lt;(EnumerationResult.&lt;CrawlOperation&gt;\|null)&gt;</code>
    * [.retrieveCrawlOperations](#module_base/ViewCrawlerSdk+retrieveCrawlOperations) ⇒ <code>Promise.&lt;(Array.&lt;CrawlOperation&gt;\|null)&gt;</code>
    * [.retrieveCrawlOperation](#module_base/ViewCrawlerSdk+retrieveCrawlOperation) ⇒ <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code>
    * [.retrieveEnumerationCrawlOperations](#module_base/ViewCrawlerSdk+retrieveEnumerationCrawlOperations) ⇒ <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code>
    * [.startCrawlOperation](#module_base/ViewCrawlerSdk+startCrawlOperation) ⇒ <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code>
    * [.stopCrawlOperation](#module_base/ViewCrawlerSdk+stopCrawlOperation) ⇒ <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code>
    * [.deleteCrawlOperation](#module_base/ViewCrawlerSdk+deleteCrawlOperation) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.existsCrawlOperation](#module_base/ViewCrawlerSdk+existsCrawlOperation) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="module_base/ViewCrawlerSdk+retrieveDataRepositories"></a>

### base/ViewCrawlerSdk.retrieveDataRepositories ⇒ <code>Promise.&lt;(Array.&lt;DataRepository&gt;\|ApiErrorResponse)&gt;</code>
Retrieve a list of data repositories.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;DataRepository&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of DataRepository objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveDataRepository"></a>

### base/ViewCrawlerSdk.retrieveDataRepository ⇒ <code>Promise.&lt;(DataRepository\|null\|ApiErrorResponse)&gt;</code>
Retrieve a specific data repository by its GUID.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(DataRepository\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the DataRepository object or null.  
**Throws**:

- <code>Error</code> If the repositoryGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| repositoryGuid | <code>string</code> | The GUID of the data repository to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+createDataRepository"></a>

### base/ViewCrawlerSdk.createDataRepository ⇒ <code>Promise.&lt;(DataRepository\|null\|ApiErrorResponse)&gt;</code>
Create a new data repository.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(DataRepository\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created DataRepository object or null.  
**Throws**:

- <code>Error</code> If the repository is null.


| Param | Type | Description |
| --- | --- | --- |
| dataRepository | <code>Object</code> | Information about the data repository. |
| dataRepository.Id | <code>number</code> | ID (must be greater than 0). |
| dataRepository.GUID | <code>string</code> | Data repository GUID (automatically generated if not provided). |
| dataRepository.TenantGUID | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| dataRepository.OwnerGUID | <code>string</code> | Owner GUID (automatically generated if not provided). |
| dataRepository.Name | <code>string</code> | Name of the repository (default is "My file repository"). |
| dataRepository.RepositoryType | <code>string</code> | Repository type (default is DataRepositoryTypeEnum.File). |
| dataRepository.UseSsl | <code>boolean</code> | Boolean flag to enable SSL (default is false). |
| dataRepository.IncludeSubdirectories | <code>boolean</code> | Include subdirectories (default is true). |
| dataRepository.DiskDirectory | <code>string</code> | Disk directory (default is null). |
| dataRepository.S3EndpointUrl | <code>string</code> | S3 endpoint URL (default is null). |
| dataRepository.S3BaseUrl | <code>string</code> | S3 base URL (default is null). |
| dataRepository.S3AccessKey | <code>string</code> | S3 access key (default is null). |
| dataRepository.S3SecretKey | <code>string</code> | S3 secret key (default is null). |
| dataRepository.S3BucketName | <code>string</code> | S3 bucket name (default is null). |
| dataRepository.S3Region | <code>string</code> | S3 region (default is null). |
| dataRepository.AzureEndpointUrl | <code>string</code> | Azure endpoint URL (default is null). |
| dataRepository.AzureAccountName | <code>string</code> | Azure account name (default is null). |
| dataRepository.AzureContainerName | <code>string</code> | Azure container name (default is null). |
| dataRepository.AzureAccessKey | <code>string</code> | Azure access key (default is null). |
| dataRepository.CifsHostname | <code>string</code> | CIFS hostname (default is null). |
| dataRepository.CifsUsername | <code>string</code> | CIFS username (default is null). |
| dataRepository.CifsPassword | <code>string</code> | CIFS password (default is null). |
| dataRepository.CifsShareName | <code>string</code> | CIFS share name (default is null). |
| dataRepository.NfsHostname | <code>string</code> | NFS hostname (default is null). |
| dataRepository.NfsUserId | <code>number</code> | NFS user ID (must be non-negative). |
| dataRepository.NfsGroupId | <code>number</code> | NFS group ID (must be non-negative). |
| dataRepository.NfsShareName | <code>string</code> | NFS share name (default is null). |
| dataRepository.NfsVersion | <code>string</code> | NFS version (default is null). |
| dataRepository.CreatedUtc | <code>Date</code> | Created timestamp (default is current UTC time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+deleteDataRepository"></a>

### base/ViewCrawlerSdk.deleteDataRepository ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a data repository by its GUID.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving to void if the deletion is successful.  
**Throws**:

- <code>Error</code> If the repositoryGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| repositoryGuid | <code>string</code> | The GUID of the data repository to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+enumerateDataRepositories"></a>

### base/ViewCrawlerSdk.enumerateDataRepositories ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Data Repositories.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created EnumerationResult object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+existsDataRepository"></a>

### base/ViewCrawlerSdk.existsDataRepository ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a data repository exists by its GUID.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the data repository exists, false otherwise.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the data repository. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+updateDataRepository"></a>

### base/ViewCrawlerSdk.updateDataRepository ⇒ <code>Promise.&lt;(DataRepository\|null\|ApiErrorResponse)&gt;</code>
Update a data repository by its GUID.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(DataRepository\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated DataRepository object or null.  
**Throws**:

- <code>Error</code> If the dataRepository is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| dataRepository | <code>Object</code> | The updated data repository object. |
| dataRepository.GUID | <code>string</code> | The GUID of the data repository to update. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+enumerateCrawlSchedules"></a>

### base/ViewCrawlerSdk.enumerateCrawlSchedules ⇒ <code>Promise.&lt;(EnumerationResult.&lt;CrawlSchedule&gt;\|null)&gt;</code>
Enumerate Crawl Schedules.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult.&lt;CrawlSchedule&gt;\|null)&gt;</code> - A promise resolving to the enumeration result or null.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveAllCrawlSchedules"></a>

### base/ViewCrawlerSdk.retrieveAllCrawlSchedules ⇒ <code>Promise.&lt;Array.&lt;CrawlSchedule&gt;&gt;</code>
Retrieve All Crawl Schedules.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;Array.&lt;CrawlSchedule&gt;&gt;</code> - A promise that resolves to an array of crawl schedules.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveCrawlSchedule"></a>

### base/ViewCrawlerSdk.retrieveCrawlSchedule ⇒ <code>Promise.&lt;(CrawlSchedule\|null\|ApiErrorResponse)&gt;</code>
Retrieve By ID Crawl Schedules.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlSchedule\|null\|ApiErrorResponse)&gt;</code> - A promise that resolves to the crawl schedule object, or null if not found, or an error response.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of crawl schedules |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+createCrawlSchedules"></a>

### base/ViewCrawlerSdk.createCrawlSchedules ⇒ <code>Promise.&lt;(CrawlSchedule\|null\|ApiErrorResponse)&gt;</code>
Create Crawl Schedules.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlSchedule\|null\|ApiErrorResponse)&gt;</code> - A promise that resolves to the created crawl schedule  
**Throws**:

- <code>Error</code> If the scheduleData is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| scheduleData | <code>Object</code> | Information about the schedule. |
| scheduleData.Name | <code>string</code> | Name of the schedule. |
| scheduleData.Schedule | <code>string</code> | Type of schedule. |
| scheduleData.Interval | <code>number</code> | The interval value for the schedule. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+updateCrawlSchedules"></a>

### base/ViewCrawlerSdk.updateCrawlSchedules ⇒ <code>Promise.&lt;(CrawlSchedule\|ApiErrorResponse)&gt;</code>
Update Crawl Schedules.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlSchedule\|ApiErrorResponse)&gt;</code> - A promise that resolves to the updated crawl schedule  
**Throws**:

- <code>Error</code> If the guid is null or empty or If the scheduleData is null or empty .


| Param | Type | Description |
| --- | --- | --- |
| scheduleData | <code>Object</code> | Information about the schedule. |
| scheduleData.GUID | <code>string</code> | GUID of the schedule. |
| scheduleData.Name | <code>string</code> | Name of the schedule. |
| scheduleData.Schedule | <code>string</code> | Type of schedule. |
| scheduleData.Interval | <code>number</code> | The interval value for the schedule. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+deleteCrawlSchedule"></a>

### base/ViewCrawlerSdk.deleteCrawlSchedule ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Delete Crawl Schedule.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves to true if the deletion was successful, or an error response if it failed.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the crawl schedule to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+existsCrawlSchedule"></a>

### base/ViewCrawlerSdk.existsCrawlSchedule ⇒ <code>Promise.&lt;boolean&gt;</code>
Check Existence of Crawl Schedule.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise that resolves to `true` if the Crawl Schedule exists, otherwise `false` or an error response if the check fails.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID of Crawl Schedule. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+enumerateCrawlFilters"></a>

### base/ViewCrawlerSdk.enumerateCrawlFilters ⇒ <code>Promise.&lt;(EnumerationResult.&lt;CrawlFilter&gt;\|null)&gt;</code>
Enumerate Crawl Filters.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult.&lt;CrawlFilter&gt;\|null)&gt;</code> - A promise resolving to the enumeration result or null.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveCrawlFilters"></a>

### base/ViewCrawlerSdk.retrieveCrawlFilters ⇒ <code>Promise.&lt;Array.&lt;CrawlFilter&gt;&gt;</code>
Retrieve All Crawl Filters.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;Array.&lt;CrawlFilter&gt;&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveCrawlFilter"></a>

### base/ViewCrawlerSdk.retrieveCrawlFilter ⇒ <code>Promise.&lt;(CrawlFilter\|null\|ApiErrorResponse)&gt;</code>
Retrieve By Id Crawl Filters.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlFilter\|null\|ApiErrorResponse)&gt;</code> - A promise that resolves to the crawl filter object, or null if not found, or an error response.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. * @param {string} [guid] - GUID of crawl Filters |

<a name="module_base/ViewCrawlerSdk+createCrawlFilter"></a>

### base/ViewCrawlerSdk.createCrawlFilter ⇒ <code>Promise.&lt;(CrawlFilter\|null\|ApiErrorResponse)&gt;</code>
Create Crawl Filters.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlFilter\|null\|ApiErrorResponse)&gt;</code> - A promise that resolves to the crawl filter object, or null if not found, or an error response.  
**Throws**:

- <code>Error</code> If the crawlFiltersData is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| crawlFiltersData | <code>Object</code> | Information about the crawl filter. |
| crawlFiltersData.Name | <code>string</code> | Name of the crawl filter . |
| crawlFiltersData.MinimumSize | <code>number</code> | Minimum size of the files to include in the crawl filter. |
| crawlFiltersData.MaximumSize | <code>number</code> | Maximum size of the files to include in the crawl filter. |
| crawlFiltersData.IncludeSubdirectories | <code>boolean</code> | Whether to include subdirectories in the crawl filter (true or false). |
| crawlFiltersData.ContentType | <code>string</code> | The content type to filter. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+updateCrawlFilter"></a>

### base/ViewCrawlerSdk.updateCrawlFilter ⇒ <code>Promise.&lt;(CrawlFilter\|null\|ApiErrorResponse)&gt;</code>
Update Crawl Filters.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlFilter\|null\|ApiErrorResponse)&gt;</code> - A promise that resolves to the crawl filter object, or null if not found, or an error response.  
**Throws**:

- <code>Error</code> If the guid is null or empty or If crawlFiltersData is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| crawlFilterData | <code>Object</code> | Information about the schedule. |
| crawlFilterData.GUID | <code>string</code> | GUID of the filter. |
| crawlFilterData.Name | <code>string</code> | Name of the filter (e.g., "My updated filter"). |
| crawlFilterData.MinimumSize | <code>number</code> | Minimum file size to include in the filter (e.g., 1 byte). |
| crawlFilterData.MaximumSize | <code>number</code> | Maximum file size to include in the filter (e.g., 134217728 bytes, or 128 MB). |
| crawlFilterData.IncludeSubdirectories | <code>boolean</code> | Whether to include subdirectories in the filter (true or false). |
| crawlFilterData.ContentType | <code>string</code> | The content type to filter (e.g., "*"). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+deleteCrawlFilter"></a>

### base/ViewCrawlerSdk.deleteCrawlFilter ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Delete Crawl Filters.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves to true if the deletion was successful, or an error response if it failed.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of Crawl Filters |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+existsCrawlFilter"></a>

### base/ViewCrawlerSdk.existsCrawlFilter ⇒ <code>Promise.&lt;boolean&gt;</code>
Check Existence Crawl Filters.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to the crawl filter object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of Crawl Filters |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+enumerateCrawlPlans"></a>

### base/ViewCrawlerSdk.enumerateCrawlPlans ⇒ <code>Promise.&lt;(EnumerationResult.&lt;CrawlPlan&gt;\|null)&gt;</code>
Enumerate Crawl Plans.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult.&lt;CrawlPlan&gt;\|null)&gt;</code> - A promise resolving to the enumeration result or null.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveCrawlPlans"></a>

### base/ViewCrawlerSdk.retrieveCrawlPlans ⇒ <code>Promise.&lt;Array.&lt;CrawlPlan&gt;&gt;</code>
Retrieve All Crawl Plans.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;Array.&lt;CrawlPlan&gt;&gt;</code> - A promise resolving to an array of CrawlPlan objects. If creation fails, the promise resolves to null.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveCrawlPlan"></a>

### base/ViewCrawlerSdk.retrieveCrawlPlan ⇒ <code>Promise.&lt;Array.&lt;CrawlPlan&gt;&gt;</code>
Retrieve By Id Crawl Plans.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;Array.&lt;CrawlPlan&gt;&gt;</code> - A promise resolving CrawlPlan objects. If creation fails, the promise resolves to null.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of crawl Plans |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+createCrawlPlan"></a>

### base/ViewCrawlerSdk.createCrawlPlan ⇒ <code>Promise.&lt;Array.&lt;CrawlPlan&gt;&gt;</code>
Write Crawl Plans.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;Array.&lt;CrawlPlan&gt;&gt;</code> - A promise resolving CrawlPlan objects. If creation fails, the promise resolves to null.  
**Throws**:

- <code>Error</code> If the crawlPlansData is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| crawlPlanData | <code>Object</code> | An object containing information about the crawl plan. |
| crawlPlanData.DataRepositoryGUID | <code>string</code> | The GUID of the data repository associated with the crawl plan. |
| crawlPlanData.CrawlScheduleGUID | <code>string</code> | The GUID of the crawl schedule for the plan. |
| crawlPlanData.CrawlFilterGUID | <code>string</code> | The GUID of the crawl filter to be applied. |
| crawlPlanData.Name | <code>string</code> | The name of the crawl plan. |
| crawlPlanData.EnumerationDirectory | <code>string</code> | The directory path where enumerations will be stored. |
| crawlPlanData.EnumerationsToRetain | <code>number</code> | The number of enumerations to retain in the system. |
| crawlPlanData.MetadataRuleGUID | <code>string</code> | The GUID of the metadata rule to be applied. |
| crawlPlanData.ProcessingEndpoint | <code>string</code> | The URL endpoint for processing data. |
| crawlPlanData.ProcessingAccessKey | <code>string</code> | The access key used for authenticating to the processing endpoint. |
| crawlPlanData.CleanupEndpoint | <code>string</code> | The URL endpoint for performing cleanup operations. |
| crawlPlanData.CleanupAccessKey | <code>string</code> | The access key used for authenticating to the cleanup endpoint. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+updateCrawlPlan"></a>

### base/ViewCrawlerSdk.updateCrawlPlan ⇒ <code>Promise.&lt;(CrawlPlan\|null)&gt;</code>
Update Crawl Plan.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlPlan\|null)&gt;</code> - A promise resolving of CrawlPlan objects if the update is successful, or null if the update fails.  
**Throws**:

- <code>Error</code> If the guid is null or empty or If the crawlPlanData is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| crawlPlanData | <code>Object</code> | Information about the crawl plan to update. |
| crawlPlanData.GUID | <code>string</code> | GUID of the crawl plan to update. |
| crawlPlanData.DataRepositoryGUID | <code>string</code> | GUID of the data repository associated with the crawl plan. |
| crawlPlanData.CrawlScheduleGUID | <code>string</code> | GUID of the crawl schedule for the crawl plan. |
| crawlPlanData.CrawlFilterGUID | <code>string</code> | GUID of the crawl filter applied to the crawl plan. |
| crawlPlanData.MetadataRuleGUID | <code>string</code> | GUID of the metadata rule to be applied in the crawl plan. |
| crawlPlanData.Name | <code>string</code> | The updated name of the crawl plan. |
| crawlPlanData.EnumerationDirectory | <code>string</code> | Directory for storing enumerations in the updated crawl plan. |
| crawlPlanData.EnumerationsToRetain | <code>number</code> | Number of enumerations to retain after updating the crawl plan. |
| crawlPlanData.MaxDrainTasks | <code>number</code> | Maximum number of drain tasks to run concurrently for the updated crawl plan. |
| crawlPlanData.ProcessAdditions | <code>boolean</code> | Whether to process new additions in the updated crawl plan (true or false). |
| crawlPlanData.ProcessDeletions | <code>boolean</code> | Whether to process deletions in the updated crawl plan (true or false). |
| crawlPlanData.ProcessUpdates | <code>boolean</code> | Whether to process updates in the updated crawl plan (true or false). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+deleteCrawlPlan"></a>

### base/ViewCrawlerSdk.deleteCrawlPlan ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Delete Crawl Plans.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves to true if the deletion was successful, or an error response if it failed.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of Crawl Plans |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+existsCrawlPlan"></a>

### base/ViewCrawlerSdk.existsCrawlPlan ⇒ <code>Promise.&lt;boolean&gt;</code>
Check Existence Crawl Plans.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to the Node object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of Crawl Plans |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+enumerateCrawlOperations"></a>

### base/ViewCrawlerSdk.enumerateCrawlOperations ⇒ <code>Promise.&lt;(EnumerationResult.&lt;CrawlOperation&gt;\|null)&gt;</code>
Enumerate Crawl Operations.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult.&lt;CrawlOperation&gt;\|null)&gt;</code> - A promise resolving to the enumeration result or null.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveCrawlOperations"></a>

### base/ViewCrawlerSdk.retrieveCrawlOperations ⇒ <code>Promise.&lt;(Array.&lt;CrawlOperation&gt;\|null)&gt;</code>
Retrieve All Crawl Operations.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;CrawlOperation&gt;\|null)&gt;</code> - A promise resolving to an array of CrawlOperation objects if the operation is successful,  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveCrawlOperation"></a>

### base/ViewCrawlerSdk.retrieveCrawlOperation ⇒ <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code>
Retrieve By Id Crawl Operations.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code> - A promise resolving to a CrawlOperation object if the operation is successful,  or an ApiErrorResponse if an error occurs.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of crawl operations |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+retrieveEnumerationCrawlOperations"></a>

### base/ViewCrawlerSdk.retrieveEnumerationCrawlOperations ⇒ <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code>
Retrieve enumeration Crawl Operations.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code> - A promise resolving to a CrawlOperation object if the operation is successful,  or an ApiErrorResponse if an error occurs.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of crawl operations |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+startCrawlOperation"></a>

### base/ViewCrawlerSdk.startCrawlOperation ⇒ <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code>
Start Crawl Operations.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code> - A promise resolving to a CrawlOperation object if the operation is start,  or an ApiErrorResponse if an error occurs.  
**Throws**:

- <code>Error</code> If the guid is null or empty or crawlOperationsData null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | The GUID of the crawl plan. |
| crawlOperationData | <code>Object</code> | Information about the crawl operation to start. |
| crawlOperationData.Name | <code>string</code> | The name of the tenant for which the crawl operation is being started. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+stopCrawlOperation"></a>

### base/ViewCrawlerSdk.stopCrawlOperation ⇒ <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code>
Stop Crawl Operations.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(CrawlOperation\|ApiErrorResponse)&gt;</code> - A promise resolving to a CrawlOperation object if the operation is stop,  or an ApiErrorResponse if an error occurs.  
**Throws**:

- <code>Error</code> If the guid is null or empty or crawlOperationsData null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | The GUID of the crawl plan. |
| crawlOperationData | <code>Object</code> | Information about the crawl operation to start. |
| crawlOperationData.Name | <code>string</code> | The name of the tenant for which the crawl operation is being started. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+deleteCrawlOperation"></a>

### base/ViewCrawlerSdk.deleteCrawlOperation ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Delete Crawl Operations.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves to true if the deletion was successful, or an error response if it failed.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of Crawl Operations |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewCrawlerSdk+existsCrawlOperation"></a>

### base/ViewCrawlerSdk.existsCrawlOperation ⇒ <code>Promise.&lt;boolean&gt;</code>
Check Existence Crawl Operations.

**Kind**: instance property of [<code>base/ViewCrawlerSdk</code>](#module_base/ViewCrawlerSdk)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to the Crawl Operations object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [guid] | <code>string</code> | GUID of Crawl Operations |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewDirectorSdk"></a>

## base/ViewDirectorSdk
Director service.

**Version**: 0.1.0  

* [base/ViewDirectorSdk](#module_base/ViewDirectorSdk)
    * [module.exports](#exp_module_base/ViewDirectorSdk--module.exports) ⏏
        * [new module.exports(tenantGuid, accessKey, endpoint)](#new_module_base/ViewDirectorSdk--module.exports_new)
        * [.generateEmbedding](#module_base/ViewDirectorSdk--module.exports+generateEmbedding) ⇒ <code>Promise.&lt;(DirectorEmbeddingResponse\|null\|ApiErrorResponse)&gt;</code>
        * [.retrieveConnections](#module_base/ViewDirectorSdk--module.exports+retrieveConnections) ⇒ <code>Promise.&lt;(Array.&lt;Connection&gt;\|null\|ApiErrorResponse)&gt;</code>

<a name="exp_module_base/ViewDirectorSdk--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_base/ViewDirectorSdk--module.exports_new"></a>

#### new module.exports(tenantGuid, accessKey, endpoint)
Constructs a new DirectorApi.


| Param | Type | Description |
| --- | --- | --- |
| tenantGuid | <code>string</code> | Tenant GUID. |
| accessKey | <code>string</code> | Access key. |
| endpoint | <code>string</code> | Endpoint URL . |

<a name="module_base/ViewDirectorSdk--module.exports+generateEmbedding"></a>

#### module.exports.generateEmbedding ⇒ <code>Promise.&lt;(DirectorEmbeddingResponse\|null\|ApiErrorResponse)&gt;</code>
Generate Embedding Director.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewDirectorSdk--module.exports)  
**Returns**: <code>Promise.&lt;(DirectorEmbeddingResponse\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [params] | <code>object</code> | parameters. |
| [params.Model] | <code>string</code> | Embedding model. |
| [params.ApiKey] | <code>string</code> | API key. |
| [params.Contents] | <code>Array.&lt;string&gt;</code> | List of text Contents. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewDirectorSdk--module.exports+retrieveConnections"></a>

#### module.exports.retrieveConnections ⇒ <code>Promise.&lt;(Array.&lt;Connection&gt;\|null\|ApiErrorResponse)&gt;</code>
Retrieve Connections.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewDirectorSdk--module.exports)  
**Returns**: <code>Promise.&lt;(Array.&lt;Connection&gt;\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.

<a name="module_base/GraphSdk"></a>

## base/GraphSdk
Graph SDK service.

**Version**: 0.1.0  

* [base/GraphSdk](#module_base/GraphSdk)
    * [module.exports](#exp_module_base/GraphSdk--module.exports) ⏏
        * [new module.exports(repo)](#new_module_base/GraphSdk--module.exports_new)
        * [.GraphRepository](#module_base/GraphSdk--module.exports+GraphRepository) ⇒ <code>GraphRepository</code>
        * [.TimestampFormat](#module_base/GraphSdk--module.exports+TimestampFormat) ⇒ <code>string</code>
        * [.TimestampFormat](#module_base/GraphSdk--module.exports+TimestampFormat)
        * [.insertObjectMetadata](#module_base/GraphSdk--module.exports+insertObjectMetadata) ⇒ <code>Promise.&lt;GraphResult&gt;</code>
        * [.insertObjectMetadataForCrawler](#module_base/GraphSdk--module.exports+insertObjectMetadataForCrawler) ⇒ <code>Promise.&lt;GraphResult&gt;</code>
        * [.insertSourceDocument](#module_base/GraphSdk--module.exports+insertSourceDocument) ⇒ <code>Promise.&lt;GraphResult&gt;</code>
        * [.removeObjectMetadata](#module_base/GraphSdk--module.exports+removeObjectMetadata) ⇒ <code>Promise.&lt;GraphResult&gt;</code>
        * [.removeSourceDocument](#module_base/GraphSdk--module.exports+removeSourceDocument) ⇒ <code>Promise.&lt;GraphResult&gt;</code>
        * [.tenantExists](#module_base/GraphSdk--module.exports+tenantExists) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.storagePoolExists](#module_base/GraphSdk--module.exports+storagePoolExists) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.bucketExists](#module_base/GraphSdk--module.exports+bucketExists) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.objectMetadataExists](#module_base/GraphSdk--module.exports+objectMetadataExists) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.collectionExists](#module_base/GraphSdk--module.exports+collectionExists) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.sourceDocumentExists](#module_base/GraphSdk--module.exports+sourceDocumentExists) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.semanticCellExists](#module_base/GraphSdk--module.exports+semanticCellExists) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.semanticChunkExists](#module_base/GraphSdk--module.exports+semanticChunkExists) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.dataRepositoryExists](#module_base/GraphSdk--module.exports+dataRepositoryExists) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.tenantExistsByGUID](#module_base/GraphSdk--module.exports+tenantExistsByGUID) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.storagePoolExistsByGUID](#module_base/GraphSdk--module.exports+storagePoolExistsByGUID) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.bucketExistsByGUID](#module_base/GraphSdk--module.exports+bucketExistsByGUID) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.objectMetadataExistsByGUID](#module_base/GraphSdk--module.exports+objectMetadataExistsByGUID) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.collectionExistsByGUID](#module_base/GraphSdk--module.exports+collectionExistsByGUID) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.sourceDocumentExistsByGUID](#module_base/GraphSdk--module.exports+sourceDocumentExistsByGUID) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.semanticCellExistsByGUID](#module_base/GraphSdk--module.exports+semanticCellExistsByGUID) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.semanticChunkExistsByGUID](#module_base/GraphSdk--module.exports+semanticChunkExistsByGUID) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.dataRepositoryExistsByGUID](#module_base/GraphSdk--module.exports+dataRepositoryExistsByGUID) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.createGraph](#module_base/GraphSdk--module.exports+createGraph) ⇒ <code>Promise.&lt;Graph&gt;</code>
        * [.createTenant](#module_base/GraphSdk--module.exports+createTenant) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.createStoragePool](#module_base/GraphSdk--module.exports+createStoragePool) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.createBucket](#module_base/GraphSdk--module.exports+createBucket) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.createObjectMetadata](#module_base/GraphSdk--module.exports+createObjectMetadata) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.createCollection](#module_base/GraphSdk--module.exports+createCollection) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.createSourceDocument](#module_base/GraphSdk--module.exports+createSourceDocument) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.createSemanticCell](#module_base/GraphSdk--module.exports+createSemanticCell) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.createSemanticChunk](#module_base/GraphSdk--module.exports+createSemanticChunk) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.createDataRepository](#module_base/GraphSdk--module.exports+createDataRepository) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readTenant](#module_base/GraphSdk--module.exports+readTenant) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readStoragePool](#module_base/GraphSdk--module.exports+readStoragePool) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readBucket](#module_base/GraphSdk--module.exports+readBucket) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readObjectMetadata](#module_base/GraphSdk--module.exports+readObjectMetadata) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readCollection](#module_base/GraphSdk--module.exports+readCollection) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readSourceDocument](#module_base/GraphSdk--module.exports+readSourceDocument) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readSemanticCell](#module_base/GraphSdk--module.exports+readSemanticCell) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readSemanticChunk](#module_base/GraphSdk--module.exports+readSemanticChunk) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readDataRepository](#module_base/GraphSdk--module.exports+readDataRepository) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readTenantGuid](#module_base/GraphSdk--module.exports+readTenantGuid) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readStoragePoolGuid](#module_base/GraphSdk--module.exports+readStoragePoolGuid) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readBucketGuid](#module_base/GraphSdk--module.exports+readBucketGuid) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readObjectMetadataGuid](#module_base/GraphSdk--module.exports+readObjectMetadataGuid) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readCollectionGuid](#module_base/GraphSdk--module.exports+readCollectionGuid) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readSourceDocumentGuid](#module_base/GraphSdk--module.exports+readSourceDocumentGuid) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readSemanticCellGuid](#module_base/GraphSdk--module.exports+readSemanticCellGuid) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readSemanticChunkGuid](#module_base/GraphSdk--module.exports+readSemanticChunkGuid) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readDataRepositoryGuid](#module_base/GraphSdk--module.exports+readDataRepositoryGuid) ⇒ <code>Promise.&lt;GraphNode&gt;</code>
        * [.readTenants](#module_base/GraphSdk--module.exports+readTenants) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.readStoragePools](#module_base/GraphSdk--module.exports+readStoragePools) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.readBuckets](#module_base/GraphSdk--module.exports+readBuckets) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.readObjectMetadataFilter](#module_base/GraphSdk--module.exports+readObjectMetadataFilter) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.readCollections](#module_base/GraphSdk--module.exports+readCollections) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.readSourceDocuments](#module_base/GraphSdk--module.exports+readSourceDocuments) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.readSemanticCells](#module_base/GraphSdk--module.exports+readSemanticCells) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.readSemanticChunks](#module_base/GraphSdk--module.exports+readSemanticChunks) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.readDataRepositories](#module_base/GraphSdk--module.exports+readDataRepositories) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.deleteTenant](#module_base/GraphSdk--module.exports+deleteTenant) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteStoragePool](#module_base/GraphSdk--module.exports+deleteStoragePool) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteBucket](#module_base/GraphSdk--module.exports+deleteBucket) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteObjectMetadata](#module_base/GraphSdk--module.exports+deleteObjectMetadata) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteCollection](#module_base/GraphSdk--module.exports+deleteCollection) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteSourceDocument](#module_base/GraphSdk--module.exports+deleteSourceDocument) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteSemanticCell](#module_base/GraphSdk--module.exports+deleteSemanticCell) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteSemanticChunk](#module_base/GraphSdk--module.exports+deleteSemanticChunk) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteDataRepository](#module_base/GraphSdk--module.exports+deleteDataRepository) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteTenantGuid](#module_base/GraphSdk--module.exports+deleteTenantGuid) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteStoragePoolGuid](#module_base/GraphSdk--module.exports+deleteStoragePoolGuid) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteBucketGuid](#module_base/GraphSdk--module.exports+deleteBucketGuid) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteObjectMetadataGuid](#module_base/GraphSdk--module.exports+deleteObjectMetadataGuid) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteCollectionGuid](#module_base/GraphSdk--module.exports+deleteCollectionGuid) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteSourceDocumentGuid](#module_base/GraphSdk--module.exports+deleteSourceDocumentGuid) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteSemanticCellGuid](#module_base/GraphSdk--module.exports+deleteSemanticCellGuid) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteSemanticChunkGuid](#module_base/GraphSdk--module.exports+deleteSemanticChunkGuid) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteDataRepositoryGuid](#module_base/GraphSdk--module.exports+deleteDataRepositoryGuid) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.getEdgesTo](#module_base/GraphSdk--module.exports+getEdgesTo) ⇒ <code>Promise.&lt;Array.&lt;GraphEdge&gt;&gt;</code>
        * [.getEdgesFrom](#module_base/GraphSdk--module.exports+getEdgesFrom) ⇒ <code>Promise.&lt;Array.&lt;GraphEdge&gt;&gt;</code>
        * [.initializeGraphDriver](#module_base/GraphSdk--module.exports+initializeGraphDriver)
        * [.existsInternal](#module_base/GraphSdk--module.exports+existsInternal) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.existsInternalDict](#module_base/GraphSdk--module.exports+existsInternalDict) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.searchInternalDataKey](#module_base/GraphSdk--module.exports+searchInternalDataKey) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.searchInternal](#module_base/GraphSdk--module.exports+searchInternal) ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
        * [.deleteInternalObj](#module_base/GraphSdk--module.exports+deleteInternalObj) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteInternal](#module_base/GraphSdk--module.exports+deleteInternal) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.readInternalObj](#module_base/GraphSdk--module.exports+readInternalObj) ⇒ <code>Promise.&lt;(GraphNode\|null)&gt;</code>
        * [.readInternal](#module_base/GraphSdk--module.exports+readInternal) ⇒ <code>Promise.&lt;(GraphNode\|null)&gt;</code>
        * [.insertSemanticCellsInternal](#module_base/GraphSdk--module.exports+insertSemanticCellsInternal) ⇒ <code>Promise.&lt;GraphResult&gt;</code>
        * [.removeSourceDocumentObj](#module_base/GraphSdk--module.exports+removeSourceDocumentObj) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.removeSemanticCell](#module_base/GraphSdk--module.exports+removeSemanticCell) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.dispose()](#module_base/GraphSdk--module.exports+dispose)
        * [.validateConnectivity([cancelToken])](#module_base/GraphSdk--module.exports+validateConnectivity) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="exp_module_base/GraphSdk--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_base/GraphSdk--module.exports_new"></a>

#### new module.exports(repo)
Constructs a new GraphSdk instance.


| Param | Type | Description |
| --- | --- | --- |
| repo | <code>GraphRepository</code> | The Graph repository object. |

<a name="module_base/GraphSdk--module.exports+GraphRepository"></a>

#### module.exports.GraphRepository ⇒ <code>GraphRepository</code>
Graph repository.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>GraphRepository</code> - The GraphRepository instance.  
<a name="module_base/GraphSdk--module.exports+TimestampFormat"></a>

#### module.exports.TimestampFormat ⇒ <code>string</code>
Timestamp format.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>string</code> - The timestamp format.  
<a name="module_base/GraphSdk--module.exports+TimestampFormat"></a>

#### module.exports.TimestampFormat
Set the timestamp format.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Throws**:

- <code>Error</code> Throws an error if the timestamp format is invalid or null.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The new timestamp format. |

<a name="module_base/GraphSdk--module.exports+insertObjectMetadata"></a>

#### module.exports.insertObjectMetadata ⇒ <code>Promise.&lt;GraphResult&gt;</code>
Insert object metadata into the graph.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphResult&gt;</code> - A promise resolving to a GraphResult object.  
**Throws**:

- <code>Error</code> If any of the parameters are null.


| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>Object</code> | The tenant metadata. |
| pool | <code>Object</code> | The storage pool metadata. |
| bucket | <code>Object</code> | The bucket metadata. |
| obj | <code>Object</code> | The object metadata. |
| [cancelToken] | <code>Object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+insertObjectMetadataForCrawler"></a>

#### module.exports.insertObjectMetadataForCrawler ⇒ <code>Promise.&lt;GraphResult&gt;</code>
Insert object metadata and its associated objects from crawler.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphResult&gt;</code> - A promise resolving to a GraphResult object.  
**Throws**:

- <code>Error</code> If any of the parameters are null.


| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>Object</code> | The tenant metadata. |
| repo | <code>Object</code> | The data repository metadata. |
| obj | <code>Object</code> | The object metadata. |
| [cancelToken] | <code>Object</code> | Optional cancellation token to abort the operation. |

<a name="module_base/GraphSdk--module.exports+insertSourceDocument"></a>

#### module.exports.insertSourceDocument ⇒ <code>Promise.&lt;GraphResult&gt;</code>
Insert source document and its associated objects.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphResult&gt;</code> - A promise resolving to a GraphResult object.  
**Throws**:

- <code>Error</code> If any of the parameters are null.


| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>Object</code> | The tenant metadata. |
| collection | <code>Object</code> | The collection metadata. |
| sourceDoc | <code>Object</code> | The source document metadata. |
| [cancelToken] | <code>Object</code> | Optional cancellation token to abort the operation. |

<a name="module_base/GraphSdk--module.exports+removeObjectMetadata"></a>

#### module.exports.removeObjectMetadata ⇒ <code>Promise.&lt;GraphResult&gt;</code>
Remove object metadata and its associated objects.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphResult&gt;</code> - A promise resolving to a GraphResult object.  
**Throws**:

- <code>Error</code> If the object is null.


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object metadata. |
| [cancelToken] | <code>Object</code> | Optional cancellation token to abort the operation. |

<a name="module_base/GraphSdk--module.exports+removeSourceDocument"></a>

#### module.exports.removeSourceDocument ⇒ <code>Promise.&lt;GraphResult&gt;</code>
Remove source document and its associated objects.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphResult&gt;</code> - A promise resolving to a GraphResult object.  
**Throws**:

- <code>Error</code> If the source document is null.


| Param | Type | Description |
| --- | --- | --- |
| doc | <code>Object</code> | The source document metadata. |
| [cancelToken] | <code>Object</code> | Optional cancellation token to abort the operation. |

<a name="module_base/GraphSdk--module.exports+tenantExists"></a>

#### module.exports.tenantExists ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a tenant exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise that resolves to `true` if the tenant exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the tenant argument is null.


| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>Object</code> | The tenant metadata object. |
| [cancelToken] | <code>Object</code> | Optional cancellation token to abort the operation. |

<a name="module_base/GraphSdk--module.exports+storagePoolExists"></a>

#### module.exports.storagePoolExists ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a storage pool exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the pool exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the pool is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| pool | <code>Object</code> | The storage pool metadata object. |
| pool.GUID | <code>string</code> | The GUID of the storage pool. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+bucketExists"></a>

#### module.exports.bucketExists ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a bucket exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the bucket exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the bucket is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| bucket | <code>Object</code> | The bucket metadata object. |
| bucket.GUID | <code>string</code> | The GUID of the bucket. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+objectMetadataExists"></a>

#### module.exports.objectMetadataExists ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if an object exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the object exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the object is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object metadata. |
| obj.GUID | <code>string</code> | The GUID of the object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+collectionExists"></a>

#### module.exports.collectionExists ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a collection exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the collection exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the collection is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| coll | <code>Object</code> | The collection metadata. |
| coll.GUID | <code>string</code> | The GUID of the collection. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+sourceDocumentExists"></a>

#### module.exports.sourceDocumentExists ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a source document exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the source document exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the source document is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| doc | <code>Object</code> | The source document metadata. |
| doc.GUID | <code>string</code> | The GUID of the source document. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+semanticCellExists"></a>

#### module.exports.semanticCellExists ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a semantic cell exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the semantic cell exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the semantic cell is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| cell | <code>Object</code> | The semantic cell metadata. |
| cell.GUID | <code>string</code> | The GUID of the semantic cell. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+semanticChunkExists"></a>

#### module.exports.semanticChunkExists ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a semantic chunk exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the semantic chunk exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the semantic chunk is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| chunk | <code>Object</code> | The semantic chunk metadata. |
| chunk.GUID | <code>string</code> | The GUID of the semantic chunk. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+dataRepositoryExists"></a>

#### module.exports.dataRepositoryExists ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a data repository exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the data repository exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the data repository is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| repo | <code>Object</code> | The data repository metadata. |
| repo.GUID | <code>string</code> | The GUID of the data repository. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+tenantExistsByGUID"></a>

#### module.exports.tenantExistsByGUID ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a tenant exists by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the tenant exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the tenant. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+storagePoolExistsByGUID"></a>

#### module.exports.storagePoolExistsByGUID ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a storage pool exists by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the storage pool exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the storage pool. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+bucketExistsByGUID"></a>

#### module.exports.bucketExistsByGUID ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a bucket exists by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the bucket exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+objectMetadataExistsByGUID"></a>

#### module.exports.objectMetadataExistsByGUID ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if an object exists by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the object exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+collectionExistsByGUID"></a>

#### module.exports.collectionExistsByGUID ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a collection exists by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the collection exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the collection. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+sourceDocumentExistsByGUID"></a>

#### module.exports.sourceDocumentExistsByGUID ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a source document exists by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the source document exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the source document. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+semanticCellExistsByGUID"></a>

#### module.exports.semanticCellExistsByGUID ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a semantic cell exists by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the semantic cell exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the semantic cell. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+semanticChunkExistsByGUID"></a>

#### module.exports.semanticChunkExistsByGUID ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a semantic chunk exists by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the semantic chunk exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the semantic chunk. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+dataRepositoryExistsByGUID"></a>

#### module.exports.dataRepositoryExistsByGUID ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a data repository exists by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if the data repository exists, otherwise `false`.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the data repository. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createGraph"></a>

#### module.exports.createGraph ⇒ <code>Promise.&lt;Graph&gt;</code>
Create a graph.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Graph&gt;</code> - A promise resolving to the created Graph object.  
**Throws**:

- <code>Error</code> If the name is null or empty, it defaults to a timestamp-based name.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the graph. |
| name | <code>string</code> | The name of the graph. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createTenant"></a>

#### module.exports.createTenant ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Create a tenant.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the created GraphNode.  
**Throws**:

- <code>Error</code> If the tenant object is null.


| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>TenantMetadata</code> | The tenant metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createStoragePool"></a>

#### module.exports.createStoragePool ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Create a storage pool.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the created GraphNode.  
**Throws**:

- <code>Error</code> If the pool object is null.


| Param | Type | Description |
| --- | --- | --- |
| pool | <code>StoragePool</code> | The storage pool metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createBucket"></a>

#### module.exports.createBucket ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Create a bucket.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the created GraphNode.  
**Throws**:

- <code>Error</code> If the bucket object is null.


| Param | Type | Description |
| --- | --- | --- |
| bucket | <code>BucketMetadata</code> | The bucket metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createObjectMetadata"></a>

#### module.exports.createObjectMetadata ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Create an object.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the created GraphNode.  
**Throws**:

- <code>Error</code> If the object metadata is null.


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>ObjectMetadata</code> | The object metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createCollection"></a>

#### module.exports.createCollection ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Create a collection.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the created GraphNode.  
**Throws**:

- <code>Error</code> If the collection object is null.


| Param | Type | Description |
| --- | --- | --- |
| coll | <code>Collection</code> | The collection metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createSourceDocument"></a>

#### module.exports.createSourceDocument ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Create a source document.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the created GraphNode.  
**Throws**:

- <code>Error</code> If the source document object is null.


| Param | Type | Description |
| --- | --- | --- |
| doc | <code>SourceDocument</code> | The source document metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createSemanticCell"></a>

#### module.exports.createSemanticCell ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Create a semantic cell.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the created GraphNode.  
**Throws**:

- <code>Error</code> If the semantic cell object is null.


| Param | Type | Description |
| --- | --- | --- |
| cell | <code>SemanticCell</code> | The semantic cell metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createSemanticChunk"></a>

#### module.exports.createSemanticChunk ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Create a semantic chunk.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the created GraphNode.  
**Throws**:

- <code>Error</code> If the semantic chunk object is null.


| Param | Type | Description |
| --- | --- | --- |
| chunk | <code>SemanticChunk</code> | The semantic chunk metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+createDataRepository"></a>

#### module.exports.createDataRepository ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Create a data repository.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the created GraphNode.  
**Throws**:

- <code>Error</code> If the data repository object is null.


| Param | Type | Description |
| --- | --- | --- |
| repo | <code>DataRepository</code> | The data repository metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readTenant"></a>

#### module.exports.readTenant ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a tenant graph node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the retrieved GraphNode.  
**Throws**:

- <code>Error</code> If the tenant object is null.


| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>TenantMetadata</code> | The tenant metadata object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readStoragePool"></a>

#### module.exports.readStoragePool ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a storage pool graph node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the retrieved GraphNode.  
**Throws**:

- <code>Error</code> If the pool object is null.


| Param | Type | Description |
| --- | --- | --- |
| pool | <code>StoragePool</code> | The storage pool metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readBucket"></a>

#### module.exports.readBucket ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a bucket graph node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the retrieved GraphNode.  
**Throws**:

- <code>Error</code> If the bucket object is null.


| Param | Type | Description |
| --- | --- | --- |
| bucket | <code>BucketMetadata</code> | The bucket metadata object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readObjectMetadata"></a>

#### module.exports.readObjectMetadata ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read an object node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the retrieved GraphNode.  
**Throws**:

- <code>Error</code> If the object metadata is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>ObjectMetadata</code> | The object metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readCollection"></a>

#### module.exports.readCollection ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a collection node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the retrieved GraphNode.  
**Throws**:

- <code>Error</code> If the collection object is null.


| Param | Type | Description |
| --- | --- | --- |
| coll | <code>Collection</code> | The collection metadata object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readSourceDocument"></a>

#### module.exports.readSourceDocument ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a source document node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the retrieved GraphNode.  
**Throws**:

- <code>Error</code> If the source document object is null.


| Param | Type | Description |
| --- | --- | --- |
| doc | <code>SourceDocument</code> | The source document metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readSemanticCell"></a>

#### module.exports.readSemanticCell ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a semantic cell node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the retrieved GraphNode.  
**Throws**:

- <code>Error</code> If the semantic cell object is null.


| Param | Type | Description |
| --- | --- | --- |
| cell | <code>SemanticCell</code> | The semantic cell metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readSemanticChunk"></a>

#### module.exports.readSemanticChunk ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a semantic chunk node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the retrieved GraphNode.  
**Throws**:

- <code>Error</code> If the semantic chunk object is null.


| Param | Type | Description |
| --- | --- | --- |
| chunk | <code>SemanticChunk</code> | The semantic chunk metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readDataRepository"></a>

#### module.exports.readDataRepository ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a data repository node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the retrieved GraphNode.  
**Throws**:

- <code>Error</code> If the data repository object is null.


| Param | Type | Description |
| --- | --- | --- |
| repo | <code>DataRepository</code> | The data repository metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/GraphSdk--module.exports+readTenantGuid"></a>

#### module.exports.readTenantGuid ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a tenant graph node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the GraphNode, or null if GUID is empty.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the tenant. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readStoragePoolGuid"></a>

#### module.exports.readStoragePoolGuid ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a storage pool graph node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the GraphNode, or null if GUID is empty.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the storage pool. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readBucketGuid"></a>

#### module.exports.readBucketGuid ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a bucket graph node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the GraphNode, or null if GUID is empty.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readObjectMetadataGuid"></a>

#### module.exports.readObjectMetadataGuid ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read an object metadata node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the GraphNode, or null if GUID is empty.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the object. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readCollectionGuid"></a>

#### module.exports.readCollectionGuid ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a collection node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the GraphNode, or null if GUID is empty.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the collection. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readSourceDocumentGuid"></a>

#### module.exports.readSourceDocumentGuid ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a source document node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the GraphNode, or null if GUID is empty.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the source document. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readSemanticCellGuid"></a>

#### module.exports.readSemanticCellGuid ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a semantic cell node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the GraphNode, or null if GUID is empty.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the semantic cell. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readSemanticChunkGuid"></a>

#### module.exports.readSemanticChunkGuid ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a semantic chunk node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the GraphNode, or null if GUID is empty.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the semantic chunk. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readDataRepositoryGuid"></a>

#### module.exports.readDataRepositoryGuid ⇒ <code>Promise.&lt;GraphNode&gt;</code>
Read a data repository node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphNode&gt;</code> - A promise resolving to the GraphNode, or null if GUID is empty.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the data repository. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readTenants"></a>

#### module.exports.readTenants ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Read tenants.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise resolving to an array of GraphNodes.  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>object</code> | Optional filter for searching tenants. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readStoragePools"></a>

#### module.exports.readStoragePools ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Read storage pools.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise resolving to an array of GraphNodes.  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>object</code> | Optional filter for searching storage pools. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readBuckets"></a>

#### module.exports.readBuckets ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Read buckets.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise resolving to an array of GraphNodes.  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>object</code> | Optional filter for searching buckets. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readObjectMetadataFilter"></a>

#### module.exports.readObjectMetadataFilter ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Read objects.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise resolving to an array of GraphNodes.  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>object</code> | Optional filter for searching objects. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readCollections"></a>

#### module.exports.readCollections ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Read collections.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise resolving to an array of GraphNodes.  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>object</code> | Optional filter for searching collections. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readSourceDocuments"></a>

#### module.exports.readSourceDocuments ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Read source documents.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise resolving to an array of GraphNodes.  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>object</code> | Optional filter for searching source documents. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readSemanticCells"></a>

#### module.exports.readSemanticCells ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Read semantic cells.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise resolving to an array of GraphNodes.  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>object</code> | Optional filter for searching semantic cells. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readSemanticChunks"></a>

#### module.exports.readSemanticChunks ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Read semantic chunks.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise resolving to an array of GraphNodes.  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>object</code> | Optional filter for searching semantic chunks. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readDataRepositories"></a>

#### module.exports.readDataRepositories ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Read data repositories.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise resolving to an array of GraphNodes.  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>object</code> | Optional filter for searching data repositories. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteTenant"></a>

#### module.exports.deleteTenant ⇒ <code>Promise.&lt;void&gt;</code>
Delete a tenant.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>TenantMetadata</code> | The tenant to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteStoragePool"></a>

#### module.exports.deleteStoragePool ⇒ <code>Promise.&lt;void&gt;</code>
Delete a storage pool.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| pool | <code>StoragePool</code> | The storage pool to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteBucket"></a>

#### module.exports.deleteBucket ⇒ <code>Promise.&lt;void&gt;</code>
Delete a bucket.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| bucket | <code>BucketMetadata</code> | The bucket to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteObjectMetadata"></a>

#### module.exports.deleteObjectMetadata ⇒ <code>Promise.&lt;void&gt;</code>
Delete an object.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>ObjectMetadata</code> | The object to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteCollection"></a>

#### module.exports.deleteCollection ⇒ <code>Promise.&lt;void&gt;</code>
Delete a collection.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| coll | <code>Collection</code> | The collection to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteSourceDocument"></a>

#### module.exports.deleteSourceDocument ⇒ <code>Promise.&lt;void&gt;</code>
Delete a source document.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| doc | <code>SourceDocument</code> | The source document to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteSemanticCell"></a>

#### module.exports.deleteSemanticCell ⇒ <code>Promise.&lt;void&gt;</code>
Delete a semantic cell.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| cell | <code>SemanticCell</code> | The semantic cell to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteSemanticChunk"></a>

#### module.exports.deleteSemanticChunk ⇒ <code>Promise.&lt;void&gt;</code>
Delete a semantic chunk.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| chunk | <code>SemanticChunk</code> | The semantic chunk to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteDataRepository"></a>

#### module.exports.deleteDataRepository ⇒ <code>Promise.&lt;void&gt;</code>
Delete a data repository.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| repo | <code>DataRepository</code> | The data repository to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteTenantGuid"></a>

#### module.exports.deleteTenantGuid ⇒ <code>Promise.&lt;void&gt;</code>
Delete a tenant by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the tenant to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+deleteStoragePoolGuid"></a>

#### module.exports.deleteStoragePoolGuid ⇒ <code>Promise.&lt;void&gt;</code>
Delete a storage pool by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the storage pool to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+deleteBucketGuid"></a>

#### module.exports.deleteBucketGuid ⇒ <code>Promise.&lt;void&gt;</code>
Delete a bucket by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+deleteObjectMetadataGuid"></a>

#### module.exports.deleteObjectMetadataGuid ⇒ <code>Promise.&lt;void&gt;</code>
Delete an object by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the object to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+deleteCollectionGuid"></a>

#### module.exports.deleteCollectionGuid ⇒ <code>Promise.&lt;void&gt;</code>
Delete a collection by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the collection to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+deleteSourceDocumentGuid"></a>

#### module.exports.deleteSourceDocumentGuid ⇒ <code>Promise.&lt;void&gt;</code>
Delete a source document by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the source document to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+deleteSemanticCellGuid"></a>

#### module.exports.deleteSemanticCellGuid ⇒ <code>Promise.&lt;void&gt;</code>
Delete a semantic cell by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the semantic cell to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+deleteSemanticChunkGuid"></a>

#### module.exports.deleteSemanticChunkGuid ⇒ <code>Promise.&lt;void&gt;</code>
Delete a semantic chunk by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the semantic chunk to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+deleteDataRepositoryGuid"></a>

#### module.exports.deleteDataRepositoryGuid ⇒ <code>Promise.&lt;void&gt;</code>
Delete a data repository by GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the delete operation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the data repository to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+getEdgesTo"></a>

#### module.exports.getEdgesTo ⇒ <code>Promise.&lt;Array.&lt;GraphEdge&gt;&gt;</code>
Get edges to a given graph node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphEdge&gt;&gt;</code> - A promise that resolves to a list of graph edges.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>GraphNode</code> | The graph node to retrieve edges for. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+getEdgesFrom"></a>

#### module.exports.getEdgesFrom ⇒ <code>Promise.&lt;Array.&lt;GraphEdge&gt;&gt;</code>
Get edges from a given graph node.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphEdge&gt;&gt;</code> - A promise that resolves to a list of graph edges.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>GraphNode</code> | The graph node to retrieve edges for. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token. |

<a name="module_base/GraphSdk--module.exports+initializeGraphDriver"></a>

#### module.exports.initializeGraphDriver
Initialize the GraphDriver based on the repository type.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
<a name="module_base/GraphSdk--module.exports+existsInternal"></a>

#### module.exports.existsInternal ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a node exists based on a given type, key, and value.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise that resolves to a boolean indicating if the node exists.  
**Throws**:

- <code>Error</code> If there's an error during the search operation.


| Param | Type | Description |
| --- | --- | --- |
| typeVal | <code>string</code> | The type of the graph node. |
| dataKey | <code>string</code> | The key to search the node by. |
| dataVal | <code>string</code> | The value to search for in the node. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+existsInternalDict"></a>

#### module.exports.existsInternalDict ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a node exists based on a given type and dictionary of search criteria.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise that resolves to a boolean indicating if the node exists.  
**Throws**:

- <code>Error</code> If there's an error during the search operation.


| Param | Type | Description |
| --- | --- | --- |
| typeVal | <code>string</code> | The type of the graph node. |
| dict | <code>Object</code> | The dictionary containing the key-value pairs to search for. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+searchInternalDataKey"></a>

#### module.exports.searchInternalDataKey ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Perform a search for nodes based on a type, key, and value.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise that resolves to a list of graph nodes.  
**Throws**:

- <code>Error</code> If there is an error during the search operation.


| Param | Type | Description |
| --- | --- | --- |
| typeVal | <code>string</code> | The type of the graph node to search for. |
| dataKey | <code>string</code> | The key to search the node by. |
| dataVal | <code>any</code> | The value to search for in the node. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+searchInternal"></a>

#### module.exports.searchInternal ⇒ <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code>
Perform a search for nodes based on a type and a dictionary of search criteria.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphNode&gt;&gt;</code> - A promise that resolves to a list of graph nodes.  
**Throws**:

- <code>Error</code> If there is an error during the search operation.


| Param | Type | Description |
| --- | --- | --- |
| typeVal | <code>string</code> | The type of the graph node to search for. |
| dict | <code>Object</code> | The dictionary containing key-value pairs to search by. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteInternalObj"></a>

#### module.exports.deleteInternalObj ⇒ <code>Promise.&lt;void&gt;</code>
Delete an object of a specific type based on its GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise indicating the deletion is complete.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+deleteInternal"></a>

#### module.exports.deleteInternal ⇒ <code>Promise.&lt;void&gt;</code>
Delete an object by its type and GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise indicating the deletion is complete.  

| Param | Type | Description |
| --- | --- | --- |
| objType | <code>string</code> | The type of the object (e.g., "Tenant", "Bucket"). |
| objGuidField | <code>string</code> | The field representing the GUID of the object. |
| guid | <code>string</code> | The GUID of the object to delete. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readInternalObj"></a>

#### module.exports.readInternalObj ⇒ <code>Promise.&lt;(GraphNode\|null)&gt;</code>
Read an object based on its type and GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;(GraphNode\|null)&gt;</code> - A promise that resolves to the graph node or null if not found.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to read. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+readInternal"></a>

#### module.exports.readInternal ⇒ <code>Promise.&lt;(GraphNode\|null)&gt;</code>
Read a graph node by its type and GUID.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;(GraphNode\|null)&gt;</code> - A promise that resolves to the graph node or null if not found.  

| Param | Type | Description |
| --- | --- | --- |
| objType | <code>string</code> | The type of the object (e.g., "Tenant", "Bucket"). |
| objGuidField | <code>string</code> | The field representing the GUID of the object. |
| guid | <code>string</code> | The GUID of the object to read. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+insertSemanticCellsInternal"></a>

#### module.exports.insertSemanticCellsInternal ⇒ <code>Promise.&lt;GraphResult&gt;</code>
Insert semantic cells into the graph and establish relationships with parent cells or source documents.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;GraphResult&gt;</code> - A promise that resolves to the result of the insertion.  

| Param | Type | Description |
| --- | --- | --- |
| graph | <code>Graph</code> | The graph in which to insert the semantic cells. |
| sourceDocumentNode | <code>GraphNode</code> | The source document node. |
| parentCellNode | <code>GraphNode</code> | The parent cell node. |
| cells | <code>Array.&lt;SemanticCell&gt;</code> | List of semantic cells to insert. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+removeSourceDocumentObj"></a>

#### module.exports.removeSourceDocumentObj ⇒ <code>Promise.&lt;void&gt;</code>
Remove the source document from the graph, including its semantic cells and chunks.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| sourceDoc | <code>GraphNode</code> | The source document node to remove. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+removeSemanticCell"></a>

#### module.exports.removeSemanticCell ⇒ <code>Promise.&lt;void&gt;</code>
Remove the semantic cell from the graph, including its associated semantic chunks.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| cell | <code>GraphNode</code> | The semantic cell node to remove. |
| [cancelToken] | <code>AbortSignal</code> | Optional cancellation token to abort the request. |

<a name="module_base/GraphSdk--module.exports+dispose"></a>

#### module.exports.dispose()
Dispose of the Graph SDK.

**Kind**: instance method of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
<a name="module_base/GraphSdk--module.exports+validateConnectivity"></a>

#### module.exports.validateConnectivity([cancelToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Validate connectivity to the graph repository.

**Kind**: instance method of [<code>module.exports</code>](#exp_module_base/GraphSdk--module.exports)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to `true` if connected, otherwise `false`.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [cancelToken] | <code>object</code> | <code></code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk"></a>

## base/ViewHealthcheckSdk
Healthcheck service.

**Version**: 0.1.0  

* [base/ViewHealthcheckSdk](#module_base/ViewHealthcheckSdk)
    * [module.exports](#exp_module_base/ViewHealthcheckSdk--module.exports) ⏏
        * [new module.exports(tenantGuid, accessKey, endpoint)](#new_module_base/ViewHealthcheckSdk--module.exports_new)
        * [.checkSwitchboardHealth](#module_base/ViewHealthcheckSdk--module.exports+checkSwitchboardHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkConfigHealth](#module_base/ViewHealthcheckSdk--module.exports+checkConfigHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkStorageHealth](#module_base/ViewHealthcheckSdk--module.exports+checkStorageHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkVectorHealth](#module_base/ViewHealthcheckSdk--module.exports+checkVectorHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkProcessorHealth](#module_base/ViewHealthcheckSdk--module.exports+checkProcessorHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkAssistantHealth](#module_base/ViewHealthcheckSdk--module.exports+checkAssistantHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkOrchestratorHealth](#module_base/ViewHealthcheckSdk--module.exports+checkOrchestratorHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkCrawlerHealth](#module_base/ViewHealthcheckSdk--module.exports+checkCrawlerHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkLexiHealth](#module_base/ViewHealthcheckSdk--module.exports+checkLexiHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkEmbeddingsHealth](#module_base/ViewHealthcheckSdk--module.exports+checkEmbeddingsHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
        * [.checkDirectorHealth](#module_base/ViewHealthcheckSdk--module.exports+checkDirectorHealth) ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>

<a name="exp_module_base/ViewHealthcheckSdk--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_base/ViewHealthcheckSdk--module.exports_new"></a>

#### new module.exports(tenantGuid, accessKey, endpoint)
Constructs a new OrchestratorApi.


| Param | Type | Description |
| --- | --- | --- |
| tenantGuid | <code>string</code> | Tenant GUID. |
| accessKey | <code>string</code> | Access key. |
| endpoint | <code>string</code> | Endpoint URL . |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkSwitchboardHealth"></a>

#### module.exports.checkSwitchboardHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check switchboard health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkConfigHealth"></a>

#### module.exports.checkConfigHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check config health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkStorageHealth"></a>

#### module.exports.checkStorageHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check storage health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkVectorHealth"></a>

#### module.exports.checkVectorHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check Vector health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkProcessorHealth"></a>

#### module.exports.checkProcessorHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check Processor health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkAssistantHealth"></a>

#### module.exports.checkAssistantHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check Assistant health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkOrchestratorHealth"></a>

#### module.exports.checkOrchestratorHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check Orchestrator health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkCrawlerHealth"></a>

#### module.exports.checkCrawlerHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check Crawler health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkLexiHealth"></a>

#### module.exports.checkLexiHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check Lexi health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkEmbeddingsHealth"></a>

#### module.exports.checkEmbeddingsHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check Embeddings health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewHealthcheckSdk--module.exports+checkDirectorHealth"></a>

#### module.exports.checkDirectorHealth ⇒ <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code>
check Director health.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewHealthcheckSdk--module.exports)  
**Returns**: <code>Promise.&lt;(boolean\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk"></a>

## base/Lexi/ViewLexiSdk
View Lexi SDK.

**Version**: 0.1.0  

* [base/Lexi/ViewLexiSdk](#module_base/Lexi/ViewLexiSdk)
    * [.retrieveCollections](#module_base/Lexi/ViewLexiSdk+retrieveCollections) ⇒ <code>Promise.&lt;(Array.&lt;Collection&gt;\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveCollection](#module_base/Lexi/ViewLexiSdk+retrieveCollection) ⇒ <code>Promise.&lt;(Collection\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveCollectionStatistics](#module_base/Lexi/ViewLexiSdk+retrieveCollectionStatistics) ⇒ <code>Promise.&lt;(CollectionStatistics\|ApiErrorResponse)&gt;</code>
    * [.createCollection](#module_base/Lexi/ViewLexiSdk+createCollection) ⇒ <code>Promise.&lt;(Collection\|ApiErrorResponse)&gt;</code>
    * [.deleteCollection](#module_base/Lexi/ViewLexiSdk+deleteCollection) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.retrieveCollectionTopTerms](#module_base/Lexi/ViewLexiSdk+retrieveCollectionTopTerms) ⇒ <code>Promise.&lt;(Object\|ApiErrorResponse)&gt;</code>
    * [.collectionExists](#module_base/Lexi/ViewLexiSdk+collectionExists) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveSourceDocuments](#module_base/Lexi/ViewLexiSdk+retrieveSourceDocuments) ⇒ <code>Promise.&lt;(Array.&lt;SourceDocument&gt;\|ApiErrorResponse)&gt;</code>
    * [.enumerateCollectionDocument](#module_base/Lexi/ViewLexiSdk+enumerateCollectionDocument) ⇒ <code>Promise.&lt;(EnumerationResult.&lt;SourceDocument&gt;\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveSourceDocument](#module_base/Lexi/ViewLexiSdk+retrieveSourceDocument) ⇒ <code>Promise.&lt;(SourceDocument\|ApiErrorResponse)&gt;</code>
    * [.retrieveSourceDocumentStatistics](#module_base/Lexi/ViewLexiSdk+retrieveSourceDocumentStatistics) ⇒ <code>Promise.&lt;(SourceDocumentStatistics\|ApiErrorResponse)&gt;</code>
    * [.retrieveSourceDocumentTopTerms](#module_base/Lexi/ViewLexiSdk+retrieveSourceDocumentTopTerms) ⇒ <code>Promise.&lt;(SourceDocumentStatistics\|ApiErrorResponse)&gt;</code>
    * [.uploadSourceDocument](#module_base/Lexi/ViewLexiSdk+uploadSourceDocument) ⇒ <code>Promise.&lt;(SourceDocument\|ApiErrorResponse)&gt;</code>
    * [.deleteSourceDocument](#module_base/Lexi/ViewLexiSdk+deleteSourceDocument) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.deleteSourceDocumentFromKey](#module_base/Lexi/ViewLexiSdk+deleteSourceDocumentFromKey) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.sourceDocumentsExists](#module_base/Lexi/ViewLexiSdk+sourceDocumentsExists) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.searchCollectionDocuments](#module_base/Lexi/ViewLexiSdk+searchCollectionDocuments) ⇒ <code>Promise.&lt;(SearchResult\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveAllIngestQueue](#module_base/Lexi/ViewLexiSdk+retrieveAllIngestQueue) ⇒ <code>Promise.&lt;(Array.&lt;IngestQueue&gt;\|ApiErrorResponse)&gt;</code>
    * [.retrieveIngestQueue](#module_base/Lexi/ViewLexiSdk+retrieveIngestQueue) ⇒ <code>Promise.&lt;(IngestQueue\|ApiErrorResponse)&gt;</code>
    * [.existsIngestQueue](#module_base/Lexi/ViewLexiSdk+existsIngestQueue) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveIngestQueueStats](#module_base/Lexi/ViewLexiSdk+retrieveIngestQueueStats) ⇒ <code>Promise.&lt;(IngestQueue\|ApiErrorResponse)&gt;</code>
    * [.deleteIngestQueue](#module_base/Lexi/ViewLexiSdk+deleteIngestQueue) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.searchAndEnumerate](#module_base/Lexi/ViewLexiSdk+searchAndEnumerate) ⇒ <code>Promise.&lt;(EnumerationResult.&lt;SourceDocument&gt;\|null\|ApiErrorResponse)&gt;</code>

<a name="module_base/Lexi/ViewLexiSdk+retrieveCollections"></a>

### base/Lexi/ViewLexiSdk.retrieveCollections ⇒ <code>Promise.&lt;(Array.&lt;Collection&gt;\|null\|ApiErrorResponse)&gt;</code>
Retrieve collections.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;Collection&gt;\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of collections or null if not found.  
**Throws**:

- <code>Error</code> If an error occurs during retrieval.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveCollection"></a>

### base/Lexi/ViewLexiSdk.retrieveCollection ⇒ <code>Promise.&lt;(Collection\|null\|ApiErrorResponse)&gt;</code>
Retrieve a single collection by GUID.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(Collection\|null\|ApiErrorResponse)&gt;</code> - A promise that resolves to the retrieved collection, or null if not found.  
**Throws**:

- <code>Error</code> If the collectionGuid is null or empty, or if an error occurs during retrieval.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveCollectionStatistics"></a>

### base/Lexi/ViewLexiSdk.retrieveCollectionStatistics ⇒ <code>Promise.&lt;(CollectionStatistics\|ApiErrorResponse)&gt;</code>
Retrieve collection statistics.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(CollectionStatistics\|ApiErrorResponse)&gt;</code> - A promise resolving to collection statistics.  

| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The collection GUID. |
| [cancelToken] | <code>object</code> | Optional object with an abort method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+createCollection"></a>

### base/Lexi/ViewLexiSdk.createCollection ⇒ <code>Promise.&lt;(Collection\|ApiErrorResponse)&gt;</code>
Create a new collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(Collection\|ApiErrorResponse)&gt;</code> - A promise resolving to the created collection.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Object</code> | Information about the collection. |
| collection.id | <code>number</code> | Collection ID. |
| collection.GUID | <code>string</code> | Collection GUID (automatically generated if not provided). |
| collection.TenantGUID | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| collection.Name | <code>string</code> | Name of the collection. |
| collection.AllowOverwrites | <code>boolean</code> | Indicates whether source documents can be overwritten (default is true). |
| [collection.AdditionalData] | <code>string</code> | Additional data (optional). |
| collection.CreatedUtc | <code>Date</code> | Creation timestamp in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an abort method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+deleteCollection"></a>

### base/Lexi/ViewLexiSdk.deleteCollection ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving when the collection is deleted.  

| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to delete. |
| [cancelToken] | <code>object</code> | Optional object with an abort method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveCollectionTopTerms"></a>

### base/Lexi/ViewLexiSdk.retrieveCollectionTopTerms ⇒ <code>Promise.&lt;(Object\|ApiErrorResponse)&gt;</code>
Retrieve top terms.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(Object\|ApiErrorResponse)&gt;</code> - A promise resolving to collection statistics.  
**Throws**:

- <code>Error</code> If the collectionGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The collection GUID. |
| maxKeys | <code>number</code> | The maximum number of keys to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an abort method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+collectionExists"></a>

### base/Lexi/ViewLexiSdk.collectionExists ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a collection exists.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves to `true` if the collection exists, `false` if it does not, or an error response if the check fails.  
**Throws**:

- <code>Error</code> If the collectionGuid argument is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to check for existence. |
| [cancelToken] | <code>Object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveSourceDocuments"></a>

### base/Lexi/ViewLexiSdk.retrieveSourceDocuments ⇒ <code>Promise.&lt;(Array.&lt;SourceDocument&gt;\|ApiErrorResponse)&gt;</code>
Retrieve documents from a specified collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;SourceDocument&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to a list of source documents or an error response.  
**Throws**:

- <code>Error</code> If the collectionGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to retrieve documents from. |
| [cancelToken] | <code>object</code> | Optional object with an abort method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+enumerateCollectionDocument"></a>

### base/Lexi/ViewLexiSdk.enumerateCollectionDocument ⇒ <code>Promise.&lt;(EnumerationResult.&lt;SourceDocument&gt;\|null\|ApiErrorResponse)&gt;</code>
Enumerate a collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult.&lt;SourceDocument&gt;\|null\|ApiErrorResponse)&gt;</code> - The enumeration result or null if the request fails.  
**Throws**:

- <code>Error</code> If the collectionGuid or query is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to enumerate. |
| query | <code>Object</code> | The query to use for enumeration. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| query.timestamp | <code>number</code> | The timestamp for the enumeration query. |
| query.tenant | <code>TenantMetadata</code> \| <code>null</code> | Metadata for the tenant. |
| query.tenantGuid | <code>string</code> | GUID for the tenant. |
| query.bucket | <code>BucketMetadata</code> \| <code>null</code> | Metadata for the bucket. |
| query.bucketGuid | <code>string</code> | GUID for the bucket. |
| query.collection | <code>Collection</code> \| <code>null</code> | Collection information. |
| query.collectionGuid | <code>string</code> | GUID for the collection. |
| query.sourceDocument | <code>SourceDocument</code> \| <code>null</code> | Information about the source document. |
| query.sourceDocumentGuid | <code>string</code> | GUID for the source document. |
| query.vectorRepository | <code>VectorRepository</code> \| <code>null</code> | Information about the vector repository. |
| query.vectorRepositoryGuid | <code>string</code> | GUID for the vector repository. |
| query.graphRepository | <code>GraphRepository</code> \| <code>null</code> | Information about the graph repository. |
| query.graphRepositoryGuid | <code>string</code> | GUID for the graph repository. |
| query.graphNodeIdentifier | <code>string</code> | Identifier for the graph node. |
| query.maxResults | <code>number</code> | Maximum number of results to retrieve. |
| query.continuationToken | <code>string</code> \| <code>null</code> | Token for continuation in results. |
| query.prefix | <code>string</code> \| <code>null</code> | Prefix to filter results. |
| query.suffix | <code>string</code> \| <code>null</code> | Suffix to filter results. |
| query.marker | <code>string</code> \| <code>null</code> | Marker for pagination. |
| query.delimiter | <code>string</code> | Delimiter for separating values. |
| query.token | <code>string</code> | Token for authorization. |
| query.includeData | <code>boolean</code> | Flag to include subordinate data. |
| query.includeOwners | <code>boolean</code> | Flag to include owners (default: true for S3 compatibility). |
| query.filters | <code>Array.&lt;SearchFilter&gt;</code> | Search filters to apply. |
| query.ordering | <code>EnumerationOrderEnum</code> | Ordering for the enumeration results. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveSourceDocument"></a>

### base/Lexi/ViewLexiSdk.retrieveSourceDocument ⇒ <code>Promise.&lt;(SourceDocument\|ApiErrorResponse)&gt;</code>
Retrieve a specific document from a collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(SourceDocument\|ApiErrorResponse)&gt;</code> - A promise resolving to the source document or an error response.  
**Throws**:

- <code>Error</code> If the collectionGuid or documentGuid is null or empty.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| collectionGuid | <code>string</code> |  | The GUID of the collection to retrieve the document from. |
| documentGuid | <code>string</code> |  | The GUID of the document to retrieve. |
| [includeData] | <code>boolean</code> | <code>false</code> | Flag to indicate whether or not to include document data. |
| [cancelToken] | <code>object</code> |  | Optional object with an abort method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveSourceDocumentStatistics"></a>

### base/Lexi/ViewLexiSdk.retrieveSourceDocumentStatistics ⇒ <code>Promise.&lt;(SourceDocumentStatistics\|ApiErrorResponse)&gt;</code>
Retrieve statistics for a specific document in a collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(SourceDocumentStatistics\|ApiErrorResponse)&gt;</code> - A promise resolving to source document statistics or an error response.  
**Throws**:

- <code>Error</code> If the collectionGuid or documentGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection. |
| documentGuid | <code>string</code> | The GUID of the document. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveSourceDocumentTopTerms"></a>

### base/Lexi/ViewLexiSdk.retrieveSourceDocumentTopTerms ⇒ <code>Promise.&lt;(SourceDocumentStatistics\|ApiErrorResponse)&gt;</code>
Retrieve top terms for a specific document in a collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(SourceDocumentStatistics\|ApiErrorResponse)&gt;</code> - A promise resolving to source document statistics or an error response.  
**Throws**:

- <code>Error</code> If the collectionGuid or documentGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection. |
| documentGuid | <code>string</code> | The GUID of the document. |
| [maxKeys] | <code>number</code> | The maximum number of keys to retrieve. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/Lexi/ViewLexiSdk+uploadSourceDocument"></a>

### base/Lexi/ViewLexiSdk.uploadSourceDocument ⇒ <code>Promise.&lt;(SourceDocument\|ApiErrorResponse)&gt;</code>
Upload a source document to a collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(SourceDocument\|ApiErrorResponse)&gt;</code> - A promise resolving to the uploaded document or an error response.  
**Throws**:

- <code>Error</code> If the document is null.


| Param | Type | Description |
| --- | --- | --- |
| document | <code>Object</code> | Information about the source document. |
| document.GUID | <code>string</code> | The unique identifier for the document. |
| document.TenantGUID | <code>string</code> | The tenant's unique identifier. |
| document.BucketGUID | <code>string</code> \| <code>null</code> | The bucket's unique identifier. |
| document.CollectionGUID | <code>string</code> | The collection's unique identifier. |
| document.ObjectGUID | <code>string</code> | The object's unique identifier. |
| document.DataFlowRequestGUID | <code>string</code> \| <code>null</code> | The data flow request unique identifier. |
| document.GraphRepositoryGUID | <code>string</code> \| <code>null</code> | The graph repository unique identifier. |
| document.GraphNodeIdentifier | <code>string</code> \| <code>null</code> | The identifier for the graph node. |
| document.DataRepositoryGUID | <code>string</code> \| <code>null</code> | The data repository unique identifier. |
| document.ObjectKey | <code>string</code> \| <code>null</code> | The key for the object. |
| document.ObjectVersion | <code>string</code> | The version of the object. |
| document.ContentType | <code>string</code> | The content type of the document. |
| document.DocumentType | <code>DocumentTypeEnum</code> | The type of the document. |
| document.SourceUrl | <code>string</code> \| <code>null</code> | The source URL of the document. |
| document.ContentLength | <code>number</code> | The length of the content. |
| document.MD5Hash | <code>string</code> | The MD5 hash of the document. |
| document.SHA1Hash | <code>string</code> \| <code>null</code> | The SHA1 hash of the document. |
| document.SHA256Hash | <code>string</code> \| <code>null</code> | The SHA256 hash of the document. |
| document.CreatedUtc | <code>Date</code> | The creation timestamp in UTC. |
| document.ExpirationUtc | <code>Date</code> \| <code>null</code> | The expiration timestamp in UTC, if any. |
| document.Score | <code>DocumentScore</code> \| <code>null</code> | The score of the document. |
| document.UdrDocument | <code>UdrDocument</code> \| <code>null</code> | The UDR document associated with the source document. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/Lexi/ViewLexiSdk+deleteSourceDocument"></a>

### base/Lexi/ViewLexiSdk.deleteSourceDocument ⇒ <code>Promise.&lt;void&gt;</code>
Deletes a document from a collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the document is deleted.  
**Throws**:

- <code>Error</code> If either `collectionGuid` or `documentGuid` is empty or null.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The collection GUID. |
| documentGuid | <code>string</code> | The document GUID. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/Lexi/ViewLexiSdk+deleteSourceDocumentFromKey"></a>

### base/Lexi/ViewLexiSdk.deleteSourceDocumentFromKey ⇒ <code>Promise.&lt;void&gt;</code>
Deletes a document from a collection using its key and version.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the document is deleted.  
**Throws**:

- <code>Error</code> If any of the parameters (`collectionGuid`, `key`, `version`) are empty or null.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The collection GUID. |
| key | <code>string</code> | The document key. |
| version | <code>string</code> | The document version. |
| [cancelToken] | <code>object</code> | Optional cancellation token to abort the request. |

<a name="module_base/Lexi/ViewLexiSdk+sourceDocumentsExists"></a>

### base/Lexi/ViewLexiSdk.sourceDocumentsExists ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a source documents exists.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves to `true` if the collection exists, `false` if it does not, or an error response if the check fails.  
**Throws**:

- <code>Error</code> If the collectionGuid argument is null or undefined or If the documentGuid argument is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The collection GUID. |
| documentGuid | <code>string</code> | The document GUID. |
| [cancelToken] | <code>Object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+searchCollectionDocuments"></a>

### base/Lexi/ViewLexiSdk.searchCollectionDocuments ⇒ <code>Promise.&lt;(SearchResult\|null\|ApiErrorResponse)&gt;</code>
Search a collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(SearchResult\|null\|ApiErrorResponse)&gt;</code> - The search result or null if the request fails.  
**Throws**:

- <code>Error</code> If the collectionGuid or query is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to search. |
| query | <code>Object</code> | The query to use for searching. |
| includeData | <code>boolean</code> | include data |
| includeTopTerms | <code>boolean</code> | include  top terms |
| emitResult | <code>boolean</code> | Search and emit result |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| query.guid | <code>string</code> | The GUID of the search operation. |
| query.tenantGuid | <code>string</code> | The tenant GUID. |
| query.collectionGuid | <code>string</code> | The collection GUID. |
| query.maxResults | <code>number</code> | Maximum number of results to retrieve. |
| query.continuationToken | <code>string</code> | Token for continuation in results. |
| query.ordering | <code>EnumerationOrderEnum</code> | Ordering for the search results. |
| query.filter | <code>QueryFilter</code> | Required terms and search filters for including a document in the results. |
| query.embeddingsRule | <code>EmbeddingsRule</code> | Rule for embeddings. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveAllIngestQueue"></a>

### base/Lexi/ViewLexiSdk.retrieveAllIngestQueue ⇒ <code>Promise.&lt;(Array.&lt;IngestQueue&gt;\|ApiErrorResponse)&gt;</code>
Retrieves all ingest queue.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;IngestQueue&gt;\|ApiErrorResponse)&gt;</code> - A promise that resolves to an array of items in the ingest queue or an error response if the retrieval fails.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>Object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveIngestQueue"></a>

### base/Lexi/ViewLexiSdk.retrieveIngestQueue ⇒ <code>Promise.&lt;(IngestQueue\|ApiErrorResponse)&gt;</code>
Retrieves a specific item from the ingest queue.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(IngestQueue\|ApiErrorResponse)&gt;</code> - A promise that resolves to the requested item or an error response if the retrieval fails.  

| Param | Type | Description |
| --- | --- | --- |
| ingestQueueGuid | <code>string</code> | The GUID of the item to retrieve. |
| [cancelToken] | <code>Object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+existsIngestQueue"></a>

### base/Lexi/ViewLexiSdk.existsIngestQueue ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Checks if a specific item exists in the ingest queue.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves to `true` if the item exists, `false` if it does not, or an error response if the check fails.  
**Throws**:

- <code>Error</code> If the ingestQueueGuid argument is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| ingestQueueGuid | <code>string</code> | The GUID of the item to check. |
| [cancelToken] | <code>Object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+retrieveIngestQueueStats"></a>

### base/Lexi/ViewLexiSdk.retrieveIngestQueueStats ⇒ <code>Promise.&lt;(IngestQueue\|ApiErrorResponse)&gt;</code>
Retrieves statistics for the ingest queue.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(IngestQueue\|ApiErrorResponse)&gt;</code> - A promise that resolves to the statistics of the ingest queue or an error response if the retrieval fails.  

| Param | Type | Description |
| --- | --- | --- |
| ingestQueueGuid | <code>string</code> | The GUID of the item to check. |
| [cancelToken] | <code>Object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+deleteIngestQueue"></a>

### base/Lexi/ViewLexiSdk.deleteIngestQueue ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Deletes a specific item from the ingest queue.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves to `true` if the deletion was successful, or an error response if it failed.  
**Throws**:

- <code>Error</code> If the ingestQueueGuid argument is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| ingestQueueGuid | <code>string</code> | The GUID of the item to delete. |
| [cancelToken] | <code>Object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/Lexi/ViewLexiSdk+searchAndEnumerate"></a>

### base/Lexi/ViewLexiSdk.searchAndEnumerate ⇒ <code>Promise.&lt;(EnumerationResult.&lt;SourceDocument&gt;\|null\|ApiErrorResponse)&gt;</code>
Enumerate collection.

**Kind**: instance property of [<code>base/Lexi/ViewLexiSdk</code>](#module_base/Lexi/ViewLexiSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult.&lt;SourceDocument&gt;\|null\|ApiErrorResponse)&gt;</code> - The enumeration result or null if the request fails.  
**Throws**:

- <code>Error</code> If the collectionGuid or query is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to enumerate. |
| query | <code>Object</code> | The query parameters for enumeration. |
| [query.search] | <code>boolean</code> | Flag to indicate if a search should be performed. |
| [query.includeData] | <code>boolean</code> | Flag to include subordinate data. |
| [query.async] | <code>boolean</code> | Flag to indicate if the request should be asynchronous. |
| searchData | <code>Object</code> | The body of the request containing search and enumeration parameters. |
| searchData.MaxResults | <code>number</code> | The maximum number of results to retrieve. |
| searchData.Skip | <code>number</code> | The number of results to skip. |
| searchData.ContinuationToken | <code>string</code> | Token for continuation in results. |
| searchData.Ordering | <code>string</code> | Ordering for the search results. |
| searchData.EmbeddingsRule | <code>Object</code> | The embeddings rule for processing. |
| searchData.Filters | <code>Array.&lt;Object&gt;</code> | Filters to apply for the search. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewOrchestratorSdk"></a>

## base/ViewOrchestratorSdk
Orchestrator service.

**Version**: 0.1.0  

* [base/ViewOrchestratorSdk](#module_base/ViewOrchestratorSdk)
    * [module.exports](#exp_module_base/ViewOrchestratorSdk--module.exports) ⏏
    * _global_
        * [module.exports](#exp_module_base/ViewOrchestratorSdk--module.exports) ⏏

<a name="exp_module_base/ViewOrchestratorSdk--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="exp_module_base/ViewOrchestratorSdk--module.exports"></a>

### module.exports ⏏
**Kind**: global class of [<code>base/ViewOrchestratorSdk</code>](#module_base/ViewOrchestratorSdk)  
<a name="module_base/ViewStorageSdk"></a>

## base/ViewStorageSdk
Storage service.

**Version**: 0.1.0  

* [base/ViewStorageSdk](#module_base/ViewStorageSdk)
    * [.createStoragePool](#module_base/ViewStorageSdk+createStoragePool) ⇒ <code>Promise.&lt;(StoragePool\|null\|ApiErrorResponse)&gt;</code>
    * [.existsStoragePool](#module_base/ViewStorageSdk+existsStoragePool) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveStoragePool](#module_base/ViewStorageSdk+retrieveStoragePool) ⇒ <code>Promise.&lt;(StoragePool\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveStoragePools](#module_base/ViewStorageSdk+retrieveStoragePools) ⇒ <code>Promise.&lt;(Array.&lt;StoragePool&gt;\|ApiErrorResponse)&gt;</code>
    * [.updateStoragePool](#module_base/ViewStorageSdk+updateStoragePool) ⇒ <code>Promise.&lt;(StoragePool\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteStoragePool](#module_base/ViewStorageSdk+deleteStoragePool) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.retrieveBuckets](#module_base/ViewStorageSdk+retrieveBuckets) ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveBucketObjects](#module_base/ViewStorageSdk+retrieveBucketObjects) ⇒ <code>Promise.&lt;(Array.&lt;BucketMetadata&gt;\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveBucketMetadata](#module_base/ViewStorageSdk+retrieveBucketMetadata) ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.createBucket](#module_base/ViewStorageSdk+createBucket) ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.updateBucket](#module_base/ViewStorageSdk+updateBucket) ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteBucket](#module_base/ViewStorageSdk+deleteBucket) ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveBucketTags](#module_base/ViewStorageSdk+retrieveBucketTags) ⇒ <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteBucketTags](#module_base/ViewStorageSdk+deleteBucketTags) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.createBucketTags](#module_base/ViewStorageSdk+createBucketTags) ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveBucketACL](#module_base/ViewStorageSdk+retrieveBucketACL) ⇒ <code>Promise.&lt;(AclMetaData\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteBucketACL](#module_base/ViewStorageSdk+deleteBucketACL) ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
    * [.createBucketACL](#module_base/ViewStorageSdk+createBucketACL) ⇒ <code>Promise.&lt;(AclEntry\|null\|ApiErrorResponse)&gt;</code>
    * [.existsObject](#module_base/ViewStorageSdk+existsObject) ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveObjects](#module_base/ViewStorageSdk+retrieveObjects) ⇒ <code>Promise.&lt;(String\|null\|ApiErrorResponse)&gt;</code>
    * [.writeObject](#module_base/ViewStorageSdk+writeObject) ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.writeObjectExpiration](#module_base/ViewStorageSdk+writeObjectExpiration) ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveObjectData](#module_base/ViewStorageSdk+retrieveObjectData) ⇒ <code>Promise.&lt;(String\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveObjectDataInRange](#module_base/ViewStorageSdk+retrieveObjectDataInRange) ⇒ <code>Promise.&lt;(string\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveObjectMetadata](#module_base/ViewStorageSdk+retrieveObjectMetadata) ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteObject](#module_base/ViewStorageSdk+deleteObject) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.createObjectTags](#module_base/ViewStorageSdk+createObjectTags) ⇒ <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteObjectTags](#module_base/ViewStorageSdk+deleteObjectTags) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.retrieveObjectTags](#module_base/ViewStorageSdk+retrieveObjectTags) ⇒ <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveObjectACL](#module_base/ViewStorageSdk+retrieveObjectACL) ⇒ <code>Promise.&lt;(AclMetaData\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteObjectACL](#module_base/ViewStorageSdk+deleteObjectACL) ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
    * [.createObjectACL](#module_base/ViewStorageSdk+createObjectACL) ⇒ <code>Promise.&lt;(AclEntry\|null\|ApiErrorResponse)&gt;</code>
    * [.createMultipartUpload](#module_base/ViewStorageSdk+createMultipartUpload)
    * [.retrieveMultipartUploads](#module_base/ViewStorageSdk+retrieveMultipartUploads) ⇒ <code>Promise.&lt;(MultipartUpload\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveMultipartUpload](#module_base/ViewStorageSdk+retrieveMultipartUpload) ⇒ <code>Promise.&lt;(MultipartUpload\|null\|ApiErrorResponse)&gt;</code>
    * [.retrievePartOfMultipartUpload](#module_base/ViewStorageSdk+retrievePartOfMultipartUpload) ⇒ <code>Promise.&lt;(MultipartUpload\|null\|ApiErrorResponse)&gt;</code>
    * [.deletePartOfMultipartUpload](#module_base/ViewStorageSdk+deletePartOfMultipartUpload) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.deleteMultipartUpload](#module_base/ViewStorageSdk+deleteMultipartUpload) ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
    * [.uploadPartOfMultipartUpload](#module_base/ViewStorageSdk+uploadPartOfMultipartUpload) ⇒ <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code>
    * [.completeMultipartUpload](#module_base/ViewStorageSdk+completeMultipartUpload) ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>

<a name="module_base/ViewStorageSdk+createStoragePool"></a>

### base/ViewStorageSdk.createStoragePool ⇒ <code>Promise.&lt;(StoragePool\|null\|ApiErrorResponse)&gt;</code>
Create a pool.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(StoragePool\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created StoragePool object or null.  
**Throws**:

- <code>Error</code> If the pool is null.


| Param | Type | Description |
| --- | --- | --- |
| pool | <code>Object</code> | Information about the storage pool. |
| pool.id | <code>number</code> | Database row ID. |
| pool.GUID | <code>string</code> | Storage pool GUID (automatically generated if not provided). |
| pool.TenantGUID | <code>string</code> | Tenant GUID. |
| pool.EncryptionKeyGUID | <code>string</code> | Encryption key GUID. |
| pool.Name | <code>string</code> | Name of the storage pool. |
| pool.Provider | <code>string</code> | Provider of the storage pool (default is 'Disk'). |
| pool.WriteMode | <code>string</code> | Object key write mode. |
| pool.UseSsl | <code>boolean</code> | Enable or disable SSL. |
| pool.Endpoint | <code>string</code> | Endpoint URL for the storage pool provider. |
| pool.AccessKey | <code>string</code> | Access key. |
| pool.SecretKey | <code>string</code> | Secret key. |
| pool.AwsRegion | <code>string</code> | AWS region. |
| pool.AwsBucket | <code>string</code> | AWS bucket. |
| pool.AwsBaseDomain | <code>string</code> | Base URL for AWS S3 compatible storage platforms. |
| pool.AwsBaseUrl | <code>string</code> | Base URL to use for objects. |
| pool.DiskDirectory | <code>string</code> | Disk directory. |
| pool.AzureAccount | <code>string</code> | Azure account. |
| pool.AzureContainer | <code>string</code> | Azure container. |
| pool.Compress | <code>string</code> | Compression type. |
| pool.EnableReadCaching | <code>boolean</code> | Flag to enable or disable read caching. |
| pool.CreatedUtc | <code>Date</code> | Creation timestamp in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+existsStoragePool"></a>

### base/ViewStorageSdk.existsStoragePool ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a pool exists.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the pool exists, or false if not.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the pool to check. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveStoragePool"></a>

### base/ViewStorageSdk.retrieveStoragePool ⇒ <code>Promise.&lt;(StoragePool\|null\|ApiErrorResponse)&gt;</code>
Retrieve a pool by its GUID.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(StoragePool\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the StoragePool object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the pool to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveStoragePools"></a>

### base/ViewStorageSdk.retrieveStoragePools ⇒ <code>Promise.&lt;(Array.&lt;StoragePool&gt;\|ApiErrorResponse)&gt;</code>
Retrieve all pools.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;StoragePool&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of StoragePool objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+updateStoragePool"></a>

### base/ViewStorageSdk.updateStoragePool ⇒ <code>Promise.&lt;(StoragePool\|null\|ApiErrorResponse)&gt;</code>
Update a pool.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(StoragePool\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated StoragePool object or null.  
**Throws**:

- <code>Error</code> If the pool is null.


| Param | Type | Description |
| --- | --- | --- |
| pool | <code>Object</code> | Information about the storage pool. |
| pool.id | <code>number</code> | Database row ID. |
| pool.GUID | <code>string</code> | Storage pool GUID (automatically generated if not provided). |
| pool.TenantGUID | <code>string</code> | Tenant GUID. |
| pool.EncryptionKeyGUID | <code>string</code> | Encryption key GUID. |
| pool.Name | <code>string</code> | Name of the storage pool. |
| pool.Provider | <code>string</code> | Provider of the storage pool (default is 'Disk'). |
| pool.WriteMode | <code>string</code> | Object key write mode. |
| pool.UseSsl | <code>boolean</code> | Enable or disable SSL. |
| pool.Endpoint | <code>string</code> | Endpoint URL for the storage pool provider. |
| pool.AccessKey | <code>string</code> | Access key. |
| pool.SecretKey | <code>string</code> | Secret key. |
| pool.AwsRegion | <code>string</code> | AWS region. |
| pool.AwsBucket | <code>string</code> | AWS bucket. |
| pool.AwsBaseDomain | <code>string</code> | Base URL for AWS S3 compatible storage platforms. |
| pool.AwsBaseUrl | <code>string</code> | Base URL to use for objects. |
| pool.DiskDirectory | <code>string</code> | Disk directory. |
| pool.AzureAccount | <code>string</code> | Azure account. |
| pool.AzureContainer | <code>string</code> | Azure container. |
| pool.Compress | <code>string</code> | Compression type. |
| pool.EnableReadCaching | <code>boolean</code> | Flag to enable or disable read caching. |
| pool.CreatedUtc | <code>Date</code> | Creation timestamp in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+deleteStoragePool"></a>

### base/ViewStorageSdk.deleteStoragePool ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a pool by its GUID.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving to void if successful.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the pool to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveBuckets"></a>

### base/ViewStorageSdk.retrieveBuckets ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
Retrieve List of Buckets.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Bucket object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveBucketObjects"></a>

### base/ViewStorageSdk.retrieveBucketObjects ⇒ <code>Promise.&lt;(Array.&lt;BucketMetadata&gt;\|null\|ApiErrorResponse)&gt;</code>
Enumerate all buckets in the tenant.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;BucketMetadata&gt;\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of BucketMetadata objects or null.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveBucketMetadata"></a>

### base/ViewStorageSdk.retrieveBucketMetadata ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
Retrieve bucket by Guid.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Bucket object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+createBucket"></a>

### base/ViewStorageSdk.createBucket ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
Write Bucket data.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Bucket object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the node is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| metadata | <code>Object</code> | Information about the bucket metadata. |
| metadata.PoolGUID | <code>string</code> | Pool GUID (automatically generated if not provided). |
| metadata.Name | <code>string</code> | Name of the bucket. |
| metadata.RegionString | <code>string</code> | Region string (default is 'us-west-1'). |
| metadata.Versioning | <code>boolean</code> | Enable or disable versioning (default is true). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+updateBucket"></a>

### base/ViewStorageSdk.updateBucket ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
Update Bucket data.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Bucket object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the node is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| metadata | <code>Object</code> | Information about the bucket metadata. |
| metadata.GUID | <code>string</code> | Bucket GUID (automatically generated if not provided). |
| metadata.TenantGUID | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| metadata.PoolGUID | <code>string</code> | Pool GUID (automatically generated if not provided). |
| metadata.OwnerGUID | <code>string</code> | Owner GUID (automatically generated if not provided). |
| metadata.Name | <code>string</code> | Name of the bucket. |
| metadata.RegionString | <code>string</code> | Region string (default is 'us-west-1'). |
| metadata.Versioning | <code>boolean</code> | Enable or disable versioning (default is true). |
| metadata.RetentionMinutes | <code>number</code> \| <code>null</code> | Retention in minutes (optional). |
| metadata.LastAccessUtc | <code>Date</code> | Last access timestamp in UTC. |
| metadata.CreatedUtc | <code>Date</code> | Created timestamp in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+deleteBucket"></a>

### base/ViewStorageSdk.deleteBucket ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
Delete a bucket.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves when the bucket is deleted.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveBucketTags"></a>

### base/ViewStorageSdk.retrieveBucketTags ⇒ <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code>
Retrieve tag by bucketGuid.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the TagMetadata object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID of the bucket. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+deleteBucketTags"></a>

### base/ViewStorageSdk.deleteBucketTags ⇒ <code>Promise.&lt;void&gt;</code>
Delete tag by bucketGuid.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the bucket is deleted.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID of the bucket to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+createBucketTags"></a>

### base/ViewStorageSdk.createBucketTags ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
Write Tag .

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created ObjectMetadata object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the ObjectMetadata is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket. |
| tagMetaData | <code>Object</code> | Information about the tag . |
| tagMetaData.Key | <code>string</code> | Key associated with the metadata. |
| tagMetaData.Value | <code>string</code> | Value associated with the metadata. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveBucketACL"></a>

### base/ViewStorageSdk.retrieveBucketACL ⇒ <code>Promise.&lt;(AclMetaData\|null\|ApiErrorResponse)&gt;</code>
Retrieve tag by bucketGuid.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(AclMetaData\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the TagMetadata object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID of the bucket. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+deleteBucketACL"></a>

### base/ViewStorageSdk.deleteBucketACL ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
Delete acl by bucketGuid.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves when the bucket is deleted.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID of the bucket to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+createBucketACL"></a>

### base/ViewStorageSdk.createBucketACL ⇒ <code>Promise.&lt;(AclEntry\|null\|ApiErrorResponse)&gt;</code>
Write Acl for bucket.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(AclEntry\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created ObjectMetadata object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the ObjectMetadata is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket. |
| aclMetaData | <code>Object</code> | Information about the acl . |
| aclMetaData.Owner | <code>Object</code> | Key associated with the metadata. |
| aclMetaData.Users | <code>Array</code> | List of users, each using UserMaster class. |
| aclMetaData.Entries | <code>Array</code> | List of access control entries. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+existsObject"></a>

### base/ViewStorageSdk.existsObject ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
Check if a Object exists by its GUID.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Node object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the node to retrieve. |
| objectValue | <code>string</code> | The GUID of the node to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveObjects"></a>

### base/ViewStorageSdk.retrieveObjects ⇒ <code>Promise.&lt;(String\|null\|ApiErrorResponse)&gt;</code>
Retrieve Objects.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(String\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the data retrieved or null if the object is not found.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGuid | <code>string</code> | The GUID of the bucket. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+writeObject"></a>

### base/ViewStorageSdk.writeObject ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
Write Object non-chuncked .

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Node object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the ObjectMetadata is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket. |
| key | <code>string</code> | The key of the object. |
| ObjectMetadata | <code>Object</code> | Information about the Object . |
| data | <code>string</code> | Information about the Object . |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+writeObjectExpiration"></a>

### base/ViewStorageSdk.writeObjectExpiration ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
Write expiration .

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created ObjectMetadata object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the node is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket. |
| key | <code>string</code> | The key of the object. |
| object | <code>Object</code> | Information about the Object . |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| object.ExpirationUtc | <code>string</code> | The expiration timestamp in UTC. |

<a name="module_base/ViewStorageSdk+retrieveObjectData"></a>

### base/ViewStorageSdk.retrieveObjectData ⇒ <code>Promise.&lt;(String\|null\|ApiErrorResponse)&gt;</code>
Retrieve data by key.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(String\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the data retrieved or null if the object is not found.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGuid | <code>string</code> | The GUID of the bucket. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveObjectDataInRange"></a>

### base/ViewStorageSdk.retrieveObjectDataInRange ⇒ <code>Promise.&lt;(string\|null\|ApiErrorResponse)&gt;</code>
Retrieve object Range.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(string\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the UserMaster object or null if not found.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGuid | <code>string</code> | The GUID of the bucket. |
| key | <code>string</code> | The key of the object. |
| range | <code>string</code> | The range of the object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveObjectMetadata"></a>

### base/ViewStorageSdk.retrieveObjectMetadata ⇒ <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code>
Retrieve object by metadata.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(ObjectMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the UserMaster object or null if not found.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGuid | <code>string</code> | The GUID of the bucket. |
| key | <code>string</code> | The key of the object. |
| objectMetadata | <code>object</code> | The metadata of the object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+deleteObject"></a>

### base/ViewStorageSdk.deleteObject ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a Object by its key.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving when the user is deleted.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGuid | <code>string</code> | The GUID of the bucket. |
| key | <code>string</code> | The key of the object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+createObjectTags"></a>

### base/ViewStorageSdk.createObjectTags ⇒ <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code>
Write Tag .

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created TagMetaData object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the node is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket. |
| tagMetaData | <code>Array.&lt;{Key: string, Value: string}&gt;</code> | Information about the tag . |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+deleteObjectTags"></a>

### base/ViewStorageSdk.deleteObjectTags ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete tags from an object.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving when the tags are deleted.  
**Throws**:

- <code>Error</code> If the bucketGUID or key is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket. |
| key | <code>string</code> | The key of the object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveObjectTags"></a>

### base/ViewStorageSdk.retrieveObjectTags ⇒ <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code>
Retrieve a tag by its key.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the TagMetaData object or null if not found.  
**Throws**:

- <code>Error</code> If the bucketGUID or key is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket. |
| key | <code>string</code> | The key of the tag to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveObjectACL"></a>

### base/ViewStorageSdk.retrieveObjectACL ⇒ <code>Promise.&lt;(AclMetaData\|null\|ApiErrorResponse)&gt;</code>
Retrieve tag by bucketGuid.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(AclMetaData\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the TagMetadata object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketguid | <code>string</code> | GUID of the bucket. |
| key | <code>string</code> | Key of the object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+deleteObjectACL"></a>

### base/ViewStorageSdk.deleteObjectACL ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
Delete acl by bucketGuid.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves when the bucket is deleted.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGuid | <code>string</code> | GUID of the bucket to delete. |
| key | <code>string</code> | Key of the object. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+createObjectACL"></a>

### base/ViewStorageSdk.createObjectACL ⇒ <code>Promise.&lt;(AclEntry\|null\|ApiErrorResponse)&gt;</code>
Write Acl for bucket.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(AclEntry\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created ObjectMetadata object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the ObjectMetadata is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGuid | <code>string</code> | The GUID of the bucket. |
| key | <code>string</code> | The key of the object. |
| aclMetaData | <code>Object</code> | Information about the acl . |
| aclMetaData.Owner | <code>Object</code> | Key associated with the metadata. |
| aclMetaData.Users | <code>Array</code> | List of users, each using UserMaster class. |
| aclMetaData.Entries | <code>Array</code> | List of access control entries. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+createMultipartUpload"></a>

### base/ViewStorageSdk.createMultipartUpload
Create a Multipart Upload.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  

| Param | Type | Description |
| --- | --- | --- |
| multipartUpload | <code>Object</code> | Information about the multipart upload. |
| multipartUpload.key | <code>string</code> | The key of the tag to retrieve. |

<a name="module_base/ViewStorageSdk+retrieveMultipartUploads"></a>

### base/ViewStorageSdk.retrieveMultipartUploads ⇒ <code>Promise.&lt;(MultipartUpload\|null\|ApiErrorResponse)&gt;</code>
Retrieve list of Multipart Upload by its GUID.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(MultipartUpload\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the MultipartUpload object or null if not found.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrieveMultipartUpload"></a>

### base/ViewStorageSdk.retrieveMultipartUpload ⇒ <code>Promise.&lt;(MultipartUpload\|null\|ApiErrorResponse)&gt;</code>
Retrieve a Multipart Upload by its GUID.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(MultipartUpload\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the MultipartUpload object or null if not found.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket to retrieve. |
| key | <code>string</code> | The key of the tag to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+retrievePartOfMultipartUpload"></a>

### base/ViewStorageSdk.retrievePartOfMultipartUpload ⇒ <code>Promise.&lt;(MultipartUpload\|null\|ApiErrorResponse)&gt;</code>
Retrieve a part of a Multipart Upload by its key and part number.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(MultipartUpload\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the MultipartUpload object or null if not found.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket to retrieve. |
| partNumber | <code>number</code> | The part number of the Multipart Upload to retrieve. |
| key | <code>string</code> | The key of the Multipart Upload to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+deletePartOfMultipartUpload"></a>

### base/ViewStorageSdk.deletePartOfMultipartUpload ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a part of a Multipart Upload by its key and part number.

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving when the user is deleted.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket to retrieve. |
| partNumber | <code>number</code> | The part number of the Multipart Upload to retrieve. |
| key | <code>string</code> | The key of the Multipart Upload to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+deleteMultipartUpload"></a>

### base/ViewStorageSdk.deleteMultipartUpload ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
Delete a Multipart Upload by its key .

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code> - A promise resolving when the user is deleted.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket to retrieve. |
| key | <code>string</code> | The key of the Multipart Upload to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+uploadPartOfMultipartUpload"></a>

### base/ViewStorageSdk.uploadPartOfMultipartUpload ⇒ <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code>
Upload Part .

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(TagMetaData\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created TagMetaData object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the node is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket. |
| tagMetaData | <code>Object</code> | Information about the tag . |
| partNumber | <code>Number</code> | Part number. |
| data | <code>string</code> | Information about the Object . |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewStorageSdk+completeMultipartUpload"></a>

### base/ViewStorageSdk.completeMultipartUpload ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
Complete a Multipart Upload by its key .

**Kind**: instance property of [<code>base/ViewStorageSdk</code>](#module_base/ViewStorageSdk)  
**Returns**: <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code> - A promise resolving when the user is deleted.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| bucketGUID | <code>string</code> | The GUID of the bucket to retrieve. |
| key | <code>string</code> | The key of the Multipart Upload to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk"></a>

## base/ViewVectorProxySdk
View Vector Proxy SDK.

**Version**: 0.1.0  

* [base/ViewVectorProxySdk](#module_base/ViewVectorProxySdk)
    * [module.exports](#exp_module_base/ViewVectorProxySdk--module.exports) ⏏
        * [new module.exports(tenantGuid, accessKey, endpoint)](#new_module_base/ViewVectorProxySdk--module.exports_new)
        * [.vectorSearch](#module_base/ViewVectorProxySdk--module.exports+vectorSearch) ⇒ <code>Promise.&lt;(Array.&lt;VectorSearch&gt;\|null)&gt;</code>
        * [.findEmbeddings](#module_base/ViewVectorProxySdk--module.exports+findEmbeddings) ⇒ <code>Promise.&lt;(EmbeddingResponse\|null)&gt;</code>
        * [.enumerateVectorRepositories](#module_base/ViewVectorProxySdk--module.exports+enumerateVectorRepositories) ⇒ <code>Array.&lt;Promise&gt;</code>
        * [.retrieveVectorRepositoryStatistics](#module_base/ViewVectorProxySdk--module.exports+retrieveVectorRepositoryStatistics) ⇒ <code>Promise.&lt;CollectionStatistics&gt;</code>
        * [.deleteVectorRepository](#module_base/ViewVectorProxySdk--module.exports+deleteVectorRepository) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.writeDocument](#module_base/ViewVectorProxySdk--module.exports+writeDocument) ⇒ <code>Promise.&lt;EmbeddingDocument&gt;</code>
        * [.readDocument](#module_base/ViewVectorProxySdk--module.exports+readDocument) ⇒ <code>Promise.&lt;EmbeddingDocument&gt;</code>
        * [.deleteDocument](#module_base/ViewVectorProxySdk--module.exports+deleteDocument) ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
        * [.documentExists](#module_base/ViewVectorProxySdk--module.exports+documentExists) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.retrieveSemanticCells](#module_base/ViewVectorProxySdk--module.exports+retrieveSemanticCells) ⇒ <code>Promise.&lt;Array.&lt;SemanticCell&gt;&gt;</code>
        * [.retrieveSemanticCell](#module_base/ViewVectorProxySdk--module.exports+retrieveSemanticCell) ⇒ <code>Promise.&lt;SemanticCell&gt;</code>
        * [.semanticCellExists](#module_base/ViewVectorProxySdk--module.exports+semanticCellExists) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.retrieveSemanticChunks](#module_base/ViewVectorProxySdk--module.exports+retrieveSemanticChunks) ⇒ <code>Promise.&lt;Array.&lt;SemanticChunk&gt;&gt;</code>
        * [.retrieveSemanticChunk](#module_base/ViewVectorProxySdk--module.exports+retrieveSemanticChunk) ⇒ <code>Promise.&lt;SemanticChunk&gt;</code>
        * [.semanticChunkExists](#module_base/ViewVectorProxySdk--module.exports+semanticChunkExists) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="exp_module_base/ViewVectorProxySdk--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_base/ViewVectorProxySdk--module.exports_new"></a>

#### new module.exports(tenantGuid, accessKey, endpoint)
Constructs a new ViewVectorProxySdk.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tenantGuid | <code>string</code> |  | Tenant GUID. |
| accessKey | <code>string</code> |  | Access key. |
| endpoint | <code>string</code> | <code>&quot;http://localhost:8311/&quot;</code> | Endpoint URL (default is "http://localhost:8311/"). |

<a name="module_base/ViewVectorProxySdk--module.exports+vectorSearch"></a>

#### module.exports.vectorSearch ⇒ <code>Promise.&lt;(Array.&lt;VectorSearch&gt;\|null)&gt;</code>
search.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;(Array.&lt;VectorSearch&gt;\|null)&gt;</code> - A promise resolving to a list of VectorSearchs or null.  
**Throws**:

- <code>Error</code> If the search request is null.


| Param | Type | Description |
| --- | --- | --- |
| vectorRepositoryGUID | <code>string</code> | Vector repository's unique identifier. |
| searchReq | <code>VectorSearchRequest</code> | Search request parameters. |
| searchReq.SearchType | <code>VectorSearchTypeEnum</code> | Search type (default: InnerProduct). |
| searchReq.MaxResults | <code>number</code> | Maximum number of results. |
| searchReq.Embeddings | <code>Array.&lt;number&gt;</code> | Vector embeddings to search against. |
| [cancelToken] | <code>Object</code> | Optional cancellation token with an `abort` method. |

<a name="module_base/ViewVectorProxySdk--module.exports+findEmbeddings"></a>

#### module.exports.findEmbeddings ⇒ <code>Promise.&lt;(EmbeddingResponse\|null)&gt;</code>
Find embeddings.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;(EmbeddingResponse\|null)&gt;</code> - A promise resolving to the EmbeddingResponse object or null.  
**Throws**:

- <code>Error</code> If the search request is null.


| Param | Type | Description |
| --- | --- | --- |
| vector_repository_guid | <code>string</code> | Vector repository's unique identifier. |
| searchReq | <code>VectorSearchRequest</code> | Search request parameters. |
| searchReq.Criteria | <code>Array.&lt;Object&gt;</code> | Search criteria. |
| [cancelToken] | <code>Object</code> | Optional cancellation token with an `abort` method. |

<a name="module_base/ViewVectorProxySdk--module.exports+enumerateVectorRepositories"></a>

#### module.exports.enumerateVectorRepositories ⇒ <code>Array.&lt;Promise&gt;</code>
Enumerate all repositories.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Array.&lt;Promise&gt;</code> - A promise resolving to a list of VectorRepository objects.  

| Param | Type | Description |
| --- | --- | --- |
| enumerationQuery | <code>Object</code> | Enumeration query parameters. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| enumerationQuery.maxResults | <code>number</code> | Maximum number of results to retrieve. |
| enumerationQuery.continuationToken | <code>string</code> | Token for continuation in results |
| enumerationQuery.tenantGuid | <code>string</code> | GUID for the tenant. |
| enumerationQuery.bucketGuid | <code>string</code> | GUID for the bucket. |
| enumerationQuery.collectionGuid | <code>string</code> | GUID for the collection. |
| enumerationQuery.VectorRepositoryGUID | <code>string</code> | GUID for the vector repository. |
| enumerationQuery.ordering | <code>EnumerationOrderEnum</code> | Ordering for the enumeration results. |
| enumerationQuery.includeData | <code>boolean</code> | Flag to include subordinate data. |

<a name="module_base/ViewVectorProxySdk--module.exports+retrieveVectorRepositoryStatistics"></a>

#### module.exports.retrieveVectorRepositoryStatistics ⇒ <code>Promise.&lt;CollectionStatistics&gt;</code>
Repository statistics.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;CollectionStatistics&gt;</code> - A promise resolving to the CollectionStatistics object.  
**Throws**:

- <code>Error</code> If the vectorRepositoryGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| VectorRepositoryGUID | <code>string</code> | GUID for the vector repository. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+deleteVectorRepository"></a>

#### module.exports.deleteVectorRepository ⇒ <code>Promise.&lt;void&gt;</code>
Empty repository.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the repository is deleted.  
**Throws**:

- <code>Error</code> If the VectorRepositoryGUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| VectorRepositoryGUID | <code>string</code> | GUID for the vector repository. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+writeDocument"></a>

#### module.exports.writeDocument ⇒ <code>Promise.&lt;EmbeddingDocument&gt;</code>
Write a document.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;EmbeddingDocument&gt;</code> - A promise resolving to the EmbeddingDocument object.  
**Throws**:

- <code>Error</code> If the document is null.


| Param | Type | Description |
| --- | --- | --- |
| doc | <code>EmbeddingDocument</code> | Document to write. |
| doc.TenantGuid | <code>string</code> | GUID for the  tenant. |
| doc.BucketGuid | <code>string</code> | GUID for the bucket. |
| doc.CollectionGuid | <code>string</code> | GUID for the collection. |
| doc.VectorRepositoryGUID | <code>string</code> | GUID for the vector repository. |
| doc.ObjectGuid | <code>string</code> | GUID for the object. |
| doc.SourceDocumentGuid | <code>string</code> | GUID for the source document. |
| doc.ObjectKey | <code>string</code> | Object key. |
| doc.ObjectVersion | <code>string</code> | Object version. |
| options.semanticCells | <code>Array.&lt;SemanticCell&gt;</code> | List of semantic cells. |
| options.createdUtc | <code>Date</code> | Date and time the document was created (default: current time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+readDocument"></a>

#### module.exports.readDocument ⇒ <code>Promise.&lt;EmbeddingDocument&gt;</code>
Read a document.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;EmbeddingDocument&gt;</code> - A promise resolving to the EmbeddingDocument object.  
**Throws**:

- <code>Error</code> If the documentGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| VectorRepositoryGUID | <code>string</code> | GUID for the vector repository. |
| documentGuid | <code>string</code> | GUID for the Document. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+deleteDocument"></a>

#### module.exports.deleteDocument ⇒ <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code>
Delete a document.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;(Boolean\|ApiErrorResponse)&gt;</code> - A promise that resolves when the document is deleted.  
**Throws**:

- <code>Error</code> If the documentGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| vectorRepositoryGuid | <code>string</code> | GUID for the vector repository. |
| documentGuid | <code>string</code> | GUID for the document. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+documentExists"></a>

#### module.exports.documentExists ⇒ <code>Promise.&lt;void&gt;</code>
Document exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise resolving to a void indicating whether the document exists.  
**Throws**:

- <code>Error</code> If the documentGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| vectorRepositoryGuid | <code>string</code> | GUID for the vector repository. |
| documentGuid | <code>string</code> | GUID for the document. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+retrieveSemanticCells"></a>

#### module.exports.retrieveSemanticCells ⇒ <code>Promise.&lt;Array.&lt;SemanticCell&gt;&gt;</code>
Get semantic cells.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;SemanticCell&gt;&gt;</code> - A promise resolving to the SemanticCell array.  
**Throws**:

- <code>Error</code> If the documentGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| vectorRepositoryGuid | <code>string</code> | GUID for the vector repository. |
| documentGuid | <code>string</code> | GUID for the document. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+retrieveSemanticCell"></a>

#### module.exports.retrieveSemanticCell ⇒ <code>Promise.&lt;SemanticCell&gt;</code>
Get a semantic cell.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;SemanticCell&gt;</code> - A promise resolving to the SemanticCell.  

| Param | Type | Description |
| --- | --- | --- |
| vectorRepositoryGuid | <code>string</code> | GUID for the vector repository. |
| documentGuid | <code>string</code> | GUID for the document. |
| semanticCellGuid | <code>string</code> | GUID for the semantic cell. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+semanticCellExists"></a>

#### module.exports.semanticCellExists ⇒ <code>Promise.&lt;void&gt;</code>
Semantic cell exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise resolving to a void indicating whether the semantic cell exists.  
**Throws**:

- <code>Error</code> If the semanticCellGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| vectorRepositoryGuid | <code>string</code> | GUID for the vector repository. |
| documentGuid | <code>string</code> | GUID for the document. |
| semanticCellGuid | <code>string</code> | GUID for the semantic cell. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+retrieveSemanticChunks"></a>

#### module.exports.retrieveSemanticChunks ⇒ <code>Promise.&lt;Array.&lt;SemanticChunk&gt;&gt;</code>
Get semantic chunks.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;Array.&lt;SemanticChunk&gt;&gt;</code> - A promise resolving to the SemanticChunk array.  

| Param | Type | Description |
| --- | --- | --- |
| vectorRepositoryGuid | <code>string</code> | GUID for the vector repository. |
| documentGuid | <code>string</code> | GUID for the document. |
| semanticCellGuid | <code>string</code> | GUID for the semantic cell. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+retrieveSemanticChunk"></a>

#### module.exports.retrieveSemanticChunk ⇒ <code>Promise.&lt;SemanticChunk&gt;</code>
Get a semantic chunk.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;SemanticChunk&gt;</code> - A promise resolving to the SemanticChunk.  

| Param | Type | Description |
| --- | --- | --- |
| vectorRepositoryGuid | <code>string</code> | GUID for the vector repository. |
| documentGuid | <code>string</code> | GUID for the document. |
| semanticCellGuid | <code>string</code> | GUID for the semantic cell. |
| semanticChunkGuid | <code>string</code> | GUID for the semantic chunk. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewVectorProxySdk--module.exports+semanticChunkExists"></a>

#### module.exports.semanticChunkExists ⇒ <code>Promise.&lt;void&gt;</code>
Semantic chunk exists.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewVectorProxySdk--module.exports)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise resolving to a void indicating whether the semantic chunk exists.  
**Throws**:

- <code>Error</code> If the semanticChunkGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| vectorRepositoryGuid | <code>string</code> | GUID for the vector repository. |
| documentGuid | <code>string</code> | GUID for the document. |
| semanticCellGuid | <code>string</code> | GUID for the semantic cell. |
| semanticChunkGuid | <code>string</code> | GUID for the semantic chunk. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk"></a>

## base/ViewConfigurationSdk
Configuration service.

**Version**: 0.1.0  

* [base/ViewConfigurationSdk](#module_base/ViewConfigurationSdk)
    * [.retrieveNode](#module_base/ViewConfigurationSdk+retrieveNode) ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveNodes](#module_base/ViewConfigurationSdk+retrieveNodes) ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
    * [.createNode](#module_base/ViewConfigurationSdk+createNode) ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
    * [.updateNode](#module_base/ViewConfigurationSdk+updateNode) ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteNode](#module_base/ViewConfigurationSdk+deleteNode) ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
    * [.existsNode](#module_base/ViewConfigurationSdk+existsNode) ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
    * [.enumerateNodes](#module_base/ViewConfigurationSdk+enumerateNodes) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveTenant](#module_base/ViewConfigurationSdk+retrieveTenant) ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveTenants](#module_base/ViewConfigurationSdk+retrieveTenants) ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteTenant](#module_base/ViewConfigurationSdk+deleteTenant) ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.existsTenant](#module_base/ViewConfigurationSdk+existsTenant) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.writeTenant](#module_base/ViewConfigurationSdk+writeTenant) ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.updateTenant](#module_base/ViewConfigurationSdk+updateTenant) ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.enumerateTenants](#module_base/ViewConfigurationSdk+enumerateTenants) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveCredential](#module_base/ViewConfigurationSdk+retrieveCredential) ⇒ <code>Promise.&lt;(Credential\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveCredentials](#module_base/ViewConfigurationSdk+retrieveCredentials) ⇒ <code>Promise.&lt;(Array.&lt;Credential&gt;\|null\|ApiErrorResponse)&gt;</code>
    * [.createCredential](#module_base/ViewConfigurationSdk+createCredential) ⇒ <code>Promise.&lt;(Credential\|null\|ApiErrorResponse)&gt;</code>
    * [.updateCredential](#module_base/ViewConfigurationSdk+updateCredential) ⇒ <code>Promise.&lt;(Credential\|null\|ApiErrorResponse)&gt;</code>
    * [.existsCredential](#module_base/ViewConfigurationSdk+existsCredential) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.deleteCredential](#module_base/ViewConfigurationSdk+deleteCredential) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.enumerateCredentials](#module_base/ViewConfigurationSdk+enumerateCredentials) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.createUser](#module_base/ViewConfigurationSdk+createUser) ⇒ <code>Promise.&lt;(UserMaster\|null\|ApiErrorResponse)&gt;</code>
    * [.existsUser](#module_base/ViewConfigurationSdk+existsUser) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveUser](#module_base/ViewConfigurationSdk+retrieveUser) ⇒ <code>Promise.&lt;(UserMaster\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveUsers](#module_base/ViewConfigurationSdk+retrieveUsers) ⇒ <code>Promise.&lt;(Array.&lt;UserMaster&gt;\|null\|ApiErrorResponse)&gt;</code>
    * [.updateUser](#module_base/ViewConfigurationSdk+updateUser) ⇒ <code>Promise.&lt;(UserMaster\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteUser](#module_base/ViewConfigurationSdk+deleteUser) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.enumerateUsers](#module_base/ViewConfigurationSdk+enumerateUsers) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.createEncryptionKey](#module_base/ViewConfigurationSdk+createEncryptionKey) ⇒ <code>Promise.&lt;(EncryptionKey\|null\|ApiErrorResponse)&gt;</code>
    * [.existsEncryptionKey](#module_base/ViewConfigurationSdk+existsEncryptionKey) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.retrieveEncryptionKey](#module_base/ViewConfigurationSdk+retrieveEncryptionKey) ⇒ <code>Promise.&lt;(EncryptionKey\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveEncryptionKeys](#module_base/ViewConfigurationSdk+retrieveEncryptionKeys) ⇒ <code>Promise.&lt;(Array.&lt;EncryptionKey&gt;\|ApiErrorResponse)&gt;</code>
    * [.updateEncryptionKey](#module_base/ViewConfigurationSdk+updateEncryptionKey) ⇒ <code>Promise.&lt;(EncryptionKey\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteEncryptionKey](#module_base/ViewConfigurationSdk+deleteEncryptionKey) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.enumerateEncryptionKeys](#module_base/ViewConfigurationSdk+enumerateEncryptionKeys) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.enumerateVectorRepositories](#module_base/ViewConfigurationSdk+enumerateVectorRepositories) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.enumerateGraphRepositories](#module_base/ViewConfigurationSdk+enumerateGraphRepositories) ⇒ <code>Promise.&lt;(Trigger\|null\|ApiErrorResponse)&gt;</code>
    * [.createBucket](#module_base/ViewConfigurationSdk+createBucket) ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.existsBucket](#module_base/ViewConfigurationSdk+existsBucket) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveBucket](#module_base/ViewConfigurationSdk+retrieveBucket) ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveBuckets](#module_base/ViewConfigurationSdk+retrieveBuckets) ⇒ <code>Promise.&lt;(Array.&lt;BucketMetadata&gt;\|ApiErrorResponse)&gt;</code>
    * [.updateBucket](#module_base/ViewConfigurationSdk+updateBucket) ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteBucket](#module_base/ViewConfigurationSdk+deleteBucket) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.retrieveCollections](#module_base/ViewConfigurationSdk+retrieveCollections) ⇒ <code>Promise.&lt;(Array.&lt;Collection&gt;\|ApiErrorResponse)&gt;</code>
    * [.retrieveCollection](#module_base/ViewConfigurationSdk+retrieveCollection) ⇒ <code>Promise.&lt;(Collection\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveCollectionStatistics](#module_base/ViewConfigurationSdk+retrieveCollectionStatistics) ⇒ <code>Promise.&lt;(CollectionStatistics\|null\|ApiErrorResponse)&gt;</code>
    * [.createCollection](#module_base/ViewConfigurationSdk+createCollection) ⇒ <code>Promise.&lt;(Collection\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteCollection](#module_base/ViewConfigurationSdk+deleteCollection) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.enumerateCollections](#module_base/ViewConfigurationSdk+enumerateCollections) ⇒ <code>Promise.&lt;(Trigger\|null\|ApiErrorResponse)&gt;</code>
    * [.existsCollection](#module_base/ViewConfigurationSdk+existsCollection) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveObjectLocks](#module_base/ViewConfigurationSdk+retrieveObjectLocks) ⇒ <code>Promise.&lt;(Array.&lt;ObjectLock&gt;\|ApiErrorResponse)&gt;</code>
    * [.enumerateObjectLocks](#module_base/ViewConfigurationSdk+enumerateObjectLocks) ⇒ <code>Promise.&lt;(EnumerationResult\|ApiErrorResponse)&gt;</code>
    * [.deleteObjectLock](#module_base/ViewConfigurationSdk+deleteObjectLock) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.createMetadataRule](#module_base/ViewConfigurationSdk+createMetadataRule) ⇒ <code>Promise.&lt;(MetadataRule\|null\|ApiErrorResponse)&gt;</code>
    * [.existsMetadataRule](#module_base/ViewConfigurationSdk+existsMetadataRule) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveMetadataRule](#module_base/ViewConfigurationSdk+retrieveMetadataRule) ⇒ <code>Promise.&lt;(MetadataRule\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveMetadataRules](#module_base/ViewConfigurationSdk+retrieveMetadataRules) ⇒ <code>Promise.&lt;(Array.&lt;MetadataRule&gt;\|ApiErrorResponse)&gt;</code>
    * [.updateMetadataRule](#module_base/ViewConfigurationSdk+updateMetadataRule) ⇒ <code>Promise.&lt;(MetadataRule\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteMetadataRule](#module_base/ViewConfigurationSdk+deleteMetadataRule) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.enumerateMetadataRules](#module_base/ViewConfigurationSdk+enumerateMetadataRules) ⇒ <code>Promise.&lt;(Trigger\|null\|ApiErrorResponse)&gt;</code>
    * [.createEmbeddingsRule](#module_base/ViewConfigurationSdk+createEmbeddingsRule) ⇒ <code>Promise.&lt;(EmbeddingsRule\|null\|ApiErrorResponse)&gt;</code>
    * [.existsEmbeddingsRule](#module_base/ViewConfigurationSdk+existsEmbeddingsRule) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveEmbeddingsRule](#module_base/ViewConfigurationSdk+retrieveEmbeddingsRule) ⇒ <code>Promise.&lt;(EmbeddingsRule\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveEmbeddingsRules](#module_base/ViewConfigurationSdk+retrieveEmbeddingsRules) ⇒ <code>Promise.&lt;(Array.&lt;EmbeddingsRule&gt;\|ApiErrorResponse)&gt;</code>
    * [.updateEmbeddingsRule](#module_base/ViewConfigurationSdk+updateEmbeddingsRule) ⇒ <code>Promise.&lt;(EmbeddingsRule\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteEmbeddingsRule](#module_base/ViewConfigurationSdk+deleteEmbeddingsRule) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.enumerateEmbeddingsRules](#module_base/ViewConfigurationSdk+enumerateEmbeddingsRules) ⇒ <code>Promise.&lt;(EmbeddingsResult\|null\|ApiErrorResponse)&gt;</code>
    * [.existsWebhookEvent](#module_base/ViewConfigurationSdk+existsWebhookEvent) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveWebhookEvent](#module_base/ViewConfigurationSdk+retrieveWebhookEvent) ⇒ <code>Promise.&lt;(WebhookEvent\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveWebhookEvents](#module_base/ViewConfigurationSdk+retrieveWebhookEvents) ⇒ <code>Promise.&lt;(Array.&lt;WebhookEvent&gt;\|ApiErrorResponse)&gt;</code>
    * [.enumerateWebhookEvents](#module_base/ViewConfigurationSdk+enumerateWebhookEvents) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.createWebhookRule](#module_base/ViewConfigurationSdk+createWebhookRule) ⇒ <code>Promise.&lt;(WebhookRule\|ApiErrorResponse)&gt;</code>
    * [.existsWebhookRule](#module_base/ViewConfigurationSdk+existsWebhookRule) ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
    * [.retrieveWebhookRule](#module_base/ViewConfigurationSdk+retrieveWebhookRule) ⇒ <code>Promise.&lt;(WebhookRule\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveWebhookRules](#module_base/ViewConfigurationSdk+retrieveWebhookRules) ⇒ <code>Promise.&lt;(Array.&lt;WebhookRule&gt;\|ApiErrorResponse)&gt;</code>
    * [.updateWebhookRule](#module_base/ViewConfigurationSdk+updateWebhookRule) ⇒ <code>Promise.&lt;(WebhookRule\|ApiErrorResponse)&gt;</code>
    * [.deleteWebhookRule](#module_base/ViewConfigurationSdk+deleteWebhookRule) ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
    * [.enumerateWebhookRules](#module_base/ViewConfigurationSdk+enumerateWebhookRules) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.enumerateWebhookTargets](#module_base/ViewConfigurationSdk+enumerateWebhookTargets) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.enumerateBlobs](#module_base/ViewConfigurationSdk+enumerateBlobs) ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveBlobs](#module_base/ViewConfigurationSdk+retrieveBlobs) ⇒ <code>Promise.&lt;(Array.&lt;Blob&gt;\|ApiErrorResponse)&gt;</code>
    * [.retrieveBlob](#module_base/ViewConfigurationSdk+retrieveBlob) ⇒ <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveBlobIncludeData](#module_base/ViewConfigurationSdk+retrieveBlobIncludeData) ⇒ <code>Promise.&lt;Blob&gt;</code>
    * [.writeBlob](#module_base/ViewConfigurationSdk+writeBlob) ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
    * [.updateBlob](#module_base/ViewConfigurationSdk+updateBlob) ⇒ <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code>
    * [.deleteBlob](#module_base/ViewConfigurationSdk+deleteBlob) ⇒ <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code>
    * [.existsBlob](#module_base/ViewConfigurationSdk+existsBlob) ⇒ <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code>
    * [.retrieveTenantsForEmail](#module_base/ViewConfigurationSdk+retrieveTenantsForEmail) ⇒ <code>Promise.&lt;(Array.&lt;TenantMetadata&gt;\|ApiErrorResponse)&gt;</code>
    * [.generateAuthenticationTokenByPassword](#module_base/ViewConfigurationSdk+generateAuthenticationTokenByPassword) ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
    * [.generateAuthenticationTokenBySHA256](#module_base/ViewConfigurationSdk+generateAuthenticationTokenBySHA256) ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
    * [.generateAdministratorToken](#module_base/ViewConfigurationSdk+generateAdministratorToken) ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
    * [.generateAdministratorTokenBySHA256](#module_base/ViewConfigurationSdk+generateAdministratorTokenBySHA256) ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
    * [.validateAuthenticationToken](#module_base/ViewConfigurationSdk+validateAuthenticationToken) ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
    * [.retrieveTokenDetails](#module_base/ViewConfigurationSdk+retrieveTokenDetails) ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
    * [.createVectorRepository(vector, [cancelToken])](#module_base/ViewConfigurationSdk+createVectorRepository) ⇒ <code>Promise.&lt;VectorRepository&gt;</code>
    * [.existsVectorRepository(guid, [cancelToken])](#module_base/ViewConfigurationSdk+existsVectorRepository) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.retrieveVectorRepository(guid, [cancelToken])](#module_base/ViewConfigurationSdk+retrieveVectorRepository) ⇒ <code>Promise.&lt;VectorRepository&gt;</code>
    * [.retrieveVectorRepositories([cancelToken])](#module_base/ViewConfigurationSdk+retrieveVectorRepositories) ⇒ <code>Promise.&lt;Array.&lt;VectorRepository&gt;&gt;</code>
    * [.updateVectorRepository(vector, [cancelToken])](#module_base/ViewConfigurationSdk+updateVectorRepository) ⇒ <code>Promise.&lt;VectorRepository&gt;</code>
    * [.deleteVectorRepository(guid, [cancelToken])](#module_base/ViewConfigurationSdk+deleteVectorRepository) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.createGraphRepository(graph, [cancelToken])](#module_base/ViewConfigurationSdk+createGraphRepository) ⇒ <code>Promise.&lt;GraphRepository&gt;</code>
    * [.existsGraphRepository(guid, [cancelToken])](#module_base/ViewConfigurationSdk+existsGraphRepository) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.retrieveGraphRepository(guid, [cancelToken])](#module_base/ViewConfigurationSdk+retrieveGraphRepository) ⇒ <code>Promise.&lt;GraphRepository&gt;</code>
    * [.retrieveGraphRepositories([cancelToken])](#module_base/ViewConfigurationSdk+retrieveGraphRepositories) ⇒ <code>Promise.&lt;Array.&lt;GraphRepository&gt;&gt;</code>
    * [.updateGraphRepository(graph, [cancelToken])](#module_base/ViewConfigurationSdk+updateGraphRepository) ⇒ <code>Promise.&lt;GraphRepository&gt;</code>
    * [.deleteGraphRepository(guid, [cancelToken])](#module_base/ViewConfigurationSdk+deleteGraphRepository) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.createWebhookTarget([target], [cancelToken])](#module_base/ViewConfigurationSdk+createWebhookTarget) ⇒ <code>Promise.&lt;WebhookTarget&gt;</code>
    * [.existsWebhookTarget(guid, [cancelToken])](#module_base/ViewConfigurationSdk+existsWebhookTarget) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.retrieveWebhookTarget(guid, [cancelToken])](#module_base/ViewConfigurationSdk+retrieveWebhookTarget) ⇒ <code>Promise.&lt;WebhookTarget&gt;</code>
    * [.retrieveWebhookTargets([cancelToken])](#module_base/ViewConfigurationSdk+retrieveWebhookTargets) ⇒ <code>Promise.&lt;Array.&lt;WebhookTarget&gt;&gt;</code>
    * [.updateWebhookTarget([target], [cancelToken])](#module_base/ViewConfigurationSdk+updateWebhookTarget) ⇒ <code>Promise.&lt;WebhookTarget&gt;</code>
    * [.deleteWebhookTarget(guid, [cancelToken])](#module_base/ViewConfigurationSdk+deleteWebhookTarget) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.createViewEndpoint([endpoint], [cancelToken])](#module_base/ViewConfigurationSdk+createViewEndpoint) ⇒ <code>Promise.&lt;ViewEndpoint&gt;</code>
    * [.existsViewEndpoint(guid, [cancelToken])](#module_base/ViewConfigurationSdk+existsViewEndpoint) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.retrieveViewEndpoint(guid, [cancelToken])](#module_base/ViewConfigurationSdk+retrieveViewEndpoint) ⇒ <code>Promise.&lt;ViewEndpoint&gt;</code>
    * [.retrieveViewEndpoints([cancelToken])](#module_base/ViewConfigurationSdk+retrieveViewEndpoints) ⇒ <code>Promise.&lt;Array.&lt;ViewEndpoint&gt;&gt;</code>
    * [.updateViewEndpoint([endpoint], [cancelToken])](#module_base/ViewConfigurationSdk+updateViewEndpoint) ⇒ <code>Promise.&lt;ViewEndpoint&gt;</code>
    * [.deleteViewEndpoint(guid, [cancelToken])](#module_base/ViewConfigurationSdk+deleteViewEndpoint) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="module_base/ViewConfigurationSdk+retrieveNode"></a>

### base/ViewConfigurationSdk.retrieveNode ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
Retrieve a Node by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Node object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the node to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveNodes"></a>

### base/ViewConfigurationSdk.retrieveNodes ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
Retrieve All Nodes.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Node object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createNode"></a>

### base/ViewConfigurationSdk.createNode ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
Create a Node.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Node object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the node is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Information about the credential. |
| node.id | <code>number</code> | Node ID. |
| node.GUID | <code>string</code> | Node GUID (automatically generated if not provided). |
| node.name | <code>string</code> | Name of the node. |
| node.hostname | <code>string</code> | Hostname of the node (default is 'localhost'). |
| node.InstanceType | <code>string</code> | Software instance type. |
| node.LastStartUtc | <code>Date</code> | Last start timestamp in UTC. |
| node.CreatedUtc | <code>Date</code> | Creation timestamp in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateNode"></a>

### base/ViewConfigurationSdk.updateNode ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
Update a Node.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Node object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the node is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Information about the credential. |
| node.id | <code>number</code> | Node ID. |
| node.GUID | <code>string</code> | Node GUID (automatically generated if not provided). |
| node.name | <code>string</code> | Name of the node. |
| node.hostname | <code>string</code> | Hostname of the node (default is 'localhost'). |
| node.InstanceType | <code>string</code> | Software instance type. |
| node.LastStartUtc | <code>Date</code> | Last start timestamp in UTC. |
| node.CreatedUtc | <code>Date</code> | Creation timestamp in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteNode"></a>

### base/ViewConfigurationSdk.deleteNode ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
Delete a Node.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Node object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the node to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsNode"></a>

### base/ViewConfigurationSdk.existsNode ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
Check if a Node exists by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Node object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the node to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateNodes"></a>

### base/ViewConfigurationSdk.enumerateNodes ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Nodes.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [maxKeys] | <code>number</code> | The maximum number of nodes to return. Default is 5. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveTenant"></a>

### base/ViewConfigurationSdk.retrieveTenant ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
Retrieve tenant metadata.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the TenantMetadata object or null if not found.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveTenants"></a>

### base/ViewConfigurationSdk.retrieveTenants ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
Retrieve all tenants.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the TenantMetadata object or null if not found.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteTenant"></a>

### base/ViewConfigurationSdk.deleteTenant ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
Delete tenant metadata.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the TenantMetadata object or null if not found.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the tenant to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsTenant"></a>

### base/ViewConfigurationSdk.existsTenant ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a tenant exists by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the tenant exists, false otherwise.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the tenant. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+writeTenant"></a>

### base/ViewConfigurationSdk.writeTenant ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
Write tenant metadata.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated TenantMetadata object or null.  
**Throws**:

- <code>Error</code> If the tenant object is null.


| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>Object</code> | Information about the tenants. |
| tenant.AccountGUID | <code>string</code> \| <code>null</code> | Account GUID (optional). |
| tenant.Name | <code>string</code> | Tenant's name (default is an empty string). |
| tenant.S3BaseDomain | <code>string</code> | S3 base domain for the tenant. |
| tenant.RestBaseDomain | <code>string</code> | REST base domain for the tenant. |
| tenant.DefaultPoolGUID | <code>string</code> | Default pool's unique identifier for the tenant. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateTenant"></a>

### base/ViewConfigurationSdk.updateTenant ⇒ <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code>
Update tenant metadata.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(TenantMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated TenantMetadata object or null.  
**Throws**:

- <code>Error</code> If the tenant object is null.


| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>Object</code> | Information about the tenants. |
| tenant.id | <code>number</code> | Tenant ID (defaults to 0, throws error if set to less than 1). |
| tenant.GUID | <code>string</code> | Tenant's unique identifier (automatically generated if not provided). |
| tenant.ParentGUID | <code>string</code> \| <code>null</code> | Parent tenant's GUID (optional). |
| tenant.Name | <code>string</code> | Tenant's name (default is an empty string). |
| tenant.Region | <code>string</code> | Region for the tenant (default: 'us-west-1'). |
| tenant.S3BaseDomain | <code>string</code> | S3 base domain for the tenant. |
| tenant.RestBaseDomain | <code>string</code> | REST base domain for the tenant. |
| tenant.DefaultPoolGUID | <code>string</code> | Default pool's unique identifier for the tenant. |
| tenant.Active | <code>boolean</code> | Whether the tenant is active (default: true). |
| tenant.CreatedUtc | <code>Date</code> | Creation timestamp in UTC (default: current time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateTenants"></a>

### base/ViewConfigurationSdk.enumerateTenants ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Tenants.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveCredential"></a>

### base/ViewConfigurationSdk.retrieveCredential ⇒ <code>Promise.&lt;(Credential\|null\|ApiErrorResponse)&gt;</code>
Retrieve a credential by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Credential\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Credential object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the credential to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveCredentials"></a>

### base/ViewConfigurationSdk.retrieveCredentials ⇒ <code>Promise.&lt;(Array.&lt;Credential&gt;\|null\|ApiErrorResponse)&gt;</code>
Retrieve all credentials.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;Credential&gt;\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the list of Credentials or null if not found.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createCredential"></a>

### base/ViewConfigurationSdk.createCredential ⇒ <code>Promise.&lt;(Credential\|null\|ApiErrorResponse)&gt;</code>
Create a credential.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Credential\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Credential object or null.  
**Throws**:

- <code>Error</code> If the credential is null.


| Param | Type | Description |
| --- | --- | --- |
| cred | <code>Object</code> | Information about the credential. |
| cred.GUID | <code>string</code> | Unique identifier for the credential (automatically generated if not provided). |
| cred.tenantGuid | <code>string</code> | Unique identifier for the tenant. |
| cred.UserGUID | <code>string</code> | Unique identifier for the user. |
| cred.AccessKey | <code>string</code> | Access key for the credential. |
| cred.SecretKey | <code>string</code> | Secret key for the credential. |
| cred.Active | <code>boolean</code> | Whether the credential is active. |
| cred.CreatedUtc | <code>Date</code> | The date and time when the credential was created in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateCredential"></a>

### base/ViewConfigurationSdk.updateCredential ⇒ <code>Promise.&lt;(Credential\|null\|ApiErrorResponse)&gt;</code>
Update a credential.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Credential\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated Credential object or null.  
**Throws**:

- <code>Error</code> If the credential is null.


| Param | Type | Description |
| --- | --- | --- |
| cred | <code>Object</code> | Information about the credential. |
| cred.GUID | <code>string</code> | Unique identifier for the credential (automatically generated if not provided). |
| cred.tenantGuid | <code>string</code> | Unique identifier for the tenant. |
| cred.UserGUID | <code>string</code> | Unique identifier for the user. |
| cred.AccessKey | <code>string</code> | Access key for the credential. |
| cred.SecretKey | <code>string</code> | Secret key for the credential. |
| cred.Active | <code>boolean</code> | Whether the credential is active. |
| cred.CreatedUtc | <code>Date</code> | The date and time when the credential was created in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsCredential"></a>

### base/ViewConfigurationSdk.existsCredential ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a credential exists by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the credential exists, false otherwise.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the credential. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteCredential"></a>

### base/ViewConfigurationSdk.deleteCredential ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a credential by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving when the credential is deleted.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the credential to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateCredentials"></a>

### base/ViewConfigurationSdk.enumerateCredentials ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Credentials.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createUser"></a>

### base/ViewConfigurationSdk.createUser ⇒ <code>Promise.&lt;(UserMaster\|null\|ApiErrorResponse)&gt;</code>
Create a user.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(UserMaster\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created UserMaster object or null.  
**Throws**:

- <code>Error</code> If the user object is null.


| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | Information about the credential. |
| user.tenantGuid | <code>string</code> | Tenant's unique identifier (automatically generated if not provided). |
| user.FirstName | <code>string</code> | User's first name. |
| user.LastName | <code>string</code> | User's last name. |
| user.Notes | <code>string</code> | Any additional notes for the user. |
| user.Email | <code>string</code> | User's email address. |
| user.PasswordSha256 | <code>string</code> | SHA-256 hashed password (not serialized). |
| user.Active | <code>boolean</code> | Whether the user is active (default: true). |
| user.CreatedUtc | <code>Date</code> | Date and time the user was created (in UTC, default: current time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsUser"></a>

### base/ViewConfigurationSdk.existsUser ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a user exists by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the user exists, false otherwise.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the user. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveUser"></a>

### base/ViewConfigurationSdk.retrieveUser ⇒ <code>Promise.&lt;(UserMaster\|null\|ApiErrorResponse)&gt;</code>
Retrieve a user by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(UserMaster\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the UserMaster object or null if not found.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the user to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveUsers"></a>

### base/ViewConfigurationSdk.retrieveUsers ⇒ <code>Promise.&lt;(Array.&lt;UserMaster&gt;\|null\|ApiErrorResponse)&gt;</code>
Retrieve all users.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;UserMaster&gt;\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the list of Users or null if not found.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateUser"></a>

### base/ViewConfigurationSdk.updateUser ⇒ <code>Promise.&lt;(UserMaster\|null\|ApiErrorResponse)&gt;</code>
Update a user.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(UserMaster\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated UserMaster object or null.  
**Throws**:

- <code>Error</code> If the user object is null.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the user to update. |
| user | <code>Object</code> | Information about the credential. |
| user.tenantGuid | <code>string</code> | Tenant's unique identifier (automatically generated if not provided). |
| user.FirstName | <code>string</code> | User's first name. |
| user.LastName | <code>string</code> | User's last name. |
| user.Notes | <code>string</code> | Any additional notes for the user. |
| user.Email | <code>string</code> | User's email address. |
| user.PasswordSha256 | <code>string</code> | SHA-256 hashed password (not serialized). |
| user.Active | <code>boolean</code> | Whether the user is active (default: true). |
| user.CreatedUtc | <code>Date</code> | Date and time the user was created (in UTC, default: current time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteUser"></a>

### base/ViewConfigurationSdk.deleteUser ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a user by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving when the user is deleted.  
**Throws**:

- <code>Error</code> If the GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the user to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateUsers"></a>

### base/ViewConfigurationSdk.enumerateUsers ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Users.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createEncryptionKey"></a>

### base/ViewConfigurationSdk.createEncryptionKey ⇒ <code>Promise.&lt;(EncryptionKey\|null\|ApiErrorResponse)&gt;</code>
Create an encryption key.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EncryptionKey\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created EncryptionKey object.  
**Throws**:

- <code>Error</code> If the key is null.


| Param | Type | Description |
| --- | --- | --- |
| key | <code>Object</code> | Information about the encryption key. |
| key.KeyBase64 | <code>string</code> | Encryption key in base64 format. |
| key.KeyHex | <code>string</code> | Encryption key in hexadecimal format. |
| key.IvBase64 | <code>string</code> | Initialization vector in base64 format. |
| key.IvHex | <code>string</code> | Initialization vector in hexadecimal form. |
| key.SaltBase64 | <code>string</code> | Salt in base64 form. |
| key.SaltHex | <code>string</code> | Salt in hexadecimal form. |
| key.Name | <code>string</code> | Name of the encryption key. |
| key.Description | <code>string</code> | Description of the encryption key. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsEncryptionKey"></a>

### base/ViewConfigurationSdk.existsEncryptionKey ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if an encryption key exists.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to true if the encryption key exists, false otherwise.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the encryption key to check. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveEncryptionKey"></a>

### base/ViewConfigurationSdk.retrieveEncryptionKey ⇒ <code>Promise.&lt;(EncryptionKey\|null\|ApiErrorResponse)&gt;</code>
Retrieve an encryption key by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EncryptionKey\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the EncryptionKey object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the encryption key to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveEncryptionKeys"></a>

### base/ViewConfigurationSdk.retrieveEncryptionKeys ⇒ <code>Promise.&lt;(Array.&lt;EncryptionKey&gt;\|ApiErrorResponse)&gt;</code>
Retrieve all encryption keys.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;EncryptionKey&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of EncryptionKey objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateEncryptionKey"></a>

### base/ViewConfigurationSdk.updateEncryptionKey ⇒ <code>Promise.&lt;(EncryptionKey\|null\|ApiErrorResponse)&gt;</code>
Update an encryption key.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EncryptionKey\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated EncryptionKey object.  
**Throws**:

- <code>Error</code> If the key is null.


| Param | Type | Description |
| --- | --- | --- |
| key | <code>Object</code> | Information about the encryption key. |
| key.GUID | <code>string</code> | GUID of the encryption key (automatically generated if not provided). |
| key.tenantGuid | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| key.OwnerGUID | <code>string</code> | Owner GUID (automatically generated if not provided). |
| key.KeyBase64 | <code>string</code> | Key in base64 form. |
| key.KeyHex | <code>string</code> | Key in hexadecimal form. |
| key.IvBase64 | <code>string</code> | Initialization vector in base64 form. |
| key.IvHex | <code>string</code> | Initialization vector in hexadecimal form. |
| key.SaltBase64 | <code>string</code> | Salt in base64 form. |
| key.SaltHex | <code>string</code> | Salt in hexadecimal form. |
| key.Name | <code>string</code> | Name of the encryption key. |
| key.Description | <code>string</code> | Description of the encryption key. |
| key.CreatedUtc | <code>Date</code> | Creation timestamp in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteEncryptionKey"></a>

### base/ViewConfigurationSdk.deleteEncryptionKey ⇒ <code>Promise.&lt;void&gt;</code>
Delete an encryption key by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the deletion is complete.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the encryption key to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateEncryptionKeys"></a>

### base/ViewConfigurationSdk.enumerateEncryptionKeys ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Encryption-Keys.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateVectorRepositories"></a>

### base/ViewConfigurationSdk.enumerateVectorRepositories ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Vector-Repositories.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateGraphRepositories"></a>

### base/ViewConfigurationSdk.enumerateGraphRepositories ⇒ <code>Promise.&lt;(Trigger\|null\|ApiErrorResponse)&gt;</code>
Enumerate Graph-Repositories.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Trigger\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createBucket"></a>

### base/ViewConfigurationSdk.createBucket ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
Create a bucket.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created BucketMetadata object or null.  
**Throws**:

- <code>Error</code> If the bucket is null.


| Param | Type | Description |
| --- | --- | --- |
| bucket | <code>Object</code> | Information about the bucket metadata. |
| bucket.id | <code>number</code> | Bucket ID. |
| bucket.GUID | <code>string</code> | Bucket GUID (automatically generated if not provided). |
| bucket.TenantGUID | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| bucket.PoolGUID | <code>string</code> | Pool GUID (automatically generated if not provided). |
| bucket.OwnerGUID | <code>string</code> | Owner GUID (automatically generated if not provided). |
| bucket.Category | <code>string</code> | Bucket category. |
| bucket.Name | <code>string</code> | Name of the bucket. |
| bucket.RegionString | <code>string</code> | Region string (default is 'us-west-1'). |
| bucket.Versioning | <code>boolean</code> | Enable or disable versioning (default is true). |
| bucket.RetentionMinutes | <code>number</code> \| <code>null</code> | Retention in minutes (optional). |
| bucket.MaxUploadSize | <code>number</code> \| <code>null</code> | Maximum upload size (optional). |
| bucket.MaxMultipartUploadSeconds | <code>number</code> | Maximum multipart upload seconds (default is seven days). |
| bucket.LastAccessUtc | <code>Date</code> | Last access timestamp in UTC. |
| bucket.CreatedUtc | <code>Date</code> | Created timestamp in UTC. |
| bucket.Owner | <code>UserMaster</code> \| <code>null</code> | Owner of the bucket (optional). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsBucket"></a>

### base/ViewConfigurationSdk.existsBucket ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a bucket exists.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the bucket exists, or false if not.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket to check. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveBucket"></a>

### base/ViewConfigurationSdk.retrieveBucket ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
Retrieve a bucket by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the BucketMetadata object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveBuckets"></a>

### base/ViewConfigurationSdk.retrieveBuckets ⇒ <code>Promise.&lt;(Array.&lt;BucketMetadata&gt;\|ApiErrorResponse)&gt;</code>
Retrieve all buckets.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;BucketMetadata&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of BucketMetadata objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateBucket"></a>

### base/ViewConfigurationSdk.updateBucket ⇒ <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code>
Update a bucket.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(BucketMetadata\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated BucketMetadata object or null.  
**Throws**:

- <code>Error</code> If the bucket is null.


| Param | Type | Description |
| --- | --- | --- |
| bucket | <code>Object</code> | Information about the bucket metadata. |
| bucket.id | <code>number</code> | Bucket ID. |
| bucket.GUID | <code>string</code> | Bucket GUID (automatically generated if not provided). |
| bucket.TenantGUID | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| bucket.PoolGUID | <code>string</code> | Pool GUID (automatically generated if not provided). |
| bucket.OwnerGUID | <code>string</code> | Owner GUID (automatically generated if not provided). |
| bucket.Category | <code>string</code> | Bucket category. |
| bucket.Name | <code>string</code> | Name of the bucket. |
| bucket.RegionString | <code>string</code> | Region string (default is 'us-west-1'). |
| bucket.Versioning | <code>boolean</code> | Enable or disable versioning (default is true). |
| bucket.RetentionMinutes | <code>number</code> \| <code>null</code> | Retention in minutes (optional). |
| bucket.MaxUploadSize | <code>number</code> \| <code>null</code> | Maximum upload size (optional). |
| bucket.MaxMultipartUploadSeconds | <code>number</code> | Maximum multipart upload seconds (default is seven days). |
| bucket.LastAccessUtc | <code>Date</code> | Last access timestamp in UTC. |
| bucket.CreatedUtc | <code>Date</code> | Created timestamp in UTC. |
| bucket.Owner | <code>UserMaster</code> \| <code>null</code> | Owner of the bucket (optional). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteBucket"></a>

### base/ViewConfigurationSdk.deleteBucket ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a bucket by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving to void if successful.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the bucket to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveCollections"></a>

### base/ViewConfigurationSdk.retrieveCollections ⇒ <code>Promise.&lt;(Array.&lt;Collection&gt;\|ApiErrorResponse)&gt;</code>
Retrieve all collections.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;Collection&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of Collection objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveCollection"></a>

### base/ViewConfigurationSdk.retrieveCollection ⇒ <code>Promise.&lt;(Collection\|null\|ApiErrorResponse)&gt;</code>
Retrieve a collection by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Collection\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Collection object or null if not found.  
**Throws**:

- <code>Error</code> If the collectionGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveCollectionStatistics"></a>

### base/ViewConfigurationSdk.retrieveCollectionStatistics ⇒ <code>Promise.&lt;(CollectionStatistics\|null\|ApiErrorResponse)&gt;</code>
Retrieve statistics for a collection by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(CollectionStatistics\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the CollectionStatistics object or null.  
**Throws**:

- <code>Error</code> If the collectionGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to retrieve statistics for. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createCollection"></a>

### base/ViewConfigurationSdk.createCollection ⇒ <code>Promise.&lt;(Collection\|null\|ApiErrorResponse)&gt;</code>
Create a new collection.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Collection\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Collection object or null.  
**Throws**:

- <code>Error</code> If the collection is null.


| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Object</code> | Information about the collection. |
| collection.TenantGUID | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| collection.Name | <code>string</code> | Name of the collection. |
| collection.AllowOverwrites | <code>boolean</code> | Indicates whether source documents can be overwritten (default is true). |
| collection.AdditionalData | <code>string</code> | Additional data (optional). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteCollection"></a>

### base/ViewConfigurationSdk.deleteCollection ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a collection by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving to void if successful.  
**Throws**:

- <code>Error</code> If the collectionGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateCollections"></a>

### base/ViewConfigurationSdk.enumerateCollections ⇒ <code>Promise.&lt;(Trigger\|null\|ApiErrorResponse)&gt;</code>
Enumerate Collections.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Trigger\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsCollection"></a>

### base/ViewConfigurationSdk.existsCollection ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a collection exists by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the collection exists, otherwise false.  
**Throws**:

- <code>Error</code> If the collectionGuid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| collectionGuid | <code>string</code> | The GUID of the collection to check. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveObjectLocks"></a>

### base/ViewConfigurationSdk.retrieveObjectLocks ⇒ <code>Promise.&lt;(Array.&lt;ObjectLock&gt;\|ApiErrorResponse)&gt;</code>
Retrieve all object locks.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;ObjectLock&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of ObjectLock objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateObjectLocks"></a>

### base/ViewConfigurationSdk.enumerateObjectLocks ⇒ <code>Promise.&lt;(EnumerationResult\|ApiErrorResponse)&gt;</code>
Enumerate object locks.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|ApiErrorResponse)&gt;</code> - A promise resolving to the enumeration result.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteObjectLock"></a>

### base/ViewConfigurationSdk.deleteObjectLock ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete an object lock by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving to void if the deletion is successful.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the object lock to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createMetadataRule"></a>

### base/ViewConfigurationSdk.createMetadataRule ⇒ <code>Promise.&lt;(MetadataRule\|null\|ApiErrorResponse)&gt;</code>
Create a new metadata rule.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(MetadataRule\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created MetadataRule object or null.  
**Throws**:

- <code>Error</code> If the rule is null.


| Param | Type | Description |
| --- | --- | --- |
| metadataRule | <code>Object</code> | Information about the metadata rule. |
| metadataRule.GUID | <code>string</code> | Metadata rule GUID (automatically generated if not provided). |
| metadataRule.TenantGUID | <code>string</code> | Tenant GUID (default is null). |
| metadataRule.BucketGUID | <code>string</code> | Bucket GUID (default is null). |
| metadataRule.OwnerGUID | <code>string</code> | Owner GUID (automatically generated if not provided). |
| metadataRule.Name | <code>string</code> | Name of the rule (default is null). |
| metadataRule.ContentType | <code>string</code> | Content type (default is "text/plain"). |
| metadataRule.Prefix | <code>string</code> | Prefix (default is null). |
| metadataRule.Suffix | <code>string</code> | Suffix (default is null). |
| metadataRule.ProcessingEndpoint | <code>string</code> | Processing endpoint (default is localhost). |
| metadataRule.CleanupEndpoint | <code>string</code> | Cleanup endpoint (default is localhost). |
| metadataRule.TypeDetectorEndpoint | <code>string</code> | Type detector endpoint (default is localhost). |
| metadataRule.SemanticCellEndpoint | <code>string</code> | Semantic cell endpoint (default is localhost). |
| metadataRule.MaxChunkContentLength | <code>number</code> | Maximum chunk content length (default is 512). |
| metadataRule.ShiftSize | <code>number</code> | Shift size (default is 512). |
| metadataRule.UdrEndpoint | <code>string</code> | UDR endpoint (default is localhost). |
| metadataRule.DataCatalogType | <code>string</code> | Data catalog type (default is DataCatalogTypeEnum.Lexi). |
| metadataRule.DataCatalogEndpoint | <code>string</code> | Data catalog endpoint (default is localhost). |
| metadataRule.DataCatalogCollection | <code>string</code> | Data catalog collection identifier (default is null). |
| metadataRule.GraphRepositoryGUID | <code>string</code> | Graph repository GUID (default is null). |
| metadataRule.TopTerms | <code>number</code> | Number of top terms to request (default is 25). |
| metadataRule.CaseInsensitive | <code>boolean</code> | Enable case insensitive processing (default is true). |
| metadataRule.IncludeFlattened | <code>boolean</code> | Enable inclusion of flattened representation (default is true). |
| metadataRule.TargetBucketGUID | <code>string</code> | Target bucket GUID (default is null). |
| metadataRule.MaxContentLength | <code>number</code> | Maximum content length (default is 16 * 1024 * 1024). |
| metadataRule.RetentionMinutes | <code>number</code> \| <code>null</code> | Minutes to retain generated document (default is null). |
| metadataRule.CreatedUtc | <code>Date</code> | Creation timestamp (default is current UTC time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsMetadataRule"></a>

### base/ViewConfigurationSdk.existsMetadataRule ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a metadata rule exists by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the metadata rule exists, otherwise false.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the metadata rule to check. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveMetadataRule"></a>

### base/ViewConfigurationSdk.retrieveMetadataRule ⇒ <code>Promise.&lt;(MetadataRule\|null\|ApiErrorResponse)&gt;</code>
Retrieve a metadata rule by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(MetadataRule\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the MetadataRule object or null.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the metadata rule to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveMetadataRules"></a>

### base/ViewConfigurationSdk.retrieveMetadataRules ⇒ <code>Promise.&lt;(Array.&lt;MetadataRule&gt;\|ApiErrorResponse)&gt;</code>
Retrieve all metadata rules.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;MetadataRule&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of MetadataRule objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateMetadataRule"></a>

### base/ViewConfigurationSdk.updateMetadataRule ⇒ <code>Promise.&lt;(MetadataRule\|null\|ApiErrorResponse)&gt;</code>
Update an existing metadata rule.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(MetadataRule\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated MetadataRule object or null.  
**Throws**:

- <code>Error</code> If the rule is null.


| Param | Type | Description |
| --- | --- | --- |
| metadataRule | <code>Object</code> | Information about the metadata rule. |
| metadataRule.GUID | <code>string</code> | Metadata rule GUID (automatically generated if not provided). |
| metadataRule.TenantGUID | <code>string</code> | Tenant GUID (default is null). |
| metadataRule.BucketGUID | <code>string</code> | Bucket GUID (default is null). |
| metadataRule.OwnerGUID | <code>string</code> | Owner GUID (automatically generated if not provided). |
| metadataRule.Name | <code>string</code> | Name of the rule (default is null). |
| metadataRule.ContentType | <code>string</code> | Content type (default is "text/plain"). |
| metadataRule.Prefix | <code>string</code> | Prefix (default is null). |
| metadataRule.Suffix | <code>string</code> | Suffix (default is null). |
| metadataRule.ProcessingEndpoint | <code>string</code> | Processing endpoint (default is localhost). |
| metadataRule.CleanupEndpoint | <code>string</code> | Cleanup endpoint (default is localhost). |
| metadataRule.TypeDetectorEndpoint | <code>string</code> | Type detector endpoint (default is localhost). |
| metadataRule.SemanticCellEndpoint | <code>string</code> | Semantic cell endpoint (default is localhost). |
| metadataRule.MaxChunkContentLength | <code>number</code> | Maximum chunk content length (default is 512). |
| metadataRule.ShiftSize | <code>number</code> | Shift size (default is 512). |
| metadataRule.UdrEndpoint | <code>string</code> | UDR endpoint (default is localhost). |
| metadataRule.DataCatalogType | <code>string</code> | Data catalog type (default is DataCatalogTypeEnum.Lexi). |
| metadataRule.DataCatalogEndpoint | <code>string</code> | Data catalog endpoint (default is localhost). |
| metadataRule.DataCatalogCollection | <code>string</code> | Data catalog collection identifier (default is null). |
| metadataRule.GraphRepositoryGUID | <code>string</code> | Graph repository GUID (default is null). |
| metadataRule.TopTerms | <code>number</code> | Number of top terms to request (default is 25). |
| metadataRule.CaseInsensitive | <code>boolean</code> | Enable case insensitive processing (default is true). |
| metadataRule.IncludeFlattened | <code>boolean</code> | Enable inclusion of flattened representation (default is true). |
| metadataRule.TargetBucketGUID | <code>string</code> | Target bucket GUID (default is null). |
| metadataRule.MaxContentLength | <code>number</code> | Maximum content length (default is 16 * 1024 * 1024). |
| metadataRule.RetentionMinutes | <code>number</code> \| <code>null</code> | Minutes to retain generated document (default is null). |
| metadataRule.CreatedUtc | <code>Date</code> | Creation timestamp (default is current UTC time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteMetadataRule"></a>

### base/ViewConfigurationSdk.deleteMetadataRule ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a metadata rule by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving to void if the deletion is successful.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the metadata rule to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateMetadataRules"></a>

### base/ViewConfigurationSdk.enumerateMetadataRules ⇒ <code>Promise.&lt;(Trigger\|null\|ApiErrorResponse)&gt;</code>
Enumerate Metadata Rules.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Trigger\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createEmbeddingsRule"></a>

### base/ViewConfigurationSdk.createEmbeddingsRule ⇒ <code>Promise.&lt;(EmbeddingsRule\|null\|ApiErrorResponse)&gt;</code>
Create a new embeddings rule.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EmbeddingsRule\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created EmbeddingsRule object or null.  
**Throws**:

- <code>Error</code> If the rule is null.


| Param | Type | Description |
| --- | --- | --- |
| embeddingsRule | <code>Object</code> | Information about the embeddings rule. |
| embeddingsRule.GUID | <code>string</code> | Embeddings rule GUID (automatically generated if not provided). |
| embeddingsRule.TenantGUID | <code>string</code> | Tenant GUID (default is null). |
| embeddingsRule.BucketGUID | <code>string</code> | Bucket GUID (default is null). |
| embeddingsRule.OwnerGUID | <code>string</code> | Owner GUID (automatically generated if not provided). |
| embeddingsRule.Name | <code>string</code> | Name of the rule (default is null). |
| embeddingsRule.ContentType | <code>string</code> | Content type (default is "text/plain"). |
| embeddingsRule.Prefix | <code>string</code> | Prefix (default is null). |
| embeddingsRule.Suffix | <code>string</code> | Suffix (default is null). |
| embeddingsRule.TargetBucketGUID | <code>string</code> | Target bucket GUID (default is null). |
| embeddingsRule.GraphRepositoryGUID | <code>string</code> | Graph repository GUID (default is null). |
| embeddingsRule.VectorRepositoryGUID | <code>string</code> | Vector repository GUID (default is null). |
| embeddingsRule.DataFlowEndpoint | <code>string</code> | Data flow endpoint (default is localhost). |
| embeddingsRule.EmbeddingsGenerator | <code>string</code> | Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy). |
| embeddingsRule.GeneratorUrl | <code>string</code> | Embeddings generator URL (default is localhost). |
| embeddingsRule.GeneratorApiKey | <code>string</code> | Embeddings provider API key (default is null). |
| embeddingsRule.BatchSize | <code>number</code> | Maximum number of chunks to process per request (default is 16). |
| embeddingsRule.MaxGeneratorTasks | <code>number</code> | Maximum number of parallel embeddings generation tasks (default is 16). |
| embeddingsRule.MaxRetries | <code>number</code> | Maximum number of retries per task (default is 3). |
| embeddingsRule.MaxFailures | <code>number</code> | Maximum number of failures before failing the operation (default is 3). |
| embeddingsRule.VectorStoreUrl | <code>string</code> | Vector store URL (default is localhost). |
| embeddingsRule.MaxContentLength | <code>number</code> | Maximum content length (default is 16 * 1024 * 1024). |
| embeddingsRule.RetentionMinutes | <code>number</code> \| <code>null</code> | Minutes to retain the generated document (default is null). |
| embeddingsRule.CreatedUtc | <code>Date</code> | Creation timestamp (default is current UTC time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsEmbeddingsRule"></a>

### base/ViewConfigurationSdk.existsEmbeddingsRule ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if an embeddings rule exists by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the embeddings rule exists, otherwise false.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the embeddings rule to check. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveEmbeddingsRule"></a>

### base/ViewConfigurationSdk.retrieveEmbeddingsRule ⇒ <code>Promise.&lt;(EmbeddingsRule\|null\|ApiErrorResponse)&gt;</code>
Retrieve an embeddings rule by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EmbeddingsRule\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the EmbeddingsRule object or null.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the embeddings rule to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveEmbeddingsRules"></a>

### base/ViewConfigurationSdk.retrieveEmbeddingsRules ⇒ <code>Promise.&lt;(Array.&lt;EmbeddingsRule&gt;\|ApiErrorResponse)&gt;</code>
Retrieve all embeddings rules.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;EmbeddingsRule&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of EmbeddingsRule objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateEmbeddingsRule"></a>

### base/ViewConfigurationSdk.updateEmbeddingsRule ⇒ <code>Promise.&lt;(EmbeddingsRule\|null\|ApiErrorResponse)&gt;</code>
Update an existing embeddings rule.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EmbeddingsRule\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated EmbeddingsRule object or null.  
**Throws**:

- <code>Error</code> If the rule is null.


| Param | Type | Description |
| --- | --- | --- |
| embeddingsRule | <code>Object</code> | Information about the embeddings rule. |
| embeddingsRule.GUID | <code>string</code> | Embeddings rule GUID (automatically generated if not provided). |
| embeddingsRule.TenantGUID | <code>string</code> | Tenant GUID (default is null). |
| embeddingsRule.BucketGUID | <code>string</code> | Bucket GUID (default is null). |
| embeddingsRule.OwnerGUID | <code>string</code> | Owner GUID (automatically generated if not provided). |
| embeddingsRule.Name | <code>string</code> | Name of the rule (default is null). |
| embeddingsRule.ContentType | <code>string</code> | Content type (default is "text/plain"). |
| embeddingsRule.Prefix | <code>string</code> | Prefix (default is null). |
| embeddingsRule.Suffix | <code>string</code> | Suffix (default is null). |
| embeddingsRule.TargetBucketGUID | <code>string</code> | Target bucket GUID (default is null). |
| embeddingsRule.GraphRepositoryGUID | <code>string</code> | Graph repository GUID (default is null). |
| embeddingsRule.VectorRepositoryGUID | <code>string</code> | Vector repository GUID (default is null). |
| embeddingsRule.DataFlowEndpoint | <code>string</code> | Data flow endpoint (default is localhost). |
| embeddingsRule.EmbeddingsGenerator | <code>string</code> | Embeddings generator (default is EmbeddingsGeneratorEnum.LCProxy). |
| embeddingsRule.GeneratorUrl | <code>string</code> | Embeddings generator URL (default is localhost). |
| embeddingsRule.GeneratorApiKey | <code>string</code> | Embeddings provider API key (default is null). |
| embeddingsRule.BatchSize | <code>number</code> | Maximum number of chunks to process per request (default is 16). |
| embeddingsRule.MaxGeneratorTasks | <code>number</code> | Maximum number of parallel embeddings generation tasks (default is 16). |
| embeddingsRule.MaxRetries | <code>number</code> | Maximum number of retries per task (default is 3). |
| embeddingsRule.MaxFailures | <code>number</code> | Maximum number of failures before failing the operation (default is 3). |
| embeddingsRule.VectorStoreUrl | <code>string</code> | Vector store URL (default is localhost). |
| embeddingsRule.MaxContentLength | <code>number</code> | Maximum content length (default is 16 * 1024 * 1024). |
| embeddingsRule.RetentionMinutes | <code>number</code> \| <code>null</code> | Minutes to retain the generated document (default is null). |
| embeddingsRule.CreatedUtc | <code>Date</code> | Creation timestamp (default is current UTC time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteEmbeddingsRule"></a>

### base/ViewConfigurationSdk.deleteEmbeddingsRule ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete an embeddings rule by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving to void if the deletion is successful.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the embeddings rule to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateEmbeddingsRules"></a>

### base/ViewConfigurationSdk.enumerateEmbeddingsRules ⇒ <code>Promise.&lt;(EmbeddingsResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Embeddings Rules.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EmbeddingsResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created EmbeddingsResult object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsWebhookEvent"></a>

### base/ViewConfigurationSdk.existsWebhookEvent ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a webhook event exists.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the webhook event exists.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the webhook event. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveWebhookEvent"></a>

### base/ViewConfigurationSdk.retrieveWebhookEvent ⇒ <code>Promise.&lt;(WebhookEvent\|null\|ApiErrorResponse)&gt;</code>
Retrieve a webhook event by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(WebhookEvent\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the WebhookEvent object or null.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the webhook event to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveWebhookEvents"></a>

### base/ViewConfigurationSdk.retrieveWebhookEvents ⇒ <code>Promise.&lt;(Array.&lt;WebhookEvent&gt;\|ApiErrorResponse)&gt;</code>
Retrieve a list of webhook events.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;WebhookEvent&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of WebhookEvent objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateWebhookEvents"></a>

### base/ViewConfigurationSdk.enumerateWebhookEvents ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Webhook events.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created EnumerationResult object or null if creation fails.  
**Throws**:

- <code>Error</code> If the EnumerationResult is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createWebhookRule"></a>

### base/ViewConfigurationSdk.createWebhookRule ⇒ <code>Promise.&lt;(WebhookRule\|ApiErrorResponse)&gt;</code>
Create a webhook rule.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(WebhookRule\|ApiErrorResponse)&gt;</code> - A promise resolving to the created WebhookRule.  
**Throws**:

- <code>Error</code> If the rule is null.


| Param | Type | Description |
| --- | --- | --- |
| [rule] | <code>Object</code> | Optional parameters. |
| [rule.GUID] | <code>string</code> | GUID (automatically generated if not provided). |
| [rule.TenantGUID] | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| [rule.TargetGUID] | <code>string</code> | Target GUID (automatically generated if not provided). |
| [rule.Name] | <code>string</code> | Name of the webhook rule. |
| [rule.EventType] | <code>WebhookEventTypeEnum</code> | Event type (defaults to WebhookEventTypeEnum.Unknown). |
| [rule.MaxAttempts] | <code>number</code> | Maximum number of attempts (defaults to 10). |
| [rule.RetryIntervalMs] | <code>number</code> | Retry interval in milliseconds (defaults to 30 seconds). |
| [rule.TimeoutMs] | <code>number</code> | Timeout in milliseconds (defaults to 1 minute). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsWebhookRule"></a>

### base/ViewConfigurationSdk.existsWebhookRule ⇒ <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code>
Check if a webhook rule exists.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(boolean\|ApiErrorResponse)&gt;</code> - A promise resolving to true if the webhook rule exists.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the webhook rule. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveWebhookRule"></a>

### base/ViewConfigurationSdk.retrieveWebhookRule ⇒ <code>Promise.&lt;(WebhookRule\|null\|ApiErrorResponse)&gt;</code>
Retrieve a webhook rule by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(WebhookRule\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the WebhookRule object or null.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the webhook rule to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveWebhookRules"></a>

### base/ViewConfigurationSdk.retrieveWebhookRules ⇒ <code>Promise.&lt;(Array.&lt;WebhookRule&gt;\|ApiErrorResponse)&gt;</code>
Retrieve a list of webhook rules.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;WebhookRule&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of WebhookRule objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateWebhookRule"></a>

### base/ViewConfigurationSdk.updateWebhookRule ⇒ <code>Promise.&lt;(WebhookRule\|ApiErrorResponse)&gt;</code>
Update a webhook rule.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(WebhookRule\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated WebhookRule.  
**Throws**:

- <code>Error</code> If the rule is null.


| Param | Type | Description |
| --- | --- | --- |
| [rule] | <code>Object</code> | Optional parameters. |
| [rule.GUID] | <code>string</code> | GUID (automatically generated if not provided). |
| [rule.TenantGUID] | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| [rule.TargetGUID] | <code>string</code> | Target GUID (automatically generated if not provided). |
| [rule.Name] | <code>string</code> | Name of the webhook rule. |
| [rule.EventType] | <code>WebhookEventTypeEnum</code> | Event type (defaults to WebhookEventTypeEnum.Unknown). |
| [rule.MaxAttempts] | <code>number</code> | Maximum number of attempts (defaults to 10). |
| [rule.RetryIntervalMs] | <code>number</code> | Retry interval in milliseconds (defaults to 30 seconds). |
| [rule.TimeoutMs] | <code>number</code> | Timeout in milliseconds (defaults to 1 minute). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteWebhookRule"></a>

### base/ViewConfigurationSdk.deleteWebhookRule ⇒ <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code>
Delete a webhook rule.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(void\|ApiErrorResponse)&gt;</code> - A promise resolving when the delete operation is complete.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the webhook rule to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateWebhookRules"></a>

### base/ViewConfigurationSdk.enumerateWebhookRules ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Webhook rules.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created EnumerationResult object or null if creation fails.  
**Throws**:

- <code>Error</code> If the EnumerationResult is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateWebhookTargets"></a>

### base/ViewConfigurationSdk.enumerateWebhookTargets ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate Webhook target.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created EnumerationResult object or null if creation fails.  
**Throws**:

- <code>Error</code> If the EnumerationResult is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+enumerateBlobs"></a>

### base/ViewConfigurationSdk.enumerateBlobs ⇒ <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code>
Enumerate BLOBs.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(EnumerationResult\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Trigger object or null if creation fails.  
**Throws**:

- <code>Error</code> If the trigger is null or invalid.


| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveBlobs"></a>

### base/ViewConfigurationSdk.retrieveBlobs ⇒ <code>Promise.&lt;(Array.&lt;Blob&gt;\|ApiErrorResponse)&gt;</code>
Retrieve a list of blobs.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;Blob&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of Blob objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveBlob"></a>

### base/ViewConfigurationSdk.retrieveBlob ⇒ <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code>
Retrieve a blob by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Blob object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the blob to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveBlobIncludeData"></a>

### base/ViewConfigurationSdk.retrieveBlobIncludeData ⇒ <code>Promise.&lt;Blob&gt;</code>
Retrieve a blob with data by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;Blob&gt;</code> - A promise resolving to the Blob object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the blob to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+writeBlob"></a>

### base/ViewConfigurationSdk.writeBlob ⇒ <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code>
Write BLOB data.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Node\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the created Node object or null if the creation fails.  
**Throws**:

- <code>Error</code> If the node is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| blob | <code>Object</code> | Information about the blob. |
| blob.ContentType | <code>string</code> | Content type of the BLOB. |
| blob.Name | <code>string</code> | Name of the BLOB. |
| blob.Description | <code>string</code> | Description of the BLOB. |
| blob.RefObjType | <code>string</code> | Object type to which this BLOB refers. |
| blob.RefObjGUID | <code>string</code> | Globally-unique identifier of the object to which this BLOB refers. |
| blob.Data | <code>Uint8Array</code> | BLOB data. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateBlob"></a>

### base/ViewConfigurationSdk.updateBlob ⇒ <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code>
Update a BLOB.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the updated Blob object or null if update fails.  
**Throws**:

- <code>Error</code> If the blob is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| blob | <code>Object</code> | Information about the blob to update. |
| blob.GUID | <code>string</code> | GUID of the BLOB to update. |
| [blob.ContentType] | <code>string</code> | Content type of the BLOB. |
| [blob.Name] | <code>string</code> | Name of the BLOB. |
| [blob.Description] | <code>string</code> | Description of the BLOB. |
| [blob.RefObjType] | <code>string</code> | Object type to which this BLOB refers. |
| [blob.RefObjGUID] | <code>string</code> | Globally-unique identifier of the object to which this BLOB refers. |
| [blob.Data] | <code>Uint8Array</code> | BLOB data. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteBlob"></a>

### base/ViewConfigurationSdk.deleteBlob ⇒ <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code>
Delete a BLOB.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Blob object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the BLOB to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsBlob"></a>

### base/ViewConfigurationSdk.existsBlob ⇒ <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code>
Check if a BLOB exists by its GUID.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Blob\|null\|ApiErrorResponse)&gt;</code> - A promise resolving to the Blob object or null if not found.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the BLOB to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveTenantsForEmail"></a>

### base/ViewConfigurationSdk.retrieveTenantsForEmail ⇒ <code>Promise.&lt;(Array.&lt;TenantMetadata&gt;\|ApiErrorResponse)&gt;</code>
Retrieve tenants for email.

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;(Array.&lt;TenantMetadata&gt;\|ApiErrorResponse)&gt;</code> - A promise resolving to an array of TenantMetadata objects or an error response if not found.  
**Throws**:

- <code>Error</code> If the email is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| hedars | <code>object</code> | Headers for custom authentication. |
| hedars.email | <code>object</code> | email to get tenants |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+generateAuthenticationTokenByPassword"></a>

### base/ViewConfigurationSdk.generateAuthenticationTokenByPassword ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
Generate authentication token (using password)

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code> - A promise resolving to an object containing token details or an error response if not found.  
**Throws**:

- <code>Error</code> If the email is null or empty or if the password is null or empty or if the tenantGUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object</code> | Headers for custom authentication. |
| headers.email | <code>string</code> | The email address used to authenticate the tenant. |
| headers.password | <code>string</code> | The password for the tenant's account. |
| headers.tenantGUID | <code>string</code> | The GUID of the tenant for which the token is being generated. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+generateAuthenticationTokenBySHA256"></a>

### base/ViewConfigurationSdk.generateAuthenticationTokenBySHA256 ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
Generate authentication token (using password SHA-256)

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code> - A promise resolving to an object containing token details or an error response if not found.  
**Throws**:

- <code>Error</code> If the email is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object</code> | Headers for custom authentication. |
| headers.email | <code>string</code> | The email address used to authenticate the tenant. |
| headers.passwordSHA256 | <code>string</code> | The passwordSHA256 for the tenant's account. |
| headers.tenantGUID | <code>string</code> | The GUID of the tenant for which the token is being generated. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+generateAdministratorToken"></a>

### base/ViewConfigurationSdk.generateAdministratorToken ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
Generate administrator token (using password)

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code> - A promise resolving to an object containing token details or an error response if not found.  
**Throws**:

- <code>Error</code> If the email is null or empty or if the password is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object</code> | Headers for custom authentication. |
| headers.email | <code>string</code> | The email address used to authenticate the administrator. |
| headers.password | <code>string</code> | The password for the administrator account. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+generateAdministratorTokenBySHA256"></a>

### base/ViewConfigurationSdk.generateAdministratorTokenBySHA256 ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
Generate administrator token (using password SHA-256)

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code> - A promise resolving to an object containing token details or an error response if not found.  
**Throws**:

- <code>Error</code> If the email is null or empty or if the passwordSHA256 is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object</code> | Headers for custom authentication. |
| headers.email | <code>string</code> | The admin email address used to authenticate the administrator. |
| headers.passwordSHA256 | <code>string</code> | The admin passwordSHA256 for the administrator account. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+validateAuthenticationToken"></a>

### base/ViewConfigurationSdk.validateAuthenticationToken ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
Validate authentication token

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code> - A promise resolving to an object containing token details or an error response if not found.  
**Throws**:

- <code>Error</code> If the token is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object</code> | Headers for custom authentication. |
| headers.token | <code>string</code> | The token to get validate the token. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveTokenDetails"></a>

### base/ViewConfigurationSdk.retrieveTokenDetails ⇒ <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code>
Retrieve token details

**Kind**: instance property of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;({TimestampUtc: string, ExpirationUtc: string, IsExpired: boolean, Token: string, Valid: boolean}\|ApiErrorResponse)&gt;</code> - A promise resolving to an object containing token details or an error response if not found.  
**Throws**:

- <code>Error</code> If the token is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object</code> | Headers for custom authentication. |
| headers.token | <code>string</code> | The token to get validate the token. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createVectorRepository"></a>

### base/ViewConfigurationSdk.createVectorRepository(vector, [cancelToken]) ⇒ <code>Promise.&lt;VectorRepository&gt;</code>
Create a vector repository.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;VectorRepository&gt;</code> - A promise resolving to the created VectorRepository object.  
**Throws**:

- <code>Error</code> If the repo is null.


| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Object</code> | Information about the vector repository. |
| vector.GUID | <code>string</code> | Repository GUID (automatically generated if not provided). |
| vector.TenantGUID | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| vector.name | <code>string</code> | Name of the repository (default is 'My vector repository'). |
| vector.repositoryType | <code>string</code> | Type of vector repository. |
| vector.endpointUrl | <code>string</code> | Endpoint URL for the repository. |
| vector.apiKey | <code>string</code> | API key for authentication. |
| vector.model | <code>string</code> | Embedding model to be used (default is 'all-MiniLM-L6-v2'). |
| vector.dimensionality | <code>number</code> | Dimensionality of embeddings. |
| vector.databaseHostname | <code>string</code> | Hostname of the database. |
| vector.databaseName | <code>string</code> | Name of the database. |
| vector.databaseTable | <code>string</code> | Table name in the database. |
| vector.databasePort | <code>number</code> | Database port. |
| vector.databaseUser | <code>string</code> | Database username. |
| vector.databasePassword | <code>string</code> | Database password. |
| vector.promptPrefix | <code>string</code> | Prefix to prepend to prompts. |
| vector.promptSuffix | <code>string</code> | Suffix to append to prompts. |
| vector.createdUtc | <code>Date</code> | Creation timestamp in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsVectorRepository"></a>

### base/ViewConfigurationSdk.existsVectorRepository(guid, [cancelToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a vector repository exists.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to true if the vector repository exists, false otherwise.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the vector repository to check. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveVectorRepository"></a>

### base/ViewConfigurationSdk.retrieveVectorRepository(guid, [cancelToken]) ⇒ <code>Promise.&lt;VectorRepository&gt;</code>
Retrieve a vector repository.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;VectorRepository&gt;</code> - A promise resolving to the VectorRepository object.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the vector repository to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveVectorRepositories"></a>

### base/ViewConfigurationSdk.retrieveVectorRepositories([cancelToken]) ⇒ <code>Promise.&lt;Array.&lt;VectorRepository&gt;&gt;</code>
Retrieve all vector repositories.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;Array.&lt;VectorRepository&gt;&gt;</code> - A promise resolving to a list of VectorRepository objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateVectorRepository"></a>

### base/ViewConfigurationSdk.updateVectorRepository(vector, [cancelToken]) ⇒ <code>Promise.&lt;VectorRepository&gt;</code>
Update a vector repository.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;VectorRepository&gt;</code> - A promise resolving to the updated VectorRepository object.  
**Throws**:

- <code>Error</code> If the vector is null.


| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Object</code> | Information about the vector repository. |
| vector.GUID | <code>string</code> | Repository GUID (automatically generated if not provided). |
| vector.TenantGUID | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| vector.name | <code>string</code> | Name of the repository (default is 'My vector repository'). |
| vector.repositoryType | <code>string</code> | Type of vector repository. |
| vector.endpointUrl | <code>string</code> | Endpoint URL for the repository. |
| vector.apiKey | <code>string</code> | API key for authentication. |
| vector.model | <code>string</code> | Embedding model to be used (default is 'all-MiniLM-L6-v2'). |
| vector.dimensionality | <code>number</code> | Dimensionality of embeddings. |
| vector.databaseHostname | <code>string</code> | Hostname of the database. |
| vector.databaseName | <code>string</code> | Name of the database. |
| vector.databaseTable | <code>string</code> | Table name in the database. |
| vector.databasePort | <code>number</code> | Database port. |
| vector.databaseUser | <code>string</code> | Database username. |
| vector.databasePassword | <code>string</code> | Database password. |
| vector.promptPrefix | <code>string</code> | Prefix to prepend to prompts. |
| vector.promptSuffix | <code>string</code> | Suffix to append to prompts. |
| vector.createdUtc | <code>Date</code> | Creation timestamp in UTC. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteVectorRepository"></a>

### base/ViewConfigurationSdk.deleteVectorRepository(guid, [cancelToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Delete a vector repository.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the vector repository is deleted.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the vector repository to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createGraphRepository"></a>

### base/ViewConfigurationSdk.createGraphRepository(graph, [cancelToken]) ⇒ <code>Promise.&lt;GraphRepository&gt;</code>
Create a graph repository.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;GraphRepository&gt;</code> - A promise resolving to the created GraphRepository object.  
**Throws**:

- <code>Error</code> If the repo is null.


| Param | Type | Description |
| --- | --- | --- |
| graph | <code>Object</code> | Information about the graph repository. |
| [graph.GUID] | <code>string</code> | GUID of the graph repository (auto-generated if not provided). |
| [graph.tenantGuid] | <code>string</code> | Tenant GUID (auto-generated if not provided). |
| [graph.Name] | <code>string</code> | Name of the graph. |
| [graph.RepositoryType] | <code>string</code> | Type of graph graph. |
| [graph.EndpointUrl] | <code>string</code> | Endpoint URL. |
| [graph.ApiKey] | <code>string</code> | API key for the graph. |
| [graph.Username] | <code>string</code> | Username for authentication. |
| [graph.Password] | <code>string</code> | Password for authentication. |
| [graph.Hostname] | <code>string</code> | Hostname for the graph. |
| [graph.Port] | <code>number</code> | Port number for the graph (default is 0). |
| [graph.GraphIdentifier] | <code>string</code> | Identifier of the graph. |
| [graph.CreatedUtc] | <code>Date</code> | Creation timestamp in UTC (defaults to current UTC time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsGraphRepository"></a>

### base/ViewConfigurationSdk.existsGraphRepository(guid, [cancelToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a graph repository exists.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise resolving to true if the graph repository exists, false otherwise.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the graph repository to check. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveGraphRepository"></a>

### base/ViewConfigurationSdk.retrieveGraphRepository(guid, [cancelToken]) ⇒ <code>Promise.&lt;GraphRepository&gt;</code>
Retrieve a graph repository.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;GraphRepository&gt;</code> - A promise resolving to the GraphRepository object.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the graph repository to retrieve. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveGraphRepositories"></a>

### base/ViewConfigurationSdk.retrieveGraphRepositories([cancelToken]) ⇒ <code>Promise.&lt;Array.&lt;GraphRepository&gt;&gt;</code>
Retrieve all graph repositories.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;Array.&lt;GraphRepository&gt;&gt;</code> - A promise resolving to a list of GraphRepository objects.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateGraphRepository"></a>

### base/ViewConfigurationSdk.updateGraphRepository(graph, [cancelToken]) ⇒ <code>Promise.&lt;GraphRepository&gt;</code>
Update a graph repository.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;GraphRepository&gt;</code> - A promise resolving to the updated GraphRepository object.  
**Throws**:

- <code>Error</code> If the graph is null.


| Param | Type | Description |
| --- | --- | --- |
| graph | <code>Object</code> | Information about the graph repository. |
| [graph.GUID] | <code>string</code> | GUID of the graph repository (auto-generated if not provided). |
| [graph.tenantGuid] | <code>string</code> | Tenant GUID (auto-generated if not provided). |
| [graph.Name] | <code>string</code> | Name of the graph. |
| [graph.RepositoryType] | <code>string</code> | Type of graph graph. |
| [graph.EndpointUrl] | <code>string</code> | Endpoint URL. |
| [graph.ApiKey] | <code>string</code> | API key for the graph. |
| [graph.Username] | <code>string</code> | Username for authentication. |
| [graph.Password] | <code>string</code> | Password for authentication. |
| [graph.Hostname] | <code>string</code> | Hostname for the graph. |
| [graph.Port] | <code>number</code> | Port number for the graph (default is 0). |
| [graph.GraphIdentifier] | <code>string</code> | Identifier of the graph. |
| [graph.CreatedUtc] | <code>Date</code> | Creation timestamp in UTC (defaults to current UTC time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteGraphRepository"></a>

### base/ViewConfigurationSdk.deleteGraphRepository(guid, [cancelToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Delete a graph repository.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the graph repository is deleted.  
**Throws**:

- <code>Error</code> If the guid is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the graph repository to delete. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createWebhookTarget"></a>

### base/ViewConfigurationSdk.createWebhookTarget([target], [cancelToken]) ⇒ <code>Promise.&lt;WebhookTarget&gt;</code>
Create a webhook target.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;WebhookTarget&gt;</code> - - Webhook target.  

| Param | Type | Description |
| --- | --- | --- |
| [target] | <code>Object</code> | Optional parameters. |
| [target.Name] | <code>string</code> | Name of the webhook target (defaults to "My webhook target"). |
| [target.Url] | <code>string</code> | URL of the webhook target. |
| [target.ContentType] | <code>string</code> | Content type (defaults to "application/json"). |
| [target.ExpectStatus] | <code>number</code> | Expected HTTP status (defaults to 200). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsWebhookTarget"></a>

### base/ViewConfigurationSdk.existsWebhookTarget(guid, [cancelToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a webhook target exists.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - True if exists.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveWebhookTarget"></a>

### base/ViewConfigurationSdk.retrieveWebhookTarget(guid, [cancelToken]) ⇒ <code>Promise.&lt;WebhookTarget&gt;</code>
Read a webhook target.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;WebhookTarget&gt;</code> - - Webhook target.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveWebhookTargets"></a>

### base/ViewConfigurationSdk.retrieveWebhookTargets([cancelToken]) ⇒ <code>Promise.&lt;Array.&lt;WebhookTarget&gt;&gt;</code>
Read webhook targets.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;Array.&lt;WebhookTarget&gt;&gt;</code> - - Webhook targets.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateWebhookTarget"></a>

### base/ViewConfigurationSdk.updateWebhookTarget([target], [cancelToken]) ⇒ <code>Promise.&lt;WebhookTarget&gt;</code>
Update a webhook target.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;WebhookTarget&gt;</code> - - Webhook target.  

| Param | Type | Description |
| --- | --- | --- |
| [target] | <code>Object</code> | Optional parameters. |
| [target.GUID] | <code>string</code> | GUID (automatically generated if not provided). |
| [target.TenantGUID] | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| [target.Name] | <code>string</code> | Name of the webhook target (defaults to "My webhook target"). |
| [target.Url] | <code>string</code> | URL of the webhook target. |
| [target.ContentType] | <code>string</code> | Content type (defaults to "application/json"). |
| [target.ExpectStatus] | <code>number</code> | Expected HTTP status (defaults to 200). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteWebhookTarget"></a>

### base/ViewConfigurationSdk.deleteWebhookTarget(guid, [cancelToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Delete a webhook target.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+createViewEndpoint"></a>

### base/ViewConfigurationSdk.createViewEndpoint([endpoint], [cancelToken]) ⇒ <code>Promise.&lt;ViewEndpoint&gt;</code>
Create a View endpoint.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;ViewEndpoint&gt;</code> - - View endpoint.  

| Param | Type | Description |
| --- | --- | --- |
| [endpoint] | <code>Object</code> | Optional parameters. |
| [endpoint.GUID] | <code>string</code> | GUID (automatically generated if not provided). |
| [endpoint.TenantGUID] | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| [endpoint.OwnerGUID] | <code>string</code> | Owner GUID (automatically generated if not provided). |
| [endpoint.Name] | <code>string</code> | Name of the view endpoint (defaults to "My View endpoint"). |
| [endpoint.UseSsl] | <code>boolean</code> | Boolean flag to enable or disable SSL (defaults to false). |
| [endpoint.S3Url] | <code>string</code> | S3 URL (defaults to "http://localhost:8002/"). |
| [endpoint.S3BaseUrl] | <code>string</code> | S3 base URL (defaults to "http://localhost:8002/{bucket}/{key}"). |
| [endpoint.RestUrl] | <code>string</code> | REST URL (defaults to "http://localhost:8001/"). |
| [endpoint.BucketName] | <code>string</code> | Bucket name (defaults to "data"). |
| [endpoint.Region] | <code>string</code> | Region (defaults to "us-west-1"). |
| [endpoint.AccessKey] | <code>string</code> | Access key. |
| [endpoint.SecretKey] | <code>string</code> | Secret key. |
| [endpoint.ApiKey] | <code>string</code> | API key. |
| [endpoint.CreatedUtc] | <code>Date</code> | Created date (defaults to current UTC time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+existsViewEndpoint"></a>

### base/ViewConfigurationSdk.existsViewEndpoint(guid, [cancelToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a View endpoint exists.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - True if exists.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveViewEndpoint"></a>

### base/ViewConfigurationSdk.retrieveViewEndpoint(guid, [cancelToken]) ⇒ <code>Promise.&lt;ViewEndpoint&gt;</code>
Read a View endpoint.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;ViewEndpoint&gt;</code> - - View endpoint.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+retrieveViewEndpoints"></a>

### base/ViewConfigurationSdk.retrieveViewEndpoints([cancelToken]) ⇒ <code>Promise.&lt;Array.&lt;ViewEndpoint&gt;&gt;</code>
Read View endpoints.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;Array.&lt;ViewEndpoint&gt;&gt;</code> - - View endpoints.  

| Param | Type | Description |
| --- | --- | --- |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+updateViewEndpoint"></a>

### base/ViewConfigurationSdk.updateViewEndpoint([endpoint], [cancelToken]) ⇒ <code>Promise.&lt;ViewEndpoint&gt;</code>
Update a View endpoint.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  
**Returns**: <code>Promise.&lt;ViewEndpoint&gt;</code> - - View endpoint.  

| Param | Type | Description |
| --- | --- | --- |
| [endpoint] | <code>Object</code> | Optional parameters. |
| [endpoint.GUID] | <code>string</code> | GUID (automatically generated if not provided). |
| [endpoint.TenantGUID] | <code>string</code> | Tenant GUID (automatically generated if not provided). |
| [endpoint.OwnerGUID] | <code>string</code> | Owner GUID (automatically generated if not provided). |
| [endpoint.Name] | <code>string</code> | Name of the view endpoint (defaults to "My View endpoint"). |
| [endpoint.UseSsl] | <code>boolean</code> | Boolean flag to enable or disable SSL (defaults to false). |
| [endpoint.S3Url] | <code>string</code> | S3 URL (defaults to "http://localhost:8002/"). |
| [endpoint.S3BaseUrl] | <code>string</code> | S3 base URL (defaults to "http://localhost:8002/{bucket}/{key}"). |
| [endpoint.RestUrl] | <code>string</code> | REST URL (defaults to "http://localhost:8001/"). |
| [endpoint.BucketName] | <code>string</code> | Bucket name (defaults to "data"). |
| [endpoint.Region] | <code>string</code> | Region (defaults to "us-west-1"). |
| [endpoint.AccessKey] | <code>string</code> | Access key. |
| [endpoint.SecretKey] | <code>string</code> | Secret key. |
| [endpoint.ApiKey] | <code>string</code> | API key. |
| [endpoint.CreatedUtc] | <code>Date</code> | Created date (defaults to current UTC time). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewConfigurationSdk+deleteViewEndpoint"></a>

### base/ViewConfigurationSdk.deleteViewEndpoint(guid, [cancelToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Delete a View endpoint.

**Kind**: instance method of [<code>base/ViewConfigurationSdk</code>](#module_base/ViewConfigurationSdk)  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | GUID. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewSdkBase"></a>

## base/ViewSdkBase
ViewSdk Base service.

**Version**: 0.1.0  

* [base/ViewSdkBase](#module_base/ViewSdkBase)
    * [module.exports](#exp_module_base/ViewSdkBase--module.exports) ⏏
        * [new module.exports(tenantGuid, accessKey, endpoint)](#new_module_base/ViewSdkBase--module.exports_new)
        * [.endpoint](#module_base/ViewSdkBase--module.exports+endpoint) : <code>String</code>
        * [.defaultHeaders](#module_base/ViewSdkBase--module.exports+defaultHeaders) : <code>Array.&lt;String&gt;</code>
        * [.timeout](#module_base/ViewSdkBase--module.exports+timeout) : <code>Number</code>
        * [.accessKey](#module_base/ViewSdkBase--module.exports+accessKey)
        * [.accessToken](#module_base/ViewSdkBase--module.exports+accessToken) ⇒ <code>string</code>
        * [.accessToken](#module_base/ViewSdkBase--module.exports+accessToken)
        * [.create](#module_base/ViewSdkBase--module.exports+create) ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
        * [.exists](#module_base/ViewSdkBase--module.exports+exists) ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
        * [.update](#module_base/ViewSdkBase--module.exports+update) ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
        * [.retrieve](#module_base/ViewSdkBase--module.exports+retrieve) ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
        * [.retrieveMany](#module_base/ViewSdkBase--module.exports+retrieveMany) ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
        * [.delete](#module_base/ViewSdkBase--module.exports+delete) ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
        * [.deleteRaw](#module_base/ViewSdkBase--module.exports+deleteRaw) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.deleteWithPayload](#module_base/ViewSdkBase--module.exports+deleteWithPayload) ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
        * [.post](#module_base/ViewSdkBase--module.exports+post) ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
        * [.postContentType](#module_base/ViewSdkBase--module.exports+postContentType) ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
        * [.createRaw](#module_base/ViewSdkBase--module.exports+createRaw) ⇒ <code>Promise.&lt;(object\|null\|ApiErrorResponse)&gt;</code>

<a name="exp_module_base/ViewSdkBase--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_base/ViewSdkBase--module.exports_new"></a>

#### new module.exports(tenantGuid, accessKey, endpoint)

| Param | Type |
| --- | --- |
| tenantGuid | <code>string</code> | 
| accessKey | <code>string</code> | 
| endpoint | <code>string</code> | 

<a name="module_base/ViewSdkBase--module.exports+endpoint"></a>

#### module.exports.endpoint : <code>String</code>
The base URL against which to resolve every API call's (relative) path.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Default**: <code>http://localhost</code>  
<a name="module_base/ViewSdkBase--module.exports+defaultHeaders"></a>

#### module.exports.defaultHeaders : <code>Array.&lt;String&gt;</code>
The default HTTP headers to be included for all API calls.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Default**: <code>{}</code>  
<a name="module_base/ViewSdkBase--module.exports+timeout"></a>

#### module.exports.timeout : <code>Number</code>
The default HTTP timeout for all API calls.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Default**: <code>60000</code>  
<a name="module_base/ViewSdkBase--module.exports+accessKey"></a>

#### module.exports.accessKey
Setter for the access key.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Throws**:

- <code>Error</code> Throws an error if the access key is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The access key. |

<a name="module_base/ViewSdkBase--module.exports+accessToken"></a>

#### module.exports.accessToken ⇒ <code>string</code>
Getter for the access token.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>string</code> - The access token.  
<a name="module_base/ViewSdkBase--module.exports+accessToken"></a>

#### module.exports.accessToken
Setter for the access token.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Throws**:

- <code>Error</code> Throws an error if the access token is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The access token. |

<a name="module_base/ViewSdkBase--module.exports+create"></a>

#### module.exports.create ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
Create an object via PUT request to the specified URL.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code> - The created object as the response or null if the request fails.  
**Throws**:

- <code>Error</code> If the URL or object is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to send the PUT request to. |
| [obj] | <code>T</code> | The object to send in the request body. |
| [Model] | <code>Class</code> | Modal to deserialize on |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewSdkBase--module.exports+exists"></a>

#### module.exports.exists ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
Check if data exists from the given URL with optional cancellation support using superagent's abort method.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code> - The parsed JSON data from the response or null if the request fails.  
**Throws**:

- <code>Error</code> If the URL is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to request data from. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewSdkBase--module.exports+update"></a>

#### module.exports.update ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
Update an object via PUT request to the specified URL.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code> - The created object as the response or null if the request fails.  
**Throws**:

- <code>Error</code> If the URL or object is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to send the PUT request to. |
| obj | <code>T</code> | The object to send in the request body. |
| Model | <code>Class</code> | Modal to deserialize on |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |
| [headers] | <code>Object</code> | Additional headers for the request. |
| [headers.token] | <code>string</code> | headers token for authorization. |
| [headers.Range] | <code>string</code> | headers range for the request. |
| [headers.email] | <code>string</code> | headers email for the request. |

<a name="module_base/ViewSdkBase--module.exports+retrieve"></a>

#### module.exports.retrieve ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
Retrieve single data from the given URL with optional cancellation support using superagent's abort method.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code> - The parsed JSON data from the response or null if the request fails.  
**Throws**:

- <code>Error</code> If the URL is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to request data from. |
| Model | <code>Class</code> | Modal to deserialize on |
| [headers] | <code>Object</code> | Additional headers for the request. |
| [headers.token] | <code>string</code> | headers token for authorization. |
| [headers.Range] | <code>string</code> | headers range for the request. |
| [headers.email] | <code>string</code> | headers email for the request. |
| [cancelToken] | <code>Object</code> | Optional headers with an `abort` method to cancel the request. |

<a name="module_base/ViewSdkBase--module.exports+retrieveMany"></a>

#### module.exports.retrieveMany ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
Retrieve all data from the given URL with optional cancellation support using superagent's abort method.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code> - The parsed JSON data from the response or null if the request fails.  
**Throws**:

- <code>Error</code> If the URL is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to request data from. |
| Model | <code>Class</code> | Modal to deserialize on |
| [cancelToken] | <code>Object</code> | Optional object with an `abort` method to cancel the request. |
| [headers] | <code>object</code> | Optional object with an `abort` method to cancel the request |
| [headers.token] | <code>string</code> | headers token for authorization. |

<a name="module_base/ViewSdkBase--module.exports+delete"></a>

#### module.exports.delete ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
Delete single data from the given URL with optional cancellation support using superagent's abort method.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code> - The parsed JSON data from the response or null if the request fails.  
**Throws**:

- <code>Error</code> If the URL is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to delete data from. |
| Model | <code>Class</code> | Modal to deserialize on |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |
| [headers] | <code>object</code> | Optional object with an `abort` method to cancel the request |
| [headers.token] | <code>string</code> | headers token for authorization. |

<a name="module_base/ViewSdkBase--module.exports+deleteRaw"></a>

#### module.exports.deleteRaw ⇒ <code>Promise.&lt;string&gt;</code>
Delete single data from the given URL with optional cancellation support using superagent's abort method.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;string&gt;</code> - The parsed JSON data from the response or null if the request fails.  
**Throws**:

- <code>Error</code><code>ApiErrorResponse</code> If the URL is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to delete data from. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |
| [headers] | <code>object</code> | Optional object with an `abort` method to cancel the request |
| [headers.token] | <code>string</code> | headers token for authorization. |

<a name="module_base/ViewSdkBase--module.exports+deleteWithPayload"></a>

#### module.exports.deleteWithPayload ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
Delete single data from the given URL with optional cancellation support using superagent's abort method.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code> - The parsed JSON data from the response or null if the request fails.  
**Throws**:

- <code>Error</code> If the URL is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to delete data from. |
| obj | <code>T</code> | The object to send in the request body. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewSdkBase--module.exports+post"></a>

#### module.exports.post ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
Create an object via POST request to the specified URL.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code> - The created object as the response or null if the request fails.  
**Throws**:

- <code>Error</code> If the URL or object is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to send the PUT request to. |
| obj | <code>T</code> | The object to send in the request body. |
| Model | <code>Class</code> | Modal to deserialize on |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewSdkBase--module.exports+postContentType"></a>

#### module.exports.postContentType ⇒ <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code>
Create an object via POST request to the specified URL.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(T\|null\|ApiErrorResponse)&gt;</code> - The created object as the response or an `ApiErrorResponse` if the request fails.  
**Throws**:

- <code>Error</code> If the URL or object is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to send the POST request to. |
| obj | <code>T</code> | The object to send in the request body. |
| Model | <code>Class</code> | Class to deserialize the response body into. |
| contentType | <code>string</code> | The content type of the request (e.g., 'application/json'). |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="module_base/ViewSdkBase--module.exports+createRaw"></a>

#### module.exports.createRaw ⇒ <code>Promise.&lt;(object\|null\|ApiErrorResponse)&gt;</code>
Create an object via POST request to the specified URL.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_base/ViewSdkBase--module.exports)  
**Returns**: <code>Promise.&lt;(object\|null\|ApiErrorResponse)&gt;</code> - The raw response data from the API or an error response.  
**Throws**:

- <code>Error</code> If the URL or object is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to send the POST request to. |
| obj | <code>T</code> | The object to send in the request body. |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request. |

<a name="chatRagQuestion_LEGACY"></a>

## chatRagQuestion\_LEGACY(ragRequest, onToken, cancelToken)
AssistantRagRequest request.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ragRequest | <code>Object</code> | Configuration object for query and generation. |
| ragRequest.Question | <code>string</code> | The input question to process. |
| ragRequest.EmbeddingModel | <code>string</code> | The model used for embedding. |
| ragRequest.MaxResults | <code>number</code> | Maximum number of results to return. |
| ragRequest.VectorDatabaseName | <code>string</code> | Name of the vector database. |
| ragRequest.VectorDatabaseTable | <code>string</code> | Table name in the vector database. |
| ragRequest.VectorDatabaseHostname | <code>string</code> | Hostname of the vector database. |
| ragRequest.VectorDatabasePort | <code>number</code> | Port number of the vector database. |
| ragRequest.VectorDatabaseUser | <code>string</code> | Username for the vector database. |
| ragRequest.VectorDatabasePassword | <code>string</code> | Password for the vector database. |
| ragRequest.GenerationProvider | <code>string</code> | The LLM generation provider (e.g., "ollama"). |
| ragRequest.GenerationApiKey | <code>string</code> | API key for the generation provider. |
| ragRequest.GenerationModel | <code>string</code> | Model used for response generation. |
| ragRequest.HuggingFaceApiKey | <code>string</code> | API key for Hugging Face (if used). |
| ragRequest.Temperature | <code>number</code> | Temperature setting for randomness in generation. |
| ragRequest.MaxTokens | <code>number</code> | Maximum number of tokens to generate. |
| ragRequest.Stream | <code>boolean</code> | Whether to stream the generation output. |
| ragRequest.OllamaHostname | <code>string</code> | Hostname for the Ollama service. |
| ragRequest.OllamaPort | <code>number</code> | Port for the Ollama service. |
| ragRequest.TopP | <code>number</code> | Nucleus sampling value (top-p). |
| ragRequest.PromptPrefix | <code>string</code> | Prefix added to the prompt (e.g., a style like "talk like a pirate"). |
| ragRequest.ContextSort | <code>boolean</code> | Whether to sort context passages. |
| ragRequest.SortByMaxSimilarity | <code>boolean</code> | Whether to sort context by max similarity. |
| ragRequest.ContextScope | <code>number</code> | Scope or depth of the context. |
| ragRequest.Rerank | <code>boolean</code> | Whether to rerank results. |
| ragRequest.RerankModel | <code>string</code> | Model used for reranking. |
| ragRequest.RerankTopK | <code>number</code> | Number of top results to keep after reranking. |
| onToken | <code>function</code> | Callback to handle tokens as they are emitted. |
| cancelToken | <code>AbortSignal</code> | Optional. The cancellation token to cancel the request if needed. |

<a name="chatRagMessages"></a>

## chatRagMessages(ragRequest, onToken, cancelToken)
AssistantRagRequest request.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ragRequest | <code>Object</code> | Configuration for the retrieval and generation process. |
| ragRequest.Messages | <code>Array.&lt;{role: string, content: string}&gt;</code> | The message history between user and assistant. |
| ragRequest.EmbeddingModel | <code>string</code> | The embedding model to use for vectorization (e.g., sentence-transformers model). |
| ragRequest.MaxResults | <code>number</code> | The maximum number of results to retrieve from the vector database. |
| ragRequest.VectorDatabaseName | <code>string</code> | The name of the vector database to connect to. |
| ragRequest.VectorDatabaseTable | <code>string</code> | The table name in the vector database. |
| ragRequest.VectorDatabaseHostname | <code>string</code> | The hostname of the vector database server. |
| ragRequest.VectorDatabasePort | <code>number</code> | The port of the vector database server. |
| ragRequest.VectorDatabaseUser | <code>string</code> | The username for the vector database. |
| ragRequest.VectorDatabasePassword | <code>string</code> | The password for the vector database. |
| ragRequest.GenerationProvider | <code>string</code> | The text generation provider (e.g., ollama, openai). |
| ragRequest.GenerationApiKey | <code>string</code> | The API key for the generation provider (if applicable). |
| ragRequest.GenerationModel | <code>string</code> | The name of the model used for text generation. |
| ragRequest.HuggingFaceApiKey | <code>string</code> | The Hugging Face API key (if needed for embeddings or generation). |
| ragRequest.Temperature | <code>number</code> | Sampling temperature for generation; higher values increase randomness. |
| ragRequest.TopP | <code>number</code> | The nucleus sampling value (top-p) for controlling diversity of generated output. |
| ragRequest.MaxTokens | <code>number</code> | The maximum number of tokens to generate. |
| ragRequest.Stream | <code>boolean</code> | Whether to stream the output tokens (if supported by provider). |
| ragRequest.OllamaHostname | <code>string</code> | Hostname of the Ollama inference server. |
| ragRequest.OllamaPort | <code>number</code> | Port of the Ollama inference server. |
| ragRequest.PromptPrefix | <code>string</code> | A prefix to prepend to the prompt before generation. |
| ragRequest.ContextSort | <code>boolean</code> | Whether to sort context documents before generation. |
| ragRequest.SortByMaxSimilarity | <code>boolean</code> | Whether to sort context documents by similarity score. |
| ragRequest.ContextScope | <code>number</code> | How far back in the message history to consider for context. |
| ragRequest.Rerank | <code>boolean</code> | Whether to rerank results after retrieval. |
| ragRequest.RerankModel | <code>string</code> | The model used for reranking results. |
| ragRequest.RerankTopK | <code>number</code> | The number of top results to keep after reranking. |
| onToken | <code>function</code> | Callback to handle tokens as they are emitted. |
| cancelToken | <code>AbortSignal</code> | Optional. The cancellation token to cancel the request if needed. |

<a name="assistantConfigChat"></a>

## assistantConfigChat(assistantConfigGuid, chatRequest, onToken, cancelToken)
Process a chat request.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assistantConfigGuid | <code>string</code> | The GUID of the assistant configuration to use for the chat. |
| chatRequest | <code>Object</code> | Configuration for a simple chat interaction. |
| chatRequest.messages | <code>Array.&lt;{role: string, content: string}&gt;</code> | An array of chat messages, each with a role ('user' or 'assistant') and message content. |
| chatRequest.stream | <code>boolean</code> | Whether to stream the output (e.g., real-time token generation). |
| onToken | <code>function</code> | Callback to handle tokens as they are emitted. |
| cancelToken | <code>AbortSignal</code> | Optional. The cancellation token to cancel the request if needed. |

<a name="chatOnly"></a>

## chatOnly(chatRequest, onToken, cancelToken)
Process a chat request.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| chatRequest | <code>Object</code> | Configuration for generating a response to a single question. |
| chatRequest.Question | <code>string</code> | The prompt or question to generate a response for. |
| chatRequest.ModelName | <code>string</code> | The name of the model to use for generation (e.g., llama3.1:latest). |
| chatRequest.Temperature | <code>number</code> | Sampling temperature; controls randomness in output (lower is more deterministic). |
| chatRequest.TopP | <code>number</code> | Top-p (nucleus) sampling parameter to control diversity. |
| chatRequest.MaxTokens | <code>number</code> | Maximum number of tokens to generate in the response. |
| chatRequest.GenerationProvider | <code>string</code> | The provider used for text generation (e.g., ollama). |
| chatRequest.GenerationApiKey | <code>string</code> | API key for the generation provider (if required). |
| chatRequest.OllamaHostname | <code>string</code> | Hostname or IP address of the Ollama inference server. |
| chatRequest.OllamaPort | <code>number</code> | Port on which the Ollama server is running. |
| chatRequest.Stream | <code>boolean</code> | Whether to stream generated tokens as they are produced. |
| onToken | <code>function</code> | Callback to handle tokens as they are emitted. |
| cancelToken | <code>AbortSignal</code> | Optional. The cancellation token to cancel the request if needed. |

<a name="retrieveModel"></a>

## retrieveModel(guid, [cancelToken], model, onToken, cancelToken)
Retrieve a chat thread by GUID.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the chat thread to retrieve |
| [cancelToken] | <code>object</code> | Optional object with an `abort` method to cancel the request   //endregion   //region Model   /** Retrieve a model. |
| model | <code>Object</code> | Information about the assistant chat request. |
| model.ModelName | <code>string</code> | The question being asked. |
| model.OllamaHostname | <code>number</code> | The temperature value between 0 and 1. |
| model.OllamaPort | <code>number</code> | The maximum number of tokens to generate (between 1 and 16384). |
| onToken | <code>function</code> | Callback to handle tokens as they are emitted. |
| cancelToken | <code>AbortSignal</code> | Optional. The cancellation token to cancel the request if needed. |

<a name="processingPipeline"></a>

## processingPipeline(payload, token)
Process a document. This variant is used by the storage server.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| payload | <code>object</code> |  | The payload to be processed. |
| token | <code>AbortSignal</code> | <code></code> | Cancellation token. |

<a name="cleanupPipeline"></a>

## cleanupPipeline(payload, token)
Cleanup a document.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| payload | <code>object</code> |  | The payload to be processed. |
| token | <code>AbortSignal</code> | <code></code> | Cancellation token. |

