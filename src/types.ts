import { ApiErrorEnum } from './enums/ApiErrorEnum';

export interface AclEntryData {
  GUID: string;
  TenantGUID: string;
  BucketGUID: string;
  OwnerGUID: string;
  UserGUID: string;
  CanonicalUser: string;
  EnableRead: boolean;
  EnableReadAcp: boolean;
  EnableWrite: boolean;
  EnableWriteAcp: boolean;
  FullControl: boolean;
  CreatedUtc: string; // ISO timestamp
}

export interface UserMasterData {
  GUID: string;
  TenantGUID: string;
  FirstName: string;
  LastName: string;
  Notes: string;
  Email: string;
  PasswordSha256: string;
  Active: boolean;
  CreatedUtc: string; // ISO timestamp
  IsProtected: boolean;
}

export interface AclMetaDataData {
  Owner: UserMasterData;
  Users: UserMasterData[];
  Entries: AclEntryData[];
}

export interface ApiErrorResponseData {
  error: ApiErrorEnum;
  context: Record<string, any> | null;
  message: string | null;
  description: string | null;
}

export interface AssistantChatResponseData {
  response: string;
  source_documents: object[];
  context: string;
  CitationMap: any;
}

export interface AssistantConfigData {
  GUID: string;
  Name: string;
  Description: string | null;
  SystemPrompt: string;
  EmbeddingModel: string;
  MaxResults: number;
  VectorDatabaseName: string;
  VectorDatabaseTable: string;
  VectorDatabaseHostname: string;
  VectorDatabasePort: number;
  VectorDatabaseUser: string;
  VectorDatabasePassword: string;
  GenerationProvider: string;
  GenerationModel: string;
  GenerationApiKey: string;
  Temperature: number;
  TopP: number;
  MaxTokens: number;
  OllamaHostname: string;
  OllamaPort: number;
  OllamaContextLength: number | null;
  ContextSort: boolean;
  SortBySimilarity: boolean;
  ContextScope: number;
  Rerank: boolean;
  RerankModel: string;
  RerankTopK: number;
  RerankLevel: string;
  TimestampEnabled: boolean;
  TimestampFormat: string;
  TimestampTimezone: string;
  UseCitations: boolean;
  CreatedUTC: string;
  LastModifiedUTC: string;
  ChatOnly: boolean;
}

export interface AssistantConfigListData {
  AssistantConfigs: AssistantConfigData[];
}

export type AssistantRagRequestData = {
  PromptPrefix?: string;
  Question?: string;
  MaxResults?: number;
  Temperature?: number;
  TopP?: number;
  MaxTokens?: number;
  GenerationModel?: string;
  GenerationProvider?: string;
  OllamaHostname?: string;
  OllamaPort?: number;
  VectorDatabaseHostname?: string;
  VectorDatabasePort?: number;
  VectorDatabaseName?: string;
  VectorDatabaseUser?: string;
  VectorDatabasePassword?: string;
  Stream?: boolean;
  ContextSort?: boolean;
  ContextScope?: number;
  Rerank?: boolean;
  RerankTopK?: number;
};

export interface BlobData {
  GUID: string;
  TenantGUID: string;
  ContentType: string;
  Name: string;
  Description: string;
  Url: string;
  Length: number;
  RefObjType: string;
  RefObjGUID: string;
  IsPublic: boolean;
  MD5Hash: string;
  SHA1Hash: string;
  SHA256Hash: string;
  CreatedUtc: string;
  Data: string;
}

export interface BucketMetadata {
  GUID: string;
  TenantGUID: string;
  PoolGUID: string;
  OwnerGUID: string;
  Name: string;
  RegionString: string;
  Versioning: boolean;
  MaxMultipartUploadSeconds: number;
  LastAccessUtc: string;
  CreatedUtc: string;
}

