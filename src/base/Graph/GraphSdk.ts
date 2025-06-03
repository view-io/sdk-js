import { LoggerInstance } from '../../utils/Logger';
import { GenExceptionHandlersInstance } from '../../exception/GenericExceptionHandlers';
import { GraphRepositoryTypeEnum } from '../../enums/GraphRepositoryTypeEnum';
import { GraphNodeTypeEnum } from '../../enums/GraphNodeTypeEnum';
import GraphRepository from '../../models/GraphRepository';
import GraphResult from '../../models/GraphResult';
import TenantMetadata from '../../models/TenantMetadata';
import StoragePool from '../../models/StoragePool';
import BucketMetadata from '../../models/BucketMetadata';
import Collection from '../../models/Collection';
import SourceDocument from '../../models/SourceDocument';
import SemanticCell from '../../models/SemanticCell';
import SemanticChunk from '../../models/SemanticChunk';
import DataRepository from '../../models/DataRepository';
import ObjectMetadata from '../../models/ObjectMetadata';
import LiteGraphDriver from '../../Driver/LiteGraphDriver';
import { SeverityEnum } from '../../enums/SeverityEnum';
const OperatorEnum = {
  Equals: 'Equals',
};
/**
 * Graph SDK service.
 * @module base/GraphSdk
 * @version 0.1.0
 */
export default class GraphSdk {
  /**
   * Constructs a new GraphSdk instance.
   * @alias module:base/GraphSdk
   * @class
   * @param {GraphRepository} repo - The Graph repository object.
   */
  constructor(repo) {
    if (!repo) {
      GenExceptionHandlersInstance.ArgumentNullException('repo');
    }

    this._GraphRepository = new GraphRepository(repo);
    this._TimestampFormat = 'yyyy-MM-dd HH:mm:ss.ffffffz';

    this.TENANT_TYPE = 'Tenant';
    this.TENANT_GUID = 'Tenant.GUID';

    this.POOL_TYPE = 'StoragePool';
    this.POOL_GUID = 'StoragePool.GUID';

    this.BUCKET_TYPE = 'Bucket';
    this.BUCKET_GUID = 'Bucket.GUID';

    this.OBJECT_TYPE = 'Object';
    this.OBJECT_GUID = 'Object.GUID';
    this.OBJECT_TENANT_GUID = 'Object.TenantGUID';
    this.OBJECT_KEY = 'Object.Key';
    this.OBJECT_VERSION = 'Object.Version';

    this.COLLECTION_TYPE = 'Collection';
    this.COLLECTION_GUID = 'Collection.GUID';

    this.SOURCEDOC_TYPE = 'SourceDocument';
    this.SOURCEDOC_GUID = 'SourceDocument.GUID';

    this.SEMCELL_TYPE = 'SemanticCell';
    this.SEMCELL_GUID = 'SemanticCell.GUID';

    this.SEMCHUNK_TYPE = 'SemanticChunk';
    this.SEMCHUNK_GUID = 'SemanticChunk.GUID';

    this.DATAREPOSITORY_TYPE = 'DataRepository';
    this.DATAREPOSITORY_GUID = 'DataRepository.GUID';
    this.initializeGraphDriver();
  }

  // region Public Members

  /**
   * Graph repository.
   * @returns {GraphRepository} The GraphRepository instance.
   */
  get GraphRepository() {
    return this._GraphRepository;
  }

  /**
   * Timestamp format.
   * @returns {string} The timestamp format.
   */
  get TimestampFormat() {
    return this._TimestampFormat;
  }

  /**
   * Set the timestamp format.
   * @param {string} value - The new timestamp format.
   * @throws {Error} Throws an error if the timestamp format is invalid or null.
   */
  set TimestampFormat(value) {
    if (!value || value.trim().length === 0) {
      throw new Error('TimestampFormat cannot be null or empty.');
    }

    const dt = new Date(Date.now()).toISOString();
    if (dt && dt.length > 0) {
      this._TimestampFormat = value;
    } else {
      throw new Error('Invalid TimestampFormat.');
    }
  }

  //endregion

  // region Private Members

  //endregion

  // region General

  /**
   * Dispose of the Graph SDK.
   * @method
   */
  dispose() {
    if (this._GraphDriver) {
      this._GraphDriver.dispose();
    }
  }

  /**
   * Validate connectivity to the graph repository.
   * @method
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if connected, otherwise `false`.
   */
  async validateConnectivity(cancelToken = null) {
    if (this._GraphDriver) {
      return await this._GraphDriver.validateConnectivity(cancelToken);
    }
    return false;
  }