export interface BucketObject {
  GUID: string;
  TenantGUID: string;
  NodeGUID: string;
  PoolGUID: string;
  BucketGUID: string;
  OwnerGUID: string;
  DataCatalogDocumentGUID: string;
  DataFlowRequestGUID: string;
  DataFlowSuccess: boolean;
  Key: string;
  Version: string;
  IsLatest: boolean;
  IsDeleteMarker: boolean;
  IsLocal: boolean;
  ContentType: string;
  DocumentType: string;
  SourceUrl: string;
  MD5Hash: string;
  SHA1Hash: string;
  SHA256Hash: string;
  IsEncrypted: boolean;
  WriteMode: string;
  CompressionType: string;
  ContentLength: number;
  CompressedLength: number;
  EncryptedLength: number;
  CompressionRatioPercent: number;
  CompressionRatioX: number;
  LastAccessUtc: string;
  LastModifiedUtc: string;
  CreatedUtc: string;
  Owner: any; // Adjust to `UserMaster` interface if available
}

export interface ChatThread {
  GUID: string;
  Title: string;
  Description: string;
  MessageCount: number;
  CreatedUTC: string;
  LastModifiedUTC: string;
  AssistantConfigGUID: string;
}

export interface ChatThreadList {
  ChatThreads: ChatThread[];
}

export interface CleanupRequest {
  tenant: any;
  pool: any;
  bucket: any;
  dataRepository: any;
  collection: any;
  object: any;
  metadataRule: any;
  embeddingsRule: any;
  vectorRepository: any;
  graphRepository: any;
}

export interface CleanupResponse {
  dataFlowRequestGUID: string | null;
  success: boolean;
  timestamp: string;
  error: any;
}

export interface Collection {
  GUID: string;
  TenantGUID: string;
  Name: string;
  AllowOverwrites: boolean;
  AdditionalData: string;
  CreatedUtc: Date;
}

export interface CollectionSearchRequest {
  guid: string;
  tenantGuid: string;
  collectionGuid: string;
  maxResults: number;
  continuationToken: string | null;
  ordering: any;
  filter: any;
  embeddingsRule: any;
}

export interface CollectionStatistics {
  Collection: any;
  DocumentCount: number;
  TotalBytes: number;
  TermCount: number;
  KeyValueCount: number;
}

export interface CrawlFilter {
  GUID: string;
  TenantGUID: string;
  Name: string;
  MinimumSize: number;
  MaximumSize: number;
  IncludeSubdirectories: boolean;
  ContentType: string;
  CreatedUtc: string;
}

export interface CrawlOperation {
  GUID: string;
  TenantGUID: string;
  CrawlPlanGUID: string;
  CrawlScheduleGUID: string;
  CrawlFilterGUID: string;
  DataRepositoryGUID: string;
  ViewEndpointGUID: string;
  MetadataRuleGUID: string;
  EmbeddingsRuleGUID: string;
  ProcessingEndpoint: string;
  CleanupEndpoint: string;
  Name: string;
  ObjectsEnumerated: number;
  BytesEnumerated: number;
  ObjectsAdded: number;
  BytesAdded: number;
  ObjectsUpdated: number;
  BytesUpdated: number;
  ObjectsDeleted: number;
  BytesDeleted: number;
  EnumerationFile: string;
  ObjectsSuccess: number;
  BytesSuccess: number;
  ObjectsFailed: number;
  BytesFailed: number;
  State: string;
  CreatedUtc: string;
  StartUtc: string;
  StartEnumerationUtc: string;
  StartRetrievalUtc: string;
  FinishEnumerationUtc: string;
  FinishRetrievalUtc: string;
  FinishUtc: string;
  AdditionalData: string;
}

export interface BucketMetadata {
  GUID: string;
  TenantGUID: string;
  PoolGUID: string;
  OwnerGUID: string;
  Name: string;
  RegionString: string;
  Versioning: boolean;
  MaxMultipartUploadSeconds: number;
  LastAccessUtc: string;
  CreatedUtc: string;
}

export interface BucketObject {
  GUID: string;
  TenantGUID: string;
  NodeGUID: string;
  PoolGUID: string;
  BucketGUID: string;
  OwnerGUID: string;
  DataCatalogDocumentGUID: string;
  DataFlowRequestGUID: string;
  DataFlowSuccess: boolean;
  Key: string;
  Version: string;
  IsLatest: boolean;
  IsDeleteMarker: boolean;
  IsLocal: boolean;
  ContentType: string;
  DocumentType: string;
  SourceUrl: string;
  MD5Hash: string;
  SHA1Hash: string;
  SHA256Hash: string;
  IsEncrypted: boolean;
  WriteMode: string;
  CompressionType: string;
  ContentLength: number;
  CompressedLength: number;
  EncryptedLength: number;
  CompressionRatioPercent: number;
  CompressionRatioX: number;
  LastAccessUtc: string;
  LastModifiedUtc: string;
  CreatedUtc: string;
  Owner: any;
}

export interface ChatThread {
  GUID: string;
  Title: string;
  Description: string;
  MessageCount: number;
  CreatedUTC: string;
  LastModifiedUTC: string;
  AssistantConfigGUID: string;
}

export interface ChatThreadList {
  ChatThreads: ChatThread[];
}

export interface CleanupRequest {
  tenant: any;
  pool: any;
  bucket: any;
  dataRepository: any;
  collection: any;
  object: any;
  metadataRule: any;
  embeddingsRule: any;
  vectorRepository: any;
  graphRepository: any;
}

export interface CleanupResponse {
  dataFlowRequestGUID: string | null;
  success: boolean;
  timestamp: string;
  error: any;
}

export interface Collection {
  GUID: string;
  TenantGUID: string;
  Name: string;
  AllowOverwrites: boolean;
  AdditionalData: string;
  CreatedUtc: Date;
}

export interface CollectionSearchRequest {
  guid: string;
  tenantGuid: string;
  collectionGuid: string;
  maxResults: number;
  continuationToken: string | null;
  ordering: any;
  filter: any;
  embeddingsRule: any;
}

export interface CollectionStatistics {
  Collection: any;
  DocumentCount: number;
  TotalBytes: number;
  TermCount: number;
  KeyValueCount: number;
}

export interface CrawlFilter {
  GUID: string;
  TenantGUID: string;
  Name: string;
  MinimumSize: number;
  MaximumSize: number;
  IncludeSubdirectories: boolean;
  ContentType: string;
  CreatedUtc: string;
}

export interface CrawlOperation {
  GUID: string;
  TenantGUID: string;
  CrawlPlanGUID: string;
  CrawlScheduleGUID: string;
  CrawlFilterGUID: string;
  DataRepositoryGUID: string;
  ViewEndpointGUID: string;
  MetadataRuleGUID: string;
  EmbeddingsRuleGUID: string;
  ProcessingEndpoint: string;
  CleanupEndpoint: string;
  Name: string;
  ObjectsEnumerated: number;
  BytesEnumerated: number;
  ObjectsAdded: number;
  BytesAdded: number;
  ObjectsUpdated: number;
  BytesUpdated: number;
  ObjectsDeleted: number;
  BytesDeleted: number;
  EnumerationFile: string;
  ObjectsSuccess: number;
  BytesSuccess: number;
  ObjectsFailed: number;
  BytesFailed: number;
  State: string;
  CreatedUtc: string;
  StartUtc: string;
  StartEnumerationUtc: string;
  StartRetrievalUtc: string;
  FinishEnumerationUtc: string;
  FinishRetrievalUtc: string;
  FinishUtc: string;
  AdditionalData: string;
}

export interface CrawlPlan {
  GUID: string;
  TenantGUID: string;
  DataRepositoryGUID: string;
  CrawlScheduleGUID: string;
  CrawlFilterGUID: string;
  MetadataRuleGUID: string;
  EmbeddingsRuleGUID: string;
  Name: string;
  EnumerationDirectory: string;
  EnumerationsToRetain: number;
  MaxDrainTasks: number;
  ProcessAdditions: boolean;
  ProcessDeletions: boolean;
  ProcessUpdates: boolean;
  CreatedUtc: string;
}

export interface CrawlSchedule {
  GUID: string;
  TenantGUID: string;
  Name: string;
  Schedule: string;
  Interval: number;
  CreatedUtc: string;
}

export interface Credential {
  GUID: string;
  tenantGUID: string;
  userGUID: string;
  accessKey: string;
  secretKey: string;
  active: boolean;
  isProtected: boolean;
  name: string;
  createdUtc: string;
}