  //endregion
  // region Processing
  /**
   * Insert object metadata into the graph.
   * @param {Object} tenant - The tenant metadata.
   * @param {Object} pool - The storage pool metadata.
   * @param {Object} bucket - The bucket metadata.
   * @param {Object} obj - The object metadata.
   * @param {Object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
   * @throws {Error} If any of the parameters are null.
   */
  insertObjectMetadata = async (tenant, pool, bucket, obj, cancelToken) => {
    if (!tenant) {
      GenExceptionHandlersInstance.ArgumentNullException('tenant');
    }
    if (!pool) {
      GenExceptionHandlersInstance.ArgumentNullException('pool');
    }
    if (!bucket) {
      GenExceptionHandlersInstance.ArgumentNullException('bucket');
    }
    if (!obj) {
      GenExceptionHandlersInstance.ArgumentNullException('obj');
    }

    let result = new GraphResult();
    // region Create-Graph
    result.Graph = await this._GraphDriver.readGraph(this._GraphRepository.graphIdentifier, cancelToken);
    if (!result.Graph) {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms creating graph ' + this._GraphRepository.graphIdentifier
      );
      result.Graph = await this.createGraph(
        this.parseGuid(this._GraphRepository.graphIdentifier),
        this._GraphRepository.Name,
        cancelToken
      );

      if (!result.Graph) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create graph ' + this._GraphRepository.graphIdentifier
        );
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms attached to graph ' + result.Graph.GUID);
    }
    // endregion

    // region Insert-Tenant
    result.Tenant = await this.readTenant(tenant, cancelToken);
    if (!result.Tenant) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for tenant ' + tenant.GUID);
      result.Tenant = await this.createTenant(tenant, cancelToken);
      if (!result.Tenant) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create node for tenant ' + tenant.GUID);
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms re-using tenant ' + tenant.GUID + ' node ' + result.Tenant.GUID
      );
    }
    // endregion

    // region Insert-Storage-Pool
    result.StoragePool = await this.readStoragePool(pool, cancelToken);
    if (!result.StoragePool) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for storage pool ' + pool.GUID);
      result.StoragePool = await this.createStoragePool(pool, cancelToken);
      if (!result.StoragePool) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create node for storage pool ' + pool.GUID
        );
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms re-using storage pool ' + pool.GUID + ' node ' + result.StoragePool.GUID
      );
    }
    // endregion

    // region Storage-Pool-to-Tenant
    const edgesPoolTenant = await this._GraphDriver.edgesBetweenNodes(
      result.Graph.GUID,
      result.StoragePool.GUID,
      result.Tenant.GUID,
      cancelToken
    );

    if (!edgesPoolTenant || edgesPoolTenant.length < 1) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating edge from storage pool to tenant');
      const edgePoolTenant = await this._GraphDriver.createEdge(
        new this.GraphEdge({
          GraphGUID: result.Graph.GUID,
          Name: 'Storage pool to tenant',
          From: result.StoragePool.GUID,
          To: result.Tenant.GUID,
        }),
        cancelToken
      );

      if (!edgePoolTenant) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create edge from storage pool to tenant');
        result.Success = false;
        return result;
      }

      result.Edges.push(edgePoolTenant);
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms re-using edge(s) between storage pool and tenant');
      result.Edges.push(...edgesPoolTenant);
    }
    // endregion

    // region Insert-Bucket
    result.Bucket = await this.readBucket(bucket, cancelToken);
    if (!result.Bucket) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for bucket ' + bucket.GUID);
      result.Bucket = await this.createBucket(bucket, cancelToken);
      if (!result.Bucket) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create node for bucket ' + bucket.GUID);
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms re-using bucket ' + bucket.GUID + ' node ' + result.Bucket.GUID
      );
    }
    // endregion

    // region Bucket-to-Storage-Pool
    const edgesBucketPool = await this._GraphDriver.edgesBetweenNodes(
      result.Graph.GUID,
      result.Bucket.GUID,
      result.StoragePool.GUID,
      cancelToken
    );

    if (!edgesBucketPool || edgesBucketPool.length < 1) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating edge from bucket to storage pool');
      const edgeBucketPool = await this._GraphDriver.createEdge(
        new this.GraphEdge({
          GraphGUID: result.Graph.GUID,
          Name: 'Bucket to storage pool',
          From: result.Bucket.GUID,
          To: result.StoragePool.GUID,
        }),
        cancelToken
      );

      if (!edgeBucketPool) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create edge from bucket to storage pool');
        result.Success = false;
        return result;
      }

      result.Edges.push(edgeBucketPool);
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms re-using edge between bucket and storage pool');
      result.Edges.push(...edgesBucketPool);
    }
    // endregion

    // region Insert-Object
    result.Object = await this.readObjectMetadata(obj, cancelToken);
    if (!result.Object) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for object ' + obj.GUID);
      result.Object = await this.createObjectMetadata(obj, cancelToken);
      if (!result.Object) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create node for object ' + obj.GUID);
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms re-using object ' + obj.GUID + ' node ' + result.Object.GUID
      );
    }
    // endregion

    // region Object-to-Bucket
    const edgesObjectBucket = await this._GraphDriver.edgesBetweenNodes(
      result.Graph.GUID,
      result.Object.GUID,
      result.Bucket.GUID,
      cancelToken
    );

    if (!edgesObjectBucket || edgesObjectBucket.length < 1) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating edge from object to bucket');
      const edgeObjectBucket = await this._GraphDriver.createEdge(
        new this.GraphEdge({
          GraphGUID: result.Graph.GUID,
          Name: 'Object to bucket',
          From: result.Object.GUID,
          To: result.Bucket.GUID,
        }),
        cancelToken
      );

      if (!edgeObjectBucket) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create edge from object to bucket');
        result.Success = false;
        return result;
      }

      result.Edges.push(edgeObjectBucket);
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms re-using edge between object and bucket');
      result.Edges.push(...edgesObjectBucket);
    }
    // endregion

    result.Success = true;
    result.Timestamp.End = new Date();
    result.Timestamp.addMessage(
      result.Timestamp.TotalMs + 'ms finished processing after ' + result.Timestamp.TotalMs + 'ms'
    );
    return result;
  };
  /**
   * Insert object metadata and its associated objects from crawler.
   * @param {Object} tenant - The tenant metadata.
   * @param {Object} repo - The data repository metadata.
   * @param {Object} obj - The object metadata.
   * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
   * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
   * @throws {Error} If any of the parameters are null.
   */
  insertObjectMetadataForCrawler = async (tenant, repo, obj, cancelToken) => {
    if (!tenant) {
      GenExceptionHandlersInstance.ArgumentNullException('tenant');
    }
    if (!repo) {
      GenExceptionHandlersInstance.ArgumentNullException('repo');
    }
    if (!obj) {
      GenExceptionHandlersInstance.ArgumentNullException('obj');
    }

    let result = new GraphResult();

    // region Create-Graph
    result.Graph = await this._GraphDriver.readGraph(this._GraphRepository.graphIdentifier);
    if (!result.Graph) {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms creating graph ' + this._GraphRepository.graphIdentifier
      );
      result.Graph = await this.createGraph(
        this._GraphRepository.graphIdentifier,
        this._GraphRepository.Name,
        cancelToken
      );

      if (!result.Graph) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create graph ' + this._GraphRepository.graphIdentifier
        );
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms attached to graph ' + result.Graph.GUID);
    }
    // endregion

    // region Insert-Tenant
    result.Tenant = await this.readTenant(tenant, cancelToken);
    if (!result.Tenant) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for tenant ' + tenant.GUID);
      result.Tenant = await this.createTenant(tenant, cancelToken);
      if (!result.Tenant) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create node for tenant ' + tenant.GUID);
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms re-using tenant ' + tenant.GUID + ' node ' + result.Tenant.GUID
      );
    }
    // endregion

    // region Insert-Data-Repository
    result.DataRepository = await this.readDataRepository(repo, cancelToken);
    if (!result.DataRepository) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for data repository ' + repo.GUID);
      result.DataRepository = await this.createDataRepository(repo, cancelToken);
      if (!result.DataRepository) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create node for data repository ' + repo.GUID
        );
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms re-using data repository ' + repo.GUID + ' node ' + result.DataRepository.GUID
      );
    }
    // endregion

    // region Data-Repository-to-Tenant
    const edgesRepoTenant = await this._GraphDriver.edgesBetweenNodes(
      result.Graph.GUID,
      result.DataRepository.GUID,
      result.Tenant.GUID,
      cancelToken
    );

    if (!edgesRepoTenant || edgesRepoTenant.length < 1) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating edge from data repository to tenant');
      const edgeRepoTenant = await this._GraphDriver.createEdge(
        new this.GraphEdge({
          GraphGUID: result.Graph.GUID,
          Name: 'Data repository to tenant',
          From: result.DataRepository.GUID,
          To: result.Tenant.GUID,
        }),
        cancelToken
      );

      if (!edgeRepoTenant) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create edge from data repository to tenant'
        );
        result.Success = false;
        return result;
      }

      result.Edges.push(edgeRepoTenant);
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms re-using edge(s) between data repository and tenant');
      result.Edges.push(...edgesRepoTenant);
    }
    // endregion

    // region Insert-Object
    result.Object = await this.readObjectMetadata(obj, cancelToken);
    if (!result.Object) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for object ' + obj.GUID);
      result.Object = await this.createObjectMetadata(obj, cancelToken);
      if (!result.Object) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create node for object ' + obj.GUID);
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms re-using object ' + obj.GUID + ' node ' + result.Object.GUID
      );
    }
    // endregion

    // region Object-to-Data-Repository
    const edgesObjectRepository = await this._GraphDriver.edgesBetweenNodes(
      result.Graph.GUID,
      result.Object.GUID,
      result.DataRepository.GUID,
      cancelToken
    );

    if (!edgesObjectRepository || edgesObjectRepository.length < 1) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating edge from object to data repository');
      const edgeObjectRepository = await this._GraphDriver.createEdge(
        new this.GraphEdge({
          GraphGUID: result.Graph.GUID,
          Name: 'Object to data repository',
          From: result.Object.GUID,
          To: result.DataRepository.GUID,
        }),
        cancelToken
      );

      if (!edgeObjectRepository) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create edge from object to data repository'
        );
        result.Success = false;
        return result;
      }

      result.Edges.push(edgeObjectRepository);
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms re-using edge between object and data repository');
      result.Edges.push(...edgesObjectRepository);
    }
    // endregion

    result.Success = true;
    result.Timestamp.End = new Date();
    result.Timestamp.addMessage(
      result.Timestamp.TotalMs + 'ms finished processing after ' + result.Timestamp.TotalMs + 'ms'
    );
    return result;
  };
  /**
   * Insert source document and its associated objects.
   * @param {Object} tenant - The tenant metadata.
   * @param {Object} collection - The collection metadata.
   * @param {Object} sourceDoc - The source document metadata.
   * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
   * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
   * @throws {Error} If any of the parameters are null.
   */
  insertSourceDocument = async (tenant, collection, sourceDoc, cancelToken) => {
    if (!tenant) {
      GenExceptionHandlersInstance.ArgumentNullException('tenant');
    }
    if (!collection) {
      GenExceptionHandlersInstance.ArgumentNullException('collection');
    }
    if (!sourceDoc) {
      GenExceptionHandlersInstance.ArgumentNullException('sourceDoc');
    }

    let result = new GraphResult();

    // region Create-Graph
    result.Graph = await this._GraphDriver.readGraph(this._GraphRepository.graphIdentifier);
    if (!result.Graph) {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms creating graph ' + this._GraphRepository.graphIdentifier
      );
      result.Graph = await this.createGraph(
        this.parseGuid(this._GraphRepository.graphIdentifier),
        this._GraphRepository.Name,
        cancelToken
      );

      if (!result.Graph) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create graph ' + this._GraphRepository.graphIdentifier
        );
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms attached to graph ' + result.Graph.GUID);
    }
    // endregion

    // region Insert-Tenant
    result.Tenant = await this.readTenant(tenant, cancelToken);
    if (!result.Tenant) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for tenant ' + tenant.GUID);
      result.Tenant = await this.createTenant(tenant, cancelToken);
      if (!result.Tenant) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create node for tenant ' + tenant.GUID);
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms re-using tenant ' + tenant.GUID + ' node ' + result.Tenant.GUID
      );
    }
    // endregion

    // region Insert-Collection
    result.Collection = await this.readCollection(collection, cancelToken);
    if (!result.Collection) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for collection ' + collection.GUID);
      result.Collection = await this.createCollection(collection, cancelToken);
      if (!result.Collection) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create node for collection ' + collection.GUID
        );
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms re-using collection ' + collection.GUID + ' node ' + result.Collection.GUID
      );
    }
    // endregion

    // region Collection-to-Tenant
    const edgesCollTenant = await this._GraphDriver.edgesBetweenNodes(
      result.Graph.GUID,
      result.Collection.GUID,
      result.Tenant.GUID,
      cancelToken
    );

    if (!edgesCollTenant || edgesCollTenant.length < 1) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating edge from collection to tenant');
      const edgeCollTenant = await this._GraphDriver.createEdge(
        new this.GraphEdge({
          GraphGUID: result.Graph.GUID,
          Name: 'Collection to tenant',
          From: result.Collection.GUID,
          To: result.Tenant.GUID,
        }),
        cancelToken
      );

      if (!edgeCollTenant) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms failed to create edge from collection to tenant');
        result.Success = false;
        return result;
      }

      result.Edges.push(edgeCollTenant);
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms re-using edge between collection and tenant');
      result.Edges.push(...edgesCollTenant);
    }
    // endregion

    // region Insert-Source-Document
    result.SourceDocument = await this.readSourceDocument(sourceDoc, cancelToken);
    if (!result.SourceDocument) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating node for source document ' + sourceDoc.GUID);
      sourceDoc.UdrDocument = null;
      result.SourceDocument = await this.createSourceDocument(sourceDoc, cancelToken);
      if (!result.SourceDocument) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create node for source document ' + sourceDoc.GUID
        );
        result.Success = false;
        return result;
      }
    } else {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs +
          'ms re-using source document ' +
          sourceDoc.GUID +
          ' node ' +
          result.SourceDocument.GUID
      );
    }
    // endregion

    // region Source-Document-to-Collection
    const edgesSourceDocColl = await this._GraphDriver.edgesBetweenNodes(
      result.Graph.GUID,
      result.SourceDocument.GUID,
      result.Collection.GUID,
      cancelToken
    );

    if (!edgesSourceDocColl || edgesSourceDocColl.length < 1) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating edge from source document to collection');
      const edgeSourceDocColl = await this._GraphDriver.createEdge(
        new this.GraphEdge({
          GraphGUID: result.Graph.GUID,
          Name: 'Source document to collection',
          From: result.SourceDocument.GUID,
          To: result.Collection.GUID,
        }),
        cancelToken
      );

      if (!edgeSourceDocColl) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms failed to create edge from source document to collection'
        );
        result.Success = false;
        return result;
      }

      result.Edges.push(edgeSourceDocColl);
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms re-using edge between source document and collection');
      result.Edges.push(...edgesSourceDocColl);
    }
    // endregion

    // region Source-Document-to-Object
    if (sourceDoc.ObjectGUID && sourceDoc.ObjectGUID !== '') {
      const obj = await this.readObjectMetadataGuid(sourceDoc.ObjectGUID, cancelToken);
      if (!obj) {
        result.Timestamp.addMessage(
          result.Timestamp.TotalMs + 'ms unable to find referenced object ' + sourceDoc.ObjectGUID
        );
      } else {
        result.Object = obj;

        const edgesSourceDocObj = await this._GraphDriver.edgesBetweenNodes(
          result.Graph.GUID,
          result.SourceDocument.GUID,
          result.Object.GUID,
          cancelToken
        );

        if (!edgesSourceDocObj || edgesSourceDocObj.length < 1) {
          result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms creating edge from source document to object');
          const edgeSourceDocObj = await this._GraphDriver.createEdge(
            new this.GraphEdge({
              GraphGUID: result.Graph.GUID,
              Name: 'Source document to object',
              From: result.SourceDocument.GUID,
              To: result.Object.GUID,
            }),
            cancelToken
          );

          if (!edgeSourceDocObj) {
            result.Timestamp.addMessage(
              result.Timestamp.TotalMs + 'ms failed to create edge from source document to object'
            );
            result.Success = false;
            return result;
          }

          result.Edges.push(edgeSourceDocObj);
        } else {
          result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms re-using edge between source document and object');
          result.Edges.push(...edgesSourceDocObj);
        }
      }
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms no object GUID specified in source document');
    }
    // endregion

    // region Insert-Semantic-Cells (optional part of the original C# code, currently commented out)
    /*
    if (sourceDoc.UdrDocument && sourceDoc.UdrDocument.SemanticCells && sourceDoc.UdrDocument.SemanticCells.length > 0) {
      const semCellResult = await insertSemanticCellsInternal(
        result.Graph,
        result.SourceDocument,
        null,
        sourceDoc.UdrDocument.SemanticCells,
        cancelToken
      );
  
      if (!semCellResult.Success) {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + "ms failure reported during semantic cell processing");
        result.Success = false;
        return result;
      } else {
        result.Timestamp.addMessage(result.Timestamp.TotalMs + "ms successfully attached semantic cells to source document");
      }
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + "ms no semantic cells found in supplied UDR document");
    }
    */
    // endregion

    result.Success = true;
    result.Timestamp.End = new Date();
    result.Timestamp.addMessage(
      result.Timestamp.TotalMs + 'ms finished processing after ' + result.Timestamp.TotalMs + 'ms'
    );
    return result;
  };
  /**
   * Remove object metadata and its associated objects.
   * @param {Object} obj - The object metadata.
   * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
   * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
   * @throws {Error} If the object is null.
   */
  removeObjectMetadata = async (obj, cancelToken) => {
    if (!obj) {
      GenExceptionHandlersInstance.ArgumentNullException('obj');
    }

    let result = new GraphResult();

    // region Retrieve-Graph
    result.Graph = await this._GraphDriver.readGraph(this._GraphRepository.graphIdentifier);
    if (!result.Graph) {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms unknown graph ' + this._GraphRepository.graphIdentifier
      );
      result.Success = false;
      return result;
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms attached to graph ' + result.Graph.GUID);
    }
    // endregion

    // region Retrieve-Object
    const objNode = await this.readObjectMetadata(obj, cancelToken);
    if (!objNode) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms unknown object ' + obj.GUID);
      result.Success = false;
      return result;
    }
    // endregion

    // region Retrieve-Source-Documents
    const objectParents = await this._GraphDriver.getNodeParents(objNode.GraphGUID, objNode.GUID, cancelToken);
    if (objectParents) {
      for (const parent of objectParents) {
        if (parent.Data.Type === this.GraphNodeTypeEnum.SourceDocument) {
          await this.removeSourceDocument(parent, cancelToken);
        }
      }
    }
    // endregion

    // region Delete-Object
    await this._GraphDriver.deleteNode(objNode.GraphGUID, objNode.GUID);
    // endregion

    result.Success = true;
    result.Timestamp.End = new Date();
    result.Timestamp.addMessage(
      result.Timestamp.TotalMs + 'ms finished cleanup after ' + result.Timestamp.TotalMs + 'ms'
    );
    return result;
  };
  /**
   * Remove source document and its associated objects.
   * @param {Object} doc - The source document metadata.
   * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
   * @returns {Promise<GraphResult>} A promise resolving to a GraphResult object.
   * @throws {Error} If the source document is null.
   */
  removeSourceDocument = async (doc, cancelToken) => {
    if (!doc) {
      GenExceptionHandlersInstance.ArgumentNullException('doc');
    }

    let result = new GraphResult();

    // region Retrieve-Graph
    result.Graph = await this._GraphDriver.readGraph(this._GraphRepository.graphIdentifier);
    if (!result.Graph) {
      result.Timestamp.addMessage(
        result.Timestamp.TotalMs + 'ms unknown graph ' + this._GraphRepository.graphIdentifier
      );
      result.Success = false;
      return result;
    } else {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms attached to graph ' + result.Graph.GUID);
    }
    // endregion

    // region Retrieve-Source-Document
    const docNode = await this.readSourceDocument(doc, cancelToken);
    if (!docNode) {
      result.Timestamp.addMessage(result.Timestamp.TotalMs + 'ms unknown source document ' + doc.GUID);
      result.Success = false;
      return result;
    }

    // region Remove Source Document Recursively (if necessary)
    await this.removeSourceDocument(docNode, cancelToken); // If the source document has related data, recurse
    // endregion
    // endregion

    result.Success = true;
    result.Timestamp.End = new Date();
    result.Timestamp.addMessage(
      result.Timestamp.TotalMs + 'ms finished cleanup after ' + result.Timestamp.TotalMs + 'ms'
    );
    return result;
  };
  //end region

  //Exists-by-Object
  /**
   * Check if a tenant exists.
   * @param {Object} tenant - The tenant metadata object.
   * @param {Object} [cancelToken] - Optional cancellation token to abort the operation.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the tenant exists, otherwise `false`.
   * @throws {Error} If the tenant argument is null.
   */
  tenantExists = async (tenant, cancelToken) => {
    if (!tenant) {
      throw new Error('Tenant cannot be null or undefined.');
    }

    const TENANT_TYPE = 'tenant'; // Example value for tenant type (adjust if necessary)
    const TENANT_GUID = 'guid'; // Example value for tenant GUID field (adjust if necessary)

    return await this.existsInternal(TENANT_TYPE, TENANT_GUID, tenant.GUID, cancelToken);
  };
  /**
   * Check if a storage pool exists.
   *
   * @param {Object} pool - The storage pool metadata object.
   * @param {string} pool.GUID - The GUID of the storage pool.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the pool exists, otherwise `false`.
   * @throws {Error} If the pool is null or undefined.
   */
  storagePoolExists = async (pool, cancelToken) => {
    if (!pool) {
      throw new Error('Pool cannot be null or undefined.');
    }

    const POOL_TYPE = 'pool'; // Example value for pool type (adjust as needed)
    const POOL_GUID = 'guid'; // Example value for pool GUID field (adjust as needed)

    // Call the internal method to check if the storage pool exists
    return await this.existsInternal(POOL_TYPE, POOL_GUID, pool.GUID, cancelToken);
  };
  /**
   * Check if a bucket exists.
   *
   * @param {Object} bucket - The bucket metadata object.
   * @param {string} bucket.GUID - The GUID of the bucket.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the bucket exists, otherwise `false`.
   * @throws {Error} If the bucket is null or undefined.
   */
  bucketExists = async (bucket, cancelToken) => {
    if (!bucket) {
      throw new Error('Bucket cannot be null or undefined.');
    }

    const BUCKET_TYPE = 'bucket'; // Example value for bucket type (adjust as needed)
    const BUCKET_GUID = 'guid'; // Example value for bucket GUID field (adjust as needed)

    // Call the internal method to check if the bucket exists
    return await this.existsInternal(BUCKET_TYPE, BUCKET_GUID, bucket.GUID, cancelToken);
  };
  /**
   * Check if an object exists.
   *
   * @param {Object} obj - The object metadata.
   * @param {string} obj.GUID - The GUID of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the object exists, otherwise `false`.
   * @throws {Error} If the object is null or undefined.
   */
  objectMetadataExists = async (obj, cancelToken) => {
    if (!obj) {
      throw new Error('Object cannot be null or undefined.');
    }

    const OBJECT_TYPE = 'object'; // Example value for object type (adjust as needed)
    const OBJECT_GUID = 'guid'; // Example value for object GUID field (adjust as needed)

    // Call the internal method to check if the object exists
    return await this.existsInternal(OBJECT_TYPE, OBJECT_GUID, obj.GUID, cancelToken);
  };
  /**
   * Check if a collection exists.
   *
   * @param {Object} coll - The collection metadata.
   * @param {string} coll.GUID - The GUID of the collection.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the collection exists, otherwise `false`.
   * @throws {Error} If the collection is null or undefined.
   */
  collectionExists = async (coll, cancelToken) => {
    if (!coll) {
      throw new Error('Collection cannot be null or undefined.');
    }

    const COLLECTION_TYPE = 'collection'; // Example value for collection type (adjust as needed)
    const COLLECTION_GUID = 'guid'; // Example value for collection GUID field (adjust as needed)

    // Call the internal method to check if the collection exists
    return await this.existsInternal(COLLECTION_TYPE, COLLECTION_GUID, coll.GUID, cancelToken);
  };
  /**
   * Check if a source document exists.
   *
   * @param {Object} doc - The source document metadata.
   * @param {string} doc.GUID - The GUID of the source document.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the source document exists, otherwise `false`.
   * @throws {Error} If the source document is null or undefined.
   */
  sourceDocumentExists = async (doc, cancelToken) => {
    if (!doc) {
      throw new Error('Source document cannot be null or undefined.');
    }

    const SOURCEDOC_TYPE = 'source_document'; // Example value for source document type (adjust as needed)
    const SOURCEDOC_GUID = 'guid'; // Example value for source document GUID field (adjust as needed)

    // Call the internal method to check if the source document exists
    return await this.existsInternal(SOURCEDOC_TYPE, SOURCEDOC_GUID, doc.GUID, cancelToken);
  };
  /**
   * Check if a semantic cell exists.
   *
   * @param {Object} cell - The semantic cell metadata.
   * @param {string} cell.GUID - The GUID of the semantic cell.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the semantic cell exists, otherwise `false`.
   * @throws {Error} If the semantic cell is null or undefined.
   */
  semanticCellExists = async (cell, cancelToken) => {
    if (!cell) {
      throw new Error('Semantic cell cannot be null or undefined.');
    }

    const SEMCELL_TYPE = 'semantic_cell'; // Example value for semantic cell type (adjust as needed)
    const SEMCELL_GUID = 'guid'; // Example value for semantic cell GUID field (adjust as needed)

    // Call the internal method to check if the semantic cell exists
    return await this.existsInternal(SEMCELL_TYPE, SEMCELL_GUID, cell.GUID, cancelToken);
  };
  /**
   * Check if a semantic chunk exists.
   *
   * @param {Object} chunk - The semantic chunk metadata.
   * @param {string} chunk.GUID - The GUID of the semantic chunk.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the semantic chunk exists, otherwise `false`.
   * @throws {Error} If the semantic chunk is null or undefined.
   */
  semanticChunkExists = async (chunk, cancelToken) => {
    if (!chunk) {
      throw new Error('Semantic chunk cannot be null or undefined.');
    }

    const SEMCHUNK_TYPE = 'semantic_chunk'; // Example value for semantic chunk type (adjust as needed)
    const SEMCHUNK_GUID = 'guid'; // Example value for semantic chunk GUID field (adjust as needed)

    // Call the internal method to check if the semantic chunk exists
    return await this.existsInternal(SEMCHUNK_TYPE, SEMCHUNK_GUID, chunk.GUID, cancelToken);
  };
  /**
   * Check if a data repository exists.
   *
   * @param {Object} repo - The data repository metadata.
   * @param {string} repo.GUID - The GUID of the data repository.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the data repository exists, otherwise `false`.
   * @throws {Error} If the data repository is null or undefined.
   */
  dataRepositoryExists = async (repo, cancelToken) => {
    if (!repo) {
      throw new Error('Data repository cannot be null or undefined.');
    }

    const DATAREPOSITORY_TYPE = 'data_repository'; // Example value for data repository type (adjust as needed)
    const DATAREPOSITORY_GUID = 'guid'; // Example value for data repository GUID field (adjust as needed)

    // Call the internal method to check if the data repository exists
    return await this.existsInternal(DATAREPOSITORY_TYPE, DATAREPOSITORY_GUID, repo.GUID, cancelToken);
  };

  //end region
  //region Exists-by-GUID
  /**
   * Check if a tenant exists by GUID.
   *
   * @param {string} guid - The GUID of the tenant.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the tenant exists, otherwise `false`.
   * @throws {Error} If the GUID is null or empty.
   */
  tenantExistsByGUID = async (guid, cancelToken) => {
    if (!guid) {
      throw new Error('GUID cannot be null or empty.');
    }
    return await this.existsInternal(this.TENANT_TYPE, this.TENANT_GUID, guid, cancelToken);
  };

  /**
   * Check if a storage pool exists by GUID.
   *
   * @param {string} guid - The GUID of the storage pool.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the storage pool exists, otherwise `false`.
   * @throws {Error} If the GUID is null or empty.
   */
  storagePoolExistsByGUID = async (guid, cancelToken) => {
    if (!guid) {
      throw new Error('GUID cannot be null or empty.');
    }
    return await this.existsInternal(this.POOL_TYPE, this.POOL_GUID, guid, cancelToken);
  };

  /**
   * Check if a bucket exists by GUID.
   *
   * @param {string} guid - The GUID of the bucket.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the bucket exists, otherwise `false`.
   * @throws {Error} If the GUID is null or empty.
   */
  bucketExistsByGUID = async (guid, cancelToken) => {
    if (!guid) {
      throw new Error('GUID cannot be null or empty.');
    }
    return await this.existsInternal(this.BUCKET_TYPE, this.BUCKET_GUID, guid, cancelToken);
  };

  /**
   * Check if an object exists by GUID.
   *
   * @param {string} guid - The GUID of the object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the object exists, otherwise `false`.
   * @throws {Error} If the GUID is null or empty.
   */
  objectMetadataExistsByGUID = async (guid, cancelToken) => {
    if (!guid) {
      throw new Error('GUID cannot be null or empty.');
    }
    return await this.existsInternal(this.OBJECT_TYPE, this.OBJECT_GUID, guid, cancelToken);
  };

  /**
   * Check if a collection exists by GUID.
   *
   * @param {string} guid - The GUID of the collection.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the collection exists, otherwise `false`.
   * @throws {Error} If the GUID is null or empty.
   */
  collectionExistsByGUID = async (guid, cancelToken) => {
    if (!guid) {
      throw new Error('GUID cannot be null or empty.');
    }
    return await this.existsInternal(this.COLLECTION_TYPE, this.COLLECTION_GUID, guid, cancelToken);
  };

  /**
   * Check if a source document exists by GUID.
   *
   * @param {string} guid - The GUID of the source document.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the source document exists, otherwise `false`.
   * @throws {Error} If the GUID is null or empty.
   */
  sourceDocumentExistsByGUID = async (guid, cancelToken) => {
    if (!guid) {
      throw new Error('GUID cannot be null or empty.');
    }
    return await this.existsInternal(this.SOURCEDOC_TYPE, this.SOURCEDOC_GUID, guid, cancelToken);
  };

  /**
   * Check if a semantic cell exists by GUID.
   *
   * @param {string} guid - The GUID of the semantic cell.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the semantic cell exists, otherwise `false`.
   * @throws {Error} If the GUID is null or empty.
   */
  semanticCellExistsByGUID = async (guid, cancelToken) => {
    if (!guid) {
      throw new Error('GUID cannot be null or empty.');
    }
    return await this.existsInternal(this.SEMCELL_TYPE, this.SEMCELL_GUID, guid, cancelToken);
  };

  /**
   * Check if a semantic chunk exists by GUID.
   *
   * @param {string} guid - The GUID of the semantic chunk.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the semantic chunk exists, otherwise `false`.
   * @throws {Error} If the GUID is null or empty.
   */
  semanticChunkExistsByGUID = async (guid, cancelToken) => {
    if (!guid) {
      throw new Error('GUID cannot be null or empty.');
    }
    return await this.existsInternal(this.SEMCHUNK_TYPE, this.SEMCHUNK_GUID, guid, cancelToken);
  };

  /**
   * Check if a data repository exists by GUID.
   *
   * @param {string} guid - The GUID of the data repository.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<boolean>} A promise resolving to `true` if the data repository exists, otherwise `false`.
   * @throws {Error} If the GUID is null or empty.
   */
  dataRepositoryExistsByGUID = async (guid, cancelToken) => {
    if (!guid) {
      throw new Error('GUID cannot be null or empty.');
    }
    return await this.existsInternal(this.DATAREPOSITORY_TYPE, this.DATAREPOSITORY_GUID, guid, cancelToken);
  };

  //end region
  //region Create
  /**
   * Create a graph.
   *
   * @param {string} guid - The GUID of the graph.
   * @param {string} name - The name of the graph.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<Graph>} A promise resolving to the created Graph object.
   * @throws {Error} If the name is null or empty, it defaults to a timestamp-based name.
   */
  createGraph = async (guid, name, cancelToken) => {
    if (!name) {
      name = 'Graph created at ' + new Date().toISOString();
    }
    return await this._GraphDriver.createGraph(guid, name, cancelToken);
  };

  /**
   * Create a tenant.
   *
   * @param {TenantMetadata} tenant - The tenant metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
   * @throws {Error} If the tenant object is null.
   */
  createTenant = async (tenant, cancelToken) => {
    if (!tenant) {
      throw new Error('Tenant object cannot be null.');
    }
    return await this.createNodeInternal(GraphNodeTypeEnum.Tenant, 'Tenant ' + tenant.Name, tenant, cancelToken);
  };

  createNodeInternal(nodeType, name, data, token = null) {
    const node = {
      GraphGUID: this.GraphRepository.graphIdentifier, // Assume it's already a string
      Name: name,
      Data: {
        Type: nodeType,
      },
    };

    if (data) {
      switch (nodeType) {
        case GraphNodeTypeEnum.Tenant:
          node.Data.Tenant = data; // Assuming data is of TenantMetadata type
          break;
        case GraphNodeTypeEnum.StoragePool:
          node.Data.StoragePool = data;
          break;
        case GraphNodeTypeEnum.Bucket:
          node.Data.Bucket = data;
          break;
        case GraphNodeTypeEnum.Object:
          node.Data.Object = data;
          break;
        case GraphNodeTypeEnum.Collection:
          node.Data.Collection = data;
          break;
        case GraphNodeTypeEnum.SourceDocument:
          node.Data.SourceDocument = data;
          break;
        case GraphNodeTypeEnum.VectorRepository:
          node.Data.VectorRepository = data;
          break;
        case GraphNodeTypeEnum.SemanticCell:
          node.Data.SemanticCell = data;
          break;
        case GraphNodeTypeEnum.SemanticChunk:
          node.Data.SemanticChunk = data;
          break;
        case GraphNodeTypeEnum.DataRepository:
          node.Data.DataRepository = data;
          break;
        default:
          throw new Error(`Unsupported node type: ${nodeType}`);
      }
    }
    return this._GraphDriver.createNode(node, token);
  }
  /**
   * Create a storage pool.
   *
   * @param {StoragePool} pool - The storage pool metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
   * @throws {Error} If the pool object is null.
   */
  createStoragePool = async (pool, cancelToken) => {
    if (!pool) {
      throw new Error('Storage pool object cannot be null.');
    }
    return await this.createNodeInternal(GraphNodeTypeEnum.StoragePool, 'Storage pool ' + pool.Name, pool, cancelToken);
  };

  /**
   * Create a bucket.
   *
   * @param {BucketMetadata} bucket - The bucket metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
   * @throws {Error} If the bucket object is null.
   */
  createBucket = async (bucket, cancelToken) => {
    if (!bucket) {
      throw new Error('Bucket object cannot be null.');
    }
    return await this.createNodeInternal(GraphNodeTypeEnum.Bucket, 'Bucket ' + bucket.Name, bucket, cancelToken);
  };

  /**
   * Create an object.
   *
   * @param {ObjectMetadata} obj - The object metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
   * @throws {Error} If the object metadata is null.
   */
  createObjectMetadata = async (obj, cancelToken) => {
    if (!obj) {
      throw new Error('Object metadata cannot be null.');
    }
    return await this.createNodeInternal(
      GraphNodeTypeEnum.Object,
      'Object ' + obj.Key + ':' + obj.Version,
      obj,
      cancelToken
    );
  };

  /**
   * Create a collection.
   *
   * @param {Collection} coll - The collection metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
   * @throws {Error} If the collection object is null.
   */
  createCollection = async (coll, cancelToken) => {
    if (!coll) {
      throw new Error('Collection object cannot be null.');
    }
    return await this.createNodeInternal(GraphNodeTypeEnum.Collection, 'Collection ' + coll.Name, coll, cancelToken);
  };

  /**
   * Create a source document.
   *
   * @param {SourceDocument} doc - The source document metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
   * @throws {Error} If the source document object is null.
   */
  createSourceDocument = async (doc, cancelToken) => {
    if (!doc) {
      throw new Error('Source document object cannot be null.');
    }
    return await this.createNodeInternal(
      GraphNodeTypeEnum.SourceDocument,
      'Source document ' + doc.GUID,
      doc,
      cancelToken
    );
  };

  /**
   * Create a semantic cell.
   *
   * @param {SemanticCell} cell - The semantic cell metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
   * @throws {Error} If the semantic cell object is null.
   */
  createSemanticCell = async (cell, cancelToken) => {
    if (!cell) {
      throw new Error('Semantic cell object cannot be null.');
    }
    return await this.createNodeInternal(
      GraphNodeTypeEnum.SemanticCell,
      'Semantic cell ' + cell.GUID,
      cell,
      cancelToken
    );
  };

  /**
   * Create a semantic chunk.
   *
   * @param {SemanticChunk} chunk - The semantic chunk metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
   * @throws {Error} If the semantic chunk object is null.
   */
  createSemanticChunk = async (chunk, cancelToken) => {
    if (!chunk) {
      throw new Error('Semantic chunk object cannot be null.');
    }
    return await this.createNodeInternal(GraphNodeTypeEnum.SemanticChunk, 'Chunk ' + chunk.GUID, chunk, cancelToken);
  };

  /**
   * Create a data repository.
   *
   * @param {DataRepository} repo - The data repository metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the created GraphNode.
   * @throws {Error} If the data repository object is null.
   */
  createDataRepository = async (repo, cancelToken) => {
    if (!repo) {
      throw new Error('Data repository object cannot be null.');
    }
    return await this.createNodeInternal(
      GraphNodeTypeEnum.DataRepository,
      'Data repository ' + repo.Name,
      repo,
      cancelToken
    );
  };

  /**
   * Read a tenant graph node.
   *
   * @param {TenantMetadata} tenant - The tenant metadata object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
   * @throws {Error} If the tenant object is null.
   */
  readTenant = async (tenant, cancelToken) => {
    if (!tenant) throw new Error('Tenant object cannot be null.');
    return await this.readInternal(this.TENANT_TYPE, this.TENANT_GUID, tenant.GUID, cancelToken);
  };

  /**
   * Read a storage pool graph node.
   *
   * @param {StoragePool} pool - The storage pool metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
   * @throws {Error} If the pool object is null.
   */
  readStoragePool = async (pool, cancelToken) => {
    if (!pool) throw new Error('Storage pool object cannot be null.');
    return await this.readInternal(this.POOL_TYPE, this.POOL_GUID, pool.GUID, cancelToken);
  };

  /**
   * Read a bucket graph node.
   *
   * @param {BucketMetadata} bucket - The bucket metadata object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
   * @throws {Error} If the bucket object is null.
   */
  readBucket = async (bucket, cancelToken) => {
    if (!bucket) throw new Error('Bucket object cannot be null.');
    return await this.readInternal(this.BUCKET_TYPE, this.BUCKET_GUID, bucket.GUID, cancelToken);
  };

  /**
   * Read an object node.
   *
   * @param {ObjectMetadata} obj - The object metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
   * @throws {Error} If the object metadata is null or invalid.
   */
  readObjectMetadata = async (obj, cancelToken) => {
    if (!obj) throw new Error('Object metadata cannot be null.');

    if (obj.Key && obj.Version) {
      const filter = {
        OBJECT_TENANT_GUID: obj.TenantGUID,
        OBJECT_KEY: obj.Key,
        OBJECT_VERSION: obj.Version,
      };
      const nodes = await this.readObjectMetadataFilter(filter, cancelToken);
      return nodes && nodes.length > 0 ? nodes[0] : null;
    } else {
      return await this.readInternal(this.OBJECT_TYPE, this.OBJECT_GUID, obj.GUID, cancelToken);
    }
  };

  /**
   * Read a collection node.
   *
   * @param {Collection} coll - The collection metadata object.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
   * @throws {Error} If the collection object is null.
   */
  readCollection = async (coll, cancelToken) => {
    if (!coll) throw new Error('Collection object cannot be null.');
    return await this.readInternal(this.COLLECTION_TYPE, this.COLLECTION_GUID, coll.GUID, cancelToken);
  };

  /**
   * Read a source document node.
   *
   * @param {SourceDocument} doc - The source document metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
   * @throws {Error} If the source document object is null.
   */
  readSourceDocument = async (doc, cancelToken) => {
    if (!doc) throw new Error('Source document object cannot be null.');
    return await this.readInternal(this.SOURCEDOC_TYPE, this.SOURCEDOC_GUID, doc.GUID, cancelToken);
  };

  /**
   * Read a semantic cell node.
   *
   * @param {SemanticCell} cell - The semantic cell metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
   * @throws {Error} If the semantic cell object is null.
   */
  readSemanticCell = async (cell, cancelToken) => {
    if (!cell) throw new Error('Semantic cell object cannot be null.');
    return await this.readInternal(this.SEMCELL_TYPE, this.SEMCELL_GUID, cell.GUID, cancelToken);
  };

  /**
   * Read a semantic chunk node.
   *
   * @param {SemanticChunk} chunk - The semantic chunk metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
   * @throws {Error} If the semantic chunk object is null.
   */
  readSemanticChunk = async (chunk, cancelToken) => {
    if (!chunk) throw new Error('Semantic chunk object cannot be null.');
    return await this.readInternal(this.SEMCHUNK_TYPE, this.SEMCHUNK_GUID, chunk.GUID, cancelToken);
  };

  /**
   * Read a data repository node.
   *
   * @param {DataRepository} repo - The data repository metadata.
   * @param {object} [cancelToken] - Optional object with an `abort` method to cancel the request.
   * @returns {Promise<GraphNode>} A promise resolving to the retrieved GraphNode.
   * @throws {Error} If the data repository object is null.
   */
  readDataRepository = async (repo, cancelToken) => {
    if (!repo) throw new Error('Data repository object cannot be null.');
    return await this.readInternal(this.DATAREPOSITORY_TYPE, this.DATAREPOSITORY_GUID, repo.GUID, cancelToken);
  };

  //end region
  //region Read-by-GUID
  /**
   * Read a tenant graph node.
   *
   * @param {string} guid - The GUID of the tenant.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
   */
  readTenantGuid = async (guid, cancelToken) => {
    if (!guid) return null;
    return await this.readInternal(this.TENANT_TYPE, this.TENANT_GUID, guid, cancelToken);
  };

  /**
   * Read a storage pool graph node.
   *
   * @param {string} guid - The GUID of the storage pool.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
   */
  readStoragePoolGuid = async (guid, cancelToken) => {
    if (!guid) return null;
    return await this.readInternal(this.POOL_TYPE, this.POOL_GUID, guid, cancelToken);
  };

  /**
   * Read a bucket graph node.
   *
   * @param {string} guid - The GUID of the bucket.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
   */
  readBucketGuid = async (guid, cancelToken) => {
    if (!guid) return null;
    return await this.readInternal(this.BUCKET_TYPE, this.BUCKET_GUID, guid, cancelToken);
  };

  /**
   * Read an object metadata node.
   *
   * @param {string} guid - The GUID of the object.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
   */
  readObjectMetadataGuid = async (guid, cancelToken) => {
    if (!guid) return null;
    return await this.readInternal(this.OBJECT_TYPE, this.OBJECT_GUID, guid, cancelToken);
  };

  /**
   * Read a collection node.
   *
   * @param {string} guid - The GUID of the collection.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
   */
  readCollectionGuid = async (guid, cancelToken) => {
    if (!guid) return null;
    return await this.readInternal(this.COLLECTION_TYPE, this.COLLECTION_GUID, guid, cancelToken);
  };

  /**
   * Read a source document node.
   *
   * @param {string} guid - The GUID of the source document.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
   */
  readSourceDocumentGuid = async (guid, cancelToken) => {
    if (!guid) return null;
    return await this.readInternal(this.SOURCEDOC_TYPE, this.SOURCEDOC_GUID, guid, cancelToken);
  };

  /**
   * Read a semantic cell node.
   *
   * @param {string} guid - The GUID of the semantic cell.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
   */
  readSemanticCellGuid = async (guid, cancelToken) => {
    if (!guid) return null;
    return await this.readInternal(this.SEMCELL_TYPE, this.SEMCELL_GUID, guid, cancelToken);
  };

  /**
   * Read a semantic chunk node.
   *
   * @param {string} guid - The GUID of the semantic chunk.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
   */
  readSemanticChunkGuid = async (guid, cancelToken) => {
    if (!guid) return null;
    return await this.readInternal(this.SEMCHUNK_TYPE, this.SEMCHUNK_GUID, guid, cancelToken);
  };

  /**
   * Read a data repository node.
   *
   * @param {string} guid - The GUID of the data repository.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode>} A promise resolving to the GraphNode, or null if GUID is empty.
   */
  readDataRepositoryGuid = async (guid, cancelToken) => {
    if (!guid) return null;
    return await this.readInternal(this.DATAREPOSITORY_TYPE, this.DATAREPOSITORY_GUID, guid, cancelToken);
  };

  //endregion
  //region Read-Many
  /**
   * Read tenants.
   *
   * @param {object} [filter] - Optional filter for searching tenants.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
   */
  readTenants = async (filter = null, cancelToken) => {
    return await this.searchInternal(this.TENANT_TYPE, filter, cancelToken);
  };

  /**
   * Read storage pools.
   *
   * @param {object} [filter] - Optional filter for searching storage pools.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
   */
  readStoragePools = async (filter = null, cancelToken) => {
    return await this.searchInternal(this.POOL_TYPE, filter, cancelToken);
  };

  /**
   * Read buckets.
   *
   * @param {object} [filter] - Optional filter for searching buckets.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
   */
  readBuckets = async (filter = null, cancelToken) => {
    return await this.searchInternal(this.BUCKET_TYPE, filter, cancelToken);
  };

  /**
   * Read objects.
   *
   * @param {object} [filter] - Optional filter for searching objects.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
   */
  readObjectMetadataFilter = async (filter = null, cancelToken) => {
    return await this.searchInternal(this.OBJECT_TYPE, filter, cancelToken);
  };

  /**
   * Read collections.
   *
   * @param {object} [filter] - Optional filter for searching collections.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
   */
  readCollections = async (filter = null, cancelToken) => {
    return await this.searchInternal(this.COLLECTION_TYPE, filter, cancelToken);
  };

  /**
   * Read source documents.
   *
   * @param {object} [filter] - Optional filter for searching source documents.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
   */
  readSourceDocuments = async (filter = null, cancelToken) => {
    return await this.searchInternal(this.SOURCEDOC_TYPE, filter, cancelToken);
  };

  /**
   * Read semantic cells.
   *
   * @param {object} [filter] - Optional filter for searching semantic cells.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
   */
  readSemanticCells = async (filter = null, cancelToken) => {
    return await this.searchInternal(this.SEMCELL_TYPE, filter, cancelToken);
  };

  /**
   * Read semantic chunks.
   *
   * @param {object} [filter] - Optional filter for searching semantic chunks.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
   */
  readSemanticChunks = async (filter = null, cancelToken) => {
    return await this.searchInternal(this.SEMCHUNK_TYPE, filter, cancelToken);
  };

  /**
   * Read data repositories.
   *
   * @param {object} [filter] - Optional filter for searching data repositories.
   * @param {object} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<Array<GraphNode>>} A promise resolving to an array of GraphNodes.
   */
  readDataRepositories = async (filter = null, cancelToken) => {
    return await this.searchInternal(this.DATAREPOSITORY_TYPE, filter, cancelToken);
  };

  //endregion
  //region Update

  // TBD

  //endregion
  //region Delete-by-Object
  /**
   * Delete a tenant.
   *
   * @param {TenantMetadata} tenant - The tenant to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteTenant = async (tenant, cancelToken) => {
    if (!tenant) throw new Error('Tenant is required');
    await this.deleteInternalObj(tenant, cancelToken);
  };

  /**
   * Delete a storage pool.
   *
   * @param {StoragePool} pool - The storage pool to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteStoragePool = async (pool, cancelToken) => {
    if (!pool) throw new Error('Storage pool is required');
    await this.deleteInternalObj(pool, cancelToken);
  };

  /**
   * Delete a bucket.
   *
   * @param {BucketMetadata} bucket - The bucket to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteBucket = async (bucket, cancelToken) => {
    if (!bucket) throw new Error('Bucket is required');
    await this.deleteInternalObj(bucket, cancelToken);
  };

  /**
   * Delete an object.
   *
   * @param {ObjectMetadata} obj - The object to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteObjectMetadata = async (obj, cancelToken) => {
    if (!obj) throw new Error('Object is required');
    await this.deleteInternalObj(obj, cancelToken);
  };

  /**
   * Delete a collection.
   *
   * @param {Collection} coll - The collection to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteCollection = async (coll, cancelToken) => {
    if (!coll) throw new Error('Collection is required');
    await this.deleteInternalObj(coll, cancelToken);
  };

  /**
   * Delete a source document.
   *
   * @param {SourceDocument} doc - The source document to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteSourceDocument = async (doc, cancelToken) => {
    if (!doc) throw new Error('Source document is required');
    await this.deleteInternalObj(doc, cancelToken);
  };

  /**
   * Delete a semantic cell.
   *
   * @param {SemanticCell} cell - The semantic cell to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteSemanticCell = async (cell, cancelToken) => {
    if (!cell) throw new Error('Semantic cell is required');
    await this.deleteInternalObj(cell, cancelToken);
  };

  /**
   * Delete a semantic chunk.
   *
   * @param {SemanticChunk} chunk - The semantic chunk to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteSemanticChunk = async (chunk, cancelToken) => {
    if (!chunk) throw new Error('Semantic chunk is required');
    await this.deleteInternalObj(chunk, cancelToken);
  };

  /**
   * Delete a data repository.
   *
   * @param {DataRepository} repo - The data repository to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteDataRepository = async (repo, cancelToken) => {
    if (!repo) throw new Error('Data repository is required');
    await this.deleteInternalObj(repo, cancelToken);
  };

  //endregion
  //region Delete-by-GUID
  /**
   * Delete a tenant by GUID.
   *
   * @param {string} guid - The GUID of the tenant to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteTenantGuid = async (guid, cancelToken) => {
    if (!guid) return; // If GUID is empty, do nothing
    await this.deleteInternal('TENANT_TYPE', 'TENANT_GUID', guid, cancelToken);
  };

  /**
   * Delete a storage pool by GUID.
   *
   * @param {string} guid - The GUID of the storage pool to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteStoragePoolGuid = async (guid, cancelToken) => {
    if (!guid) return; // If GUID is empty, do nothing
    await this.deleteInternal('POOL_TYPE', 'POOL_GUID', guid, cancelToken);
  };

  /**
   * Delete a bucket by GUID.
   *
   * @param {string} guid - The GUID of the bucket to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteBucketGuid = async (guid, cancelToken) => {
    if (!guid) return; // If GUID is empty, do nothing
    await this.deleteInternal('BUCKET_TYPE', 'BUCKET_GUID', guid, cancelToken);
  };

  /**
   * Delete an object by GUID.
   *
   * @param {string} guid - The GUID of the object to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteObjectMetadataGuid = async (guid, cancelToken) => {
    if (!guid) return; // If GUID is empty, do nothing
    await this.deleteInternal('OBJECT_TYPE', 'OBJECT_GUID', guid, cancelToken);
  };

  /**
   * Delete a collection by GUID.
   *
   * @param {string} guid - The GUID of the collection to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteCollectionGuid = async (guid, cancelToken) => {
    if (!guid) return; // If GUID is empty, do nothing
    await this.deleteInternal('COLLECTION_TYPE', 'COLLECTION_GUID', guid, cancelToken);
  };

  /**
   * Delete a source document by GUID.
   *
   * @param {string} guid - The GUID of the source document to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteSourceDocumentGuid = async (guid, cancelToken) => {
    if (!guid) return; // If GUID is empty, do nothing
    await this.deleteInternal('SOURCEDOC_TYPE', 'SOURCEDOC_GUID', guid, cancelToken);
  };

  /**
   * Delete a semantic cell by GUID.
   *
   * @param {string} guid - The GUID of the semantic cell to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteSemanticCellGuid = async (guid, cancelToken) => {
    if (!guid) return; // If GUID is empty, do nothing
    await this.deleteInternal('SEMCELL_TYPE', 'SEMCELL_GUID', guid, cancelToken);
  };

  /**
   * Delete a semantic chunk by GUID.
   *
   * @param {string} guid - The GUID of the semantic chunk to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteSemanticChunkGuid = async (guid, cancelToken) => {
    if (!guid) return; // If GUID is empty, do nothing
    await this.deleteInternal('SEMCHUNK_TYPE', 'SEMCHUNK_GUID', guid, cancelToken);
  };

  /**
   * Delete a data repository by GUID.
   *
   * @param {string} guid - The GUID of the data repository to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
   */
  deleteDataRepositoryGuid = async (guid, cancelToken) => {
    if (!guid) return; // If GUID is empty, do nothing
    await this.deleteInternal('DATAREPOSITORY_TYPE', 'DATAREPOSITORY_GUID', guid, cancelToken);
  };

  //endregion
  //region edges
  /**
   * Get edges to a given graph node.
   *
   * @param {GraphNode} node - The graph node to retrieve edges for.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<GraphEdge[]>} A promise that resolves to a list of graph edges.
   */
  getEdgesTo = async (node, cancelToken) => {
    // Ensure node is valid before proceeding
    if (!node || !node.GraphGUID || !node.GUID) {
      throw new Error('Invalid node provided.');
    }

    try {
      return await this._GraphDriver.edgesToNode(node.GraphGUID, node.GUID, cancelToken);
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Error, 'Error retrieving edges to node:', error);
      throw error; // Re-throw error to handle it upstream
    }
  };

  /**
   * Get edges from a given graph node.
   *
   * @param {GraphNode} node - The graph node to retrieve edges for.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token.
   * @returns {Promise<GraphEdge[]>} A promise that resolves to a list of graph edges.
   */
  getEdgesFrom = async (node, cancelToken) => {
    // Ensure node is valid before proceeding
    if (!node || !node.GraphGUID || !node.GUID) {
      throw new Error('Invalid node provided.');
    }

    try {
      return await this._GraphDriver.edgesFromNode(node.GraphGUID, node.GUID, cancelToken);
    } catch (error) {
      LoggerInstance.log(SeverityEnum.Error, 'Error retrieving edges from node:', error);
      throw error; // Re-throw error to handle it upstream
    }
  };

  //endregion
  //endregion
  //region Private-Methods
  /**
   * Initialize the GraphDriver based on the repository type.
   */
  initializeGraphDriver = () => {
    switch (this.GraphRepository.RepositoryType) {
      case GraphRepositoryTypeEnum.LiteGraph:
        this._GraphDriver = new LiteGraphDriver(
          this.GraphRepository.EndpointUrl,
          this.GraphRepository.TenantGUID,
          this.GraphRepository.ApiKey
        );
        break;
      default:
        throw new Error(`Unknown graph repository type '${this.GraphRepository.RepositoryType}'.`);
    }
  };
  /**
   * Check if a node exists based on a given type, key, and value.
   *
   * @param {string} typeVal - The type of the graph node.
   * @param {string} dataKey - The key to search the node by.
   * @param {string} dataVal - The value to search for in the node.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating if the node exists.
   * @throws {Error} If there's an error during the search operation.
   */
  existsInternal = async (typeVal, dataKey, dataVal, cancelToken) => {
    try {
      // Perform the search for the node based on type, key, and value
      LoggerInstance.log(SeverityEnum.Debug, typeVal);
      LoggerInstance.log(SeverityEnum.Debug, dataKey);
      LoggerInstance.log(SeverityEnum.Debug, dataVal);
      const nodes = await this.searchInternalDataKey(typeVal, dataKey, dataVal, cancelToken);
      // Check if the node exists
      return nodes && nodes.length > 0;
    } catch (error) {
      // Log the error and rethrow to be handled by the caller
      LoggerInstance.log(SeverityEnum.Error, 'Error checking if node exists:', error);
      throw error; // Re-throw the error to be handled at a higher level
    }
  };
  /**
   * Check if a node exists based on a given type and dictionary of search criteria.
   *
   * @param {string} typeVal - The type of the graph node.
   * @param {Object} dict - The dictionary containing the key-value pairs to search for.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating if the node exists.
   * @throws {Error} If there's an error during the search operation.
   */
  existsInternalDict = async (typeVal, dict, cancelToken) => {
    try {
      // Perform the search for the node based on the provided dictionary
      const nodes = await this.searchInternal(typeVal, dict, cancelToken);

      // Check if the node exists
      return nodes && nodes.length > 0;
    } catch (error) {
      // Log the error and rethrow to be handled by the caller
      LoggerInstance.log(SeverityEnum.Error, 'Error checking if node exists:', error);
      throw error; // Re-throw the error to be handled at a higher level
    }
  };

  // Function to build the query expression
  buildExpression(typeVal, dataKey, dataVal) {
    // Start with the basic 'Type' equality condition
    let expr = { field: 'Type', operator: OperatorEnum.Equals, value: typeVal };

    // Add the additional condition with AND logic
    if (dataKey && dataVal !== undefined) {
      expr = {
        field: `${expr.field} AND ${dataKey}`,
        operator: OperatorEnum.Equals,
        value: dataVal,
      };
    }
    return expr;
  }

  /**
   * Perform a search for nodes based on a type, key, and value.
   *
   * @param {string} typeVal - The type of the graph node to search for.
   * @param {string} dataKey - The key to search the node by.
   * @param {any} dataVal - The value to search for in the node.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode[]>} A promise that resolves to a list of graph nodes.
   * @throws {Error} If there is an error during the search operation.
   */
  searchInternalDataKey = async (typeVal, dataKey, dataVal, cancelToken) => {
    try {
      // Create the initial expression for the search
      const e = this.buildExpression(typeVal, dataKey, dataVal);

      const nodes = await this._GraphDriver.searchNodes(
        this._GraphRepository.GUID,
        e, // Expression built above
        cancelToken // Cancellation token (AbortController signal)
      );
      return nodes; // Return an empty array if no nodes are found
    } catch (error) {
      // Log and rethrow the error for handling by the caller
      LoggerInstance.log(SeverityEnum.Error, `Error performing search: ${error}`);
    }
  };

  // Helper function to create an expression object
  createExpression(key, operator, value) {
    return { key, operator, value, andConditions: [] };
  }

  // Helper function to add an "AND" condition to the expression
  prependAnd(expression, key, operator, value) {
    expression.andConditions.push({ key, operator, value });
    return expression;
  }

  /**
   * Perform a search for nodes based on a type and a dictionary of search criteria.
   *
   * @param {string} typeVal - The type of the graph node to search for.
   * @param {Object} dict - The dictionary containing key-value pairs to search by.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode[]>} A promise that resolves to a list of graph nodes.
   * @throws {Error} If there is an error during the search operation.
   */
  searchInternal = async (typeVal, dict, cancelToken) => {
    try {
      // Create the initial expression for the search
      let e = this.createExpression('Type', OperatorEnum.Equals, typeVal);

      // Add conditions from the dictionary
      if (dict && Object.keys(dict).length > 0) {
        for (const [key, value] of Object.entries(dict)) {
          e = this.prependAnd(e, key, OperatorEnum.Equals, value);
        }
      }

      // Perform the search using the graph driver
      const nodes = await this._GraphDriver.searchNodes(this._GraphRepository.graphIdentifier, e, cancelToken);

      // Return nodes (ensure an empty array if no nodes are found)
      return nodes || [];
    } catch (error) {
      // Log and rethrow the error for handling by the caller
      LoggerInstance.log(SeverityEnum.Error, 'Error performing search:', error);
      throw error;
    }
  };
  /**
   * Delete an object of a specific type based on its GUID.
   *
   * @param {Object} obj - The object to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise indicating the deletion is complete.
   */
  deleteInternalObj = async (obj, cancelToken) => {
    if (!obj) {
      throw new Error('The provided object is null or undefined.');
    }

    if (obj instanceof TenantMetadata) {
      await this.deleteInternal(this.TENANT_TYPE, this.TENANT_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof StoragePool) {
      await this.deleteInternal(this.POOL_TYPE, this.POOL_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof BucketMetadata) {
      await this.deleteInternal(this.BUCKET_TYPE, this.BUCKET_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof ObjectMetadata) {
      await this.deleteInternal(this.OBJECT_TYPE, this.OBJECT_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof Collection) {
      await this.deleteInternal(this.COLLECTION_TYPE, this.COLLECTION_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof SourceDocument) {
      await this.deleteInternal(this.SOURCEDOC_TYPE, this.SOURCEDOC_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof SemanticCell) {
      await this.deleteInternal(this.SEMCELL_TYPE, this.SEMCELL_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof SemanticChunk) {
      await this.deleteInternal(this.SEMCHUNK_TYPE, this.SEMCHUNK_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof DataRepository) {
      await this.deleteInternal(this.DATAREPOSITORY_TYPE, this.DATAREPOSITORY_GUID, obj.GUID, cancelToken);
    }
  };

  /**
   * Delete an object by its type and GUID.
   *
   * @param {string} objType - The type of the object (e.g., "Tenant", "Bucket").
   * @param {string} objGuidField - The field representing the GUID of the object.
   * @param {string} guid - The GUID of the object to delete.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>} A promise indicating the deletion is complete.
   */
  deleteInternal = async (objType, objGuidField, guid, cancelToken) => {
    if (!objType) {
      throw new Error('The provided object type is null or undefined.');
    }
    if (!objGuidField) {
      throw new Error('The provided object GUID field is null or undefined.');
    }
    if (!guid) {
      throw new Error('The provided GUID is null or undefined.');
    }

    const nodes = await this.searchInternalDataKey(objType, objGuidField, guid, cancelToken);
    if (nodes && nodes.length > 0) {
      for (const node of nodes) {
        await this._GraphDriver.deleteNode(node.GraphGUID, node.GUID, cancelToken);
      }
    }
  };
  /**
   * Read an object based on its type and GUID.
   *
   * @param {Object} obj - The object to read.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode|null>} A promise that resolves to the graph node or null if not found.
   */
  readInternalObj = async (obj, cancelToken) => {
    if (!obj) {
      throw new Error('The provided object is null or undefined.');
    }

    if (obj instanceof TenantMetadata) {
      return await this.readInternal(this.TENANT_TYPE, this.TENANT_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof StoragePool) {
      return await this.readInternal(this.POOL_TYPE, this.POOL_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof BucketMetadata) {
      return await this.readInternal(this.BUCKET_TYPE, this.BUCKET_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof ObjectMetadata) {
      return await this.readInternal(this.OBJECT_TYPE, this.OBJECT_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof Collection) {
      return await this.readInternal(this.COLLECTION_TYPE, this.COLLECTION_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof SourceDocument) {
      return await this.readInternal(this.SOURCEDOC_TYPE, this.SOURCEDOC_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof SemanticCell) {
      return await this.readInternal(this.SEMCELL_TYPE, this.SEMCELL_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof SemanticChunk) {
      return await this.readInternal(this.SEMCHUNK_TYPE, this.SEMCHUNK_GUID, obj.GUID, cancelToken);
    } else if (obj instanceof DataRepository) {
      return await this.readInternal(this.DATAREPOSITORY_TYPE, this.DATAREPOSITORY_GUID, obj.GUID, cancelToken);
    }

    return null;
  };

  /**
   * Read a graph node by its type and GUID.
   *
   * @param {string} objType - The type of the object (e.g., "Tenant", "Bucket").
   * @param {string} objGuidField - The field representing the GUID of the object.
   * @param {string} guid - The GUID of the object to read.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphNode|null>} A promise that resolves to the graph node or null if not found.
   */
  readInternal = async (objType, objGuidField, guid, cancelToken) => {
    if (!guid) {
      return null;
    }

    const nodes = await this.searchInternalDataKey(objType, objGuidField, guid, cancelToken);
    if (nodes && nodes.length === 1) {
      return nodes[0];
    }

    return null;
  };
  /**
   * Insert semantic cells into the graph and establish relationships with parent cells or source documents.
   *
   * @param {Graph} graph - The graph in which to insert the semantic cells.
   * @param {GraphNode} sourceDocumentNode - The source document node.
   * @param {GraphNode} parentCellNode - The parent cell node.
   * @param {SemanticCell[]} cells - List of semantic cells to insert.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<GraphResult>} A promise that resolves to the result of the insertion.
   */
  insertSemanticCellsInternal = async (graph, sourceDocumentNode, parentCellNode, cells, cancelToken) => {
    if (!sourceDocumentNode) throw new Error('Source document node cannot be null.');

    let result = {
      success: true,
      graph: graph,
      semanticCells: [],
      semanticChunks: [],
      edges: [],
      timestamp: { messages: {}, totalMs: 0 },
    };

    if (!cells || cells.length < 1) return result;

    for (let cell of cells) {
      // Insert Cell
      let cellNode = await this.readSemanticCell(cell, cancelToken);
      if (!cellNode) {
        result.timestamp.messages[result.timestamp.totalMs] = `Creating node for semantic cell ${cell.GUID}`;
        cellNode = await this.createSemanticCell(cell, cancelToken);
        if (!cellNode) {
          result.timestamp.messages[result.timestamp.totalMs] = `Failed to create node for semantic cell ${cell.GUID}`;
          result.success = false;
          return result;
        }
      } else {
        result.timestamp.messages[result.timestamp.totalMs] =
          `Re-using semantic cell ${cell.GUID} node ${cellNode.GUID}`;
      }

      result.semanticCells.push(cellNode);

      // Cell-to-Parent or Cell-to-Source-Document
      if (parentCellNode) {
        let edgesCellToParent = await this._GraphDriver.edgesBetweenNodes(
          graph.GUID,
          cellNode.GUID,
          parentCellNode.GUID,
          cancelToken
        );

        if (!edgesCellToParent || edgesCellToParent.length < 1) {
          result.timestamp.messages[result.timestamp.totalMs] =
            `Creating edge from cell ${cellNode.GUID} to parent cell ${parentCellNode.GUID}`;
          let edgeCellParent = await this._GraphDriver.CreateEdge(
            {
              graphGUID: graph.GUID,
              name: 'Semantic cell to parent',
              from: cellNode.GUID,
              to: parentCellNode.GUID,
            },
            cancelToken
          );

          if (!edgeCellParent) {
            result.timestamp.messages[result.timestamp.totalMs] =
              `Failed to create edge from cell ${cellNode.GUID} to parent cell ${parentCellNode.GUID}`;
            result.success = false;
            return result;
          }

          result.edges.push(edgeCellParent);
        } else {
          result.timestamp.messages[result.timestamp.totalMs] =
            `Re-using edge between cell ${cellNode.GUID} and parent cell ${parentCellNode.GUID}`;
          result.edges.push(...edgesCellToParent);
        }
      } else {
        let edgesCellToDoc = await this._GraphDriver.edgesBetweenNodes(
          graph.GUID,
          cellNode.GUID,
          sourceDocumentNode.GUID,
          cancelToken
        );

        if (!edgesCellToDoc || edgesCellToDoc.length < 1) {
          result.timestamp.messages[result.timestamp.totalMs] =
            `Creating edge from cell ${cellNode.GUID} to source document ${sourceDocumentNode.GUID}`;
          let edgeCellDoc = await this._GraphDriver.CreateEdge(
            {
              graphGUID: graph.GUID,
              name: 'Semantic cell to source document',
              from: cellNode.GUID,
              to: sourceDocumentNode.GUID,
            },
            cancelToken
          );

          if (!edgeCellDoc) {
            result.timestamp.messages[result.timestamp.totalMs] =
              `Failed to create edge from cell ${cellNode.GUID} to source document ${sourceDocumentNode.GUID}`;
            result.success = false;
            return result;
          }

          result.edges.push(edgeCellDoc);
        } else {
          result.timestamp.messages[result.timestamp.totalMs] =
            `Re-using edge between cell ${cellNode.GUID} and source document ${sourceDocumentNode.GUID}`;
          result.edges.push(...edgesCellToDoc);
        }
      }

      // Process Chunks
      if (cell.Chunks && cell.Chunks.length > 0) {
        for (let chunk of cell.Chunks) {
          // Insert Chunk
          let chunkNode = await this.readSemanticChunk(chunk, cancelToken);
          if (!chunkNode) {
            result.timestamp.messages[result.timestamp.totalMs] = `Creating node for semantic chunk ${chunk.GUID}`;
            chunkNode = await this.createSemanticChunk(chunk, cancelToken);
            if (!chunkNode) {
              result.timestamp.messages[result.timestamp.totalMs] =
                `Failed to create node for semantic chunk ${chunk.GUID}`;
              result.success = false;
              return result;
            }
          } else {
            result.timestamp.messages[result.timestamp.totalMs] =
              `Re-using semantic chunk ${chunk.GUID} node ${chunkNode.GUID}`;
          }

          result.semanticChunks.push(chunkNode);

          // Chunk-to-Cell
          let edgesChunkToCell = await this._GraphDriver.edgesBetweenNodes(
            graph.GUID,
            chunkNode.GUID,
            cellNode.GUID,
            cancelToken
          );

          if (!edgesChunkToCell || edgesChunkToCell.length < 1) {
            result.timestamp.messages[result.timestamp.totalMs] =
              `Creating edge from chunk ${chunkNode.GUID} to cell ${cellNode.GUID}`;
            let edgeChunkCell = await this._GraphDriver.CreateEdge(
              {
                graphGUID: graph.GUID,
                name: 'Semantic chunk to semantic cell',
                from: chunkNode.GUID,
                to: cellNode.GUID,
              },
              cancelToken
            );

            if (!edgeChunkCell) {
              result.timestamp.messages[result.timestamp.totalMs] =
                `Failed to create edge from chunk ${chunkNode.GUID} to cell ${cellNode.GUID}`;
              result.success = false;
              return result;
            }

            result.edges.push(edgeChunkCell);
          } else {
            result.timestamp.messages[result.timestamp.totalMs] =
              `Re-using edge between chunk ${chunkNode.GUID} and cell ${cellNode.GUID}`;
            result.edges.push(...edgesChunkToCell);
          }
        }
      }

      // Recurse over Children and Merge
      if (cell.Children && cell.Children.length > 0) {
        let childResult = await this.insertSemanticCellsInternal(
          graph,
          sourceDocumentNode,
          cellNode,
          cell.Children,
          cancelToken
        );

        if (!childResult.success) {
          result.timestamp.messages[result.timestamp.totalMs] =
            `Failure reported while processing descendants from cell node ${cellNode.GUID}`;
          result.success = false;
          return result;
        } else {
          Object.assign(result.timestamp.messages, childResult.timestamp.messages);
          result.semanticCells.push(...childResult.semanticCells);
          result.semanticChunks.push(...childResult.semanticChunks);
        }
      }
    }

    return result;
  };
  /**
   * Remove the source document from the graph, including its semantic cells and chunks.
   *
   * @param {GraphNode} sourceDoc - The source document node to remove.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>}
   */
  removeSourceDocumentObj = async (sourceDoc, cancelToken) => {
    if (!sourceDoc) return;

    let parents = await this._GraphDriver.getNodeParents(sourceDoc.GraphGUID, sourceDoc.GUID, cancelToken);
    if (parents && parents.length > 0) {
      for (let parent of parents) {
        if (parent.Data.Type === 'SemanticCell') {
          await this.removeSemanticCell(parent, cancelToken);
        }
      }
    }

    await this._GraphDriver.deleteNode(sourceDoc.GraphGUID, sourceDoc.GUID, cancelToken);
  };

  /**
   * Remove the semantic cell from the graph, including its associated semantic chunks.
   *
   * @param {GraphNode} cell - The semantic cell node to remove.
   * @param {AbortSignal} [cancelToken] - Optional cancellation token to abort the request.
   * @returns {Promise<void>}
   */
  removeSemanticCell = async (cell, cancelToken) => {
    if (!cell) return;

    let parents = await this._GraphDriver.getNodeParents(cell.GraphGUID, cell.GUID, cancelToken);
    if (parents && parents.length > 0) {
      for (let parent of parents) {
        if (parent.Data.Type === 'SemanticChunk') {
          await this._GraphDriver.deleteNode(parent.GraphGUID, parent.GUID, cancelToken);
        }
      }
    }

    await this._GraphDriver.deleteNode(cell.GraphGUID, cell.GUID, cancelToken);
  };

  //endregion
  // Regular expression for validating a GUID (UUID)
  guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

  parseGuid(guid) {
    // Check if the GUID matches the regex
    if (this.guidRegex.test(guid)) {
      // It's a valid GUID, so return it
      return guid;
    } else {
      throw new Error('Invalid GUID format');
    }
  }
}