export interface DataFlow {
  GUID: string;
  TenantGUID: string;
  TriggerGUID: string;
  StepGUID: string;
  Name: string;
  Notes: string;
  CreatedUtc: string;
  LogRetentionDays: number;
  Map: any;
  Steps: any[];
}

export interface DataNode {
  key: string | null;
  type: string;
  data: any;
}

export interface DataRepository {
  GUID: string;
  TenantGUID: string;
  OwnerGUID: string;
  Name: string;
  RepositoryType: string;
  UseSsl: boolean;
  IncludeSubdirectories: boolean;
  DiskIncludeSubdirectories: boolean;
  DiskDirectory: string;
  S3EndpointUrl: string;
  S3BaseUrl: string;
  S3AccessKey: string;
  S3SecretKey: string;
  S3BucketName: string;
  S3Region: string;
  AzureEndpointUrl: string;
  AzureAccountName: string;
  AzureContainerName: string;
  AzureAccessKey: string;
  CifsHostname: string;
  CifsUsername: string;
  CifsPassword: string;
  CifsShareName: string;
  NfsHostname: string;
  NfsUserId: number;
  NfsGroupId: number;
  NfsShareName: string;
  NfsVersion: string;
  CreatedUtc: Date;
  CifsIncludeSubdirectories: boolean;
  NfsIncludeSubdirectories: boolean;
}

export interface DirectorEmbeddingResponse {
  Success: boolean;
  Model: string;
  ApiKey: string | null;
  Contents: string[];
  Embeddings: number[][];
}

export interface Embedding {
  Success: boolean;
  Model: string;
  ApiKey: string | null;
  Contents: string[];
  Embeddings: number[][];
}

export interface EmbeddingDocument {
  Success: boolean;
  GUID: string;
  DocumentGUID: string;
  TenantGUID: string;
  CollectionGUID: string;
  SourceDocumentGUID: string;
  BucketGUID: string;
  VectorRepositoryGUID: string;
  GraphNodeIdentifier: string;
  ObjectGUID: string;
  ObjectKey: string;
  ObjectVersion: string;
  Model: string;
  SemanticCells: any[];
  CreatedUtc: string;
}

export interface EmbeddingResponse {
  Timestamp: {
    Start: string;
    TotalMs: number;
    Messages: any;
  };
  Existing: any[];
  Missing: any[];
}

export interface EmbeddingsMap {
  Content: string | null;
  Embeddings: number[];
}

export interface EmbeddingsResult {
  Success: boolean;
  StatusCode: number;
  BatchCount: number;
  SemanticCells: any[];
  ContentEmbeddings: {
    Content: string;
    Embeddings: number[];
  }[];
}

export interface EmbeddingsRule {
  GUID: string;
  TenantGUID: string;
  BucketGUID: string;
  OwnerGUID: string;
  Name: string;
  ContentType: string;
  GraphRepositoryGUID: string;
  VectorRepositoryGUID: string;
  ProcessingEndpoint: string;
  ProcessingAccessKey: string;
  EmbeddingsServerUrl: string;
  EmbeddingsServerApiKey: string;
  EmbeddingsGenerator: string;
  EmbeddingsGeneratorUrl: string;
  EmbeddingsGeneratorApiKey: string;
  BatchSize: number;
  MaxGeneratorTasks: number;
  MaxRetries: number;
  MaxFailures: number;
  VectorStoreUrl: string;
  VectorStoreAccessKey: string;
  MaxContentLength: number;
  CreatedUtc: string | Date;
}

export interface EncryptionKey {
  GUID: string;
  TenantGUID: string;
  OwnerGUID: string;
  KeyBase64: string;
  KeyHex: string;
  IvBase64: string;
  IvHex: string;
  SaltBase64: string;
  SaltHex: string;
  Name: string;
  Description: string;
  CreatedUtc: string;
}

export interface EnumerationQuery {
  timestamp: number;
  tenant: any;
  tenantGuid: string;
  bucket: any;
  bucketGuid: string;
  collection: any;
  collectionGuid: string;
  sourceDocument: any;
  sourceDocumentGuid: string;
  vectorRepository: any;
  vectorRepositoryGuid: string;
  graphRepository: any;
  graphRepositoryGuid: string;
  graphNodeIdentifier: string;
  maxResults: number;
  continuationToken: string;
  prefix: string;
  suffix: string;
  marker: string;
  delimiter: string;
  token: string;
  includeData: boolean;
  includeOwners: boolean;
  filters: any[];
  ordering: any;
}

export interface EnumerationResult {
  success: boolean;
  timestamp: {
    start: string;
    totalMs: number;
    messages: any;
  };
  maxResults: number;
  iterationsRequired: number;
  endOfResults: boolean;
  totalRecords: number;
  recordsRemaining: number;
  objects: any[];
  sharedPrefixes: any[];
  statistics: any;
}

export interface ExistingMetaData {
  sha256Hash: string;
  embeddings: number[];
}

export interface Graph {
  GUID: string;
  Name: string;
  CreatedUtc: Date;
}

export interface GraphData {
  Type: string;
  Tenant: any;
  StoragePool: any;
  Bucket: any;
  Object: any;
  Collection: any;
  SourceDocument: any;
  VectorRepository: any;
  SemanticCell: any;
  SemanticChunk: any;
  DataRepository: any;
}

export interface GraphEdge {
  GUID: string;
  GraphGUID: string;
  Name: string | null;
  From: string;
  FromNode: any;
  To: string;
  ToNode: any;
  Cost: number;
  CreatedUtc: Date;
}

export interface GraphNode {
  GUID: string;
  GraphGUID: string;
  Name: string | null;
  Data: any;
  CreatedUtc: Date;
}

export interface GraphRepository {
  GUID: string;
  TenantGUID: string;
  Name: string;
  RepositoryType: string;
  EndpointUrl: string;
  ApiKey: string;
  Port: number;
  Ssl: boolean;
  GraphIdentifier: string;
  CreatedUtc: string | Date;
}

export interface GraphResult {
  Success: boolean;
  Timestamp: any;
  Graph: any;
  Tenant: any;
  StoragePool: any;
  Bucket: any;
  Object: any;
  Collection: any;
  SourceDocument: any;
  DataRepository: any;
  SemanticCells: any[];
  SemanticChunks: any[];
  Edges: any[];
}

export interface IngestQueue {
  GUID: string;
  [key: string]: any; // To accommodate dynamic fields assigned via Object.entries
}

export interface LcproxyEmbeddingsResult {
  Success: boolean;
  Model: string | null;
  Contents: string[];
  Embeddings: number[][];
}

export interface LexiEmbeddingsRequest {
  tenant: any;
  collection: any;
  results: any;
  embeddingsRule: any;
  vectorRepository: any;
  graphRepository: any;
}

export interface LexiEmbeddingsResponse {
  GUID: string;
  Success: boolean;
  Async: boolean;
  Timestamp: {
    Start: string;
    TotalMs: number;
    Messages: any;
  };
}

export interface MetadataRule {
  GUID: string;
  TenantGUID: string;
  BucketGUID: string;
  OwnerGUID: string;
  Name: string;
  ContentType: string;
  ProcessingEndpoint: string;
  ProcessingAccessKey: string;
  CleanupEndpoint: string;
  CleanupAccessKey: string;
  MinChunkContentLength: number;
  MaxChunkContentLength: number;
  MaxTokensPerChunk: number;
  ShiftSize: number;
  ImageTextExtraction: boolean;
  DataCatalogType: string;
  DataCatalogEndpoint: string;
  DataCatalogAccessKey: string;
  DataCatalogCollection: string;
  GraphRepositoryGUID: string;
  TopTerms: number;
  CaseInsensitive: boolean;
  IncludeFlattened: boolean;
  MaxContentLength: number;
  CreatedUtc: Date;
}

export interface ModelInformation {
  Model: string | null;
  Size: number;
  LastModifiedUtc: Date | null;
  MD5Hash: string | null;
  SHA1Hash: string | null;
  SHA256Hash: string | null;
}

export interface MultipartUpload {
  GUID: string;
  TenantGUID: string;
  BucketGUID: string;
  PoolGUID: string;
  NodeGUID: string;
  OwnerGUID: string;
  UploadGUID: string;
  Key: string;
  StartedUtc: string;
  LastAccessUtc: string;
  CreatedUtc: string;
  ExpirationUtc: string;
  Parts: any[];
}

export interface NodeModal {
  GUID: string;
  name: string | null;
  hostname: string;
  instanceType: string;
  lastStartUtc: Date;
  createdUtc: Date;
  _id?: number; // with getter/setter validation logic in actual class
}

export interface ObjectLock {
  GUID: string;
  TenantGUID: string;
  NodeGUID: string;
  BucketGUID: string;
  OwnerGUID: string;
  ObjectGUID: string;
  Key: string;
  Version: string;
  IsReadLock: boolean;
  IsWriteLock: boolean;
  CreatedUtc: string;
}

export interface ObjectMetadata {
  GUID: string;
  TenantGUID: string;
  NodeGUID: string;
  PoolGUID: string;
  BucketGUID: string;
  OwnerGUID: string;
  Key: string;
  Version: string;
  IsLatest: boolean;
  IsDeleteMarker: boolean;
  IsLocal: boolean;
  ContentType: string;
  DocumentType: string;
  SourceUrl: string;
  MD5Hash: string;
  SHA1Hash: string;
  SHA256Hash: string;
  IsEncrypted: boolean;
  WriteMode: string;
  CompressionType: string;
  ContentLength: number;
  CompressedLength: number;
  EncryptedLength: number;
  CompressionRatioPercent: number;
  CompressionRatioX: number;
  LastAccessUtc: string;
  LastModifiedUtc: string;
  CreatedUtc: string;
}

export interface OllamaEmbeddingsResult {
  Model: string | null;
  Embeddings: number[][];
}

export interface OllamaModelDetail {
  Name: string | null;
  Model: string | null;
  LastModifiedUtc: Date | null;
  Size: number;
  Digest: string | null;
  Details: object | null;
}

export interface OllamaModelResult {
  Models: OllamaModelDetail[];
}

export interface OpenAiEmbeddings {
  Embeddings: number[];
  Index: number;
  ObjectType: string | null;
}

export interface OpenAiEmbeddingsResult {
  Object: string | null;
  Data: OpenAiEmbeddings[];
}

export interface EmbeddingsMap {
  Content: string | null;
  Embeddings: number[];
}

export interface PdfOptions {
  Mode: string;
  ReturnMarkup: boolean;
  RetainArtifact: boolean;
}

export interface Posting {
  term: string;
  absolutePositions: number[];
  relativePositions: number[];
  count: number; // computed property, implementation depends on context
}

export interface ProcessorRequest {
  tenant: object | null;
  pool: object | null;
  bucket: object | null;
  dataRepository: object | null;
  collection: object | null;
  object: object | null;
  metadataRule: object | null;
  embeddingsRule: object | null;
  vectorRepository: object | null;
  graphRepository: object | null;
}

export interface ProcessorResponse {
  GUID: string;
  Success: boolean;
  Async: boolean;
  Timestamp: {
    Start: string;
    TotalMs: number;
    Messages: object;
  };
}

export interface SchemaFilter {
  property: string;
  condition: string;
  value: string;
}

export interface QueryFilter {
  createdAfter: Date | null;
  createdBefore: Date | null;
  terms: string[];
  mimeTypes: string[];
  prefixes: string[];
  suffixes: string[];
  schemaFilters: SchemaFilter[];
}

export interface SchemaResult {
  type: string;
  irregular: boolean | null;
  schema: { [key: string]: string };
  metadata: { [key: string]: any };
  flattened: any[];
  rows: number | null;
  columns: number | null;
  maxDepth: number | null;
  numObjects: number | null;
  numArrays: number | null;
  numKeyValues: number | null;
}

export interface SearchResult {
  Success: boolean;
  Timestamp: any;
  DataFlowRequestGUID: string;
  EndOfResults: boolean;
  ContinuationToken: string;
  RecordsRemaining: number;
  Documents: any[];
  Embeddings: any[];
  MaxResults: number;
  TotalRecords: number;
}

export interface SemanticCell {
  GUID: string;
  cellType: string;
  MD5Hash: string;
  SHA1Hash: string;
  SHA256Hash: string;
  Position: number;
  Length: number;
  Chunks: any[];
  Children: any[];
}

export interface SemanticCellRequest {
  DocumentType: string;
  MinChunkContentLength: number;
  MaxChunkContentLength: number;
  ShiftSize: number;
  Pdf: object;
  MetadataRule: object | null;
  Data: Uint8Array | null;
}

export interface SemanticCellResponse {
  DataFlowRequestGUID: string;
  Success: boolean;
  Timestamp: any;
  Error: object | null;
  SemanticCells: object[] | null;
  Data: Uint8Array | null;
}

export interface SemanticChunk {
  GUID: string;
  MD5Hash: string;
  SHA1Hash: string;
  SHA256Hash: string;
  Position: number;
  Start: number;
  End: number;
  Content: string;
  Length: number;
  Embeddings: number[];
}

export interface SourceDocument {
  GUID: string;
  TenantGUID: string;
  BucketGUID: string;
  CollectionGUID: string;
  ObjectGUID: string;
  ObjectKey: string;
  ObjectVersion: string;
  ContentType: string;
  DocumentType: string;
  SourceUrl: string;
  ContentLength: number;
  MD5Hash: string;
  SHA1Hash: string;
  SHA256Hash: string;
  CreatedUtc: string;
  UdrDocument: any;
}

export interface SourceDocumentStatistics {
  SourceDocument: SourceDocument;
  TermCount: number;
  KeyValueCount: number;
}

export interface StepMetadata {
  GUID: string;
  TenantGUID: string;
  Name: string;
  Exception: string;
  Runtime: string;
  MD5Hash: string;
  SHA1Hash: string;
  SHA256Hash: string;
  DebugAssemblyLoad: boolean;
  VirtualEnvironment: string;
  DependenciesFile: string;
  CreatedUtc: Date;
  Package: string;
  StepArchiveFilename: string;
  StepEntrypointFilename: string;
  StepEntrypointType: string;
  DebugWrapperScript: boolean;
  DebugRequestData: boolean;
  DebugResponseData: boolean;
  ConsoleLogging: boolean;
  ReferenceCount: number;
  TimestampFormat: string;
}

export interface StoragePool {
  Id: number;
  GUID: string;
  TenantGUID: string;
  EncryptionKeyGUID: string;
  Name: string;
  Provider: string;
  WriteMode: string;
  UseSsl: boolean;
  Endpoint: string;
  AccessKey: string;
  SecretKey: string;
  AwsRegion: string;
  AwsBucket: string;
  AwsBaseDomain: string;
  AwsBaseUrl: string;
  DiskDirectory: string;
  AzureAccount: string;
  AzureContainer: string;
  Compress: string;
  EnableReadCaching: boolean;
  CreatedUtc: string;
}

export interface TagMetadata {
  GUID: string;
  TenantGUID: string;
  BucketGUID: string;
  OwnerGUID: string;
  Key: string;
  Value: string;
  CreatedUtc: Date;
}

export interface TenantMetadata {
  GUID: string;
  ParentGUID: string | null;
  AccountGUID: string | null;
  Name: string;
  Region: string;
  s3BaseDomain: string;
  restBaseDomain: string;
  defaultPoolGUID: string;
  active: boolean;
  createdUtc: string;
  accountGUID: string | null;
  isProtected: boolean;
}

export interface Trigger {
  GUID: string;
  TenantGUID: string;
  Name: string;
  TriggerType: string;
  HttpMethod: string;
  HttpUrlPrefix: string;
  CreatedUtc: Date;
}

export interface TypeResult {
  MimeType: string | null;
  Extension: string | null;
  Type: string;
}

export interface SourceDocumentData {
  GUID: string;
  TenantGUID: string;
  BucketGUID: string;
  CollectionGUID: string;
  ObjectGUID: string;
  ObjectKey: string;
  ObjectVersion: string;
  ContentType: string;
  DocumentType: string;
  SourceUrl: string;
  ContentLength: number;
  MD5Hash: string;
  SHA1Hash: string;
  SHA256Hash: string;
  CreatedUtc: string;
  UdrDocument: object;
}
